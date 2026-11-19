
import * as T from 'three';
import {boxCollider} from './physics.js';
import {labObjectSpawns,labStations} from './lab-layout.js';

export function addLabFixtures(scene,boxes,actions) {
  function addCollider(mesh,half,friction=.85){
    const position=mesh.getWorldPosition(new T.Vector3()),quaternion=mesh.getWorldQuaternion(new T.Quaternion());
    boxes.push({half,min:half.clone().negate(),position,quaternion,mesh:{position,quaternion},shape:boxCollider(half),friction,gravity:1});
  }
  const targets=[], labels=[];
  const cabinet=new T.MeshLambertMaterial({color:'#485d5d',flatShading:true});
  function station([x,z],name,commands){
    // Le pied prolonge le bord inférieur du panneau. Sa collision suit le rectangle visible.
    const foot=new T.Mesh(new T.BoxGeometry(.095,.68,.11),cabinet);
    foot.position.set(x,.34,z+.46);foot.castShadow=foot.receiveShadow=true;scene.add(foot);
    addCollider(foot,new T.Vector3(.0475,.34,.055));

    const panel=new T.Group();
    panel.position.set(x,.85,z+.40);panel.rotation.x=-.35;scene.add(panel);
    const backing=new T.Mesh(new T.BoxGeometry(.64,.36,.055),new T.MeshLambertMaterial({color:'#182831'}));
    panel.add(backing);
    const canvas=document.createElement('canvas');canvas.width=512;canvas.height=96;
    const ctx=canvas.getContext('2d'),texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;
    const badge=new T.Mesh(new T.PlaneGeometry(.61,.095),new T.MeshBasicMaterial({map:texture}));
    badge.position.set(0,.116,.030);panel.add(badge);
    const keyWidth=.592/commands.length;
    const keys=commands.map(([label,action],i)=>{
      const key=new T.Mesh(new T.BoxGeometry(keyWidth-.012,.155,.040),new T.MeshLambertMaterial({color:'#478086'}));
      key.position.set(-.296+keyWidth*(i+.5),-.045,.046);
      panel.add(key);targets.push(key);
      key.userData.touchWidth=keyWidth-.012;
      const c=document.createElement('canvas');c.width=208;c.height=172;
      const labelTexture=new T.CanvasTexture(c);labelTexture.colorSpace=T.SRGBColorSpace;
      const legend=new T.Mesh(new T.PlaneGeometry(keyWidth-.017,.139),new T.MeshBasicMaterial({map:labelTexture}));
      legend.position.z=.0205;key.add(legend);
      let lastPress=-Infinity;
      key.userData.action=()=>{
        const now=performance.now();
        if(now-lastPress<250)return;
        lastPress=now;
        action();redraw();key.position.z=.036;
        setTimeout(()=>{key.position.z=.046;},115);
      };
      return {label,context:c.getContext('2d'),texture:labelTexture};
    });
    function draw(){
      ctx.fillStyle='#182831';ctx.fillRect(0,0,512,96);
      ctx.fillStyle='#ffe1a0';ctx.font='bold 38px system-ui';ctx.fillText(name,17,62,478);
      for(const key of keys){
        const c=key.context;
        c.fillStyle='#386269';c.fillRect(0,0,208,172);
        c.fillStyle='#fff2d5';c.textAlign='center';c.font='bold 27px system-ui';
        const words=(typeof key.label==='function'?key.label():key.label).split('|');
        words.forEach((word,j)=>c.fillText(word,104,(words.length>1?68:97)+j*37,188));
        key.texture.needsUpdate=true;
      }
      texture.needsUpdate=true;
    }
    labels.push(draw);

  }
  function redraw(){for(const draw of labels)draw();}
  station(labStations.objects,'BANQUE D’OBJETS',[
    ['Cube',()=>actions.spawn(0,labObjectSpawns[0])],['Boule',()=>actions.spawn(1,labObjectSpawns[0])],['Tétraèdre',()=>actions.spawn(2,labObjectSpawns[0])],['Vider',actions.clear],
  ]);
  station(labStations.largeObjects,'GROS OBJETS',[[ 'Rectangle',()=>actions.spawn(4,labObjectSpawns[1]) ],[ 'Sphère',()=>actions.spawn(5,labObjectSpawns[1]) ]]);
  station(labStations.rendering,'RENDU',[
    [()=>('Qualité|'+actions.quality()),actions.qualityNext],
    [()=>('Résolution XR|'+actions.resolution()),actions.resolutionNext],
    [()=>('Textures|'+actions.textureSize()),actions.textureNext],
  ]);
  station(labStations.course,'PARCOURS',[
    ['Retour|départ',actions.resetPlayer],['Remettre|objets',actions.resetObjects],['Hitboxes|Low / High',actions.hitbox],['Appuis|On / Off',actions.movement],
  ]);
  redraw();
  return {targets,redraw};
}





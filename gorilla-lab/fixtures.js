
import * as T from 'three';
import {boxCollider} from './physics.js';
import {labObjectSpawns,labStations,labTarget} from './lab-layout.js';

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
  const target=new T.Group();target.userData.editorAssetId='range-target';
  const {x:targetX,y:targetY,z:targetZ}=labTarget;
  target.position.set(targetX,targetY,targetZ);scene.add(target);
  const bullseyePalette=['#e2ad5c','#ca664b','#f5e5bd'];
  for(let i=0;i<3;i++){
    const radius=[.90,.58,.27][i];
    const ring=new T.Mesh(new T.CircleGeometry(radius,20),new T.MeshLambertMaterial({color:bullseyePalette[i],side:T.DoubleSide}));
    ring.position.z=i*.012;target.add(ring);
  }
  const targetPost=new T.Mesh(new T.BoxGeometry(.14,1.5,.14),cabinet);
  targetPost.position.set(0,.75-targetY,-.11);target.add(targetPost);
  let score=0;
  const scoreCanvas=document.createElement('canvas');scoreCanvas.width=256;scoreCanvas.height=64;
  const scoreCtx=scoreCanvas.getContext('2d'),scoreTexture=new T.CanvasTexture(scoreCanvas);
  scoreTexture.colorSpace=T.SRGBColorSpace;
  const scoreSign=new T.Mesh(new T.PlaneGeometry(1.4,.35),new T.MeshBasicMaterial({map:scoreTexture,side:T.DoubleSide}));
  scoreSign.position.set(0,2.64-targetY,.02);target.add(scoreSign);
  function drawScore(){
    scoreCtx.fillStyle='#182831';scoreCtx.fillRect(0,0,256,64);
    scoreCtx.textAlign='center';scoreCtx.font='bold 28px system-ui';scoreCtx.fillStyle='#fff0ce';
    scoreCtx.fillText('CIBLE  ·  '+score,128,42);scoreTexture.needsUpdate=true;
  }
  // Compare les deux positions qui encadrent le pas physique pour trouver le passage dans la cible.
  const fallbackTarget={
    position:new T.Vector3(targetX,targetY,targetZ),right:new T.Vector3(1,0,0),
    up:new T.Vector3(0,1,0),normal:new T.Vector3(0,0,1),scaleX:1,scaleY:1,
  };
  function updateTarget(objects,frame=null){
    const targetFrame=frame??fallbackTarget;
    const {position,right,up,normal}=targetFrame;
    const scaleX=Math.max(.0001,targetFrame.scaleX??1),scaleY=Math.max(.0001,targetFrame.scaleY??1);
    for(const item of objects){
      if(!item.beforePhysics||item.owner||item.frozen||!item.mesh.visible)continue;
      const a=item.beforePhysics,b=item.mesh.position;
      const ax=(a.x-position.x)*normal.x+(a.y-position.y)*normal.y+(a.z-position.z)*normal.z;
      const bx=(b.x-position.x)*normal.x+(b.y-position.y)*normal.y+(b.z-position.z)*normal.z;
      if(ax<=0||bx>0||item.velocity.dot(normal)>=-1)continue;
      const t=ax/(ax-bx);
      const hitX=T.MathUtils.lerp(a.x,b.x,t)-position.x;
      const hitY=T.MathUtils.lerp(a.y,b.y,t)-position.y;
      const hitZ=T.MathUtils.lerp(a.z,b.z,t)-position.z;
      const localX=(hitX*right.x+hitY*right.y+hitZ*right.z)/scaleX;
      const localY=(hitX*up.x+hitY*up.y+hitZ*up.z)/scaleY;
      const range=Math.hypot(localX,localY);
      const objectRadius=item.radius/Math.sqrt(scaleX*scaleY);
      if(range<=.9+objectRadius*.45){
        score+=range<.27?3:range<.58?2:1;
        drawScore();
      }
    }
  }
  drawScore();
  return {targets,target,redraw,updateTarget,score:()=>score,setScore(value){score=value;drawScore();}};
}






import * as T from 'three';
import {boxCollider} from './physics.js';

export function addLabFixtures(scene,boxes,actions) {
  const bark=new T.MeshLambertMaterial({color:0xffffff,vertexColors:true,flatShading:true});
  const trunkGeo=new T.CylinderGeometry(.16,.25,3.15,9,12);
  const positions=trunkGeo.attributes.position;
  const color=new T.Color(), trunkColors=[];
  for(let i=0;i<positions.count;i++){
    const ring=Math.round((positions.getY(i)+1.575)/3.15*12);
    const facet=Math.floor((Math.atan2(positions.getX(i),positions.getZ(i))+Math.PI)*1.43);
    color.setHSL(.084+ring*.002,.35,.35+(ring%3)*.032+(facet%3)*.018);
    trunkColors.push(color.r,color.g,color.b);
  }
  trunkGeo.setAttribute('color',new T.Float32BufferAttribute(trunkColors,3));
  const tree=new T.Group();tree.position.set(4.4,0,-9.2);
  tree.rotation.z=-.14;scene.add(tree);
  const trunk=new T.Mesh(trunkGeo,bark);
  trunk.position.y=1.575;trunk.castShadow=trunk.receiveShadow=true;tree.add(trunk);
  tree.updateMatrixWorld(true);
  function addCollider(mesh,half,friction=.85){
    const position=mesh.getWorldPosition(new T.Vector3()),quaternion=mesh.getWorldQuaternion(new T.Quaternion());
    boxes.push({half,min:half.clone().negate(),position,quaternion,mesh:{position,quaternion},shape:boxCollider(half),friction,gravity:1});
  }
  for(let i=0;i<4;i++) {
    const proxy=new T.Object3D();proxy.position.y=(i+.5)*3.15/4;tree.add(proxy);
    const width=.237-i*.022;
    addCollider(proxy,new T.Vector3(width,.398,width));
  }
  const leafVertices=[],leafColors=[];
  const crown=3.14;
  function triangle(a,b,c,shade){
    leafVertices.push(...a,...b,...c);
    color.setHSL(.25+shade*.043,.54,.28+shade*.17);
    for(let i=0;i<3;i++)leafColors.push(color.r,color.g,color.b);
  }
  for(let i=0;i<10;i++){
    const a=i*2.39996,len=1.35+(i%4)*.20;
    function leaf(t,w){
      const span=t*len;
      return [Math.cos(a)*span-Math.sin(a)*w,crown+Math.sin(t*Math.PI)*.38-t*t*.54+(i%3)*.055,Math.sin(a)*span+Math.cos(a)*w];
    }
    for(let segment=0;segment<7;segment++){
      const t=segment/7,u=(segment+1)/7,w=.285*Math.sin(Math.PI*t)**.7,v=.285*Math.sin(Math.PI*u)**.7;
      for(const side of [-1,1]){
        const edge=leaf(t,w*side),next=leaf(u,v*side);
        edge[1]-=.065;next[1]-=.065;
        triangle(leaf(t,0),edge,next,.31+(segment%4)*.14);
        triangle(leaf(t,0),next,leaf(u,0),.47+(i%3)*.16);
      }
    }
  }
  const fronds=new T.BufferGeometry();
  fronds.setAttribute('position',new T.Float32BufferAttribute(leafVertices,3));
  fronds.setAttribute('color',new T.Float32BufferAttribute(leafColors,3));
  fronds.computeVertexNormals();
  const leaves=new T.Mesh(fronds,new T.MeshLambertMaterial({vertexColors:true,side:T.DoubleSide,flatShading:true}));
  leaves.castShadow=true;tree.add(leaves);
  const shell=new T.MeshStandardMaterial({color:'#956238',roughness:.92,flatShading:true});
  const coconuts=[];
  for(let i=0;i<5;i++){
    const a=i*Math.PI*2/5;
    const mesh=new T.Mesh(new T.IcosahedronGeometry(.124,1),shell);
    mesh.position.set(Math.cos(a)*(.25+(i%2)*.10),2.88+(i%3)*.06,Math.sin(a)*(.25+(i%2)*.10));
    mesh.scale.set(.91,1.16,.91);mesh.castShadow=true;tree.add(mesh);
    coconuts.push(mesh);
  }
  tree.updateMatrixWorld(true);
  const targets=[], labels=[];
  const cabinet=new T.MeshLambertMaterial({color:'#485d5d',flatShading:true});
  function station(x,z,name,commands){
    const base=new T.Mesh(new T.BoxGeometry(1.72,.91,.57),cabinet);
    base.position.set(x,.455,z);base.castShadow=base.receiveShadow=true;scene.add(base);
    addCollider(base,new T.Vector3(.86,.455,.285));

    const panel=new T.Group();
    panel.position.set(x,1.10,z+.40);panel.rotation.x=-.35;scene.add(panel);
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
  station(-3,1.5,'BANQUE D’OBJETS',[
    ['Cube',()=>actions.spawn(0)],['Boule',()=>actions.spawn(1)],['Tétraèdre',()=>actions.spawn(2)],['Vider',actions.clear],
  ]);
  station(-5.1,1.5,'GROS OBJETS',[[ 'Rectangle',()=>actions.spawn(4) ],[ 'Sphère',()=>actions.spawn(5) ]]);
  station(3.2,1.5,'RENDU',[
    [()=>('Qualité|'+actions.quality()),actions.qualityNext],
    [()=>('Résolution XR|'+actions.resolution()),actions.resolutionNext],
    [()=>('Textures|'+actions.textureSize()),actions.textureNext],
  ]);
  station(-4.5,-18.5,'PARCOURS',[
    ['Retour|départ',actions.resetPlayer],['Remettre|objets',actions.resetObjects],['Hitboxes|Low / High',actions.hitbox],['Appuis|On / Off',actions.movement],
  ]);
  station(5.9,-8.0,'COCOTIER',[
    ['Remettre|les cocos',actions.resetTree],['Vider|les objets',actions.clear],
  ]);
  redraw();
  const target=new T.Group();
  target.position.set(16,1.52,-12);scene.add(target);
  const bullseyePalette=['#e2ad5c','#ca664b','#f5e5bd'];
  for(let i=0;i<3;i++){
    const radius=[.90,.58,.27][i];
    const ring=new T.Mesh(new T.CircleGeometry(radius,20),new T.MeshLambertMaterial({color:bullseyePalette[i],side:T.DoubleSide}));
    ring.position.z=i*.012;target.add(ring);
  }
  const targetPost=new T.Mesh(new T.BoxGeometry(.14,1.5,.14),cabinet);
  targetPost.position.set(16,.75,-12.11);scene.add(targetPost);
  let score=0;
  const scoreCanvas=document.createElement('canvas');scoreCanvas.width=256;scoreCanvas.height=64;
  const scoreCtx=scoreCanvas.getContext('2d'),scoreTexture=new T.CanvasTexture(scoreCanvas);
  scoreTexture.colorSpace=T.SRGBColorSpace;
  const scoreSign=new T.Mesh(new T.PlaneGeometry(1.4,.35),new T.MeshBasicMaterial({map:scoreTexture,side:T.DoubleSide}));
  scoreSign.position.set(16,2.64,-11.98);scene.add(scoreSign);
  function drawScore(){
    scoreCtx.fillStyle='#182831';scoreCtx.fillRect(0,0,256,64);
    scoreCtx.textAlign='center';scoreCtx.font='bold 28px system-ui';scoreCtx.fillStyle='#fff0ce';
    scoreCtx.fillText('CIBLE  ·  '+score,128,42);scoreTexture.needsUpdate=true;
  }
  function updateTarget(objects){
    for(const item of objects){
      if(!item.beforePhysics||item.owner||item.frozen||!item.mesh.visible)continue;
      const a=item.beforePhysics,b=item.mesh.position;
      if(a.z<=-12||b.z>-12||item.velocity.z>=-1)continue;
      const t=(a.z+12)/(a.z-b.z);
      const range=Math.hypot(T.MathUtils.lerp(a.x,b.x,t)-16,T.MathUtils.lerp(a.y,b.y,t)-1.52);
      if(range<=.9+item.radius*.45){
        score+=range<.27?3:range<.58?2:1;
        drawScore();
      }
    }
  }
  drawScore();
  return {targets,coconuts,redraw,updateTarget,score:()=>score};
}




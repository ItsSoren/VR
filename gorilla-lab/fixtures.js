
import * as T from 'three';
import {boxCollider} from './physics.js';
import {labObjectSpawns,labStations,labTarget,labTree} from './lab-layout.js';

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
  const tree=new T.Group();tree.userData.editorAssetId='palm-tree';tree.position.set(labTree.x,0,labTree.z);
  tree.rotation.z=-.14;scene.add(tree);
  const trunk=new T.Mesh(trunkGeo,bark);
  trunk.position.y=1.575;trunk.castShadow=trunk.receiveShadow=true;tree.add(trunk);
  tree.updateMatrixWorld(true);
  function addCollider(mesh,half,friction=.85,editorAssetId=null){
    const position=mesh.getWorldPosition(new T.Vector3()),quaternion=mesh.getWorldQuaternion(new T.Quaternion());
    boxes.push({half,min:half.clone().negate(),position,quaternion,mesh:{position,quaternion},shape:boxCollider(half),friction,gravity:1});
  }
  for(let i=0;i<4;i++) {
    const proxy=new T.Object3D();proxy.position.y=(i+.5)*3.15/4;tree.add(proxy);
    const width=.237-i*.022;
    addCollider(proxy,new T.Vector3(width,.398,width),.85,'palm-tree');
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
    mesh.userData.editorFixtureCoconut=true;
    mesh.position.set(Math.cos(a)*(.25+(i%2)*.10),2.88+(i%3)*.06,Math.sin(a)*(.25+(i%2)*.10));
    mesh.scale.set(.91,1.16,.91);mesh.castShadow=true;tree.add(mesh);
    coconuts.push(mesh);
  }
  tree.updateMatrixWorld(true);
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
  station(labStations.coconuts,'COCOTIER',[
    ['Remettre|les cocos',actions.resetTree],['Vider|les objets',actions.clear],
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
  return {targets,coconuts,tree,target,redraw,updateTarget,score:()=>score,setScore(value){score=value;drawScore();}};
}




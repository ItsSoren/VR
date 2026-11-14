
import * as T from 'three';
import { buildArena } from './arena.js';
import { solve,handContact,solveObjects } from './physics.js';

let gameCanvas=document.getElementById('game');
if(!(gameCanvas instanceof HTMLCanvasElement)) {
  gameCanvas=document.createElement('canvas');
  gameCanvas.id='game';
  gameCanvas.setAttribute('aria-label','Arène Gorilla Lab');
  document.body.prepend(gameCanvas);
}
let renderer;
try {
  renderer=new T.WebGLRenderer({canvas:gameCanvas,antialias:true,powerPreference:'high-performance'});
} catch (error) {
  document.getElementById('status').textContent='WebGL 2 indisponible : '+error.message;
  throw error;
}
renderer.xr.enabled=true;
renderer.xr.setReferenceSpaceType('local-floor');
renderer.shadowMap.type=T.PCFShadowMap;
renderer.toneMapping=T.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.15;
const scene=new T.Scene();
scene.fog=new T.Fog('#a6d4ea',55,135);
const rig=new T.Group(), eye=new T.Group();
const camera=new T.PerspectiveCamera(70,1,.065,210);
rig.add(eye);eye.add(camera);scene.add(rig);
const arena=buildArena(scene,renderer);
const settings={
  grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,quality:7,auto:true,resolution:7,texturePower:7,focus:false,focusStrength:5,focusSize:5,
  movement:true,collisions:true,objects:true,body:true,hands:true,textures:true,reflections:true,shadows:true,bloom:true,
};
const defaults={...settings};
const boot=new T.Vector3(0,0,3);
rig.position.copy(boot);
const velocity=new T.Vector3();
const soft=new T.Vector3(), delta=new T.Vector3(), worldHead=new T.Vector3(), rotated=new T.Vector3(), head=new T.Vector3();
const point=new T.Vector3(), prior=new T.Vector3(), candidate=new T.Vector3(), scratch=new T.Vector3();
const up=new T.Vector3(0,1,0), spin=new T.Quaternion(), normal=new T.Vector3();
let yaw=0,pitch=0, drop=0, snap=false, frameTime=0,fps=0,windowFrames=0,windowElapsed=0,qualityTimer=0,lowCount=0,highCount=0,liveLevel=7,refreshRate=72;
let menu=false,page=0,hudDirty=true,lastDraw=0;
let blocked=[],activeBoxes=arena.boxes;
const geometry=new T.IcosahedronGeometry(1,0);
const white=new T.MeshLambertMaterial({color:'#fffdf4',flatShading:true});
const fur=new T.MeshLambertMaterial({color:'#6c5746',flatShading:true});
const chestMaterial=new T.MeshLambertMaterial({color:'#a7896a',flatShading:true});
function shape(parent,material,x,y,z,sx,sy,sz) {
  const m=new T.Mesh(geometry,material);
  m.position.set(x,y,z);m.scale.set(sx,sy,sz);
  parent.add(m);m.castShadow=true;return m;
}
const monkey=new T.Group();
scene.add(monkey);
shape(monkey,fur,0,.43,.105,.30,.43,.23);
shape(monkey,chestMaterial,0,.49,-.06,.204,.26,.095);
shape(monkey,fur,-.17,.08,.095,.12,.16,.17);
shape(monkey,fur,.17,.08,.095,.12,.16,.17);
const hands=['left','right'].map(side=>{
  const mesh=shape(scene,white,0,0,0,.072,.072,.072);
  mesh.visible=false;
  return {side,mesh,anchor:new T.Vector3(),last:new T.Vector3(),target:new T.Vector3(),previous:new T.Vector3(),speed:new T.Vector3(),valid:false,surface:null,held:null,grip:false,trigger:false,menu:false};
});
const objectSpecs=[
  [new T.BoxGeometry(.33,.33,.33),'#b76b50',.27,1.35,[-.84,.32,1.15]],
  [new T.IcosahedronGeometry(.225,1),'#73afcb',.22,.85,[0,.28,1.15]],
  [new T.TetrahedronGeometry(.29),'#d8ae53',.265,1.0,[.84,.33,1.15]],
];
const objects=objectSpecs.map(([geo,color,radius,mass,start])=>{
  const mesh=new T.Mesh(geo,new T.MeshStandardMaterial({color,roughness:.44,metalness:.10,flatShading:true}));
  mesh.castShadow=true;mesh.receiveShadow=true;scene.add(mesh);
  return {mesh,radius,mass,start:new T.Vector3(...start),owner:null,velocity:new T.Vector3(),spin:0,axis:new T.Vector3(0,1,0),shadow:arena.shadow(radius)};
});
function release(hand,launch=true) {
  const object=hand.held;
  if(!object) return;
  object.owner=null;hand.held=null;
  object.velocity.copy(hand.speed).multiplyScalar(launch? .55+settings.throw*.12:0).clampLength(0,23);
  object.spin=launch?Math.min(22,object.velocity.length()*3):0;
  object.axis.copy(up).cross(object.velocity).normalize();
  if(object.axis.lengthSq()<.01) object.axis.set(1,0,0);
}
function resetObjects(){
  for(const hand of hands) release(hand,false);
  for(const object of objects){
    object.mesh.position.copy(object.start);object.mesh.quaternion.identity();object.velocity.set(0,0,0);object.spin=0;
  }
}
function resetPlayer(){
  rig.position.copy(boot);yaw=pitch=0;rig.rotation.y=0;velocity.set(0,0,0);snap=false;
  for(const hand of hands){hand.valid=false;hand.surface=null;release(hand,false);}
}
resetObjects();
function applyVisual(){
  arena.visual(liveLevel,settings.shadows,settings.reflections,settings.bloom,settings.textures,2**(settings.texturePower-1));
  arena.focus(settings.focus,settings.focusStrength,settings.focusSize);
  renderer.xr.setFoveation(T.MathUtils.clamp(1.16-liveLevel*.105,.12,1));
  if(!renderer.xr.isPresenting) resize();
  hudDirty=true;
}
function resize(){
  if(renderer.xr.isPresenting) return;
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.75)*(.53+liveLevel*.047));
  renderer.setSize(innerWidth,innerHeight,false);
  camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();
}
addEventListener('resize',resize);

const sections=[
  ['Locomotion',[
    ['Appuis Gorilla','movement'],['Collisions','collisions'],['Grip','grip'],['Glissement','slide'],
    ['Gravité','gravity'],['Impulsion','jump'],['Poids','weight'],['Taille','size'],['Longueur des bras','arms'],
    ['Retour au départ',resetPlayer],
  ]],
  ['Objets',[
    ['Objets actifs','objects'],['Rebond','bounce'],['Force du lancer','throw'],['Réinitialiser les objets',resetObjects],
  ]],
  ['Rendu',[
    ['Qualité automatique','auto'],['Qualité manuelle','quality'],['Résolution XR¹','resolution'],
    ['Textures','textures'],['Taille textures','texturePower'],['Reflets','reflections'],['Ombres','shadows'],['Bloom du soleil','bloom'],
    ['Corps du singe','body'],['Mains','hands'],
  ]],
];
sections.push(['Focus',[['Activer le focus','focus'],['Intensité','focusStrength'],['Taille de la zone nette','focusSize']]]);
const title=document.querySelector('#section'), desktop=document.querySelector('#settings');
const readings=document.querySelector('#readings');
function change(key,step){
  if(typeof settings[key]==='boolean') settings[key]=!settings[key];
  else settings[key]=T.MathUtils.clamp(settings[key]+step,1,10);
  if(key==='quality'){settings.auto=false;liveLevel=settings.quality;}
  if(key==='auto'&&!settings.auto) liveLevel=settings.quality;
  if(key==='movement'||key==='collisions') for(const h of hands) h.surface=null;
  if(key==='objects'&&!settings.objects) resetObjects();
  applyVisual();
}
function restore(){
  for(const [,key] of sections[page][1]) if(typeof key==='string') settings[key]=defaults[key];
  if(page===0) resetPlayer();
  if(page===1) resetObjects();
  if(page===2) liveLevel=settings.quality;
  applyVisual();
}
function button(text,action){
  const b=document.createElement('button');b.textContent=text;
  b.onclick=()=>{action();desktopMenu();hudDirty=true;};return b;
}
function settingValue(key){return key==="texturePower"?[2**(settings[key]-1),2**(settings[key]-1)].join("×"):settings[key];}
function desktopMenu(){
  title.textContent=sections[page][0];
  desktop.replaceChildren();
  for(const [name,key] of sections[page][1]){
    const row=document.createElement('div');row.className='setting';row.append(name);
    const controls=document.createElement('span');
    if(typeof key==='function') controls.append(button('↺',key));
    else if(typeof settings[key]==='boolean') controls.append(button(settings[key]?'Actif':'Coupé',()=>change(key,1)));
    else controls.append(button('−',()=>change(key,-1)),document.createTextNode(' '+settingValue(key)+' '),button('+',()=>change(key,1)));
    row.append(controls);desktop.append(row);
  }
}
document.querySelectorAll('[data-page]').forEach((b,i)=>b.onclick=()=>{page=i;desktopMenu();hudDirty=true;});
document.querySelector('#restore').onclick=()=>{restore();desktopMenu();};
desktopMenu();
function display(w,h,width,height,parent){
  const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;
  const ctx=canvas.getContext('2d');
  const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;
  const mesh=new T.Mesh(new T.PlaneGeometry(width,height),new T.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false,toneMapped:false}));
  parent.add(mesh);mesh.renderOrder=5;return {ctx,texture,mesh,w,h};
}
const panel=display(640,652,1.07,1.09,scene);
panel.mesh.visible=false;
const wrist=display(416,84,.32,.065,scene);
wrist.mesh.visible=false;
const ray=new T.Raycaster(), raySource=new T.Vector3(), forward=new T.Vector3();
const cursor=shape(scene,new T.MeshBasicMaterial({color:'#f5dfa0'}),0,0,0,.009,.009,.009);
cursor.visible=false;
let hitAreas=[];
function drawPanel(){
  const c=panel.ctx;hitAreas=[];
  c.clearRect(0,0,640,652);c.fillStyle='#182632';c.fillRect(0,0,640,652);
  c.font='bold 30px system-ui';c.fillStyle='#fff0cf';c.fillText('GORILLA LAB',25,42);
  c.font='20px system-ui';c.fillText(fps+' FPS   ·   Q '+liveLevel+'/10   ·   '+(settings.auto?'AUTO':'MANUEL'),390,40);
  function item(x,y,w,h,label,action,color='#344b59'){
    c.fillStyle=color;c.fillRect(x,y,w,h);c.fillStyle='#fff4dc';c.font='21px system-ui';
    c.textAlign='center';c.fillText(label,x+w/2,y+h/2+7);c.textAlign='left';
    hitAreas.push({x,y,w,h,action});
  }
  sections.forEach(([name],i)=>item(25+i*150,61,140,44,name,()=>page=i,page===i?'#68705a':'#334b58'));
  sections[page][1].forEach(([name,key],i)=>{
    const y=119+i*44;
    c.fillStyle='#e9e5ce';c.font='22px system-ui';c.fillText(name,30,y+26);
    if(typeof key==='function') item(438,y,174,36,'Réinitialiser',key);
    else if(typeof settings[key]==='boolean') item(438,y,174,36,settings[key]?'Actif':'Coupé',()=>change(key,1));
    else {
      item(438,y,46,36,'−',()=>change(key,-1));
      c.textAlign='center';c.fillText(String(settingValue(key)),525,y+26);c.textAlign='left';
      item(566,y,46,36,'+',()=>change(key,1));
    }
  });
  item(25,579,286,44,'Réglages par défaut',restore);
  item(325,579,287,44,'Fermer',()=>menu=false);
  c.fillStyle='#c4d5d8';c.font='17px system-ui';c.fillText('Gâchette : choisir  ·  B/Y : panneau  ·  ¹ Prochaine session VR',25,645);
  panel.texture.needsUpdate=true;
}
function setMenu(){
  menu=!menu;
  if(!menu) return;
  camera.getWorldPosition(point);camera.getWorldDirection(forward);
  forward.y=0;
  if(forward.lengthSq()<.01) forward.set(0,0,-1);
  forward.normalize();
  panel.mesh.position.copy(point).addScaledVector(forward,1.35);
  panel.mesh.lookAt(point);
  panel.mesh.updateMatrixWorld(true);hudDirty=true;
}
function aim(frame,space,input,trig){
  const pose=frame.getPose(input.targetRaySpace,space);
  if(!pose) return;
  const p=pose.transform.position,q=pose.transform.orientation;
  raySource.set(p.x,p.y-drop,p.z).applyAxisAngle(up,yaw).add(rig.position);
  spin.set(q.x,q.y,q.z,q.w);
  forward.set(0,0,-1).applyQuaternion(spin).applyAxisAngle(up,yaw);
  ray.set(raySource,forward);
  const hit=ray.intersectObject(panel.mesh)[0];
  if(!hit) return;
  cursor.visible=true;cursor.position.copy(hit.point).addScaledVector(forward,-.012);
  if(trig){
    const x=hit.uv.x*640,y=(1-hit.uv.y)*652;
    hitAreas.find(b=>x>=b.x&&x<=b.x+b.w&&y>=b.y&&y<=b.y+b.h)?.action();
    hudDirty=true;
  }
}
const keys=new Set();
addEventListener('keydown',e=>{if(e.target.closest?.('button,select,input'))return;keys.add(e.code);if(e.code==='KeyR')resetPlayer();});
addEventListener('keyup',e=>keys.delete(e.code));
addEventListener('blur',()=>keys.clear());
const canvas=renderer.domElement;
let looking=false;
canvas.onpointerdown=e=>{looking=true;canvas.setPointerCapture(e.pointerId);};
canvas.onlostpointercapture=()=>looking=false;
canvas.onpointermove=e=>{
  if(!looking||renderer.xr.isPresenting)return;
  yaw-=e.movementX*.004;
  pitch=T.MathUtils.clamp(pitch-e.movementY*.004,-1.4,1.4);
};
canvas.ondblclick=()=>{
  if(renderer.xr.isPresenting||!settings.objects) return;
  camera.getWorldDirection(forward);camera.getWorldPosition(point);
  const nearest=objects.filter(o=>o.mesh.position.distanceTo(point)<3).sort((a,b)=>a.mesh.position.distanceTo(point)-b.mesh.position.distanceTo(point))[0];
  if(nearest) nearest.velocity.copy(forward).multiplyScalar(3+settings.throw).y+=2;
};
const enter=document.querySelector('#vr');
navigator.xr?.isSessionSupported('immersive-vr').then(ok=>{
  enter.disabled=!ok;
  if(ok) document.querySelector('#status').textContent='WebXR prêt';
}).catch(()=>{});
enter.onclick=async()=>{
  let session;
  try{
    enter.disabled=true;
    session=await navigator.xr.requestSession('immersive-vr',{requiredFeatures:['local-floor']});
    renderer.xr.setFramebufferScaleFactor(.45+settings.resolution*.055);
    await renderer.xr.setSession(session);
    refreshRate=session.frameRate||72;
    drop=NaN;resetPlayer();applyVisual();
    document.body.classList.add('immersive');
  }catch(error){
    if(session) await session.end().catch(()=>{});
    enter.disabled=false;document.querySelector('#status').textContent=error.message;
  }
};
renderer.xr.addEventListener('sessionend',()=>{
  enter.disabled=false;menu=false;panel.mesh.visible=false;wrist.mesh.visible=false;
  document.body.classList.remove('immersive');resetPlayer();resize();
});

function surfaceAt(p){
  return arena.boxes.slice(0,3).find(b=>Math.abs(p.x-b.position.x)<b.half.x&&Math.abs(p.z-b.position.z)<b.half.z);
}
function trackHands(frame,space,dt){
  delta.set(0,0,0);
  let count=0;
  const inputs=[...frame.session.inputSources];
  for(const h of hands){
    const source=inputs.find(s=>s.handedness===h.side&&s.gripSpace);
    const pose=source&&frame.getPose(source.gripSpace,space);
    h.mesh.visible=Boolean(pose)&&settings.hands;
    if(!pose){h.valid=false;h.surface=null;release(h,false);continue;}
    const p=pose.transform.position;
    candidate.set(p.x,p.y-drop,p.z);
    scratch.subVectors(candidate,head).clampLength(0,.58+settings.arms*.088);
    h.target.copy(head).add(scratch).applyAxisAngle(up,yaw).add(rig.position);
    const wasValid=h.valid;
    if(!wasValid){h.last.copy(h.target);h.previous.copy(h.target);h.speed.set(0,0,0);}
    h.valid=true;
    h.speed.lerp(scratch.subVectors(h.target,h.previous).multiplyScalar(1/Math.max(.006,dt)).clampLength(0,18),.55);
    h.previous.copy(h.target);
    h.surface=null;
    const grip=Boolean(source.gamepad?.buttons[1]?.pressed);
    if(!menu&&grip&&!h.grip&&settings.objects){
      const body=objects.find(o=>!o.owner&&o.mesh.position.distanceTo(h.target)<o.radius+.16);
      if(body){h.held=body;body.owner=h;body.velocity.set(0,0,0);}
    }
    if(!grip&&h.grip)release(h,!menu);
    h.grip=grip;
    if(h.held){
      h.held.mesh.position.copy(h.target);
      solve(h.held.mesh.position,h.held.radius,activeBoxes);
      const q=pose.transform.orientation;
      h.held.mesh.quaternion.set(q.x,q.y,q.z,q.w).premultiply(spin.setFromAxisAngle(up,yaw));
      h.held.velocity.copy(h.speed);
    }
    if(!menu&&settings.movement&&!h.held){
      h.surface=handContact(h.last,h.target,.074,activeBoxes,h.anchor,normal);
      if(h.surface){
        const friction= h.surface.friction*(.22+settings.grip*.135);
        correction(h,friction);
        count++;
      }
    }
    h.last.copy(h.surface?h.anchor:h.target);
    const btn=Boolean(source.gamepad?.buttons[5]?.pressed||source.gamepad?.buttons[3]?.pressed&&h.side==='left');
    if(btn&&!h.menu)setMenu();
    h.menu=btn;
    const trigger=Boolean(source.gamepad?.buttons[0]?.pressed);
    if(menu)aim(frame,space,source,trigger&&!h.trigger);
    h.trigger=trigger;
  }
  return count;
}
function correction(hand,friction){
  soft.subVectors(hand.anchor,hand.target);
  const slide=1-settings.slide*.057;
  // Keep the normal reaction on ice and reduce tangential force.
  const v=soft.dot(normal);
  soft.multiplyScalar(T.MathUtils.clamp(friction*slide,0,1)).addScaledVector(normal,v*(1-T.MathUtils.clamp(friction*slide,0,1)));
  // Tangential drag requires an anchored hand while it is pressed into the surface.
  if(Math.abs(normal.y)>.6&&friction>.12){
    scratch.subVectors(hand.last,hand.target);scratch.y=0;
    soft.addScaledVector(scratch,Math.min(.78,friction*slide));
  }
  delta.add(soft);
}
function character(frame,space,pose,dt){
  const inVR=Boolean(pose);
  const targetEye=.43+settings.size*.088;
  if(inVR){
    const p=pose.transform.position;
    if(!Number.isFinite(drop))drop=p.y-targetEye;
    // Keep the physical head and both hands in one translated tracking space.
    const desiredDrop=T.MathUtils.clamp(drop,-.65,1.5);
    eye.position.y=-desiredDrop;
    drop=desiredDrop;
    head.set(p.x,p.y-drop,p.z);
    const source=[...frame.session.inputSources].find(s=>s.handedness==='right');
    const x=source?.gamepad?.axes[2]??0;
    if(Math.abs(x)<.3)snap=false;
    if(Math.abs(x)>.67&&!snap&&!menu){
      snap=true;
      point.copy(head).applyAxisAngle(up,yaw);
      yaw-=Math.sign(x)*Math.PI/4;
      rotated.copy(head).applyAxisAngle(up,yaw);
      rig.position.add(point.sub(rotated));
      for(const h of hands){h.valid=false;h.surface=null;}
    }
  }else{
    eye.position.y=0;head.set(0,targetEye,0);camera.position.copy(head);camera.rotation.set(pitch,0,0,'YXZ');
  }
  worldHead.copy(head).applyAxisAngle(up,yaw).add(rig.position);
  const floor=surfaceAt(worldHead);
  const gravity=9.81*(settings.gravity/5)*(floor?.gravity??1);
  const contacts=inVR?trackHands(frame,space,dt):0;
  if(contacts){
    delta.multiplyScalar(1/contacts).clampLength(0,dt*10);
    const response=(.57+settings.jump*.12)/( .65+settings.weight*.07);
    velocity.lerp(scratch.copy(delta).multiplyScalar(response/Math.max(.006,dt)),.60);
    velocity.clampLength(0,11);
  }else{
    velocity.y-=gravity*dt;
    if(!inVR){
      const x=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('KeyQ')||keys.has('ArrowLeft'));
      const z=Number(keys.has('KeyS')||keys.has('ArrowDown'))-Number(keys.has('KeyW')||keys.has('KeyZ')||keys.has('ArrowUp'));
      scratch.set(x,0,z).clampLength(0,1).applyAxisAngle(up,yaw).multiplyScalar(3.4);
      const a=1-Math.exp(-dt*(floor?.friction<.1?2:12));
      velocity.x=T.MathUtils.lerp(velocity.x,scratch.x,a);velocity.z=T.MathUtils.lerp(velocity.z,scratch.z,a);
      if(keys.has('Space')&&rig.position.y<.025&&floor)velocity.y=3.1+settings.jump*.18;
    }
    delta.copy(velocity).multiplyScalar(dt);
  }
  if(menu){delta.set(0,0,0);velocity.set(0,0,0);}
  rig.position.add(delta);
  worldHead.copy(head).applyAxisAngle(up,yaw).add(rig.position);
  if(settings.collisions){
    for(const height of [.20,Math.max(.34,head.y*.62),head.y]){
      point.set(worldHead.x,rig.position.y+height,worldHead.z);
      prior.copy(point);
      solve(point,height===.20?.20:.18,arena.boxes,velocity,0,3+settings.grip,dt);
      scratch.subVectors(point,prior);
      rig.position.add(scratch);worldHead.add(scratch);
    }
  }
  if(rig.position.y<-9 || Math.abs(rig.position.x)>28 || Math.abs(rig.position.z)>34)resetPlayer();
  rig.rotation.y=yaw;
  if(inVR)camera.position.set(0,0,0);
  for(const h of hands){
    if(h.valid)h.mesh.position.copy(h.surface?h.anchor:h.target);
    if(!inVR)h.mesh.visible=false;
  }
  const bodyScale=.72+settings.size*.05;
  monkey.visible=settings.body;
  monkey.position.set(worldHead.x,rig.position.y+.14,worldHead.z);
  monkey.rotation.y=yaw;monkey.scale.setScalar(bodyScale);
  camera.updateWorldMatrix(true,false);
}
function updateFps(dt,inVR){
  windowElapsed+=dt;windowFrames++;
  qualityTimer+=dt;
  if(windowElapsed<1)return;
  fps=Math.round(windowFrames/windowElapsed);
  windowFrames=0;windowElapsed=0;hudDirty=true;
  readings.textContent=fps+' FPS · qualité '+liveLevel+'/10 · '+(settings.auto?'auto':'manuel');
  if(!settings.auto||qualityTimer<3)return;
  const target=inVR?(renderer.xr.getSession()?.frameRate||refreshRate):60;
  lowCount=fps<target*.88?lowCount+1:0;
  highCount=fps>=target*.98?highCount+1:0;
  const next=T.MathUtils.clamp(liveLevel+(lowCount>=2?-1:highCount>=4?1:0),1,10);
  if(next!==liveLevel){
    liveLevel=next;qualityTimer=lowCount=highCount=0;applyVisual();
  }
}
applyVisual();
renderer.setAnimationLoop((time,frame)=>{
  const actual=frameTime?Math.max(0,(time-frameTime)/1000):.014;
  frameTime=time;
  const dt=Math.min(.035,actual);
  const inVR=renderer.xr.isPresenting;
  const space=renderer.xr.getReferenceSpace(), pose=frame&&space&&frame.getViewerPose(space);
  if(inVR&&!pose)return;
  cursor.visible=false;
  activeBoxes=settings.collisions?arena.boxes:blocked;
  panel.mesh.visible=inVR&&menu;
  character(frame,space,pose,dt);
  for(const object of objects){
    object.mesh.visible=settings.objects;
    if(object.mesh.position.y<-8 || Math.abs(object.mesh.position.x)>28 || Math.abs(object.mesh.position.z)>35){
      if(!object.owner){object.mesh.position.copy(object.start);object.velocity.set(0,0,0);}
    }
    object.shadow.visible=settings.shadows&&liveLevel<7&&settings.objects&&object.mesh.position.y<2;
    object.shadow.position.set(object.mesh.position.x,.006,object.mesh.position.z);
  }
  solveObjects(objects,arena.boxes,dt,9.81*settings.gravity/5,.12+settings.bounce*.064,surfaceAt);
  arena.probe.rotation.y+=dt*.29;
  updateFps(Math.min(.3,actual),inVR);
  panel.mesh.visible=inVR&&menu;
  wrist.mesh.visible=inVR&&hands[0].valid;
  if(wrist.mesh.visible){
    wrist.mesh.position.copy(hands[0].mesh.position).y+=.12;
    wrist.mesh.lookAt(worldHead);
  }
  if(hudDirty||time-lastDraw>1100){
    hudDirty=false;lastDraw=time;
    if(menu)drawPanel();
    const c=wrist.ctx;c.clearRect(0,0,416,84);c.fillStyle='#182632';c.fillRect(0,0,416,84);
    c.fillStyle='#fff0cf';c.font='bold 25px system-ui';c.fillText(fps+' FPS     Q '+liveLevel+'/10',17,32);
    c.font='20px system-ui';c.fillText('B/Y : réglages   ·   Grip : saisir',17,66);wrist.texture.needsUpdate=true;
  }
  renderer.render(scene,camera);
});






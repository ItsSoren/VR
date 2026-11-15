
import * as T from 'three';
import { addLabFixtures } from './fixtures.js';
import { buildArena } from './arena.js';
import { solve,handContact,solveObjects,colliderFor,distanceToObject,placeObject,boxCollider,playerObjectContact } from './physics.js';

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
  grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,contrast:5,saturation:5,exposure:5,warmth:5,bounce:4,throw:5,preciseHitboxes:false,quality:7,auto:true,resolution:7,texturePower:7,focus:false,focusStrength:5,focusSize:5,
  movement:true,collisions:true,objects:true,body:true,hands:true,textures:true,reflections:true,shadows:true,bloom:true,
};
const defaults={...settings};
const boot=new T.Vector3(0,0,3);
rig.position.copy(boot);
const velocity=new T.Vector3();
const soft=new T.Vector3(), delta=new T.Vector3(), worldHead=new T.Vector3(), rotated=new T.Vector3(), head=new T.Vector3();
const point=new T.Vector3(), prior=new T.Vector3(), candidate=new T.Vector3(), scratch=new T.Vector3();
const priorPlayer=new T.Vector3(), appliedMove=new T.Vector3(), pushMemory=new T.Vector3();
const launchVelocity=new T.Vector3(), trackingDelta=new T.Vector3();
let launchLock=0, peakPush=0, launchCount=0, lastLaunch=null;
const up=new T.Vector3(0,1,0), spin=new T.Quaternion(), normal=new T.Vector3();
let yaw=0,bodyYaw=0,pitch=0, drop=0, standingHeight=NaN, snap=false, frameTime=0,fps=0,windowFrames=0,windowElapsed=0,qualityTimer=0,lowCount=0,highCount=0,liveLevel=7,refreshRate=72;
let menu=false,panelHand='left',page=0,hudDirty=true,lastDraw=0;
let blocked=[],activeBoxes=arena.boxes,wasBraced=false;
const geometry=new T.IcosahedronGeometry(1,0);
const white=new T.MeshLambertMaterial({color:'#fffdf4',flatShading:true});
const fur=new T.MeshLambertMaterial({color:'#f6f4ec',flatShading:true});
function shape(parent,material,x,y,z,sx,sy,sz) {
  const m=new T.Mesh(geometry,material);
  m.position.set(x,y,z);m.scale.set(sx,sy,sz);
  parent.add(m);m.castShadow=true;return m;
}
const monkey=new T.Group();
scene.add(monkey);
const torsoGeo=new T.IcosahedronGeometry(1,1);
const torsoVertices=torsoGeo.attributes.position;
for(let i=0;i<torsoVertices.count;i++){
  const y=torsoVertices.getY(i);
  const taper=.83+y*.29;
  torsoVertices.setXYZ(i,torsoVertices.getX(i)*taper,y,torsoVertices.getZ(i)*(.88+y*.15));
}
torsoGeo.computeVertexNormals();
const torso=new T.Mesh(torsoGeo,fur);
torso.position.set(0,.41,.14);torso.scale.set(.36,.41,.26);
torso.castShadow=true;monkey.add(torso);
function armGeometry(profile){
  return new T.LatheGeometry(profile.map(([radius,height])=>new T.Vector2(radius,height)),8);
}
const upperGeometry=armGeometry([[0,-.5],[.090,-.5],[.103,-.34],[.088,-.06],[.071,.24],[.059,.5],[0,.5]]);
const lowerGeometry=armGeometry([[0,-.5],[.066,-.5],[.073,-.28],[.059,.04],[.048,.29],[.039,.5],[0,.5]]);
const jointGeometry=new T.IcosahedronGeometry(.063,1);
const armAxis=new T.Vector3(), elbowBend=new T.Vector3(), armSpan=new T.Vector3();
const shoulderOffset=new T.Vector3(), headForward=new T.Vector3();
const headRotation=new T.Quaternion(), panelFacing=new T.Vector3();
function tube(mesh,a,b){
  armAxis.subVectors(b,a);
  mesh.position.copy(a).addScaledVector(armAxis,.5);
  mesh.scale.y=Math.max(.001,armAxis.length());
  mesh.quaternion.setFromUnitVectors(up,armAxis.normalize());
}
function arms(){
  for(const h of hands){
    h.upper.visible=h.lower.visible=h.joint.visible=settings.body&&h.valid;
    if(!h.valid)continue;
    const sign=h.side==='left'?-1:1;
    shoulderOffset.set(sign*.255,.72,.12).multiplyScalar(monkey.scale.x).applyAxisAngle(up,bodyYaw);
    h.shoulder.copy(monkey.position).add(shoulderOffset);
    armSpan.subVectors(h.mesh.position,h.shoulder);
    const reach=armSpan.length(),length=.24+settings.arms*.036;
    armAxis.copy(armSpan).normalize();
    elbowBend.set(sign*.42,-1,.24).applyAxisAngle(up,bodyYaw);
    elbowBend.addScaledVector(armAxis,-elbowBend.dot(armAxis)).normalize();
    h.elbow.copy(h.shoulder).addScaledVector(armSpan,.48);
    h.elbow.addScaledVector(elbowBend,Math.sqrt(Math.max(.008,length*length-reach*reach*.25))*.79);
    tube(h.upper,h.shoulder,h.elbow);tube(h.lower,h.elbow,h.mesh.position);
    h.joint.position.copy(h.elbow);
  }
}
const hands=['left','right'].map(side=>{
  const mesh=shape(scene,white,0,0,0,.072,.072,.072);
  mesh.visible=false;
  const upper=new T.Mesh(upperGeometry,fur),lower=new T.Mesh(lowerGeometry,fur);
  const joint=new T.Mesh(jointGeometry,fur);
  upper.visible=lower.visible=joint.visible=false;scene.add(upper,lower,joint);
  return {side,mesh,upper,lower,joint,shoulder:new T.Vector3(),elbow:new T.Vector3(),anchor:new T.Vector3(),last:new T.Vector3(),target:new T.Vector3(),previous:new T.Vector3(),speed:new T.Vector3(),valid:false,surface:null,held:null,grip:false,trigger:false,menu:false,contactNormal:new T.Vector3(),contactPoint:new T.Vector3(),lastPhysical:new T.Vector3(),physicalSpeed:new T.Vector3()};
});

const objectSpecs=[
  ['Cube',new T.BoxGeometry(.33,.33,.33),'#b76b50',0,1.35],
  ['Boule',new T.IcosahedronGeometry(.225,2),'#73afcb',.225,.85],
  ['Tétraèdre',new T.TetrahedronGeometry(.29),'#d8ae53',0,1],
  ['Brique',new T.BoxGeometry(.56,.19,.28),'#b35a71',0,1.5],
  ['Grand rectangle',new T.BoxGeometry(1.42,.75,.88),'#738aa5',0,4.2],
  ['Grande sphère',new T.IcosahedronGeometry(.60,2),'#dbab58',.60,3.7],
  ['Coco',new T.IcosahedronGeometry(.124,1),'#956238',.124,.44],
].map(([name,geo,color,sphere,mass])=>({name,geo,mass,shape:colliderFor(geo,sphere),
  material:new T.MeshStandardMaterial({color,roughness:.44,metalness:.1,flatShading:true}),
  lowShape:sphere?null:boxCollider(geo.computeBoundingBox()??geo.boundingBox.getSize(new T.Vector3()).multiplyScalar(.5)),
}));
const objects=[];
const gripRotation=new T.Quaternion(), inverseGrip=new T.Quaternion();
const spawnPoint=new T.Vector3(),spawnDirection=new T.Vector3();
function spawnObject(index,origin){
  const spec=objectSpecs[index];
  if(!origin){
    camera.getWorldPosition(spawnPoint);
    camera.getWorldDirection(spawnDirection);
    spawnDirection.y=0;
    if(spawnDirection.lengthSq()<.01)spawnDirection.set(0,0,-1).applyAxisAngle(up,yaw);
    spawnPoint.addScaledVector(spawnDirection.normalize(),1.18);
    spawnPoint.y+=.16;
    origin=spawnPoint;
  }
  const mesh=new T.Mesh(spec.geo,spec.material);
  mesh.castShadow=true;mesh.receiveShadow=true;mesh.position.copy(origin);scene.add(mesh);
  const selectedShape=settings.preciseHitboxes?spec.shape:(spec.lowShape??spec.shape);
  const body={mesh,spec,blocksPlayer:index===4||index===5,precise:settings.preciseHitboxes,type:spec.name,shape:selectedShape,radius:selectedShape.radius,mass:spec.mass,start:mesh.position.clone(),
    owner:null,velocity:new T.Vector3(),angular:new T.Vector3(),offset:new T.Vector3(),
    relativeRotation:new T.Quaternion(),shadow:arena.shadow(spec.shape.radius)};
  objects.push(body);placeObject(body,arena.boxes);
  return body;
}
function clearObjects(){
  for(const hand of hands){if(hand.held)release(hand,false);}
  for(const body of objects)scene.remove(body.mesh,body.shadow);
  objects.length=0;
}
spawnObject(0,new T.Vector3(-.84,.32,1.15));
spawnObject(1,new T.Vector3(0,.28,1.15));
spawnObject(2,new T.Vector3(.84,.33,1.15));
spawnObject(3,new T.Vector3(1.65,.25,1.15));
spawnObject(4,new T.Vector3(-2.45,.47,-.4));
spawnObject(5,new T.Vector3(2.45,.65,-.4));
function release(hand,launch=true) {
  const object=hand.held;
  if(!object) return;
  object.owner=null;hand.held=null;
  object.velocity.multiplyScalar(launch? .55+settings.throw*.12:0).clampLength(0,23);
  if(launch) object.angular.clampLength(0,24); else object.angular.set(0,0,0);
}
function resetObjects(){
  for(const hand of hands) release(hand,false);
  for(const object of objects){
    object.mesh.position.copy(object.start);object.mesh.quaternion.identity();object.velocity.set(0,0,0);object.angular.set(0,0,0);
  }
}
function resetPlayer(){
  rig.position.copy(boot);yaw=pitch=0;rig.rotation.y=0;velocity.set(0,0,0);pushMemory.set(0,0,0);launchLock=0;wasBraced=false;snap=false;
  for(const hand of hands){hand.valid=false;hand.surface=null;release(hand,false);}
}
resetObjects();
function applyVisual(){
  arena.visual(liveLevel,settings.shadows,settings.reflections,settings.bloom,settings.textures,2**(settings.texturePower-1));
  arena.focus(settings.focus,settings.focusStrength,settings.focusSize);
  renderer.toneMappingExposure=.58+settings.exposure*.114;
  photoContrast.value=.55+settings.contrast*.09;
  photoSaturation.value=settings.saturation*.20;
  photoWarmth.value=(settings.warmth-5)*.022;
  renderer.xr.setFoveation(T.MathUtils.clamp(1.16-liveLevel*.105,.12,1));
  if(!renderer.xr.isPresenting) resize();
  hudDirty=true;
  fixtures.redraw();
}
function resize(){
  if(renderer.xr.isPresenting) return;
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.75)*(.53+liveLevel*.047));
  renderer.setSize(innerWidth,innerHeight,false);
  camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();
}
addEventListener('resize',resize);

const visualPresets={
  'Fluide':{quality:3,auto:false,texturePower:6,resolution:5,shadows:false,reflections:false,bloom:false,focus:true,focusStrength:6,focusSize:4},
  'Équilibré':{quality:7,auto:true,texturePower:8,resolution:7,shadows:true,reflections:true,bloom:true,focus:true,focusStrength:3,focusSize:6},
  'Vitrine':{quality:10,auto:false,texturePower:10,resolution:10,shadows:true,reflections:true,bloom:true,focus:false},
  'Benchmark':{quality:10,auto:false,texturePower:10,resolution:7,shadows:true,reflections:true,bloom:false,focus:false},
};
function usePreset(name){
  Object.assign(settings,{textures:true,contrast:5,saturation:5,exposure:5,warmth:5},visualPresets[name]);
  liveLevel=settings.quality;
  lowCount=highCount=qualityTimer=0;
  applyVisual();
}

const sections=[
  ['Locomotion',[
    ['Appuis Gorilla','movement'],['Collisions','collisions'],['Grip','grip'],['Glissement','slide'],
    ['Gravité','gravity'],['Impulsion','jump'],['Poids','weight'],['Taille','size'],['Longueur des bras','arms'],
    ['Retour au départ',resetPlayer],
  ]],
  ['Objets',[
    ['Objets actifs','objects'],['Hitboxes objets','preciseHitboxes'],['Rebond','bounce'],['Force du lancer','throw'],['Réinitialiser les objets',resetObjects],
  ]],
  ['Rendu',[
    ['Qualité automatique','auto'],['Qualité manuelle','quality'],['Résolution XR¹','resolution'],
    ['Textures','textures'],['Taille textures','texturePower'],['Reflets','reflections'],['Ombres','shadows'],['Bloom du soleil','bloom'],
    ['Corps du singe','body'],['Mains','hands'],
  ]],
];
sections.push(['Focus',[['Activer le focus','focus'],['Intensité','focusStrength'],['Taille de la zone nette','focusSize']]]);
sections.push(['Photo',[['Exposition','exposure'],['Contraste','contrast'],['Saturation','saturation'],['Chaleur','warmth'],...Object.keys(visualPresets).map(name=>['Préréglage : '+name,()=>usePreset(name)])]]);
let reportSnapshot=null, rawFrameMs=[], lastVR=null, reportHadVR=false, contactFrames=0, trackedFrames=0, renderStats={};
function captureReport(){
  const sorted=rawFrameMs.slice().sort((a,b)=>a-b);
  const percentile=p=>sorted.length?Number(sorted[Math.min(sorted.length-1,Math.floor((sorted.length-1)*p))].toFixed(2)):null;
  reportSnapshot={
    game:'Gorilla Lab',version:'r12',time:new Date().toISOString(),
    mode:reportHadVR?'VR':'PC',settings:{...settings},qualityActive:liveLevel,
    performance:{fps,frames:sorted.length,frameMs:{median:percentile(.5),p95:percentile(.95),max:percentile(1)}},
    xr:lastVR,renderer:renderStats,terrainSeed:arena.hillSeed,objects:{total:objects.length,held:objects.filter(o=>o.owner).length},locomotion:{trackedFrames,contactFrames,launchCount,lastLaunch,standingHeight:Number.isFinite(standingHeight)?standingHeight:null,viewOffset:drop},
  };
  document.querySelector('#download-report').disabled=false;
  hudDirty=true;
}
function downloadReport(){
  if(!reportSnapshot) captureReport();
  const url=URL.createObjectURL(new Blob([JSON.stringify(reportSnapshot,null,2)],{type:'application/json'}));
  const a=document.createElement('a');
  a.href=url;a.download='gorilla-lab-rapport.json';a.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
document.querySelector('#download-report').onclick=downloadReport;
document.querySelector('#capture-report').onclick=captureReport;
sections[1][1].push(['Capturer un rapport',captureReport]);
sections.push(['Spawn',[...objectSpecs.slice(0,6).map((spec,i)=>['Créer : '+spec.name,()=>spawnObject(i)]),['Tout retirer',clearObjects]]]);
const title=document.querySelector('#section'), desktop=document.querySelector('#settings');
const readings=document.querySelector('#readings');
function change(key,step){
  if(typeof settings[key]==='boolean') settings[key]=!settings[key];
  else settings[key]=T.MathUtils.clamp(settings[key]+step,1,10);
  if(key==='size'||key==='arms') for(const hand of hands) {hand.valid=false;hand.surface=null;}
  if(key==='quality'){settings.auto=false;liveLevel=settings.quality;}
  if(key==='auto'&&!settings.auto) liveLevel=settings.quality;
  if(key==='movement'||key==='collisions') for(const h of hands) h.surface=null;
  if(key==='objects'&&!settings.objects) resetObjects();
  if(key==='preciseHitboxes')syncHitboxes();
  applyVisual();
}
function syncHitboxes(){
  for(const object of objects){
    object.precise=settings.preciseHitboxes;
    object.shape=object.precise?object.spec.shape:(object.spec.lowShape??object.spec.shape);
    object.radius=object.shape.radius;
    if(!object.owner)placeObject(object,arena.boxes);
  }
}
function restore(){
  for(const [,key] of sections[page][1]) if(typeof key==='string') settings[key]=defaults[key];
  if(page===0) resetPlayer();
  if(page===1){syncHitboxes();resetObjects();}
  if(page===5) clearObjects();
  if(page===2) liveLevel=settings.quality;
  applyVisual();
}
function button(text,action){
  const b=document.createElement('button');b.textContent=text;
  b.onclick=()=>{action();desktopMenu();hudDirty=true;};return b;
}
function toggleLabel(key){return key==='preciseHitboxes'?(settings[key]?'High':'Low'):(settings[key]?'Actif':'Coupé');}
function settingValue(key){return key==="texturePower"?[2**(settings[key]-1),2**(settings[key]-1)].join("×"):settings[key];}
function desktopMenu(){
  title.textContent=sections[page][0];
  desktop.replaceChildren();
  for(const [name,key] of sections[page][1]){
    const row=document.createElement('div');row.className='setting';row.append(name);
    const controls=document.createElement('span');
    if(typeof key==='function') controls.append(button('↺',key));
    else if(typeof settings[key]==='boolean') controls.append(button(toggleLabel(key),()=>change(key,1)));
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
const panel=display(640,652,.84,.86,scene);
panel.mesh.visible=false;
const wrist=display(416,84,.32,.065,scene);
wrist.mesh.visible=false;
const ray=new T.Raycaster(), raySource=new T.Vector3(), forward=new T.Vector3();
const coconutPosition=new T.Vector3();
let fixtureAim=null;
const fixtures=addLabFixtures(scene,arena.boxes,{
  spawn: index=>{if(!settings.objects)settings.objects=true;spawnObject(index);},
  clear: clearObjects,resetPlayer,resetObjects,
  resetTree:()=>{ for(const coco of fixtures.coconuts)coco.visible=true; },
  quality:()=>liveLevel+'/10',
  resolution:()=>settings.resolution+'/10 · relancer VR',
  textureSize:()=>settingValue('texturePower'),
  qualityNext:()=>{if(settings.quality>=10)settings.quality=0;change('quality',1);},
  resolutionNext:()=>{if(settings.resolution>=10)settings.resolution=0;change('resolution',1);},
  textureNext:()=>{if(settings.texturePower>=10)settings.texturePower=0;change('texturePower',1);},
  hitbox:()=>change('preciseHitboxes',1), movement:()=>change('movement',1),
});
function pluckCoconut(coco,impulse=null){
  coco.getWorldPosition(coconutPosition);
  coco.visible=false;
  if(!settings.objects)settings.objects=true;
  const object=spawnObject(6,coconutPosition);
  if(impulse)object.velocity.copy(impulse).multiplyScalar(3.5).y+=.66;
  return object;
}
function fixtureRay(origin,direction,activate){
  ray.set(origin,direction);
  ray.far=5.5;
  const hits=ray.intersectObjects([...fixtures.targets,...fixtures.coconuts.filter(m=>m.visible)],false);
  ray.far=Infinity;
  const hit=hits[0];
  if(!hit)return;
  cursor.visible=true;cursor.position.copy(hit.point).addScaledVector(direction,-.012);
  if(!activate)return;
  if(hit.object.userData.action)hit.object.userData.action(hit.uv);
  else pluckCoconut(hit.object,direction);
  desktopMenu();
}
function aimFixture(frame,space,input,activate){
  const pose=frame.getPose(input.targetRaySpace,space);
  if(!pose)return;
  const p=pose.transform.position,q=pose.transform.orientation;
  raySource.set(p.x,p.y-drop,p.z).applyAxisAngle(up,yaw).add(rig.position);
  spin.set(q.x,q.y,q.z,q.w);
  forward.set(0,0,-1).applyQuaternion(spin).applyAxisAngle(up,yaw);
  fixtureRay(raySource,forward,activate);
}
const cursor=shape(scene,new T.MeshBasicMaterial({color:'#f5dfa0'}),0,0,0,.009,.009,.009);
cursor.visible=false;
let hitAreas=[], pendingAim=null;
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
  sections.forEach(([name],i)=>item(25+i*99,61,94,44,name,()=>page=i,page===i?'#68705a':'#334b58'));
  sections[page][1].forEach(([name,key],i)=>{
    const y=119+i*44;
    c.fillStyle='#e9e5ce';c.font='22px system-ui';c.fillText(name,30,y+26);
    if(typeof key==='function') item(438,y,174,36,key===captureReport?'Capturer':page===5?(key===clearObjects?'Vider':'Créer'):page===4?'Appliquer':'Réinitialiser',key);
    else if(typeof settings[key]==='boolean') item(438,y,174,36,toggleLabel(key),()=>change(key,1));
    else {
      item(438,y,46,36,'−',()=>change(key,-1));
      c.textAlign='center';c.fillText(String(settingValue(key)),525,y+26);c.textAlign='left';
      item(566,y,46,36,'+',()=>change(key,1));
    }
  });
  item(25,579,286,44,'Réglages par défaut',restore);
  item(325,579,287,44,'Fermer',()=>menu=false);
  c.fillStyle='#c4d5d8';c.font='17px system-ui';c.fillText(reportSnapshot?'Rapport capturé. Quitte la VR pour le télécharger.':'Gâchette : choisir  ·  B/Y : panneau  ·  ¹ Prochaine session VR',25,645);
  panel.texture.needsUpdate=true;
}
function setMenu(side){
  menu=!menu;
  if(menu){
    panelHand=side;
    panelFacing.set(0,0,-1).applyAxisAngle(up,bodyYaw);
    panel.mesh.position.copy(worldHead).addScaledVector(panelFacing,1.25);
    panel.mesh.position.y+=.08;
    panel.mesh.lookAt(worldHead);
    panel.mesh.updateMatrixWorld(true);
  }
  hudDirty=true;
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
    rawFrameMs=[];contactFrames=trackedFrames=launchCount=0;lastLaunch=null;reportHadVR=true;lastVR=null;
    standingHeight=NaN;drop=0;resetPlayer();applyVisual();
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
  peakPush=0;
  launchVelocity.set(0,0,0);
  let count=0;
  const inputs=[...frame.session.inputSources];
  for(const h of hands){
    const source=inputs.find(s=>s.handedness===h.side&&s.gripSpace);
    const pose=source&&frame.getPose(source.gripSpace,space);
    h.mesh.visible=Boolean(pose)&&settings.hands;
    if(!pose){h.valid=false;h.surface=null;release(h,false);continue;}
    const p=pose.transform.position;
    trackingDelta.set(p.x,p.y,p.z);
    if(h.valid && dt>.001){
      h.physicalSpeed.copy(trackingDelta).sub(h.lastPhysical).multiplyScalar(1/dt).applyAxisAngle(up,yaw).clampLength(0,10);
    }else h.physicalSpeed.set(0,0,0);
    h.lastPhysical.copy(trackingDelta);
    candidate.set(p.x,p.y-drop,p.z);
    h.target.copy(candidate).applyAxisAngle(up,yaw).add(rig.position);
    const wasValid=h.valid;
    if(!wasValid){h.last.copy(h.target);h.previous.copy(h.target);h.speed.set(0,0,0);}
    h.valid=true;
    h.speed.lerp(scratch.subVectors(h.target,h.previous).multiplyScalar(1/Math.max(.006,dt)).clampLength(0,18),.55);
    h.previous.copy(h.target);
    const priorSurface=h.surface;
    h.surface=null;
    const grip=Boolean(source.gamepad?.buttons[1]?.pressed);
    const q=pose.transform.orientation;
    gripRotation.set(q.x,q.y,q.z,q.w).premultiply(spin.setFromAxisAngle(up,yaw));
    if(!menu&&grip&&!h.grip&&settings.objects){
      let body=null, best=.15;
      const coco=fixtures.coconuts.find(m=>m.visible&&m.getWorldPosition(coconutPosition).distanceToSquared(h.target)<.26**2);
      if(coco)body=pluckCoconut(coco);
      for(const o of objects){
        if(o.owner || o.mesh.position.distanceToSquared(h.target)>(o.radius+.18)**2)continue;
        const distance=distanceToObject(h.target,o);
        if(!coco&&distance<best){best=distance;body=o;}
      }
      if(body){
        h.held=body;body.owner=h;
        inverseGrip.copy(gripRotation).invert();
        body.offset.copy(body.mesh.position).sub(h.target).applyQuaternion(inverseGrip);
        body.relativeRotation.multiplyQuaternions(inverseGrip,body.mesh.quaternion);
        body.velocity.set(0,0,0);body.angular.set(0,0,0);
      }
    }
    if(!grip&&h.grip)release(h,!menu);
    h.grip=grip;
    if(h.held){
      const object=h.held;
      prior.copy(object.mesh.position);
      inverseGrip.copy(object.mesh.quaternion).invert();
      object.mesh.quaternion.multiplyQuaternions(gripRotation,object.relativeRotation);
      object.mesh.position.copy(object.offset).applyQuaternion(gripRotation).add(h.target);
      placeObject(object,activeBoxes);
      object.velocity.lerp(scratch.subVectors(object.mesh.position,prior).multiplyScalar(1/Math.max(.006,dt)).clampLength(0,23),.52);
      inverseGrip.premultiply(object.mesh.quaternion).normalize();
      if(inverseGrip.w<0)inverseGrip.set(-inverseGrip.x,-inverseGrip.y,-inverseGrip.z,-inverseGrip.w);
      const angle=2*Math.acos(T.MathUtils.clamp(inverseGrip.w,-1,1));
      object.angular.lerp(scratch.set(inverseGrip.x,inverseGrip.y,inverseGrip.z).normalize().multiplyScalar(Math.min(24,angle/Math.max(.006,dt))),.52);
    }
    if(settings.movement&&!h.held&&launchLock<=0){
      h.surface=handContact(h.last,h.target,.080,activeBoxes,h.contactPoint,normal);
      const sweptSurface=h.surface;
      if(priorSurface&&activeBoxes.includes(priorSurface)){
        scratch.subVectors(h.target,h.anchor);
        if(scratch.dot(h.contactNormal)<.070 && scratch.lengthSq()<.81){  
          h.surface=priorSurface;
          if(sweptSurface!==priorSurface)h.contactPoint.copy(h.anchor);
          normal.copy(h.contactNormal);
        }else if(scratch.dot(h.contactNormal)>=.070 && sweptSurface===priorSurface){
          h.surface=null;
        }
      }
      if(h.surface){
        if(h.surface!==priorSurface || normal.dot(h.contactNormal)<.75) h.anchor.copy(h.contactPoint);
        h.contactNormal.copy(normal);
        const slip=h.surface.friction<.1 ? .48+settings.slide*.045 : settings.slide>7 ? (settings.slide-7)*.03 : 0;
        scratch.subVectors(h.contactPoint,h.anchor);
        scratch.addScaledVector(normal,-scratch.dot(normal));
        h.anchor.addScaledVector(scratch,Math.min(.97,slip));
        const friction= h.surface.friction*(.22+settings.grip*.135);
        correction(h,friction);
        const inward=-h.physicalSpeed.dot(normal);
        // A sharp push can launch while the hand still overlaps the contact surface.
        const lateral=Math.sqrt(Math.max(0,h.physicalSpeed.lengthSq()-inward*inward));
        const pushThreshold=normal.y>.4?Math.max(.68,lateral*.90):Math.max(.94,lateral*.55);
        if(inward>pushThreshold&&inward>peakPush){
          peakPush=inward;
          const power=(.69+.115*settings.jump)/(.66+.068*settings.weight);
          const tangential=h.surface.friction<.1?.18:.70;
          launchVelocity.copy(h.physicalSpeed).addScaledVector(normal,inward)
            .multiplyScalar(-power*tangential)
            .addScaledVector(normal,(inward+.28)*power)
            .clampLength(0,10);
        }
        count++;
      }
    }
    h.last.copy(h.surface?h.anchor:h.target);
    const btn=Boolean(source.gamepad?.buttons[5]?.pressed||source.gamepad?.buttons[3]?.pressed&&h.side==='left');
    if(btn&&!h.menu)setMenu(h.side);
    h.menu=btn;
    const trigger=Boolean(source.gamepad?.buttons[0]?.pressed);
    if(menu&&h.side!==panelHand) pendingAim={source,click:trigger&&!h.trigger};
    else if(!menu&&(h.side==='right'||trigger&&!h.trigger))fixtureAim={source,click:trigger&&!h.trigger};
    h.trigger=trigger;
  }
  return count;
}
function correction(hand,friction){
  soft.subVectors(hand.anchor,hand.target);
  const v=Math.max(0,soft.dot(normal));
  const adherence=hand.surface.friction<.1 ? Math.min(.35,friction*2) : T.MathUtils.clamp(.65+settings.grip*.065,0,1);
  soft.addScaledVector(normal,-soft.dot(normal)).multiplyScalar(adherence).addScaledVector(normal,v);
  delta.add(soft);
}
function character(frame,space,pose,dt){
  const inVR=Boolean(pose);
  const targetEye=.43+settings.size*.088;
  if(inVR){
    const p=pose.transform.position;
    if(!Number.isFinite(standingHeight))standingHeight=p.y;
    drop=T.MathUtils.clamp(standingHeight-targetEye,-.65,1.7);
    eye.position.y=-drop;
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
  if(inVR){
    const orientation=pose.transform.orientation;
    headRotation.set(orientation.x,orientation.y,orientation.z,orientation.w);
    headForward.set(0,0,-1).applyQuaternion(headRotation);
    if(headForward.x**2+headForward.z**2>.018)bodyYaw=yaw+Math.atan2(-headForward.x,-headForward.z);
  }else bodyYaw=yaw;
  const floor=surfaceAt(worldHead);
  const gravity=9.81*(settings.gravity/5)*(floor?.gravity??1);
  priorPlayer.copy(rig.position);
  launchLock=Math.max(0,launchLock-dt);
  let contacts=inVR?trackHands(frame,space,dt):0;
  if(inVR && hands.some(h=>h.valid))trackedFrames++;
  if(contacts)contactFrames++;
  const launched=inVR&&contacts>0&&peakPush>0;
  if(launched){
    velocity.copy(launchVelocity);
    pushMemory.set(0,0,0);wasBraced=false;contacts=0;
    launchLock=.17;
    launchCount++;lastLaunch={handSpeed:peakPush,velocity:velocity.toArray(),t:performance.now()};
    for(const h of hands){h.surface=null;h.last.copy(h.target);}
    delta.copy(velocity).multiplyScalar(dt);
  }else if(contacts){
    delta.multiplyScalar(1/contacts).clampLength(0,dt*10);
    velocity.set(0,0,0);
  }else{
    if(inVR && wasBraced){velocity.copy(pushMemory);pushMemory.set(0,0,0);}
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

  rig.position.add(delta);
  worldHead.copy(head).applyAxisAngle(up,yaw).add(rig.position);
  if(settings.collisions){
    for(const height of [.20,Math.max(.34,head.y*.62),head.y]){
      point.set(worldHead.x,rig.position.y+height,worldHead.z);
      prior.copy(point);
      const radius=height===.20?.20:.18;
      solve(point,radius,arena.boxes,velocity,0,3+settings.grip,dt);
      if(settings.objects)for(const object of objects){
        if(object.blocksPlayer&&!object.owner)playerObjectContact(point,radius,object,velocity);
      }
      solve(point,radius,arena.boxes,velocity,0,3+settings.grip,dt);
      scratch.subVectors(point,prior);
      rig.position.add(scratch);worldHead.add(scratch);
    }
  }
  if(rig.position.y<-9 || Math.abs(rig.position.x)>33 || rig.position.z < -57 || rig.position.z>13)resetPlayer();
  appliedMove.subVectors(rig.position,priorPlayer);
  if(contacts){
    const response=(.57+settings.jump*.12)/(.65+settings.weight*.07);
    pushMemory.lerp(scratch.copy(appliedMove).multiplyScalar(response/Math.max(.006,dt)).clampLength(0,11),1-Math.exp(-dt*25));
  }
  wasBraced=contacts>0;
  rig.rotation.y=yaw;
  if(inVR)camera.position.set(0,0,0);
  for(const h of hands){
    if(h.valid)h.mesh.position.copy(h.surface?h.anchor:h.target).addScaledVector(appliedMove,h.surface?0:1);
    if(!inVR)h.mesh.visible=false;
  }
  const shoulderHeight=Math.min(.30,Math.max(.21,head.y*.31));
  const bodyScale=Math.min(.72+settings.size*.05,Math.max(.3,(head.y-shoulderHeight)/.72));
  monkey.visible=settings.body;
  monkey.position.set(worldHead.x,worldHead.y-shoulderHeight-.72*bodyScale,worldHead.z);
  monkey.rotation.y=bodyYaw;monkey.scale.setScalar(bodyScale);
  arms();
  rig.updateMatrixWorld(true);
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
const photoContrast={value:1},photoSaturation={value:1},photoWarmth={value:0};
const graded=new Set();
function grade(material){ if(!material||graded.has(material))return;
  graded.add(material);
  const previous=material.onBeforeCompile;
  const cacheKey=material.customProgramCacheKey.call(material);
  material.onBeforeCompile=function(shader,renderer){
    previous.call(this,shader,renderer);
    Object.assign(shader.uniforms,{uPhotoContrast:photoContrast,uPhotoSaturation:photoSaturation,uPhotoWarmth:photoWarmth});
    shader.fragmentShader='uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <colorspace_fragment>',`
      #include <colorspace_fragment>
      vec3 photo=gl_FragColor.rgb;
      photo=mix(vec3(dot(photo,vec3(.2126,.7152,.0722))),photo,uPhotoSaturation);
      photo=(photo-.5)*uPhotoContrast+.5;
      gl_FragColor.rgb=clamp(photo+uPhotoWarmth*vec3(1.,.16,-1.),0.,1.);
    `);
  };
  material.customProgramCacheKey=()=>cacheKey+'-photo-v1';
  material.needsUpdate=true;
}
for(const material of arena.materials) grade(material);
scene.traverse(object=>{ if(object.isMesh&&![panel.mesh,wrist.mesh,cursor].includes(object))grade(object.material); });
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
  pendingAim=null;fixtureAim=null;
  panel.mesh.visible=false;
  character(frame,space,pose,dt);
  for(const object of objects){
    object.mesh.visible=settings.objects;
    if(object.mesh.position.y<-8 || Math.abs(object.mesh.position.x)>28 || object.mesh.position.z < -57 || object.mesh.position.z>13){
      if(!object.owner){object.mesh.position.copy(object.start);object.velocity.set(0,0,0);object.angular.set(0,0,0);}
    }
    object.shadow.visible=settings.shadows&&liveLevel<7&&settings.objects&&object.mesh.position.y<2;
    const hills=arena.boxes.find(b=>b.heightfield);
    const {x,z}=object.mesh.position;
    const shadowY=x>=hills.xMin&&x<=hills.xMax&&z>=hills.zMin&&z<=hills.zMax?hills.height(x,z):0;
    object.shadow.position.set(x,shadowY+.006,z);
  }
  solveObjects(objects,arena.boxes,dt,9.81*settings.gravity/5,.12+settings.bounce*.064,surfaceAt);
  arena.probe.rotation.y+=dt*.29;
  updateFps(Math.min(.3,actual),inVR);
  panel.mesh.visible=inVR&&menu;
  if(panel.mesh.visible&&pendingAim) aim(frame,space,pendingAim.source,pendingAim.click);
  else if(inVR&&fixtureAim)aimFixture(frame,space,fixtureAim.source,fixtureAim.click);
  else if(!inVR){
    camera.getWorldPosition(raySource);camera.getWorldDirection(forward);
    fixtureRay(raySource,forward,keys.delete('KeyE'));
  }
  wrist.mesh.visible=inVR&&!menu&&hands[0].valid;
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
  if(inVR||!reportHadVR) {
    rawFrameMs.push(actual*1000);
    if(rawFrameMs.length>720)rawFrameMs.splice(0,rawFrameMs.length-720);
    const {calls,triangles,lines,points}=renderer.info.render;
    renderStats={calls,triangles,lines,points,textures:renderer.info.memory.textures};
    if(inVR)lastVR={
      refreshHz:renderer.xr.getSession()?.frameRate??null,
      foveation:renderer.xr.getFoveation()??null,
      eyeViewports:renderer.xr.getCamera().cameras.map(c=>({width:c.viewport?.z??null,height:c.viewport?.w??null})),
    };
  }
});













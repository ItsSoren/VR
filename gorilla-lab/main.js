import {calibratedHeight,torsoBend,removeInwardVelocity,bodyProxyOffset} from './player-pose.js';

import * as T from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { addSpectator } from './cloud-view.js';
import {normalizeTerrain} from './terrain-edit.js';
import {texturePresets,seamlessTexture} from './seamless-texture.js';
import {createFlatControls,createKeyboardState} from './flat-controls.js';
import {screenPixelRatio} from './screen-render.js';
import { GorillaLocomotion } from './locomotion.js';
import { updateGroundHaptics } from './ground-haptics.js';
import { createToolVisual } from './tool-visual.js';
import {createBlasterSystem,bindBlasterTrigger} from './blaster-system.js';
import {createSettings,toolModes,shaderNames,visualPresets} from './game-settings.js';
import { avatarPalettes,createAvatarStyle } from './avatar-style.js';
import {createArenaObjectSpecs,forEachStartupObject} from './arena-objects.js';
import {spawnAssetIds} from './model-assets.js';
import { makeAnimatedProps,clonePropMaterial } from './animated-props.js';
import {readModelPack,createModelPropDefinitions,createModelAvatarHead,createModelUnitGeometry,createModelMaterial,modelCollisionGeometry,modelBounds,normalizeModelPack,modelLimits,modelStorageKey} from './model-pack.js';
import {mapCode,publicRooms} from './cloud-link.js';
import { createHandSkin,palmCenter } from './hand-skin.js';
import {placeTrackedPalm} from './xr-palm.js';
import {createStepSound} from './step-sound.js';
import {createDebugView} from './debug-view.js';
import { createBodySkin } from './body-skin.js';
import { labMirror,labSpawn } from './lab-layout.js';
import { connectMaps } from './custom-maps.js';
import { arenaMap, makePiece, mapMaterials, surfacePresets, storageKey, materialColors } from './map-format.js';
import { createVrEffects, addRayProbe } from './vr-effects.js';
import { createVrFovMask } from './vr-fov.js';
import { addLabFixtures } from './fixtures.js';
import { buildArena } from './arena.js';
import { solve,palmContact,handContact,solveObjects,moveKinematic,colliderFor,distanceToObject,placeObject,boxCollider,playerObjectContact } from './physics.js';

// scripts/build.mjs injects the release used in the HTML titles and JSON report.
const labRelease=__LAB_RELEASE__;
let gameCanvas=document.getElementById('game');
if(!(gameCanvas instanceof HTMLCanvasElement)) {
  gameCanvas=document.createElement('canvas');
  gameCanvas.id='game';
  gameCanvas.setAttribute('aria-label','Ar�ne Gorilla Lab');
  document.body.prepend(gameCanvas);
}
const mobileScreen=(navigator.userAgentData?.mobile===true||globalThis.matchMedia?.('(pointer: coarse)').matches===true)
  && !/OculusBrowser|Meta Quest/i.test(navigator.userAgent??'');
let renderer;
try {
  renderer=new T.WebGLRenderer({canvas:gameCanvas,antialias:!mobileScreen,powerPreference:'high-performance'});
} catch (error) {
  document.getElementById('status').textContent='WebGL 2 indisponible : '+error.message;
  throw error;
}
renderer.xr.enabled=true;
renderer.xr.setReferenceSpaceType('local-floor');
renderer.shadowMap.type=T.PCFShadowMap;
renderer.shadowMap.autoUpdate=false;
let lastShadowRender=-Infinity;
renderer.toneMapping=T.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.15;
const scene=new T.Scene();
scene.fog=new T.Fog('#a6d4ea',55,135);
const rig=new T.Group(), eye=new T.Group();
const camera=new T.PerspectiveCamera(70,1,.035,210);
rig.add(eye);eye.add(camera);scene.add(rig);
const arena=buildArena(scene,renderer);
const vrEffects=createVrEffects(renderer);
const vrFovMask=createVrFovMask();
scene.add(vrFovMask);
const updateRayProbe=addRayProbe(arena.probe);
const settings=createSettings(mobileScreen);
const defaults={...settings};
try{
  const saved=Number(localStorage.getItem('gorilla-lab-step-volume'));
  if(Number.isInteger(saved)&&saved>=1&&saved<=10)settings.stepVolume=saved;
}catch{}
const steps=createStepSound();
for(const event of ['pointerdown','keydown'])addEventListener(event,steps.unlock,{passive:true});
const debugView=createDebugView(scene);
// The preceding frame's foot contact guides keyboard/joystick movement.
const walkingSupport={normal:new T.Vector3(),surface:null};
const bodyProxies=[.18,.17,.105].map(radius=>({radius,position:new T.Vector3()}));
const boot=new T.Vector3(labSpawn.x,labSpawn.y,labSpawn.z);
rig.position.copy(boot);
const velocity=new T.Vector3();
const delta=new T.Vector3(), worldHead=new T.Vector3(), rotated=new T.Vector3(), head=new T.Vector3();
const point=new T.Vector3(), prior=new T.Vector3(), candidate=new T.Vector3(), scratch=new T.Vector3();
const priorPlayer=new T.Vector3(),appliedMove=new T.Vector3(),previousHead=new T.Vector3(),playerNormal=new T.Vector3();
const HEAD_RADIUS=.105,bodyCollisionBack=new T.Vector3();
let hasPreviousHead=false,grounded=false;

let launchCount=0,lastLaunch=null;
let refreshOptions=[],fpsGoal=100;
const up=new T.Vector3(0,1,0), spin=new T.Quaternion();
let yaw=0,bodyYaw=0,pitch=0, drop=0, standingHeight=NaN, snap=false, frameTime=0,fps=0,windowFrames=0,windowElapsed=0,qualityTimer=0,lowCount=0,highCount=0,liveLevel=settings.quality,refreshRate=72;
let menu=false,panelHand='left',page=new URLSearchParams(location.search).has('room')?5:0,renderPage=0,spawnPage=0,mapPage=0,hudDirty=true,lastDraw=0;
const blocked=[],handBoxes=[];
let activeBoxes=arena.boxes;
const geometry=new T.IcosahedronGeometry(1,0);
const avatarColor=1+Math.floor(Math.random()*(avatarPalettes.length-1));
const avatarStyle=createAvatarStyle(avatarColor);
const {hand:white,fur}=avatarStyle;
function shape(parent,material,x,y,z,sx,sy,sz) {
  const m=new T.Mesh(geometry,material);
  m.position.set(x,y,z);m.scale.set(sx,sy,sz);
  parent.add(m);m.castShadow=true;return m;
}
const modelPack=readModelPack(localStorage);
const modelSignature=modelPack.models.length?'|atelier-'+mapCode(JSON.stringify(modelPack)):'';
const avatarHead=createModelAvatarHead(modelPack)??avatarStyle.createHead();
avatarHead.visible=false;scene.add(avatarHead);
const headForward=new T.Vector3(),headRotation=new T.Quaternion(),panelFacing=new T.Vector3();
const bodyBack=new T.Vector3(),bodyEuler=new T.Euler(0,0,0,'YXZ');
const neck=new T.Vector3(), wristReach=new T.Vector3(), torsoTilt=new T.Vector2();
const inverseYaw=new T.Quaternion();
let currentGravity=9.81,lastPlayerDiagnostics=null;
const bodyInverse=new T.Quaternion(),bodyHands=[null,null];
function armSegmentLength(){return .24+settings.arms*.036;}
function animateFingers(hand,buttons,dt){
  const thumbDown=Math.max(...[3,4,5].map(i=>buttons[i]?.pressed?1:buttons[i]?.touched?.48:0));
  const blend=1-Math.exp(-dt*22);
  const pressure=hand.pressure;
  pressure[0]=T.MathUtils.lerp(pressure[0],buttons[0]?.value??Number(Boolean(buttons[0]?.pressed)),blend);
  pressure[1]=T.MathUtils.lerp(pressure[1],buttons[1]?.value??Number(Boolean(buttons[1]?.pressed)),blend);
  pressure[2]=T.MathUtils.lerp(pressure[2],thumbDown,blend);
  hand.skin.pose(pressure,!settings.body);
}
const hands=['left','right'].map(side=>{
  const skin=createHandSkin(side,white,{openWrist:true});
  const {mesh}=skin;
  mesh.castShadow=true;mesh.visible=false;scene.add(mesh);
  return {side,mesh,skin,pressure:[0,0,0],bodyPose:{position:new T.Vector3(),quaternion:new T.Quaternion()},
    target:new T.Vector3(),gripPosition:new T.Vector3(),
    valid:false,surface:null,held:null,grip:false,trigger:false,menu:false,controllerRotation:new T.Quaternion(),aimDirection:new T.Vector3(),supportOffset:new T.Vector3(),hasSupport:false};
});
const locomotion=new GorillaLocomotion(T.Vector3,hands,palmContact);
const bodySkin=createBodySkin(fur,hands.map(h=>({geometry:h.mesh.geometry,wristIndices:h.skin.wristIndices})));
for(const h of hands){
  const geometry=h.mesh.geometry;
  const index=[...geometry.index.array];
  const rim=h.skin.wristIndices;
  for(let i=1;i<rim.length-1;i++)index.push(rim[0],rim[i+1],rim[i]);
  geometry.setIndex(index);geometry.computeVertexNormals();
}
const monkey=bodySkin.mesh;scene.add(monkey);
// Les poses WebXR sont dans le monde. Le maillage du corps se d�forme dans son rep�re local.
function poseBody(width,stretch){
  if(!settings.body)return;
  bodyInverse.copy(monkey.quaternion).invert();
  for(let i=0;i<hands.length;i++){
    const h=hands[i];
    bodyHands[i]=h.valid?h.bodyPose:null;
    if(!h.valid)continue;
    h.bodyPose.position.copy(h.mesh.position).sub(monkey.position).applyQuaternion(bodyInverse);
    h.bodyPose.quaternion.copy(h.mesh.quaternion).premultiply(bodyInverse);
  }
  bodySkin.pose(bodyHands,armSegmentLength(),width,stretch,settings.hands);
}

const objectSpecs=createArenaObjectSpecs();
const basicTypes=[0,1,2,3,4,5],detailTypes=[7,8,9,10,11,12,13,14];
const CAMERA_TYPE=15;
const cameraHull=boxCollider(new T.Vector3(.13,.088,.115));
const cameraGeometry=new T.BoxGeometry(.26,.176,.23);
const cameraAtlas=new T.MeshStandardMaterial({color:'#536771',roughness:.36,metalness:.28});
objectSpecs[CAMERA_TYPE]={name:'Cam�ra du spectateur',geo:cameraGeometry,material:cameraAtlas,shape:cameraHull,lowShape:cameraHull,mass:1.2};
const {props:animatedProps,animate:animateProps}=makeAnimatedProps();
const workshopProps=createModelPropDefinitions(modelPack).slice(0,36);
const animatedTypes=[],workshopTypes=[];
// L'index du catalogue sert aussi d'identifiant de type dans les paquets r�seau.
function registerProps(specs,types){
  for(const {collisionGeo,sphere=0,...spec} of specs){
    const shape=colliderFor(collisionGeo??spec.geo,sphere);
    types.push(objectSpecs.length);
    objectSpecs.push({...spec,shape,lowShape:shape});
  }
}
registerProps(animatedProps,animatedTypes);
registerProps(workshopProps,workshopTypes);
const spawnTypes=[...basicTypes,...detailTypes,...animatedTypes,...workshopTypes];
objectSpecs[8].properties={supportWhileHeld:true};
objectSpecs[11].properties={supportWhileHeld:true};
function supportAxisFor(spec){
  if(!spec.properties?.supportWhileHeld)return null;
  spec.geo.computeBoundingBox();
  const axisSize=spec.geo.boundingBox.getSize(new T.Vector3());
  const k=axisSize.x>=axisSize.y&&axisSize.x>=axisSize.z?0:axisSize.y>=axisSize.z?1:2;
  return new T.Vector3().setComponent(k,axisSize.getComponent(k)*.49);
}
for(const spec of objectSpecs)spec.supportAxis=supportAxisFor(spec);
function cameraDetails(mesh){
  const lens=new T.Mesh(new T.CylinderGeometry(.058,.074,.10,12).rotateX(Math.PI/2),
    new T.MeshStandardMaterial({color:'#28313a',roughness:.30,metalness:.5}));
  lens.position.z=-.15;mesh.add(lens);
  const glass=new T.Mesh(new T.CircleGeometry(.048,12),new T.MeshBasicMaterial({color:'#7bd7ed',side:T.DoubleSide}));
  glass.position.z=-.203;mesh.add(glass);
  const status=new T.Mesh(new T.BoxGeometry(.045,.013,.012),new T.MeshBasicMaterial({color:'#f46669'}));
  status.position.set(.083,.075,-.122);mesh.add(status);
}
function makePropMesh(type,ownMaterial=false){
  const spec=objectSpecs[type];
  if(!spec)return null;
  const mesh=new T.Mesh(spec.geo,ownMaterial?clonePropMaterial(spec.material):spec.material);
  mesh.castShadow=mesh.receiveShadow=true;
  if(type===CAMERA_TYPE)cameraDetails(mesh);
  return mesh;
}
let maps=null;
const objects=[],noBodies=[];
const targetFrameCache={model:null,bounds:null,center:new T.Vector3(),size:new T.Vector3()};
const targetFrame={position:new T.Vector3(),right:new T.Vector3(),up:new T.Vector3(),normal:new T.Vector3(),scaleX:1,scaleY:1};
const targetRotation=new T.Quaternion(),targetOffset=new T.Vector3(),targetEuler=new T.Euler(0,0,0,'YXZ');
function editableTargetFrame(){
  const piece=maps?.getAssetPiece?.('range-target');
  if(!piece)return null;
  if(targetFrameCache.model!==piece.model){
    targetFrameCache.model=piece.model;
    const bounds=modelBounds(piece.model);
    bounds.getCenter(targetFrameCache.center);bounds.getSize(targetFrameCache.size);
  }
  const {center,size}=targetFrameCache;
  targetEuler.set(T.MathUtils.degToRad(piece.pitch),T.MathUtils.degToRad(piece.yaw),T.MathUtils.degToRad(piece.roll??0),'YXZ');
  targetRotation.setFromEuler(targetEuler);
  targetFrame.position.set(piece.x,piece.y,piece.z);
  targetOffset.set(
    -center.x/Math.max(.0001,size.x)*piece.w,
    -center.y/Math.max(.0001,size.y)*piece.h,
    -center.z/Math.max(.0001,size.z)*piece.d
  ).applyQuaternion(targetRotation);
  targetFrame.position.add(targetOffset);
  targetFrame.right.set(1,0,0).applyQuaternion(targetRotation);
  targetFrame.up.set(0,1,0).applyQuaternion(targetRotation);
  targetFrame.normal.set(0,0,1).applyQuaternion(targetRotation);
  targetFrame.scaleX=piece.w/Math.max(.0001,size.x);
  targetFrame.scaleY=piece.h/Math.max(.0001,size.y);
  return targetFrame;
}
const desktopActor={held:null},remoteActors=new Map();
let remoteHeld=0;
let nextNetId=1;
const gripRotation=new T.Quaternion(), inverseGrip=new T.Quaternion();
const spawnPoint=new T.Vector3(),spawnDirection=new T.Vector3(),spawnOrigin=new T.Vector3(),spawnHit=new T.Vector3(),spawnNormal=new T.Vector3();
// Le point de spawn est d�gag� � la fois vers le joueur et autour de l'objet.
function findSpawn(origin,yawAngle,radius){
  for(const angle of [0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){
    spawnDirection.set(0,0,-1).applyAxisAngle(up,yawAngle+angle);
    for(const extra of [0,.52,1.04]){
      const distance=Math.max(1.48,radius+.68)+extra;
      spawnPoint.copy(origin).addScaledVector(spawnDirection,distance);
      spawnPoint.y+=.15;
      if(handContact(origin,spawnPoint,Math.min(.2,radius*.5),activeBoxes,spawnHit,spawnNormal))continue;
      if(objects.some(o=>o.mesh.position.distanceToSquared(spawnPoint)<(radius+o.radius+.07)**2))continue;
      return spawnPoint;
    }
  }
  return null;
}
function spawnObject(index,origin,actor,quiet=false){
  const spec=objectSpecs[index];
  if(!spec)return null;
  if(!origin){
    if(actor)spawnOrigin.set(actor.x,actor.y,actor.z);
    else if(renderer.xr.isPresenting)spawnOrigin.copy(worldHead);
    else camera.getWorldPosition(spawnOrigin);
    origin=findSpawn(spawnOrigin,actor?.yaw??bodyYaw,spec.shape.radius);
    if(!origin){if(!quiet)showGameHint('Aucun espace libre pour cet objet.');return null;}
  }
  const mesh=makePropMesh(index);
  mesh.position.copy(origin);scene.add(mesh);
  const selectedShape=settings.preciseHitboxes?spec.shape:(spec.lowShape??spec.shape);
  const body={mesh,spec,netId:nextNetId++,netType:index,beforePhysics:mesh.position.clone(),blocksPlayer:spec.properties?.collidable!==false,precise:settings.preciseHitboxes,type:spec.name,shape:selectedShape,radius:selectedShape.radius,mass:spec.mass,start:mesh.position.clone(),
    owner:null,velocity:new T.Vector3(),angular:new T.Vector3(),offset:new T.Vector3(),
    relativeRotation:new T.Quaternion(),shadow:arena.shadow(spec.shape.radius)};
  body.frozen=Boolean(spec.properties?.frozen);body.collidable=spec.properties?.collidable!==false;body.grabbable=spec.properties?.grabbable!==false;body.toolHold=false;body.protected=index===CAMERA_TYPE;body.paint=0;body.materialStyle=-1;
  if(body.blocksPlayer)body.handCollider={objectBody:body,friction:.96,gravity:1};
  objects.push(body);placeObject(body,arena.boxes);
  return body;
}
function releaseAll(){
  for(const hand of hands)release(hand,false);
  release(desktopActor,false);
  for(const actor of remoteActors.values())release(actor,false);
}
function clearObjects(){
  releaseAll();
  for(const body of objects){scene.remove(body.mesh,body.shadow);if(body.customMaterial)for(const mat of Array.isArray(body.mesh.material)?body.mesh.material:[body.mesh.material])mat.dispose();}
  objects.length=0;
  remoteActors.clear();
}
function spawnSamples(){
  if(maps?.assetLayer)return;
  const represented=new Set(maps?.placedModels?.().map(piece=>piece.model.assetId).filter(Boolean)??[]);
  forEachStartupObject((type,position)=>{
    if(!represented.has(spawnAssetIds[type]))spawnObject(type,position);
  });
}
spawnSamples();
function release(hand,launch=true) {
  const object=hand.held;
  if(!object) return;
  object.owner=null;hand.held=null;object.toolHold=false;
  object.velocity.multiplyScalar(launch? .55+settings.throw*.12:0).clampLength(0,23);
  if(launch) object.angular.clampLength(0,24); else object.angular.set(0,0,0);
}
function resetObjects(){
  releaseAll();
  for(const object of objects){
    object.mesh.position.copy(object.start);object.mesh.quaternion.identity();object.velocity.set(0,0,0);object.angular.set(0,0,0);object.frozen=Boolean(object.spec.properties?.frozen);
  }
}
function resetPlayer(){
  standingHeight=NaN;drop=0;
  blaster.reset();
  rig.position.copy(boot);yaw=T.MathUtils.degToRad(maps.yaw);pitch=0;rig.rotation.y=yaw;
  velocity.set(0,0,0);snap=false;grounded=false;walkingSupport.normal.set(0,0,0);walkingSupport.surface=null;hasPreviousHead=false;locomotion.reset();steps.reset();torsoTilt.set(0,0);
  for(const hand of hands){hand.valid=false;hand.hapticGrounded=false;hand.hapticCooldown=0;hand.gamepad=null;release(hand,false);}

}
resetObjects();
function useQualityBudget(){return settings.auto||mobileScreen&&!renderer.xr.isPresenting;}
function shadowLevel(){return useQualityBudget()?Math.min(settings.shadowQuality,liveLevel):settings.shadowQuality;}
function lightLevel(){return useQualityBudget()?Math.min(settings.lightQuality,liveLevel):settings.lightQuality;}
// La qualit� automatique borne les niveaux num�riques. Les interrupteurs restent ind�pendants.
function applyVisual(){
  const effectiveTexture=settings.texturePower;
  arena.visual(liveLevel,settings.shadows?shadowLevel():0,lightLevel(),settings.reflections,settings.bloom,settings.textures,2**(effectiveTexture-1),settings.lightmap);
  maps.refreshMaterials?.();
  renderer.shadowMap.needsUpdate=true;
  arena.setTimeOfDay(spectator.remoteLight??settings.timeOfDay-1);
  activeLights=lightSlots.slice(0,lightLevel()>=8?3:lightLevel()>=4?2:1);
  shaderMode.value=settings.shaderMode-1;
  const hardwareFocus=renderer.xr.isPresenting&&renderer.xr.getBaseLayer?.()?.fixedFoveation!=null;
  arena.focus(settings.focus&&!hardwareFocus,settings.focusStrength,settings.focusSize);
  renderer.toneMappingExposure=.58+settings.exposure*.114;
  photoContrast.value=.55+settings.contrast*.09;
  photoSaturation.value=settings.saturation*.20;
  photoWarmth.value=(settings.warmth-5)*.022;
  renderer.xr.setFoveation(settings.focus?T.MathUtils.clamp((settings.focusStrength+1)*.105+(5-settings.focusSize)*.028+(settings.auto?(7-liveLevel)*.045:0),0,1):0);
  if(!renderer.xr.isPresenting) resize();
  hudDirty=true;
  fixtures.redraw();
}
let renderWidth=0,renderHeight=0,renderScale=0;
function resize(){
  if(renderer.xr.isPresenting)return;
  // Le buffer suit sa bo�te CSS en portrait et en paysage, y compris autour des zones s�res.
  const width=Math.max(1,gameCanvas.clientWidth||innerWidth),height=Math.max(1,gameCanvas.clientHeight||innerHeight);
  const scale=screenPixelRatio(liveLevel,devicePixelRatio,mobileScreen);
  if(scale!==renderScale){renderer.setPixelRatio(scale);renderScale=scale;}
  if(width!==renderWidth||height!==renderHeight){
    renderer.setSize(width,height,false);renderWidth=width;renderHeight=height;
  }
  camera.aspect=width/height;camera.fov=settings.viewFov;camera.updateProjectionMatrix();
}
addEventListener('resize',resize);
globalThis.visualViewport?.addEventListener('resize',resize);

function usePreset(name){
  Object.assign(settings,{textures:true,contrast:5,saturation:5,exposure:5,warmth:5},visualPresets[name]);
  liveLevel=settings.quality;
  lowCount=highCount=qualityTimer=0;
  applyVisual();
}

const sections=[
  ['Locomotion',[
    ['Appuis Gorilla','movement'],['Collisions','collisions'],['Grip','grip'],['Glissement','slide'],
    ['Gravit�','gravity'],['Impulsion','jump'],['Poids','weight'],['Taille','size'],['Longueur des bras','arms'],
    ['Vibration des appuis','stepHaptics'],['Retour au d�part',resetPlayer],
  ]],
  ['Objets',[
    ['Objets actifs','objects'],['Hitboxes objets','preciseHitboxes'],['Rebond','bounce'],['Force du lancer','throw'],['R�initialiser les objets',requestResetObjects],
  ]],
  ['Rendu',[]],
];
const renderGroups=[
  ['Image',[['Shader','shaderMode'],['Ambiance','timeOfDay'],['FOV PC / mobile','viewFov'],['FOV VR','vrFov'],['Exposition','exposure'],['Contraste','contrast'],
    ['Saturation','saturation'],['Chaleur','warmth'],['Corps du singe','body'],['Mains','hands']]],
  ['Lumi�re',[['Ombres','shadows'],['Qualit� des ombres','shadowQuality'],['Qualit� des lumi�res','lightQuality'],
    ['Carte de lumi�re','lightmap'],['Reflets','reflections'],['Bloom du soleil','bloom']]],
  ['Performance',[['Pr�r�glage','preset'],['Qualit� automatique','auto'],['Qualit� manuelle','quality'],
    ['R�solution XR','resolution'],['Textures','textures'],['Max. textures','texturePower']]],
  ['Effets',[['Post FX VR','post'],['Ray tracing VR','rayTrace'],['Activer le focus','focus'],
    ['Intensit� du focus','focusStrength'],['Zone nette du focus','focusSize']]],
];
function currentRows(){return page===2?renderGroups[renderPage][1]:page===3?spawnGroups[spawnPage][1]:page===4?mapGroups[mapPage][1]:sections[page][1];}
function selectPage(index){page=index;hudDirty=true;}
let reportSnapshot=null, rawFrameMs=[], frameSampleIndex=0, diagAt=0, lastVR=null, reportHadVR=false, contactFrames=0, trackedFrames=0, renderStats={};
const lightSlots=Array.from({length:3},()=>{
  const light=new T.PointLight('#ffffff',0,22,1.60);
  light.visible=false;scene.add(light);
  return {light,mesh:null,distance:Infinity};
});
let activeLights=lightSlots;
const lightView=new T.Vector3();
function addPropLight(mesh){
  const mat=Array.isArray(mesh.material)?mesh.material[0]:mesh.material;
  if(!mesh.visible||!mat||mat.emissiveIntensity<1||mat.emissive.getHex()===0)return;
  const distance=mesh.position.distanceToSquared(lightView);
  if(distance>34**2)return;
  let farthest=activeLights[0];
  for(const slot of activeLights)if(slot.distance>farthest.distance)farthest=slot;
  if(distance<farthest.distance){farthest.mesh=mesh;farthest.distance=distance;}
}
function updatePropLights(spectating){
  if(spectating)camera.getWorldPosition(lightView);else lightView.copy(worldHead);
  for(const slot of lightSlots){slot.mesh=null;slot.distance=Infinity;}
  if(spectating)spectator.forEachReplica(addPropLight);
  else if(settings.objects)for(const body of objects)if(body.materialStyle===3)addPropLight(body.mesh);
  const range=20+lightLevel()*.75;
  for(const {light,mesh} of lightSlots){
    light.distance=range;
    light.visible=Boolean(mesh);
    light.intensity=mesh?132:0;
    if(mesh){light.position.copy(mesh.position);light.color.copy((Array.isArray(mesh.material)?mesh.material[0]:mesh.material).emissive);}
  }
}
// Une capture garde les derni�res mesures VR pour un t�l�chargement apr�s la session.
function captureReport(){
  const sorted=rawFrameMs.slice().sort((a,b)=>a-b);
  const percentile=p=>sorted.length?Number(sorted[Math.min(sorted.length-1,Math.floor((sorted.length-1)*p))].toFixed(2)):null;
  reportSnapshot={
    game:'Gorilla Lab',version:labRelease.toLowerCase(),time:new Date().toISOString(),
    mode:reportHadVR?'VR':'PC',settings:{...settings},qualityActive:liveLevel,
    debug:lastPlayerDiagnostics,audio:{volume:settings.stepVolume,enabled:settings.stepAudio,clipsPlayed:steps.count,state:steps.state},
    performance:{fps,frames:sorted.length,frameMs:{median:percentile(.5),p95:percentile(.95),max:percentile(1)}},
    xr:lastVR,renderer:renderStats,terrainSeed:arena.hillSeed,map:maps.active?{name:maps.name,pieces:maps.nodes}:null,objects:{total:objects.length,held:objects.filter(o=>o.owner).length,frozen:objects.filter(o=>o.frozen).length},cloud:{role:spectator.role,connected:spectator.connected,replicas:spectator.replicaCount,...spectator.stats},targetScore:fixtures.score(),locomotion:{trackedFrames,contactFrames,launchCount,lastLaunch,standingHeight:Number.isFinite(standingHeight)?standingHeight:null,viewOffset:drop},
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
sections[1][1].push(['Tool Gun','toolActive'],['Action Tool Gun','toolMode'],['Pistolet de tir','blasterActive'],['Capturer un rapport',captureReport]);
const workshopGroups=Array.from({length:Math.ceil(workshopTypes.length/8)},(_,i)=>['Atelier'+(workshopTypes.length>8?' '+(i+1):''),workshopTypes.slice(i*8,i*8+8)]);
const spawnGroups=[['Basiques',basicTypes],['D�taill�s',detailTypes],['Anim�s',animatedTypes],...workshopGroups].map(([label,types])=>[
  label,[...types.map(i=>[objectSpecs[i].name,()=>requestSpawn(i)]),['Tout retirer',clearSpawnBank]],
]);
sections.push(['Spawn',[]]);
const mapGroups=[['Construction',[
  ['�diteur VR','mapEdit'],['Action','mapMode'],['Pi�ce','mapShape'],['Mat�riau','mapMaterial'],['Surface','mapSurface'],['Rotation','mapTurn'],['Texture raccordable','mapTexture'],
  ['Cr�er atelier vide',()=>{maps.blank();settings.mapEdit=true;}],['Annuler placement',()=>maps.undo()],
]],['Terrain',[
  ['D�tail du maillage','terrainResolution'],['Amplitude du bruit','terrainAmplitude'],['Fr�quence du bruit','terrainFrequency'],
  ['Graine','terrainSeed'],['Herbe','terrainGrass'],['Buissons','terrainShrub'],['Rayon de la brosse','brushRadius'],['Force de la brosse','brushStrength'],
  ['Enregistrer d�part',()=>maps.recenter(worldHead.x,rig.position.y,worldHead.z,bodyYaw)],
  ['Revenir � l'ar�ne',()=>{maps.reset();settings.mapEdit=false;}],
]],['Mod�le',[
  ['Saisissable','modelGrab'],['Fig� au d�part','modelFrozen'],['Collisions du mod�le','modelCollidable'],
  ['Appui pendant la prise','modelSupport'],['Sauver comme objet',()=>saveVRModel(false)],['Utiliser comme t�te',()=>saveVRModel(true)],
]]];
sections.push(['Carte',[]],['En ligne',[]],['Debug',[
  ['Prises et paumes','debugPalm'],['Hitboxes visibles','debugHitboxes'],
  ['Collisions sans maillage','debugInvisible'],['Forces et vitesse','debugForces'],
  ['Corps et t�te','debugBody'],['Vitesse simulation','debugSpeed'],
  ['Son des appuis','stepAudio'],['Volume des appuis','stepVolume'],
  ['�couter un pas',previewStep],['Capturer un rapport',captureReport],
]]);
function previewStep(){steps.unlock().then(()=>steps.play(settings.stepVolume));}
function saveStepVolume(){try{localStorage.setItem('gorilla-lab-step-volume',String(settings.stepVolume));}catch{}}
const title=document.querySelector('#section'), desktop=document.querySelector('#settings');
const readings=document.querySelector('#readings');
const debugSpeeds=[1,.75,.5,.25];
function change(key,step){
  if(key==='debugSpeed'){
    settings.debugSpeed=T.MathUtils.clamp(settings.debugSpeed+step,1,debugSpeeds.length);
    locomotion.reset();hudDirty=true;return;
  }
  if(key==='stepVolume'){
    settings.stepVolume=T.MathUtils.clamp(settings.stepVolume+step,1,10);
    saveStepVolume();hudDirty=true;return;
  }
  if(key==='viewFov'){
    settings.viewFov=T.MathUtils.clamp(settings.viewFov+5*step,50,105);
    resize();hudDirty=true;return;
  }
  if(key==='vrFov'){
    settings.vrFov=T.MathUtils.clamp(settings.vrFov+5*step,55,100);
    hudDirty=true;return;
  }
  if(key==='shaderMode'){
    settings.shaderMode=(settings.shaderMode-1+step+shaderNames.length)%shaderNames.length+1;
    shaderMode.value=settings.shaderMode-1;hudDirty=true;return;
  }
  if(key==='timeOfDay'){
    if(spectator.role==='player'){
      const next=((spectator.remoteLight??settings.timeOfDay-1)+step+3)%3;
      spectator.sendAction({type:'world',mode:1,typeId:next});
    }else settings.timeOfDay=(settings.timeOfDay-1+step+3)%3+1;
    applyVisual();return;
  }
  const mapValues={mapMode:9,mapShape:5,mapMaterial:mapMaterials.length,mapSurface:4,mapTurn:8,mapTexture:texturePresets.length+1,terrainResolution:4};
  if(Object.hasOwn(mapValues,key)){
    const max=mapValues[key];
    settings[key]=(settings[key]-1+step+max)%max+1;hudDirty=true;return;
  }
  if(key==='mapEdit'&&!settings.mapEdit&&!maps.active)maps.load(arenaMap(arena.boxes));
  if(key==='toolMode'){
    settings.toolMode=(settings.toolMode-1+step+toolModes.length)%toolModes.length+1;
    if(!renderer.xr.isPresenting)showGameHint('Outil � '+toolModes[settings.toolMode-1]);
    hudDirty=true;return;
  }
  if(key==='preset'){ 
    const names=Object.keys(visualPresets);
    settings.preset=(settings.preset-1+step+names.length)%names.length+1;
    usePreset(names[settings.preset-1]);
    return;
  }
  if(typeof settings[key]==='boolean') settings[key]=!settings[key];
  else settings[key]=T.MathUtils.clamp(settings[key]+step,1,key==='texturePower'?12:key==='toolMode'?7:10);
  if(key==='size'||key==='arms') for(const hand of hands) {hand.valid=false;hand.surface=null;}
  if(key==='quality'){settings.auto=false;liveLevel=settings.quality;}
  if(key==='auto'&&!settings.auto) liveLevel=settings.quality;
  if(key==='movement'||key==='collisions') for(const h of hands) h.surface=null;
  if(key==='objects'&&!settings.objects) resetObjects();
  if(key==='blasterActive'&&settings.blasterActive)settings.toolActive=false;
  if(key==='toolActive'&&settings.toolActive)settings.blasterActive=false;
  if(!settings.toolActive&&(key==='toolActive'||key==='blasterActive')){
    for(const h of hands)if(h.held?.toolHold)release(h,false);
    releaseFlat(false);
  }
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
  const rows=(page===2?renderGroups:page===4?mapGroups:null)?.flatMap(group=>group[1])??currentRows();
  for(const [,key] of rows) if(typeof key==='string') settings[key]=defaults[key];
  if(page===6){saveStepVolume();locomotion.reset();}
  if(page===0) resetPlayer();
  if(page===1){syncHitboxes();resetObjects();}
  if(page===3)clearSpawnBank();
  if(page===2) liveLevel=settings.quality;
  applyVisual();
}
function button(text,action){
  const b=document.createElement('button');b.textContent=text;
  b.onclick=()=>{action();desktopMenu();hudDirty=true;};return b;
}
function toggleLabel(key){return key==='preciseHitboxes'?(settings[key]?'High':'Low'):(settings[key]?'Actif':'Coup�');}
function settingValue(key){
  if(key==='debugSpeed')return spectator.role?'�1 en ligne':'�'+debugSpeeds[settings.debugSpeed-1];
  if(key==='stepVolume')return settings.stepVolume+'/10';
  if(key==='viewFov')return settings.viewFov+'�';
  if(key==='vrFov')return settings.vrFov===100?'Natif':settings.vrFov+' %';
  if(key==='mapTexture')return settings[key]===1?'Aucune':texturePresets[settings[key]-2];
  if(key==='terrainResolution')return [8,16,32,48][settings[key]-1]+'�';
  if(key==='shaderMode')return shaderNames[settings.shaderMode-1];
  if(key==='shadowQuality'||key==='lightQuality'){
    const chosen=settings[key],active=key==='shadowQuality'?shadowLevel():lightLevel();
    return active===chosen?chosen+'/10':chosen+'/10 � '+active+(settings.auto?' auto':' mobile');
  }
  if(key==='timeOfDay')return ['Jour','Coucher de soleil','Nuit'][spectator.remoteLight??settings.timeOfDay-1]; if(key==='mapMode')return mapToolNames[settings.mapMode-1]; if(key==='mapShape')return mapShapeNames[settings.mapShape-1]; if(key==='mapSurface')return mapSurfaceNames[settings.mapSurface-1]; if(key==='mapMaterial')return mapMaterials[settings.mapMaterial-1]; if(key==='mapTurn')return (settings.mapTurn-1)*45+'�'; if(key==='toolMode')return toolModes[settings.toolMode-1]; if(key==='preset')return Object.keys(visualPresets)[settings.preset-1]; return key==="texturePower"?[2**(settings[key]-1),2**(settings[key]-1)].join("�"):settings[key];}
function menuGroups(){return page===2?renderGroups:page===3?spawnGroups:mapGroups;}
function currentGroup(){return page===2?renderPage:page===3?spawnPage:mapPage;}
function selectGroup(index){if(page===2)renderPage=index;else if(page===3)spawnPage=index;else mapPage=index;}
function actionLabel(key){
  if(key===captureReport)return 'Capturer';
  if(key===previewStep)return '�couter';
  if(key===clearObjects||key===clearSpawnBank)return 'Vider';
  if(key===resetPlayer||key===requestResetObjects)return 'R�initialiser';
  return page===3?'Cr�er':'Appliquer';
}
// Le navigateur et le panneau VR drawPanel() lisent les m�mes sections et r�glages.
function desktopMenu(){
  title.textContent=sections[page][0];
  desktopTabs.forEach((tab,index)=>tab.setAttribute('aria-pressed',String(index===page)));
  desktop.replaceChildren();
  onlinePanel.hidden=page!==5;
  document.querySelector('#restore').hidden=page===5;
  if(page===5)return;
  if(page>=2&&page<=4){
    const groups=document.createElement('nav');
    groups.setAttribute('aria-label','Cat�gories');
    menuGroups().forEach(([label],index)=>{
      const tab=button(label,()=>selectGroup(index));
      tab.setAttribute('aria-pressed',String(currentGroup()===index));groups.append(tab);
    });
    desktop.append(groups);
  }
  if(page===6){
    const legend=document.createElement('small');
    legend.textContent='Cyan : prise � Vert : paume � Jaune : hitboxes � Rose : collisions invisibles � Orange : normales � Bleu : vitesse � Rouge : gravit� � Cr�me : d�placement';
    desktop.append(legend);
  }
  for(const [name,key] of currentRows()){
    const row=document.createElement('div');row.className='setting';row.append(name);
    const controls=document.createElement('span');
    if(typeof key==='function') controls.append(button(actionLabel(key),key));
    else if(typeof settings[key]==='boolean') controls.append(button(toggleLabel(key),()=>change(key,1)));
    else controls.append(button('-',()=>change(key,-1)),document.createTextNode(' '+settingValue(key)+' '),button('+',()=>change(key,1)));
    row.append(controls);desktop.append(row);
  }
}
const desktopTabs=document.querySelectorAll('[data-page]');
const onlinePanel=document.querySelector('#cloud-access');
desktopTabs.forEach((b,i)=>b.onclick=()=>{selectPage(i);desktopMenu();});
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
const reflectionView=new T.PerspectiveCamera(75,1,.07,140);
const mirrorFace=new Reflector(new T.PlaneGeometry(1.7,1.95),{
  color:0xf4f6ff,textureWidth:mobileScreen?128:256,textureHeight:mobileScreen?128:256,clipBias:.004,multisample:0,
});
const mirrorNormal=new T.Vector3(0,0,-1),toMirror=new T.Vector3(),mirrorForward=new T.Vector3();
mirrorFace.position.set(labMirror.x,labMirror.y,labMirror.z);
mirrorFace.rotation.y=Math.PI;
scene.add(mirrorFace);
const mirrorBacking=new T.Mesh(new T.BoxGeometry(1.8,2.03,.10),new T.MeshLambertMaterial({color:'#344650'}));
mirrorBacking.position.copy(mirrorFace.position).z+=.064;
scene.add(mirrorBacking);
const renderReflection=mirrorFace.onBeforeRender.bind(mirrorFace);
mirrorFace.onBeforeRender=()=>{};
mirrorFace.visible=false;
let lastMirrorRender=-Infinity;
// Le miroir ne redessine la sc�ne que s'il est proche, visible et hors de son d�lai de mise � jour.
function updateMirror(now,pose){
  reflectionView.position.copy(worldHead);
  if(pose){
    const q=pose.transform.orientation;
    reflectionView.quaternion.set(q.x,q.y,q.z,q.w).premultiply(headRotation.setFromAxisAngle(up,yaw));
  }else camera.getWorldQuaternion(reflectionView.quaternion);
  mirrorForward.set(0,0,-1).applyQuaternion(reflectionView.quaternion);
  toMirror.subVectors(mirrorFace.position,worldHead);
  const distance=toMirror.length();
  mirrorFace.visible=maps.builtIn&&settings.reflections&&distance<4&&toMirror.dot(mirrorNormal)<-.15&&
    toMirror.multiplyScalar(1/Math.max(.001,distance)).dot(mirrorForward)>.66;
  if(!mirrorFace.visible){lastMirrorRender=-Infinity;return;}
  if(now-lastMirrorRender<(mobileScreen&&!renderer.xr.isPresenting?110:45))return;
  lastMirrorRender=now;
  reflectionView.updateMatrixWorld(true);mirrorFace.updateMatrixWorld(true);
  avatarHead.visible=settings.body;
  try{renderReflection(renderer,scene,reflectionView);}finally{avatarHead.visible=false;}
}
const ray=new T.Raycaster(), raySource=new T.Vector3(), forward=new T.Vector3();
const coconutPosition=new T.Vector3(), fixtureTouchPoint=new T.Vector3(), fixtureKeyPoint=new T.Vector3();
let fixtureAim=null, toolLook=null, mapLook=null;
const beforeFixtures=new Set(scene.children);
const fixtures=addLabFixtures(scene,arena.boxes,{
  spawn:requestSpawn,clear:clearSpawnBank,resetPlayer,resetObjects:requestResetObjects,
  resetTree:()=>requestObjectChange(2,resetCoconuts),
  quality:()=>liveLevel+'/10',
  resolution:()=>settings.resolution+'/10 � relancer VR',
  textureSize:()=>settingValue('texturePower'),
  qualityNext:()=>{if(settings.quality>=10)settings.quality=0;change('quality',1);},
  resolutionNext:()=>{if(settings.resolution>=10)settings.resolution=0;change('resolution',1);},
  textureNext:()=>{if(settings.texturePower>=12)settings.texturePower=0;change('texturePower',1);},
  hitbox:()=>change('preciseHitboxes',1), movement:()=>change('movement',1),
});
const mapToolNames=['Poser','D�placer','Supprimer','Peindre','Monter','Creuser','Lisser','Aplanir','Appliquer le bruit'];
const mapShapeNames=['Bloc','Rampe','Mur','Dalle','Terrain'];
const mapSurfaceNames=['Normale','Glace','Caoutchouc','Lune'];
// Map-created objects use the same object physics as props spawned from the menu.
const placedModelTypes=new Map();
function spawnPlacedModels(){
  for(const piece of maps.placedModels()){
    const key=JSON.stringify([piece.model,piece.w,piece.h,piece.d]);
    let type=placedModelTypes.get(key);
    if(type===undefined){
      const geo=createModelUnitGeometry(piece.model);
      geo.scale(piece.w,piece.h,piece.d);
      const collisionGeo=modelCollisionGeometry(piece.model,new T.Vector3(piece.w,piece.h,piece.d));
      const shape=colliderFor(collisionGeo);
      collisionGeo.dispose();
      type=objectSpecs.length;
      objectSpecs.push({
        id:piece.model.id,name:piece.model.name,geo,material:createModelMaterial(piece.model),
        shape,lowShape:shape,
        assetId:piece.model.assetId??null,
        properties:{...piece.model.properties,grabbable:piece.model.properties.grabbable!==false},
        mass:T.MathUtils.clamp(piece.w*piece.h*piece.d*9,.18,12)
      });
      placedModelTypes.set(key,type);
    }
    const body=spawnObject(type,new T.Vector3(piece.x,piece.y,piece.z),null,true);
    if(body){
      body.mesh.rotation.set(T.MathUtils.degToRad(piece.pitch),T.MathUtils.degToRad(piece.yaw),T.MathUtils.degToRad(piece.roll??0),'YXZ');
      body.mesh.updateMatrixWorld(true);
      body.start.copy(body.mesh.position);
    }
  }
}
maps=connectMaps({scene,arena,boot,onReset:angle=>{
  clearObjects();resetPlayer();yaw=T.MathUtils.degToRad(angle);
  fixtures.coconuts.forEach(coco=>{coco.visible=!maps.assetLayer;});
  if(maps.builtIn)spawnSamples();
  spawnPlacedModels();
},onVisual:applyVisual,
  getLevel:()=>liveLevel,defaultObjects:[...arena.builtObjects,...scene.children.filter(n=>!beforeFixtures.has(n)),mirrorBacking],
});
const spectator=addSpectator({scene,currentMap:()=>(maps.signature||'arena-r25-'+arena.hillSeed)+modelSignature,
  seedArena:seed=>arena.setHillSeed(seed),
  makeReplica:type=>{
    const mesh=makePropMesh(type,true);
    if(mesh)grade(mesh.material);
    return mesh;
  },
  onAction:handleNetworkAction,
  onStatus:()=>{if(page===5)hudDirty=true;},
  onShot:shot=>blaster.receiveShot(shot,spectator.role==='vr'),
  applyLight:mode=>{arena.setTimeOfDay(mode??settings.timeOfDay-1);hudDirty=true;if(!renderer.xr.isPresenting)desktopMenu();},
  applyScore:value=>fixtures.setScore(value),
  applyCoconuts:mask=>fixtures.coconuts.forEach((coco,i)=>{coco.visible=Boolean((mask??31)&1<<i);}),
});
function saveVRModel(asHead){
  const pieces=maps.modelPieces();
  if(!pieces.length||pieces.length>modelLimits.parts){
    showGameHint('Compose un mod�le de 1 � '+modelLimits.parts+' pi�ces dans l'atelier.');return;
  }
  const pack=readModelPack(localStorage);
  if(pack.models.length>=modelLimits.models){showGameHint('La collection de mod�les est pleine.');return;}
  const min=new T.Vector3(Infinity,Infinity,Infinity),max=new T.Vector3(-Infinity,-Infinity,-Infinity);
  for(const p of pieces){min.min(new T.Vector3(p.x-p.w/2,p.y-p.h/2,p.z-p.d/2));max.max(new T.Vector3(p.x+p.w/2,p.y+p.h/2,p.z+p.d/2));}
  const center=min.clone().lerp(max,.5);
  const ratio=Math.min(1,3/Math.max(max.x-min.x,max.y-min.y,max.z-min.z));
  const id='custom-model-vr-'+Date.now().toString(36);
  const model={id,name:'Mod�le VR '+(pack.models.length+1),inGame:!asHead,properties:{
    grabbable:settings.modelGrab,frozen:settings.modelFrozen,collidable:settings.modelCollidable,supportWhileHeld:settings.modelSupport,
  },hitbox:{mode:'auto',shape:'convex',precision:48},parts:pieces.map(p=>({shape:'box',name:p.name,position:[(p.x-center.x)*ratio,(p.y-center.y)*ratio,(p.z-center.z)*ratio],
    rotation:[p.pitch,p.yaw,0],scale:[p.w*ratio,p.h*ratio,p.d*ratio],color:p.color==='#ffffff'?materialColors[p.material]:p.color,
    surface:'plain'}))};
  pack.models.push(model);
  if(asHead)pack.avatarId=id;
  try{
    localStorage.setItem(modelStorageKey,JSON.stringify(normalizeModelPack(pack)));
    showGameHint('Mod�le sauvegard�. Recharge le jeu pour l'utiliser.');
  }catch{showGameHint('Le navigateur ne peut pas enregistrer ce mod�le.');}
}
const paintedTextureCache=new Map();
function mapPiece(){
  const dims=[
    {name:'Bloc',w:1.25,h:.55,d:1.25},{name:'Rampe',w:1.75,h:.32,d:2.3,pitch:18},
    {name:'Mur',w:1.75,h:2.2,d:.38},{name:'Dalle',w:2.1,h:.25,d:2.1},{name:'Terrain',w:12,h:.12,d:12},
  ][settings.mapShape-1];
  const terrain=normalizeTerrain({detail:[8,16,32,48][settings.terrainResolution-1],
    amplitude:(settings.terrainAmplitude-1)*.34,frequency:.05+settings.terrainFrequency*.025,
    seed:settings.terrainSeed,grass:(settings.terrainGrass-1)/9,shrub:(settings.terrainShrub-1)/9});
  const textureIndex=settings.mapTexture-2;
  if(textureIndex>=0&&!paintedTextureCache.has(textureIndex))
    paintedTextureCache.set(textureIndex,seamlessTexture(textureIndex).toDataURL('image/webp',.83));
  return makePiece({...dims,material:settings.mapMaterial-1,yaw:settings.mapShape===5?0:(settings.mapTurn-1)*45,
    ...surfacePresets[Object.keys(surfacePresets)[settings.mapSurface-1]],
    texture:paintedTextureCache.get(textureIndex)??null,
    terrain:settings.mapShape===5||settings.mapMode===9?terrain:null,
    brushRadius:.5+settings.brushRadius*.5,brushStrength:settings.brushStrength*.15});
}
function aimMap(frame,space,{source,click}){
  const pose=frame.getPose(source.targetRaySpace,space);
  if(!pose)return;
  const p=pose.transform.position,q=pose.transform.orientation;
  raySource.set(p.x,p.y-drop,p.z).applyAxisAngle(up,yaw).add(rig.position);
  spin.set(q.x,q.y,q.z,q.w);
  forward.set(0,0,-1).applyQuaternion(spin).applyAxisAngle(up,yaw);
  maps.edit(raySource,forward,click,{mode:settings.mapMode,piece:mapPiece(),head:worldHead,feet:rig.position.y});
  if(click)hudDirty=true;
}
function touchFixture(hand){
  if(!maps.builtIn||!hand.valid||hand.held||hand.remoteHeld||menu)return;
  let touched=null;
  for(const key of fixtures.targets){
    key.getWorldPosition(fixtureKeyPoint);
    if(hand.mesh.position.distanceToSquared(fixtureKeyPoint)>.11**2)continue;
    key.worldToLocal(fixtureTouchPoint.copy(hand.mesh.position));
    if(Math.abs(fixtureTouchPoint.x)<key.userData.touchWidth*.5+.025&&Math.abs(fixtureTouchPoint.y)<.095&&Math.abs(fixtureTouchPoint.z)<.046){touched=key;break;}
  }
  if(touched&&hand.lastFixture!==touched)touched.userData.action();
  hand.lastFixture=touched;
}
function pluckCoconut(coco,impulse=null){
  coco.getWorldPosition(coconutPosition);
  coco.visible=false;
  if(!settings.objects)settings.objects=true;
  const object=spawnObject(6,coconutPosition);
  if(impulse)object.velocity.copy(impulse).multiplyScalar(3.5).y+=.66;
  return object;
}
function fixtureRay(origin,direction,activate){
  if(!maps.builtIn)return;
  ray.set(origin,direction);
  ray.far=5.5;
  const hits=ray.intersectObjects([...fixtures.targets,...fixtures.coconuts.filter(m=>m.visible)],false);
  ray.far=Infinity;
  const hit=hits[0];
  if(!hit)return;
  cursor.visible=true;cursor.position.copy(hit.point).addScaledVector(direction,-.012);
  if(!activate)return;
  if(hit.object.userData.action)hit.object.userData.action(hit.uv);
  else if(spectator.role==='player')spectator.sendAction({type:'world',mode:2,typeId:fixtures.coconuts.indexOf(hit.object)});
  else pluckCoconut(hit.object,direction);
  desktopMenu();
}

const toolDirection=new T.Vector3(),toolRotation=new T.Quaternion();
const toolVisual=createToolVisual(scene);
const blaster=createBlasterSystem({scene,rig,camera,arena,objects,spectator});
const tool=toolVisual.mesh;
const toolEnd=new T.Vector3(),toolRotationWorld=new T.Quaternion(),toolOrigin=new T.Vector3();
const toolState={mode:0,position:toolOrigin,quaternion:toolRotationWorld,end:toolEnd};
const toolObstruction=new T.Vector3(),toolNormal=new T.Vector3();
const toolColors=['#f47655','#73c8ff','#89ebad','#ffcd69','#c895ff','#fff6df','#242b36'];
const toolStyles=['Mat','Brillant','Transparent','Lumineux'];
const toolPosition=new T.Vector3();
const desktopHand={position:toolOrigin,quaternion:toolRotationWorld,pressure:[.1,.66,.08]};
const heldPosition=new T.Vector3(),heldRotation=new T.Quaternion();
function releaseFlat(launch){
  const body=desktopActor.held;
  if(!body)return;
  release(desktopActor,launch);
}
function requestObjectChange(typeId,local){
  if(spectator.role==='pc'){showGameHint('Rejoins le salon en joueur pour modifier les objets.');return;}
  if(spectator.role!=='player'){local();return;}
  if(!spectator.sendAction({type:'world',mode:3,typeId}))showGameHint('Attends la connexion � l'h�te.');
}
function clearSpawnBank(){requestObjectChange(0,clearObjects);}
function requestResetObjects(){requestObjectChange(1,resetObjects);}
function resetCoconuts(){
  if(maps?.assetLayer){
    for(const body of objects)if(body.spec.assetId==='spawn-coconut'){
      if(body.owner){body.owner.held=null;body.owner=null;}
      body.toolHold=false;body.mesh.position.copy(body.start);body.mesh.quaternion.identity();
      body.velocity.set(0,0,0);body.angular.set(0,0,0);body.frozen=true;
    }
    return;
  }
  for(const coco of fixtures.coconuts)coco.visible=true;
}
function requestSpawn(index,origin=null){
  settings.objects=true;
  if(spectator.role==='pc'){showGameHint('Commence par rejoindre le salon en joueur.');return;}
  if(spectator.role==='player'){
    if(!spectator.sendAction({type:'spawn',typeId:index}))showGameHint('Attends la connexion � l'h�te.');
  }else spawnObject(index,origin);
}
function handleNetworkAction(action,peer){
  if(!peer)return;
  if(action.type==='world'){
    if(action.mode===1){settings.timeOfDay=action.typeId+1;applyVisual();}
    else if(action.mode===3){[clearObjects,resetObjects,resetCoconuts][action.typeId]();}
    else if(maps.builtIn){
      const coco=fixtures.coconuts[action.typeId];
      if(coco?.visible&&coco.getWorldPosition(coconutPosition).distanceToSquared(peer)<=5.8**2&&
          !handContact(spawnOrigin.copy(peer),coconutPosition,.01,activeBoxes,spawnHit,spawnNormal))pluckCoconut(coco);
    }
    return;
  }
  if(action.type==='spawn'){
    if(spawnTypes.includes(action.typeId)){settings.objects=true;spawnObject(action.typeId,null,peer);}
    return;
  }
  const body=objects.find(o=>o.netId===action.objectId);
  if(!body)return;
  const hand=action.hand??0,actorId=peer.id*3+hand;
  const mode=action.type==='hold'?1:action.mode;
  let actor=remoteActors.get(actorId);
  if(!actor&&mode===1){
    actor={peerId:peer.id,hand,held:null,controllerRotation:new T.Quaternion()};
    remoteActors.set(actorId,actor);
  }
  if(action.type==='release'){
    if(actor?.held===body){
      const motion=hand?spectator.handMotion(peer.id,hand-1):null;
      if(motion)body.velocity.copy(motion);
      release(actor,true);
    }
    return;
  }
  if(!settings.objects||mode===1&&actor.held)return;
  const handPose=hand?peer.avatar?.hands[hand-1]:null;
  if(hand&&!handPose)return;
  const origin=spawnOrigin.copy(handPose?.position??(action.type==='tool'?peer.avatar?.tool?.position:null)??peer);
  const distance=hand?distanceToObject(origin,body):origin.distanceTo(body.mesh.position);
  if(distance>(hand ? .34 : 10)||handContact(origin,body.mesh.position,.01,activeBoxes,spawnHit,spawnNormal))return;
  if(actor){
    const rotation=handPose?.quaternion??peer.avatar?.tool?.quaternion??peer.avatar?.head;
    if(rotation)actor.controllerRotation.copy(rotation);
  }
  manipulateBody(body,mode,actor,T.MathUtils.clamp(distance,1.1,5));
  if(hand&&actor?.held===body){
    body.toolHold=false;
    inverseGrip.copy(actor.controllerRotation).invert();
    body.offset.copy(body.mesh.position).sub(origin).applyQuaternion(inverseGrip);
  }
}
function updateHeldBodies(dt){
  if(renderer.xr.isPresenting){
    for(const hand of hands)if(hand.valid&&hand.held){
      driveHeldObject(hand.held,hand.mesh.position,hand.aimDirection,hand.controllerRotation,dt);
    }
  }
  for(const [id,actor] of remoteActors){
    const peer=spectator.getPeer(actor.peerId);
    const handPose=actor.hand?peer?.avatar?.hands[actor.hand-1]:null;
    if(!peer||actor.hand&&!handPose){release(actor,false);remoteActors.delete(id);continue;}
    const body=actor.held;
    if(!body)continue;
    const aim=handPose?.quaternion??peer.avatar?.tool?.quaternion??peer.avatar?.head;
    if(aim)actor.controllerRotation.copy(aim);
    spawnOrigin.copy(handPose?.position??peer.avatar?.tool?.position??peer);
    spawnDirection.set(0,0,-1).applyQuaternion(actor.controllerRotation);
    driveHeldObject(body,spawnOrigin,spawnDirection,actor.controllerRotation,dt);
  }
  const body=desktopActor.held;
  if(body){
    camera.getWorldPosition(toolPosition);camera.getWorldDirection(toolDirection);
    camera.getWorldQuaternion(toolRotationWorld);
    driveHeldObject(body,toolPosition,toolDirection,toolRotationWorld,dt);
  }
}
// Les objets tenus en VR, sur PC et par un pair passent par le m�me balayage cin�matique.
function driveHeldObject(body,origin,direction,rotation,dt){
  if(body.toolHold)heldPosition.copy(origin).addScaledVector(direction,body.toolDistance);
  else heldPosition.copy(body.offset).applyQuaternion(rotation).add(origin);
  heldRotation.multiplyQuaternions(rotation,body.relativeRotation);
  moveKinematic(body,heldPosition,heldRotation,activeBoxes,dt);
}
function customMaterial(body){
  if(!body.customMaterial){
    body.mesh.material=clonePropMaterial(body.mesh.material);
    body.customMaterial=true;
    grade(body.mesh.material);
  }
  return body.mesh.material;
}
function paintStyle(body){
  const all=customMaterial(body),style=body.materialStyle;
  for(const material of Array.isArray(all)?all:[all]){
    material.roughness=[.94,.12,.16,.40][style];
    material.metalness=[0,.87,.12,0][style];
    material.transparent=style===2;
    material.depthWrite=style!==2;
    material.opacity=style===2?.40:1;
    material.emissive.copy(material.color);
    material.emissiveIntensity=style===3?1.65:0;
    material.needsUpdate=true;
  }
}
function findToolTarget(origin,direction,objectsInView){
  ray.set(origin,direction);ray.far=9;
  const hit=ray.intersectObjects(objectsInView,false)[0];
  ray.far=Infinity;
  toolEnd.copy(origin).addScaledVector(direction,hit?.distance??9);
  if(handContact(origin,toolEnd,.006,activeBoxes,toolObstruction,toolNormal)){
    toolEnd.copy(toolObstruction);
    return null;
  }
  return hit;
}
function manipulateBody(body,mode,actor,heldAt){
  if(mode===1){
    if(actor?.held){
      if(actor===desktopActor)releaseFlat(true);else release(actor,true);
      return;
    }
    if(!body||body.owner||!body.grabbable)return;
    body.frozen=false;body.toolHold=true;body.toolDistance=heldAt;
    const rotation=actor.controllerRotation??toolRotationWorld;
    body.relativeRotation.multiplyQuaternions(toolRotation.copy(rotation).invert(),body.mesh.quaternion);
    body.velocity.set(0,0,0);body.angular.set(0,0,0);
    body.owner=actor;actor.held=body;
    return;
  }
  if(!body||body.owner)return;
  if(mode===2){
    body.frozen=!body.frozen;body.velocity.set(0,0,0);body.angular.set(0,0,0);
  }else if(mode===3&&!body.protected){
    scene.remove(body.mesh,body.shadow);
    if(body.customMaterial)for(const mat of Array.isArray(body.mesh.material)?body.mesh.material:[body.mesh.material])mat.dispose();
    objects.splice(objects.indexOf(body),1);
  }else if(mode===4&&!body.protected){
    toolPosition.copy(body.mesh.position).addScaledVector(up,body.radius*2+.08);
    const duplicate=spawnObject(body.netType,toolPosition);
    if(duplicate){
      duplicate.mesh.quaternion.copy(body.mesh.quaternion);
      duplicate.paint=body.paint;duplicate.materialStyle=body.materialStyle;
      if(body.customMaterial){duplicate.mesh.material=clonePropMaterial(body.mesh.material);duplicate.customMaterial=true;grade(duplicate.mesh.material);}
      placeObject(duplicate,arena.boxes);
    }
  }else if(mode===5){
    const all=customMaterial(body),tint=toolColors[body.paint++%toolColors.length];
    for(const material of Array.isArray(all)?all:[all]){
      material.color.set(tint);
      if(body.materialStyle===3)material.emissive.copy(material.color);
    }
  }else if(mode===6||mode===7){
    body.materialStyle=body.materialStyle<0?(mode===6?0:3):(body.materialStyle+(mode===6?1:3))%4;
    paintStyle(body);
  }
  hudDirty=true;
}
const toolTargets=[];
function useToolRay(origin,direction,activate,hand){
  if(!settings.objects)return;
  const onlinePlayer=spectator.role==='player';
  toolTargets.length=0;
  if(onlinePlayer)spectator.forEachReplica(mesh=>toolTargets.push(mesh));
  else for(const body of objects)if(!body.owner&&body.mesh.visible)toolTargets.push(body.mesh);
  const hit=findToolTarget(origin,direction,toolTargets);
  toolState.mode=settings.toolMode;
  if(hand){
    toolOrigin.copy(hand.mesh.position);
    toolRotationWorld.copy(hand.controllerRotation);
  }else{
    camera.getWorldQuaternion(toolRotationWorld);
    toolOrigin.set(.16,-.17,-.43).applyQuaternion(toolRotationWorld).add(origin);
  }
  toolVisual.update(toolState);
  if(!activate)return;
  if(onlinePlayer){
    if(settings.toolMode===1&&remoteHeld){
      spectator.sendAction({type:'release',objectId:remoteHeld});remoteHeld=0;
    }else if(hit){
      const objectId=hit.object.userData.netId;
      if(spectator.sendAction({type:'tool',mode:settings.toolMode,objectId})&&settings.toolMode===1)remoteHeld=objectId;
    }
    return;
  }
  const body=hit&&objects.find(o=>o.mesh===hit.object);
  manipulateBody(body,settings.toolMode,hand??desktopActor,hit?T.MathUtils.clamp(hit.distance+(body?.radius??0)*.35,1.1,5):1.1);
}
function aimTool(frame,space,{source,hand,click}){
  const pose=frame.getPose(source.targetRaySpace,space);
  if(!pose)return;
  const p=pose.transform.position,q=pose.transform.orientation;
  raySource.set(p.x,p.y-drop,p.z).applyAxisAngle(up,yaw).add(rig.position);
  spin.set(q.x,q.y,q.z,q.w);
  forward.set(0,0,-1).applyQuaternion(spin).applyAxisAngle(up,yaw);
  useToolRay(raySource,forward,click,hand);
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
  c.font='bold 30px system-ui';c.fillStyle='#fff0cf';c.fillText('GORILLA LAB '+labRelease,25,42);
  c.font='20px system-ui';c.fillText(fps+' FPS   �   Q '+liveLevel+'/10   �   '+(settings.auto?'AUTO':'MANUEL'),390,40);
  function item(x,y,w,h,label,action,color='#344b59'){
    c.fillStyle=color;c.fillRect(x,y,w,h);c.fillStyle='#fff4dc';c.font='21px system-ui';
    c.textAlign='center';c.fillText(label,x+w/2,y+h/2+7,w-8);c.textAlign='left';
    hitAreas.push({x,y,w,h,action,label});
  }
  const tabWidth=Math.floor(587/sections.length);
  sections.forEach(([name],i)=>item(25+i*tabWidth,61,tabWidth-4,44,name,()=>selectPage(i),page===i?'#586d53':'#334b58'));
  if(page===5){
    c.fillStyle='#e9e5ce';c.font='22px system-ui';c.fillText(spectator.caption,25,145,587);
    c.fillText('Salons publics',25,190);
    publicRooms.forEach((code,i)=>{
      const y=204+i*48;
      c.fillText('Ar�ne '+(i+1),25,y+29);
      item(200,y,190,40,'Rejoindre',()=>spectator.connect('player',code));
      item(406,y,206,40,'H�berger',()=>spectator.connect('vr',code));
    });
    c.fillText('Salon priv�',25,390);
    item(25,405,286,44,'Rejoindre le code saisi',()=>spectator.connect('player'));
    item(325,405,287,44,'Cr�er un salon priv�',()=>document.querySelector('#cloud-new').click());
    c.font='17px system-ui';c.fillText('Pour saisir un autre code, utilise le panneau du navigateur.',25,489,587);
    item(25,579,286,44,'D�connecter',()=>spectator.leave());
    item(325,579,287,44,'Fermer',()=>menu=false);
    panel.texture.needsUpdate=true;
    return;
  }
  const grouped=page>=2&&page<=4;
  if(grouped)menuGroups().forEach(([name],i)=>{
    const selected=currentGroup()===i;
    const width=Math.min(144,Math.floor(586/menuGroups().length)-4);
    item(25+i*(width+4),114,width,38,name,()=>selectGroup(i),selected?'#546947':'#263d49');
  });
  currentRows().forEach(([name,key],i)=>{
    const y=(grouped?166:113)+i*40;
    if(i%2===0){c.fillStyle='#20323e';c.fillRect(25,y,587,36);}
    c.fillStyle='#e9e5ce';c.font='22px system-ui';c.fillText(name,37,y+26);
    if(typeof key==='function') item(406,y,206,36,actionLabel(key),key);
    else if(typeof settings[key]==='boolean') item(406,y,206,36,toggleLabel(key),()=>change(key,1),settings[key]?'#415c4c':'#344b59');
    else {
      item(359,y,44,36,'-',()=>change(key,-1));
      c.font='20px system-ui';c.textAlign='center';c.fillText(String(settingValue(key)),508,y+25,156);c.textAlign='left';
      item(568,y,44,36,'+',()=>change(key,1));
    }
  });
  item(25,579,286,44,'R�glages par d�faut',restore);
  item(325,579,287,44,'Fermer',()=>menu=false);
  c.fillStyle='#c4d5d8';c.font='17px system-ui';c.fillText(vrHint|| (page===6?'Cyan : prise � Vert : paume � Rose : collisions invisibles':page===4&&maps.status?maps.status.slice(0,64):reportSnapshot?'Rapport captur�. Quitte la VR pour le t�l�charger.':'G�chette : choisir  �  B/Y : panneau  �  � Prochaine session VR'),25,645);
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
    const x=hit.uv.x*panel.w,y=(1-hit.uv.y)*panel.h;
    hitAreas.find(b=>x>=b.x&&x<=b.x+b.w&&y>=b.y&&y<=b.y+b.h)?.action();
    hudDirty=true;
  }
}
const keyboard=createKeyboardState(),{held:keys,pressed:actions}=keyboard;
const blasterTrigger=bindBlasterTrigger(renderer.domElement,document.querySelector('#touch-fire'));
const settingsPanel=document.querySelector('#game-settings'),openSettings=document.querySelector('#open-settings');
const hint=document.querySelector('#game-hint');
let hintUntil=0;
function showGameHint(message){
  hint.textContent=message;hint.hidden=false;hintUntil=performance.now()+2400;
  vrHint=message;hudDirty=true;
}
let vrHint='';
function toggleSettings(force){
  const hidden=force??!settingsPanel.hidden;
  settingsPanel.hidden=hidden;openSettings.hidden=!hidden;
  if(hidden)renderer.domElement.focus();
}
openSettings.onclick=()=>toggleSettings(false);
document.querySelector('#close-settings').onclick=()=>toggleSettings(true);
const flat=createFlatControls({
  canvas:renderer.domElement,enabled:()=>!renderer.xr.isPresenting,
  onLook:(x,y,factor)=>{yaw-=x*factor;pitch=T.MathUtils.clamp(pitch-y*factor,-1.42,1.42);},
  onAction:action=>{
    const key={interact:'KeyE',tool:'KeyG',mode:'KeyT',spawn:'KeyF',camera:'KeyC'}[action];
    if(key)actions.add(key);
  },
  onMenu:()=>toggleSettings(),
});
addEventListener('keydown',e=>{
  if(e.target.closest?.('button,select,input,textarea'))return;
  if(!renderer.xr.isPresenting&&(e.code==='Tab'||e.code==='Escape')){
    e.preventDefault();if(!e.repeat)toggleSettings();return;
  }
  if(e.code==='Space')e.preventDefault();
  keyboard.down(e.code,e.repeat);
  if(e.code==='KeyR')resetPlayer();
});
addEventListener('keyup',e=>keyboard.up(e.code));
addEventListener('blur',()=>{keyboard.clear();flat.clear();blasterTrigger.clear();});
function grabFlat(origin,direction){
  if(!settings.objects)return false;
  const online=spectator.role==='player';
  if(online&&remoteHeld){
    spectator.sendAction({type:'release',objectId:remoteHeld});remoteHeld=0;return true;
  }
  if(desktopActor.held){releaseFlat(true);return true;}
  toolTargets.length=0;
  if(online)spectator.forEachReplica(mesh=>toolTargets.push(mesh));
  else for(const body of objects)if(!body.owner&&body.mesh.visible)toolTargets.push(body.mesh);
  const hit=findToolTarget(origin,direction,toolTargets);
  if(!hit||hit.distance>2.8)return false;
  if(online){
    const objectId=hit.object.userData.netId;
    if(spectator.sendAction({type:'hold',objectId}))remoteHeld=objectId;
  }else{
    camera.getWorldQuaternion(toolRotationWorld);
    manipulateBody(objects.find(o=>o.mesh===hit.object),1,desktopActor,Math.max(.75,hit.distance));
  }
  return true;
}
const remoteBlockers=[];
function replicaBlockers(){
  remoteBlockers.length=0;
  spectator.forEachReplica(mesh=>{
    const type=mesh.userData.netType;
    if(!objectSpecs[type]||objectSpecs[type].properties?.collidable===false||mesh.userData.held)return;
    const spec=objectSpecs[type],shape=settings.preciseHitboxes?spec.shape:(spec.lowShape??spec.shape);
    const collider=mesh.userData.playerCollider??={mesh,blocksPlayer:true,frozen:true};
    collider.shape=shape;collider.radius=shape.radius;collider.precise=settings.preciseHitboxes;
    collider.handCollider??={objectBody:collider,friction:.96,gravity:1};
    remoteBlockers.push(collider);
  });
  return remoteBlockers;
}
function maintainSpectatorCamera(){
  if(spectator.role!=='vr'||!spectator.remoteSpectator)return;
  if(!objects.some(object=>object.netType===CAMERA_TYPE))spawnObject(CAMERA_TYPE,null,null,true);
}
const enter=document.querySelector('#vr');
navigator.xr?.isSessionSupported('immersive-vr').then(ok=>{
  enter.disabled=!ok;
  if(ok) document.querySelector('#status').textContent='WebXR pr�t';
}).catch(()=>{});
enter.onclick=async()=>{
  let session;
  void steps.unlock();
  try{
    enter.disabled=true;
    session=await navigator.xr.requestSession('immersive-vr',{requiredFeatures:['local-floor']});
    renderer.xr.setFramebufferScaleFactor(.45+settings.resolution*.055);
    await renderer.xr.setSession(session);
    applyVisual();
    refreshRate=session.frameRate||72;
    refreshOptions=Array.from(session.supportedFrameRates??[]).sort((a,b)=>a-b);
    const requested=refreshOptions.includes(120)?120:(refreshOptions.find(hz=>hz>=100)??refreshOptions.at(-1));
    if(requested&&session.updateTargetFrameRate){
      try{await session.updateTargetFrameRate(requested);}catch{}
    }
    refreshRate=session.frameRate||refreshRate;
    fpsGoal=Math.min(100,refreshRate);
    if(settings.auto){liveLevel=Math.min(liveLevel,4);qualityTimer=lowCount=highCount=0;}
    rawFrameMs=[];frameSampleIndex=0;diagAt=0;contactFrames=trackedFrames=launchCount=0;lastLaunch=null;reportHadVR=true;lastVR=null;
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
  if(!maps.active)for(const b of arena.floors){
    if(Math.abs(p.x-b.position.x)<=b.half.x&&Math.abs(p.z-b.position.z)<=b.half.z)return b;
  }
  if(maps.active){
    let top=-Infinity,surface;
    for(const b of arena.boxes){
      if(b.heightfield){
        if(p.x<b.xMin||p.x>b.xMax||p.z<b.zMin||p.z>b.zMax)continue;
        const height=b.height(p.x,p.z);
        if(height>=top&&height<=p.y+.5){top=height;surface=b;}
        continue;
      }
      const height=b.position.y+b.half.y;
      if(height<top||height>p.y+.5||Math.abs(p.x-b.position.x)>b.half.x||Math.abs(p.z-b.position.z)>b.half.z)continue;
      top=height;surface=b;
    }
    return surface;
  }
}
// Convertit les poses du rep�re du casque dans le monde avant les tests de saisie et d'appui.
function trackRemoteGrip(hand,grip){
  const side=hand.side==='left'?1:2;
  if(!grip&&hand.remoteHeld){
    spectator.sendAction({type:'release',objectId:hand.remoteHeld,hand:side});
    hand.remoteHeld=0;
  }
  if(menu||!grip||hand.grip||!settings.objects)return;
  let closest=null,distance=.15;
  spectator.forEachReplica(mesh=>{
    if(mesh.userData.held)return;
    const spec=objectSpecs[mesh.userData.netType];
    if(!spec||spec.properties?.grabbable===false||mesh.position.distanceToSquared(hand.target)>(spec.shape.radius+.18)**2)return;
    const separation=distanceToObject(hand.target,{mesh,shape:spec.shape,radius:spec.shape.radius});
    if(separation<distance){closest=mesh;distance=separation;}
  });
  if(closest){
    const objectId=closest.userData.netId;
    if(spectator.sendAction({type:'hold',objectId,hand:side}))hand.remoteHeld=objectId;
  }else if(maps.builtIn){
    const typeId=fixtures.coconuts.findIndex(coco=>coco.visible&&coco.getWorldPosition(coconutPosition).distanceToSquared(hand.target)<.26**2);
    if(typeId>=0)spectator.sendAction({type:'world',mode:2,typeId});
  }
}
// WebXR fournit les prises. xr-palm.js calcule leur pose dans l'ar�ne avant
// que locomotion.js ne les contraigne par la port�e des bras et les contacts.
function trackHands(frame,space,dt){
  const inputs=[...frame.session.inputSources];
  for(const h of hands){
    const source=inputs.find(s=>s.handedness===h.side&&s.gripSpace);
    const pose=source&&frame.getPose(source.gripSpace,space);
    h.gamepad=pose?source.gamepad:null;
    h.mesh.visible=Boolean(pose)&&settings.hands&&!settings.body;
    if(!pose){
      if(spectator.role==='player')trackRemoteGrip(h,false);
      h.valid=false;h.surface=null;release(h,false);continue;
    }
    placeTrackedPalm(h,pose.transform,drop,yaw,rig.position);
    h.valid=true;
    const grip=Boolean(source.gamepad?.buttons[1]?.pressed);
    gripRotation.copy(h.controllerRotation);
    animateFingers(h,source.gamepad?.buttons??[],dt);
    if(spectator.role==='player')trackRemoteGrip(h,grip);
    else if(!menu&&grip&&!h.grip&&settings.objects&&!h.held){
      let body=null, best=.15;
      const coco=fixtures.coconuts.find(m=>m.visible&&m.getWorldPosition(coconutPosition).distanceToSquared(h.target)<.26**2);
      if(coco)body=pluckCoconut(coco);
      for(const o of objects){
        if(o.owner||!o.grabbable||o.mesh.position.distanceToSquared(h.target)>(o.radius+.18)**2)continue;
        const distance=distanceToObject(h.target,o);
        if(!coco&&distance<best){best=distance;body=o;}
      }
      if(body&&!h.held){
        h.held=body;body.owner=h;body.frozen=false;
        inverseGrip.copy(gripRotation).invert();
        body.offset.copy(body.mesh.position).sub(h.target).applyQuaternion(inverseGrip);
        body.relativeRotation.multiplyQuaternions(inverseGrip,body.mesh.quaternion);
        body.velocity.set(0,0,0);body.angular.set(0,0,0);
      }
    }
    if(!grip&&h.grip&&!h.held?.toolHold)release(h,!menu);
    h.grip=grip;
    h.hasSupport=false;
    const carried=h.held;
    if(carried&&!carried.toolHold&&carried.collidable&&carried.spec.supportAxis){
      heldRotation.multiplyQuaternions(gripRotation,carried.relativeRotation);
      h.supportOffset.copy(carried.spec.supportAxis).applyQuaternion(heldRotation);
      candidate.copy(carried.offset).applyQuaternion(gripRotation);
      const alignment=h.supportOffset.dot(candidate);
      if(Math.abs(alignment)>.008?alignment<0:h.supportOffset.y>0)h.supportOffset.negate();
      h.supportOffset.add(candidate);h.hasSupport=true;
    }
    if(h.held?.toolHold){
      const rayPose=frame.getPose(source.targetRaySpace,space);
      const a=rayPose?.transform.orientation;
      if(a)h.aimDirection.set(0,0,-1).applyQuaternion(toolRotation.set(a.x,a.y,a.z,a.w)).applyAxisAngle(up,yaw);
      else h.aimDirection.set(0,0,-1).applyQuaternion(gripRotation);
    }
    const btn=Boolean(source.gamepad?.buttons[5]?.pressed||source.gamepad?.buttons[3]?.pressed&&h.side==='left');
    if(btn&&!h.menu)setMenu(h.side);
    h.menu=btn;
    const toolButton=Boolean(source.gamepad?.buttons[4]?.pressed);
    if(h.side==='right'&&toolButton&&!h.toolButton&&!menu)change('toolActive',1);
    h.toolButton=toolButton;
    const cycle=Boolean(source.gamepad?.buttons[3]?.pressed);
    if(h.side==='right'&&cycle&&!h.toolCycle&&settings.toolActive&&!menu)change('toolMode',1);
    h.toolCycle=cycle;
    const trigger=Boolean(source.gamepad?.buttons[0]?.pressed);
    if(menu){
      const click=trigger&&!h.trigger;
      if(click||!pendingAim||!pendingAim.click&&h.side!==panelHand)pendingAim={source,click};
    }
    else if(!menu&&h.side==='right'&&settings.mapEdit)mapLook={source,click:trigger&&!h.trigger};
    else if(!menu&&h.side==='right'&&settings.toolActive)toolLook={source,hand:h,click:trigger&&!h.trigger};
    else if(!menu&&!settings.blasterActive&&(h.side==='right'||trigger&&!h.trigger))fixtureAim={source,click:trigger&&!h.trigger};
    h.trigger=trigger;
  }
}
// Le casque fixe le cou. La port�e moyenne des manettes incline le torse
// dans le rep�re du joueur. body-skin.js raccorde ensuite les poignets r�solus.
function updateTorso(inVR,dt){
  const lookDown=inVR?-headForward.y:Math.max(0,-Math.sin(pitch));
  let reachX=0,reachZ=0,tracked=0;
  if(inVR){
    inverseYaw.setFromAxisAngle(up,-bodyYaw);
    for(const hand of hands){
      if(!hand.valid)continue;
      wristReach.copy(hand.gripPosition).sub(worldHead).applyQuaternion(inverseYaw);
      reachX+=wristReach.x-(hand.side==='left'?-.20:.20);
      reachZ+=wristReach.z+.24;
      tracked++;
    }
  }
  const forward=tracked?T.MathUtils.clamp(-reachZ/tracked,-.35,.45):0;
  const sideways=tracked?T.MathUtils.clamp(reachX/tracked,-.35,.35):0;
  const blend=1-Math.exp(-dt*13);
  const bend=inVR?torsoBend(lookDown,forward):-.31*T.MathUtils.smoothstep(lookDown,.20,.92);
  torsoTilt.x=T.MathUtils.lerp(torsoTilt.x,bend,blend);
  torsoTilt.y=T.MathUtils.lerp(torsoTilt.y,-sideways*.62,blend);
  bodyEuler.set(torsoTilt.x,bodyYaw,torsoTilt.y,'YXZ');
  monkey.quaternion.setFromEuler(bodyEuler);
}

function character(frame,space,pose,dt,inputDt=dt){
  const inVR=Boolean(pose);
  const targetEye=.43+settings.size*.088;
  if(inVR){
    const p=pose.transform.position;
    standingHeight=calibratedHeight(standingHeight,p.y);
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
      locomotion.reset();hasPreviousHead=false;
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
  currentGravity=gravity;
  priorPlayer.copy(rig.position);
  const blockers=spectator.role==='player'?replicaBlockers():objects;
  if(inVR){
    trackHands(frame,space,inputDt);
    updateTorso(true,inputDt);
    if(hands.some(h=>h.valid))trackedFrames++;
    handBoxes.length=0;
    for(const box of activeBoxes)handBoxes.push(box);
    if(settings.collisions&&settings.objects)for(const body of blockers)if(body.handCollider&&!body.owner)handBoxes.push(body.handCollider);
    locomotion.move({head:worldHead,dt,inputDt,gravity,settings,boxes:handBoxes,velocity,movement:delta,reach:armSegmentLength()*2+.16});
    for(const hand of hands)updateGroundHaptics(hand,settings.stepHaptics,inputDt);
  }else{
    updateTorso(false,inputDt);
    velocity.y-=gravity*dt;
    const x=Number(keys.has('KeyD'))-Number(keys.has('KeyA')||keys.has('KeyQ'))+flat.movement.x;
    const z=Number(keys.has('KeyS'))-Number(keys.has('KeyW')||keys.has('KeyZ'))+flat.movement.z;
    const sprint=keys.has('ShiftLeft')||keys.has('ShiftRight');
    scratch.set(x,0,z).clampLength(0,1).applyAxisAngle(up,yaw).multiplyScalar(sprint?5.4:3.4);
    const a=1-Math.exp(-dt*(floor?.friction<.1?2:grounded?13:4));
    velocity.x=T.MathUtils.lerp(velocity.x,scratch.x,a);velocity.z=T.MathUtils.lerp(velocity.z,scratch.z,a);
    const jump=flat.consumeJump()||actions.delete('Space');
    const takeoff=jump&&grounded;
    const n=walkingSupport.normal;
    const stickToGround=!takeoff&&grounded&&n.y>=.62&&(walkingSupport.surface?.friction??0)>=.45;
    if(takeoff)velocity.y=3.1+settings.jump*.18;
    else if(stickToGround){
      // Follow the support plane at the requested horizontal speed.
      velocity.y=-(velocity.x*n.x+velocity.z*n.z)/n.y;
    }
    delta.copy(velocity).multiplyScalar(dt);
    // Bias into the surface along its normal. A vertical bias alone injects
    // a downhill step on every collision correction, even with no input.
    if(stickToGround)delta.addScaledVector(n,-gravity*dt*dt);
  }

  if(settings.collisions&&hasPreviousHead){
    candidate.copy(worldHead).add(delta);
    const headHit=handContact(previousHead,candidate,HEAD_RADIUS,activeBoxes,point,playerNormal);
    if(headHit&&scratch.subVectors(candidate,point).dot(playerNormal)<0){
      delta.copy(point).sub(worldHead);
      removeInwardVelocity(velocity,playerNormal);
    }
  }
  rig.position.add(delta);
  worldHead.copy(head).applyAxisAngle(up,yaw).add(rig.position);
  grounded=false;
  walkingSupport.normal.set(0,0,0);walkingSupport.surface=null;
  if(settings.collisions){
    // Le solveur conserve trois sph�res, avec un d�calage horizontal pilot� par le torse.
    bodyCollisionBack.set(0,-1,0).applyQuaternion(monkey.quaternion);
    bodyCollisionBack.y=0;
    bodyCollisionBack.addScaledVector(bodyBack.set(0,0,1).applyAxisAngle(up,bodyYaw),.12);
    for(let i=0;i<3;i++){
      const height=i===0?.18:i===1?Math.max(.26,head.y*.57):head.y;
      const {radius}=bodyProxies[i];
      point.set(worldHead.x,rig.position.y+height,worldHead.z);
      if(i<2)point.add(bodyProxyOffset(inVR,bodyCollisionBack,Math.max(0,head.y-height),scratch));
      prior.copy(point);
      grounded=solve(point,radius,arena.boxes,velocity,0,3+settings.grip,dt,i===0?walkingSupport:null)||grounded;
      if(settings.objects)for(const object of blockers){
        if(object.blocksPlayer&&!object.owner&&playerObjectContact(point,radius,object,velocity,playerNormal)&&playerNormal.y>.6)grounded=true;
      }
      solve(point,radius,arena.boxes,velocity,0,3+settings.grip,dt);
      scratch.subVectors(point,prior);
      rig.position.add(scratch);worldHead.add(scratch);
      for(let j=0;j<i;j++)bodyProxies[j].position.add(scratch);
      bodyProxies[i].position.copy(point);
    }
  }

  appliedMove.subVectors(rig.position,priorPlayer);
  steps.update({dt:inputDt,inVR,hands,grounded,travel:Math.hypot(appliedMove.x,appliedMove.z),
    volume:settings.stepVolume,enabled:settings.stepAudio});
  if(inVR){
    // L'impulsion utilise le d�placement r�alis�, une fois les collisions du corps r�solues.
    const result=locomotion.finish(appliedMove,velocity);
    if(result.contacts)contactFrames++;
    if(result.launched){launchCount++;lastLaunch={handSpeed:result.launchSpeed,velocity:velocity.toArray(),t:performance.now()};}
  }
  if(maps.active?(rig.position.y<-24||Math.abs(rig.position.x)>155||Math.abs(rig.position.z)>155):(rig.position.y<-9||Math.abs(rig.position.x)>33||rig.position.z<-57||rig.position.z>13)){
    resetPlayer();worldHead.copy(head).applyAxisAngle(up,yaw).add(rig.position);
  }
  previousHead.copy(worldHead);hasPreviousHead=true;
  rig.rotation.y=yaw;
  if(inVR)camera.position.set(0,0,0);
  for(const h of hands){
    if(inVR&&h.valid){
      h.mesh.position.copy(h.surface?h.anchor:h.held?h.target:h.locomotionTarget).addScaledVector(appliedMove,h.surface?0:1);
      h.gripPosition.add(appliedMove);
    }
    if(!inVR)h.mesh.visible=false;
  }
  const bodyScale=.72+settings.size*.05;
  const torsoScale=(armSegmentLength()*2)*(2/3)/.82;
  monkey.visible=settings.body;
  avatarHead.position.copy(worldHead);
  if(inVR)avatarHead.quaternion.copy(headRotation).premultiply(spin.setFromAxisAngle(up,yaw));
  else avatarHead.quaternion.setFromEuler(new T.Euler(pitch,yaw,0,'YXZ'));
  neck.set(0,-.145,.045).applyQuaternion(avatarHead.quaternion).add(worldHead);
  // Le sommet du maillage (profil dans body-skin.js) reste au cou malgr� le tilt.
  monkey.position.set(0,.46*torsoScale,.04*bodyScale).applyQuaternion(monkey.quaternion).negate().add(neck);
  poseBody(bodyScale,torsoScale);
  rig.updateMatrixWorld(true);
  camera.updateWorldMatrix(true,false);
}
function updateFps(dt,inVR){
  windowElapsed+=dt;windowFrames++;
  qualityTimer+=dt;
  if(windowElapsed<1)return;
  fps=Math.round(windowFrames/windowElapsed);
  windowFrames=0;windowElapsed=0;hudDirty=true;
  readings.textContent=fps+' FPS � qualit� '+liveLevel+'/10 � '+(settings.auto?'auto':'manuel');
  if(!settings.auto||qualityTimer<5)return;
  qualityTimer=0;
  const target=inVR?Math.min(100,renderer.xr.getSession()?.frameRate||refreshRate):60;
  if(inVR)fpsGoal=target;
  lowCount=fps<target-4?lowCount+1:0;
  highCount=fps>=target-1?highCount+1:0;
  const next=T.MathUtils.clamp(liveLevel+(lowCount>=1?-1:highCount>=2?1:0),1,10);
  if(next!==liveLevel){
    liveLevel=next;qualityTimer=lowCount=highCount=0;applyVisual();
  }
}
arena.bakeLightmap();
const photoContrast={value:1},photoSaturation={value:1},photoWarmth={value:0},shaderMode={value:0};
const graded=new WeakSet();
function grade(material){
  if(Array.isArray(material)){for(const mat of material)grade(mat);return;}
  if(!material||graded.has(material))return;
  graded.add(material);
  const previous=material.onBeforeCompile;
  const cacheKey=material.customProgramCacheKey.call(material);
  material.onBeforeCompile=function(shader,renderer){
    previous.call(this,shader,renderer);
    Object.assign(shader.uniforms,{uPhotoContrast:photoContrast,uPhotoSaturation:photoSaturation,uPhotoWarmth:photoWarmth,uLabShader:shaderMode});
    shader.fragmentShader='uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <colorspace_fragment>',`
      #include <colorspace_fragment>
      vec3 photo=gl_FragColor.rgb;
      photo=mix(vec3(dot(photo,vec3(.2126,.7152,.0722))),photo,uPhotoSaturation);
      photo=(photo-.5)*uPhotoContrast+.5;
      photo=clamp(photo+uPhotoWarmth*vec3(1.,.16,-1.),0.,1.);
      float luma=dot(photo,vec3(.2126,.7152,.0722));
      if(uLabShader==1){
        float band=floor(luma*6.+.5)/6.;
        photo*=.35+.65*(band/max(.035,luma));
      }else if(uLabShader==2){
        vec3 ink=mix(vec3(.071,.13,.24),vec3(.99,.83,.54),smoothstep(.10,.92,luma));
        photo=mix(ink,photo,.28);
      }else if(uLabShader==3){
        vec2 tile=mod(floor(gl_FragCoord.xy),2.);
        float threshold=mod(2.*tile.x+3.*tile.y,4.)*.25;
        photo=floor(photo*7.+threshold)/7.;
      }
      gl_FragColor.rgb=clamp(photo,0.,1.);
    `);
  };
  material.customProgramCacheKey=()=>cacheKey+'-lab-style-v2';
  material.needsUpdate=true;
}
for(const material of arena.materials) grade(material);
scene.traverse(object=>{ if(object.isMesh&&![panel.mesh,wrist.mesh,cursor].includes(object))grade(object.material); });
applyVisual();
const mapQuery=new URLSearchParams(location.search);
if(mapQuery.has('map'))maps.loadURL(mapQuery.get('map'));
else{
  try{const saved=localStorage.getItem(storageKey);if(saved)maps.load(saved);}catch(error){maps.inform(error.message);}
}
function captureNetworkAvatar(){
  const inVR=renderer.xr.isPresenting;
  return {
    head:avatarHead.quaternion,hands:inVR?hands.map(h=>h.valid?{position:h.mesh.position,quaternion:h.mesh.quaternion,pressure:h.pressure}:null):[null,toolState.mode?desktopHand:null],
    height:head.y,armSpan:armSegmentLength()*2,light:settings.timeOfDay-1,
    color:avatarColor,coconuts:fixtures.coconuts.reduce((mask,coco,i)=>mask|(Number(coco.visible)<<i),0),
    tool:toolState.mode?toolState:null,gun:blaster.gun,
  };
}
// Une image encha�ne les entr�es, la simulation locale, la r�ception des �tats distants et le rendu.
renderer.setAnimationLoop((time,frame)=>{
  const actual=frameTime?Math.max(0,(time-frameTime)/1000):.014;
  frameTime=time;
  const inputDt=Math.max(.0001,Math.min(.035,actual));
  // Ralentir la simulation locale sans changer la cadence WebXR, audio ou r�seau.
  const speed=!spectator.role?debugSpeeds[settings.debugSpeed-1]:1;
  const dt=inputDt*speed;
  const inVR=renderer.xr.isPresenting;
  const space=renderer.xr.getReferenceSpace(), pose=frame&&space&&frame.getViewerPose(space);
  if(inVR&&!pose)return;
  animateProps(time*.001);
  if(hintUntil&&time>hintUntil){hint.hidden=true;hintUntil=0;vrHint='';}
  cursor.visible=false;toolVisual.hide();toolState.mode=0;
  activeBoxes=settings.collisions?arena.boxes:blocked;
  pendingAim=null;fixtureAim=null;toolLook=null;mapLook=null;
  maps.clearGhost();
  panel.mesh.visible=false;
  if(!inVR&&spectator.role==='pc'){
    monkey.visible=false;
    for(const h of hands)h.mesh.visible=false;
  }else character(frame,space,pose,dt,inputDt);
  const spectating=!inVR&&spectator.role==='pc';
  // En spectateur ou joueur invit�, les objets re�us sont dessin�s comme r�pliques du monde VR.
  const remoteWorld=spectating||spectator.role==='player';
  if(spectator.role!=='player'){remoteHeld=0;for(const h of hands)h.remoteHeld=0;}
  if(!remoteWorld){updateHeldBodies(dt);maintainSpectatorCamera();}

  for(const object of objects){
    object.mesh.visible=settings.objects&&!remoteWorld;
    const {x,y,z}=object.mesh.position;
    const outOfMap=maps.active?y<-24||Math.abs(x)>155||Math.abs(z)>155:y<-8||Math.abs(x)>28||z<-57||z>13;
    if(outOfMap){
      if(!object.owner){object.mesh.position.copy(object.start);object.velocity.set(0,0,0);object.angular.set(0,0,0);}
    }
    object.shadow.visible=!remoteWorld&&settings.shadows&&shadowLevel()<3&&settings.objects&&object.mesh.position.y<2;
    if(object.shadow.visible){
      const {x,z}=object.mesh.position;
      const hills=arena.boxes.find(b=>b.heightfield&&x>=b.xMin&&x<=b.xMax&&z>=b.zMin&&z<=b.zMax);
      const shadowY=hills?hills.height(x,z):0;
      object.shadow.position.set(x,shadowY+.006,z);
    }
  }
  if(!remoteWorld&&settings.objects){
    // La cible compare le d�but et la fin du pas pour rep�rer les impacts rapides.
    for(const object of objects)object.beforePhysics.copy(object.mesh.position);
    solveObjects(objects,arena.boxes,dt,9.81*settings.gravity/5,.12+settings.bounce*.064,surfaceAt);
    if(maps.builtIn)fixtures.updateTarget(objects,editableTargetFrame());
  }
  if(inVR&&!menu&&spectator.role!=='pc')for(const hand of hands)touchFixture(hand);
  arena.probe.rotation.y+=dt*.29;
  updateFps(Math.min(.3,actual),inVR);
  panel.mesh.visible=inVR&&menu;
  if(panel.mesh.visible&&hudDirty)drawPanel();
  if(panel.mesh.visible&&pendingAim) aim(frame,space,pendingAim.source,pendingAim.click);
  else if(inVR&&mapLook)aimMap(frame,space,mapLook);
  else if(inVR&&toolLook)aimTool(frame,space,toolLook);
  else if(inVR&&fixtureAim)aimFixture(frame,space,fixtureAim.source,fixtureAim.click);
  else if(!inVR&&!spectating){
    camera.getWorldPosition(raySource);camera.getWorldDirection(forward);
    if(actions.delete('KeyX'))change('blasterActive',1);
    if(actions.delete('KeyG')){change('toolActive',1);if(settings.toolActive)showGameHint('Outil � '+toolModes[settings.toolMode-1]);}
    if(actions.delete('KeyT'))change('toolMode',1);
    const interact=actions.delete('KeyE');
    if(settings.toolActive)useToolRay(raySource,forward,interact,null);
    else if(interact&&!grabFlat(raySource,forward))fixtureRay(raySource,forward,true);
    else if(!interact&&!remoteWorld)fixtureRay(raySource,forward,false);
    if(actions.delete('KeyF')){settings.objects=true;requestSpawn(spawnTypes[0]);}
  }
  const wristWasVisible=wrist.mesh.visible;
  wrist.mesh.visible=inVR&&!menu&&hands[0].valid;
  if(wrist.mesh.visible){
    wrist.mesh.position.copy(hands[0].mesh.position).y+=.12;
    wrist.mesh.lookAt(worldHead);
  }
  if(hudDirty||time-lastDraw>1100||wrist.mesh.visible&&!wristWasVisible){
    hudDirty=false;lastDraw=time;
    if(menu)drawPanel();
    // Le CanvasTexture du poignet n'est t�l�vers� que quand le panneau est visible.
    if(wrist.mesh.visible){
      const c=wrist.ctx;c.clearRect(0,0,416,84);c.fillStyle='#182632';c.fillRect(0,0,416,84);
      c.fillStyle='#fff0cf';c.font='bold 25px system-ui';c.fillText(fps+' FPS     Q '+liveLevel+'/10',17,32);
      c.font='20px system-ui';c.fillText(settings.mapEdit?'�dition : '+mapToolNames[settings.mapMode-1]:settings.blasterActive?'Pistolet : maintenir la g�chette':settings.toolActive?'Tool Gun : '+toolModes[settings.toolMode-1]:'B/Y : r�glages   �   A : Tool Gun',17,66);wrist.texture.needsUpdate=true;
    }
  }
  blaster.update({frame,space,inVR,remoteWorld,dt,yaw,drop,rightHand:hands[1],
    enabled:settings.blasterActive&&!spectating&&!menu&&!settings.mapEdit,
    flatFiring:blasterTrigger.held||keys.has('KeyJ'),
  });
  spectator.update({inVR,time,dt:inputDt,position:worldHead,yaw:spectating?yaw:bodyYaw,pitch,camera,rig,keys,actions,flat,avatar:captureNetworkAvatar,
    bodies:settings.objects?objects:noBodies,score:fixtures.score()});
  actions.clear();
  debugView.update({settings,boxes:activeBoxes,bodies:remoteWorld?(settings.debugHitboxes?replicaBlockers():noBodies):objects,hands,locomotion,velocity,
    head:worldHead,neck,body:monkey.position,proxies:bodyProxies,gravity:currentGravity,appliedMove,playerActive:!spectating,inVR});
  if(!spectating&&(inVR||!reportHadVR)&&time-diagAt>350){
    lastPlayerDiagnostics={simulationScale:speed,gravity:currentGravity,velocity:velocity.toArray(),
      grounded,torsoDegrees:[torsoTilt.x,torsoTilt.y].map(T.MathUtils.radToDeg),
      hands:inVR?locomotion.hands.map(({hand,normal,offset})=>!hand.valid?null:{
        side:hand.side,gripPosition:hand.gripPosition.toArray(),
        idleAlignmentMeters:point.copy(palmCenter).applyQuaternion(hand.mesh.quaternion).add(hand.target).add(appliedMove).distanceTo(hand.gripPosition),
        palmCenter:point.copy(palmCenter).applyQuaternion(hand.mesh.quaternion).add(hand.mesh.position).toArray(),
        contactCenter:point.copy(hand.mesh.position).add(offset).toArray(),
        normal:hand.surface?normal.toArray():null,surface:hand.surface?.name??hand.surface?.objectBody?.spec?.name??null,
      }):[]};
  }
  updatePropLights(remoteWorld);
  arena.centerShadows(lightView);
  const interval=25+(10-shadowLevel())*(inVR?7:4);
  if(renderer.shadowMap.enabled&&time-lastShadowRender>=interval){
    renderer.shadowMap.needsUpdate=true;lastShadowRender=time;
  }
  updateMirror(time,pose);
  const useVrPost=inVR&&settings.post;
  const useVrTrace=inVR&&settings.rayTrace;
  updateRayProbe(useVrTrace,objects);
  const visibleField=settings.vrFov/100;
  if(!useVrPost||!vrEffects.render(scene,camera,{bloom:settings.bloom,visibleField})){
    vrFovMask.material.uniforms.visibleField.value=visibleField;
    vrFovMask.visible=inVR&&visibleField<1;
    try{renderer.render(scene,camera);}finally{vrFovMask.visible=false;}
  }
  if(inVR||!reportHadVR) {
    rawFrameMs[frameSampleIndex]=actual*1000;
    frameSampleIndex=(frameSampleIndex+1)%720;
    if(time-diagAt>350){
    diagAt=time;
    const {calls,triangles,lines,points}=renderer.info.render;
    renderStats={calls,triangles,lines,points,textures:renderer.info.memory.textures};
    if(inVR)lastVR={
      refreshHz:renderer.xr.getSession()?.frameRate??null,targetFps:fpsGoal,supportedHz:refreshOptions.slice(),
      foveation:renderer.xr.getFoveation()??null,
      visualEffects:{post:useVrPost,bloom:useVrPost&&settings.bloom,rayTrace:useVrTrace},
      eyeViewports:renderer.xr.getCamera().cameras.map(c=>({width:c.viewport?.z??null,height:c.viewport?.w??null})),
    };
    }
  }
});



















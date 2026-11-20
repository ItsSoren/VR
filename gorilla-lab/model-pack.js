import {normalizeHinge} from './model-hinge.js';
import {avatarJoints,avatarReady,normalizeAvatarRig} from './avatar-rig.js';
import * as T from 'three';
import {applyModelEffect,normalizeModelEffect} from './model-effect.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { ConvexGeometry } from 'three/addons/geometries/ConvexGeometry.js';
import {normalizeSketch,createSketchGeometry} from './custom-shape.js';
import {getBuiltinAsset,isBuiltinAsset,isRetiredArenaAsset,isRetiredArenaModel} from './model-assets.js';

const actionIdPattern=/^[a-z0-9-]{1,40}$/i;
export const actionSounds={chime:'Carillon',alert:'Alerte',click:'Déclic'};
export function normalizePartReaction(value,zone){
  if(!value)return null;
  const phase=zone==='trigger'?(value.phase==='exit'?'exit':'enter'):value.phase==='use'?'use':null;
  if(!phase)return null;
  const door=typeof value.door==='string'&&actionIdPattern.test(value.door)?value.door:null;
  const light=typeof value.light==='string'&&actionIdPattern.test(value.light)?value.light:null;
  const sound=Object.hasOwn(actionSounds,value.sound)?value.sound:null;
  if(!(door||light||sound))return null;
  return {phase,...(door?{door,doorState:['open','close','toggle'].includes(value.doorState)?value.doorState:'open'}:{}),
    ...(light?{light,lightState:['on','off','toggle'].includes(value.lightState)?value.lightState:'on',
      lightColor:colorPattern.test(value.lightColor??'')?value.lightColor:'#ffbd54'}:{}),
    ...(sound?{sound,soundVolume:number(value.soundVolume,0,1,.6)}:{})};
}
export const modelStorageKey = 'gorilla-lab-models-v1';
export const modelLimits = Object.freeze({ models: 24, parts: 64, fileBytes: 2_500_000, textureBytes: 160_000 });
const texturePattern=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;
export const modelShapes = Object.freeze({
  box: 'Cube', sphere: 'Sphère', cylinder: 'Cylindre', cone: 'Cône',
  torus: 'Anneau', capsule: 'Capsule', tetrahedron:'Tétraèdre régulier', diamond: 'Diamant',custom:'Forme libre',asset:'Asset du jeu',
});
export const modelSurfaces = Object.freeze({
  plain: 'Uni', grid: 'Grille', stripes: 'Rayures', wood: 'Bois', speckle: 'Minéral',
});
export const modelFinishes=Object.freeze({
  original:{label:'Standard',roughness:.68,metalness:0},
  matte:{label:'Mat',roughness:.95,metalness:0},
  satin:{label:'Satiné',roughness:.46,metalness:0},
  gloss:{label:'Brillant',roughness:.15,metalness:.05},
  metal:{label:'Métal',roughness:.28,metalness:.85},
});
export const modelPartZones=Object.freeze({solid:'Solide',pass:'Traversable',trigger:'Déclencheur'});
const number=(value,min,max,fallback)=>Number.isFinite(value)?T.MathUtils.clamp(value,min,max):fallback;
export function modelPhysics(model){
  return {gravity:number(model?.physics?.gravity,0,2.5,1),bounce:number(model?.physics?.bounce,0,1.65,1)};
}
export function modelPartUv(part){
  return {projection:part?.uv?.projection==='metric'?'metric':'native',repeat:number(part?.uv?.repeat,.01,100,1),
    angle:number(part?.uv?.angle,-360,360,0),offset:Array.from({length:2},(_,i)=>number(part?.uv?.offset?.[i],-100,100,0))};
}
export const defaultModelProperties = Object.freeze({ grabbable: true, frozen: false, collidable: true, supportWhileHeld: false });

const identifier = /^custom-model-[a-z0-9][a-z0-9-]{0,47}$/;
const colorPattern = /^#[a-f\d]{6}$/i;

function label(value, fallback) {
  return typeof value === 'string' ? value.replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, 48) || fallback : fallback;
}

function vector(value, fallback, min, max) {
  return [0, 1, 2].map(index => Number.isFinite(value?.[index]) ? T.MathUtils.clamp(value[index], min, max) : fallback);
}
function portalDestination(value){
  if(value==='arena')return value;
  if(typeof value!=='string'||value.length>700)return null;
  try{
    const url=new URL(value);
    return url.protocol==='https:'&&!url.username&&!url.password?url.href:null;
  }catch{return null;}
}
const hitboxShapes=new Set(['box','sphere','capsule','convex']);
function normalizeHitbox(raw){
  if(raw?.mode==='box')return {mode:'box',center:vector(raw.center,0,-6,6),size:vector(raw.size,.5,.025,12)};
  const precision=Math.round(T.MathUtils.clamp(Number.isFinite(raw?.precision)?raw.precision:48,8,96));
  if(raw?.mode==='custom')return {mode:'custom',shape:hitboxShapes.has(raw.shape)?raw.shape:'box',
    center:vector(raw.center,0,-6,6),size:vector(raw.size,.5,.025,12),rotation:vector(raw.rotation,0,-360,360),precision};
  if(raw?.mode==='auto'&&hitboxShapes.has(raw.shape))return {mode:'auto',shape:raw.shape,precision};
  return {mode:'auto'};
}
export function normalizeModelPack(input) {
  if (input?.version !== 1 || !Array.isArray(input.models) || input.models.length > modelLimits.models || JSON.stringify(input).length>modelLimits.fileBytes) {
    throw new Error('Ce fichier ne contient pas un atelier de modèles Gorilla Lab valide.');
  }
  const ids = new Set();
  const models = input.models.filter(raw=>!isRetiredArenaModel(raw)).map(raw => {
    if (typeof raw?.id !== 'string' || !identifier.test(raw.id) || ids.has(raw.id) ||
        !Array.isArray(raw.parts) || raw.parts.length > modelLimits.parts) {
      throw new Error('Un modèle comporte un identifiant ou une liste de pièces invalide.');
    }
    ids.add(raw.id);
    const actionIds=new Set();
    return {
      id: raw.id,
      name: label(raw.name, 'Modèle sans nom'),
      kind: raw.kind === 'avatar' ? 'avatar' : raw.kind === 'structure' ? 'structure' : 'prop',
      ...(raw.kind==='avatar'?{avatarRig:normalizeAvatarRig(raw.avatarRig)}:{}),
      ...(isBuiltinAsset(raw.assetId)?{assetId:raw.assetId}:{}),
      inGame: raw.kind!=='avatar'&&raw.inGame===true,
      properties: Object.fromEntries(Object.entries(defaultModelProperties).map(([key, fallback]) => [
        key, typeof raw.properties?.[key] === 'boolean' ? raw.properties[key] : fallback,
      ])),
      hitbox:normalizeHitbox(raw?.hitbox),
      ...(raw.physics?{physics:modelPhysics(raw)}:{}),
      ...(raw.partCollisions===true?{partCollisions:true}:{}),
      parts: raw.parts.filter(part=>!isRetiredArenaAsset(part?.assetId)).map((part, index) => {
        const effect=normalizeModelEffect(part?.effect);
        const actionId=typeof part?.actionId==='string'&&actionIdPattern.test(part.actionId)&&!actionIds.has(part.actionId)?part.actionId:null;
        if(actionId)actionIds.add(actionId);
        const reaction=raw.kind==='structure'?normalizePartReaction(part?.reaction,part?.zone):null;
        const hinge=raw.kind==='structure'&&part?.zone!=='trigger'?normalizeHinge(part?.hinge):null;
        return {
        name: label(part?.name, `Pièce ${index + 1}`),
        ...(hinge?{hinge}:{}),
        ...(effect?{effect}:{}),
        ...(actionId?{actionId}:{}),
        ...(reaction?{reaction}:{}),
        ...(Object.hasOwn(avatarJoints,part?.avatarJoint)?{avatarJoint:part.avatarJoint}:{}),
        ...(Number.isInteger(part?.group)&&part.group>0&&part.group<=modelLimits.parts?{group:part.group}:{}),
        shape: part?.shape==='asset'&&isBuiltinAsset(part?.assetId)?'asset':Object.hasOwn(modelShapes, part?.shape)&&part.shape!=='asset'?part.shape:'box',
        ...(part?.shape==='asset'&&isBuiltinAsset(part?.assetId)?{assetId:part.assetId}:{}),
        ...(part?.shape==='custom'?{profile:normalizeSketch(part?.profile)}:{}),
        position: vector(part?.position, 0, -3, 3),
        rotation: vector(part?.rotation, 0, -360, 360),
        scale: vector(part?.scale, .35, .02, 4),
        color: typeof part?.color === 'string' && colorPattern.test(part.color) ? part.color : '#51bdd2',
        ...(Object.hasOwn(modelPartZones,part?.zone)?{zone:part.zone}:{}),
        ...(part?.zone==='trigger'&&typeof part?.notice?.text==='string'&&part.notice.text.trim()
          ?{notice:{text:label(part.notice.text,'Message'),phase:part.notice.phase==='exit'?'exit':'enter'}}:{}),
        ...(Object.hasOwn(modelFinishes,part?.finish)?{finish:part.finish}:{}),
        ...(part?.zone==='trigger'&&portalDestination(part.portal)?{portal:portalDestination(part.portal)}:{}),
        ...(part?.uv?{uv:modelPartUv(part)}:{}),
        surface: Object.hasOwn(modelSurfaces, part?.surface) ? part.surface : 'plain',
        texture:typeof part?.texture==='string'&&part.texture.length<=modelLimits.textureBytes&&texturePattern.test(part.texture)
          ?part.texture:null,
        };
      }),
    };
  });
  return { version: 1, models, avatarId: typeof input.avatarId==='string'&&avatarReady(models.find(model=>model.id===input.avatarId)) ? input.avatarId : null };
}

export function readModelPack(storage) {
  try {
    const raw = (storage ?? globalThis.localStorage)?.getItem(modelStorageKey);
    if (raw && raw.length <= modelLimits.fileBytes) return normalizeModelPack(JSON.parse(raw));
  } catch {
    // Storage can be blocked by the browser or contain an obsolete draft.
  }
  return { version: 1, models: [], avatarId: null };
}

function primitive(shape) {
  switch (shape) {
    case 'tetrahedron':return new T.TetrahedronGeometry(Math.sqrt(3)/2);
    case 'sphere': return new T.SphereGeometry(.5, 20, 12);
    case 'cylinder': return new T.CylinderGeometry(.5, .5, 1, 20);
    case 'cone': return new T.ConeGeometry(.5, 1, 20);
    case 'torus': return new T.TorusGeometry(.365, .135, 8, 24);
    case 'capsule': return new T.CapsuleGeometry(.28, .44, 6, 16);
    case 'diamond': return new T.OctahedronGeometry(.5);
    default: return new T.BoxGeometry(1, 1, 1);
  }
}

const surfaceKeys = Object.keys(modelSurfaces);
const tileSize = 64;
const atlasColumns = 4;
const atlasRows = 2;
let atlas;

function textureTone(surface, x, y) {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  const grain = n - Math.floor(n);
  switch (surface) {
    case 'grid': return x % 16 < 2 || y % 16 < 2 ? 135 : 255;
    case 'stripes': return (x + y) % 16 < 6 ? 155 : 255;
    case 'wood': return 204 + 24 * Math.sin(y * .75 + Math.sin(x * .13)) + 27 * grain;
    case 'speckle': return grain > .88 ? 130 : 207 + 48 * grain;
    default: return 255;
  }
}

function surfaceAtlas() {
  if (atlas) return atlas;
  const width = tileSize * atlasColumns;
  const height = tileSize * atlasRows;
  const pixels = new Uint8Array(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const tile = Math.floor(y / tileSize) * atlasColumns + Math.floor(x / tileSize);
      const tone = textureTone(surfaceKeys[tile], x % tileSize, y % tileSize);
      const offset = (y * width + x) * 4;
      pixels[offset] = pixels[offset + 1] = pixels[offset + 2] = tone;
      pixels[offset + 3] = 255;
    }
  }
  atlas = new T.DataTexture(pixels, width, height);
  atlas.colorSpace = T.SRGBColorSpace;
  atlas.magFilter = T.LinearFilter;
  atlas.minFilter = T.LinearMipmapLinearFilter;
  atlas.generateMipmaps = true;
  atlas.needsUpdate = true;
  return atlas;
}

const repeatTextures=new Map();
function repeatedSurface(surface){
  if(repeatTextures.has(surface))return repeatTextures.get(surface);
  const data=new Uint8Array(tileSize*tileSize*4);
  for(let y=0;y<tileSize;y++)for(let x=0;x<tileSize;x++){
    const tone=textureTone(surface,x,y),offset=(y*tileSize+x)*4;
    data.set([tone,tone,tone,255],offset);
  }
  const texture=new T.DataTexture(data,tileSize,tileSize);
  texture.colorSpace=T.SRGBColorSpace;
  texture.wrapS=texture.wrapT=T.RepeatWrapping;
  texture.magFilter=T.LinearFilter;texture.minFilter=T.LinearMipmapLinearFilter;
  texture.generateMipmaps=true;texture.needsUpdate=true;
  texture.userData.sharedModelSurface=true;
  repeatTextures.set(surface,texture);
  return texture;
}
export function modelPartOwnMaterial(part){
  return Boolean(part?.effect||part?.texture||part?.uv||part?.shape==='asset'||part?.finish&&part.finish!=='original');
}

function projectModelUv(geometry,part,metricScale){
  const {projection,repeat,angle,offset}=modelPartUv(part);
  const radians=T.MathUtils.degToRad(angle),cos=Math.cos(radians),sin=Math.sin(radians);
  const {position,normal,uv}=geometry.attributes;
  const local=new T.Vector3(),direction=new T.Vector3();
  for(let i=0;i<position.count;i++){
    let u=uv.getX(i),v=uv.getY(i);
    if(projection==='metric'){
      local.fromBufferAttribute(position,i).multiply(metricScale);
      direction.fromBufferAttribute(normal,i);
      const ax=Math.abs(direction.x),ay=Math.abs(direction.y),az=Math.abs(direction.z);
      if(ax>=ay&&ax>=az){u=local.z;v=local.y;}
      else if(ay>=az){u=local.x;v=local.z;}
      else{u=local.x;v=local.y;}
    }
    uv.setXY(i,(u*cos-v*sin)*repeat+offset[0],(u*sin+v*cos)*repeat+offset[1]);
  }
}

export function createModelPartGeometry(part,metricScale=new T.Vector3(...part.scale)) {
  const asset=part.shape==='asset'?getBuiltinAsset(part.assetId):null;
  const primitiveGeometry = part.shape==='custom'?createSketchGeometry(part.profile):asset?.geometry?.clone()??primitive(part.shape);
  const geometry = primitiveGeometry.index ? primitiveGeometry.toNonIndexed() : primitiveGeometry;
  if (geometry !== primitiveGeometry) primitiveGeometry.dispose();
  if(!geometry.attributes.uv)geometry.setAttribute('uv',new T.Float32BufferAttribute(new Float32Array(geometry.attributes.position.count*2),2));
  if(part.uv)projectModelUv(geometry,part,metricScale);
  const angles = part.rotation.map(T.MathUtils.degToRad);
  geometry.scale(...part.scale);
  geometry.rotateX(angles[0]);
  geometry.rotateY(angles[1]);
  geometry.rotateZ(angles[2]);
  geometry.translate(...part.position);
  const tint = new T.Color(part.color);
  const count = geometry.attributes.position.count;
  const colors = new Float32Array(count * 3);
  const uv = geometry.attributes.uv;
  const tile = surfaceKeys.indexOf(part.surface);
  const column = tile % atlasColumns;
  const row = Math.floor(tile / atlasColumns);
  const sourceColors=geometry.attributes.color;
  for (let index = 0; index < count; index++) {
    if(part.shape==='asset'&&sourceColors){
      colors[index*3]=sourceColors.getX(index)*tint.r;
      colors[index*3+1]=sourceColors.getY(index)*tint.g;
      colors[index*3+2]=sourceColors.getZ(index)*tint.b;
    }else tint.toArray(colors,index*3);
    if(part.shape!=='asset'&&!part.texture&&!part.uv)uv.setXY(index, (column + .05 + uv.getX(index) * .90) / atlasColumns,
      (row + .05 + uv.getY(index) * .90) / atlasRows);
  }
  geometry.setAttribute('color', new T.BufferAttribute(colors, 3));
  return geometry;
}

export function createModelPartMaterial(part){
  return applyModelEffect(createBasePartMaterial(part),part?.effect);
}
function createBasePartMaterial(part){
  const asset=part?.shape==='asset'?getBuiltinAsset(part.assetId):null;
  const finish=modelFinishes[part?.finish];
  if(asset?.material){
    const material=asset.material.clone();
    if(finish&&part.finish!=='original'){material.roughness=finish.roughness;material.metalness=finish.metalness;}
    if(material.map){material.map=material.map.clone();material.map.needsUpdate=true;}
    if(part.texture){
      material.map?.dispose();
      const texture=new T.TextureLoader().load(part.texture);
      texture.colorSpace=T.SRGBColorSpace;texture.wrapS=texture.wrapT=T.RepeatWrapping;
      material.map=texture;
    }
    if(part.uv&&material.map){material.map.wrapS=material.map.wrapT=T.RepeatWrapping;}
    if(part.color&&part.color!=='#ffffff')material.color?.multiply(new T.Color(part.color));
    material.needsUpdate=true;
    return material;
  }
  const {roughness,metalness}=finish??modelFinishes.original;
  if(!part?.texture)return new T.MeshStandardMaterial({vertexColors:true,map:part?.uv?repeatedSurface(part.surface):surfaceAtlas(),roughness,metalness});
  const texture=new T.TextureLoader().load(part.texture);
  texture.colorSpace=T.SRGBColorSpace;
  texture.wrapS=texture.wrapT=T.RepeatWrapping;
  return new T.MeshStandardMaterial({vertexColors:true,map:texture,roughness,metalness});
}
export function createModelMaterial(model){
  if(model?.parts?.some(modelPartOwnMaterial))
    return model.parts.map(createModelPartMaterial);
  return new T.MeshStandardMaterial({vertexColors:true,map:surfaceAtlas(),roughness:.68});
}
export function disposeModelMaterial(material){
  for(const mat of Array.isArray(material)?material:[material]){
    if(!mat)return;
    if(mat.map&&mat.map!==atlas&&!mat.map.userData.sharedModelSurface)mat.map.dispose();
    mat.dispose();
  }
}
function centeredGeometry(parts,scale=null) {
  const pieces=parts.map(part=>{
    if(!scale||part.uv?.projection!=='metric')return createModelPartGeometry(part);
    const order=new T.Euler(...part.rotation.map(T.MathUtils.degToRad),'ZYX');
    const metricScale=new T.Vector3(...part.scale).multiply(new T.Vector3(...[0,1,2].map(axis=>
      new T.Vector3().setComponent(axis,1).applyEuler(order).multiply(scale).length()
    )));
    return createModelPartGeometry(part,metricScale);
  });
  const geometry = mergeGeometries(pieces,parts.some(modelPartOwnMaterial));
  pieces.forEach(piece => piece.dispose());
  geometry.center();
  geometry.computeBoundingBox();
  return geometry;
}

// Unit-sized, centred mesh for model placement. A map piece supplies its world dimensions.
export function createModelUnitGeometry(model,mapDimensions=null) {
  let geometry=centeredGeometry(model.parts);
  const size=geometry.boundingBox.getSize(new T.Vector3()).max(new T.Vector3(1e-5,1e-5,1e-5));
  if(mapDimensions&&model.parts.some(part=>part.uv?.projection==='metric')){
    geometry.dispose();
    geometry=centeredGeometry(model.parts,mapDimensions.clone().divide(size));
  }
  geometry.scale(1/size.x,1/size.y,1/size.z);
  geometry.computeBoundingBox();
  return geometry;
}

export function modelBounds(model){
  const bounds=new T.Box3();
  for(const part of model.parts??[]){
    const geometry=createModelPartGeometry(part);
    geometry.computeBoundingBox();
    bounds.union(geometry.boundingBox);
    geometry.dispose();
  }
  if(bounds.isEmpty())bounds.setFromCenterAndSize(new T.Vector3(),new T.Vector3(1,1,1));
  return bounds;
}
export function modelDimensions(model) {
  return modelBounds(model).getSize(new T.Vector3());
}
// Local units in the workshop; runtime models are recentered and scaled.
export function modelHitbox(model){
  const bounds=modelBounds(model),center=bounds.getCenter(new T.Vector3()),
    size=bounds.getSize(new T.Vector3()),raw=model.hitbox??{};
  const custom=raw.mode==='box'||raw.mode==='custom';
  return {mode:custom?'custom':'auto',shape:raw.mode==='box'?'box':hitboxShapes.has(raw.shape)?raw.shape:'box',
    precision:Number.isFinite(raw.precision)?T.MathUtils.clamp(raw.precision,8,96):48,
    center:custom?new T.Vector3(...raw.center):center,size:custom?new T.Vector3(...raw.size):size,
    rotation:custom?new T.Vector3(...(raw.rotation??[0,0,0])):new T.Vector3(),
    boundsCenter:center,boundsSize:size};
}
function sampleHullPoints(geometry,budget){
  const position=geometry.attributes.position,unique=[],seen=new Set();
  for(let i=0;i<position.count;i++){
    const point=new T.Vector3().fromBufferAttribute(position,i),key=point.toArray().map(v=>v.toFixed(4)).join(',');
    if(!seen.has(key)){seen.add(key);unique.push(point);}
  }
  if(unique.length<=budget)return unique;
  const selected=[unique[0]],used=new Set([0]),distances=unique.map(p=>p.distanceToSquared(selected[0]));
  while(selected.length<budget){
    let best=-1,bestDistance=-1;
    for(let i=0;i<unique.length;i++)if(!used.has(i)&&distances[i]>bestDistance){best=i;bestDistance=distances[i];}
    if(best<0)break;used.add(best);selected.push(unique[best]);
    for(let i=0;i<unique.length;i++)distances[i]=Math.min(distances[i],unique[i].distanceToSquared(unique[best]));
  }
  return selected;
}
export function modelHitboxGeometry(model,dimensions=null){
  const hitbox=modelHitbox(model),radial=Math.max(8,Math.min(24,Math.round(Math.sqrt(hitbox.precision)*2)));
  if(hitbox.shape==='sphere'||hitbox.shape==='capsule'){
    const size=(dimensions??hitbox.size).clone().max(new T.Vector3(.00001,.00001,.00001));
    const lengths=size.toArray(),longest=Math.max(...lengths),axis=lengths.indexOf(longest);
    const radius=(hitbox.shape==='sphere'?longest:Math.max(...lengths.filter((_,i)=>i!==axis)))/2;
    const barrel=Math.max(0,longest-2*radius);
    const geometry=hitbox.shape==='capsule'&&barrel>1e-5
      ?new T.CapsuleGeometry(radius,barrel,Math.max(2,Math.round(radial/8)),radial)
      :new T.SphereGeometry(radius,radial,Math.max(6,Math.floor(radial/2)));
    if(hitbox.shape==='capsule'&&barrel>1e-5){
      if(axis===0)geometry.rotateZ(-Math.PI/2);
      if(axis===2)geometry.rotateX(Math.PI/2);
    }
    geometry.scale(1/size.x,1/size.y,1/size.z);
    return geometry;
  }
  if(hitbox.shape==='convex'&&model.parts?.length){
    const source=centeredGeometry(model.parts),points=sampleHullPoints(source,hitbox.precision);source.dispose();
    if(points.length>=4)try{
      const hull=new ConvexGeometry(points),dimensions=hitbox.boundsSize.clone().max(new T.Vector3(.00001,.00001,.00001));
      hull.scale(1/dimensions.x,1/dimensions.y,1/dimensions.z);hull.computeVertexNormals();return hull;
    }catch{/* Flat models fall back to a box. */}
  }
  return new T.BoxGeometry(1,1,1);
}
export function modelCollisionGeometry(model,mapDimensions=null){
  const hitbox=modelHitbox(model);
  const dimensions=hitbox.boundsSize.clone().max(new T.Vector3(.00001,.00001,.00001));
  const worldDimensions=mapDimensions?new T.Vector3(mapDimensions.x,mapDimensions.y,mapDimensions.z):dimensions.clone();
  const scale=hitbox.size.clone().multiply(worldDimensions).divide(dimensions);
  const offset=hitbox.center.clone().sub(hitbox.boundsCenter).multiply(worldDimensions).divide(dimensions);
  const geometry=modelHitboxGeometry(model,scale);
  geometry.scale(scale.x,scale.y,scale.z);
  geometry.rotateX(T.MathUtils.degToRad(hitbox.rotation.x));
  geometry.rotateY(T.MathUtils.degToRad(hitbox.rotation.y));
  geometry.rotateZ(T.MathUtils.degToRad(hitbox.rotation.z));
  geometry.translate(offset.x,offset.y,offset.z);geometry.computeBoundingBox();return geometry;
}

export function modelCollisionZones(model,mapDimensions=null){
  if(!model.partCollisions||model.kind!=='structure')return null;
  if(model.properties?.collidable===false)return [];
  const bounds=modelBounds(model),center=bounds.getCenter(new T.Vector3());
  const size=bounds.getSize(new T.Vector3()).max(new T.Vector3(1e-5,1e-5,1e-5));
  const ratio=mapDimensions?mapDimensions.clone().divide(size):new T.Vector3(1,1,1);
  return model.parts.flatMap(part=>{
    if(part.zone==='pass')return [];
    const geometry=createModelPartGeometry(part);
    geometry.computeBoundingBox();
    const box=geometry.boundingBox;
    const zone={mode:part.zone==='trigger'?'trigger':'solid',name:part.name,notice:part.notice,portal:part.portal,
      center:box.getCenter(new T.Vector3()).sub(center).multiply(ratio),
      size:box.getSize(new T.Vector3()).multiply(ratio).max(new T.Vector3(.01,.01,.01))};
    geometry.dispose();
    return [zone];
  });
}

export function createModelPropDefinitions(pack) {
  return pack.models.filter(model => model.kind!=='avatar'&&model.inGame&&model.parts.length).map(model => {
    const geo = centeredGeometry(model.parts);
    const size = geo.boundingBox.getSize(new T.Vector3());
    return {
      id: model.id, name: model.name, properties: model.properties, physics:modelPhysics(model), geo,
      material: createModelMaterial(model),
      collisionGeo:modelCollisionGeometry(model),
      mass: T.MathUtils.clamp(size.x * size.y * size.z * 9, .18, 12),
    };
  });
}

export function createModelAvatarHead(pack) {
  const model = pack.models.find(candidate => candidate.id === pack.avatarId);
  if (!model?.parts.length||model.kind==='avatar') return null;
  const geometry = centeredGeometry(model.parts);
  const size = geometry.boundingBox.getSize(new T.Vector3());
  const scale = .36 / Math.max(size.x, size.y, size.z);
  geometry.scale(scale, scale, scale);
  const mesh = new T.Mesh(geometry, createModelMaterial(model));
  mesh.castShadow = true;
  const head = new T.Group();
  head.add(mesh);
  return head;
}

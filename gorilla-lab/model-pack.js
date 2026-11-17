import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { ConvexGeometry } from 'three/addons/geometries/ConvexGeometry.js';
import {normalizeSketch,createSketchGeometry} from './custom-shape.js';
import {getBuiltinAsset,isBuiltinAsset} from './model-assets.js';

export const modelStorageKey = 'gorilla-lab-models-v1';
export const modelLimits = Object.freeze({ models: 24, parts: 64, fileBytes: 2_500_000, textureBytes: 160_000 });
const texturePattern=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;
export const modelShapes = Object.freeze({
  box: 'Cube', sphere: 'Sphère', cylinder: 'Cylindre', cone: 'Cône',
  torus: 'Anneau', capsule: 'Capsule', diamond: 'Diamant',custom:'Forme libre',asset:'Asset du jeu',
});
export const modelSurfaces = Object.freeze({
  plain: 'Uni', grid: 'Grille', stripes: 'Rayures', wood: 'Bois', speckle: 'Minéral',
});
export const defaultModelProperties = Object.freeze({ grabbable: true, frozen: false, collidable: true, supportWhileHeld: false });

const identifier = /^custom-model-[a-z0-9][a-z0-9-]{0,47}$/;
const colorPattern = /^#[a-f\d]{6}$/i;

function label(value, fallback) {
  return typeof value === 'string' ? value.replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, 48) || fallback : fallback;
}

function vector(value, fallback, min, max) {
  return [0, 1, 2].map(index => Number.isFinite(value?.[index]) ? T.MathUtils.clamp(value[index], min, max) : fallback);
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
  const models = input.models.map(raw => {
    if (typeof raw?.id !== 'string' || !identifier.test(raw.id) || ids.has(raw.id) ||
        !Array.isArray(raw.parts) || raw.parts.length > modelLimits.parts) {
      throw new Error('Un modèle comporte un identifiant ou une liste de pièces invalide.');
    }
    ids.add(raw.id);
    return {
      id: raw.id,
      name: label(raw.name, 'Modèle sans nom'),
      kind: raw.kind === 'structure' ? 'structure' : 'prop',
      ...(isBuiltinAsset(raw.assetId)?{assetId:raw.assetId}:{}),
      inGame: raw.inGame === true,
      properties: Object.fromEntries(Object.entries(defaultModelProperties).map(([key, fallback]) => [
        key, typeof raw.properties?.[key] === 'boolean' ? raw.properties[key] : fallback,
      ])),
      hitbox:normalizeHitbox(raw?.hitbox),
      parts: raw.parts.map((part, index) => ({
        name: label(part?.name, `Pièce ${index + 1}`),
        shape: part?.shape==='asset'&&isBuiltinAsset(part?.assetId)?'asset':Object.hasOwn(modelShapes, part?.shape)&&part.shape!=='asset'?part.shape:'box',
        ...(part?.shape==='asset'&&isBuiltinAsset(part?.assetId)?{assetId:part.assetId}:{}),
        ...(part?.shape==='custom'?{profile:normalizeSketch(part?.profile)}:{}),
        position: vector(part?.position, 0, -3, 3),
        rotation: vector(part?.rotation, 0, -360, 360),
        scale: vector(part?.scale, .35, .02, 4),
        color: typeof part?.color === 'string' && colorPattern.test(part.color) ? part.color : '#51bdd2',
        surface: Object.hasOwn(modelSurfaces, part?.surface) ? part.surface : 'plain',
        texture:typeof part?.texture==='string'&&part.texture.length<=modelLimits.textureBytes&&texturePattern.test(part.texture)
          ?part.texture:null,
      })),
    };
  });
  return { version: 1, models, avatarId: typeof input.avatarId === 'string' && ids.has(input.avatarId) ? input.avatarId : null };
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

export function createModelPartGeometry(part) {
  const asset=part.shape==='asset'?getBuiltinAsset(part.assetId):null;
  const primitiveGeometry = part.shape==='custom'?createSketchGeometry(part.profile):asset?.geometry?.clone()??primitive(part.shape);
  const geometry = primitiveGeometry.index ? primitiveGeometry.toNonIndexed() : primitiveGeometry;
  if (geometry !== primitiveGeometry) primitiveGeometry.dispose();
  if(!geometry.attributes.uv)geometry.setAttribute('uv',new T.Float32BufferAttribute(new Float32Array(geometry.attributes.position.count*2),2));
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
    if(part.shape!=='asset'&&!part.texture)uv.setXY(index, (column + .05 + uv.getX(index) * .90) / atlasColumns,
      (row + .05 + uv.getY(index) * .90) / atlasRows);
  }
  geometry.setAttribute('color', new T.BufferAttribute(colors, 3));
  return geometry;
}

export function createModelPartMaterial(part){
  const asset=part?.shape==='asset'?getBuiltinAsset(part.assetId):null;
  if(asset?.material){
    const material=asset.material.clone();
    if(material.map){material.map=material.map.clone();material.map.needsUpdate=true;}
    if(part.texture){
      material.map?.dispose();
      const texture=new T.TextureLoader().load(part.texture);
      texture.colorSpace=T.SRGBColorSpace;texture.wrapS=texture.wrapT=T.RepeatWrapping;
      material.map=texture;
    }
    if(part.color&&part.color!=='#ffffff')material.color?.multiply(new T.Color(part.color));
    material.needsUpdate=true;
    return material;
  }
  if(!part?.texture)return new T.MeshStandardMaterial({vertexColors:true,map:surfaceAtlas(),roughness:.68});
  const texture=new T.TextureLoader().load(part.texture);
  texture.colorSpace=T.SRGBColorSpace;
  texture.wrapS=texture.wrapT=T.RepeatWrapping;
  return new T.MeshStandardMaterial({vertexColors:true,map:texture,roughness:.68});
}
export function createModelMaterial(model){
  if(model?.parts?.some(part=>part.texture||part.shape==='asset'))
    return model.parts.map(createModelPartMaterial);
  return new T.MeshStandardMaterial({vertexColors:true,map:surfaceAtlas(),roughness:.68});
}
export function disposeModelMaterial(material){
  for(const mat of Array.isArray(material)?material:[material]){
    if(!mat)return;
    if(mat.map&&mat.map!==atlas)mat.map.dispose();
    mat.dispose();
  }
}
function centeredGeometry(parts) {
  const pieces = parts.map(createModelPartGeometry);
  const geometry = mergeGeometries(pieces,parts.some(part=>part.texture||part.shape==='asset'));
  pieces.forEach(piece => piece.dispose());
  geometry.center();
  geometry.computeBoundingBox();
  return geometry;
}

// Unit-sized, centred mesh for model placement. A map piece supplies its world dimensions.
export function createModelUnitGeometry(model) {
  const geometry = centeredGeometry(model.parts);
  const size = geometry.boundingBox.getSize(new T.Vector3());
  geometry.scale(1 / Math.max(size.x, 1e-5), 1 / Math.max(size.y, 1e-5), 1 / Math.max(size.z, 1e-5));
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
export function modelHitboxGeometry(model){
  const hitbox=modelHitbox(model),radial=Math.max(8,Math.min(24,Math.round(Math.sqrt(hitbox.precision)*2)));
  if(hitbox.shape==='sphere')return new T.SphereGeometry(.5,radial,Math.max(6,Math.floor(radial/2)));
  if(hitbox.shape==='capsule')return new T.CapsuleGeometry(.5,0,Math.max(2,Math.round(radial/8)),radial);
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
  const hitbox=modelHitbox(model),geometry=modelHitboxGeometry(model);
  const dimensions=hitbox.boundsSize.clone().max(new T.Vector3(.00001,.00001,.00001));
  const worldDimensions=mapDimensions?new T.Vector3(mapDimensions.x,mapDimensions.y,mapDimensions.z):new T.Vector3(1,1,1);
  const scale=hitbox.size.clone().multiply(worldDimensions).divide(dimensions);
  const offset=hitbox.center.clone().sub(hitbox.boundsCenter).multiply(worldDimensions).divide(dimensions);
  geometry.scale(scale.x,scale.y,scale.z);
  geometry.rotateX(T.MathUtils.degToRad(hitbox.rotation.x));
  geometry.rotateY(T.MathUtils.degToRad(hitbox.rotation.y));
  geometry.rotateZ(T.MathUtils.degToRad(hitbox.rotation.z));
  geometry.translate(offset.x,offset.y,offset.z);geometry.computeBoundingBox();return geometry;
}

export function createModelPropDefinitions(pack) {
  return pack.models.filter(model => model.inGame && model.parts.length).map(model => {
    const geo = centeredGeometry(model.parts);
    const size = geo.boundingBox.getSize(new T.Vector3());
    return {
      id: model.id, name: model.name, properties: model.properties, geo,
      material: createModelMaterial(model),
      collisionGeo:modelCollisionGeometry(model),
      mass: T.MathUtils.clamp(size.x * size.y * size.z * 9, .18, 12),
    };
  });
}

export function createModelAvatarHead(pack) {
  const model = pack.models.find(candidate => candidate.id === pack.avatarId);
  if (!model?.parts.length) return null;
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

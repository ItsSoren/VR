import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {normalizeSketch,createSketchGeometry} from './custom-shape.js';

export const modelStorageKey = 'gorilla-lab-models-v1';
export const modelLimits = Object.freeze({ models: 12, parts: 64, fileBytes: 2_500_000, textureBytes: 160_000 });
const texturePattern=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;
export const modelShapes = Object.freeze({
  box: 'Cube', sphere: 'Sphère', cylinder: 'Cylindre', cone: 'Cône',
  torus: 'Anneau', capsule: 'Capsule', diamond: 'Diamant',custom:'Forme libre',
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
      inGame: raw.inGame === true,
      properties: Object.fromEntries(Object.entries(defaultModelProperties).map(([key, fallback]) => [
        key, typeof raw.properties?.[key] === 'boolean' ? raw.properties[key] : fallback,
      ])),
      parts: raw.parts.map((part, index) => ({
        name: label(part?.name, `Pièce ${index + 1}`),
        shape: Object.hasOwn(modelShapes, part?.shape) ? part.shape : 'box',
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
  const primitiveGeometry = part.shape==='custom'?createSketchGeometry(part.profile):primitive(part.shape);
  const geometry = primitiveGeometry.index ? primitiveGeometry.toNonIndexed() : primitiveGeometry;
  if (geometry !== primitiveGeometry) primitiveGeometry.dispose();
  const angles = part.rotation.map(T.MathUtils.degToRad);
  geometry.scale(...part.scale);
  geometry.rotateX(angles[0]);
  geometry.rotateY(angles[1]);
  geometry.rotateZ(angles[2]);
  geometry.translate(...part.position);
  const color = new T.Color(part.color);
  const count = geometry.attributes.position.count;
  const colors = new Float32Array(count * 3);
  const uv = geometry.attributes.uv;
  const tile = surfaceKeys.indexOf(part.surface);
  const column = tile % atlasColumns;
  const row = Math.floor(tile / atlasColumns);
  for (let index = 0; index < count; index++) {
    color.toArray(colors, index * 3);
    if(!part.texture)uv.setXY(index, (column + .05 + uv.getX(index) * .90) / atlasColumns,
      (row + .05 + uv.getY(index) * .90) / atlasRows);
  }
  geometry.setAttribute('color', new T.BufferAttribute(colors, 3));
  return geometry;
}

export function createModelPartMaterial(part){
  if(!part?.texture)return new T.MeshStandardMaterial({vertexColors:true,map:surfaceAtlas(),roughness:.68});
  const texture=new T.TextureLoader().load(part.texture);
  texture.colorSpace=T.SRGBColorSpace;
  texture.wrapS=texture.wrapT=T.RepeatWrapping;
  return new T.MeshStandardMaterial({vertexColors:true,map:texture,roughness:.68});
}
export function createModelMaterial(model){
  if(model?.parts?.some(part=>part.texture))
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
  const geometry = mergeGeometries(pieces,parts.some(part=>part.texture));
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

export function modelDimensions(model) {
  const bounds = new T.Box3();
  for (const part of model.parts) {
    const geometry = createModelPartGeometry(part);
    geometry.computeBoundingBox();
    bounds.union(geometry.boundingBox);
    geometry.dispose();
  }
  return bounds.getSize(new T.Vector3());
}

export function createModelPropDefinitions(pack) {
  return pack.models.filter(model => model.inGame && model.parts.length).map(model => {
    const geo = centeredGeometry(model.parts);
    const size = geo.boundingBox.getSize(new T.Vector3());
    return {
      id: model.id, name: model.name, properties: model.properties, geo,
      material: createModelMaterial(model),
      collisionGeo: new T.BoxGeometry(size.x, size.y, size.z),
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

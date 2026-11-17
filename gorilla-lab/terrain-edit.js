import * as T from 'three';
import {normalizeModelPack,createModelUnitGeometry,createModelMaterial,disposeModelMaterial} from './model-pack.js';

export const terrainDetails = Object.freeze([8, 16, 32, 48, 64, 96, 128]);
const defaultDetail = 16;
const maxSculptHeight = 24;
const grids = new WeakMap();
const clamp = T.MathUtils.clamp;
const lerp = T.MathUtils.lerp;
const smooth = t => t * t * (3 - 2 * t);

function bounded(value, min, max, fallback) {
  return Number.isFinite(value) ? clamp(value, min, max) : fallback;
}

function validVegetationModel(raw) {
  if(!raw)return null;
  const normalized=normalizeModelPack({version:1,models:[raw]});
  return normalized.models[0]?.parts.length ? normalized.models[0] : null;
}
const texturePattern=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;
export function normalizeTerrain(value = {}) {
  const detail = terrainDetails.includes(value?.detail) ? value.detail : defaultDetail;
  const heights = value?.heights;
  return {
    detail,
    seed: Math.round(bounded(value?.seed, 0, 2147483647, 1)),
    amplitude: bounded(value?.amplitude, 0, 12, 0),
    frequency: bounded(value?.frequency, .015, 2, .12),
    octaves:Math.round(bounded(value?.octaves,1,5,3)),
    roughness:bounded(value?.roughness,.15,.95,.42),
    ridge:bounded(value?.ridge,0,1,0),
    edgeFade:bounded(value?.edgeFade,0,1,0),
    grass: bounded(value?.grass, 0, 1, 0),
    shrub: bounded(value?.shrub, 0, 1, 0),
    grassSize:bounded(value?.grassSize,.1,5,1),shrubSize:bounded(value?.shrubSize,.1,5,1),
    grassModel:validVegetationModel(value?.grassModel),shrubModel:validVegetationModel(value?.shrubModel),
    grassTexture:typeof value?.grassTexture==='string'&&value.grassTexture.length<500000&&texturePattern.test(value.grassTexture)?value.grassTexture:null,
    heights: Array.isArray(heights) && heights.length === (detail + 1) ** 2
      ? Array.from(heights, height => bounded(height, -maxSculptHeight, maxSculptHeight, 0))
      : null,
  };
}

// The brush, physics, and vegetation all sample the mesh's triangle split.
function sampleGrid(heights, detail, x, z) {
  const gx = clamp(x, 0, detail), gz = clamp(z, 0, detail);
  const col = Math.min(detail - 1, Math.floor(gx)), row = Math.min(detail - 1, Math.floor(gz));
  const u = gx - col, v = gz - row, stride = detail + 1;
  const i = row * stride + col;
  const a = heights[i], b = heights[i + 1], c = heights[i + stride], d = heights[i + stride + 1];
  return u + v <= 1 ? a + (b - a) * u + (c - a) * v : d + (c - d) * (1 - u) + (b - d) * (1 - v);
}

export function resizeTerrain(terrain, requestedDetail) {
  const detail = terrainDetails.includes(requestedDetail) ? requestedDetail : defaultDetail;
  if (detail === terrain.detail) return terrain;
  if (!terrain.heights) return { ...terrain, detail, heights: null };
  const stride = detail + 1;
  const ratio = terrain.detail / detail;
  const heights = Array.from({ length: stride ** 2 }, (_, i) =>
    sampleGrid(terrain.heights, terrain.detail, (i % stride) * ratio, Math.floor(i / stride) * ratio));
  return { ...terrain, detail, heights };
}

function hash(x, z, seed) {
  let n = Math.imul(x, 374761393) ^ Math.imul(z, 668265263) ^ Math.imul(seed + 1, 1274126177);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
}

function noise(x, z, seed) {
  const col = Math.floor(x), row = Math.floor(z);
  const u = smooth(x - col), v = smooth(z - row);
  const north = lerp(hash(col, row, seed), hash(col + 1, row, seed), u);
  const south = lerp(hash(col, row + 1, seed), hash(col + 1, row + 1, seed), u);
  return 2 * lerp(north, south, v) - 1;
}

function gridFor(piece) {
  const { w, d, terrain } = piece;
  const { detail, seed, amplitude, frequency, octaves, roughness, ridge, edgeFade, heights } = terrain;
  const cached = grids.get(piece);
  const sameNoise = cached && cached.w === w && cached.d === d && cached.detail === detail &&
    cached.seed === seed && cached.amplitude === amplitude && cached.frequency === frequency &&
    cached.octaves === octaves && cached.roughness === roughness && cached.ridge === ridge && cached.edgeFade === edgeFade;
  if (sameNoise && cached.heights === heights) return cached;

  const stride = detail + 1;
  const procedural = sameNoise ? cached.procedural : new Float64Array(stride ** 2);
  if (!sameNoise && amplitude) {
    for (let row = 0; row <= detail; row++) {
      for (let col = 0; col <= detail; col++) {
        const x = (col / detail - .5) * w * frequency;
        const z = (row / detail - .5) * d * frequency;
        let height=0,weight=1,total=0;
        for(let octave=0;octave<octaves;octave++){
          const n=noise(x*2**octave,z*2**octave,seed+octave*13);
          height+=weight*lerp(n,1-2*Math.abs(n),ridge);
          total+=weight;weight*=roughness;
        }
        const fade=edgeFade?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(col/detail-.5))*2,
          (.5-Math.abs(row/detail-.5))*2)),edgeFade*2):1;
        // Preserve previously saved terrain shapes when users have not enabled new noise controls.
        const classic=octaves===3&&roughness===.42&&ridge===0&&edgeFade===0;
        procedural[row*stride+col]=classic
          ? amplitude*(.62*noise(x,z,seed)+.26*noise(x*2.03,z*2.03,seed+13)
              +.12*noise(x*4.13,z*4.13,seed+37))
          : amplitude*height/total*fade;
      }
    }
  }
  const surface = heights ? procedural.map((height, i) => height + heights[i]) : procedural;
  const grid = { w, d, detail, seed, amplitude, frequency, octaves, roughness, ridge, edgeFade, heights, procedural, surface };
  grids.set(piece, grid);
  return grid;
}

function localHeight(grid, x, z) {
  const { detail, w, d, surface } = grid;
  return sampleGrid(surface, detail, (x / w + .5) * detail, (z / d + .5) * detail);
}

export function terrainHeight(piece, x, z) {
  return piece.y + localHeight(gridFor(piece), x - piece.x, z - piece.z);
}

function neighborHeight(grid, col, row) {
  const { detail, surface } = grid;
  const stride = detail + 1;
  const x0 = Math.max(0, col - 1), x1 = Math.min(detail, col + 1);
  const z0 = Math.max(0, row - 1), z1 = Math.min(detail, row + 1);
  let total = 0, count = 0;
  for (let z = z0; z <= z1; z++) {
    for (let x = x0; x <= x1; x++) {
      if (x === col && z === row) continue;
      total += surface[z * stride + x];
      count++;
    }
  }
  return total / count;
}

export function sculptTerrain(piece, x, z, { mode, radius, strength, target } = {}) {
  if (!piece?.terrain || !['raise', 'lower', 'smooth', 'flatten'].includes(mode) ||
      ![x, z, radius, strength].every(Number.isFinite) || radius <= 0 || strength <= 0) return false;

  const grid = gridFor(piece);
  const { detail, w, d, surface, procedural } = grid;
  const localX = x - piece.x, localZ = z - piece.z;
  const nearestX = clamp(localX, -w / 2, w / 2), nearestZ = clamp(localZ, -d / 2, d / 2);
  if ((localX - nearestX) ** 2 + (localZ - nearestZ) ** 2 >= radius ** 2) return false;

  const gx = (localX / w + .5) * detail, gz = (localZ / d + .5) * detail;
  const dx = w / detail, dz = d / detail;
  const x0 = Math.max(0, Math.ceil(gx - radius / dx)), x1 = Math.min(detail, Math.floor(gx + radius / dx));
  const z0 = Math.max(0, Math.ceil(gz - radius / dz)), z1 = Math.min(detail, Math.floor(gz + radius / dz));
  const flat = Number.isFinite(target) ? target - piece.y : localHeight(grid, localX, localZ);
  const stride = detail + 1;
  const offsets = grid.heights?.slice() ?? new Array(stride ** 2).fill(0);
  let touched = false, changed = false;

  function stamp(col, row, weight) {
    touched = true;
    const i = row * stride + col;
    const previous = offsets[i];
    let offset;
    if (mode === 'raise' || mode === 'lower') {
      offset = previous + (mode === 'raise' ? 1 : -1) * strength * weight;
    } else {
      const wanted = mode === 'flatten' ? flat : neighborHeight(grid, col, row);
      offset = lerp(surface[i], wanted, Math.min(1, strength) * weight) - procedural[i];
    }
    offset = clamp(offset, -maxSculptHeight, maxSculptHeight);
    if (Math.abs(offset - previous) < 1e-7) return;
    offsets[i] = offset;
    changed = true;
  }

  for (let row = z0; row <= z1; row++) {
    for (let col = x0; col <= x1; col++) {
      const r = Math.hypot((col - gx) * dx, (row - gz) * dz) / radius;
      if (r < 1) stamp(col, row, smooth(1 - r));
    }
  }
  // A small brush still affects the nearest vertex between coarse-grid samples.
  if (!touched) {
    const x = clamp(gx, 0, detail), z = clamp(gz, 0, detail);
    const col = Math.min(detail - 1, Math.floor(x)), row = Math.min(detail - 1, Math.floor(z));
    const u = x - col, v = z - row;
    const onFirstTriangle = u + v <= 1;
    const diagonal = onFirstTriangle ? 1 - u - v : u + v - 1;
    const right = onFirstTriangle ? u : 1 - v;
    const bottom = onFirstTriangle ? v : 1 - u;
    if (diagonal >= Math.max(right, bottom)) {
      const corner = Number(!onFirstTriangle);
      stamp(col + corner, row + corner, 1);
    } else if (right >= bottom) {
      stamp(col + 1, row, 1);
    } else {
      stamp(col, row + 1, 1);
    }
  }
  if (changed) piece.terrain.heights = offsets;
  return changed;
}

export function terrainGeometry(piece) {
  const { w, d, terrain } = piece;
  const { detail } = terrain;
  const stride = detail + 1;
  const positions = new Float32Array(stride ** 2 * 3);
  const uvs = new Float32Array(stride ** 2 * 2);
  const index = new Uint16Array(detail ** 2 * 6);
  let indexOffset = 0;
  for (let row = 0; row <= detail; row++) {
    for (let col = 0; col <= detail; col++) {
      const vertex = row * stride + col;
      positions[3 * vertex] = (col / detail - .5) * w;
      positions[3 * vertex + 2] = (row / detail - .5) * d;
      uvs[2 * vertex] = col / detail * w / 2.6;
      uvs[2 * vertex + 1] = (1 - row / detail) * d / 2.6;
      if (row < detail && col < detail) {
        index.set([vertex, vertex + stride, vertex + 1,
          vertex + stride + 1, vertex + 1, vertex + stride], indexOffset);
        indexOffset += 6;
      }
    }
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.BufferAttribute(positions, 3).setUsage(T.DynamicDrawUsage));
  geometry.setAttribute('uv', new T.BufferAttribute(uvs, 2));
  geometry.setIndex(new T.BufferAttribute(index, 1));
  updateTerrainGeometry(geometry, piece);
  return geometry;
}

export function updateTerrainGeometry(geometry, piece) {
  const { surface } = gridFor(piece);
  const { position } = geometry.attributes;
  for (let i = 0; i < surface.length; i++) position.setY(i, surface[i]);
  position.needsUpdate = true;
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  if (geometry.boundingBox) geometry.computeBoundingBox();
}

// Matches the diagonal and vertices written by terrainGeometry(), including at steep crests.
function terrainNormal(piece, x, z, out) {
  const {detail,w,d,surface}=gridFor(piece);
  const u=clamp(((x-piece.x)/w+.5)*detail,0,detail);
  const v=clamp(((z-piece.z)/d+.5)*detail,0,detail);
  const col=Math.min(detail-1,Math.floor(u)),row=Math.min(detail-1,Math.floor(v));
  const stride=detail+1, i=row*stride+col;
  const lower=u-col+v-row<=1;
  const dx=lower?surface[i+1]-surface[i]:surface[i+stride+1]-surface[i+stride];
  const dz=lower?surface[i+stride]-surface[i]:surface[i+stride+1]-surface[i+1];
  return out.set(-dx*detail/w,1,-dz*detail/d).normalize();
}

export function terrainCollider(piece, mesh) {
  return {
    mesh, heightfield: true,
    xMin: piece.x - piece.w / 2, xMax: piece.x + piece.w / 2,
    zMin: piece.z - piece.d / 2, zMax: piece.z + piece.d / 2,
    height: (x, z) => terrainHeight(piece, x, z),
    normalAt: (x,z,out) => terrainNormal(piece,x,z,out),
    friction: piece.grip, gravity: piece.gravity, bounce: piece.bounce,
    zone: true, type: piece.material,
  };
}

function grassGeometry() {
  const positions = [];
  for (let i = 0; i < 5; i++) {
    const angle = i * 2.4, dx = Math.cos(angle), dz = Math.sin(angle);
    const x = dx * .105, z = dz * .105;
    positions.push(x + dz * .028, 0, z - dx * .028, x - dz * .028, 0, z + dx * .028,
      x + dx * .16, .27 + (i % 3) * .07, z + dz * .16);
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv',new T.Float32BufferAttribute(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2));
  geometry.computeVertexNormals();
  return geometry;
}

function shrubGeometry() {
  return new T.IcosahedronGeometry(.34, 0).scale(1.25, 1, 1.15).translate(0, .28, 0);
}

const vegetationKinds = [
  { name: 'grass', geometry: grassGeometry, perMetre: 5, max: 3200, salt: 21, color: '#527a34' },
  { name: 'shrub', geometry: shrubGeometry, perMetre: .17, max: 48, salt: 47, color: '#36583c' },
];

export function terrainVegetation(piece) {
  const group = new T.Group();
  for (const { name, geometry, perMetre, max, salt, color } of vegetationKinds) {
    const density = piece.terrain[name];
    if (!density) continue;
    // Cap the area first so the density slider still spans its full range on large plots.
    const count = Math.max(1, Math.round(Math.min(max,piece.w*piece.d*perMetre)*density));
    const imported=piece.terrain[name+'Model'];
    const size=piece.terrain[name+'Size']??1;
    let plantGeometry, material;
    if(imported){
      const base=name==='grass'?.42:.85;
      plantGeometry=createModelUnitGeometry(imported);
      plantGeometry.scale(base*size,base*size,base*size);
      plantGeometry.translate(0,base*size/2,0);
      material=createModelMaterial(imported);
    }else{
      plantGeometry=geometry();
      plantGeometry.scale(size,size,size);
      material=new T.MeshLambertMaterial({color,side:name==='grass'?T.DoubleSide:T.FrontSide,flatShading:true});
      if(name==='grass'&&piece.terrain.grassTexture){
        const map=new T.TextureLoader().load(piece.terrain.grassTexture);
        map.colorSpace=T.SRGBColorSpace;
        material.map=map;
        material.color.set('#ffffff');
        material.userData.ownTexture=true;
      }
    }
    const plants = new T.InstancedMesh(plantGeometry, material, count);
    plants.name = name;
    plants.instanceMatrix.setUsage(T.DynamicDrawUsage);
    plants.userData.salt = salt;
    plants.receiveShadow = true;
    const tint = new T.Color();
    for (let i = 0; i < count; i++) {
      const variation = lerp(.68, 1.2, hash(i, salt, piece.terrain.seed + 4));
      plants.setColorAt(i, tint.setRGB(variation, variation, variation));
    }
    group.add(plants);
  }
  updateTerrainVegetation(group, piece);
  return group;
}

export function updateTerrainVegetation(group, piece) {
  const grid = gridFor(piece);
  const plant = new T.Object3D();
  for (const plants of group.children) {
    const { salt } = plants.userData;
    const { seed } = piece.terrain;
    for (let i = 0; i < plants.count; i++) {
      const x = (hash(i, salt, seed) - .5) * .96 * piece.w;
      const z = (hash(i, salt, seed + 1) - .5) * .96 * piece.d;
      plant.position.set(x, localHeight(grid, x, z), z);
      plant.rotation.y = hash(i, salt, seed + 2) * 2 * Math.PI;
      plant.scale.setScalar(lerp(.58, 1.34, hash(i, salt, seed + 3)));
      plant.updateMatrix();
      plants.setMatrixAt(i, plant.matrix);
    }
    plants.instanceMatrix.needsUpdate = true;
    plants.computeBoundingSphere();
  }
}

export function disposeVegetation(group) {
  if (!group) return;
  for (const plants of group.children) {
    plants.geometry.dispose();
    if(plants.material.userData.ownTexture)plants.material.map?.dispose();
    disposeModelMaterial(plants.material);
    plants.dispose();
  }
  group.clear();
  group.removeFromParent();
}


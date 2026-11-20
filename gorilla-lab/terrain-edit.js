import * as T from 'three';
import {normalizeModelPack,createModelUnitGeometry,createModelMaterial,disposeModelMaterial,modelDimensions} from './model-pack.js';

export const maxTerrainDetail=256;
export const defaultTerrainTextureDensity=1/2.6**2;
export const maxTerrainRules=10000;
export const maxTerrainDensity=20;
export const maxTerrainRuleInstances=1_000_000;
export const maxTerrainPropSize=10_000;
export const maxTerrainColliders=10_000;
export const maxTerrainRuleColors=10;
export const maxTerrainSizeVariation=10;
const maxTextureDensity=256;
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
function terrainDetail(value,fallback=defaultDetail){
  return Math.round(bounded(value,1,maxTerrainDetail,fallback));
}

function readVegetationDensity(value,name,area,legacyRate,legacyMax){
  if(Number.isFinite(value[name+'Density']))return bounded(value[name+'Density'],0,maxTerrainDensity,0);
  const legacy=bounded(value[name],0,1,0);
  if(!legacy)return 0;
  const count=Math.max(1,Math.round(Math.min(legacyMax,area*legacyRate)*legacy));
  return bounded(count/area,0,maxTerrainDensity,0);
}

const distributionKinds=['grass','shrub','model'];
const fitModes=['keep','fit','stretch'];
const colorPattern=/^#[a-f\d]{6}$/i;

export const maxTerrainOctaves=10;
function normalizeTerrainScatter(raw={}){
  const ordered=(a,b)=>a<=b?[a,b]:[b,a];
  const [minHeight,maxHeight]=ordered(bounded(raw.minHeight,-300,300,-300),bounded(raw.maxHeight,-300,300,300));
  const [minX,maxX]=ordered(bounded(raw.minX,0,100,0),bounded(raw.maxX,0,100,100));
  const [minZ,maxZ]=ordered(bounded(raw.minZ,0,100,0),bounded(raw.maxZ,0,100,100));
  return {minHeight,maxHeight,minX,maxX,minZ,maxZ,maxSlope:bounded(raw.maxSlope,0,90,90),
    yaw:bounded(raw.yaw,-360,360,0),yawVariation:bounded(raw.yawVariation,0,360,360)};
}
function normalizeReliefArea(raw){
  return raw?{x:bounded(raw.x,-256,256,0),z:bounded(raw.z,-256,256,0),
    radius:bounded(raw.radius,.1,512,5),blend:bounded(raw.blend,0,1,.5)}:null;
}
export function normalizeTerrainRule(rule={}){
  const model=validVegetationModel(rule.model);
  const kind=model?'model':rule.kind==='shrub'?'shrub':'grass';
  const color=kind==='grass'?'#527a34':kind==='shrub'?'#36583c':'#ffffff';
  const palette=(Array.isArray(rule.colors)?rule.colors:[rule.colorA,rule.colorB])
    .slice(0,maxTerrainRuleColors).map(value=>colorPattern.test(value)?value:color);
  while(palette.length<2)palette.push(palette.at(-1)??color);
  return {
    kind,model,density:bounded(rule.density,0,maxTerrainDensity,1),
    colors:palette,
    seed:Math.round(bounded(rule.seed,0,2147483647,1)),
    size:bounded(rule.size,.05,maxTerrainPropSize,1),
    fit:fitModes.includes(rule.fit)?rule.fit:'keep',
    collidable:rule.collidable===true,
    variation:bounded(rule.variation,0,maxTerrainSizeVariation,0),
    ...(rule.scatter?{scatter:normalizeTerrainScatter(rule.scatter)}:{}),
  };
}

function readTerrainRules(value,area){
  if(Array.isArray(value.rules))return value.rules.slice(0,maxTerrainRules)
    .filter(rule=>rule&&typeof rule==='object'&&distributionKinds.includes(rule.kind))
    .filter(rule=>rule.kind!=='model'||validVegetationModel(rule.model))
    .map(normalizeTerrainRule);
  return [['grass',5,3200,.42],['shrub',.17,48,.85]].flatMap(([kind,rate,limit,cube])=>{
    const density=readVegetationDensity(value,kind,area,rate,limit);
    const model=value[kind+'Model'];
    if(!density&&!model&&!(kind==='grass'&&value.grassTexture))return [];
    return [normalizeTerrainRule({kind,model,density,seed:value.seed,
      size:bounded(value[kind+'Size'],.1,5,1)*(model?cube:1),fit:model?'stretch':'keep',variation:.38,...(kind==='grass'&&value.grassTexture&&!model?{colorA:'#ffffff',colorB:'#ffffff'}:{})})];
  });
}

export function normalizeTerrain(value = {},area=1) {
  const detail=terrainDetail(value?.detail);
  const heights = value?.heights;
  return {
    detail,
    seed: Math.round(bounded(value?.seed, 0, 2147483647, 1)),
    amplitude: bounded(value?.amplitude, 0, 12, 0),
    frequency: bounded(value?.frequency, .015, 2, .12),
    octaves:Math.round(bounded(value?.octaves,1,maxTerrainOctaves,3)),
    roughness:bounded(value?.roughness,.15,.95,.42),
    ridge:bounded(value?.ridge,0,1,0),
    edgeFade:bounded(value?.edgeFade,0,1,0),
    ...(value?.reliefArea?{reliefArea:normalizeReliefArea(value.reliefArea)}:{}),
    rules:readTerrainRules(value??{},area),
    textureDensity:bounded(value?.textureDensity,.0001,maxTextureDensity,defaultTerrainTextureDensity),
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
  const detail=terrainDetail(requestedDetail,terrain.detail);
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
  const { detail, seed, amplitude, frequency, octaves, roughness, ridge, edgeFade, reliefArea, heights } = terrain;
  const cached = grids.get(piece);
  const sameNoise = cached && cached.w === w && cached.d === d && cached.detail === detail &&
    cached.seed === seed && cached.amplitude === amplitude && cached.frequency === frequency &&
    cached.octaves === octaves && cached.roughness === roughness && cached.ridge === ridge && cached.edgeFade === edgeFade && cached.reliefArea === reliefArea;
  if (sameNoise && cached.heights === heights) return cached;

  const stride = detail + 1;
  const procedural = sameNoise ? cached.procedural : new Float64Array(stride ** 2);
  if (!sameNoise && amplitude) {
    for (let row = 0; row <= detail; row++) {
      for (let col = 0; col <= detail; col++) {
        const localX=(col/detail-.5)*w,localZ=(row/detail-.5)*d;
        let mask=1;
        if(reliefArea){
          const distance=Math.hypot(localX-reliefArea.x,localZ-reliefArea.z);
          if(distance>=reliefArea.radius)continue;
          if(reliefArea.blend)mask=smooth(Math.min(1,(reliefArea.radius-distance)/(reliefArea.radius*reliefArea.blend)));
        }
        const x=localX*frequency,z=localZ*frequency;
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
        procedural[row*stride+col]=mask*(classic
          ? amplitude*(.62*noise(x,z,seed)+.26*noise(x*2.03,z*2.03,seed+13)
              +.12*noise(x*4.13,z*4.13,seed+37))
          : amplitude*height/total*fade);
      }
    }
  }
  const surface = heights ? procedural.map((height, i) => height + heights[i]) : procedural;
  const grid = { w, d, detail, seed, amplitude, frequency, octaves, roughness, ridge, edgeFade, reliefArea, heights, procedural, surface };
  grids.set(piece, grid);
  return grid;
}

function localHeight(grid, x, z) {
  const { detail, w, d, surface } = grid;
  return sampleGrid(surface, detail, (x / w + .5) * detail, (z / d + .5) * detail);
}

export function terrainQuarterYaw(yaw=0){
  return (Math.round(yaw/90)%4+4)%4*90;
}

function terrainAxes(piece){
  const yaw=terrainQuarterYaw(piece.yaw);
  return {cos:[1,0,-1,0][yaw/90],sin:[0,1,0,-1][yaw/90]};
}

function terrainLocalXZ(piece,x,z){
  const {cos,sin}=terrainAxes(piece),dx=x-piece.x,dz=z-piece.z;
  return [cos*dx-sin*dz,sin*dx+cos*dz];
}

function terrainWorldSize(piece){
  return terrainQuarterYaw(piece.yaw)%180?{w:piece.d,d:piece.w}:{w:piece.w,d:piece.d};
}

export function terrainHeight(piece, x, z) {
  return piece.y+localHeight(gridFor(piece),...terrainLocalXZ(piece,x,z));
}

const seamTolerance=.25;
export function terrainSeam(piece,neighbor){
  if(!piece?.terrain||!neighbor?.terrain||piece===neighbor)return null;
  let best=null;
  const size=terrainWorldSize(piece),neighborSize=terrainWorldSize(neighbor);
  for(const [axis,along,length,span] of [['x','z','w','d'],['z','x','d','w']]){
    const lo=Math.max(piece[along]-size[span]/2,neighbor[along]-neighborSize[span]/2);
    const hi=Math.min(piece[along]+size[span]/2,neighbor[along]+neighborSize[span]/2);
    if(hi-lo<.05)continue;
    for(const side of [-1,1]){
      const edge=neighbor[axis]-side*neighborSize[length]/2;
      const delta=edge-(piece[axis]+side*size[length]/2);
      if(Math.abs(delta)<=seamTolerance&&(!best||Math.abs(delta)<Math.abs(best.delta)))
        best={axis,along,length,span,lo,hi,side,edge,delta};
    }
  }
  return best;
}

export function stitchTerrain(piece,neighbor,width=1.5){
  const seam=terrainSeam(piece,neighbor);
  if(!seam)return null;
  const {axis,along,length,span,lo,hi,side,edge,delta}=seam;
  let terrain=piece.terrain;
  if(Math.abs(terrainWorldSize(piece)[span]-terrainWorldSize(neighbor)[span])<1e-6&&Math.abs(piece[along]-neighbor[along])<1e-6){
    const source=neighbor.terrain.detail;
    const aligned=Math.ceil(terrain.detail/source)*source;
    if(aligned<=maxTerrainDetail)terrain=resizeTerrain(terrain,aligned);
  }
  const placed={...piece,[axis]:piece[axis]+delta,terrain};
  const {detail,procedural,heights,surface}=gridFor(placed);
  const offsets=heights?.slice()??Array((detail+1)**2).fill(0);
  const band=Math.max(width,terrainWorldSize(placed)[length]/detail);
  const {cos,sin}=terrainAxes(placed);
  let clipped=false;
  for(let row=0;row<=detail;row++)for(let col=0;col<=detail;col++){
    const dx=(col/detail-.5)*placed.w,dz=(row/detail-.5)*placed.d;
    const x=placed.x+cos*dx+sin*dz,z=placed.z-sin*dx+cos*dz;
    const alongValue=along==='x'?x:z;
    if(alongValue<lo-1e-6||alongValue>hi+1e-6)continue;
    const distance=Math.max(0,side*(edge-(axis==='x'?x:z)));
    if(distance>band)continue;
    const i=row*(detail+1)+col;
    const reference=axis==='x'?terrainHeight(neighbor,edge,z):terrainHeight(neighbor,x,edge);
    const target=lerp(surface[i],reference-placed.y,smooth(1-distance/band))-procedural[i];
    offsets[i]=clamp(target,-maxSculptHeight,maxSculptHeight);
    clipped||=offsets[i]!==target;
  }
  return {piece:{...placed,terrain:{...terrain,heights:offsets}},clipped};
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
  const [localX,localZ]=terrainLocalXZ(piece,x,z);
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
  const IndexArray=stride**2>65536?Uint32Array:Uint16Array;
  const index=new IndexArray(detail**2*6);
  const repetitionsPerMetre=Math.sqrt(terrain.textureDensity??defaultTerrainTextureDensity);
  let indexOffset = 0;
  for (let row = 0; row <= detail; row++) {
    for (let col = 0; col <= detail; col++) {
      const vertex = row * stride + col;
      positions[3 * vertex] = (col / detail - .5) * w;
      positions[3 * vertex + 2] = (row / detail - .5) * d;
      uvs[2 * vertex] = col/detail*w*repetitionsPerMetre;
      uvs[2 * vertex + 1] = (1-row/detail)*d*repetitionsPerMetre;
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
function terrainLocalNormal(grid,localX,localZ,out){
  const {detail,w,d,surface}=grid;
  const u=clamp((localX/w+.5)*detail,0,detail);
  const v=clamp((localZ/d+.5)*detail,0,detail);
  const col=Math.min(detail-1,Math.floor(u)),row=Math.min(detail-1,Math.floor(v));
  const stride=detail+1, i=row*stride+col;
  const lower=u-col+v-row<=1;
  const dx=lower?surface[i+1]-surface[i]:surface[i+stride+1]-surface[i+stride];
  const dz=lower?surface[i+stride]-surface[i]:surface[i+stride+1]-surface[i+1];
  return out.set(-dx*detail/w,1,-dz*detail/d).normalize();
}

function terrainNormal(piece,x,z,out){
  const [localX,localZ]=terrainLocalXZ(piece,x,z),{cos,sin}=terrainAxes(piece);
  terrainLocalNormal(gridFor(piece),localX,localZ,out);
  const nx=out.x,nz=out.z;
  return out.set(cos*nx+sin*nz,out.y,-sin*nx+cos*nz);
}

export function terrainCollider(piece, mesh) {
  const {w,d}=terrainWorldSize(piece);
  return {
    mesh, heightfield: true,
    xMin:piece.x-w/2,xMax:piece.x+w/2,
    zMin:piece.z-d/2,zMax:piece.z+d/2,
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

export function terrainRuleDimensions(dimensions,fit,size){
  if(fit==='stretch')return new T.Vector3().setScalar(size);
  const factor=fit==='fit'?Math.min(1,size/Math.max(dimensions.x,dimensions.y,dimensions.z,1e-5)):size;
  return dimensions.clone().multiplyScalar(factor);
}

// Density is based on the horizontal footprint. Altitude and slope are measured on the actual mesh.
function scatterPlan(piece,rule,grid,budget){
  const filter=rule.scatter;
  if(!filter)return {requested:Math.round(piece.w*piece.d*rule.density),positions:null,area:piece.w*piece.d};
  const x0=(filter.minX/100-.5)*piece.w,x1=(filter.maxX/100-.5)*piece.w;
  const z0=(filter.minZ/100-.5)*piece.d,z1=(filter.maxZ/100-.5)*piece.d;
  const area=(x1-x0)*(z1-z0),positions=[],normal=new T.Vector3();
  if(!area||!rule.density)return {requested:0,positions,area};
  const slopeCos=Math.cos(T.MathUtils.degToRad(filter.maxSlope));
  const slopeActive=filter.maxSlope<90,altitudeActive=filter.minHeight>-300||filter.maxHeight<300;
  const accept=(x,z)=>{
    if(altitudeActive){
      const h=piece.y+localHeight(grid,x,z);
      if(h<filter.minHeight||h>filter.maxHeight)return false;
    }
    return !slopeActive||terrainLocalNormal(grid,x,z,normal).y>=slopeCos-1e-7;
  };
  let eligible=1;
  if(slopeActive||altitudeActive){
    let passed=0;
    const resolution=32;
    for(let row=0;row<resolution;row++)for(let col=0;col<resolution;col++)
      if(accept(lerp(x0,x1,(col+.5)/resolution),lerp(z0,z1,(row+.5)/resolution)))passed++;
    eligible=passed/resolution**2;
  }
  const requested=Math.round(area*eligible*rule.density),target=Math.min(requested,budget);
  const attempts=slopeActive||altitudeActive?Math.min(budget*4,Math.ceil(target/Math.max(eligible,.001))*3):target;
  for(let i=0;i<attempts&&positions.length<target;i++){
    const x=lerp(x0,x1,hash(i,27,rule.seed)),z=lerp(z0,z1,hash(i,27,rule.seed+1));
    if(accept(x,z))positions.push([x,z]);
  }
  return {requested,positions,area:area*eligible};
}

export function terrainVegetation(piece) {
  const group=new T.Group(),grid=gridFor(piece);
  group.userData.distribution=[];
  let remaining=maxTerrainRuleInstances,remainingColliders=maxTerrainColliders;
  for(const [index,rule] of (piece.terrain.rules??[]).entries()){
    const {requested,positions,area}=scatterPlan(piece,rule,grid,remaining);
    const count=positions?positions.length:Math.min(requested,remaining);
    const collisions=rule.collidable?Math.min(count,remainingColliders):0;
    remaining-=count;
    remainingColliders-=collisions;
    group.userData.distribution[index]={requested,count,area,collisions};
    if(!count)continue;
    const grass=rule.kind==='grass';
    const dimensions=rule.model?terrainRuleDimensions(modelDimensions(rule.model),rule.fit,rule.size):null;
    const geometry=rule.model?createModelUnitGeometry(rule.model,dimensions):grass?grassGeometry():shrubGeometry();
    if(dimensions)geometry.scale(...dimensions);
    else geometry.scale(rule.size,rule.size,rule.size);
    geometry.computeBoundingBox();
    geometry.translate(0,-geometry.boundingBox.min.y,0);
    geometry.computeBoundingBox();
    const material=rule.model?createModelMaterial(rule.model):
      new T.MeshLambertMaterial({color:'#ffffff',side:grass?T.DoubleSide:T.FrontSide,flatShading:true});
    if(grass&&piece.terrain.grassTexture){
      const map=new T.TextureLoader().load(piece.terrain.grassTexture);
      map.colorSpace=T.SRGBColorSpace;material.map=map;material.userData.ownTexture=true;
    }
    const plants=new T.InstancedMesh(geometry,material,count);
    plants.name=rule.kind;
    plants.userData={ruleIndex:index,seed:rule.seed,variation:rule.variation,collidable:rule.collidable,collisionCount:collisions,requestedCount:requested,positions,scatter:rule.scatter};
    plants.instanceMatrix.setUsage(T.DynamicDrawUsage);
    plants.receiveShadow=true;
    const colors=rule.colors.map(value=>new T.Color(value)),tint=new T.Color();
    for(let i=0;i<count;i++){
      const position=hash(i,41,rule.seed)*(colors.length-1),index=Math.floor(position);
      plants.setColorAt(i,tint.copy(colors[index]).lerp(colors[index+1],position-index));
    }
    group.add(plants);
  }
  updateTerrainVegetation(group,piece);
  return group;
}

export function updateTerrainVegetation(group,piece){
  const grid=gridFor(piece),plant=new T.Object3D();
  for(const plants of group.children){
    const {seed,variation,positions,scatter}=plants.userData;
    for(let i=0;i<plants.count;i++){
      const x=positions?.[i][0]??(hash(i,27,seed)-.5)*.96*piece.w;
      const z=positions?.[i][1]??(hash(i,27,seed+1)-.5)*.96*piece.d;
      plant.position.set(x,localHeight(grid,x,z),z);
      plant.rotation.y=scatter?T.MathUtils.degToRad(scatter.yaw+hash(i,27,seed+2)*scatter.yawVariation):hash(i,27,seed+2)*Math.PI*2;
      plant.scale.setScalar(lerp(Math.max(.05,1-variation),1+variation,hash(i,27,seed+3)));
      plant.updateMatrix();
      plants.setMatrixAt(i,plant.matrix);
    }
    plants.instanceMatrix.needsUpdate=true;
    plants.computeBoundingSphere();
  }
}

export function terrainInstanceBoxes(piece,group){
  const result=[],matrix=new T.Matrix4(),scale=new T.Vector3();
  const yaw=new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),terrainQuarterYaw(piece.yaw)*Math.PI/180);
  const origin=new T.Vector3(piece.x,piece.y,piece.z),minHalf=new T.Vector3(.005,.005,.005);
  for(const mesh of group?.children??[]){
    if(!mesh.userData.collidable)continue;
    const bounds=mesh.geometry.boundingBox;
    const center=bounds.getCenter(new T.Vector3());
    const half=bounds.getSize(new T.Vector3()).multiplyScalar(.5);
    for(let i=0;i<mesh.userData.collisionCount;i++){
      mesh.getMatrixAt(i,matrix);
      const position=new T.Vector3(),quaternion=new T.Quaternion();
      matrix.decompose(position,quaternion,scale);
      position.add(center.clone().multiply(scale).applyQuaternion(quaternion));
      position.applyQuaternion(yaw).add(origin);
      quaternion.premultiply(yaw);
      result.push({position,quaternion,half:half.clone().multiply(scale).max(minHalf)});
    }
  }
  return result;
}

export function disposeVegetation(group) {
  if (!group) return;
  for (const plants of group.children) {
    plants.geometry.dispose();
    if(plants.material?.userData?.ownTexture)plants.material.map?.dispose();
    disposeModelMaterial(plants.material);
    plants.dispose();
  }
  group.clear();
  group.removeFromParent();
}



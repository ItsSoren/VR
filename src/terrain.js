import * as THREE from 'three';

const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => {
  const t = clamp((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);

function seedNumber(seed) {
  let value = 2166136261;
  for (const c of String(seed)) value = Math.imul(value ^ c.charCodeAt(0), 16777619);
  return value >>> 0;
}

/** All systems sample this same deterministic, continuous height field. Units are metres. */
function createBaseWorld(seed = 'vallon-2026') {
  const salt = seedNumber(seed);
  function hash(x, z) {
    let h = Math.imul(x, 374761393) ^ Math.imul(z, 668265263) ^ salt;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
  }
  function noise(x, z) {
    const ix = Math.floor(x),
      iz = Math.floor(z),
      fx = fade(x - ix),
      fz = fade(z - iz);
    return lerp(
      lerp(hash(ix, iz), hash(ix + 1, iz), fx),
      lerp(hash(ix, iz + 1), hash(ix + 1, iz + 1), fx),
      fz
    );
  }
  function fbm(x, z, octaves = 3) {
    let total = 0,
      amplitude = 0.57142857,
      scale = 1;
    for (let i = 0; i < octaves; i++) {
      total += noise(x * scale + i * 17.31, z * scale - i * 9.2) * amplitude;
      amplitude *= 0.5;
      scale *= 2;
    }
    return total;
  }
  const gaussian = (x, z, cx, cz, sx, sz) =>
    Math.exp(-((x - cx) ** 2 / (sx * sx) + (z - cz) ** 2 / (sz * sz)));
  function riverX(z) {
    return 15 + Math.sin(z / 420) * 110 + Math.sin(z / 170) * 45;
  }
  function pathX(z) {
    return riverX(z) - 65 + Math.sin(z / 180) * 18;
  }
  function baseHeight(x, z) {
    const warp = (noise(x / 520 + 40, z / 520 - 20) - 0.5) * 90;
    const west = gaussian(x + warp, z, -680, -830, 410, 620);
    const east = gaussian(x + warp, z, 820, -690, 520, 530);
    const north = gaussian(x, z, -90, -1600, 720, 500);
    const southernHills = gaussian(x, z, -640, 650, 620, 550);
    const massif = 182 * west + 215 * east + 178 * north + 48 * southernHills;
    const mountainWeight = smooth(18, 130, massif);
    // Ridges occupy broad watersheds; their amplitude never exceeds the massif scale.
    const ridge = 1 - Math.abs(fbm(x / 260 + 31, z / 260 - 12) * 2 - 1);
    const erodedRidges = (ridge * ridge - 0.52) * 27 * mountainWeight;
    const foothills = (fbm(x / 330 + 2, z / 330 + 14) - 0.48) * 30;
    const distanceToValley = Math.abs(x - riverX(z));
    const valleyShoulder = smooth(38, 380, distanceToValley);
    const valleyFloor = 6.5 + smooth(150, 1700, -z) * 25;
    let h = valleyFloor + (massif + erodedRidges) * (0.11 + 0.89 * valleyShoulder);
    h += foothills * (0.23 + 0.77 * smooth(10, 150, distanceToValley));
    h += gaussian(x, z, 390, 330, 460, 450) * 25;
    // An old plateau: a broad, blended shelf rather than an abrupt height clamp.
    const plateau = gaussian(x, z, 450, 220, 255, 280) * 0.62;
    h = lerp(h, 34 + foothills * 0.26, plateau);
    const drainage = Math.exp(-((distanceToValley / 19) ** 2));
    h -= drainage * 2.4;
    h += (noise(x / 34 + 100, z / 34 + 40) - 0.5) * 0.75;
    h += (noise(x / 11 - 60, z / 11 + 81) - 0.5) * 0.2;
    h = 260 * Math.tanh(h / 260);
    // The new shoreline is west of the original starting valley. Existing edits
    // and constructions around that valley keep the same base altitude.
    const shore = Math.hypot((x + 890) / 660, (z + 460) / 920);
    const lakeWeight = (1 - smooth(0.64, 1.18, shore)) * (1 - smooth(-260, -150, x));
    return lerp(h, 2.4 + noise(x / 140, z / 140) * 1.2, lakeWeight);
  }
  const lake = { x: -890, z: -460, rx: 790, rz: 1100, level: 6 };
  const ponds = [
    [-350, 480, 95, 72],
    [840, 460, 130, 90],
    [-140, -680, 110, 75],
  ].map(([x, z, rx, rz]) => ({ x, z, rx, rz, level: baseHeight(x, z) - 0.5 }));
  const lakes = [lake, ...ponds];
  function height(x, z) {
    let h = baseHeight(x, z);
    for (const p of ponds) {
      const r = Math.hypot((x - p.x) / p.rx, (z - p.z) / p.rz);
      if (r < 1.55)
        h = lerp(h, p.level - 3.4 + Math.min(1.5, r * r) * 5, 1 - smooth(1.05, 1.55, r));
    }
    return h;
  }
  function surface(x, z, h, slope) {
    const riverDistance = Math.abs(x - riverX(z));
    const shore = Math.max(
      ...lakes.map((p) => Math.exp(-Math.hypot((x - p.x) / p.rx, (z - p.z) / p.rz) * 1.3))
    );
    const moisture = clamp(
      0.48 +
        (fbm(x / 360 + 63, z / 360 - 82) - 0.42) * 0.7 +
        Math.exp(-riverDistance / 110) * 0.19 -
        h * 0.0008 +
        shore * 0.14
    );
    const forest =
      noise(x / 175 + 111, z / 175 - 50) * 0.82 + noise(x / 58 + 27, z / 58 - 18) * 0.18;
    const canopy =
      smooth(0.43, 0.59, forest) * (1 - smooth(115, 155, h)) * (1 - smooth(0.48, 0.76, slope));
    // The track follows the valley but wanders a little, with a soft, irregular edge.
    const pathCenter = pathX(z) + (noise(z / 95 + 68, 21) - 0.5) * 9;
    const pathWidth = 2.2 + noise(x / 13 + 72, z / 18 - 91) * 2.2;
    const path =
      (1 - smooth(pathWidth, pathWidth + 2.6, Math.abs(x - pathCenter))) *
      (1 - smooth(750, 1250, Math.abs(z)));
    const land = noise(x / 440 - 44, z / 440 + 61),
      coverType =
        h > 143 || slope > 0.69
          ? 'rock'
          : h > 99
            ? 'alpine'
            : canopy > 0.35 && riverDistance > 18
              ? 'forest'
              : 'meadow';
    const biome =
      coverType === 'rock' || coverType === 'alpine'
        ? coverType
        : lakes.some(
              (p) => Math.hypot((x - p.x) / p.rx, (z - p.z) / p.rz) < 1.22 && h < p.level + 2.4
            )
          ? 'shore'
          : coverType === 'forest'
            ? land > 0.64
              ? 'birch'
              : 'forest'
            : moisture > 0.64 && slope < 0.15
              ? 'wetland'
              : land > 0.67
                ? 'heath'
                : moisture < 0.44
                  ? 'steppe'
                  : 'meadow';
    const soil =
      smooth(0.54, 0.78, noise(x / 38 + 37, z / 38 - 64)) *
      (0.25 + (1 - moisture) * 0.65) *
      (1 - smooth(0.2, 0.55, slope));
    const ridgeExposure = noise(x / 95 + 8, z / 95 - 19);
    const exposure = smooth(58, 145, h) * smooth(0.43, 0.65, ridgeExposure);
    const bedrock = clamp(
      Math.max(
        smooth(0.3, 0.82, slope) * 0.78,
        smooth(0.58, 0.82, ridgeExposure) * smooth(88, 158, h) * 0.82,
        smooth(148, 188, h) * 0.72
      )
    );
    let grass = (1 - smooth(0.25, 0.75, slope)) * (1 - smooth(104, 155, h));
    // Exposed ridges show through as broad bedrock shelves, not scattered stones.
    grass *= 1 - bedrock * 0.82;
    grass *= (1 - path * 0.96) * (0.75 + noise(x / 45, z / 45) * 0.25);
    grass *= 1 - canopy * 0.68;
    grass *= 1 - soil * 0.9;
    if (riverDistance < 9) grass *= 0.4;
    if (lakes.some((p) => Math.hypot((x - p.x) / p.rx, (z - p.z) / p.rz) < 1 && h < p.level + 0.1))
      grass = 0;
    const flora = noise(x / 75 + 300, z / 75 + 50);
    return {
      height: h,
      slope,
      moisture,
      biome,
      coverType,
      canopy,
      flora,
      soil,
      exposure,
      bedrock,
      grass: clamp(grass),
      path,
      riverDistance,
    };
  }
  function sample(x, z) {
    const h = height(x, z),
      e = 1.5;
    const dx = (height(x + e, z) - height(x - e, z)) / (2 * e);
    const dz = (height(x, z + e) - height(x, z - e)) / (2 * e);
    return surface(x, z, h, Math.hypot(dx, dz));
  }
  const waterLevel = (x, z) => {
    for (const p of lakes)
      if (Math.hypot((x - p.x) / p.rx, (z - p.z) / p.rz) < 1 && height(x, z) < p.level)
        return p.level;
    return null;
  };
  return {
    seed,
    height,
    sample,
    surface,
    noise,
    riverX,
    pathX,
    waterLevel,
    spawn: { x: pathX(100), z: 100 },
    panorama: { x: 600, z: -320, yaw: 1.35, pitch: -0.15 },
    lake,
    lakes,
    bounds: 2048,
  };
}

const lush = new THREE.Color('#638447'),
  dry = new THREE.Color('#a69b60'),
  cool = new THREE.Color('#537969'),
  heath = new THREE.Color('#85805d');
/** One continuous colour field shared by near blades and all terrain LODs. */
export function grassTint(moisture = 0.55, variation = 0.5, flora = 0.5, out = new THREE.Color()) {
  out.copy(lush).lerp(dry, clamp((0.61 - moisture) * 2.3 + variation * 0.16));
  out.lerp(cool, smooth(0.58, 0.8, moisture) * 0.48);
  out.lerp(heath, smooth(0.64, 0.9, flora) * 0.4);
  return out;
}

/** Continuous shared palette, from moist valleys to cool upland meadows. */
export function biomeTint(s, variation = 0.5, out = new THREE.Color()) {
  grassTint(s.moisture ?? 0.55, variation, s.flora ?? 0.5, out);
  out.lerp(new THREE.Color('#768c73'), smooth(60, 145, s.height ?? s.y ?? 0) * 0.45);
  out.lerp(new THREE.Color('#778058'), smooth(0.56, 0.85, s.flora ?? 0.5) * 0.18);
  out.multiplyScalar(1 - (s.canopy || 0) * 0.2);
  return out;
}
export function soilTint(s, out = new THREE.Color()) {
  out.set('#ac8861').lerp(new THREE.Color('#705746'), smooth(0.4, 0.74, s.moisture ?? 0.55));
  out.lerp(new THREE.Color('#8f9388'), smooth(65, 150, s.height ?? 0) * 0.55);
  return out;
}

const TERRAIN_GRID = 32;
const ROOT_SIZE = 4096;
const MIN_SIZE = 32;
const tempColor = new THREE.Color();
const alpineColor = new THREE.Color('#8b907c');
const rockColor = new THREE.Color('#817f79');
const bedrockWarm = new THREE.Color('#938d7d');
const bedrockCool = new THREE.Color('#70777a');
const bedrockColor = new THREE.Color();
const pathColor = new THREE.Color('#98836b');
const snowColor = new THREE.Color('#d7dace');

function terrainColor(world, x, z, h, slope, out) {
  const s = world.surface(x, z, h, slope);
  biomeTint(s, 0.5, out);
  out.lerp(alpineColor, smooth(86, 145, h) * 0.48);
  // Weathered, coherent bedrock follows ridge exposure and steep faces. The
  // broad noise variation suggests strata without speckling the terrain.
  const rockiness = clamp(Math.max(s.bedrock || 0, smooth(132, 180, h) * 0.62), 0, 0.9);
  const strata = world.noise(x / 210 + 32, z / 210 - 16);
  bedrockColor.copy(bedrockCool).lerp(bedrockWarm, smooth(0.36, 0.68, strata));
  out.lerp(bedrockColor, rockiness * 0.92);
  out.lerp(snowColor, smooth(190, 235, h) * (1 - smooth(0.4, 0.8, slope)));
  out.lerp(pathColor, s.path * 0.87);
  out.lerp(soilTint(s), s.soil * 0.82);
  if (s.biome === 'shore') out.lerp(new THREE.Color('#b2a17b'), 0.6);
  const depth = -(world.displacement?.(x, z) || 0);
  out.lerp(depth > 1.7 ? rockColor : soilTint(s), (s.disturbance || 0) * 0.86);
  if (depth > 5) out.multiplyScalar(0.65);
  out.multiplyScalar(0.94 + world.noise(x / 24 + 300, z / 24) * 0.12);
}

function distanceToNode(node, x, z) {
  return Math.hypot(
    Math.max(node.x - x, 0, x - node.x - node.size),
    Math.max(node.z - z, 0, z - node.z - node.size)
  );
}

/** Progressive quadtree terrain with parent-grid geomorphing and downward seam skirts. */
export class Terrain {
  constructor(scene, world, { immersive = false, hyper = false } = {}) {
    this.immersive = immersive;
    this.hyper = hyper;
    this.scene = scene;
    this.world = world;
    this.rootGroup = new THREE.Group();
    this.rootGroup.name = 'Terrain · progressive geomorph LOD';
    scene.add(this.rootGroup);
    this.frame = 0;
    this.maxBuildsPerFrame = immersive ? 1 : 3;
    this.buildBudgetMs = immersive ? 1.2 : 5;
    this.stats = { chunks: 1, triangles: 0, queued: 0, buildMs: 0, lodLevels: {} };
    this.root = this.makeNode(-ROOT_SIZE / 2, -ROOT_SIZE / 2, ROOT_SIZE);
    this.disposed = false;
  }

  makeNode(x, z, size) {
    const node = { x, z, size, children: null, mesh: null, split: false, lastSeen: this.frame };
    node.mesh = this.makeMesh(node);
    this.rootGroup.add(node.mesh);
    return node;
  }

  makeMesh(node) {
    const GRID = this.hyper ? 8 : this.immersive ? 16 : TERRAIN_GRID;
    const { x, z, size } = node,
      step = size / GRID,
      side = GRID + 1;
    const positions = [],
      colors = [],
      coarseHeights = [],
      coarseColors = [],
      normals = [],
      coarseNormals = [],
      indices = [];
    const heights = new Float64Array(side * side);
    for (let j = 0; j <= GRID; j++)
      for (let i = 0; i <= GRID; i++)
        heights[j * side + i] = this.world.height(x + i * step, z + j * step);
    for (let j = 0; j <= GRID; j++)
      for (let i = 0; i <= GRID; i++) {
        const index = j * side + i,
          h = heights[index];
        const dx =
          (heights[j * side + Math.min(GRID, i + 1)] - heights[j * side + Math.max(0, i - 1)]) /
          (step * (i === 0 || i === GRID ? 1 : 2));
        const dz =
          (heights[Math.min(GRID, j + 1) * side + i] - heights[Math.max(0, j - 1) * side + i]) /
          (step * (j === 0 || j === GRID ? 1 : 2));
        positions.push(i * step, h, j * step);
        terrainColor(this.world, x + i * step, z + j * step, h, Math.hypot(dx, dz), tempColor);
        colors.push(tempColor.r, tempColor.g, tempColor.b);
      }
    // Barycentric interpolation reproduces the parent's triangles exactly at morph=1.
    for (let j = 0; j <= GRID; j++)
      for (let i = 0; i <= GRID; i++) {
        const i0 = Math.min(GRID - 2, Math.floor(i / 2) * 2),
          j0 = Math.min(GRID - 2, Math.floor(j / 2) * 2);
        const u = (i - i0) / 2,
          v = (j - j0) / 2;
        const a = j0 * side + i0,
          b = a + 2,
          c = a + side * 2,
          d = c + 2;
        const ids = u + v <= 1 ? [a, b, c] : [d, c, b];
        const weights = u + v <= 1 ? [1 - u - v, u, v] : [u + v - 1, 1 - u, 1 - v];
        coarseHeights.push(ids.reduce((n, k, t) => n + heights[k] * weights[t], 0));
        for (let channel = 0; channel < 3; channel++)
          coarseColors.push(ids.reduce((n, k, t) => n + colors[k * 3 + channel] * weights[t], 0));
      }
    // Sample both surfaces in world space so adjacent chunks get identical
    // edge normals. The coarse field uses the same globally aligned triangles
    // as the parent grid, independent of which child chunk samples it.
    const coarseStep = step * 2,
      origin = -ROOT_SIZE / 2,
      coarseSamples = new Map();
    const coarseSample = (ix, iz) => {
      const key = `${ix},${iz}`;
      if (!coarseSamples.has(key))
        coarseSamples.set(
          key,
          this.world.height(origin + ix * coarseStep, origin + iz * coarseStep)
        );
      return coarseSamples.get(key);
    };
    const coarseHeightAt = (wx, wz) => {
      const gx = (wx - origin) / coarseStep,
        gz = (wz - origin) / coarseStep;
      const ix = Math.floor(gx),
        iz = Math.floor(gz),
        u = gx - ix,
        v = gz - iz;
      const a = coarseSample(ix, iz),
        b = coarseSample(ix + 1, iz);
      const c = coarseSample(ix, iz + 1),
        d = coarseSample(ix + 1, iz + 1);
      return u + v <= 1
        ? a * (1 - u - v) + b * u + c * v
        : d * (u + v - 1) + c * (1 - u) + b * (1 - v);
    };
    const pushNormal = (heightAt, wx, wz, delta, output) => {
      const dx = (heightAt(wx + delta, wz) - heightAt(wx - delta, wz)) / (2 * delta);
      const dz = (heightAt(wx, wz + delta) - heightAt(wx, wz - delta)) / (2 * delta);
      const length = Math.hypot(dx, 1, dz);
      output.push(-dx / length, 1 / length, -dz / length);
    };
    for (let j = 0; j <= GRID; j++)
      for (let i = 0; i <= GRID; i++) {
        const wx = x + i * step,
          wz = z + j * step;
        pushNormal(this.world.height, wx, wz, 1.5, normals);
        pushNormal(coarseHeightAt, wx, wz, coarseStep, coarseNormals);
      }
    for (let j = 0; j < GRID; j++)
      for (let i = 0; i < GRID; i++) {
        const a = j * side + i,
          b = a + 1,
          c = a + side,
          d = c + 1;
        indices.push(a, c, b, b, c, d);
      }
    // Skirts also hide the small mismatch between independently morphing neighbours.
    const edges = [
      Array.from({ length: side }, (_, i) => i),
      Array.from({ length: side }, (_, j) => j * side + GRID),
      Array.from({ length: side }, (_, i) => GRID * side + GRID - i),
      Array.from({ length: side }, (_, j) => (GRID - j) * side),
    ];
    const skirtDepth = Math.max(1.4, step * 1.15);
    for (const edge of edges) {
      const start = positions.length / 3;
      for (const index of edge) {
        positions.push(
          positions[index * 3],
          positions[index * 3 + 1] - skirtDepth,
          positions[index * 3 + 2]
        );
        colors.push(colors[index * 3], colors[index * 3 + 1], colors[index * 3 + 2]);
        normals.push(normals[index * 3], normals[index * 3 + 1], normals[index * 3 + 2]);
        coarseHeights.push(coarseHeights[index] - skirtDepth);
        coarseColors.push(
          coarseColors[index * 3],
          coarseColors[index * 3 + 1],
          coarseColors[index * 3 + 2]
        );
        coarseNormals.push(
          coarseNormals[index * 3],
          coarseNormals[index * 3 + 1],
          coarseNormals[index * 3 + 2]
        );
      }
      for (let i = 0; i < GRID; i++)
        indices.push(edge[i], start + i, edge[i + 1], edge[i + 1], start + i, start + i + 1);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('coarseHeight', new THREE.Float32BufferAttribute(coarseHeights, 1));
    geometry.setAttribute('coarseColor', new THREE.Float32BufferAttribute(coarseColors, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setAttribute('coarseNormal', new THREE.Float32BufferAttribute(coarseNormals, 3));
    geometry.setIndex(indices);
    geometry.computeBoundingSphere();
    const morph = { value: 0 };
    const material = this.immersive
      ? new THREE.MeshLambertMaterial({ vertexColors: true })
      : new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0 });
    material.onBeforeCompile = (shader) => {
      shader.uniforms.terrainMorph = morph;
      shader.vertexShader =
        'varying vec3 vTerrainWorld;\nvarying vec3 vTerrainNormal;\nuniform float terrainMorph;\nattribute float coarseHeight;\nattribute vec3 coarseColor;\nattribute vec3 coarseNormal;\n' +
        shader.vertexShader;
      shader.vertexShader = shader.vertexShader.replace(
        '#include <beginnormal_vertex>',
        '#include <beginnormal_vertex>\nobjectNormal = normalize(mix(normal, coarseNormal, terrainMorph));'
      );
      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\ntransformed.y = mix(position.y, coarseHeight, terrainMorph);\nvTerrainWorld=(modelMatrix*vec4(transformed,1.)).xyz;vTerrainNormal=normalize(mat3(modelMatrix)*objectNormal);'
      );
      shader.vertexShader = shader.vertexShader.replace(
        '#include <color_vertex>',
        '#include <color_vertex>\nvColor = mix(color, coarseColor, terrainMorph);'
      );
      shader.fragmentShader =
        `varying vec3 vTerrainWorld;
        varying vec3 vTerrainNormal;
        float soilHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float soilNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(soilHash(i),soilHash(i+vec2(1,0)),f.x),mix(soilHash(i+vec2(0,1)),soilHash(i+1.),f.x),f.y);}
      ` + (shader.fragmentShader || '');
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <color_fragment>',
        this.immersive ? `#include <color_fragment>
          vec3 n=normalize(cross(dFdx(vTerrainWorld),dFdy(vTerrainWorld)));
          float facet=abs(dot(n,normalize(vec3(.46,.83,.32))));
          float tintPatch=soilHash(floor(vTerrainWorld.xz*.34));
          float detail=1.-smoothstep(.065,.26,length(fwidth(vTerrainWorld.xz)));
          float grain=soilHash(floor(vTerrainWorld.xz*12.));
          diffuseColor.rgb*=.88+facet*.15+tintPatch*.095+(grain-.5)*.075*detail;
        ` :
        `#include <color_fragment>
        float d=distance(cameraPosition,vTerrainWorld);
        float footprint=max(length(dFdx(vTerrainWorld.xz)),length(dFdy(vTerrainWorld.xz)));
        float detail=1.-smoothstep(.025,.18,footprint);
        float grain=soilNoise(vTerrainWorld.xz*30.);
        float strata=sin(vTerrainWorld.y*2.1+soilNoise(vTerrainWorld.xz*.07)*3.);
        float exposed=smoothstep(.22,.65,1.-abs(vTerrainNormal.y));
        diffuseColor.rgb*=1.+strata*exposed*.075;
        float cover=soilNoise(vTerrainWorld.xz*.12)*.55+soilNoise(vTerrainWorld.xz*.7)*.25;
        // Filter fine grains as the pixel footprint grows; keep macro patches across LODs.
        float grassWeave=soilNoise(vTerrainWorld.xz*vec2(7.,1.8));
        diffuseColor.rgb*=.91+cover*.2+mix(.04,(grain-.5)*.17,detail);
        diffuseColor.rgb*=1.+(grassWeave-.5)*.13*(1.-smoothstep(.18,1.8,footprint));
        // Distant grass represents the light-catching tips lost when cards fade away.
        diffuseColor.rgb*=1.+smoothstep(35.,110.,d)*.12*(1.-smoothstep(95.,150.,vTerrainWorld.y));
      `
      );
    };
    material.customProgramCacheKey = () => this.immersive ? 'vallon-terrain-vr-facets-v1' : 'vallon-terrain-natural-v4';
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, 0, z);
    mesh.receiveShadow = true;
    mesh.castShadow = false;
    mesh.userData.morph = morph;
    mesh.userData.terrainStep = step;
    mesh.name = `Terrain ${step}m`;
    return mesh;
  }

  update(camera, dt = 0) {
    if (this.disposed) return;
    this.frame++;
    const start = performance.now(),
      px = camera.position.x,
      pz = camera.position.z;
    let builds = 0,
      chunks = 0,
      triangles = 0,
      queued = 0;
    const lodLevels = {};
    const refresh = (node) => {
      const old = node.mesh,
        mesh = this.makeMesh(node);
      mesh.visible = old.visible;
      mesh.userData.morph.value = old.userData.morph.value;
      this.rootGroup.remove(old);
      old.geometry.dispose();
      old.material.dispose();
      node.mesh = mesh;
      this.rootGroup.add(mesh);
      node.needsRefresh = false;
      builds++;
    };
    // Refresh visible, close tiles before hidden coarse parents after a brush stroke.
    const visibleDirty = [];
    const collect = (node) => {
      if (node.needsRefresh && node.mesh.visible) visibleDirty.push(node);
      if (node.children) node.children.forEach(collect);
    };
    collect(this.root);
    visibleDirty.sort((a, b) => distanceToNode(a, px, pz) - distanceToNode(b, px, pz));
    for (const node of visibleDirty) {
      if (builds >= this.maxBuildsPerFrame || performance.now() - start >= this.buildBudgetMs)
        break;
      refresh(node);
    }
    const hide = (node) => {
      node.mesh.visible = false;
      if (node.children) for (const child of node.children) hide(child);
    };
    const visit = (node) => {
      if (
        node.needsRefresh &&
        builds < this.maxBuildsPerFrame &&
        performance.now() - start < this.buildBudgetMs
      ) {
        refresh(node);
      }
      const distance = distanceToNode(node, px, pz);
      const splitDistance = node.size * (this.immersive ? (node.split ? 1.13 : 1.02) : (node.split ? 1.45 : 1.35));
      const wantsSplit = node.size > (this.hyper ? MIN_SIZE * 2 : MIN_SIZE) && distance < splitDistance;
      if (wantsSplit) {
        if (!node.children) node.children = [];
        while (
          node.children.length < 4 &&
          builds < this.maxBuildsPerFrame &&
          performance.now() - start < this.buildBudgetMs
        ) {
          const k = node.children.length,
            half = node.size / 2;
          const child = this.makeNode(
            node.x + (k % 2) * half,
            node.z + Math.floor(k / 2) * half,
            half
          );
          child.mesh.visible = false;
          node.children.push(child);
          builds++;
        }
        if (node.children.length === 4) {
          node.split = true;
          node.mesh.visible = false;
          // Visit nearby children first so the initial view gets its detail early.
          const ordered = node.children
            .slice()
            .sort((a, b) => distanceToNode(a, px, pz) - distanceToNode(b, px, pz));
          for (const child of ordered) visit(child);
          return;
        }
        queued += 4 - node.children.length;
      } else {
        node.split = false;
        if (node.children) for (const child of node.children) hide(child);
      }
      node.lastSeen = this.frame;
      node.mesh.visible = true;
      node.mesh.userData.morph.value = smooth(node.size * 1.45, node.size * 2.1, distance);
      chunks++;
      triangles += node.mesh.geometry.index.count / 3;
      const step = node.size / (this.hyper ? 8 : this.immersive ? 16 : TERRAIN_GRID);
      lodLevels[step] = (lodLevels[step] || 0) + 1;
    };
    visit(this.root);
    // Retain a short travel cache, then dispose whole inactive branches to bound memory.
    if (this.frame % 180 === 0) {
      const trim = (node) => {
        if (!node.children) return;
        if (!node.split && this.frame - Math.max(...node.children.map((c) => c.lastSeen)) > 360) {
          for (const child of node.children) this.disposeNode(child);
          node.children = null;
        } else for (const child of node.children) trim(child);
      };
      trim(this.root);
    }
    this.stats = { chunks, triangles, queued, buildMs: performance.now() - start, lodLevels };
  }

  disposeNode(node) {
    if (node.children) for (const child of node.children) this.disposeNode(child);
    this.rootGroup.remove(node.mesh);
    node.mesh.geometry.dispose();
    node.mesh.material.dispose();
  }

  invalidate(bounds) {
    const mark = (node) => {
      const padding = (node.size / (this.hyper ? 8 : this.immersive ? 16 : TERRAIN_GRID)) * 4;
      if (
        node.x > bounds.maxX + padding ||
        node.x + node.size < bounds.x - padding ||
        node.z > bounds.maxZ + padding ||
        node.z + node.size < bounds.z - padding
      )
        return;
      node.needsRefresh = true;
      if (node.children) for (const child of node.children) mark(child);
    };
    mark(this.root);
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    this.disposeNode(this.root);
    this.scene.remove(this.rootGroup);
  }
}

/** Compact all horizontal and vertical distances equally, preserving plausible slopes. */
export function createWorld(seed = 'vallon-2026', { scale = 0.84 } = {}) {
  const base = createBaseWorld(seed),
    k = scale === 1 ? 1 : 0.84;
  if (k === 1) return base;
  const point = (p) => ({
    ...p,
    x: p.x * k,
    z: p.z * k,
    ...('rx' in p ? { rx: p.rx * k, rz: p.rz * k, level: p.level * k } : {}),
  });
  const compactLakes = base.lakes.map(point);
  return {
    ...base,
    scale: k,
    height: (x, z) => base.height(x / k, z / k) * k,
    sample: (x, z) => {
      const s = base.sample(x / k, z / k);
      return { ...s, height: s.height * k, riverDistance: s.riverDistance * k };
    },
    surface: (x, z, h, slope) => {
      const s = base.surface(x / k, z / k, h / k, slope);
      return { ...s, height: h, riverDistance: s.riverDistance * k };
    },
    waterLevel: (x, z) => {
      const h = base.waterLevel(x / k, z / k);
      return h === null ? null : h * k;
    },
    riverX: (z) => base.riverX(z / k) * k,
    pathX: (z) => base.pathX(z / k) * k,
    spawn: point(base.spawn),
    panorama: point(base.panorama),
    lake: compactLakes[0],
    lakes: compactLakes,
  };
}

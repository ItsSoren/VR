import { propVariation, propMatrix, propTint } from './prop-variation.js';
import * as THREE from 'three';
import { leafTexture, foliageGeometry, naturalMaterial, distanceDissolve } from './nature.js';
import { biomeTint } from './terrain.js';

// A cell owns its grass buffers. Props share species geometry and are batched
// across cells; only nearby batches participate in the shadow pass.
const GRASS_CELL = 20;
const PROP_CELL = 40;
const COLLISION_CELL = 12;
const QUALITY = {
  high: { density: 13.2, grassRange: 90, nearStart: 27, nearEnd: 48, propRange: 230 },
  medium: { density: 5.2, grassRange: 76, nearStart: 22, nearEnd: 39, propRange: 200 },
  vr: { density: 1.25, grassRange: 34, nearStart: 9, nearEnd: 17, propRange: 125 },
  low: { density: 2.1, grassRange: 55, nearStart: 15, nearEnd: 29, propRange: 165 },
};
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const smooth = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
const fract = (n) => n - Math.floor(n);
function hash(x, z, seed = 0) {
  let n =
    Math.imul(x | 0, 374761393) ^ Math.imul(z | 0, 668265263) ^ Math.imul(seed | 0, 1442695041);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
}
function seedNumber(seed) {
  if (typeof seed === 'number') return seed | 0;
  let value = 2166136261;
  for (const c of String(seed)) value = Math.imul(value ^ c.charCodeAt(0), 16777619);
  return value | 0;
}
function random(seed) {
  let s = seed >>> 0;
  return () => {
    s += 0x6d2b79f5;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const keyOf = (x, z) => `${x},${z}`;
const v3 = (x, y, z) => new THREE.Vector3(x, y, z);

function treeChoice(world, x, z, s, variant) {
  const cover = s.coverType || s.biome;
  const canopy = s.canopy ?? (cover === 'forest' ? 1 : 0);
  const density = 0.006 + Math.pow(canopy, 1.25) * 0.965;
  const species =
    s.biome === 'birch'
      ? variant < 0.65
        ? 2
        : variant < 0.88
          ? 0
          : 1
      : cover === 'alpine'
        ? 1
        : cover === 'forest'
          ? variant < 0.6
            ? 1
            : variant < 0.82
              ? 0
              : 2
          : variant < 0.42
            ? 1
            : variant < 0.85
              ? 0
              : 2;
  const spawn = world.spawn || { x: 0, z: 100 },
    p = world.panorama;
  const valid =
    !(p && Math.hypot(x - p.x, z - p.z) < 18) &&
    Math.hypot(x - spawn.x, z - spawn.z) >= 5 &&
    (s.path || 0) <= 0.18 &&
    s.slope <= 0.62 &&
    (s.riverDistance == null || s.riverDistance >= 5.5);
  return { density, species, valid };
}

function mergeParts(parts) {
  const positions = [],
    colors = [];
  for (const { geometry, matrix, color, variation = 0.06 } of parts) {
    const g = geometry.index ? geometry.toNonIndexed() : geometry;
    if (matrix) g.applyMatrix4(matrix);
    const p = g.getAttribute('position');
    const base = new THREE.Color(color);
    for (let i = 0; i < p.count; i++) {
      positions.push(p.getX(i), p.getY(i), p.getZ(i));
      const face =
        1 - variation / 2 + hash(Math.floor(i / 3), Math.round(p.getY(i) * 11), 811) * variation;
      colors.push(base.r * face, base.g * face, base.b * face);
    }
    if (g !== geometry) g.dispose();
    geometry.dispose();
  }
  const result = new THREE.BufferGeometry();
  result.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  result.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  result.computeVertexNormals();
  result.computeBoundingSphere();
  return result;
}
function transform(position, scale = v3(1, 1, 1), rotation = new THREE.Quaternion()) {
  return new THREE.Matrix4().compose(position, rotation, scale);
}
function branch(a, b, radius, color) {
  const direction = b.clone().sub(a);
  const q = new THREE.Quaternion().setFromUnitVectors(v3(0, 1, 0), direction.clone().normalize());
  return {
    geometry: new THREE.CylinderGeometry(radius * 0.48, radius, direction.length(), 10),
    matrix: transform(a.clone().add(b).multiplyScalar(0.5), v3(1, 1, 1), q),
    color,
  };
}
function irregularCrown(radius, seed) {
  const geometry = new THREE.IcosahedronGeometry(radius, 1);
  const p = geometry.getAttribute('position');
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i),
      y = p.getY(i),
      z = p.getZ(i);
    const wobble = 0.87 + 0.25 * hash(Math.round(x * 1000), Math.round(z * 1000 + y * 351), seed);
    p.setXYZ(i, x * wobble, y * wobble, z * wobble);
  }
  return geometry;
}
function treeGeometry(species) {
  const parts = [];
  if (species === 1) {
    parts.push(branch(v3(0, 0, 0), v3(0.08, 8.2, 0), 0.25, '#65503a'));
    for (let i = 0; i < 23; i++) {
      const y = 2.3 + i * 0.25,
        a = i * 2.399963,
        reach = (8.4 - y) * 0.31;
      parts.push(
        branch(
          v3(0, y, 0),
          v3(Math.cos(a) * reach, y - 0.25, Math.sin(a) * reach),
          0.045,
          '#62513f'
        )
      );
    }
  } else {
    const birch = species === 2;
    const trunkColor = birch ? '#b6b49b' : '#70503b';
    const top = birch ? 6.2 : 5.0;
    parts.push(branch(v3(0, 0, 0), v3(0.18, top, 0.06), birch ? 0.19 : 0.31, trunkColor));
    for (let i = 0; i < 7; i++) {
      const angle = i * 2.399963;
      const reach = birch ? 1.3 : 1.8;
      const y = top - 1.35 + i * 0.32;
      const end = v3(Math.cos(angle) * reach, y, Math.sin(angle) * reach);
      parts.push(branch(v3(0.1, y - 1.55, 0), end, birch ? 0.07 : 0.12, trunkColor));
      for (let j = 0; j < 3; j++)
        parts.push(
          branch(
            end.clone().multiplyScalar(0.85),
            end
              .clone()
              .add(v3(Math.sin(j * 2 + i) * 0.8, 0.7 + j * 0.16, Math.cos(j * 2 + i) * 0.8)),
            0.033,
            trunkColor
          )
        );
    }
    if (!birch)
      for (let i = 0; i < 4; i++) {
        const a = (i * Math.PI) / 2;
        parts.push(
          branch(v3(Math.cos(a) * 0.55, 0.03, Math.sin(a) * 0.55), v3(0, 0.9, 0), 0.13, trunkColor)
        );
      }
  }
  return mergeParts(parts);
}
function rockGeometry(variant) {
  const geometry = new THREE.IcosahedronGeometry(1, 1);
  const p = geometry.getAttribute('position');
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i),
      y = p.getY(i),
      z = p.getZ(i);
    const n =
      0.95 +
      Math.sin(x * 3 + variant) * Math.cos(z * 4 - y * 2) * 0.13 +
      Math.sin(y * 6 + z * 5) * 0.06;
    p.setXYZ(
      i,
      x * n * (1.25 - variant * 0.11),
      Math.max(0, (y * n + 0.8) * (0.68 + variant * 0.14)),
      z * n
    );
  }
  return mergeParts([
    { geometry, color: ['#878a85', '#99958b', '#737e78'][variant], variation: 0.04 },
  ]);
}
function bushGeometry(variant) {
  return foliageGeometry(variant, false, true);
}
function berryGeometry(species) {
  const parts = [],
    rng = random(7313 + species * 419);
  for (let i = 0; i < 16; i++) {
    const a = i * 2.399963,
      r = 0.7 + rng() * 0.23,
      y = 0.32 + rng() * 0.8;
    for (let j = 0; j < 3; j++)
      parts.push({
        geometry: new THREE.IcosahedronGeometry(0.06 + rng() * 0.016, 0),
        matrix: transform(
          v3(
            Math.cos(a) * r + (j - 1) * 0.06,
            y + (j % 2) * 0.08,
            Math.sin(a) * r + (j - 1) * 0.035
          )
        ),
        color: species ? '#6372b2' : '#ba4052',
        variation: 0.13,
      });
  }
  return mergeParts(parts);
}

function bladeGeometry() {
  const positions = [],
    normals = [],
    uvs = [];
  const rng = random(58731);
  // Seven separately curved, tapered blades, four triangles per blade.
  for (let blade = 0; blade < 7; blade++) {
    const angle = rng() * Math.PI * 2;
    const bx = (rng() - 0.5) * 0.48,
      bz = (rng() - 0.5) * 0.48;
    const height = 0.3 + rng() * 0.4,
      width = 0.022 + rng() * 0.026;
    const bend = 0.07 + rng() * 0.18;
    const sx = Math.cos(angle),
      sz = Math.sin(angle);
    const point = (y, side, w) => [
      bx + sx * side * w + sz * bend * y * y,
      y * height,
      bz + sz * side * w - sx * bend * y * y,
    ];
    const points = [
      point(0, -1, width),
      point(0, 1, width),
      point(0.57, -1, width * 0.6),
      point(0.57, 1, width * 0.6),
      point(1, 0, 0),
    ];
    const tex = [
      [0, 0],
      [1, 0],
      [0, 0.57],
      [1, 0.57],
      [0.5, 1],
    ];
    for (const index of [0, 1, 2, 1, 3, 2, 2, 3, 4]) {
      positions.push(...points[index]);
      normals.push(sz * 0.35, 0.94, -sx * 0.35);
      uvs.push(...tex[index]);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  return g;
}
function cardGeometry() {
  const positions = [],
    uvs = [],
    normals = [];
  for (let i = 0; i < 2; i++) {
    const angle = (i * Math.PI) / 2;
    for (const [x, y, u, v] of [
      [-0.52, 0, 0, 0],
      [0.52, 0, 1, 0],
      [-0.52, 0.76, 0, 1],
      [0.52, 0, 1, 0],
      [0.52, 0.76, 1, 1],
      [-0.52, 0.76, 0, 1],
    ]) {
      positions.push(Math.cos(angle) * x, y, Math.sin(angle) * x);
      normals.push(0, 1, 0);
      uvs.push(u, v);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  return g;
}
function grassAtlas() {
  // Keep the world/query API usable in Node and other non-DOM environments.
  // The browser path below builds the detailed atlas used by distant cards.
  if (typeof document === 'undefined' || !document.createElement) {
    const texture = new THREE.DataTexture(
      new Uint8Array([100, 125, 82, 0]),
      1,
      1,
      THREE.RGBAFormat
    );
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  for (let variant = 0; variant < 4; variant++) {
    const rng = random(381 + variant * 17);
    const left = variant * 256;
    for (let i = 0; i < 23; i++) {
      const x = left + 37 + rng() * 182;
      const height = 62 + rng() * 158;
      const lean = (rng() - 0.5) * 96;
      const width = 2.5 + rng() * 4.4;
      const gradient = ctx.createLinearGradient(0, 256, 0, 256 - height);
      // The atlas supplies cutout silhouettes and a restrained luminance
      // variation; the shared instance tint supplies the actual leaf color.
      gradient.addColorStop(0, '#ededed');
      gradient.addColorStop(0.52, '#f7f7f7');
      gradient.addColorStop(1, '#ffffff');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(x - width, 256);
      ctx.quadraticCurveTo(x - width + lean * 0.2, 256 - height * 0.6, x + lean, 256 - height);
      ctx.quadraticCurveTo(x + width + lean * 0.42, 256 - height * 0.47, x + width, 256);
      ctx.fill();
      if (variant === 3 && i % 5 === 0) {
        ctx.fillStyle = '#ebe6cf';
        for (let petal = 0; petal < 5; petal++) {
          const a = (petal * Math.PI * 2) / 5;
          ctx.beginPath();
          ctx.ellipse(
            x + lean + Math.cos(a) * 3.5,
            256 - height + Math.sin(a) * 3.5,
            3,
            2.1,
            a,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      }
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

const grassVertex = `
  #include <common>
  #include <shadowmap_pars_vertex>
  uniform float uTime, uMode, uNearStart, uNearEnd, uMaxDistance;
  varying vec2 vUv;
  varying vec3 vTint, vWorld, vNormal;
  varying float vFade, vHeight;
  float noiseRoot(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  void main() {
    vec4 root = modelMatrix * instanceMatrix * vec4(0.,0.,0.,1.);
    float distanceToCamera = length(root.xz - cameraPosition.xz);
    float lod = smoothstep(uNearStart, uNearEnd, distanceToCamera);
    float cutoff = noiseRoot(root.xz);
    float nearWeight = 1. - smoothstep(cutoff - .12, cutoff + .12, lod);
    if (lod < .001) nearWeight = 1.;
    if (lod > .999) nearWeight = 0.;
    vFade = mix(nearWeight, 1.-nearWeight, uMode) * (1.-smoothstep(uMaxDistance-15.,uMaxDistance,distanceToCamera));
    vec3 displaced = position;
    float wind = sin(uTime * 1.45 + root.x * .19 + root.z * .14) * .085;
    wind += sin(uTime * 2.7 + root.z * .43) * .028;
    displaced.x += wind * position.y * position.y;
    displaced.z += wind * .45 * position.y * position.y;
    vec4 world = modelMatrix * instanceMatrix * vec4(displaced,1.);
    vWorld = world.xyz;
    vHeight = clamp(position.y / .9, 0., 1.);
    vNormal = normalize(mat3(modelMatrix * instanceMatrix) * normal);
    vUv = uv;
    if (uMode > .5) vUv.x = (vUv.x + floor(noiseRoot(root.zx + 7.) * 4.)) * .25;
    vTint = vec3(1.);
    #ifdef USE_INSTANCING_COLOR
      vTint = instanceColor;
    #endif
    gl_Position = projectionMatrix * viewMatrix * world;
    vec4 worldPosition=world;
    vec3 transformedNormal=normalize(mat3(viewMatrix)*vNormal);
    #include <shadowmap_vertex>
  }
`;
const grassFragment = `
  #include <common>
  #include <packing>
  #include <lights_pars_begin>
  #include <shadowmap_pars_fragment>
  #include <shadowmask_pars_fragment>
  uniform sampler2D uAtlas;
  uniform float uMode, uFogNear, uFogFar, uFogDensity, uDayLight;
  uniform vec3 uFogColor,uSunDir,uLightColor;
  varying vec2 vUv;
  varying vec3 vTint, vWorld, vNormal;
  varying float vFade, vHeight;
  float threshold(vec3 p) { return fract(sin(dot(floor(p * 31.), vec3(127.1,311.7,74.7))) * 43758.5453); }
  void main() {
    if (vFade < .005 || threshold(vWorld) > vFade) discard;
    vec4 texel = vec4(1.);
    if (uMode > .5) { texel = texture2D(uAtlas, vUv); if(texel.a < .42) discard; }
    float sun = .57 + abs(dot(normalize(vNormal),uSunDir)) * .36;
    vec3 rootTone = vec3(.69,.76,.62);
    vec3 tipTone = vec3(1.02,1.10,.94);
    vec3 bladeTone = mix(rootTone, tipTone, smoothstep(.02,.88,vHeight));
    float atlasLuma = dot(texel.rgb, vec3(.299,.587,.114));
    float atlasShade = uMode > .5 ? mix(.94,1.04,clamp((atlasLuma-.88)/.12,0.,1.)) : 1.;
    float vein=1.-exp(-abs(vUv.x-.5)*34.)*.08;
    vec3 color = vTint * vec3(atlasShade*vein) * bladeTone * sun * (.38+.62*getShadowMask()) * vec3(1.36);
    color *= mix(vec3(.075,.11,.18),mix(vec3(1.),uLightColor,.42),uDayLight);
    float d = length(cameraPosition - vWorld);
    float fog = uFogDensity > 0. ? 1. - exp(-uFogDensity*uFogDensity*d*d) : smoothstep(uFogNear,uFogFar,d);
    gl_FragColor = vec4(mix(color,uFogColor,clamp(fog,0.,1.)),1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

export class Vegetation {
  constructor(scene, world, { quality = 'high' } = {}) {
    this.scene = scene;
    this.world = world;
    this.seed = seedNumber(world.seed ?? 1);
    this.quality = QUALITY[quality] ? quality : 'high';
    this.config = QUALITY[this.quality];
    this.grassCells = new Map();
    this.propCells = new Map();
    this.harvested = new Set();
    this.colliderBuckets = new Map();
    this.propsById = new Map();
    this.grassQueue = [];
    this.propQueue = [];
    this.grassJob = null;
    this.propJob = null;
    this.batchMeshes = new Map();
    this.prototypes = [];
    this.streamBudget = typeof document === 'undefined' ? 160 : 1200;
    this.streamMs = 8;
    this.frame = 0;
    this.lastPlan = -Infinity;
    this.lastRebuild = -Infinity;
    this.propsDirty = true;
    this.lastPosition = new THREE.Vector3(Infinity, 0, Infinity);
    this.lastBatchPosition = new THREE.Vector3(Infinity, 0, Infinity);
    this.frustum = new THREE.Frustum();
    this.projection = new THREE.Matrix4();
    this.matrix = new THREE.Matrix4();
    this.rotation = new THREE.Quaternion();
    this.scale = new THREE.Vector3();
    this.position = new THREE.Vector3();
    this.color = new THREE.Color();
    this.atlas = grassAtlas();
    this.blades = bladeGeometry();
    this.cards = cardGeometry();
    this.grassMaterials = [0, 1].map(
      (mode) =>
        new THREE.ShaderMaterial({
          lights: true,
          uniforms: THREE.UniformsUtils.merge([
            THREE.UniformsLib.lights,
            {
              uTime: { value: 0 },
              uDayLight: { value: 1 },
              uSunDir: { value: new THREE.Vector3(-0.7, 0.6, 0.22).normalize() },
              uLightColor: { value: new THREE.Color('#fff6df') },
              uMode: { value: mode },
              uNearStart: { value: this.config.nearStart },
              uNearEnd: { value: this.config.nearEnd },
              uMaxDistance: { value: this.config.grassRange },
              uAtlas: { value: this.atlas },
              uFogColor: { value: scene.fog?.color || new THREE.Color('#c4d5db') },
              uFogNear: { value: scene.fog?.near || 130 },
              uFogFar: { value: scene.fog?.far || 700 },
              uFogDensity: { value: scene.fog?.isFogExp2 ? scene.fog.density : 0 },
            },
          ]),
          vertexShader: grassVertex,
          fragmentShader: grassFragment,
          side: THREE.DoubleSide,
          transparent: false,
          depthWrite: true,
        })
    );
    this.propMaterial = naturalMaterial('bark');
    this.rockMaterial = naturalMaterial('rock');
    this.berryBatches = new Map();
    this.berryPrototypes = [berryGeometry(0), berryGeometry(1)];
    this.berryMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 1,
      flatShading: true,
    });
    this.berryMaterial.onBeforeCompile = (s) => {
      s.vertexShader = 'varying float berryFade;\n' + s.vertexShader;
      s.vertexShader = s.vertexShader.replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\nvec3 berryRoot=(modelMatrix*instanceMatrix*vec4(0.,0.,0.,1.)).xyz;berryFade=1.-smoothstep(25.,43.,length(berryRoot.xz-cameraPosition.xz));'
      );
      s.fragmentShader = 'varying float berryFade;\n' + s.fragmentShader;
      s.fragmentShader = s.fragmentShader.replace(
        '#include <color_fragment>',
        '#include <color_fragment>\nif(fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)>berryFade)discard;'
      );
    };
    this.leafTextures = [leafTexture(), leafTexture(true)];
    this.foliageBatches = new Map();
    this.foliagePrototypes = [];
    this.leafTime = { value: 0 };
    this.leafMaterials = this.leafTextures.map((map) => {
      const material = new THREE.MeshStandardMaterial({
        map,
        vertexColors: true,
        roughness: 0.95,
        side: THREE.DoubleSide,
        alphaTest: 0.42,
        alphaToCoverage: true,
      });
      material.onBeforeCompile = (shader) => {
        shader.uniforms.leafTime = this.leafTime;
        shader.vertexShader =
          'attribute float leafDetail;\nvarying float vLeafFade;\nvarying float vLeafDistance;\nuniform float leafTime;\n' +
          shader.vertexShader;
        shader.vertexShader = shader.vertexShader.replace(
          '#include <begin_vertex>',
          '#include <begin_vertex>\ntransformed.x+=sin(leafTime*1.4+position.y*3.+position.x*2.)*.028;\nvec3 leafRoot=(modelMatrix*instanceMatrix*vec4(0.,0.,0.,1.)).xyz;\nvLeafDistance=length(leafRoot.xz-cameraPosition.xz);\nvLeafFade=1.-leafDetail*smoothstep(40.,57.,vLeafDistance);'
        );
        shader.fragmentShader =
          'varying float vLeafFade;\nvarying float vLeafDistance;\n' + shader.fragmentShader;
        // Preserve coverage when mip filtering averages fine leaves with transparent pixels.
        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <alphatest_fragment>',
          'float leafCutoff=mix(.42,.055,smoothstep(24.,85.,vLeafDistance));\nfloat leafAlphaWidth=max(fwidth(diffuseColor.a),.015);\ndiffuseColor.a=smoothstep(leafCutoff-leafAlphaWidth,leafCutoff+leafAlphaWidth,diffuseColor.a);\nif(diffuseColor.a<.01)discard;'
        );
        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <color_fragment>',
          '#include <color_fragment>\nif(fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)>vLeafFade)discard;\ndiffuseColor.rgb*=.98;'
        );
      };
      material.customProgramCacheKey = () => 'vallon-leaves-v3';
      return material;
    });
    this.pineMaterial = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 });
    this.propRange = { value: this.config.propRange };
    for (const m of [
      this.propMaterial,
      this.rockMaterial,
      this.pineMaterial,
      ...this.leafMaterials,
    ])
      distanceDissolve(m, this.propRange);
    for (let i = 0; i < 3; i++) {
      this.foliagePrototypes.push(foliageGeometry(i, false), foliageGeometry(i, true));
    }
    for (let i = 0; i < 3; i++) this.prototypes.push(treeGeometry(i));
    for (let i = 0; i < 3; i++) this.prototypes.push(rockGeometry(i));
    for (let i = 0; i < 2; i++) this.prototypes.push(bushGeometry(i));
    this.stats = {
      grassTufts: 0,
      grassBlades: 0,
      grassCells: 0,
      visibleGrassCells: 0,
      trees: 0,
      rocks: 0,
      bushes: 0,
      props: 0,
      queuedCells: 0,
      drawCalls: 0,
    };
  }

  setQuality(quality) {
    if (!QUALITY[quality] || this.quality === quality) return;
    this.quality = quality;
    this.config = QUALITY[quality];
    this.propRange.value = this.config.propRange;
    for (const cell of this.grassCells.values()) this.disposeGrassCell(cell);
    this.grassCells.clear();
    this.grassQueue.length = 0;
    this.grassJob = null;
    this.lastPlan = -Infinity;
    this.propsDirty = true;
    for (const material of this.grassMaterials) {
      material.uniforms.uNearStart.value = this.config.nearStart;
      material.uniforms.uNearEnd.value = this.config.nearEnd;
      material.uniforms.uMaxDistance.value = this.config.grassRange;
    }
  }

  plan(camera, time) {
    const x = camera.position.x,
      z = camera.position.z;
    const cellList = (size, range, existing) => {
      const cells = [],
        cx = Math.floor(x / size),
        cz = Math.floor(z / size),
        radius = Math.ceil(range / size);
      for (let iz = cz - radius; iz <= cz + radius; iz++)
        for (let ix = cx - radius; ix <= cx + radius; ix++) {
          const dx = (ix + 0.5) * size - x,
            dz = (iz + 0.5) * size - z;
          const distance = Math.hypot(dx, dz);
          const key = keyOf(ix, iz);
          if (distance < range + size * 0.71 && !existing.has(key))
            cells.push({ x: ix, z: iz, key, distance });
        }
      cells.sort((a, b) => a.distance - b.distance);
      return cells;
    };
    const grassExisting = new Set(this.grassCells.keys());
    const propExisting = new Set(this.propCells.keys());
    if (this.grassJob) grassExisting.add(this.grassJob.key);
    if (this.propJob) propExisting.add(this.propJob.key);
    this.grassQueue = cellList(GRASS_CELL, this.config.grassRange, grassExisting);
    this.propQueue = cellList(PROP_CELL, this.config.propRange, propExisting);
    if (
      this.grassJob &&
      Math.hypot(
        (this.grassJob.x + 0.5) * GRASS_CELL - x,
        (this.grassJob.z + 0.5) * GRASS_CELL - z
      ) >
        this.config.grassRange + 42
    )
      this.grassJob = null;
    if (
      this.propJob &&
      Math.hypot((this.propJob.x + 0.5) * PROP_CELL - x, (this.propJob.z + 0.5) * PROP_CELL - z) >
        this.config.propRange + 75
    )
      this.propJob = null;
    for (const [key, cell] of this.grassCells) {
      if (Math.hypot(cell.cx - x, cell.cz - z) > this.config.grassRange + 42) {
        this.disposeGrassCell(cell);
        this.grassCells.delete(key);
      }
    }
    for (const [key, cell] of this.propCells) {
      if (Math.hypot(cell.cx - x, cell.cz - z) > this.config.propRange + 75) {
        for (const prop of cell.props) this.removeCollider(prop);
        this.propCells.delete(key);
        this.propsDirty = true;
      }
    }
    this.lastPlan = time;
    this.lastPosition.copy(camera.position);
  }

  createGrassCell(cellInfo, budget = Infinity) {
    const { x: ix, z: iz, key } = cellInfo;
    const count = Math.ceil(GRASS_CELL * GRASS_CELL * this.config.density);
    const job = (cellInfo.job ||= {
      rng: random((hash(ix, iz, this.seed + 521) * 4294967295) >>> 0),
      records: [],
      index: 0,
      minY: Infinity,
      maxY: -Infinity,
    });
    let used = 0;
    for (; job.index < count && used < budget; job.index++, used++) {
      const i = job.index;
      const x = (ix + job.rng()) * GRASS_CELL,
        z = (iz + job.rng()) * GRASS_CELL;
      const s = this.world.sample(x, z);
      const grass = s.grass ?? (s.biome === 'rock' ? 0.03 : s.biome === 'alpine' ? 0.35 : 1);
      const chance = clamp(
        grass * (1 - (s.path || 0) * 0.98) * (1 - clamp((s.slope - 0.48) / 0.52, 0, 1)),
        0,
        1
      );
      if (job.rng() > chance || (s.riverDistance != null && s.riverDistance < 2.8)) continue;
      const scale =
        (0.65 + job.rng() * 0.73) * (0.7 + (this.world.noise?.(x / 9, z / 9) || 0.5) * 0.52);
      const record = {
        x,
        y: s.height ?? this.world.height(x, z),
        z,
        scale:
          scale *
          (s.biome === 'steppe'
            ? 0.8
            : s.biome === 'wetland'
              ? 1.4
              : 1 + (s.flora > 0.52 ? 0.45 : 0)),
        yaw: job.rng() * Math.PI * 2,
        hue: job.rng(),
        moisture: s.moisture ?? 0.6,
        flora: s.flora ?? 0.5,
        canopy: s.canopy || 0,
        biome: s.biome,
      };
      job.records.push(record);
      job.minY = Math.min(job.minY, record.y);
      job.maxY = Math.max(job.maxY, record.y + 1.5);
    }
    if (job.index < count) return { done: false, used };
    const { records } = job;
    let { minY, maxY } = job;
    const meshes = [this.blades, this.cards].map((geometry, index) => {
      const mesh = new THREE.InstancedMesh(
        geometry,
        this.grassMaterials[index],
        records.length || 1
      );
      mesh.count = records.length;
      mesh.castShadow = false;
      mesh.receiveShadow = true;
      mesh.frustumCulled = false;
      mesh.name = index ? 'Herbe — cartes croisées LOD' : 'Herbe — brins courbes instanciés';
      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        this.position.set(record.x, record.y - 0.018, record.z);
        this.rotation.setFromAxisAngle(THREE.Object3D.DEFAULT_UP, record.yaw);
        this.scale.setScalar(this.covered?.(record.x, record.z, record.y) ? 0 : record.scale);
        this.matrix.compose(this.position, this.rotation, this.scale);
        mesh.setMatrixAt(i, this.matrix);
        biomeTint(record, record.hue, this.color);
        mesh.setColorAt(i, this.color);
      }
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      this.scene.add(mesh);
      return mesh;
    });
    if (!Number.isFinite(minY))
      minY = maxY = this.world.height((ix + 0.5) * GRASS_CELL, (iz + 0.5) * GRASS_CELL);
    const center = v3((ix + 0.5) * GRASS_CELL, (minY + maxY) / 2, (iz + 0.5) * GRASS_CELL);
    this.grassCells.set(key, {
      meshes,
      records,
      count: records.length,
      cx: center.x,
      cz: center.z,
      sphere: new THREE.Sphere(center, Math.hypot(GRASS_CELL * 0.73, (maxY - minY) / 2)),
    });
    return { done: true, used };
  }

  distantTrees(ix, iz) {
    const rng = random((hash(ix, iz, this.seed + 1187) * 4294967295) >>> 0),
      records = [];
    // Consume the same sequence as the first 25 records of a detailed prop cell.
    for (let i = 0; i < 25; i++) {
      const x = (ix + ((i % 5) + 0.18 + rng() * 0.64) / 5) * PROP_CELL,
        z = (iz + (Math.floor(i / 5) + 0.18 + rng() * 0.64) / 5) * PROP_CELL,
        s = this.world.sample(x, z);
      if (Number.isFinite(this.world.waterLevel?.(x, z))) continue;
      const roll = rng(),
        variant = rng(),
        size = rng(),
        rotation = rng() * Math.PI * 2,
        choice = treeChoice(this.world, x, z, s, variant);
      if (choice.valid && roll < choice.density)
        records.push({
          id: `tree:${ix},${iz}:${i % 5}:${Math.floor(i / 5)}`,
          prototype: choice.species,
          x,
          z,
          baseY: s.height,
          scale: (0.71 + size * 0.7) * (1 + (s.canopy || 0) * 0.3),
          rotation,
        });
    }
    return records;
  }

  createPropCell(cellInfo, budget = Infinity) {
    const { x: ix, z: iz, key } = cellInfo;
    const job = (cellInfo.job ||= {
      rng: random((hash(ix, iz, this.seed + 1187) * 4294967295) >>> 0),
      props: [],
      index: 0,
    });
    const rng = job.rng,
      props = job.props;
    const add = (type, prototype, x, z, s, scale, id, rotation) => {
      if (this.harvested.has(id)) return;
      const prop = {
        id,
        type,
        prototype,
        x,
        z,
        baseY: s.height ?? this.world.height(x, z),
        scale,
        rotation,
        radius:
          type === 'tree'
            ? (prototype === 2 ? 0.25 : 0.39) * scale
            : type === 'rock'
              ? 1.12 * scale
              : 0,
        height: (type === 'tree' ? 9.3 : type === 'rock' ? 1.65 : 1.5) * scale,
      };
      if (
        type === 'bush' &&
        hash(Math.round(x * 13), Math.round(z * 13), this.seed + 2041) <
          (s.biome === 'forest' ? 0.52 : s.biome === 'meadow' ? 0.4 : 0.22)
      ) {
        prop.berrySpecies = prototype - 6;
        prop.berryCount =
          3 + Math.floor(hash(Math.round(x * 7), Math.round(z * 7), this.seed + 921) * 4);
        prop.radius = 0.9 * scale;
      }
      const variation = propVariation(prop);
      prop.radius *= Math.max(variation.x, variation.z);
      prop.height *= variation.y;
      if (type === 'rock') {
        // The previous fixed height made flat pebbles collide like tall boulders.
        const geometry = this.prototypes[prototype];
        if (!geometry.boundingBox) geometry.computeBoundingBox();
        const bounds = geometry.boundingBox.clone().applyMatrix4(propMatrix(prop, this.matrix));
        prop.height = bounds.max.y - prop.baseY;
      }
      if (type === 'tree') prop.radius += 0.035;
      props.push(prop);
    };
    let used = 0;
    // A jittered lattice prevents implausible trunk clumps and is stable across streaming.
    for (; job.index < 56 && used < budget; job.index++, used++) {
      const i = job.index;
      let x, z;
      if (i < 25) {
        const gx = i % 5,
          gz = Math.floor(i / 5);
        x = (ix + (gx + 0.18 + rng() * 0.64) / 5) * PROP_CELL;
        z = (iz + (gz + 0.18 + rng() * 0.64) / 5) * PROP_CELL;
      } else {
        x = (ix + rng()) * PROP_CELL;
        z = (iz + rng()) * PROP_CELL;
      }
      const s = this.world.sample(x, z);
      if (Number.isFinite(this.world.waterLevel?.(x, z))) continue;
      const cover = s.coverType || s.biome;
      const roll = rng();
      let variant, size;
      if (i < 25) {
        variant = rng();
        size = rng();
      } else {
        size = rng();
        variant = Math.floor(rng() * 3);
      }
      const yaw = rng() * Math.PI * 2;
      const choice = treeChoice(this.world, x, z, s, variant),
        treeDensity = choice.density;
      const spawn = this.world.spawn || { x: 0, z: 100 };
      const panorama = this.world.panorama;
      if (panorama && Math.hypot(x - panorama.x, z - panorama.z) < (i < 25 ? 18 : 8)) continue;
      if (
        Math.hypot(x - spawn.x, z - spawn.z) < 5 ||
        (this.world.caveEntrance &&
          Math.hypot(x - this.world.caveEntrance.x, z - this.world.caveEntrance.z) < 6) ||
        (s.path || 0) > 0.18 ||
        s.slope > 0.62 ||
        (s.riverDistance != null && s.riverDistance < 5.5)
      )
        continue;
      if (i < 25 && roll < treeDensity) {
        const species = choice.species;
        add(
          'tree',
          species,
          x,
          z,
          s,
          (0.71 + size * 0.7) * (1 + (s.canopy || 0) * 0.3),
          `tree:${key}:${i % 5}:${Math.floor(i / 5)}`,
          yaw
        );
      }
      if (i < 25) continue;
      const roll2 = roll,
        size2 = size,
        variant2 = variant,
        yaw2 = yaw;
      if (
        (s.path || 0) > 0.24 ||
        (s.riverDistance != null && s.riverDistance < 3) ||
        s.slope > 0.95
      )
        continue;
      // Talus gathers in broad patches below exposed ridges. Grassland and
      // gentle alpine shelves retain their ground cover instead of getting
      // an even scatter of oversized boulders.
      const talusPatch = smooth(0.49, 0.7, this.world.noise(x / 82 + 91, z / 82 - 37));
      const talusSlope = smooth(0.18, 0.46, s.slope) * (1 - smooth(0.76, 0.94, s.slope));
      const highGround = smooth(112, 170, s.height);
      const bedrock = s.bedrock || 0;
      const rockChance =
        Math.min(
          0.3,
          0.05 + highGround * 0.045 + talusSlope * 0.12 + bedrock * 0.055 + (s.exposure || 0) * 0.04
        ) *
        (0.3 + talusPatch * 0.7);
      if (roll2 < rockChance)
        add(
          'rock',
          3 + variant2,
          x,
          z,
          s,
          0.38 + size2 * size2 * 1.12,
          `rock:${key}:${i - 25}`,
          yaw2
        );
      else if (
        roll2 < rockChance + (cover === 'forest' ? 0.45 : cover === 'meadow' ? 0.3 : 0.12) &&
        s.slope < 0.65
      ) {
        add('bush', 6 + (variant2 % 2), x, z, s, 0.65 + size2 * 0.8, `bush:${key}:${i - 25}`, yaw2);
      }
    }
    if (job.index < 56) return { done: false, used };
    // Publish the cell atomically. If streaming abandons an unfinished cell,
    // it must not leave colliders behind for props that were never rendered.
    for (const prop of props) {
      if (this.harvested.has(prop.id)) continue;
      this.propsById.set(prop.id, prop);
      if (prop.type !== 'bush' || prop.berrySpecies != null) this.addCollider(prop);
    }
    this.propCells.set(key, { props, cx: (ix + 0.5) * PROP_CELL, cz: (iz + 0.5) * PROP_CELL });
    this.propsDirty = true;
    return { done: true, used };
  }

  addCollider(prop) {
    const key = keyOf(Math.floor(prop.x / COLLISION_CELL), Math.floor(prop.z / COLLISION_CELL));
    let bucket = this.colliderBuckets.get(key);
    if (!bucket) {
      bucket = new Map();
      this.colliderBuckets.set(key, bucket);
    }
    bucket.set(prop.id, prop);
    prop.bucket = key;
  }
  removeCollider(prop) {
    const bucket = this.colliderBuckets.get(prop.bucket);
    if (bucket) {
      bucket.delete(prop.id);
      if (!bucket.size) this.colliderBuckets.delete(prop.bucket);
    }
    this.propsById.delete(prop.id);
  }
  queryColliders(x, z, radius = 1, { includeBushes = false } = {}) {
    const found = [],
      search = radius + 5;
    for (
      let iz = Math.floor((z - search) / COLLISION_CELL);
      iz <= Math.floor((z + search) / COLLISION_CELL);
      iz++
    ) {
      for (
        let ix = Math.floor((x - search) / COLLISION_CELL);
        ix <= Math.floor((x + search) / COLLISION_CELL);
        ix++
      ) {
        const bucket = this.colliderBuckets.get(keyOf(ix, iz));
        if (bucket)
          for (const prop of bucket.values())
            if (
              (prop.type !== 'bush' || includeBushes) &&
              Math.hypot(x - prop.x, z - prop.z) < radius + prop.radius
            )
              found.push(prop);
      }
    }
    return found;
  }
  harvest(id) {
    const prop = this.propsById.get(id);
    if (!prop || (prop.type === 'bush' && prop.berrySpecies == null) || this.harvested.has(id))
      return null;
    this.harvested.add(id);
    this.removeCollider(prop);
    this.propsDirty = true;
    return prop.type === 'tree' ? 'wood' : prop.type === 'bush' ? 'berries' : 'stone';
  }

  setRemoved(ids) {
    if (!ids) return;
    for (const id of ids) {
      if (typeof id !== 'string' || this.harvested.has(id)) continue;
      this.harvested.add(id);
      const prop = this.propsById.get(id);
      if (prop) this.removeCollider(prop);
      this.propsDirty = true;
    }
  }

  rebuildProps(camera) {
    const groups = Array.from({ length: 16 }, () => []);
    let trees = 0,
      rocks = 0,
      bushes = 0;
    for (const cell of this.propCells.values())
      for (const prop of cell.props) {
        const distance = Math.hypot(prop.x - camera.position.x, prop.z - camera.position.z);
        if (this.harvested.has(prop.id) || distance > this.config.propRange + 20) continue;
        const near = this.quality !== 'low' && distance < 58;
        groups[prop.prototype * 2 + (near ? 0 : 1)].push(prop);
        if (prop.type === 'tree') trees++;
        else if (prop.type === 'rock') rocks++;
        else bushes++;
      }
    for (let index = 0; index < groups.length; index++) {
      const records = groups[index];
      let mesh = this.batchMeshes.get(index);
      if (!mesh || mesh.instanceMatrix.count < records.length) {
        if (mesh) {
          this.scene.remove(mesh);
          mesh.dispose();
        }
        const prototype = Math.floor(index / 2),
          material =
            prototype < 3
              ? this.propMaterial
              : prototype < 6
                ? this.rockMaterial
                : this.leafMaterials[0];
        mesh = new THREE.InstancedMesh(
          this.prototypes[prototype],
          material,
          Math.max(16, 2 ** Math.ceil(Math.log2(Math.max(1, records.length))))
        );
        mesh.castShadow = index < 12;
        mesh.receiveShadow = true;
        mesh.name = `Props procéduraux ${index}`;
        this.scene.add(mesh);
        this.batchMeshes.set(index, mesh);
      }
      mesh.count = records.length;
      mesh.visible = records.length > 0;
      for (let i = 0; i < records.length; i++) {
        const prop = records[i];
        propMatrix(prop, this.matrix);
        mesh.setMatrixAt(i, this.matrix);
        propTint(prop, this.color);
        mesh.setColorAt(i, this.color);
      }
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      mesh.computeBoundingSphere();
      if (index < 6) {
        let leaves = this.foliageBatches.get(index);
        if (!leaves || leaves.instanceMatrix.count < records.length) {
          if (leaves) {
            this.scene.remove(leaves);
            leaves.dispose();
          }
          leaves = new THREE.InstancedMesh(
            this.foliagePrototypes[index],
            this.leafMaterials[Math.floor(index / 2) === 1 ? 1 : 0],
            mesh.instanceMatrix.count
          );
          leaves.castShadow = true;
          leaves.receiveShadow = true;
          leaves.name = `Feuillage découpé ${index}`;
          this.scene.add(leaves);
          this.foliageBatches.set(index, leaves);
        }
        leaves.count = records.length;
        leaves.visible = records.length > 0;
        for (let i = 0; i < records.length; i++) {
          mesh.getMatrixAt(i, this.matrix);
          leaves.setMatrixAt(i, this.matrix);
          propTint(records[i], this.color, true);
          leaves.setColorAt(i, this.color);
        }
        leaves.instanceMatrix.needsUpdate = true;
        if (leaves.instanceColor) leaves.instanceColor.needsUpdate = true;
        leaves.computeBoundingSphere();
      }
      if (index >= 12) {
        const berryRecords = records.filter(
          (r) =>
            r.berrySpecies != null &&
            Math.hypot(r.x - camera.position.x, r.z - camera.position.z) < 58
        );
        let fruit = this.berryBatches.get(index);
        if (!fruit || fruit.instanceMatrix.count < berryRecords.length) {
          if (fruit) {
            this.scene.remove(fruit);
            fruit.dispose();
          }
          fruit = new THREE.InstancedMesh(
            this.berryPrototypes[Math.floor(index / 2) - 6],
            this.berryMaterial,
            Math.max(16, 2 ** Math.ceil(Math.log2(Math.max(1, berryRecords.length))))
          );
          fruit.receiveShadow = true;
          fruit.name = 'Baies · fruits instanciés';
          this.scene.add(fruit);
          this.berryBatches.set(index, fruit);
        }
        fruit.count = berryRecords.length;
        fruit.visible = berryRecords.length > 0;
        for (let i = 0; i < berryRecords.length; i++) {
          const prop = berryRecords[i];
          propMatrix(prop, this.matrix);
          fruit.setMatrixAt(i, this.matrix);
        }
        fruit.instanceMatrix.needsUpdate = true;
        fruit.computeBoundingSphere();
      }
    }
    this.stats.trees = trees;
    this.stats.rocks = rocks;
    this.stats.bushes = bushes;
    this.stats.props = trees + rocks + bushes;
    this.stats.berryBushes = [...this.propsById.values()].filter(
      (p) => p.berrySpecies != null && !this.harvested.has(p.id)
    ).length;
    this.propsDirty = false;
    this.lastBatchPosition.copy(camera.position);
  }

  update(camera, time, dt) {
    this.frame++;
    this.leafTime.value = time;
    if (time - this.lastPlan > 0.8 || camera.position.distanceToSquared(this.lastPosition) > 100)
      this.plan(camera, time);
    // Fast machines may generate several cells per frame, within a real CPU-time budget.
    const start = performance.now();
    let remaining = this.streamBudget;
    do {
      if (!this.propJob && this.propQueue.length) this.propJob = this.propQueue.shift();
      if (!this.grassJob && this.grassQueue.length) this.grassJob = this.grassQueue.shift();
      if (this.propJob) {
        const result = this.createPropCell(this.propJob, Math.min(32, remaining));
        remaining -= result.used;
        if (result.done) this.propJob = null;
      }
      if (this.grassJob && remaining > 0) {
        const result = this.createGrassCell(this.grassJob, Math.min(128, remaining));
        remaining -= result.used;
        if (result.done) this.grassJob = null;
      }
      if (!this.propJob && !this.grassJob && !this.propQueue.length && !this.grassQueue.length)
        break;
    } while (remaining > 0 && performance.now() - start < this.streamMs);
    if (camera.position.distanceToSquared(this.lastBatchPosition) > 144) this.propsDirty = true;
    if (this.propsDirty && (time - this.lastRebuild > 0.16 || !this.propQueue.length)) {
      this.rebuildProps(camera);
      this.lastRebuild = time;
    }
    camera.updateMatrixWorld();
    this.projection.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    this.frustum.setFromProjectionMatrix(this.projection);
    let visible = 0,
      tufts = 0,
      blades = 0,
      draws = 0;
    for (const material of this.grassMaterials) material.uniforms.uTime.value = time;
    for (const cell of this.grassCells.values()) {
      const distance = Math.hypot(cell.cx - camera.position.x, cell.cz - camera.position.z);
      const inView =
        distance < this.config.grassRange + GRASS_CELL * 0.71 &&
        this.frustum.intersectsSphere(cell.sphere);
      cell.meshes[0].visible = inView && distance < this.config.nearEnd + GRASS_CELL * 0.71;
      cell.meshes[1].visible = inView && distance > this.config.nearStart - GRASS_CELL * 0.71;
      if (inView) {
        visible++;
        tufts += cell.count;
      }
      if (cell.meshes[0].visible) {
        blades += cell.count * 7;
        draws++;
      }
      if (cell.meshes[1].visible) draws++;
    }
    for (const mesh of this.batchMeshes.values()) if (mesh.visible) draws++;
    for (const mesh of this.foliageBatches.values()) if (mesh.visible) draws++;
    for (const mesh of this.berryBatches.values()) if (mesh.visible) draws++;
    this.stats.grassCells = this.grassCells.size;
    this.stats.visibleGrassCells = visible;
    this.stats.grassTufts = tufts;
    this.stats.grassBlades = blades;
    this.stats.drawCalls = draws;
    this.stats.queuedCells = this.grassQueue.length + this.propQueue.length;
  }

  disposeGrassCell(cell) {
    for (const mesh of cell.meshes) {
      this.scene.remove(mesh);
      mesh.dispose();
    }
  }
  terrainChanged(bounds) {
    const inside = (x, z, p = 0) =>
      x >= bounds.x - p && x <= bounds.maxX + p && z >= bounds.z - p && z <= bounds.maxZ + p;
    // Reposition roots immediately; keep grass out of freshly worked soil.
    for (const cell of this.grassCells.values()) {
      if (!inside(cell.cx, cell.cz, GRASS_CELL)) continue;
      let minY = Infinity,
        maxY = -Infinity;
      for (let i = 0; i < cell.records.length; i++) {
        const r = cell.records[i],
          y = this.world.height(r.x, r.z);
        const bare =
          Math.abs(this.world.displacement?.(r.x, r.z) || 0) > 0.12 || this.covered?.(r.x, r.z, y);
        this.position.set(r.x, y - 0.018, r.z);
        this.rotation.setFromAxisAngle(THREE.Object3D.DEFAULT_UP, r.yaw);
        this.scale.setScalar(bare ? 0 : r.scale);
        this.matrix.compose(this.position, this.rotation, this.scale);
        for (const mesh of cell.meshes) mesh.setMatrixAt(i, this.matrix);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y + 1.5);
      }
      for (const mesh of cell.meshes) mesh.instanceMatrix.needsUpdate = true;
      if (Number.isFinite(minY)) {
        cell.sphere.center.y = (minY + maxY) / 2;
        cell.sphere.radius = Math.hypot(GRASS_CELL * 0.73, (maxY - minY) / 2);
      }
    }
    // Interrupted cells must restart against the new height field.
    if (
      this.grassJob &&
      inside((this.grassJob.x + 0.5) * GRASS_CELL, (this.grassJob.z + 0.5) * GRASS_CELL, GRASS_CELL)
    )
      this.grassJob = null;
    if (
      this.propJob &&
      inside((this.propJob.x + 0.5) * PROP_CELL, (this.propJob.z + 0.5) * PROP_CELL, PROP_CELL)
    )
      this.propJob = null;
    for (const prop of this.propsById.values())
      if (inside(prop.x, prop.z)) {
        prop.baseY = this.world.height(prop.x, prop.z);
        this.propsDirty = true;
      }
    this.lastPlan = -Infinity;
  }
  dispose() {
    for (const cell of this.grassCells.values()) this.disposeGrassCell(cell);
    for (const mesh of this.batchMeshes.values()) {
      this.scene.remove(mesh);
      mesh.dispose();
    }
    for (const mesh of this.foliageBatches.values()) {
      this.scene.remove(mesh);
      mesh.dispose();
    }
    this.foliageBatches.clear();
    for (const mesh of this.berryBatches.values()) {
      this.scene.remove(mesh);
      mesh.dispose();
    }
    this.berryBatches.clear();
    for (const g of this.berryPrototypes) g.dispose();
    this.berryMaterial.dispose();
    this.grassCells.clear();
    this.propCells.clear();
    this.batchMeshes.clear();
    this.colliderBuckets.clear();
    this.propsById.clear();
    this.harvested.clear();
    this.grassQueue.length = this.propQueue.length = 0;
    this.grassJob = this.propJob = null;
    this.blades.dispose();
    this.cards.dispose();
    this.atlas.dispose();
    for (const geometry of this.prototypes) geometry.dispose();
    for (const material of this.grassMaterials) material.dispose();
    this.propMaterial.dispose();
    this.rockMaterial.dispose();
    this.pineMaterial.dispose();
    for (const geometry of this.foliagePrototypes) geometry.dispose();
    for (const m of this.leafMaterials) m.dispose();
    for (const texture of this.leafTextures) texture.dispose();
  }
}

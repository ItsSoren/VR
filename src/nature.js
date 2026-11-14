import * as THREE from 'three';

export function distanceDissolve(material, range, far = false) {
  const compile = material.onBeforeCompile.bind(material),
    key = material.customProgramCacheKey.bind(material);
  const cacheKey = key();
  material.onBeforeCompile = (shader) => {
    compile(shader);
    shader.uniforms.uPropRange = range;
    shader.vertexShader =
      'uniform float uPropRange;varying float vPropFade;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
   vec4 propRoot=vec4(0.,0.,0.,1.);
   #ifdef USE_INSTANCING
    propRoot=instanceMatrix*propRoot;
   #endif
   propRoot=modelMatrix*propRoot;
   float outerLod=smoothstep(uPropRange-20.,uPropRange+20.,length(propRoot.xz-cameraPosition.xz));
   vPropFade=${far ? 'outerLod' : '1.-outerLod'};`
    );
    shader.fragmentShader = 'varying float vPropFade;\n' + shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <color_fragment>',
      `#include <color_fragment>
   float propDither=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);
   if(${far ? '1.-propDither' : 'propDither'}>vPropFade)discard;`
    );
  };
  material.customProgramCacheKey = () => cacheKey + '-distance-' + far;
  return material;
}

const rand = (seed) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

export function leafTexture(needle = false) {
  if (typeof document === 'undefined') {
    const t = new THREE.DataTexture(new Uint8Array([115, 139, 89, 255]), 1, 1);
    t.needsUpdate = true;
    return t;
  }
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const c = canvas.getContext('2d'),
    r = rand(needle ? 911 : 340);
  c.lineCap = 'round';
  c.strokeStyle = '#555e3b';
  c.lineWidth = 2;
  c.beginPath();
  c.moveTo(128, 245);
  c.bezierCurveTo(114, 165, 143, 92, 128, 20);
  c.stroke();
  const count = needle ? 62 : 36;
  for (let i = 0; i < count; i++) {
    const side = i % 2 ? -1 : 1,
      y = 25 + i * (205 / count),
      x = 127 + side * (20 + r() * 59),
      size = needle ? 18 + r() * 8 : 24 + r() * 13;
    c.strokeStyle = '#667149';
    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(128, y + 22);
    c.lineTo(x, y);
    c.stroke();
    c.save();
    c.translate(x, y);
    c.rotate(side * 0.65 + (r() - 0.5) * 0.55);
    if (needle) c.scale(0.32, 1);
    const g = c.createLinearGradient(-size, 0, size, 0);
    g.addColorStop(0, '#485f3b');
    g.addColorStop(0.46, '#9baa79');
    g.addColorStop(1, '#637d49');
    c.fillStyle = '#789451';
    c.beginPath();
    c.moveTo(0, -size);
    c.lineTo(size * 0.6, -size * 0.22);
    c.lineTo(size * 0.48, size * 0.48);
    c.lineTo(0, size);
    c.lineTo(-size * 0.48, size * 0.48);
    c.lineTo(-size * 0.6, -size * 0.22);
    c.closePath();
    c.fill();
    c.fillStyle = '#506c3c';
    c.beginPath();
    c.moveTo(0, -size);
    c.lineTo(0, size);
    c.lineTo(-size * 0.48, size * 0.48);
    c.lineTo(-size * 0.6, -size * 0.22);
    c.closePath();
    c.fill();
    c.strokeStyle = '#bcc69b90';
    c.lineWidth = 0.7;
    c.beginPath();
    c.moveTo(0, -size * 0.85);
    c.lineTo(0, size * 0.9);
    c.stroke();
    c.restore();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

/** Leaf sprays distributed through irregular branch crowns, with holes in the silhouette. */
export function foliageGeometry(species, far = false, bush = false) {
  const r = rand(737 + species * 819 + (bush ? 200 : 0));
  const positions = [],
    uvs = [],
    colors = [],
    normals = [],
    details = [];
  const farCount = bush ? 70 : species === 1 ? 220 : 300;
  const count = bush
    ? far
      ? farCount
      : 150
    : species === 1
      ? far
        ? farCount
        : 520
      : far
        ? farCount
        : 720;
  const q = new THREE.Quaternion(),
    p = new THREE.Vector3(),
    normal = new THREE.Vector3(),
    v = new THREE.Vector3();
  const corners = [
    [-0.5, -0.5, 0, 0],
    [0.5, -0.5, 1, 0],
    [-0.5, 0.5, 0, 1],
    [0.5, -0.5, 1, 0],
    [0.5, 0.5, 1, 1],
    [-0.5, 0.5, 0, 1],
  ];
  for (let i = 0; i < count; i++) {
    const angle = r() * Math.PI * 2,
      u = r() * 2 - 1,
      rad = Math.sqrt(Math.max(0, 1 - u * u));
    let x, y, z, size;
    if (bush) {
      const s = Math.cbrt(r()) * 0.95;
      x = Math.cos(angle) * rad * s;
      z = Math.sin(angle) * rad * s;
      y = 0.65 + u * s * 0.65;
      size = 0.48 + r() * 0.35;
    } else if (species === 1) {
      y = 2 + r() * 6.4;
      const s = (8.7 - y) * 0.34 * Math.sqrt(r());
      x = Math.cos(angle) * s;
      z = Math.sin(angle) * s;
      size = 0.8 + r() * 0.45;
    } else {
      const birch = species === 2,
        cluster = i % 8,
        a = cluster * 2.399963,
        reach = birch ? 1.3 : 1.8,
        top = birch ? 6.2 : 5;
      const s = Math.cbrt(r()) * (birch ? 1.5 : 1.88);
      x = (cluster === 7 ? 0 : Math.cos(a) * reach) + Math.cos(angle) * rad * s;
      z = (cluster === 7 ? 0 : Math.sin(a) * reach) + Math.sin(angle) * rad * s;
      y = (cluster === 7 ? top + 1.25 : top - 0.7 + cluster * 0.32) + u * s * (birch ? 1.05 : 0.78);
      size = 0.78 + r() * 0.46;
    }
    q.setFromEuler(new THREE.Euler(r() * Math.PI * 2, r() * Math.PI * 2, r() * Math.PI * 2));
    normal.set(0, 0, 1).applyQuaternion(q);
    const tint = new THREE.Color(species === 2 ? '#e3e4c3' : bush ? '#b9c6a4' : '#c7d1b3');
    tint.multiplyScalar(0.77 + r() * 0.3);
    for (const [cx, cy, tu, tv] of corners) {
      v.set(cx * size, cy * size, 0).applyQuaternion(q);
      p.set(x, y, z).add(v);
      positions.push(p.x, p.y, p.z);
      uvs.push(tu, tv);
      colors.push(tint.r, tint.g, tint.b);
      normals.push(normal.x, normal.y, normal.z);
      details.push(i >= farCount ? 1 : 0);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  g.setAttribute('leafDetail', new THREE.Float32BufferAttribute(details, 1));
  g.computeBoundingSphere();
  return g;
}

export function naturalMaterial(kind) {
  const m = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: kind === 'rock' ? 0.97 : 0.92,
    flatShading: true,
  });
  m.onBeforeCompile = (shader) => {
    shader.vertexShader = 'varying vec3 vNaturalPos;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      '#include <begin_vertex>\nvNaturalPos=position;'
    );
    shader.fragmentShader =
      `varying vec3 vNaturalPos;
 float nHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
 float nNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(nHash(i),nHash(i+vec3(1,0,0)),f.x),mix(nHash(i+vec3(0,1,0)),nHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(nHash(i+vec3(0,0,1)),nHash(i+vec3(1,0,1)),f.x),mix(nHash(i+vec3(0,1,1)),nHash(i+1.),f.x),f.y),f.z);}
 ` + shader.fragmentShader;
    const pattern =
      kind === 'rock'
        ? `float fleck=nNoise(vNaturalPos*8.)*.6+nNoise(vNaturalPos*37.)*.25+nNoise(vNaturalPos*91.)*.15;diffuseColor.rgb*=.68+fleck*.55;float moss=smoothstep(.54,.74,nNoise(vNaturalPos*3.))*(1.-smoothstep(.05,.8,vNaturalPos.y));diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.11,.15,.065),moss*.27);`
        : `float barkFine=nNoise(vNaturalPos*vec3(42.,1.8,42.));float barkSoft=nNoise(vNaturalPos*vec3(13.,4.,13.));diffuseColor.rgb*=.84+barkFine*.2+barkSoft*.08;`;
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <color_fragment>',
      '#include <color_fragment>\n' + pattern
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <normal_fragment_maps>',
      `#include <normal_fragment_maps>
    float relief=nNoise(vNaturalPos*${kind === 'rock' ? '22.' : 'vec3(90.,4.,90.)'});
    vec3 dx=dFdx(-vViewPosition),dy=dFdy(-vViewPosition),r1=cross(dy,normal),r2=cross(normal,dx);
    float determinant=dot(dx,r1);
    normal=normalize(abs(determinant)*normal-sign(determinant)*(dFdx(relief)*r1+dFdy(relief)*r2)*${kind === 'rock' ? '.004' : '.0003'});
  `
    );
  };
  m.customProgramCacheKey = () => `vallon-natural-${kind}`;
  return m;
}

export function softenNormals(geometry) {
  const p = geometry.getAttribute('position'),
    n = geometry.getAttribute('normal'),
    sums = new Map();
  const k = (i) =>
    `${Math.round(p.getX(i) * 1e5)},${Math.round(p.getY(i) * 1e5)},${Math.round(p.getZ(i) * 1e5)}`;
  for (let i = 0; i < p.count; i++) {
    const key = k(i);
    let v = sums.get(key);
    if (!v) {
      v = new THREE.Vector3();
      sums.set(key, v);
    }
    v.x += n.getX(i);
    v.y += n.getY(i);
    v.z += n.getZ(i);
  }
  for (const v of sums.values()) v.normalize();
  for (let i = 0; i < p.count; i++) {
    const v = sums.get(k(i));
    n.setXYZ(i, v.x, v.y, v.z);
  }
  return geometry;
}

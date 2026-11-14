import { propMatrix, propTint } from './prop-variation.js';
import * as THREE from 'three';
import { distanceDissolve } from './nature.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// The rendered surface moves by at most 7 cm; gameplay keeps using the lake's
// fixed waterLevel, so swimming and shore collision remain stable.
export function waterWaveHeight(x, z, time) {
  return (
    Math.sin(x * 0.075 + z * 0.031 + time * 1.25) * 0.032 +
    Math.sin(x * -0.041 + z * 0.092 - time * 0.88) * 0.023 +
    Math.sin(x * 0.19 - z * 0.14 + time * 1.7) * 0.009
  );
}

const waterVertexShader = `
  uniform float time;
  attribute float waterDepth;
  varying vec3 vWorld;
  varying float vDepth;
  varying vec2 vWaterUv;
  varying vec4 vReflectionCoord;
  uniform mat4 uReflectionMatrix;
  float waveHeight(vec2 p,float t){
    return sin(p.x*.075+p.y*.031+t*1.25)*.032
      +sin(-p.x*.041+p.y*.092-t*.88)*.023
      +sin(p.x*.19-p.y*.14+t*1.7)*.009;
  }
  void main(){
    vec4 w=modelMatrix*vec4(position,1.);
    w.y+=waveHeight(w.xz,time);
    vWorld=w.xyz;
    vDepth=waterDepth;
    vWaterUv=uv;
    vReflectionCoord=uReflectionMatrix*vec4(w.xyz,1.);
    gl_Position=projectionMatrix*viewMatrix*w;
  }
`;

const waterFragmentShader = `
  varying vec3 vWorld;
  varying float vDepth;
  varying vec2 vWaterUv;
  uniform float time,dayLight,uHasReflection;
  uniform vec3 sunDir,fogColor;
  uniform vec4 uReflectionLake;
  uniform sampler2D uReflectionTex;
  varying vec4 vReflectionCoord;

  float waveHeight(vec2 p,float t){
    return sin(p.x*.075+p.y*.031+t*1.25)*.032
      +sin(-p.x*.041+p.y*.092-t*.88)*.023
      +sin(p.x*.19-p.y*.14+t*1.7)*.009;
  }
  float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float noise21(vec2 p){
    vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
    return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),
      mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.,1.)),f.x),f.y);
  }
  vec3 skyRadiance(vec3 ray){
    float up=clamp(ray.y*.5+.5,0.,1.);
    vec3 sky=mix(vec3(.56,.68,.76),vec3(.13,.34,.57),pow(up,.72));
    float haze=exp(-max(ray.y,0.)*7.);
    sky=mix(sky,vec3(.72,.79,.81),haze*.32);
    vec2 cloudP=ray.xz/(.22+max(ray.y,.025)*.9);
    float cloud=noise21(cloudP*2.1+vec2(time*.012,-time*.006));
    cloud=smoothstep(.55,.78,cloud)*(1.-smoothstep(.03,.7,ray.y));
    sky=mix(sky,vec3(.83,.87,.87),cloud*.48);
    float sunGlow=pow(max(dot(ray,normalize(sunDir)),0.),72.);
    sky+=vec3(1.,.78,.52)*sunGlow*.75;
    return sky;
  }
  void main(){
    if(length(vWaterUv-.5)>.5)discard;
    vec2 p=vWorld.xz;
    vec2 eps=vec2(.7,0.);
    float h=waveHeight(p,time);
    float dx=(waveHeight(p+eps.xy,time)-waveHeight(p-eps.xy,time))/(2.*eps.x);
    float dz=(waveHeight(p+eps.yx,time)-waveHeight(p-eps.yx,time))/(2.*eps.x);
    // Additional short ripples bend highlights without displacing the collision surface.
    dx+=cos(p.x*.51+p.y*.32+time*2.4)*.012;
    dz+=cos(-p.x*.37+p.y*.61-time*2.1)*.012;
    vec3 n=normalize(vec3(-dx,1.,-dz));
    vec3 view=normalize(cameraPosition-vWorld);
    vec3 ray=reflect(-view,n);
    float fresnel=.025+.975*pow(1.-max(dot(n,view),0.),5.);
    vec3 sky=skyRadiance(ray);
    vec2 reflectUv=vReflectionCoord.xy/max(vReflectionCoord.w,.0001);
    vec2 lakeDelta=(p-uReflectionLake.xy)/max(uReflectionLake.zw,vec2(1.));
    float inReflectionLake=1.-smoothstep(.96,1.04,length(lakeDelta));
    float inReflectionImage=step(0.,reflectUv.x)*step(reflectUv.x,1.)*
      step(0.,reflectUv.y)*step(reflectUv.y,1.)*step(.0001,vReflectionCoord.w);
    vec3 reflected=mix(sky,texture2D(uReflectionTex,reflectUv).rgb,
      uHasReflection*inReflectionLake*inReflectionImage);

    float depth=max(vDepth,0.);
    float deep=smoothstep(.15,5.5,depth);
    vec3 shallow=mix(vec3(.31,.55,.48),vec3(.055,.43,.47),smoothstep(.1,1.8,depth));
    vec3 bed=mix(shallow,vec3(.012,.115,.17),deep);
    float caustic=pow(max(0.,sin(p.x*.15+h*3.)*sin(p.y*.17-h*2.)),8.)*exp(-depth*.55);
    bed+=vec3(.15,.22,.13)*caustic;

    float rippleA=sin(p.x*.42+p.y*.19+time*1.3+h*3.);
    float rippleB=sin(-p.x*.16+p.y*.48-time*1.1);
    float ripple=smoothstep(.78,.98,rippleA*.58+rippleB*.42);
    vec3 water=mix(bed,reflected,.2+fresnel*.78);
    water=mix(water,vec3(.43,.68,.73),ripple*(.11+.23*fresnel));
    float spec=pow(max(dot(reflect(-normalize(sunDir),n),view),0.),150.);
    water+=vec3(1.,.88,.68)*spec*(.35+dayLight*.9);

    float shoreNoise=noise21(p*.19+vec2(time*.025,-time*.018));
    float shoreBand=1.-smoothstep(.16,.95,depth+(shoreNoise-.5)*.38+h*.7);
    float foamLine=smoothstep(.38,.78,sin(p.x*.12+p.y*.09+shoreNoise*3.5+time*.7));
    float foam=shoreBand*(.2+.48*foamLine);
    water=mix(water,vec3(.73,.82,.78),foam);

    water*=mix(.08,1.,dayLight);
    float d=length(cameraPosition-vWorld);
    water=mix(water,fogColor,1.-exp(-d*d*.00000008));
    gl_FragColor=vec4(water,1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

function distantTree(species) {
  const parts = [];
  const add = (g, color, pos) => {
    const source = g;
    g = g.toNonIndexed();
    source.dispose();
    g.deleteAttribute('uv');
    g.translate(...pos);
    const c = new THREE.Color(color),
      colors = [];
    for (let i = 0; i < g.attributes.position.count; i++) colors.push(c.r, c.g, c.b);
    g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    parts.push(g);
  };
  add(
    new THREE.CylinderGeometry(0.16, 0.24, 5, 5),
    species === 2 ? '#bcb9a6' : '#66523d',
    [0, 2.5, 0]
  );
  if (species === 1) parts.push(pineCrown(true));
  else
    for (let i = 0; i < 5; i++) {
      const g = new THREE.SphereGeometry(species === 2 ? 1.45 : 1.85, 7, 5);
      g.scale(1, species === 2 ? 1.12 : 0.83, 1);
      add(g, i % 2 ? '#64844e' : '#527044', [
        Math.sin(i * 2.4) * 1.25,
        4.8 + i * 0.42,
        Math.cos(i * 2.4) * 1.25,
      ]);
    }
  const g = mergeGeometries(parts);
  parts.forEach((p) => p.dispose());
  return g;
}

export function pineCrown(far = false) {
  const p = [],
    c = [];
  for (let i = 0; i < 8; i++) {
    const y = 2 + i * 0.73,
      r = (8.4 - y) * 0.36,
      geo = new THREE.ConeGeometry(r, 1.9, far ? 7 : 11, 1, false);
    const g = geo.toNonIndexed(),
      v = g.attributes.position,
      col = new THREE.Color(i % 2 ? '#496c3a' : '#3a5d35');
    for (let j = 0; j < v.count; j++) {
      const x = v.getX(j),
        z = v.getZ(j),
        w = 1 + Math.sin(x * 3 + z * 2 + i) * 0.085 + Math.cos(z * 5 - i) * 0.04;
      p.push(x * w + Math.sin(i * 2.3) * 0.1, v.getY(j) + y + 0.8, z * w);
      c.push(col.r, col.g, col.b);
    }
    g.dispose();
    geo.dispose();
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
  g.computeVertexNormals();
  return g;
}
function flowerGeometry(kind) {
  const p = [],
    c = [];
  const add = (g, x, y, z, color, angle = 0) => {
    const src = g.index ? g.toNonIndexed() : g;
    src.rotateY(angle);
    src.translate(x, y, z);
    const a = src.attributes.position,
      col = new THREE.Color(color);
    for (let i = 0; i < a.count; i++) {
      p.push(a.getX(i), a.getY(i), a.getZ(i));
      c.push(col.r, col.g, col.b);
    }
    if (src !== g) src.dispose();
    g.dispose();
  };
  add(
    new THREE.CylinderGeometry(0.007, 0.01, kind === 2 ? 0.65 : 0.43, 4),
    0,
    kind === 2 ? 0.325 : 0.215,
    0,
    '#456934'
  );
  for (let i = 0; i < 3; i++) {
    const g = new THREE.SphereGeometry(0.1, 4, 2);
    g.scale(0.33, 0.16, 1);
    g.rotateZ(0.5);
    add(g, Math.sin(i * 2.4) * 0.05, 0.1 + i * 0.09, Math.cos(i * 2.4) * 0.05, '#537b38', i * 2.4);
  }
  if (kind === 2 || kind === 4) {
    for (let j = 0; j < (kind === 4 ? 5 : 7); j++)
      for (let i = 0; i < 4; i++)
        add(
          new THREE.SphereGeometry(0.035 * (1 - j * 0.06), 5, 3),
          Math.sin(i * 1.57 + j) * 0.037,
          0.35 + j * 0.043,
          Math.cos(i * 1.57 + j) * 0.037,
          kind === 4 ? (j % 2 ? '#bd8f9e' : '#965d7f') : j % 2 ? '#9f8bc6' : '#7566a9'
        );
  } else if (kind === 5) {
    for (let i = 0; i < 3; i++) {
      const a = i * 2.4,
        g = new THREE.CylinderGeometry(0.014, 0.012, 0.8 + i * 0.07, 4);
      add(g, Math.sin(a) * 0.04, 0.4, Math.cos(a) * 0.04, '#7a8844');
      add(
        new THREE.CylinderGeometry(0.034, 0.026, 0.21, 5),
        Math.sin(a) * 0.04,
        0.82,
        Math.cos(a) * 0.04,
        '#867256'
      );
    }
  } else {
    const petals = kind === 3 ? 5 : kind ? 6 : 9;
    for (let i = 0; i < petals; i++) {
      const a = (i * Math.PI * 2) / petals,
        g = new THREE.SphereGeometry(kind === 3 ? 0.065 : 0.04, 5, 2);
      g.scale(0.65, 0.16, 1.5);
      add(
        g,
        Math.sin(a) * 0.062,
        0.435,
        Math.cos(a) * 0.062,
        kind === 3 ? '#c96b52' : kind ? '#edc950' : '#f5f0d6',
        a
      );
    }
    add(new THREE.SphereGeometry(0.027, 7, 3), 0, 0.445, 0, kind === 3 ? '#574536' : '#b89c34');
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
  g.computeVertexNormals();
  return g;
}
export class Landscape {
  constructor(scene, world, vegetation) {
    this.scene = scene;
    this.world = world;
    this.vegetation = vegetation;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.last = -99;
    this.count = 0;
    this.waterMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        dayLight: { value: 1 },
        sunDir: { value: new THREE.Vector3(-0.6, 0.27, -0.7) },
        fogColor: { value: scene.fog.color },
        uReflectionTex: { value: null },
        uReflectionMatrix: { value: new THREE.Matrix4() },
        uHasReflection: { value: 0 },
        uReflectionLake: { value: new THREE.Vector4(0, 0, 1, 1) },
      },
      vertexShader: waterVertexShader,
      fragmentShader: waterFragmentShader,
    });
    this.waters = (world.lakes || [world.lake]).map((p, i) => {
      const g = new THREE.PlaneGeometry(p.rx * 2, p.rz * 2, i ? 32 : 96, i ? 24 : 128);
      g.rotateX(-Math.PI / 2);
      const a = g.attributes.position,
        depth = [];
      for (let n = 0; n < a.count; n++)
        depth.push(p.level - world.height(a.getX(n) + p.x, a.getZ(n) + p.z));
      g.setAttribute('waterDepth', new THREE.Float32BufferAttribute(depth, 1));
      const mesh = new THREE.Mesh(g, this.waterMaterial);
      mesh.position.set(p.x, p.level, p.z);
      mesh.name = i ? 'Étang · berges et caustiques' : 'Grand lac · reflets animés';
      this.group.add(mesh);
      return mesh;
    });
    this.water = this.waters[0];
    const mg = new THREE.PlaneGeometry(10000, 4000, 180, 80);
    mg.rotateX(-Math.PI / 2);
    const v = mg.attributes.position,
      cols = [];
    for (let i = 0; i < v.count; i++) {
      const x = v.getX(i),
        z = v.getZ(i) - 3850;
      const broad = 240 + Math.sin(x / 630) * 95 + Math.cos(x / 370) * 75;
      const ridges = (1 - Math.abs(world.noise(x / 180 + 17, z / 180 + 31) * 2 - 1)) * 170;
      const edge = THREE.MathUtils.smoothstep(-z, 1850, 2400);
      const h = (broad + ridges + world.noise(x / 520, z / 430) * 240) * edge;
      v.setXYZ(i, x, h - 12, z);
      const col = new THREE.Color('#697f8d').lerp(
        new THREE.Color('#c1cbd0'),
        THREE.MathUtils.smoothstep(h, 420, 620) * 0.68
      );
      cols.push(col.r, col.g, col.b);
    }
    mg.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    mg.computeVertexNormals();
    const mm = new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: true,
      roughness: 1,
    });
    const mountain = new THREE.Mesh(mg, mm);
    mountain.name = 'Massifs lointains · relief large';
    this.group.add(mountain);
    this.flowerMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: true,
      side: THREE.DoubleSide,
      roughness: 0.9,
    });
    this.flowerMaterial.onBeforeCompile = (s) => {
      s.uniforms.windTime = this.waterMaterial.uniforms.time;
      s.vertexShader = 'uniform float windTime;varying float flowerFade;\n' + s.vertexShader;
      s.vertexShader = s.vertexShader.replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\nvec3 root=(modelMatrix*instanceMatrix*vec4(0.,0.,0.,1.)).xyz;transformed.x+=sin(windTime*1.5+root.x*.3)*position.y*position.y*.06;flowerFade=1.-smoothstep(30.,43.,length(root.xz-cameraPosition.xz));'
      );
      s.fragmentShader = 'varying float flowerFade;\n' + s.fragmentShader;
      s.fragmentShader = s.fragmentShader.replace(
        '#include <color_fragment>',
        '#include <color_fragment>\nif(fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)>flowerFade)discard;'
      );
    };
    this.flowers = [0, 1, 2, 3, 4, 5].map((k) => {
      const mesh = new THREE.InstancedMesh(flowerGeometry(k), this.flowerMaterial, 900);
      mesh.count = 0;
      mesh.receiveShadow = true;
      this.group.add(mesh);
      return mesh;
    });
    // Distant forest: a single cheap instanced silhouette batch, culled individually
    // before drawing. It stays beyond the detailed vegetation's outer range.
    this.treeMaterial = distanceDissolve(
      new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 1 }),
      vegetation.propRange,
      true
    );
    this.forests = [0, 1, 2].map((species) => {
      const m = new THREE.InstancedMesh(distantTree(species), this.treeMaterial, 6500);
      m.count = 0;
      this.group.add(m);
      return m;
    });
    this.forestSphere = new THREE.Sphere(new THREE.Vector3(), 12);
    this.forest = this.forests[1];
    this.forestRecords = [];
    this.forestIndex = 0;
    this.forestQueue = null;
    this.forestLast = -99;
  }
  update(camera, time, sunDir) {
    this.waterMaterial.uniforms.time.value = time;
    this.waterMaterial.uniforms.sunDir.value.copy(sunDir);
    const m = new THREE.Matrix4(),
      q = new THREE.Quaternion(),
      v = new THREE.Vector3(),
      sc = new THREE.Vector3();
    // Sampling is spread across frames; no large blocking forest-generation pass.
    if (!this.forestQueue) {
      this.forestQueue = Array.from({ length: 3600 }, (_, i) => ({
        x: (i % 60) - 30,
        z: Math.floor(i / 60) - 30,
      })).sort(
        (a, b) =>
          Math.hypot(a.x * 40 - camera.position.x, a.z * 40 - camera.position.z) -
          Math.hypot(b.x * 40 - camera.position.x, b.z * 40 - camera.position.z)
      );
    }
    const forestStart = performance.now();
    for (
      let b = 0;
      b < 32 && this.forestIndex < 3600 && performance.now() - forestStart < 3;
      b++, this.forestIndex++
    ) {
      const { x, z } = this.forestQueue[this.forestIndex];
      this.forestRecords.push(...this.vegetation.distantTrees(x, z));
    }
    if (time - this.forestLast > 1.2) {
      this.forestLast = time;
      const counts = [0, 0, 0];
      for (const r of this.forestRecords) {
        const d = Math.hypot(r.x - camera.position.x, r.z - camera.position.z),
          k = r.prototype;
        if (
          d < this.vegetation.config.propRange - 20 ||
          d > { high: 1700, medium: 1400, low: 1050 }[this.vegetation.quality] ||
          counts[k] >= { high: 6500, medium: 4500, low: 2500 }[this.vegetation.quality] ||
          this.vegetation.harvested.has(r.id)
        )
          continue;
        this.forestSphere.center.set(r.x, r.baseY + 4, r.z);
        this.forestSphere.radius = 15 * r.scale;
        if (!this.vegetation.frustum.intersectsSphere(this.forestSphere)) continue;
        propMatrix(r, m);
        const slot = counts[k]++;
        this.forests[k].setMatrixAt(slot, m);
        this.forests[k].setColorAt(slot, propTint(r, new THREE.Color(), true));
      }
      this.forests.forEach((f, i) => {
        f.count = counts[i];
        f.instanceMatrix.needsUpdate = true;
        if (f.instanceColor) f.instanceColor.needsUpdate = true;
        f.computeBoundingSphere();
      });
    }
    if (time - this.last < 0.6) return;
    this.last = time;
    const counts = [0, 0, 0, 0, 0, 0];
    for (const cell of this.vegetation.grassCells.values())
      for (const r of cell.records) {
        const patch = this.world.noise(r.x / 55 + 74, r.z / 55 - 81);
        if (
          r.hue > (0.006 + Math.pow(patch, 3) * 0.22) * (1 - (r.canopy || 0) * 0.94) ||
          Math.hypot(r.x - camera.position.x, r.z - camera.position.z) > 43 ||
          Math.abs(this.world.displacement(r.x, r.z)) > 0.12 ||
          this.vegetation.covered?.(r.x, r.z, this.world.height(r.x, r.z))
        )
          continue;
        const choice = r.yaw / 6.283185,
          kind =
            r.biome === 'wetland' || (r.biome === 'shore' && choice < 0.65)
              ? 5
              : r.biome === 'heath'
                ? choice < 0.65
                  ? 4
                  : 2
                : r.biome === 'steppe'
                  ? choice < 0.3
                    ? 3
                    : 1
                  : choice < 0.12
                    ? 2
                    : choice < 0.35
                      ? 1
                      : choice < 0.42
                        ? 3
                        : 0,
          i = counts[kind];
        if (i >= 900) continue;
        q.setFromAxisAngle(THREE.Object3D.DEFAULT_UP, r.yaw);
        v.set(r.x, this.world.height(r.x, r.z), r.z);
        sc.set(
          (0.65 + r.hue * 0.5) * (0.8 + r.scale * 0.6),
          (0.65 + (r.yaw % 1) * 0.6) * (0.8 + r.scale * 0.6),
          (0.75 + r.hue * 0.35) * (0.8 + r.scale * 0.6)
        );
        m.compose(v, q, sc);
        this.flowers[kind].setMatrixAt(i, m);
        counts[kind]++;
      }
    this.count = counts.reduce((a, b) => a + b, 0);
    this.flowers.forEach((f, i) => {
      f.count = counts[i];
      f.instanceMatrix.needsUpdate = true;
      if (f.instanceColor) f.instanceColor.needsUpdate = true;
      f.computeBoundingSphere();
    });
  }
  dispose() {
    this.group.traverse((o) => {
      if (o.isMesh) {
        o.geometry.dispose();
        if (o.isInstancedMesh) o.dispose();
      }
    });
    this.flowerMaterial.dispose();
    this.treeMaterial.dispose();
    this.waterMaterial.dispose();
    this.group.children.find((o) => o.name.startsWith('Massifs'))?.material.dispose();
    this.scene.remove(this.group);
  }
}

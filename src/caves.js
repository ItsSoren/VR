import * as THREE from 'three';
import { Player } from './player.js';
import { softenNormals } from './nature.js';

const CHUNK = 12,
  STEP = 1.5,
  CELLS = 8;
const TETS = [
  [0, 5, 1, 6],
  [0, 1, 2, 6],
  [0, 2, 3, 6],
  [0, 3, 7, 6],
  [0, 7, 4, 6],
  [0, 4, 5, 6],
];
const CORNERS = [
  [0, 0, 0],
  [1, 0, 0],
  [1, 0, 1],
  [0, 0, 1],
  [0, 1, 0],
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
];
const EDGES = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 2],
  [1, 3],
  [2, 3],
];
const key = (x, y, z) => `${x},${y},${z}`;
const smooth = (a, b, v) => THREE.MathUtils.smoothstep(v, a, b);

/** Positive scalar values are air. Meshing, mining and collision query this same
 * field; local spherical excavations can create tunnels, arches and overhangs. */
export class CaveField {
  constructor(seed = 1427, noise) {
    this.seed = seed;
    this.noise =
      noise ||
      ((x, z) => ((Math.sin(x * 12.9898 + z * 78.233 + seed) * 43758.5453) % 1) * 0.5 + 0.5);
    this.rooms = [
      [0, 0, 24, 27, 19],
      [0, -43, 14, 18, 11],
      [-32, -76, 25, 25, 22],
      [32, -88, 28, 26, 26],
      [-54, -120, 24, 26, 30],
      [31, -139, 28, 24, 23],
      [63, -43, 19, 22, 17],
      [-61, -33, 20, 23, 16],
    ].map(([x, z, rx, rz, h], i) => ({ x, z, rx: rx * (0.92 + this.noise(i, 72) * 0.16), rz, h }));
    this.links = [
      [0, 1],
      [1, 2],
      [1, 3],
      [2, 4],
      [3, 5],
      [3, 6],
      [0, 7],
      [4, 5],
    ];
    this.edits = [];
    this.editBuckets = new Map();
    this.revision = 0;
    this.spawn = { x: 0, z: 7 };
    this.formations = [];
    this.formBuckets = new Map();
    const distanceToLinks = (x, z) =>
      Math.min(
        ...this.links.map(([a, b]) => {
          const A = this.rooms[a],
            B = this.rooms[b],
            vx = B.x - A.x,
            vz = B.z - A.z,
            t = THREE.MathUtils.clamp(
              ((x - A.x) * vx + (z - A.z) * vz) / (vx * vx + vz * vz),
              0,
              1
            );
          return Math.hypot(x - A.x - vx * t, z - A.z - vz * t);
        })
      );
    const crystals = [
      [8, -5],
      [-18, -77],
      [42, -87],
      [-48, -121],
      [20, -141],
      [60, -45],
    ];
    const add = (f) => {
      this.formations.push(f);
      for (
        let z = Math.floor((f.z - f.r - 1) / CHUNK);
        z <= Math.floor((f.z + f.r + 1) / CHUNK);
        z++
      )
        for (
          let x = Math.floor((f.x - f.r - 1) / CHUNK);
          x <= Math.floor((f.x + f.r + 1) / CHUNK);
          x++
        ) {
          const k = `${x},${z}`;
          if (!this.formBuckets.has(k)) this.formBuckets.set(k, []);
          this.formBuckets.get(k).push(f);
        }
    };
    this.rooms.forEach((room, i) => {
      for (let j = 0; j < 8; j++) {
        const a = (j * Math.PI) / 4 + this.noise(i, j + 54) * 0.45,
          x = room.x + Math.sin(a) * room.rx * 0.62,
          z = room.z + Math.cos(a) * room.rz * 0.62,
          floor = this.floor(x, z);
        const roof = floor + room.h * Math.sqrt(1 - 0.62 * 0.62);
        add({
          x,
          z,
          bottom: roof - 2 - this.noise(i, j + 101) * 3.6,
          top: roof + 0.7,
          r: 0.65 + this.noise(i, j + 7) * 0.7,
          hanging: true,
        });
        if (
          distanceToLinks(x, z) > 6 &&
          crystals.every(([cx, cz]) => Math.hypot(x - cx, z - cz) > 3) &&
          Math.hypot(x, z - 7) > 10
        )
          add({
            x,
            z,
            bottom: floor - 0.3,
            top: floor + 2.4 + this.noise(i, j + 90) * 3.1,
            r: 0.8 + this.noise(i, j + 65) * 1.1,
            hanging: false,
          });
      }
    });
  }
  floor(x, z) {
    return Math.sin(x / 45) * 1.2 + Math.sin(z / 60) * 1.1 - smooth(60, 145, -z) * 3.5;
  }
  density(x, y, z) {
    const floor = this.floor(x, z);
    let air = -100;
    // Broad domed chambers with gently descending floors, connected by galleries.
    for (const r of this.rooms) {
      const q = Math.hypot((x - r.x) / r.rx, (z - r.z) / r.rz);
      if (q > 1.25) continue;
      const wall = (1 - q) * Math.min(r.rx, r.rz),
        roof = floor + r.h * Math.sqrt(Math.max(0, 1 - q * q));
      air = Math.max(air, Math.min(wall, roof - y));
    }
    for (const [a, b] of this.links) {
      const A = this.rooms[a],
        B = this.rooms[b],
        vx = B.x - A.x,
        vz = B.z - A.z;
      const t = THREE.MathUtils.clamp(
        ((x - A.x) * vx + (z - A.z) * vz) / (vx * vx + vz * vz),
        0,
        1
      );
      const d = Math.hypot(x - A.x - vx * t, z - A.z - vz * t),
        radius = 4.2 + Math.sin(t * Math.PI) * 1.4;
      air = Math.max(air, Math.min(radius - d, floor + 6.5 + Math.cos(t * Math.PI * 2) * 0.4 - y));
    }
    if (air > -3 && y > floor + 0.7) {
      air += (this.noise(x * 0.38 + y * 0.05, z * 0.38) - 0.5) * 0.65;
    }
    air = Math.min(air, y - floor);
    for (const f of this.formBuckets.get(`${Math.floor(x / CHUNK)},${Math.floor(z / CHUNK)}`) ||
      []) {
      const t = THREE.MathUtils.clamp((y - f.bottom) / (f.top - f.bottom), 0, 1),
        radius = f.r * (f.hanging ? t : 1 - t);
      const solid = Math.max(Math.hypot(x - f.x, z - f.z) - radius, f.bottom - y, y - f.top);
      air = Math.min(air, solid);
    }
    for (const e of this.editBuckets.get(
      key(Math.floor(x / CHUNK), Math.floor(y / CHUNK), Math.floor(z / CHUNK))
    ) || []) {
      air = Math.max(air, e[3] - Math.hypot(x - e[0], y - e[1], z - e[2]));
    }
    return Math.min(air, 100 - Math.abs(x), z + 168, 36 - z, y + 17, 36 - y);
  }
  materialAt(x, y, z) {
    const n = this.noise(x * 0.23 + y * 0.09 + 48, z * 0.23 + 36),
      fine = this.noise(x * 0.52 + 9, z * 0.52 + y * 0.13);
    if (z < -95 && n > 0.78 && fine > 0.59) return 'diamond';
    if (n > 0.73) return 'iron';
    if (n > 0.66) return 'copper';
    if (n > 0.59) return 'coal';
    return z < -75 || y < this.floor(x, z) - 3 ? 'deepstone' : 'stone';
  }
  layerTier(x, y, z) {
    return z < -75 || y < this.floor(x, z) - 3 ? 3 : 2;
  }
  mine(point, direction, radius = 1.85) {
    if (this.edits.length >= 500) return null;
    const c = point.clone().addScaledVector(direction, 0.65);
    if (
      this.density(c.x, c.y, c.z) > -0.03 ||
      Math.abs(c.x) > 95 ||
      c.z < -162 ||
      c.z > 30 ||
      c.y < -12 ||
      c.y > 31
    )
      return null;
    const e = [c.x, c.y, c.z, THREE.MathUtils.clamp(radius, 1.6, 2.4)];
    this.edits.push(e);
    this.indexEdit(e);
    this.revision++;
    return e;
  }
  indexEdit(e) {
    const r = e[3] + 3;
    for (let y = Math.floor((e[1] - r) / CHUNK); y <= Math.floor((e[1] + r) / CHUNK); y++)
      for (let z = Math.floor((e[2] - r) / CHUNK); z <= Math.floor((e[2] + r) / CHUNK); z++)
        for (let x = Math.floor((e[0] - r) / CHUNK); x <= Math.floor((e[0] + r) / CHUNK); x++) {
          const k = key(x, y, z);
          if (!this.editBuckets.has(k)) this.editBuckets.set(k, []);
          this.editBuckets.get(k).push(e);
        }
  }
  restore(data) {
    this.edits = Array.isArray(data)
      ? data
          .slice(0, 500)
          .filter(
            (e) =>
              Array.isArray(e) &&
              e.length === 4 &&
              e.every(Number.isFinite) &&
              Math.abs(e[0]) <= 95 &&
              e[1] >= -12 &&
              e[1] <= 31 &&
              e[2] >= -162 &&
              e[2] <= 30 &&
              e[3] >= 1.6 &&
              e[3] <= 2.4
          )
          .map((e) => e.slice())
      : [];
    this.editBuckets.clear();
    this.edits.forEach((e) => this.indexEdit(e));
    this.revision++;
  }
  raycast(origin, direction, max = 7) {
    let a = 0;
    for (let d = 0.1; d <= max; d += 0.1) {
      const p = origin.clone().addScaledVector(direction, d);
      if (this.density(p.x, p.y, p.z) <= 0) {
        let b = d;
        for (let i = 0; i < 8; i++) {
          const m = (a + b) / 2,
            q = origin.clone().addScaledVector(direction, m);
          if (this.density(q.x, q.y, q.z) > 0) a = m;
          else b = m;
        }
        const point = origin.clone().addScaledVector(direction, b);
        return {
          kind: 'cave',
          point,
          distance: b,
          material: this.materialAt(point.x, point.y, point.z),
          tier: this.layerTier(point.x, point.y, point.z),
        };
      }
      a = d;
    }
    return null;
  }
  fits(x, y, z, r = 0.27, h = 1.7) {
    for (const dy of [0.16, 0.9, h - 0.05]) {
      if (this.density(x, y + dy, z) < 0) return false;
      for (let i = 0; i < 8; i++) {
        const a = (i * Math.PI) / 4;
        if (this.density(x + Math.cos(a) * r, y + dy, z + Math.sin(a) * r) < 0) return false;
      }
    }
    return true;
  }
  support(x, z, start) {
    let a = start;
    for (let y = start; y > start - 15; y -= 0.15) {
      if (this.density(x, y, z) <= 0) {
        let b = y;
        for (let i = 0; i < 10; i++) {
          const m = (a + b) / 2;
          if (this.density(x, m, z) > 0) a = m;
          else b = m;
        }
        return (a + b) / 2;
      }
      a = y;
    }
    return -17;
  }
}

export class CavePlayer extends Player {
  constructor(camera, field) {
    super(camera, { spawn: field.spawn, height: (x, z) => field.floor(x, z) });
    this.field = field;
  }
  _height(x, z) {
    return this.field ? this.field.support(x, z, this.position.y + 0.33) : super._height(x, z);
  }
  _canMove(x, z, oldX, oldZ) {
    return (
      this.field.fits(x, this.position.y, z, this.radius, this.bodyHeight) &&
      super._canMove(x, z, oldX, oldZ)
    );
  }
  _step(dt, x, z) {
    const old = this.position.y;
    super._step(dt, x, z);
    if (
      this.position.y > old &&
      !this.field.fits(this.position.x, this.position.y, this.position.z)
    ) {
      this.position.y = old;
      this.velocity.y = 0;
    }
  }
  teleport(x, z) {
    super.teleport(x, z);
    if (this.field) {
      this.position.y = this.field.floor(x, z);
      this.syncCamera();
    }
  }
}

function chunkGeometry(field, cx, cy, cz) {
  const values = new Float32Array(729),
    idx = (x, y, z) => (y * 9 + z) * 9 + x;
  for (let y = 0; y <= CELLS; y++)
    for (let z = 0; z <= CELLS; z++)
      for (let x = 0; x <= CELLS; x++)
        values[idx(x, y, z)] = field.density(cx + x * STEP, cy + y * STEP, cz + z * STEP);
  const positions = [],
    colors = [],
    palette = {
      stone: '#7c807f',
      deepstone: '#3f4654',
      coal: '#353b42',
      iron: '#ae8060',
      copper: '#ae7950',
      diamond: '#75d6dd',
    };
  for (let y = 0; y < CELLS; y++)
    for (let z = 0; z < CELLS; z++)
      for (let x = 0; x < CELLS; x++) {
        const vs = CORNERS.map(([dx, dy, dz]) => values[idx(x + dx, y + dy, z + dz)]);
        if (vs.every((v) => v >= 0) || vs.every((v) => v < 0)) continue;
        const ps = CORNERS.map(
          ([dx, dy, dz]) =>
            new THREE.Vector3(cx + (x + dx) * STEP, cy + (y + dy) * STEP, cz + (z + dz) * STEP)
        );
        for (const ids of TETS) {
          const intersections = [],
            air = new THREE.Vector3();
          let airN = 0;
          for (const i of ids)
            if (vs[i] > 0) {
              air.add(ps[i]);
              airN++;
            }
          if (!airN || airN === 4) continue;
          air.divideScalar(airN);
          for (const [i, j] of EDGES) {
            const a = ids[i],
              b = ids[j];
            if (vs[a] > 0 === vs[b] > 0) continue;
            intersections.push(ps[a].clone().lerp(ps[b], vs[a] / (vs[a] - vs[b])));
          }
          if (intersections.length < 3) continue;
          const center = intersections
              .reduce((v, p) => v.add(p), new THREE.Vector3())
              .divideScalar(intersections.length),
            normal = air.sub(center).normalize();
          const u = intersections[0].clone().sub(center).normalize(),
            v = new THREE.Vector3().crossVectors(normal, u).normalize();
          intersections.sort(
            (a, b) =>
              Math.atan2(a.clone().sub(center).dot(v), a.clone().sub(center).dot(u)) -
              Math.atan2(b.clone().sub(center).dot(v), b.clone().sub(center).dot(u))
          );
          for (let i = 1; i < intersections.length - 1; i++) {
            const tri = [intersections[0], intersections[i], intersections[i + 1]];
            const n = new THREE.Vector3().crossVectors(
              tri[1].clone().sub(tri[0]),
              tri[2].clone().sub(tri[0])
            );
            if (n.dot(normal) < 0) [tri[1], tri[2]] = [tri[2], tri[1]];
            for (const p of tri) {
              positions.push(p.x, p.y, p.z);
              const ore = field.noise(p.x * 0.23 + p.y * 0.09 + 48, p.z * 0.23 + 36),
                col = new THREE.Color(
                  palette[field.layerTier(p.x, p.y, p.z) > 2 ? 'deepstone' : 'stone']
                );
              col.lerp(new THREE.Color(palette.coal), smooth(0.56, 0.61, ore));
              col.lerp(new THREE.Color(palette.copper), smooth(0.64, 0.69, ore));
              col.lerp(new THREE.Color(palette.iron), smooth(0.71, 0.76, ore));
              if (field.materialAt(p.x, p.y, p.z) === 'diamond')
                col.lerp(new THREE.Color(palette.diamond), 0.8);
              col.multiplyScalar(0.85 + field.noise(p.x * 0.8, p.z * 0.8) * 0.25);
              colors.push(col.r, col.g, col.b);
            }
          }
        }
      }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  g.computeVertexNormals();
  g.computeBoundingSphere();
  return positions.length ? softenNormals(g) : g;
}

export class Caves {
  constructor(scene, world) {
    this.scene = scene;
    this.field = new CaveField(world.seed, world.noise);
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);
    this.chunks = new Map();
    this.queue = [];
    this.planAt = -99;
    this.lastPosition = new THREE.Vector3(Infinity, 0, 0);
    this.stats = { chunks: 0, queued: 0, triangles: 0, edits: 0 };
    this.material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.94,
      side: THREE.DoubleSide,
    });
    this.material.onBeforeCompile = (s) => {
      s.vertexShader = 'varying vec3 rockPosition;\n' + s.vertexShader;
      s.vertexShader = s.vertexShader.replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\nrockPosition=position;'
      );
      s.fragmentShader = 'varying vec3 rockPosition;\n' + s.fragmentShader;
      s.fragmentShader = s.fragmentShader.replace(
        '#include <color_fragment>',
        '#include <color_fragment>\nfloat grain=fract(sin(dot(floor(rockPosition*55.),vec3(12.9,78.2,45.1)))*43758.54);diffuseColor.rgb*=.9+grain*.2;'
      );
    };
    this.crystals = [];
    this.removed = new Set();
    for (const [i, x, z] of [
      [0, 8, -5],
      [1, -18, -77],
      [2, 42, -87],
      [3, -48, -121],
      [4, 20, -141],
      [5, 60, -45],
    ]) {
      const group = new THREE.Group(),
        mat = new THREE.MeshStandardMaterial({
          color: i % 2 ? '#68bfc6' : '#a595df',
          emissive: i % 2 ? '#2b8d9c' : '#7364b8',
          emissiveIntensity: 0.45,
          roughness: 0.28,
          metalness: 0.22,
        });
      for (let j = 0; j < 7; j++) {
        const geo = new THREE.CylinderGeometry(0, 0.13 + (j % 3) * 0.04, 0.7 + (j % 4) * 0.22, 6),
          mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(Math.sin(j * 2.4) * 0.4, 0.3 + (j % 4) * 0.1, Math.cos(j * 2.4) * 0.4);
        mesh.rotation.z = Math.sin(j * 3) * 0.3;
        group.add(mesh);
      }
      const y = this.field.floor(x, z);
      group.position.set(x, y, z);
      group.userData = { id: `crystal:${i}`, x, y, z };
      this.group.add(group);
      this.crystals.push(group);
    }
    this.glow = new THREE.PointLight('#80bbd4', 22, 22, 2);
    this.group.add(this.glow);
    const exit = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.15, 6, 16),
      new THREE.MeshStandardMaterial({
        color: '#b4c9a3',
        emissive: '#96c7aa',
        emissiveIntensity: 0.5,
      })
    );
    exit.position.set(0, 2, 16);
    this.group.add(exit);
  }
  setRemoved(ids) {
    this.removed = new Set(Array.isArray(ids) ? ids : []);
    this.crystals.forEach((g) => (g.visible = !this.removed.has(g.userData.id)));
  }
  harvestCrystal(id) {
    const g = this.crystals.find((g) => g.userData.id === id);
    if (!g || this.removed.has(id)) return false;
    this.removed.add(id);
    g.visible = false;
    return true;
  }
  target(origin, direction) {
    let best = this.field.raycast(origin, direction);
    const ray = new THREE.Ray(origin, direction),
      p = new THREE.Vector3();
    for (const g of this.crystals) {
      if (!g.visible) continue;
      const d = g.userData,
        b = new THREE.Box3(
          new THREE.Vector3(d.x - 0.6, d.y, d.z - 0.6),
          new THREE.Vector3(d.x + 0.6, d.y + 1.4, d.z + 0.6)
        );
      if (ray.intersectBox(b, p)) {
        const distance = p.distanceTo(origin);
        if (distance < 7 && (!best || distance < best.distance))
          best = {
            kind: 'crystal',
            material: 'crystal',
            tier: 3,
            id: d.id,
            point: p.clone(),
            distance,
          };
      }
    }
    return best;
  }
  invalidate(edit) {
    const [x, y, z, r] = edit;
    for (const c of this.chunks.values())
      if (
        c.x < x + r + STEP &&
        c.x + CHUNK > x - r - STEP &&
        c.y < y + r + STEP &&
        c.y + CHUNK > y - r - STEP &&
        c.z < z + r + STEP &&
        c.z + CHUNK > z - r - STEP
      )
        c.dirty = true;
  }
  update(camera, time) {
    const p = camera.position;
    if (time - this.planAt > 0.6 || p.distanceToSquared(this.lastPosition) > 64) {
      this.planAt = time;
      this.lastPosition.copy(p);
      this.queue = [];
      for (let y = -2; y < 3; y++)
        for (let z = -14; z < 3; z++)
          for (let x = -9; x < 9; x++) {
            const cx = x * CHUNK,
              cy = y * CHUNK,
              cz = z * CHUNK,
              d = Math.hypot(cx + 6 - p.x, (cy + 6 - p.y) * 0.6, cz + 6 - p.z),
              k = key(x, y, z);
            if (d > 62) continue;
            const existing = this.chunks.get(k);
            if (existing && !existing.dirty) continue;
            this.queue.push({ k, x: cx, y: cy, z: cz, d, dirty: existing?.dirty });
          }
      this.queue.sort((a, b) => Number(b.dirty) - Number(a.dirty) || a.d - b.d);
      for (const [k, c] of this.chunks)
        if (Math.hypot(c.x + 6 - p.x, c.z + 6 - p.z) > 85) {
          this.group.remove(c.mesh);
          c.mesh.geometry.dispose();
          this.chunks.delete(k);
        }
    }
    const start = performance.now();
    let builds = 0;
    while (this.queue.length && builds < 2 && performance.now() - start < 6) {
      const c = this.queue.shift(),
        old = this.chunks.get(c.k),
        g = chunkGeometry(this.field, c.x, c.y, c.z);
      if (old) {
        this.group.remove(old.mesh);
        old.mesh.geometry.dispose();
      }
      const mesh = new THREE.Mesh(g, this.material);
      mesh.visible = g.attributes.position.count > 0;
      mesh.receiveShadow = true;
      mesh.name = 'Roche volumétrique · galerie';
      this.group.add(mesh);
      this.chunks.set(c.k, { ...c, mesh, dirty: false });
      builds++;
    }
    let triangles = 0;
    for (const c of this.chunks.values())
      triangles += c.mesh.geometry.attributes.position.count / 3;
    const nearest = this.crystals
      .filter((g) => g.visible)
      .sort((a, b) => a.position.distanceToSquared(p) - b.position.distanceToSquared(p))[0];
    if (nearest) this.glow.position.copy(nearest.position).add(new THREE.Vector3(0, 1.7, 0));
    this.glow.visible = !!nearest;
    this.stats = {
      chunks: this.chunks.size,
      queued: this.queue.length,
      triangles,
      edits: this.field.edits.length,
    };
  }
  dispose() {
    this.group.traverse((o) => {
      if (o.isMesh) {
        o.geometry.dispose();
        if (o.material !== this.material) o.material.dispose();
      }
    });
    this.material.dispose();
    this.scene.remove(this.group);
    this.chunks.clear();
  }
}

import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { SPECIES, night, weapon } from './adventure.js';

const MAX_ACTIVE = 48,
  CELL = 56,
  RESPAWN = 600,
  FEED_DELAY = 30,
  WOOL_DELAY = 180;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const hash = (text) => {
  let h = 2166136261;
  for (const c of String(text)) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  h = Math.imul(h ^ (h >>> 16), 0x7feb352d);
  h = Math.imul(h ^ (h >>> 15), 0x846ca68b);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
};
const overlap = (x, z, r, c) =>
  c.type === 'block'
    ? Math.hypot(
        Math.max(0, Math.abs(x - c.x) - (c.width || 1) / 2),
        Math.max(0, Math.abs(z - c.z) - (c.depth || 1) / 2)
      ) < r
    : Math.hypot(x - c.x, z - c.z) < r + (c.radius || 0);

/** Bounded nearby simulation. Dormant cells have no meshes or update cost. */
export class Ecology {
  constructor(world, field, obstacles = () => [], saved) {
    this.world = world;
    this.field = field;
    this.obstacles = obstacles;
    this.active = new Map();
    this.memory = new Map();
    this.events = [];
    this.scan = 0;
    this.cave = false;
    this.time = 0;
    if (Array.isArray(saved))
      for (const s of saved.slice(-4096))
        if (
          s &&
          typeof s.id === 'string' &&
          SPECIES[s.species] &&
          [s.x, s.z, s.hp, s.trust, s.fed, s.wool, s.dead].every(Number.isFinite)
        )
          this.memory.set(s.id, { ...s });
  }
  floor(x, z, cave = this.cave) {
    return cave ? this.field.support(x, z, this.field.floor(x, z) + 0.4) : this.world.height(x, z);
  }
  safe(x, z) {
    return [this.world.spawn, this.world.panorama].some(
      (p) => p && Math.hypot(x - p.x, z - p.z) < 42
    );
  }
  valid(x, z, species, cave = this.cave) {
    const s = SPECIES[species],
      y = this.floor(x, z, cave);
    if (!Number.isFinite(y) || Math.abs(x) > 1445 || Math.abs(z) > 1445) return false;
    if (cave) {
      if (!this.field.fits(x, y, z, s.radius, s.height)) return false;
    } else {
      const sample = this.world.sample(x, z),
        water = this.world.waterLevel?.(x, z);
      if (sample.slope > (s.maxSlope || 0.65) || (Number.isFinite(water) && y < water + 0.1))
        return false;
    }
    return !this.obstacles(x, z, s.radius + 1, cave).some(
      (c) =>
        overlap(x, z, s.radius, c) &&
        y < (c.y ?? c.baseY ?? 0) + (c.height || 1) &&
        y + s.height > (c.y ?? c.baseY ?? 0)
    );
  }
  spawn(id, species, x, z) {
    if (this.active.has(id) || this.active.size >= MAX_ACTIVE || !this.valid(x, z, species)) return;
    const s = SPECIES[species],
      old = this.memory.get(id);
    if (old?.dead > 0 && this.time - old.dead < RESPAWN) return;
    let e = {
      id,
      species,
      x,
      z,
      y: this.floor(x, z),
      homeX: x,
      homeZ: z,
      hp: s.hp,
      trust: 0,
      fed: -999,
      wool: -999,
      dead: 0,
      yaw: hash(id) * Math.PI * 2,
      mode: 'idle',
      timer: hash(id + 't') * 2 + 1,
      alert: 0,
      hit: 0,
      walk: 0,
      attackId: 0,
    };
    if (old && !old.dead) {
      e = { ...e, ...old };
      if (!this.valid(e.x, e.z, species)) {
        e.x = x;
        e.z = z;
        e.y = this.floor(x, z);
      }
    }
    e.mode = 'idle';
    e.timer = 1 + hash(id) * 2;
    e.cave = this.cave;
    this.active.set(id, e);
  }
  remember(e) {
    this.memory.delete(e.id);
    this.memory.set(e.id, this.record(e));
    while (this.memory.size > 4096) this.memory.delete(this.memory.keys().next().value);
  }
  record(e) {
    const { id, species, x, z, homeX, homeZ, hp, trust, fed, wool, dead, cave } = e;
    return { id, species, x, z, homeX, homeZ, hp, trust, fed, wool, dead, cave };
  }
  stream(p, hour, cave) {
    this.cave = cave;
    for (const [id, e] of this.active)
      if (
        e.cave !== cave ||
        distance(e, p) > 160 ||
        (e.species === 'wolf' && !night(hour) && e.mode !== 'windup' && e.mode !== 'strike') ||
        (e.species === 'boar' && night(hour) && e.mode === 'idle')
      ) {
        this.remember(e);
        this.active.delete(id);
      }
    if (cave) {
      for (let i = 1; i < this.field.rooms.length; i++) {
        const r = this.field.rooms[i],
          x = r.x - 5,
          z = r.z + 3;
        if (Math.hypot(x - p.x, z - p.z) < 110) {
          this.spawn('cave:' + i + ':0', 'sentinel', x, z);
          if (i >= 3) this.spawn('cave:' + i + ':crawler', 'crawler', r.x + 5, r.z - 4);
        }
      }
      return;
    }
    // A few calm inhabitants near the belvedere make the first encounter legible.
    const start = this.world.panorama || this.world.spawn;
    if (start && distance(start, p) < 140)
      for (const [i, species] of ['sheep', 'sheep', 'rabbit', 'deer', 'fox', 'badger'].entries()) {
        for (let n = 0; n < 12; n++) {
          const a = 0.6 + i * 1.6 + n * 0.23,
            x = start.x + Math.sin(a) * (18 + n * 2),
            z = start.z + Math.cos(a) * (18 + n * 2);
          if (this.valid(x, z, species)) {
            this.spawn('welcome:' + i, species, x, z);
            break;
          }
        }
      }
    const cx = Math.floor(p.x / CELL),
      cz = Math.floor(p.z / CELL),
      candidates = [];
    for (let z = cz - 2; z <= cz + 2; z++)
      for (let x = cx - 2; x <= cx + 2; x++)
        for (let i = 0; i < 3; i++) {
          const id = `wild:${x}:${z}:${i}`,
            r = hash(this.world.seed + id),
            xx = (x + 0.18 + hash(id + 'x') * 0.64) * CELL,
            zz = (z + 0.18 + hash(id + 'z') * 0.64) * CELL;
          if (Math.hypot(xx - p.x, zz - p.z) > 138) continue;
          const sample = this.world.sample(xx, zz),
            biome = sample.biome,
            base = sample.coverType || biome;
          let species =
            i === 2
              ? night(hour)
                ? 'wolf'
                : r > 0.77
                  ? 'lynx'
                  : 'boar'
              : r < 0.16
                ? 'rabbit'
                : r < 0.34
                  ? 'fox'
                  : r < 0.46
                    ? 'badger'
                    : r < 0.7
                      ? 'sheep'
                      : 'deer';
          if (i < 2 && (biome === 'alpine' || biome === 'rock' || biome === 'steppe') && r < 0.6)
            species = 'goat';
          if (i < 2 && (biome === 'shore' || biome === 'wetland') && r < 0.65) species = 'tortoise';
          if (!SPECIES[species].biomes.includes(biome) && !SPECIES[species].biomes.includes(base))
            continue;
          if (
            !SPECIES[species].passive &&
            (this.safe(xx, zz) || Math.hypot(xx - p.x, zz - p.z) < 14 || r < 0.48)
          )
            continue;
          candidates.push({
            id: id + ':' + species,
            species,
            x: xx,
            z: zz,
            d: Math.hypot(xx - p.x, zz - p.z),
          });
        }
    for (const c of candidates.sort((a, b) => a.d - b.d)) this.spawn(c.id, c.species, c.x, c.z);
  }
  line(a, b, cave = this.cave) {
    const d = distance(a, b),
      steps = Math.ceil(d / 0.55);
    for (let i = 1; i < steps; i++) {
      const t = i / steps,
        x = a.x + (b.x - a.x) * t,
        z = a.z + (b.z - a.z) * t,
        y = (a.y || 0) + 0.8 + ((b.y || 0) - (a.y || 0) + 0.1) * t;
      if (cave && this.field.density(x, y, z) < 0) return false;
      if (!cave && this.world.height(x, z) > y + 0.45) return false;
      if (
        this.obstacles(x, z, 0.7, cave).some(
          (c) =>
            overlap(x, z, 0.18, c) && y > (c.y ?? c.baseY) && y < (c.y ?? c.baseY) + (c.height || 1)
        )
      )
        return false;
    }
    return true;
  }
  move(e, angle, speed, dt, steer = true) {
    const old = e.y,
      angles = steer ? [0, 0.48, -0.48, 0.95, -0.95, 1.65, -1.65] : [0];
    for (const offset of angles) {
      const a = angle + offset,
        x = e.x + Math.sin(a) * speed * dt,
        z = e.z + Math.cos(a) * speed * dt,
        y = this.floor(x, z);
      if (
        Math.abs(y - old) > Math.max(0.18, speed * dt * (SPECIES[e.species].maxSlope || 0.8)) ||
        !this.valid(x, z, e.species)
      )
        continue;
      if (
        [...this.active.values()].some(
          (other) =>
            other !== e &&
            distance({ x, z }, other) <
              (SPECIES[e.species].radius + SPECIES[other.species].radius) * 0.85 &&
            Math.abs(other.y - y) < 1
        )
      )
        continue;
      e.x = x;
      e.z = z;
      e.y = y;
      e.yaw = a;
      e.walk += speed * dt;
      return true;
    }
    return false;
  }
  calm(e) {
    e.mode = 'idle';
    e.timer = 2;
    e.alert = 0;
  }
  passiveActivity(e, s, time) {
    const home = distance(e, { x: e.homeX, z: e.homeZ });
    // Roaming is a deliberate, longer trip; wandering is a short, loose drift.
    if (home > 18) {
      e.mode = 'roam';
      e.yaw = Math.atan2(e.homeX - e.x, e.homeZ - e.z);
      e.timer = Math.min(8, home / Math.max(0.5, s.speed));
      return;
    }
    const n = hash(e.id + Math.floor(time / 7));
    if (n < 0.46) {
      e.mode = 'graze';
      e.timer = 3 + hash(e.id + Math.floor(time / 3)) * 5;
    } else {
      e.mode = n < 0.76 ? 'wander' : 'roam';
      e.yaw += (hash(e.id + Math.floor(time / 2)) - 0.5) * (e.mode === 'roam' ? 2.4 : 1.5);
      e.timer = e.mode === 'roam' ? 4 + n * 4 : 1.5 + n * 3;
    }
  }
  update(
    dt,
    p,
    {
      time,
      hour = 17,
      cave = false,
      sprint = false,
      peaceful = false,
      protectedAt = () => false,
    } = {}
  ) {
    this.time = time;
    dt = Math.min(0.12, Math.max(0, dt));
    this.scan -= dt;
    if (this.scan <= 0 || this.cave !== cave) {
      this.stream(p, hour, cave);
      this.scan = 1.2;
    }
    this.events = [];
    let attackers = [...this.active.values()].filter((e) =>
      ['chase', 'windup', 'strike'].includes(e.mode)
    ).length;
    for (const e of this.active.values()) {
      const s = SPECIES[e.species],
        d = distance(e, p);
      e.timer -= dt;
      e.hit = Math.max(0, e.hit - dt);
      e.y = this.floor(e.x, e.z);
      if (d > 100) continue;
      if (s.passive) {
        if (e.species === 'tortoise' && e.trust < 3 && time - e.fed > 20 && d < 3.5) {
          e.mode = 'shell';
          e.timer = 1;
          continue;
        }
        if (e.mode === 'shell') this.calm(e);
        if (e.mode === 'flee' && e.timer <= 0) this.calm(e);
        if (e.trust < 3 && time - e.fed > 20 && d < (sprint ? 10 : 3.4) && e.mode !== 'flee') {
          e.mode = 'flee';
          e.timer = 2.5;
        }
        if (e.mode === 'flee') {
          this.move(e, Math.atan2(e.x - p.x, e.z - p.z), s.flee, dt);
          continue;
        }
        // Foxes and deer pause to inspect a quiet visitor; sudden movement still startles them.
        if (e.mode === 'curious' && e.timer > 0) {
          e.yaw = Math.atan2(p.x - e.x, p.z - e.z);
          if (e.species === 'fox' && d > 4.5) this.move(e, e.yaw, s.speed * 0.32, dt);
          continue;
        }
        if (e.mode === 'observe' && e.timer > 0) {
          e.yaw = Math.atan2(p.x - e.x, p.z - e.z);
          continue;
        }
        if (e.mode === 'curious' || e.mode === 'observe') e.mode = 'idle';
        if (
          e.trust < 3 &&
          !sprint &&
          d > 4 &&
          d < (e.species === 'fox' ? 13 : 9) &&
          e.mode !== 'follow'
        ) {
          e.mode = e.species === 'fox' || e.species === 'deer' ? 'curious' : 'observe';
          e.timer = e.mode === 'curious' ? 2.4 : 1.8;
          e.yaw = Math.atan2(p.x - e.x, p.z - e.z);
          if (e.species === 'fox' && d > 4.5) this.move(e, e.yaw, s.speed * 0.32, dt);
          continue;
        }
        if (
          e.trust >= 3 &&
          d > 3 &&
          d < 22 &&
          distance(e, p) < distance(e, { x: e.homeX, z: e.homeZ }) + 20
        ) {
          this.move(e, Math.atan2(p.x - e.x, p.z - e.z), s.speed * 1.7, dt);
          e.mode = 'follow';
          continue;
        }
        if (e.timer <= 0 || e.mode === 'idle') this.passiveActivity(e, s, time);
        if (distance(e, { x: e.homeX, z: e.homeZ }) > 22 && e.trust < 3)
          e.yaw = Math.atan2(e.homeX - e.x, e.homeZ - e.z);
        if (e.mode === 'wander') this.move(e, e.yaw, s.speed * 0.48, dt);
        if (e.mode === 'roam') this.move(e, e.yaw, s.speed * 0.82, dt);
        continue;
      }
      const protectedPlayer = !cave && (this.safe(p.x, p.z) || protectedAt(p, e));
      if (peaceful || time < 20 || protectedPlayer || d > 35) {
        if (e.mode !== 'idle') this.calm(e);
        if (e.timer <= 0) {
          e.yaw += 1;
          e.timer = 4;
        }
        this.move(e, e.yaw, s.speed * 0.2, dt);
        continue;
      }
      const visible = d < s.notice + 4 && this.line(e, p),
        vertical = Math.abs((p.y || 0) - e.y) < 2.5;
      if (e.mode === 'idle' && d < s.notice && visible && vertical && attackers < 2) {
        e.mode = 'chase';
        e.alert = 1;
        attackers++;
        this.events.push({ type: 'alert', entity: e });
      }
      if (e.mode === 'chase') {
        if (!visible) {
          e.alert -= dt * 0.6;
          if (e.alert <= 0) this.calm(e);
          continue;
        }
        e.alert = 1;
        if (
          d < (s.prepareRange || (e.species === 'boar' ? 6.5 : e.species === 'wolf' ? 1.9 : 2.6)) &&
          vertical
        ) {
          e.mode = 'windup';
          e.timer = s.windup;
          e.aim = Math.atan2(p.x - e.x, p.z - e.z);
          e.yaw = e.aim;
          e.attackId++;
          e.struck = false;
        } else this.move(e, Math.atan2(p.x - e.x, p.z - e.z), s.speed, dt);
      } else if (e.mode === 'windup' && e.timer <= 0) {
        e.mode = 'strike';
        e.timer = e.species === 'boar' ? 0.75 : s.charge ? 0.65 : 0.25;
      } else if (e.mode === 'strike') {
        if (e.species === 'boar' || s.charge) this.move(e, e.aim, s.charge || 9, dt, false);
        const reach = s.reach || (e.species === 'sentinel' ? 3 : e.species === 'boar' ? 1.6 : 2.1);
        if (!e.struck && distance(e, p) < reach && vertical && this.line(e, p)) {
          e.struck = true;
          this.events.push({
            type: 'attack',
            entity: e,
            damage: s.damage,
            slow: s.slow || 0,
            attackId: e.attackId,
          });
        }
        if (e.timer <= 0) {
          e.mode = 'recover';
          e.timer = s.recovery;
        }
      } else if (e.mode === 'recover' && e.timer <= 0) {
        e.mode = 'chase';
        e.alert = 1;
      }
    }
    return this.events;
  }
  attack(e, v, { combat = false, tool = 'hand', energy = 100 } = {}) {
    if (!this.active.has(e.id) || v.attackCd > 0) return { ok: false };
    const s = SPECIES[e.species];
    if (s.passive && !combat)
      return {
        ok: false,
        message: 'Animal paisible · nourrissez-le avec Interagir, ou sortez une arme.',
      };
    const w = combat
      ? weapon(v)
      : { damage: tool === 'pick' ? 8 : tool === 'shovel' ? 6 : 4, delay: 0.75 };
    if (energy < 6) return { ok: false, message: 'Reprenez votre souffle avant de frapper.' };
    v.attackCd = w.delay;
    e.hp = Math.max(0, e.hp - w.damage * (e.mode === 'shell' ? 0.35 : 1));
    e.hit = 0.3;
    if (e.hp <= 0) {
      e.dead = Math.max(0.01, this.time);
      this.remember(e);
      this.active.delete(e.id);
      if (!s.passive) v.stats.kills[e.species] = (v.stats.kills[e.species] || 0) + 1;
      return { ok: true, dead: true, loot: { ...s.loot }, energy: energy - 6 };
    }
    if (s.passive) {
      e.trust = 0;
      e.mode = 'flee';
      e.timer = 6;
    } else if (e.mode === 'idle') {
      e.mode = 'chase';
      e.alert = 1;
    }
    this.remember(e);
    return { ok: true, energy: energy - 6 };
  }
  feed(e, v, inventory) {
    const s = SPECIES[e.species];
    if (!s.passive) return { ok: false, message: 'Cette créature ne s’apprivoise pas.' };
    if (this.time - e.fed < FEED_DELAY)
      return {
        ok: false,
        message: `Il vient de manger · revenez dans ${Math.ceil(FEED_DELAY - this.time + e.fed)} s.`,
      };
    if ((inventory.berries || 0) < 1)
      return { ok: false, message: 'Une baie est nécessaire pour le nourrir.' };
    inventory.berries--;
    e.fed = this.time;
    e.trust = Math.min(3, e.trust + 1);
    e.mode = 'graze';
    e.timer = 8;
    v.stats.fed++;
    let wool = 0;
    if (e.species === 'sheep' && this.time - e.wool >= WOOL_DELAY) {
      wool = 2;
      e.wool = this.time;
      inventory.wool = (inventory.wool || 0) + wool;
      v.stats.wool += wool;
    }
    if (e.trust === 3 && !v.stats.tamed.includes(e.id)) v.stats.tamed.push(e.id);
    this.remember(e);
    return {
      ok: true,
      wool,
      message: `${s.label} · confiance ${e.trust}/3${wool ? ' · +2 laines' : ''}${e.trust === 3 ? ' · vous accompagne' : ''}`,
    };
  }
  serialize() {
    for (const e of this.active.values()) this.remember(e);
    return [...this.memory.values()].map((s) => ({ ...s }));
  }
  resetAggression(p) {
    for (const e of this.active.values())
      if (!SPECIES[e.species].passive && distance(e, p) < 40) this.calm(e);
  }
  get stats() {
    return {
      active: this.active.size,
      budget: MAX_ACTIVE,
      remembered: this.memory.size,
      attacking: [...this.active.values()].filter((e) =>
        ['chase', 'windup', 'strike'].includes(e.mode)
      ).length,
    };
  }
}

function animalGeometry(species) {
  const pieces = [],
    color = new THREE.Color();
  const add = (type, size, pos, tint, rotation = 0) => {
    let g =
      type === 'ball'
        ? new THREE.IcosahedronGeometry(1, 0)
        : type === 'cone'
          ? new THREE.ConeGeometry(1, 1, 7)
          : new THREE.BoxGeometry(1, 1, 1);
    if (g.index) g = g.toNonIndexed();
    g.scale(...size);
    g.rotateZ(rotation);
    g.translate(...pos);
    color.set(tint);
    const colors = [];
    for (let i = 0; i < g.attributes.position.count; i++) colors.push(color.r, color.g, color.b);
    g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    pieces.push(g);
  };
  const palette = {
      sheep: ['#e5dfc9', '#50453c'],
      deer: ['#ac7954', '#694b3a'],
      rabbit: ['#b7a48b', '#b08b7d'],
      boar: ['#645343', '#413a34'],
      wolf: ['#848e8a', '#454d4b'],
      sentinel: ['#687d82', '#a57adc'],
      fox: ['#bc683e', '#e2caaa'],
      badger: ['#686861', '#ede6d4'],
      goat: ['#c7b99c', '#615746'],
      tortoise: ['#586c3f', '#95865c'],
      lynx: ['#ba925d', '#514231'],
      crawler: ['#343c50', '#68a4a9'],
    }[species],
    p = palette;
  if (species === 'tortoise') {
    add('ball', [0.4, 0.29, 0.48], [0, 0.3, 0], p[0]);
    add('ball', [0.42, 0.08, 0.49], [0, 0.12, 0], p[1]);
    add('ball', [0.13, 0.11, 0.19], [0, 0.19, 0.52], p[1]);
    for (let i = 0; i < 8; i++) {
      const a = i * 2.39996;
      add(
        'ball',
        [0.105, 0.04, 0.12],
        [Math.sin(a) * 0.29, 0.39 + Math.cos(a) * 0.035, Math.cos(a) * 0.32],
        '#84945e'
      );
    }
    for (const side of [-1, 1])
      add('ball', [0.02, 0.025, 0.025], [side * 0.095, 0.235, 0.61], '#17251c');
  } else if (species === 'crawler') {
    add('ball', [0.38, 0.25, 0.46], [0, 0.4, -0.18], p[0]);
    add('ball', [0.28, 0.23, 0.28], [0, 0.35, 0.3], p[0]);
    for (const side of [-1, 1])
      for (let j = 0; j < 3; j++)
        add('ball', [0.034, 0.038, 0.04], [side * (0.085 + j * 0.066), 0.4, 0.53 - j * 0.02], p[1]);
    add('cone', [0.08, 0.2, 0.08], [0.13, 0.22, 0.57], '#b5c8c4', 0.45);
    add('cone', [0.08, 0.2, 0.08], [-0.13, 0.22, 0.57], '#b5c8c4', -0.45);
  } else if (species === 'sentinel') {
    add('ball', [0.75, 0.8, 0.52], [0, 1.1, 0], p[0]);
    add('ball', [0.45, 0.4, 0.4], [0, 1.98, 0.06], p[0]);
    for (const side of [-1, 1]) {
      add('ball', [0.28, 0.65, 0.28], [side * 0.9, 1.1, 0], p[0], side * 0.16);
      add('cone', [0.2, 0.65, 0.2], [side * 0.32, 1.72, 0.2], p[1], side * 0.5);
      add('ball', [0.06, 0.07, 0.07], [side * 0.17, 2, 0.42], '#cba7ff');
    }
    add('cone', [0.18, 0.55, 0.18], [0, 1.5, 0.45], p[1]);
  } else {
    const small = species === 'rabbit',
      tall = species === 'deer',
      bodyY = small ? 0.35 : tall ? 1 : species === 'badger' ? 0.42 : 0.7;
    add(
      'ball',
      small ? [0.26, 0.28, 0.4] : [0.42, species === 'sheep' ? 0.42 : 0.33, 0.66],
      [0, bodyY, 0],
      p[0]
    );
    if (species === 'sheep')
      for (let i = 0; i < 10; i++) {
        const a = (i * Math.PI * 2) / 10;
        add(
          'ball',
          [0.25, 0.24, 0.23],
          [Math.sin(a) * 0.29, 0.78 + Math.cos(a) * 0.14, Math.cos(a) * 0.47],
          '#ddd8c7'
        );
      }
    const headY = small ? 0.55 : tall ? 1.48 : 0.91,
      headZ = small ? 0.33 : 0.67;
    if (tall) add('ball', [0.21, 0.43, 0.22], [0, 1.23, 0.5], p[0], -0.25);
    add('ball', small ? [0.19, 0.21, 0.24] : [0.25, 0.26, 0.34], [0, headY, headZ], p[0]);
    add('ball', [small ? 0.12 : 0.19, 0.11, 0.17], [0, headY - 0.08, headZ + 0.24], p[1]);
    for (const side of [-1, 1]) {
      add(
        'ball',
        [0.036, 0.042, 0.03],
        [side * (small ? 0.17 : 0.235), headY + 0.05, headZ + 0.1],
        '#1a2523'
      );
      add(
        'cone',
        small ? [0.08, 0.4, 0.075] : [0.11, 0.18, 0.08],
        [side * 0.17, headY + (small ? 0.31 : 0.25), headZ - 0.02],
        p[1],
        side * 0.35
      );
      if (tall) {
        // Forked antlers give the deer a readable outline even at a distance.
        add('cone', [0.055, 0.42, 0.055], [side * 0.19, 1.88, 0.58], '#b4a080', side * 0.25);
        add('cone', [0.04, 0.27, 0.04], [side * 0.3, 2.02, 0.6], '#b4a080', side * -0.65);
        add('cone', [0.035, 0.22, 0.035], [side * 0.1, 2.02, 0.6], '#b4a080', side * 0.72);
      }
      if (species === 'sheep')
        add(
          'ball',
          [0.105, 0.07, 0.2],
          [side * 0.32, headY - 0.03, headZ - 0.04],
          '#b8a995',
          side * 0.35
        );
      if (species === 'boar')
        add('cone', [0.04, 0.2, 0.04], [side * 0.17, 0.77, 1], '#ebdec1', side * -0.4);
      if (species === 'goat') {
        add('cone', [0.06, 0.44, 0.06], [side * 0.17, 1.26, 0.57], p[1], side * 0.26);
        add('cone', [0.08, 0.19, 0.08], [0, 0.67, 0.89], '#a89678');
      }
      if (species === 'badger')
        add('box', [0.11, 0.27, 0.38], [side * 0.15, headY + 0.04, headZ + 0.04], '#292d2d');
      if (species === 'lynx') add('cone', [0.028, 0.19, 0.03], [side * 0.23, 1.23, 0.6], '#302c24');
    }
    add('ball', [0.08, 0.12, small ? 0.08 : 0.23], [0, bodyY + 0.05, -(small ? 0.38 : 0.68)], p[1]);
    if (species === 'fox') {
      add('ball', [0.19, 0.19, 0.54], [0, 0.58, -0.94], p[0]);
      add('ball', [0.16, 0.16, 0.19], [0, 0.55, -1.33], p[1]);
      add('ball', [0.22, 0.18, 0.21], [0, 0.8, 0.76], p[1]);
    }
    if (species === 'lynx')
      for (let i = 0; i < 14; i++)
        add(
          'ball',
          [0.036, 0.037, 0.04],
          [Math.sin(i * 2.4) * 0.4, 0.7 + Math.cos(i) * 0.18, ((i % 7) - 3) * 0.15],
          '#796444'
        );
  }
  const merged = mergeGeometries(pieces);
  pieces.forEach((g) => g.dispose());
  merged.computeBoundingSphere();
  return merged;
}

export class Fauna extends Ecology {
  constructor(scene, world, field, obstacles, saved) {
    super(world, field, obstacles, saved);
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.batches = new Map();
    this.material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: true,
      roughness: 0.92,
    });
    this.legMaterial = new THREE.MeshStandardMaterial({ color: '#615949', roughness: 0.9 });
    this.legGeometry = new THREE.BoxGeometry(0.12, 1, 0.12);
    this.dummy = new THREE.Object3D();
    this.color = new THREE.Color();
    this.lightScale = { value: 1 };
    // Keep the camera lamp from flattening the colours of creatures at melee range.
    for (const material of [this.material, this.legMaterial]) {
      material.onBeforeCompile = (s) => {
        s.uniforms.faunaLightScale = this.lightScale;
        s.fragmentShader = 'uniform float faunaLightScale;\n' + s.fragmentShader;
        s.fragmentShader = s.fragmentShader.replace(
          '#include <lights_fragment_end>',
          '#include <lights_fragment_end>\nreflectedLight.directDiffuse*=faunaLightScale;reflectedLight.directSpecular*=faunaLightScale;'
        );
      };
      material.customProgramCacheKey = () => 'vallon-fauna-light';
    }
    const ring = new THREE.RingGeometry(0.85, 1, 30);
    ring.rotateX(-Math.PI / 2);
    this.ring = new THREE.InstancedMesh(
      ring,
      new THREE.MeshBasicMaterial({
        color: '#ed8854',
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
      MAX_ACTIVE
    );
    this.ring.count = 0;
    this.ring.frustumCulled = false;
    this.group.add(this.ring);
  }
  batch(species) {
    if (!this.batches.has(species)) {
      const body = new THREE.InstancedMesh(animalGeometry(species), this.material, MAX_ACTIVE),
        legs = new THREE.InstancedMesh(this.legGeometry, this.legMaterial, MAX_ACTIVE * 8);
      for (const m of [body, legs]) {
        m.count = 0;
        m.castShadow = true;
        m.receiveShadow = true;
        m.frustumCulled = false;
        this.group.add(m);
      }
      this.batches.set(species, { body, legs });
    }
    return this.batches.get(species);
  }
  render(time, camera) {
    this.lightScale.value = this.cave ? 0.14 : 1;
    const groups = new Map();
    for (const e of this.active.values())
      if (distance(e, camera.position) < 145) {
        if (!groups.has(e.species)) groups.set(e.species, []);
        groups.get(e.species).push(e);
      }
    for (const b of this.batches.values()) {
      b.body.count = 0;
      b.legs.count = 0;
    }
    let alerts = 0;
    for (const [species, list] of groups) {
      const b = this.batch(species),
        s = SPECIES[species],
        legCount = species === 'crawler' ? 8 : 4;
      b.body.count = list.length;
      b.legs.count = list.length * legCount;
      list.forEach((e, i) => {
        const moving = ['wander', 'roam', 'curious', 'flee', 'follow', 'chase', 'strike'].includes(
            e.mode
          ),
          phase = e.walk * 6,
          bob = moving ? Math.sin(phase) * 0.04 : 0,
          scale = 0.9 + hash(e.id) * 0.2;
        this.dummy.position.set(e.x, e.y + bob, e.z);
        const pitch = e.mode === 'graze' ? 0.2 : e.mode === 'curious' ? -0.06 : 0;
        this.dummy.rotation.set(
          pitch,
          e.yaw,
          e.mode === 'curious' ? Math.sin(time * 3 + hash(e.id) * 6) * 0.035 : 0
        );
        this.dummy.scale.set(
          scale,
          scale * (e.mode === 'shell' ? 0.68 : species === 'badger' ? 0.7 : 1),
          scale
        );
        this.dummy.updateMatrix();
        b.body.setMatrixAt(i, this.dummy.matrix);
        this.color.set(e.hit > 0 ? '#ffc0a6' : e.mode === 'windup' ? '#e3b1a0' : '#ffffff');
        b.body.setColorAt(i, this.color);
        const height =
          species === 'rabbit'
            ? 0.23
            : species === 'tortoise'
              ? 0.15
              : species === 'crawler'
                ? 0.36
                : species === 'badger'
                  ? 0.24
                  : species === 'deer'
                    ? 0.8
                    : 0.45;
        for (let leg = 0; leg < legCount; leg++) {
          const side = leg % 2 ? 1 : -1,
            front = leg < 2 ? 1 : -1,
            x = side * (species === 'crawler' ? 0.55 : species === 'rabbit' ? 0.17 : 0.27),
            z =
              species === 'crawler'
                ? 0.45 - Math.floor(leg / 2) * 0.3
                : front * (species === 'rabbit' ? 0.22 : 0.43),
            step = moving ? Math.sin(phase + (leg === 0 || leg === 3 ? 0 : Math.PI)) * 0.26 : 0;
          this.dummy.position.set(
            e.x + (x * Math.cos(e.yaw) + z * Math.sin(e.yaw)) * scale,
            e.y + height * 0.5 + Math.max(0, step) * 0.05,
            e.z + (z * Math.cos(e.yaw) - x * Math.sin(e.yaw)) * scale
          );
          this.dummy.rotation.set(step, e.yaw, species === 'crawler' ? side * 0.95 : 0, 'YXZ');
          // Swing around the animal's local forward axis; turn the front bone frames clockwise.
          if (species !== 'crawler' && leg < 2) this.dummy.rotateY(-Math.PI / 2);
          this.dummy.scale.set(
            scale * (species === 'crawler' ? 0.45 : 1),
            height * scale * (species === 'crawler' ? 1.8 : 1),
            scale
          );
          this.dummy.updateMatrix();
          b.legs.setMatrixAt(i * legCount + leg, this.dummy.matrix);
        }
        if (['windup', 'strike'].includes(e.mode)) {
          this.dummy.position.set(e.x, e.y + 0.055, e.z);
          this.dummy.rotation.set(0, 0, 0);
          const radius = s.reach || (species === 'sentinel' ? 3 : species === 'boar' ? 1.6 : 2.1);
          this.dummy.scale.setScalar(radius);
          this.dummy.updateMatrix();
          this.ring.setMatrixAt(alerts++, this.dummy.matrix);
        }
      });
      for (const m of [b.body, b.legs]) m.instanceMatrix.needsUpdate = true;
      if (b.body.instanceColor) b.body.instanceColor.needsUpdate = true;
    }
    this.ring.count = alerts;
    this.ring.instanceMatrix.needsUpdate = true;
  }
  target(origin, direction, max = 7) {
    const ray = new THREE.Ray(origin, direction),
      box = new THREE.Box3(),
      out = new THREE.Vector3();
    let best = null;
    for (const e of this.active.values()) {
      const s = SPECIES[e.species];
      box.min.set(e.x - s.radius, e.y, e.z - s.radius);
      box.max.set(e.x + s.radius, e.y + s.height, e.z + s.radius);
      if (ray.intersectBox(box, out)) {
        const d = origin.distanceTo(out);
        if (d <= max && (!best || d < best.distance))
          best = { kind: 'entity', entity: e, point: out.clone(), distance: d };
      }
    }
    return best;
  }
  dispose() {
    this.group.removeFromParent();
    for (const b of this.batches.values()) b.body.geometry.dispose();
    this.material.dispose();
    this.legMaterial.dispose();
    this.legGeometry.dispose();
    this.ring.geometry.dispose();
    this.ring.material.dispose();
  }
}

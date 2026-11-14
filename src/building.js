import * as THREE from 'three';

export const SURFACES = [
  {
    id: 'oak',
    label: 'Chêne',
    color: '#aa8257',
    family: 'wood',
    cost: { wood: 1 },
    mining: 'wood',
  },
  {
    id: 'stone',
    label: 'Calcaire',
    color: '#a2a89e',
    family: 'stone',
    cost: { stone: 1 },
    mining: 'stone',
  },
  {
    id: 'earth',
    label: 'Terre battue',
    color: '#b18a68',
    family: 'earth',
    cost: { clay: 1 },
    mining: 'soil',
  },
  {
    id: 'pine',
    label: 'Pin clair',
    color: '#d1b588',
    family: 'wood',
    cost: { wood: 1 },
    mining: 'wood',
  },
  {
    id: 'cobble',
    label: 'Moellons',
    color: '#858d83',
    family: 'stone',
    cost: { stone: 1 },
    mining: 'stone',
  },
  {
    id: 'planks',
    label: 'Planches',
    color: '#ba9b70',
    family: 'planks',
    cost: { wood: 1 },
    mining: 'wood',
    station: 'workbench',
  },
  {
    id: 'darkwood',
    label: 'Bois fumé',
    color: '#655044',
    family: 'wood',
    cost: { wood: 1, coal: 1 },
    mining: 'wood',
    station: 'workbench',
  },
  {
    id: 'polished',
    label: 'Pierre taillée',
    color: '#a8b1ab',
    family: 'tiles',
    cost: { stone: 2 },
    mining: 'stone',
    station: 'workbench',
  },
  {
    id: 'brick',
    label: 'Brique',
    color: '#b16e51',
    family: 'brick',
    cost: { clay: 2, coal: 1 },
    mining: 'soil',
    station: 'forge',
  },
  {
    id: 'glass',
    label: 'Verre',
    color: '#b9dece',
    family: 'glass',
    cost: { stone: 1, clay: 1, coal: 1 },
    mining: 'stone',
    station: 'forge',
  },
  {
    id: 'slate',
    label: 'Ardoise',
    color: '#4d606c',
    family: 'tiles',
    cost: { stone: 2, coal: 1 },
    mining: 'stone',
    station: 'forge',
  },
  {
    id: 'iron',
    label: 'Fer brossé',
    color: '#acb9bc',
    family: 'metal',
    cost: { iron: 2, coal: 1 },
    mining: 'iron',
    station: 'forge',
  },
  {
    id: 'copper',
    label: 'Cuivre',
    color: '#b57950',
    family: 'metal',
    cost: { copper: 2, coal: 1 },
    mining: 'copper',
    station: 'forge',
  },
  {
    id: 'crystal',
    label: 'Améthyste',
    color: '#a38bdb',
    family: 'crystal',
    cost: { crystal: 2, stone: 1 },
    mining: 'crystal',
    level: 3,
  },
  {
    id: 'marble',
    label: 'Marbre veiné',
    color: '#d4dbcd',
    family: 'marble',
    cost: { stone: 3, iron: 1 },
    mining: 'stone',
    level: 3,
  },
  {
    id: 'diamond',
    label: 'Incrustations',
    color: '#89c6c4',
    family: 'crystal',
    cost: { stone: 2, diamond: 1 },
    mining: 'diamond',
    level: 4,
  },
];
export const SHAPES = [
  { id: 'cube', label: 'Bloc', icon: '▣', volume: 1 },
  { id: 'slab', label: 'Dalle', icon: '▰', volume: 0.35 },
  { id: 'wall', label: 'Mur fin', icon: '▥', volume: 0.5 },
  { id: 'pillar', label: 'Pilier', icon: '▯', volume: 0.4 },
  { id: 'beam', label: 'Poutre', icon: '━', volume: 0.35 },
  { id: 'stairs', label: 'Escalier', icon: '▟', volume: 1, station: 'workbench' },
  { id: 'ramp', label: 'Rampe', icon: '◩', volume: 1, station: 'workbench' },
  { id: 'roof', label: 'Toit incliné', icon: '╱', volume: 0.6, station: 'workbench' },
  { id: 'ridge', label: 'Faîtage', icon: '⌂', volume: 0.8, station: 'workbench' },
  {
    id: 'window',
    label: 'Fenêtre',
    icon: '▤',
    volume: 0.5,
    station: 'forge',
    extra: { stone: 1, coal: 1 },
  },
  { id: 'door', label: 'Porte', icon: '▯', volume: 1, station: 'workbench' },
  { id: 'arch', label: 'Arche', icon: '∩', volume: 1.2, station: 'workbench' },
  { id: 'fence', label: 'Clôture', icon: '╫', volume: 0.6 },
  {
    id: 'planter',
    label: 'Jardinière',
    icon: '❧',
    volume: 0.5,
    station: 'workbench',
    extra: { clay: 1, berries: 2 },
  },
  { id: 'bench', label: 'Banc', icon: '╤', volume: 0.7, station: 'workbench' },
  { id: 'table', label: 'Table', icon: '╥', volume: 1, station: 'workbench' },
  {
    id: 'lantern',
    label: 'Lanterne',
    icon: '◇',
    volume: 0.35,
    station: 'forge',
    extra: { copper: 1, coal: 1 },
  },
  { id: 'workbench', label: 'Établi', icon: '⚒', recipe: { wood: 4, stone: 2 } },
  { id: 'forge', label: 'Forge', icon: '♜', recipe: { stone: 6, clay: 4 }, station: 'workbench' },
  {
    id: 'beacon',
    label: 'Phare de cristal',
    icon: '✧',
    recipe: { stone: 4, copper: 4, iron: 4, crystal: 4 },
    level: 3,
  },
];
export const TINTS = [
  { id: 'natural', label: 'Naturelle', color: '#ffffff' },
  ...[
    ['chalk', 'Craie', '#e6e2ce'],
    ['sand', 'Sable', '#d5ba83'],
    ['ochre', 'Ocre', '#bd8549'],
    ['terra', 'Terracotta', '#a96750'],
    ['rose', 'Rose', '#c38889'],
    ['moss', 'Mousse', '#7e9b6c'],
    ['sage', 'Sauge', '#9aafa0'],
    ['sea', 'Lagon', '#70aaa7'],
    ['blue', 'Ardoise bleue', '#768fab'],
    ['violet', 'Bruyère', '#a38cae'],
    ['charcoal', 'Charbon', '#626a69'],
  ].map(([id, label, color]) => ({ id, label, color })),
];
export const FINISHES = [
  { id: 'natural', label: 'Brute' },
  { id: 'smooth', label: 'Polie' },
  { id: 'panels', label: 'À panneaux' },
  { id: 'carved', label: 'Ciselée' },
];
const get = (list, id) => list.find((p) => p.id === id) || list[0];
export const surface = (id) => get(SURFACES, id);
export const shape = (id) => get(SHAPES, id);
export function normalizePlan(data = {}) {
  const material = Number.isInteger(data.material) ? SURFACES[data.material]?.id : data.material;
  return {
    material: get(SURFACES, material).id,
    shape: get(SHAPES, data.shape).id,
    tint: get(TINTS, data.tint).id,
    finish: get(FINISHES, data.finish).id,
    rotation: ((Math.round(Number(data.rotation) || 0) % 4) + 4) % 4,
    size: [0.5, 1, 2].includes(data.size) ? data.size : 1,
    mirror: !!data.mirror,
  };
}
export const freshPlan = () => normalizePlan();
export function recipe(plan) {
  const p = normalizePlan(plan),
    s = shape(p.shape),
    m = surface(p.material),
    out = {};
  if (s.recipe) {
    for (const [k, n] of Object.entries(s.recipe)) out[k] = Math.ceil(n * p.size ** 3);
    if (m.station === 'forge' || m.level)
      for (const [k, n] of Object.entries(m.cost))
        out[k] = (out[k] || 0) + Math.ceil(n * p.size ** 3);
  } else {
    for (const [k, n] of Object.entries(m.cost))
      out[k] = Math.max(1, Math.ceil(n * s.volume * p.size ** 3));
    for (const [k, n] of Object.entries(s.extra || {}))
      out[k] = (out[k] || 0) + Math.max(1, Math.ceil(n * p.size));
  }
  return out;
}
export function lockedReason(plan, progress) {
  for (const item of [shape(plan.shape), surface(plan.material)]) {
    if (item.station && !progress.stations?.[item.station])
      return item.station === 'forge'
        ? 'Allumez une forge avec 2 charbons.'
        : 'Posez un établi et utilisez-le avec la touche d’interaction.';
    if ((item.level || 0) > (progress.chapter || 0))
      return `Terminez le chapitre ${item.level} du carnet.`;
  }
  return '';
}
export function exchange(inventory, newCost, oldCost = {}) {
  const next = { ...inventory };
  for (const k of new Set([...Object.keys(newCost), ...Object.keys(oldCost)])) {
    next[k] = (next[k] || 0) + (oldCost[k] || 0) - (newCost[k] || 0);
    if (next[k] < 0) return null;
  }
  return next;
}
export function costText(cost) {
  const names = {
    wood: 'bois',
    stone: 'pierre',
    clay: 'terre',
    coal: 'charbon',
    copper: 'cuivre',
    iron: 'fer',
    crystal: 'cristaux',
    diamond: 'diamants',
    berries: 'baies',
  };
  return (
    Object.entries(cost)
      .filter(([, n]) => n > 0)
      .map(([k, n]) => `${n} ${names[k] || k}`)
      .join(' · ') || 'Gratuit'
  );
}
// Shapes share unit geometry; every piece carries its actual solid collision parts.
export function partsFor(id, open = false) {
  const box = (x, y, z, w, h, d) => ({ x, y, z, w, h, d });
  switch (id) {
    case 'slab':
      return [box(0, 0.125, 0, 1, 0.25, 1)];
    case 'wall':
      return [box(0, 0.5, 0, 1, 1, 0.2)];
    case 'pillar':
      return [
        box(0, 0.5, 0, 0.28, 1, 0.28),
        box(0, 0.07, 0, 0.4, 0.14, 0.4),
        box(0, 0.93, 0, 0.4, 0.14, 0.4),
      ];
    case 'beam':
      return [box(0, 0.12, 0, 1, 0.24, 0.24)];
    case 'stairs':
      return Array.from({ length: 4 }, (_, i) =>
        box(0, (i + 1) / 8, 0.375 - i * 0.25, 1, (i + 1) / 4, 0.25)
      );
    case 'ramp':
      return Array.from({ length: 10 }, (_, i) =>
        box(0, (i + 0.5) / 20, 0.45 - i * 0.1, 1, (i + 0.5) / 10, 0.1)
      );
    case 'roof':
      return Array.from({ length: 10 }, (_, i) =>
        box(0, 0.08 + (i + 0.5) * 0.07, 0.45 - i * 0.1, 1, 0.16, 0.1)
      );
    case 'ridge':
      return Array.from({ length: 10 }, (_, i) =>
        box(0, 0.775 + (1 - Math.abs((i + 0.5) / 5 - 1)) * 0.4, 0.45 - i * 0.1, 1, 0.16, 0.1)
      );
    case 'window':
      return [
        box(-0.43, 0.5, 0, 0.14, 1, 0.18),
        box(0.43, 0.5, 0, 0.14, 1, 0.18),
        box(0, 0.07, 0, 1, 0.14, 0.18),
        box(0, 0.93, 0, 1, 0.14, 0.18),
        box(0, 0.5, 0, 0.86, 0.86, 0.035),
      ];
    case 'door':
      return [
        box(-0.44, 1, 0, 0.12, 2, 0.2),
        box(0.44, 1, 0, 0.12, 2, 0.2),
        box(0, 1.94, 0, 1, 0.12, 0.2),
        ...(open ? [] : [box(0, 0.96, 0, 0.76, 1.86, 0.1)]),
      ];
    case 'arch':
      return [
        box(-0.4, 0.88, 0, 0.2, 1.76, 0.3),
        box(0.4, 0.88, 0, 0.2, 1.76, 0.3),
        box(-0.22, 1.78, 0, 0.27, 0.24, 0.3),
        box(0.22, 1.78, 0, 0.27, 0.24, 0.3),
        box(0, 1.92, 0, 0.22, 0.16, 0.3),
      ];
    case 'fence':
      return [
        box(-0.42, 0.5, 0, 0.12, 1, 0.12),
        box(0.42, 0.5, 0, 0.12, 1, 0.12),
        box(0, 0.35, 0, 1, 0.12, 0.12),
        box(0, 0.75, 0, 1, 0.12, 0.12),
      ];
    case 'planter':
      return [
        box(0, 0.08, 0, 1, 0.16, 0.7),
        box(0, 0.24, -0.29, 1, 0.36, 0.12),
        box(0, 0.24, 0.29, 1, 0.36, 0.12),
        box(-0.44, 0.24, 0, 0.12, 0.36, 0.7),
        box(0.44, 0.24, 0, 0.12, 0.36, 0.7),
      ];
    case 'bench':
      return [
        box(0, 0.5, 0, 1, 0.16, 0.5),
        box(-0.35, 0.23, 0, 0.12, 0.46, 0.4),
        box(0.35, 0.23, 0, 0.12, 0.46, 0.4),
      ];
    case 'table':
    case 'workbench':
      return [
        box(0, 0.85, 0, 1, 0.18, 1),
        ...[-0.37, 0.37].flatMap((x) => [-0.37, 0.37].map((z) => box(x, 0.4, z, 0.14, 0.8, 0.14))),
      ];
    case 'forge':
      return [
        box(0, 0.3, 0, 1, 0.6, 1),
        box(-0.42, 0.85, 0, 0.16, 0.5, 1),
        box(0.42, 0.85, 0, 0.16, 0.5, 1),
        box(0, 0.85, -0.42, 0.84, 0.5, 0.16),
        box(0, 1.12, 0, 1, 0.14, 1),
        box(0, 1.45, -0.3, 0.35, 0.6, 0.35),
      ];
    case 'lantern':
      return [
        box(0, 0.08, 0, 0.4, 0.16, 0.4),
        box(0, 0.34, 0, 0.28, 0.4, 0.28),
        box(0, 0.57, 0, 0.4, 0.1, 0.4),
      ];
    case 'beacon':
      return [
        box(0, 0.12, 0, 1, 0.24, 1),
        box(0, 0.64, 0, 0.36, 0.8, 0.36),
        box(0, 1.32, 0, 0.6, 0.6, 0.6),
        box(0, 1.7, 0, 0.72, 0.16, 0.72),
      ];
    default:
      return [box(0, 0.5, 0, 1, 1, 1)];
  }
}
function prism(id) {
  const points =
    id === 'ridge'
      ? [
          [-0.5, 0.7],
          [-0.5, 0.85],
          [0, 1.25],
          [0.5, 0.85],
          [0.5, 0.7],
          [0, 1.1],
        ]
      : id === 'ramp'
        ? [
            [-0.5, 0],
            [0.5, 1],
            [0.5, 0],
          ]
        : [
            [-0.5, 0],
            [-0.5, 0.15],
            [0.5, 0.85],
            [0.5, 0.7],
          ];
  const s = new THREE.Shape();
  points.forEach(([z, y], i) => (i ? s.lineTo(z, y) : s.moveTo(z, y)));
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false, steps: 1 });
  g.rotateY(Math.PI / 2);
  g.translate(-0.5, 0, 0);
  g.computeVertexNormals();
  return g;
}
function merge(parts) {
  const p = [],
    n = [],
    uv = [];
  for (const part of parts) {
    const g = new THREE.BoxGeometry(part.w, part.h, part.d).toNonIndexed();
    g.translate(part.x, part.y, part.z);
    p.push(...g.attributes.position.array);
    n.push(...g.attributes.normal.array);
    uv.push(...g.attributes.uv.array);
    g.dispose();
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(n, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.computeBoundingBox();
  g.computeBoundingSphere();
  return g;
}
export function collisionParts(record) {
  const p = normalizePlan(record),
    c = Math.cos((p.rotation * Math.PI) / 2),
    s = Math.sin((p.rotation * Math.PI) / 2);
  return partsFor(p.shape, record.open).map((b, i) => {
    const z = b.z * (p.mirror ? -1 : 1);
    return {
      type: 'block',
      id: record.key + '#' + i,
      owner: record.key,
      x: record.x + (b.x * c + z * s) * p.size,
      z: record.z + (z * c - b.x * s) * p.size,
      y: record.y + (b.y - b.h / 2) * p.size,
      width: (p.rotation % 2 ? b.d : b.w) * p.size,
      depth: (p.rotation % 2 ? b.w : b.d) * p.size,
      height: b.h * p.size,
    };
  });
}
export function boundsFor(plan) {
  const parts = partsFor(plan.shape),
    s = plan.size || 1;
  return {
    width: Math.max(...parts.map((b) => Math.abs(b.x) * 2 + b.w)) * s,
    depth: Math.max(...parts.map((b) => Math.abs(b.z) * 2 + b.d)) * s,
    height: Math.max(...parts.map((b) => b.y + b.h / 2)) * s,
  };
}
export const overlap = (a, b) =>
  Math.abs(a.x - b.x) < (a.width + b.width) / 2 - 0.008 &&
  Math.abs(a.z - b.z) < (a.depth + b.depth) / 2 - 0.008 &&
  a.y < b.y + b.height - 0.008 &&
  a.y + a.height > b.y + 0.008;

export class Building {
  constructor(scene, records = new Map(), meshes = []) {
    this.scene = scene;
    this.records = records;
    this.meshes = meshes;
    this.spatial = new Map();
    this.batches = new Map();
    this.geometries = new Map();
    this.materials = new Map();
    this.matrix = new THREE.Matrix4();
    this.q = new THREE.Quaternion();
    this.scale = new THREE.Vector3();
    this.pos = new THREE.Vector3();
    this.lightTimer = 0;
    this.lights = Array.from({ length: 6 }, () => {
      const l = new THREE.PointLight('#ffd89b', 7, 13, 2);
      l.visible = false;
      scene.add(l);
      return l;
    });
  }
  geometry(plan, open = false) {
    const id = plan.shape + (open ? ':open' : '') + (plan.mirror ? ':mirror' : '');
    if (!this.geometries.has(id)) {
      const parts = partsFor(plan.shape, open).filter((_, i) =>
        plan.shape === 'window'
          ? i < 4
          : plan.shape === 'lantern'
            ? i !== 1
            : plan.shape === 'beacon'
              ? i !== 2
              : true
      );
      const g = ['ramp', 'roof', 'ridge'].includes(plan.shape) ? prism(plan.shape) : merge(parts);
      if (plan.mirror) {
        g.scale(1, 1, -1);
        for (const a of Object.values(g.attributes))
          for (let i = 0; i < a.count; i += 3)
            for (let k = 0; k < a.itemSize; k++) {
              const at = i * a.itemSize + k,
                end = (i + 2) * a.itemSize + k,
                v = a.array[at];
              a.array[at] = a.array[end];
              a.array[end] = v;
            }
        g.computeBoundingBox();
        g.computeBoundingSphere();
      }
      this.geometries.set(id, g);
    }
    return this.geometries.get(id);
  }
  accent(plan) {
    const shape = plan.shape,
      id = 'accent:' + shape;
    if (
      !['window', 'lantern', 'beacon', 'planter', 'forge'].includes(shape) ||
      (shape === 'forge' && !plan.lit)
    )
      return null;
    if (!this.geometries.has(id)) {
      let parts =
        shape === 'window'
          ? [partsFor(shape)[4]]
          : shape === 'lantern'
            ? [partsFor(shape)[1]]
            : shape === 'beacon'
              ? [partsFor(shape)[2]]
              : shape === 'forge'
                ? [{ x: 0, y: 0.73, z: 0.1, w: 0.5, h: 0.2, d: 0.5 }]
                : Array.from({ length: 5 }, (_, i) => ({
                    x: (i - 2) * 0.17,
                    y: 0.48 + (i % 2) * 0.12,
                    z: 0,
                    w: 0.15,
                    h: 0.28 + (i % 2) * 0.2,
                    d: 0.25,
                  }));
      this.geometries.set(id, merge(parts));
    }
    const key = 'accent-material:' + shape;
    if (!this.materials.has(key)) {
      const color =
        shape === 'planter'
          ? '#6d994b'
          : shape === 'beacon'
            ? '#b2a3f5'
            : shape === 'window'
              ? '#b9e0d5'
              : '#ffbc69';
      const lit = ['beacon', 'lantern', 'forge'].includes(shape);
      this.materials.set(
        key,
        new THREE.MeshStandardMaterial({
          color,
          roughness: 0.3,
          transparent: shape === 'window',
          opacity: shape === 'window' ? 0.42 : 1,
          depthWrite: shape !== 'window',
          emissive: lit ? color : '#000000',
          emissiveIntensity: lit ? 0.8 : 0,
        })
      );
    }
    return { geometry: this.geometries.get(id), material: this.materials.get(key) };
  }
  material(plan) {
    const key = [plan.material, plan.tint, plan.finish].join(':');
    if (this.materials.has(key)) return this.materials.get(key);
    const s = surface(plan.material),
      t = get(TINTS, plan.tint);
    const color = new THREE.Color(s.color);
    if (t.id !== 'natural') color.lerp(new THREE.Color(t.color), 0.72);
    const m = new THREE.MeshStandardMaterial({
      color,
      roughness: plan.finish === 'smooth' ? 0.4 : s.family === 'metal' ? 0.42 : 0.88,
      metalness: s.family === 'metal' ? 0.55 : 0,
      transparent: s.family === 'glass',
      opacity: s.family === 'glass' ? 0.5 : 1,
      depthWrite: s.family !== 'glass',
    });
    if (s.family === 'crystal') {
      m.emissive.copy(color);
      m.emissiveIntensity = 0.35;
    }
    const family = ['wood', 'planks'].includes(s.family)
        ? 1
        : ['brick', 'tiles'].includes(s.family)
          ? 2
          : s.family === 'marble'
            ? 3
            : 0,
      finish = FINISHES.findIndex((f) => f.id === plan.finish);
    m.onBeforeCompile = (shader) => {
      shader.vertexShader = 'varying vec3 buildPos;\n' + shader.vertexShader;
      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\nbuildPos=position;'
      );
      shader.fragmentShader = 'varying vec3 buildPos;\n' + shader.fragmentShader;
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <color_fragment>',
        `#include <color_fragment>
    float grain=sin(buildPos.x*57.+sin(buildPos.y*32.)*2.+buildPos.z*43.);float detail=.98+grain*.025;
    ${family === 1 ? 'detail=.98+.025*sin(buildPos.y*9.+sin(buildPos.x*4.+buildPos.z*4.));' : ''}
    ${family === 2 ? 'vec2 bp=vec2(buildPos.x+buildPos.z,buildPos.y)*vec2(3.,4.);bp.x+=mod(floor(bp.y),2.)*.5;vec2 cell=fract(bp);detail=mix(.85,1.,smoothstep(.02,.055,min(min(cell.x,1.-cell.x),min(cell.y,1.-cell.y))));' : ''}
    ${family === 3 ? 'detail=.96+.04*sin(buildPos.x*8.+buildPos.y*5.+sin(buildPos.z*6.)*2.);' : ''}
    ${finish === 2 ? 'detail*=.92+.08*smoothstep(.025,.045,min(fract((buildPos.x+buildPos.z)*4.),fract(buildPos.y*4.)));' : ''}
    ${finish === 3 ? 'detail*=.94+.06*smoothstep(-.2,.4,sin(buildPos.y*18.)*cos((buildPos.x+buildPos.z)*18.));' : ''}
    diffuseColor.rgb*=detail;`
      );
    };
    m.customProgramCacheKey = () => `build-${family}-${finish}`;
    this.materials.set(key, m);
    return m;
  }
  add(data, rebuild = true) {
    if (![data.x, data.y, data.z].every(Number.isFinite) || this.records.size >= 2000) return null;
    const p = normalizePlan(data),
      key = `${data.x.toFixed(3)},${data.y.toFixed(3)},${data.z.toFixed(3)}`;
    if (this.records.has(key)) return null;
    const b = {
      ...p,
      x: data.x,
      y: data.y,
      z: data.z,
      key,
      type: 'block',
      open: !!data.open,
      lit: !!data.lit,
      paid: data.paid || recipe(p),
      free: !!data.free,
    };
    Object.assign(b, boundsFor(p));
    if (p.rotation % 2) [b.width, b.depth] = [b.depth, b.width];
    b.parts = collisionParts(b);
    this.records.set(key, b);
    if (rebuild) this.rebuild();
    return b;
  }
  remove(b) {
    if (!this.records.delete(b.key)) return;
    this.rebuild();
  }
  clear() {
    this.records.clear();
    this.rebuild();
  }
  rebuild() {
    this.spatial.clear();
    for (const b of this.records.values())
      for (const part of b.parts) {
        for (
          let z = Math.floor((part.z - part.depth / 2) / 8);
          z <= Math.floor((part.z + part.depth / 2) / 8);
          z++
        )
          for (
            let x = Math.floor((part.x - part.width / 2) / 8);
            x <= Math.floor((part.x + part.width / 2) / 8);
            x++
          ) {
            const key = x + ',' + z;
            if (!this.spatial.has(key)) this.spatial.set(key, []);
            this.spatial.get(key).push(part);
          }
      }
    const groups = new Map();
    for (const b of this.records.values()) {
      const key = [
        b.shape,
        b.material,
        b.tint,
        b.finish,
        b.mirror ? 'mirror' : 'normal',
        b.open ? 'open' : 'closed',
      ].join(':');
      if (!groups.has(key)) groups.set(key, { records: [], accent: false });
      groups.get(key).records.push(b);
      if (this.accent(b)) {
        const ak = 'accent:' + b.shape;
        if (!groups.has(ak)) groups.set(ak, { records: [], accent: true });
        groups.get(ak).records.push(b);
      }
    }
    for (const [key, batch] of this.batches)
      if (!groups.has(key)) {
        this.scene.remove(batch);
        batch.dispose();
        this.batches.delete(key);
      }
    for (const [key, { records, accent }] of groups) {
      const plan = records[0],
        a = accent ? this.accent(plan) : null;
      let mesh = this.batches.get(key);
      if (!mesh || mesh.instanceMatrix.count < records.length) {
        if (mesh) {
          this.scene.remove(mesh);
          mesh.dispose();
        }
        mesh = new THREE.InstancedMesh(
          a?.geometry || this.geometry(plan, plan.open),
          a?.material || this.material(plan),
          Math.max(16, 2 ** Math.ceil(Math.log2(records.length)))
        );
        mesh.castShadow = !accent;
        mesh.receiveShadow = true;
        this.batches.set(key, mesh);
        this.scene.add(mesh);
      }
      mesh.count = records.length;
      mesh.userData.records = records;
      for (let i = 0; i < records.length; i++) {
        const b = records[i];
        this.pos.set(b.x, b.y, b.z);
        this.q.setFromAxisAngle(THREE.Object3D.DEFAULT_UP, (b.rotation * Math.PI) / 2);
        this.scale.set(b.size, b.size, b.size);
        this.matrix.compose(this.pos, this.q, this.scale);
        mesh.setMatrixAt(i, this.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
      mesh.computeBoundingSphere();
      mesh.updateMatrixWorld(true);
    }
    this.meshes.splice(0, this.meshes.length, ...this.batches.values());
  }
  colliders(x, z, radius = 1) {
    const found = new Set();
    for (let iz = Math.floor((z - radius) / 8); iz <= Math.floor((z + radius) / 8); iz++)
      for (let ix = Math.floor((x - radius) / 8); ix <= Math.floor((x + radius) / 8); ix++)
        for (const p of this.spatial.get(ix + ',' + iz) || [])
          if (Math.abs(p.x - x) < radius + p.width / 2 && Math.abs(p.z - z) < radius + p.depth / 2)
            found.add(p);
    return [...found];
  }
  covered(x, z, y) {
    return this.colliders(x, z, 0.02).some(
      (p) =>
        Math.abs(p.x - x) < p.width / 2 + 0.02 &&
        Math.abs(p.z - z) < p.depth / 2 + 0.02 &&
        p.y < y + 0.8 &&
        p.y + p.height > y + 0.04
    );
  }
  serialize() {
    return [...this.records.values()].map(
      ({
        x,
        y,
        z,
        material,
        shape,
        tint,
        finish,
        rotation,
        size,
        mirror,
        open,
        lit,
        paid,
        free,
      }) => ({
        x,
        y,
        z,
        material,
        shape,
        tint,
        finish,
        rotation,
        size,
        mirror,
        open,
        lit,
        paid,
        free,
      })
    );
  }
  update(camera, dt, visible = true) {
    this.lightTimer -= dt;
    if (this.lightTimer > 0) return;
    this.lightTimer = 0.3;
    const lights = [...this.records.values()]
      .filter((b) => ['lantern', 'beacon'].includes(b.shape) || (b.shape === 'forge' && b.lit))
      .sort(
        (a, b) =>
          Math.hypot(a.x - camera.position.x, a.z - camera.position.z) -
          Math.hypot(b.x - camera.position.x, b.z - camera.position.z)
      );
    this.lights.forEach((l, i) => {
      const b = lights[i];
      l.visible =
        visible && !!b && Math.hypot(b.x - camera.position.x, b.z - camera.position.z) < 28;
      if (b) {
        l.position.set(b.x, b.y + b.height * 0.8, b.z);
        l.color.set(b.shape === 'beacon' ? '#b5a6ff' : '#ffb966');
        l.intensity = b.shape === 'beacon' ? 14 : 7;
      }
    });
  }
}

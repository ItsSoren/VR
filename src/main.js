import { CloudShadows } from './cloud-shadows.js';
import { CaveEntrance } from './cave-entrance.js';
import { itemIcon } from './item-icons.js';
import { ITEMS } from './items.js';
import { Torches, craftTorches } from './torches.js';
import { DebugTools } from './debug.js';
import { randomSeed, parseSeed, chooseSpawn } from './world-session.js';
import { solarEnvironment, WeatherController, WEATHER } from './environment.js';
import { WeatherFX } from './weather-fx.js';
import * as THREE from 'three';
import { createWorld, Terrain } from './terrain.js';
import { Vegetation } from './vegetation.js';
import { setupVR } from './gorilla-vr.js';
import { Player } from './player.js';
import { createEditableWorld } from './sculpt.js';
import { ToolView } from './tools.js';
import { Landscape } from './landscape.js';
import { PlanarWaterReflection } from './water-reflection.js';
import { Caves, CavePlayer } from './caves.js';
import { MATERIALS, miningRule, surfaceMaterial, upgradeCost, upgradePick } from './mining.js';
import { HOTBAR, ACTIONS, createControls, wrapSlot } from './controls.js';
import {
  Building,
  SURFACES,
  SHAPES,
  normalizePlan,
  recipe,
  lockedReason,
  exchange,
  costText,
  boundsFor,
  collisionParts,
  overlap,
  surface,
} from './building.js';
import {
  createJourney,
  journeyStatus,
  advanceJourney,
  recordHarvest,
  CHAPTERS,
} from './journey.js';
import { ConstructionUI } from './construction-ui.js';
import {
  createAdventure,
  SPECIES,
  weapon,
  tickVitals,
  startDodge,
  receiveAttack,
  craftEquipment,
  consumeFood,
  unlockAchievements,
  night,
} from './adventure.js';
import { Fauna } from './fauna.js';
import { Atmosphere, createSkyMaterial } from './atmosphere.js';
import { AdventureUI, adventureCost } from './adventure-ui.js';
import { InventoryUI } from './inventory-ui.js';

const $ = (id) => document.getElementById(id);
const canvas = $('world');
const keys = new Set();
const STORE = 'vallon-v1';
const freshInventory = () => ({
  torch: 0,
  wood: 12,
  stone: 8,
  clay: 16,
  berries: 0,
  wool: 0,
  meat: 0,
  meal: 0,
  coal: 0,
  copper: 0,
  iron: 0,
  crystal: 0,
  diamond: 0,
});
let saved = null,
  storageOK = true;
try {
  saved = JSON.parse(localStorage.getItem(STORE) || 'null');
} catch {
  storageOK = false;
}
let randomRefresh = false;
try {
  randomRefresh = localStorage.getItem('vallon-random-refresh') === 'true';
} catch {}
const requestedSeed = parseSeed(new URL(location.href).searchParams.get('seed'));
if (randomRefresh || (requestedSeed !== null && requestedSeed !== saved?.seed)) {
  try {
    if (saved) localStorage.setItem('vallon-world:' + saved.seed, JSON.stringify(saved));
  } catch {}
  saved = null;
  if (!randomRefresh)
    try {
      saved = JSON.parse(localStorage.getItem('vallon-world:' + requestedSeed) || 'null');
    } catch {}
}
const controls = createControls(saved?.bindings);
let rebinding = null,
  hotbarSlot = 0;
let seed = Number.isInteger(saved?.seed)
  ? saved.seed
  : randomRefresh
    ? randomSeed()
    : (requestedSeed ?? randomSeed());
let weather = new WeatherController(seed, saved?.weather);
let motionScale = Math.max(0, Math.min(1, Number(saved?.motionScale ?? 0.65)));
try {
  if (window.self === window.top) {
    const url = new URL(location.href);
    url.searchParams.set('seed', seed);
    history.replaceState(null, '', url);
  }
} catch {}
let worldScale =
  saved?.worldScale ?? (saved?.blocks?.length || saved?.terrainEdits?.length ? 1 : 0.84);
let quality = ['high', 'medium', 'low'].includes(saved?.quality) ? saved.quality : 'high';
let pixelSize = THREE.MathUtils.clamp(Number(saved?.pixelSize) || 0, 0, 8);
let inventory = { ...freshInventory(), ...saved?.inventory };
for (const k of Object.keys(freshInventory()))
  inventory[k] = Math.max(0, Math.min(10000, Number(inventory[k]) || 0));
let selected = 0,
  playing = false,
  started = false,
  ready = false;
let activeTool = 'hand',
  actionMode = 'dig',
  brushRadius = 2.6,
  actionCooldown = 0,
  buildCooldown = 0,
  topoActive = false;
const tools = {
  hand: { label: 'Main', strength: 0.16, delay: 0.55 },
  shovel: { label: 'Pelle', strength: 0.36, delay: 0.22 },
  pick: { label: 'Pioche', strength: 0.27, delay: 0.32 },
};
let inventoryUI,
  debug,
  torchEquipped = false;
let adventure = createAdventure(saved?.adventure),
  fauna,
  adventureUI,
  combat = false,
  dodgeVector = { x: 0, z: 0 },
  achievementQueue = [];
let sensitivity = THREE.MathUtils.clamp(Number(saved?.sensitivity) || 1, 0.35, 2),
  clockHour = adventure.hour,
  elapsed = 0,
  frames = 0,
  frameTime = 0,
  fps = 60;
let entrance,
  landscape,
  caves,
  surfacePlayer,
  inCave = false,
  pickTier = Math.max(2, Math.min(4, Number(saved?.pickTier) || 2));
let mineProgress = 0,
  mineKey = '',
  mineLast = -99;
let terrain,
  vegetation,
  world,
  player,
  target = null,
  dirty = false;
let walked = Number(saved?.walked) || 0,
  collected = Number(saved?.collected) || 0;
const removedProps = new Set(Array.isArray(saved?.removed) ? saved.removed : []);
let journey = createJourney(
  saved?.journey || {
    harvested: {
      wood: [...removedProps].filter((id) => id.startsWith('tree:')).length * 4,
      stone: [...removedProps].filter((id) => id.startsWith('rock:')).length * 4,
      berries: inventory.berries,
      iron: inventory.iron + (pickTier >= 4 ? 8 : 0),
      crystal: inventory.crystal,
    },
  }
);
let buildPlan = normalizePlan(saved?.buildPlan),
  catalog,
  pendingBlueprint = null;
let favoritePlans = Array.from({ length: 3 }, (_, i) =>
  normalizePlan(saved?.favoritePlans?.[i] || { material: SURFACES[i].id })
);
const blocks = new Map();
const blockMeshes = [];
const blockGeometry = new THREE.BoxGeometry(1, 1, 1);
const scene = new THREE.Scene();
const building = new Building(scene, blocks, blockMeshes);
scene.background = new THREE.Color('#afc9c8');
const outdoorFog = new THREE.FogExp2('#b2cbe0', 0.00053);
scene.fog = outdoorFog;
const camera = new THREE.PerspectiveCamera(68, innerWidth / innerHeight, 0.08, 7000);
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
renderer.setSize(innerWidth, innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const hemi = new THREE.HemisphereLight('#d6e7f1', '#6c8055', 2.4);
scene.add(hemi);
const sun = new THREE.DirectionalLight('#ffdfad', 3.3);
sun.position.set(-100, 150, -160);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -100;
sun.shadow.camera.right = 100;
sun.shadow.camera.top = 100;
sun.shadow.camera.bottom = -100;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 550;
sun.shadow.bias = -0.00015;
sun.shadow.normalBias = 0.08;
scene.add(sun, sun.target);
const skyMaterial = createSkyMaterial();
const sky = new THREE.Mesh(new THREE.SphereGeometry(6000, 32, 16), skyMaterial);
sky.frustumCulled = false;
scene.add(sky);
const previewEdges = new WeakMap();
function outlineGeometry(geometry) {
  if (!previewEdges.has(geometry))
    previewEdges.set(geometry, new THREE.EdgesGeometry(geometry, 30));
  return previewEdges.get(geometry);
}
const preview = new THREE.LineSegments(
  outlineGeometry(blockGeometry),
  new THREE.LineBasicMaterial({
    color: '#eff6ce',
    transparent: true,
    opacity: 0.7,
  })
);
preview.visible = false;
scene.add(preview);
let blueprintGeometry = null,
  blueprintGhostKey = '';
const raycaster = new THREE.Raycaster(),
  direction = new THREE.Vector3(),
  hitPoint = new THREE.Vector3();
const colliderBox = new THREE.Box3(),
  rayHit = new THREE.Vector3(),
  instanceMatrix = new THREE.Matrix4(),
  normalMatrix = new THREE.Matrix3();
const toolView = new ToolView(camera, scene);
const atmosphere = new Atmosphere(renderer, scene);
const cloudShadows = new CloudShadows(renderer, scene, atmosphere.clouds);
let cloudMaterialsScan = -1;
const weatherFX = new WeatherFX(scene);
const waterReflection = new PlanarWaterReflection(renderer, scene, {
  exclude: [preview, atmosphere.particles.points, weatherFX.rain],
});
const torches = new Torches(scene, camera);
const torch = new THREE.PointLight('#ffe1b8', 65, 42, 1.5);
camera.add(torch);
torch.visible = false;
const undergroundAmbient = new THREE.HemisphereLight('#8fa9c0', '#282232', 0.5);
undergroundAmbient.visible = false;
scene.add(undergroundAmbient);

function toast(message) {
  $('toast').textContent = message;
  $('toast').classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => $('toast').classList.remove('show'), 2800);
}
function blockKey(x, y, z) {
  return `${x.toFixed(2)},${y.toFixed(2)},${z.toFixed(2)}`;
}
function addBlock(data) {
  return building.add(data);
}
function removeBlock(block) {
  building.remove(block);
  refreshGroundCover([block]);
}
function refreshGroundCover(pieces) {
  if (!pieces.length) return;
  vegetation?.terrainChanged({
    x: Math.min(...pieces.map((p) => p.x - (p.width || boundsFor(p).width) / 2)),
    z: Math.min(...pieces.map((p) => p.z - (p.depth || boundsFor(p).depth) / 2)),
    maxX: Math.max(...pieces.map((p) => p.x + (p.width || boundsFor(p).width) / 2)),
    maxZ: Math.max(...pieces.map((p) => p.z + (p.depth || boundsFor(p).depth) / 2)),
  });
  if (landscape) landscape.last = -Infinity;
}
function colliders(x, z, radius) {
  const list = vegetation?.queryColliders(x, z, radius) || [];
  list.push(...building.colliders(x, z, radius), ...entityColliders(x, z, radius));
  return list;
}
function entityColliders(x, z, radius, cave = false) {
  return [...(fauna?.active.values() || [])]
    .filter((e) => e.cave === cave && Math.hypot(e.x - x, e.z - z) < radius + 1)
    .map((e) => ({
      type: 'entity',
      x: e.x,
      z: e.z,
      baseY: e.y,
      height: SPECIES[e.species].height,
      radius: SPECIES[e.species].radius,
      id: e.id,
    }));
}
function save() {
  if (!dirty) return;
  try {
    localStorage.setItem(
      STORE,
      JSON.stringify({
        seed,
        worldScale,
        motionScale,
        weather: weather.serialize(),
        quality,
        pixelSize,
        bindings: controls.bindings,
        sensitivity,
        inventory,
        adventure,
        fauna: fauna?.serialize(),
        journey,
        buildPlan,
        favoritePlans,
        pickTier,
        inCave,
        caveEdits: caves.field.edits,
        crystalsRemoved: [...caves.removed],
        cavePosition: inCave ? player.position.toArray() : null,
        terrainEdits: world.serialize(),
        removed: [...removedProps],
        blocks: building.serialize(),
        torches: torches.serialize(),
        walked,
        collected,
        position: (inCave ? surfacePlayer : player).position.toArray(),
        yaw: (inCave ? surfacePlayer : player).yaw,
        pitch: (inCave ? surfacePlayer : player).pitch,
      })
    );
    storageOK = true;
    dirty = false;
  } catch {
    storageOK = false;
  }
  $('save-label').textContent = storageOK ? 'Sauvegarde locale' : 'Session temporaire';
}
function createLandscape(newSeed, restore = false) {
  entrance?.dispose();
  fauna?.dispose();
  terrain?.dispose();
  vegetation?.dispose();
  landscape?.dispose();
  caves?.dispose();
  inCave = false;
  scene.fog = outdoorFog;
  torch.visible = false;
  undergroundAmbient.visible = false;
  sun.visible = true;
  hemi.visible = true;
  sky.visible = true;
  building.clear();
  torches.clear();
  torchEquipped = false;
  debug?.reset();
  seed = newSeed;
  if (!restore) weather = new WeatherController(seed);
  const baseWorld = createWorld(seed, { scale: worldScale });
  world = createEditableWorld(baseWorld);
  if (restore) world.restore(saved?.terrainEdits);
  terrain = new Terrain(scene, world);
  vegetation = new Vegetation(scene, world, { quality });
  landscape = new Landscape(scene, world, vegetation);
  caves = new Caves(scene, world);
  if (restore) {
    caves.field.restore(saved?.caveEdits);
    caves.setRemoved(saved?.crystalsRemoved);
  }
  // The same persistent set is consulted when vegetation cells stream in later.
  vegetation.covered = (x, z, y) =>
    building.covered(x, z, y) ||
    (!!world.caveEntrance && Math.hypot(x - world.caveEntrance.x, z - world.caveEntrance.z) < 3);
  if (vegetation.removed instanceof Set) for (const id of removedProps) vegetation.removed.add(id);
  if (typeof vegetation.setRemoved === 'function') vegetation.setRemoved(removedProps);
  fauna = new Fauna(
    scene,
    world,
    caves.field,
    (x, z, r, cave) =>
      cave ? [] : [...vegetation.queryColliders(x, z, r), ...building.colliders(x, z, r)],
    restore ? saved?.fauna : null
  );
  player = new Player(camera, world, colliders);
  surfacePlayer = player;
  const spawn = chooseSpawn(baseWorld, seed);
  world.spawn = { x: spawn.x, z: spawn.z };
  entrance = new CaveEntrance(scene, world, caves, { ...baseWorld, spawn: world.spawn });
  world.caveEntrance = { x: entrance.position.x, z: entrance.position.z };
  player.teleport(spawn.x, spawn.z);
  player.yaw = spawn.yaw;
  player.pitch = spawn.pitch;
  player.syncCamera();
  if (restore && Array.isArray(saved?.blocks)) {
    for (const b of saved.blocks.slice(0, 2000)) building.add(b, false);
    building.rebuild();
  }
  if (restore && Array.isArray(saved?.position) && saved.position.every(Number.isFinite)) {
    player.teleport(saved.position[0], saved.position[2]);
    // Restore feet on top of a saved construction rather than inside its solid volume.
    for (const b of building.colliders(player.position.x, player.position.z, 1))
      if (
        Math.abs(b.x - player.position.x) < b.width / 2 + player.radius &&
        Math.abs(b.z - player.position.z) < b.depth / 2 + player.radius &&
        b.y + b.height <= saved.position[1] + 0.25
      )
        player.position.y = Math.max(player.position.y, b.y + b.height);
    player.yaw = Number(saved.yaw) || 0;
    player.pitch = THREE.MathUtils.clamp(Number(saved.pitch) || 0.01, -1.47, 1.47);
    player.syncCamera();
  }
  if (restore) torches.restore(saved?.torches);
  if (restore && saved?.inCave) enterCave(saved?.cavePosition);
  $('seed-label').textContent = String(seed);
  $('world-seed').value = seed;
  ready = false;
  $('play').disabled = true;
  $('play').innerHTML = 'Préparation du paysage… <span>↗</span>';
  updateInventory();
  applyQuality();
  dirty = true;
}
function updateInventory() {
  collectAchievements();
  for (const k of ['wood', 'stone', 'clay']) $(k + '-count').textContent = inventory[k];
  $('undo-sculpt').disabled = !world?.undoCount || inCave;
  $('berry-count').textContent = inventory.berries;
  adventureUI?.refresh();
  inventoryUI?.refresh();
  if (catalog && !$('construction').hidden) catalog.refresh();
  $('ore-bag').textContent =
    `Charbon ${inventory.coal} · Cuivre ${inventory.copper} · Fer ${inventory.iron} · Cristaux ${inventory.crystal} · Diamants ${inventory.diamond}`;
  const cost = upgradeCost(pickTier);
  $('upgrade-pick').textContent = cost
    ? `Pioche niv. ${pickTier} → ${pickTier + 1} · ${Object.entries(cost)
        .map(([k, n]) => n + ' ' + (k === 'wood' ? 'bois' : k === 'iron' ? 'fer' : 'pierre'))
        .join(' + ')}`
    : 'Pioche niv. 4 · maximale';
  $('upgrade-pick').disabled = !cost || Object.entries(cost).some(([k, n]) => inventory[k] < n);
}
function outdoorsVisible(on) {
  entrance.group.visible = on;
  terrain.rootGroup.visible = on;
  landscape.group.visible = on;
  sky.visible = on;
  sun.visible = on;
  hemi.visible = on;
  for (const cell of vegetation.grassCells.values())
    for (const mesh of cell.meshes) mesh.visible = on;
  for (const mesh of [
    ...vegetation.batchMeshes.values(),
    ...vegetation.foliageBatches.values(),
    ...vegetation.berryBatches.values(),
    ...blockMeshes,
  ])
    mesh.visible = on;
}
function enterCave(position) {
  if (inCave) return;
  surfacePlayer = player;
  player = new CavePlayer(camera, caves.field);
  player.colliderProvider = (x, z, r) => entityColliders(x, z, r, true);
  player.pitch = 0.03;
  adventure.stats.cave = true;
  if (fauna) {
    fauna.serialize();
    fauna.active.clear();
    fauna.scan = 0;
  }
  if (
    Array.isArray(position) &&
    position.length === 3 &&
    position.every(Number.isFinite) &&
    caves.field.fits(...position)
  ) {
    player.position.fromArray(position);
    player.syncCamera();
  }
  inCave = true;
  outdoorsVisible(false);
  caves.group.visible = true;
  torch.visible = true;
  undergroundAmbient.visible = true;
  scene.fog = new THREE.FogExp2('#0c1420', 0.027);
  scene.background.set('#0c1420');
  mineProgress = 0;
  keys.clear();
  drag = null;
  dirty = true;
  updateInventory();
  syncToolUI();
}
function leaveCave() {
  if (!inCave) return;
  if (fauna) {
    fauna.serialize();
    fauna.active.clear();
    fauna.scan = 0;
  }
  player = surfacePlayer;
  player.resetInput();
  player.syncCamera();
  inCave = false;
  caves.group.visible = false;
  torch.visible = false;
  undergroundAmbient.visible = false;
  scene.fog = outdoorFog;
  scene.background.set('#afc9c8');
  outdoorsVisible(true);
  mineProgress = 0;
  keys.clear();
  drag = null;
  dirty = true;
  updateInventory();
  syncToolUI();
}
function toggleCave() {
  const distance = entrance.distance(player, inCave);
  if (distance > 6 && !debug?.fly && !debug?.noclip) {
    toast(
      inCave
        ? `Rejoignez la sortie éclairée · ${Math.round(distance)} m.`
        : `Rejoignez l’entrée balisée · ${Math.round(distance)} m. Menu → Grottes.`
    );
    return;
  }
  if (inCave) {
    leaveCave();
    toast('De retour à la lumière.');
  } else {
    enterCave();
    toast(
      'Explorez les galeries : charbon, cristaux, puis pierre profonde. La sortie éclairée reste derrière vous.'
    );
  }
  save();
}
function panorama() {
  if (inCave) leaveCave();
  player.teleport(world.panorama.x, world.panorama.z);
  player.yaw = world.panorama.yaw;
  player.pitch = world.panorama.pitch;
  player.syncCamera();
  dirty = true;
  save();
  toast('Le belvédère du lac.');
}
function upgrade() {
  const result = upgradePick(inventory, pickTier);
  if (!result) {
    toast('Récoltez les matériaux indiqués pour améliorer votre pioche.');
    return;
  }
  inventory = result.inventory;
  pickTier = result.tier;
  selectTool('pick');
  updateInventory();
  dirty = true;
  save();
  toast(`Pioche niveau ${pickTier} : de nouvelles roches deviennent accessibles.`);
}
function advanceMining(hit, material) {
  const rule = miningRule(material, activeTool, pickTier);
  const required = Math.max(rule.tier, hit.tier || 1);
  if (rule.level < required) {
    if (elapsed - mineLast > 0.7 || mineKey !== `blocked:${material}`)
      toast(`${rule.label} · pioche de niveau ${required} requise.`);
    mineLast = elapsed;
    mineKey = `blocked:${material}`;
    mineProgress = 0;
    return false;
  }
  const k =
    hit.id ||
    hit.block?.key ||
    hit.collider?.id ||
    `${Math.floor(hit.point.x / 1.5)},${Math.floor(hit.point.y / 1.5)},${Math.floor(hit.point.z / 1.5)}`;
  journey.energy = Math.max(0, journey.energy - 0.22);
  dirty = true;
  if (k !== mineKey || elapsed - mineLast > 0.7) mineProgress = 0;
  mineKey = k;
  mineLast = elapsed;
  mineProgress += 0.18 / rule.duration;
  toolView.strike();
  player.impact(0.55);
  atmosphere.particles.burst(hit.point, material);
  if (mineProgress < 1) return false;
  mineProgress = 0;
  mineKey = '';
  return true;
}
function mineUnderground(hit) {
  if (!hit || !advanceMining(hit, hit.material)) return;
  if (hit.kind === 'crystal') {
    if (!caves.harvestCrystal(hit.id)) return;
    inventory.crystal += 4;
    recordHarvest(journey, 'crystal', 4);
    toast('+4 cristaux d’améthyste');
  } else {
    camera.getWorldDirection(direction);
    const edit = caves.field.mine(hit.point, direction);
    if (!edit) {
      toast('La galerie ne peut pas être prolongée ici.');
      return;
    }
    caves.invalidate(edit);
    const m = MATERIALS[hit.material],
      amount = hit.material === 'stone' || hit.material === 'deepstone' ? 1 : 3;
    inventory[m.resource] += amount;
    recordHarvest(journey, m.resource, amount);
    toast(`+${amount} ${m.label.toLowerCase()}`);
  }
  dirty = true;
  collected++;
  updateInventory();
  save();
}
function pause() {
  $('pixel-preview').hidden = true;
  playing = false;
  if (document.pointerLockElement === canvas) document.exitPointerLock();
  document.body.classList.remove('playing');
  $('welcome').hidden = false;
  $('playing-ui').hidden = true;
  $('target-label').textContent = '';
  preview.visible = false;
  $('mining-meter').hidden = true;
  toolView.brush.visible = false;
  keys.clear();
  player.resetInput();
  drag = null;
  save();
}
function play() {
  if (!ready) return;
  playing = true;
  started = true;
  document.body.classList.add('playing');
  $('welcome').hidden = true;
  $('playing-ui').hidden = false;
  $('settings').hidden = true;
  $('help').hidden = true;
  $('construction').hidden = true;
  $('journal').hidden = true;
  $('achievements').hidden = true;
  $('field-kit').hidden = true;
  if (debug) debug.root.hidden = true;
  $('play').innerHTML = 'Reprendre la promenade <span>↗</span>';
  canvas.focus();
}
function openDialog(id) {
  const hit = findTarget();
  pause();
  for (const d of [
    'settings',
    'help',
    'construction',
    'journal',
    'achievements',
    'field-kit',
    'debug',
  ])
    $(d).hidden = true;
  $('welcome').hidden = true;
  $(id).hidden = false;
  if (id === 'debug') debug.refresh();
  if (id === 'field-kit') inventoryUI?.refresh();
  if (id === 'construction') catalog?.open(hit?.block);
  if (id === 'journal') catalog?.journal();
  if (id === 'achievements') adventureUI?.refresh();
}
function closeDialog() {
  rebinding = null;
  syncControlsUI();
  for (const d of [
    'settings',
    'help',
    'construction',
    'journal',
    'achievements',
    'field-kit',
    'debug',
  ])
    $(d).hidden = true;
  if (started) play();
  else $('welcome').hidden = false;
}
function applyQuality() {
  const ratio = { high: 1.5, medium: 1.15, low: 0.85 }[quality];
  renderer.setPixelRatio(Math.min(devicePixelRatio, ratio));
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = quality !== 'low';
  const shadowSize = quality === 'high' ? 4096 : 2048;
  if (sun.shadow.mapSize.x !== shadowSize) {
    sun.shadow.map?.dispose();
    sun.shadow.map = null;
    sun.shadow.mapSize.set(shadowSize, shadowSize);
  }
  atmosphere.setQuality(quality);
  cloudShadows.setQuality(quality);
  vegetation?.setQuality(quality);
  $('quality').value = quality;
}
function updateTime() {
  $('time').value = clockHour;
  const env = solarEnvironment(clockHour),
    w = weather.values,
    darkness = env.day;
  skyMaterial.uniforms.uDay.value = darkness;
  skyMaterial.uniforms.uDawn.value = env.dawn;
  skyMaterial.uniforms.uDusk.value = env.dusk;
  skyMaterial.uniforms.uCover.value = w.cover;
  hemi.intensity = 0.24 + darkness * (1.35 + w.cover * 0.35) + weather.flash * 2;
  hemi.color.set('#8cadd7').lerp(new THREE.Color('#d6e7f1'), darkness);
  hemi.groundColor.set('#263142').lerp(new THREE.Color('#465637'), darkness);
  renderer.toneMappingExposure = 1.08;
  outdoorFog.color.fromArray(env.fog).lerp(new THREE.Color('#738697'), w.fog * 0.4);
  outdoorFog.density = renderer.xr.isPresenting ? Math.max(vr.hyper?.009:.0048,env.fogDensity + w.fog * .004) : env.fogDensity + w.fog * .004;
  if (weather.flash) outdoorFog.color.lerp(new THREE.Color('#d5e5ff'), weather.flash * 0.5);
  for (const m of vegetation?.grassMaterials || []) {
    m.uniforms.uDayLight.value = darkness;
    m.uniforms.uFogColor.value.copy(outdoorFog.color);
    m.uniforms.uFogDensity.value = outdoorFog.density;
  }
  if (landscape) landscape.waterMaterial.uniforms.dayLight.value = darkness;
  const phase = ((clockHour - 6) / 12) * Math.PI;
  const sunDirection = new THREE.Vector3(Math.cos(phase), Math.sin(phase) * 0.8, 0.22).normalize();
  skyMaterial.uniforms.uSun.value.copy(sunDirection);
  sun.color.fromArray(env.sun);
  sun.intensity =
    3.8 * darkness * THREE.MathUtils.smoothstep(sunDirection.y, 0, 0.22) * (1 - w.cover * 0.3);
  for (const m of vegetation?.grassMaterials || []) {
    m.uniforms.uSunDir.value.copy(sunDirection);
    m.uniforms.uLightColor.value.copy(sun.color);
  }
  $('weather-label').textContent = WEATHER[weather.type].label;
  const label = `${String(Math.floor(clockHour)).padStart(2, '0')}:${String(Math.floor((clockHour % 1) * 60)).padStart(2, '0')}`;
  $('hour').textContent = label;
  $('time-label').textContent = label;
}
function selectSlot(index) {
  combat = false;
  torchEquipped = false;
  hotbarSlot = wrapSlot(index);
  const slot = HOTBAR[hotbarSlot];
  topoActive = false;
  activeTool = slot.tool || 'hand';
  if (slot.material != null) {
    selected = slot.material;
    buildPlan = normalizePlan(favoritePlans[selected]);
    catalog?.set(buildPlan);
    dirty = true;
  }
  actionMode = 'dig';
  mineProgress = 0;
  mineKey = '';
  document
    .querySelectorAll('[data-slot]')
    .forEach((el) => el.classList.toggle('selected', Number(el.dataset.slot) === hotbarSlot));
  syncToolUI();
}
function propMaterial(prop) {
  return prop.type === 'tree' ? 'wood' : prop.berrySpecies != null ? 'berries' : 'stone';
}
function findTarget() {
  if (inCave) {
    camera.updateMatrixWorld();
    camera.getWorldDirection(direction);
    const rock = caves.target(camera.position, direction),
      entity = fauna?.target(camera.position, direction);
    return entity && (!rock || entity.distance < rock.distance) ? entity : rock;
  }
  camera.updateMatrixWorld();
  raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
  raycaster.far = 7;
  let best = null;
  const blockHit = raycaster.intersectObjects(blockMeshes, false)[0];
  if (blockHit) {
    const block = blockHit.object.userData.records[blockHit.instanceId];
    blockHit.object.getMatrixAt(blockHit.instanceId, instanceMatrix);
    instanceMatrix.premultiply(blockHit.object.matrixWorld);
    normalMatrix.getNormalMatrix(instanceMatrix);
    best = {
      kind: 'block',
      distance: blockHit.distance,
      point: blockHit.point.clone(),
      normal: blockHit.face.normal.clone().applyNormalMatrix(normalMatrix).normalize(),
      block,
    };
  }
  camera.getWorldDirection(direction);
  const nearby = vegetation.queryColliders(
    camera.position.x + direction.x * 3.5,
    camera.position.z + direction.z * 3.5,
    8,
    { includeBushes: true }
  );
  for (const c of nearby) {
    const r = c.radius;
    colliderBox.min.set(c.x - r, c.baseY, c.z - r);
    colliderBox.max.set(c.x + r, c.baseY + c.height, c.z + r);
    const hit = raycaster.ray.intersectBox(colliderBox, rayHit);
    if (hit) {
      const distance = hit.distanceTo(camera.position);
      if (distance <= 7 && (!best || distance < best.distance))
        best = { kind: 'prop', distance, point: hit.clone(), collider: c };
    }
  }
  for (let d = 0.15; d <= 7; d += 0.15) {
    hitPoint.copy(camera.position).addScaledVector(direction, d);
    if (hitPoint.y <= world.height(hitPoint.x, hitPoint.z)) {
      let a = d - 0.15,
        b = d;
      for (let i = 0; i < 6; i++) {
        const m = (a + b) / 2;
        hitPoint.copy(camera.position).addScaledVector(direction, m);
        if (hitPoint.y > world.height(hitPoint.x, hitPoint.z)) a = m;
        else b = m;
      }
      hitPoint.copy(camera.position).addScaledVector(direction, b);
      if (!best || b < best.distance)
        best = {
          kind: 'ground',
          distance: b,
          point: hitPoint.clone(),
          normal: new THREE.Vector3(0, 1, 0),
        };
      break;
    }
  }
  const entity = fauna?.target(camera.position, direction);
  return entity && (!best || entity.distance < best.distance) ? entity : best;
}
function placement(hit) {
  if (!hit || hit.kind === 'prop' || hit.kind === 'entity' || inCave) return null;
  const plan = normalizePlan(buildPlan),
    size = boundsFor(plan);
  if (plan.rotation % 2) [size.width, size.depth] = [size.depth, size.width];
  if (hit.kind === 'block') {
    const b = hit.block,
      n = hit.normal,
      p = { ...plan, x: b.x, y: b.y, z: b.z };
    if (Math.abs(n.y) > 0.5) p.y = n.y > 0 ? b.y + b.height : b.y - size.height;
    else if (Math.abs(n.x) > Math.abs(n.z)) p.x += (Math.sign(n.x) * (b.width + size.width)) / 2;
    else p.z += (Math.sign(n.z) * (b.depth + size.depth)) / 2;
    return p;
  }
  const grid = plan.size === 0.5 ? 0.5 : plan.size === 2 ? 2 : 1,
    x = Math.floor(hit.point.x / grid) * grid + grid / 2,
    z = Math.floor(hit.point.z / grid) * grid + grid / 2;
  const corners = [
    [-0.48, -0.48],
    [-0.48, 0.48],
    [0.48, -0.48],
    [0.48, 0.48],
  ].map(([dx, dz]) => world.height(x + dx * size.width, z + dz * size.depth));
  return { ...plan, x, z, y: Math.min(...corners) - 0.035 };
}
function canBuild(p, ignoreKey = null, pending = []) {
  if (!p || (blocks.size >= 2000 && !ignoreKey)) return false;
  const size = boundsFor(p),
    parts = collisionParts({ ...p, key: 'preview' }),
    body = {
      x: player.position.x,
      z: player.position.z,
      y: player.position.y,
      width: player.radius * 2,
      depth: player.radius * 2,
      height: player.bodyHeight,
    };
  if (p.y < world.height(p.x, p.z) - 0.8) return false;
  if (parts.some((part) => overlap(part, body))) return false;
  for (const c of entityColliders(p.x, p.z, Math.max(size.width, size.depth)))
    if (
      parts.some(
        (a) =>
          Math.hypot(a.x - c.x, a.z - c.z) < c.radius + Math.max(a.width, a.depth) / 2 &&
          a.y < c.baseY + c.height &&
          a.y + a.height > c.baseY
      )
    )
      return false;
  for (const other of building.colliders(p.x, p.z, Math.max(size.width, size.depth)))
    if (other.owner !== ignoreKey && parts.some((a) => overlap(a, other))) return false;
  for (const b of pending)
    if (
      parts.some((a) => collisionParts({ ...b, key: 'pending' }).some((other) => overlap(a, other)))
    )
      return false;
  for (const c of vegetation.queryColliders(p.x, p.z, Math.max(size.width, size.depth)))
    if (
      parts.some(
        (a) =>
          Math.hypot(a.x - c.x, a.z - c.z) < c.radius + Math.max(a.width, a.depth) / 2 &&
          a.y < c.baseY + c.height &&
          a.y + a.height > c.baseY
      )
    )
      return false;
  return ![...blocks.values()].some(
    (b) =>
      b.key !== ignoreKey &&
      Math.abs(b.x - p.x) < 0.001 &&
      Math.abs(b.y - p.y) < 0.001 &&
      Math.abs(b.z - p.z) < 0.001
  );
}
function harvest() {
  target = findTarget();
  if (target?.kind === 'entity') {
    attackEntity(target);
    return;
  }
  if (inCave) {
    mineUnderground(target);
    return;
  }
  if (!target || target.kind === 'ground') {
    toast('Approchez-vous d’un arbre, d’un rocher ou d’un bloc.');
    return;
  }
  const material =
    target.kind === 'prop' ? propMaterial(target.collider) : surface(target.block.material).mining;
  if (!advanceMining(target, material)) return;
  if (target.kind === 'block') {
    for (const [k, n] of Object.entries(target.block.paid)) inventory[k] = (inventory[k] || 0) + n;
    removeBlock(target.block);
    toast('Pièce démontée · recette récupérée');
  } else {
    const amount = target.collider.berrySpecies != null ? target.collider.berryCount : 4;
    const resource = vegetation.harvest(target.collider.id);
    if (!resource) return;
    removedProps.add(target.collider.id);
    inventory[resource] = (inventory[resource] || 0) + amount;
    collected += amount;
    recordHarvest(journey, resource, amount);
    toast(
      resource === 'berries'
        ? `+${amount} baies · buisson récolté`
        : resource === 'wood'
          ? '+4 bois · de quoi bâtir'
          : '+4 pierres · solides fondations'
    );
  }
  toolView.strike();
  player.impact(0.55);
  dirty = true;
  updateInventory();
  save();
}
function selectTool(name) {
  if (!tools[name]) return;
  selectSlot(HOTBAR.findIndex((s) => s.tool === name));
  canvas.focus();
}
function syncToolUI() {
  document
    .querySelectorAll('[data-quick-action]')
    .forEach((b) =>
      b.classList.toggle('selected', topoActive && b.dataset.quickAction === actionMode)
    );
  $('interaction').firstElementChild.textContent = topoActive
    ? 'E / clic G · ' + { dig: 'Creuser', raise: 'Remblayer', smooth: 'Lisser' }[actionMode]
    : 'E / clic G · Miner';

  for (const [slot, key] of ['hand', 'shovel', 'pick'].entries()) {
    const button = document.querySelector(`[data-slot="${slot}"]`),
      old = button.querySelector('.tool-icon');
    const iconKey = key + ':' + pickTier;
    if (button.dataset.iconKey !== iconKey) {
      (old || button.querySelector('.item-icon')).outerHTML = itemIcon(key, undefined, pickTier);
      button.dataset.iconKey = iconKey;
    }
  }
  $('torch-equip').classList.toggle('selected', torchEquipped);
  $('torch-count').textContent = inventory.torch;
  if (!$('torch-equip').dataset.iconKey) {
    $('torch-equip').querySelector('.item-icon').outerHTML = itemIcon('torch', '#ffb646');
    $('torch-equip').dataset.iconKey = 'torch';
  }
  favoritePlans.forEach((p, i) => {
    const m = surface(p.material),
      el = document.querySelector(`[data-slot="${i + 3}"]`);
    el.querySelector('span').textContent =
      SHAPES.find((s) => s.id === p.shape).label === 'Bloc'
        ? m.label
        : SHAPES.find((s) => s.id === p.shape).label;
    const iconKey = p.shape + ':' + m.color;
    if (el.dataset.iconKey !== iconKey) {
      el.querySelector('.cube').innerHTML = itemIcon(p.shape, m.color);
      el.dataset.iconKey = iconKey;
    }
    el.querySelector('.cube').style.backgroundColor = 'transparent';
    el.querySelector('b').textContent = inventory[Object.keys(recipe(p))[0]] || 0;
    el.setAttribute(
      'aria-label',
      `${i + 4} — ${SHAPES.find((s) => s.id === p.shape).label}, ${m.label}`
    );
  });
  document
    .querySelectorAll('[data-tool]')
    .forEach((el) => el.classList.toggle('selected', el.dataset.tool === activeTool));
  document
    .querySelectorAll('[data-action]')
    .forEach((el) => el.classList.toggle('selected', el.dataset.action === actionMode));
  $('build-label').textContent = pendingBlueprint
    ? { cabin: 'Chalet', terrace: 'Terrasse', workshop: 'Atelier couvert' }[pendingBlueprint]
    : SHAPES.find((s) => s.id === buildPlan.shape).label +
      ' · ' +
      surface(buildPlan.material).label;
  const cost = pendingBlueprint
    ? blueprintPieces(pendingBlueprint, { x: 0, y: 0, z: 0 }).reduce((sum, p) => {
        for (const [k, n] of Object.entries(recipe(p))) sum[k] = (sum[k] || 0) + n;
        return sum;
      }, {})
    : recipe(buildPlan);
  $('build-cost').textContent = journey.creative ? 'Libre' : costText(cost);
  $('cancel-blueprint').hidden = !pendingBlueprint;
  $('tool-status').textContent =
    `${hotbarSlot >= 3 ? HOTBAR[hotbarSlot].label : tools[activeTool].label}${activeTool === 'pick' ? ' niv. ' + pickTier : ''} · rayon ${brushRadius.toFixed(1)} m`;
  $('interaction').innerHTML =
    `Clic G / ${controls.label('primary')} <b>casser</b><span>·</span>Clic D / ${controls.label('build')} <b>poser</b><span>·</span>Clic D glissé <b>regarder</b>`;
}
function syncControlsUI() {
  document
    .querySelectorAll('[data-key]')
    .forEach((el) => (el.textContent = controls.label(el.dataset.key)));
  document.querySelectorAll('[data-bind]').forEach((el) => {
    el.textContent = el.dataset.bind === rebinding ? '…' : controls.label(el.dataset.bind);
    el.classList.toggle('waiting', el.dataset.bind === rebinding);
  });
  $('binding-status').textContent = rebinding
    ? `Appuyez sur une touche pour « ${ACTIONS[rebinding]} ». Échap pour annuler.`
    : 'Cliquez sur une touche pour la modifier.';
}
function cycleMode() {
  topoActive = true;
  actionMode = ['dig', 'raise', 'smooth'][(['dig', 'raise', 'smooth'].indexOf(actionMode) + 1) % 3];
  mineProgress = 0;
  syncToolUI();
}
function resizeBrush(amount) {
  brushRadius = THREE.MathUtils.clamp(brushRadius + amount, 1.8, 4);
  syncToolUI();
}
function changedTerrain(record) {
  terrain.invalidate(record.bounds);
  vegetation.terrainChanged(record.bounds);
  const floor = world.height(player.position.x, player.position.z);
  if (floor > player.position.y) {
    player.position.y = floor;
    player.velocity.y = 0;
    player.grounded = true;
    player.syncCamera();
  }
  dirty = true;
  updateInventory();
}
function sculpt(hit) {
  if (!hit || hit.kind !== 'ground') return false;
  const material = surfaceMaterial(world, hit.point.x, hit.point.z),
    rule = miningRule(material, activeTool, pickTier);
  if (actionMode !== 'raise' && !rule.allowed) {
    toast(`${rule.label} · pioche de niveau ${rule.tier} requise.`);
    return false;
  }
  if (actionMode === 'raise' && inventory.clay < 1) {
    toast('Plus de terre : creusez pour en récupérer.');
    return false;
  }
  for (const b of blocks.values())
    if (Math.hypot(b.x - hit.point.x, b.z - hit.point.z) < brushRadius + 1) {
      toast('Éloignez la brosse des constructions.');
      return false;
    }
  const stroke = world.stroke(hit.point.x, hit.point.z, {
    mode: actionMode,
    radius: brushRadius,
    strength:
      tools[activeTool].strength *
      (activeTool === 'pick' && rule.tier === 1 ? 0.38 : 1) *
      (rule.tier >= 2 ? 1.1 / rule.duration : 1),
    miningTier: rule.level,
  });
  if (!stroke) {
    toast('Le sol ne peut plus être travaillé à cet endroit.');
    return false;
  }
  stroke.resourceDelta = actionMode === 'dig' ? 1 : actionMode === 'raise' ? -1 : 0;
  stroke.resourceKey = actionMode === 'dig' ? rule.resource : 'clay';
  inventory[stroke.resourceKey] += stroke.resourceDelta;
  if (stroke.resourceDelta > 0) recordHarvest(journey, stroke.resourceKey, stroke.resourceDelta);
  journey.energy = Math.max(0, journey.energy - 0.6);
  toolView.strike();
  player.impact(0.55);
  atmosphere.particles.burst(hit.point, material);
  changedTerrain(stroke);
  return true;
}
function useTool() {
  if (torchEquipped) {
    if (!playing || actionCooldown > 0) return;
    camera.getWorldDirection(direction);
    const found = torches.target(new THREE.Ray(camera.position, direction));
    if (found) {
      torches.remove(found);
      inventory.torch++;
      dirty = true;
      updateInventory();
      save();
    } else toast('F / clic droit pour poser la torche.');
    actionCooldown = 0.3;
    return;
  }
  if (!playing || actionCooldown > 0) return;
  const hit = findTarget();
  if (hit?.kind === 'entity') {
    attackEntity(hit);
    return;
  }
  if (combat) {
    toolView.strike();
    player.impact(0.55);
    actionCooldown = weapon(adventure).delay;
    return;
  }
  if (inCave) {
    mineUnderground(hit);
    actionCooldown = 0.18;
  } else if (hit?.kind === 'ground') {
    if (sculpt(hit)) actionCooldown = tools[activeTool].delay;
  } else {
    harvest();
    actionCooldown = 0.18;
  }
}
function undoSculpt() {
  if (inCave) {
    toast('L’annulation concerne le terrain de surface.');
    return;
  }
  if (!world.undoCount) {
    toast('Aucun coup de terrain à annuler.');
    return;
  }
  const record = world.peekUndo();
  for (const b of blocks.values())
    if (
      b.x >= record.bounds.x &&
      b.x <= record.bounds.maxX &&
      b.z >= record.bounds.z &&
      b.z <= record.bounds.maxZ
    ) {
      toast('Récupérez les blocs posés dans cette zone avant d’annuler.');
      return;
    }
  if ((record.resourceDelta || 0) > inventory[record.resourceKey || 'clay']) {
    toast('Récupérez la terre utilisée avant d’annuler.');
    return;
  }
  world.undo();
  inventory[record.resourceKey || 'clay'] -= record.resourceDelta || 0;
  changedTerrain(record);
  save();
  toast('Dernier coup de terrain annulé.');
}
function choosePlan(plan) {
  buildPlan = normalizePlan(plan);
  pendingBlueprint = null;
  hotbarSlot = hotbarSlot >= 3 ? hotbarSlot : 3;
  selected = hotbarSlot - 3;
  favoritePlans[selected] = { ...buildPlan };
  activeTool = 'hand';
  mineProgress = 0;
  document
    .querySelectorAll('[data-slot]')
    .forEach((el) => el.classList.toggle('selected', Number(el.dataset.slot) === hotbarSlot));
  syncToolUI();
  dirty = true;
  save();
}
function build() {
  if (!playing || buildCooldown > 0) return;
  buildCooldown = 0.22;
  if (topoActive) {
    const previous = actionMode;
    actionMode = 'raise';
    const ok = sculpt(findTarget());
    actionMode = previous;
    syncToolUI();
    return ok;
  }
  if (torchEquipped) {
    placeTorch();
    return;
  }
  if (inCave) {
    toast('Remontez à la surface pour bâtir votre refuge.');
    return;
  }
  const p = placement(findTarget());
  if (!p) {
    toast('Visez le sol ou une pièce à moins de 7 m.');
    return;
  }
  const pieces = pendingBlueprint ? blueprintPieces(pendingBlueprint, p) : [p],
    cost = {},
    pending = [];
  for (const b of pieces) {
    const reason = journey.creative ? '' : lockedReason(b, journey);
    if (reason) {
      toast(reason);
      return;
    }
    if (!canBuild(b, null, pending)) {
      toast('Emplacement occupé ou terrain trop irrégulier. Aplanissez le sol avec la pelle.');
      return;
    }
    pending.push(b);
    for (const [k, n] of Object.entries(recipe(b))) cost[k] = (cost[k] || 0) + n;
  }
  if (blocks.size + pieces.length > 2000) {
    toast('Limite de 2 000 pièces atteinte.');
    return;
  }
  const next = exchange(inventory, journey.creative ? {} : cost);
  if (!next) {
    toast('Ressources nécessaires : ' + costText(cost));
    return;
  }
  for (const b of pieces)
    building.add({ ...b, paid: journey.creative ? {} : recipe(b), free: journey.creative }, false);
  building.rebuild();
  refreshGroundCover(pieces);
  inventory = next;
  dirty = true;
  updateInventory();
  save();
  toast(
    pendingBlueprint
      ? 'Construction assemblée.'
      : SHAPES.find((s) => s.id === p.shape).label + ' posée.'
  );
}
function editPiece(old, plan) {
  if (!blocks.has(old.key)) {
    toast('Cette pièce n’existe plus.');
    return false;
  }
  const p = { ...normalizePlan(plan), x: old.x, y: old.y, z: old.z },
    reason = journey.creative ? '' : lockedReason(p, journey);
  if (reason) {
    toast(reason);
    return false;
  }
  if (!canBuild(p, old.key)) {
    toast('Cette forme empiète sur une autre pièce ou sur le personnage.');
    return false;
  }
  const paid = journey.creative ? {} : recipe(p),
    next = exchange(inventory, paid, old.paid);
  if (!next) {
    toast('Ressources nécessaires pour la modification : ' + costText(paid));
    return false;
  }
  building.remove(old);
  building.add({
    ...p,
    paid,
    free: journey.creative,
    lit: old.lit,
    open: old.open && p.shape === 'door',
  });
  refreshGroundCover([old, p]);
  inventory = next;
  dirty = true;
  updateInventory();
  save();
  toast('Pièce modifiée · différence de recette réglée.');
  return true;
}
function eatBerry() {
  if (!consumeFood(adventure, journey, inventory, 'berries')) {
    toast(inventory.berries ? 'Vous êtes déjà en pleine forme.' : 'Récoltez un buisson de baies.');
    return;
  }
  dirty = true;
  updateInventory();
  catalog?.journal();
  save();
  toast('Une baie · +8 santé, +25 énergie');
}
function returnHome() {
  if (!journey.home) {
    panorama();
    return;
  }
  if (inCave) leaveCave();
  player.teleport(...journey.home);
  dirty = true;
  save();
  toast('Retour au refuge.');
}
function interact() {
  const hit = findTarget();
  if (hit?.kind === 'entity') {
    if (hit.distance > 3) {
      toast('Approchez à moins de 3 m pour nourrir cet animal.');
      return;
    }
    const result = fauna.feed(hit.entity, adventure, inventory);
    toast(result.message);
    if (result.ok) {
      dirty = true;
      updateInventory();
      save();
    }
    return;
  }
  const b = hit?.block;
  if (!b) {
    eatBerry();
    return;
  }
  if (b.shape === 'door') {
    b.open = !b.open;
    b.parts = collisionParts(b);
    building.rebuild();
    toast(b.open ? 'Porte ouverte' : 'Porte fermée');
  } else if (b.shape === 'workbench') {
    journey.stations.workbench = true;
    journey.home = [b.x, b.z + 2];
    toast('Atelier ouvert · charpente, mobilier et jardin débloqués.');
  } else if (b.shape === 'forge') {
    if (!journey.stations.forge) {
      if (inventory.coal < 2) {
        toast('2 charbons sont nécessaires pour allumer la forge.');
        return;
      }
      inventory.coal -= 2;
    }
    journey.stations.forge = true;
    b.lit = true;
    building.rebuild();
    toast('Forge allumée · briques, verre, métaux et lanternes débloqués.');
  } else if (b.shape === 'beacon') {
    journey.stations.beacon = true;
    journey.home = [b.x, b.z + 2];
    b.lit = true;
    toast('Phare activé · votre refuge est repéré et votre retour enregistré.');
  } else {
    openDialog('construction');
    return;
  }
  dirty = true;
  updateInventory();
  save();
}

function toggleCombat() {
  combat = !combat;
  mineProgress = 0;
  keys.clear();
  adventure.guard = false;
  adventure.guardTime = 0;
  syncToolUI();
  toast(
    combat
      ? weapon(adventure).label +
          ' · ' +
          controls.label('guard') +
          ' maintenir : garde · ' +
          controls.label('dodge') +
          ' : esquive'
      : 'Outils en main'
  );
}
function dodge() {
  if (!playing) return;
  if (!startDodge(adventure, journey.energy)) {
    toast(adventure.dodgeCd > 0 ? 'L’esquive récupère.' : '18 points d’énergie sont nécessaires.');
    return;
  }
  journey.energy -= 18;
  const right = Number(keys.has('KeyD')) - Number(keys.has('KeyA') || keys.has('KeyQ')),
    forward = Number(keys.has('KeyW') || keys.has('KeyZ')) - Number(keys.has('KeyS')),
    len = Math.hypot(right, forward) || 1;
  const side = right || forward ? right : 1;
  dodgeVector = {
    x: (side * Math.cos(player.yaw) - forward * Math.sin(player.yaw)) / len,
    z: (-forward * Math.cos(player.yaw) - side * Math.sin(player.yaw)) / len,
  };
  dirty = true;
}
function attackEntity(hit) {
  if (adventure.guard) {
    actionCooldown = 0.25;
    toast('Baissez la garde pour frapper.');
    return;
  }
  if (hit.distance > 3.2) {
    toast('Approchez à moins de 3,2 m pour frapper.');
    actionCooldown = 0.25;
    return;
  }
  const result = fauna.attack(hit.entity, adventure, {
    combat,
    tool: activeTool,
    energy: journey.energy,
  });
  if (!result.ok) {
    if (result.message) toast(result.message);
    actionCooldown = 0.18;
    return;
  }
  journey.energy = result.energy;
  actionCooldown = weapon(adventure).delay;
  toolView.strike();
  player.impact(0.55);
  atmosphere.particles.burst(hit.point, 'entity');
  if (result.dead) {
    for (const [k, n] of Object.entries(result.loot)) inventory[k] = (inventory[k] || 0) + n;
    if (
      !SPECIES[hit.entity.species].passive &&
      journey.home &&
      Math.hypot(hit.entity.x - journey.home[0], hit.entity.z - journey.home[1]) < 20
    )
      adventure.stats.homeDefence++;
    toast(SPECIES[hit.entity.species].label + ' vaincu · ' + adventureCost(result.loot));
    updateInventory();
  }
  dirty = true;
  save();
}
function lightProtection(p, e) {
  return (
    e?.species === 'wolf' &&
    [...blocks.values()].some(
      (b) =>
        (b.shape === 'lantern' || (b.shape === 'beacon' && b.lit)) &&
        Math.hypot(b.x - p.x, b.z - p.z) < (b.shape === 'beacon' ? 14 : 6)
    )
  );
}
function hurtPlayer(event) {
  if (debug?.god) return;
  const e = event.entity,
    a = Math.atan2(-(e.x - player.position.x), -(e.z - player.position.z)),
    diff = Math.atan2(Math.sin(a - player.yaw), Math.cos(a - player.yaw)),
    result = receiveAttack(adventure, event.damage, journey.energy, {
      facing: Math.abs(diff) < Math.PI * 0.42,
    });
  journey.energy = result.energy;
  if (result.kind === 'parry') {
    e.mode = 'recover';
    e.timer = 1.4;
    toast('Parade parfaite · contre-attaquez !');
  } else if (result.kind === 'dodge') toast('Attaque esquivée');
  else if (result.damage) {
    $('damage-flash').classList.remove('hit');
    void $('damage-flash').offsetWidth;
    $('damage-flash').classList.add('hit');
    toast(`−${result.damage} santé${result.kind === 'block' ? ' · garde' : ''}`);
  }
  if (result.kind === 'hit' && event.slow) adventure.slowTime = event.slow;
  if (adventure.health <= 0) {
    adventure.slowTime = 0;
    adventure.deaths++;
    adventure.health = 70;
    adventure.nightSeconds = 0;
    adventure.invulnerable = 10;
    journey.energy = 60;
    if (inCave) leaveCave();
    if (journey.home) player.teleport(...journey.home);
    else {
      player.teleport(world.panorama.x, world.panorama.z);
      player.yaw = world.panorama.yaw;
      player.syncCamera();
    }
    fauna.resetAggression(player.position);
    keys.clear();
    toast('Vous reprenez connaissance au refuge · matériaux conservés.');
  }
  dirty = true;
  updateInventory();
  save();
}
function equipTorch() {
  if (!inventory.torch) {
    toast('Fabriquez des torches dans le sac : 1 bois + 1 charbon.');
    return;
  }
  combat = false;
  torchEquipped = !torchEquipped;
  syncToolUI();
  canvas.focus();
}
function placeTorch() {
  if (!playing || !inventory.torch) return;
  const hit = findTarget();
  if (!hit?.point) {
    toast('Visez une surface à moins de 7 m.');
    return;
  }
  const point = hit.point.clone();
  if (hit.normal) point.addScaledVector(hit.normal, 0.1);
  else {
    camera.getWorldDirection(direction);
    point.addScaledVector(direction, -0.15);
  }
  if (torches.add(point, inCave)) {
    inventory.torch--;
    torchEquipped = inventory.torch > 0;
    dirty = true;
    updateInventory();
    save();
    toast('Torche posée · E pour la récupérer.');
  } else toast('Limite de 128 torches atteinte.');
}
function craftAdventure(type) {
  if (type === 'torch') {
    const ok = craftTorches(inventory);
    toast(ok ? '4 torches fabriquées' : 'Il faut 1 bois et 1 charbon.');
    if (ok) {
      dirty = true;
      updateInventory();
      save();
    }
    return;
  }
  const result = craftEquipment(adventure, inventory, journey.stations, type);
  toast(
    result.ok
      ? type === 'meal'
        ? '2 rations préparées'
        : type === 'sword'
          ? weapon(adventure).label + ' fabriquée'
          : 'Protection améliorée'
      : result.error
  );
  if (result.ok) {
    dirty = true;
    updateInventory();
    save();
  }
}
function eatMeal() {
  if (!consumeFood(adventure, journey, inventory, 'meal')) {
    toast('Une ration cuite est nécessaire, ou vous êtes déjà en pleine forme.');
    return;
  }
  dirty = true;
  updateInventory();
  save();
  toast('Ration · +35 santé, +40 énergie');
}
function showAchievement(a) {
  $('achievement-notice').querySelector('strong').textContent = a.title;
  $('achievement-notice').querySelector('small').textContent = adventureCost(a.reward);
  $('achievement-notice').classList.add('show');
  clearTimeout(showAchievement.timer);
  showAchievement.timer = setTimeout(() => $('achievement-notice').classList.remove('show'), 3200);
}
function collectAchievements() {
  if (adventure.debugged) return [];
  const awards = unlockAchievements(
    adventure,
    {
      j: journey,
      blocks: [...blocks.values()],
      refuge: journeyStatus(journey, blocks.values(), pickTier).roof,
      walked,
    },
    inventory
  );
  if (awards.length) {
    achievementQueue.push(...awards);
    dirty = true;
  }
  return awards;
}

function blueprintPieces(name, anchor) {
  const parts = [],
    material = buildPlan.material,
    add = (shape, x, y, z, mat = material, rotation = 0) =>
      parts.push({
        ...normalizePlan({ ...buildPlan, shape, material: mat, size: 1, rotation, mirror: false }),
        x,
        y,
        z,
      });
  if (name === 'cabin') {
    for (let x = -1; x <= 1; x++)
      for (let z = -1; z <= 1; z++) {
        add('slab', x, 0, z, 'pine');
        if (Math.abs(x) === 1 || Math.abs(z) === 1) {
          if (x === 0 && z === 1) add('door', x, 0.25, z, 'oak');
          else {
            const type = Math.abs(x) === 1 && Math.abs(z) === 1 ? 'cube' : 'wall';
            add(type, x, 0.25, z, material, Math.abs(x) === 1 ? 1 : 0);
            add(type, x, 1.25, z, material, Math.abs(x) === 1 ? 1 : 0);
          }
        }
        add(x === 0 ? 'ridge' : 'roof', x, 2.25, z, 'pine', x === 0 ? 1 : x < 0 ? 3 : 1);
      }
    add('workbench', 0, 0, -2, 'oak');
  } else if (name === 'terrace') {
    for (let x = -1; x <= 1; x++) for (let z = -1; z <= 1; z++) add('slab', x, 0, z);
    for (let x = -1; x <= 1; x++) add('fence', x, 0.25, -1);
    add('bench', 0, 0.25, 0, 'pine');
    add('planter', 1, 0.25, 1, 'oak');
  } else {
    for (let x = -1; x <= 1; x++)
      for (let z = -1; z <= 1; z++) {
        add('slab', x, 0, z, 'stone');
        add('roof', x, 2.25, z, 'pine');
      }
    for (const x of [-1.35, 1.35])
      for (const z of [-1.35, 1.35]) {
        add('pillar', x, 0.25, z, 'pine');
        add('pillar', x, 1.25, z, 'pine');
      }
    add('workbench', -0.5, 0.25, -0.5, 'oak');
    add('forge', 0.5, 0.25, 0.5, 'stone');
  }
  const a = (buildPlan.rotation * Math.PI) / 2,
    c = Math.cos(a),
    sn = Math.sin(a);
  return parts.map((p) => ({
    ...p,
    x: anchor.x + p.x * c + p.z * sn,
    y: anchor.y + p.y,
    z: anchor.z + p.z * c - p.x * sn,
    rotation: (p.rotation + buildPlan.rotation) % 4,
  }));
}
function chooseBlueprint(name) {
  pendingBlueprint = name;
  hotbarSlot = 3;
  selected = 0;
  activeTool = 'hand';
  document
    .querySelectorAll('[data-slot]')
    .forEach((el) => el.classList.toggle('selected', Number(el.dataset.slot) === 3));
  closeDialog();
  syncToolUI();
  toast('Plan prêt · visez un sol dégagé, puis posez avec le clic droit.');
}
function rotateBuild() {
  buildPlan.rotation = (buildPlan.rotation + 1) % 4;
  if (hotbarSlot >= 3 && !pendingBlueprint) favoritePlans[hotbarSlot - 3] = { ...buildPlan };
  catalog?.set(buildPlan);
  dirty = true;
  syncToolUI();
}
function showBuildPreview(p) {
  preview.visible = !!p && hotbarSlot >= 3;
  if (!preview.visible) return;
  let valid = canBuild(p) && (!lockedReason(p, journey) || journey.creative);
  if (pendingBlueprint) {
    const key = pendingBlueprint + ':' + buildPlan.rotation;
    if (blueprintGhostKey !== key) {
      if (blueprintGeometry) {
        previewEdges.get(blueprintGeometry)?.dispose();
        blueprintGeometry.dispose();
      }
      const positions = [],
        v = new THREE.Vector3(),
        q = new THREE.Quaternion();
      for (const part of blueprintPieces(pendingBlueprint, { x: 0, y: 0, z: 0 })) {
        const attr = building.geometry(part).attributes.position;
        q.setFromAxisAngle(THREE.Object3D.DEFAULT_UP, (part.rotation * Math.PI) / 2);
        for (let i = 0; i < attr.count; i++) {
          v.fromBufferAttribute(attr, i)
            .multiplyScalar(part.size)
            .applyQuaternion(q)
            .add(new THREE.Vector3(part.x, part.y, part.z));
          positions.push(v.x, v.y, v.z);
        }
      }
      blueprintGeometry = new THREE.BufferGeometry();
      blueprintGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      blueprintGeometry.computeBoundingSphere();
      blueprintGhostKey = key;
    }
    preview.geometry = outlineGeometry(blueprintGeometry);
    preview.rotation.y = 0;
    preview.scale.setScalar(1);
    const pending = [];
    valid = true;
    for (const b of blueprintPieces(pendingBlueprint, p)) {
      if (!canBuild(b, null, pending) || (!journey.creative && lockedReason(b, journey))) {
        valid = false;
        break;
      }
      pending.push(b);
    }
  } else {
    preview.geometry = outlineGeometry(building.geometry(p));
    preview.rotation.y = (p.rotation * Math.PI) / 2;
    preview.scale.setScalar(p.size);
  }
  preview.position.set(p.x, p.y, p.z);
  preview.material.color.set(valid ? '#eff6ce' : '#e8a082');
}

let drag = null;
canvas.addEventListener('pointerdown', (e) => {
  if (!playing || drag || ![0, 1, 2].includes(e.button)) return;
  e.preventDefault();
  canvas.focus();
  drag = {
    id: e.pointerId,
    button: e.button,
    x: e.clientX,
    y: e.clientY,
    moved: 0,
    start: performance.now(),
    lookX: 0,
    lookY: 0,
    looking: false,
  };
  try {
    canvas.setPointerCapture(e.pointerId);
  } catch {}
});
canvas.addEventListener('pointermove', (e) => {
  if (!playing) return;
  if (document.pointerLockElement === canvas) {
    player.look(e.movementX, e.movementY, sensitivity);
    return;
  }
  if (!drag || e.pointerId !== drag.id) return;
  const dx = e.clientX - drag.x,
    dy = e.clientY - drag.y;
  drag.moved += Math.hypot(dx, dy);
  drag.lookX += dx;
  drag.lookY += dy;
  if (drag.moved >= 3) {
    player.look(drag.lookX, drag.lookY, sensitivity);
    drag.lookX = 0;
    drag.lookY = 0;
    drag.looking = true;
    mineProgress = 0;
    mineKey = '';
  }
  drag.x = e.clientX;
  drag.y = e.clientY;
});
canvas.addEventListener('pointerup', (e) => {
  if (!drag || e.pointerId !== drag.id) return;
  const click = !drag.looking && !drag.acted,
    button = drag.button;
  drag = null;
  try {
    canvas.releasePointerCapture(e.pointerId);
  } catch {}
  if (click && playing) {
    if (button === 0) useTool();
    else if (button === 2) build();
  }
});
canvas.addEventListener('pointercancel', () => {
  drag = null;
});
canvas.addEventListener('lostpointercapture', () => {
  drag = null;
});
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
canvas.addEventListener(
  'wheel',
  (e) => {
    if (playing) {
      e.preventDefault();
      if (e.shiftKey) resizeBrush(Math.sign(e.deltaY) * 0.4);
      else selectSlot(hotbarSlot + Math.sign(e.deltaY));
    }
  },
  { passive: false }
);
window.addEventListener('keydown', (e) => {
  if (e.code === 'F6' && !e.repeat && !rebinding) {
    e.preventDefault();
    if (!$('pixel-preview').hidden) $('pixel-preview').hidden = true;
    else {
      if (!playing) play();
      $('pixel-preview').hidden = false;
    }
    return;
  }
  if ($('pixel-preview').contains(e.target) && e.code !== 'Escape') return;

  if (e.code === 'F3' && !e.repeat) {
    e.preventDefault();
    if (!debug.root.hidden) closeDialog();
    else openDialog('debug');
    return;
  }
  if (rebinding) {
    e.preventDefault();
    if (e.code === 'Escape') {
      rebinding = null;
      syncControlsUI();
      return;
    }
    const result = controls.bind(rebinding, e.code);
    if (!result.ok) {
      $('binding-status').textContent = result.error;
      return;
    }
    rebinding = null;
    keys.clear();
    syncControlsUI();
    syncToolUI();
    dirty = true;
    save();
    return;
  }
  if (e.code === 'Escape') {
    e.preventDefault();
    if (
      ['settings', 'help', 'construction', 'journal', 'achievements', 'field-kit', 'debug'].some(
        (d) => !$(d).hidden
      )
    )
      closeDialog();
    else if (playing) pause();
    else play();
    return;
  }
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
  const dialogAction = controls.action(e.code);
  if (['catalog', 'journal', 'achievements'].includes(dialogAction) && !e.repeat) {
    e.preventDefault();
    const id =
      dialogAction === 'catalog'
        ? 'construction'
        : dialogAction === 'achievements'
          ? 'achievements'
          : 'journal';
    if (!$(id).hidden) closeDialog();
    else openDialog(id);
    return;
  }
  if (e.code === 'Tab' && !e.repeat) {
    e.preventDefault();
    if (!$('field-kit').hidden) closeDialog();
    else openDialog('field-kit');
    return;
  }
  if (e.code === 'KeyH' && !e.repeat) {
    e.preventDefault();
    if (!$('help').hidden) closeDialog();
    else openDialog('help');
    return;
  }
  if (!playing) return;
  if (e.code === 'Digit7' && !e.repeat) {
    e.preventDefault();
    equipTorch();
    return;
  }
  if ((e.ctrlKey || e.metaKey) && e.code === 'KeyZ') {
    e.preventDefault();
    if (!e.repeat) undoSculpt();
    return;
  }
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (
    [
      'Space',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'KeyW',
      'KeyA',
      'KeyS',
      'KeyD',
      'KeyZ',
      'KeyQ',
    ].includes(e.code)
  )
    e.preventDefault();
  const action = controls.action(e.code);
  if (action || /^Digit[1-6]$/.test(e.code)) e.preventDefault();
  keys.add(e.code);
  if (e.repeat) return;
  if (action === 'cave') toggleCave();
  if (e.code === 'KeyP') panorama();
  if (action === 'upgrade') upgrade();
  if (action === 'combat') toggleCombat();
  if (action === 'dodge') dodge();
  if (action === 'rotate') rotateBuild();
  if (action === 'interact') interact();
  if (action === 'primary') useTool();
  if (action === 'build') build();
  if (action === 'mode') cycleMode();
  if (action === 'undo') undoSculpt();
  if (
    ['BracketLeft', 'BracketRight', 'Minus', 'Equal', 'NumpadSubtract', 'NumpadAdd'].includes(
      e.code
    )
  ) {
    e.preventDefault();
    resizeBrush(['BracketRight', 'Equal', 'NumpadAdd'].includes(e.code) ? 0.4 : -0.4);
  }
  if (e.code === 'Home') {
    e.preventDefault();
    if (inCave) player.teleport(caves.field.spawn.x, caves.field.spawn.z);
    else returnHome();
    toast('De retour au départ.');
  }
  if (/^Digit[1-6]$/.test(e.code)) selectSlot(Number(e.code.slice(-1)) - 1);
});
window.addEventListener('keyup', (e) => keys.delete(e.code));
window.addEventListener('blur', () => {
  keys.clear();
  drag = null;
  if (playing) pause();
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    keys.clear();
    drag = null;
    if (playing) pause();
    save();
  }
});
window.addEventListener('beforeunload', save);
window.addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});
canvas.addEventListener('webglcontextlost', (e) => {
  e.preventDefault();
  pause();
  $('error').hidden = false;
  $('error-text').textContent =
    'Le navigateur a interrompu le rendu 3D. Rechargez le paysage pour reprendre.';
});
$('play').addEventListener('click', play);
$('panorama-open').addEventListener('click', () => {
  panorama();
  play();
});
$('caves-open').addEventListener('click', () => {
  if (inCave) leaveCave();
  player.teleport(entrance.position.x, entrance.position.z + 5);
  player.yaw = 0;
  player.pitch = 0;
  player.syncCamera();
  play();
  toast(
    `Approchez l’entrée puis ${controls.label('cave')} pour descendre. Une pioche et des torches sont utiles.`
  );
});
$('upgrade-pick').addEventListener('click', upgrade);
$('menu-btn').addEventListener('click', () => {
  if (playing) pause();
  else if (started) play();
});
$('pack-toggle').addEventListener('click', () => openDialog('field-kit'));
$('settings-open').addEventListener('click', () => openDialog('settings'));
$('help-open').addEventListener('click', () => openDialog('help'));
$('debug-open').addEventListener('click', () => openDialog('debug'));
document
  .querySelectorAll('.close-dialog')
  .forEach((el) => el.addEventListener('click', closeDialog));
function setPixelSize(value) {
  pixelSize = THREE.MathUtils.clamp(Math.round(Number(value) || 0), 0, 8);
  atmosphere.setPixelSize(pixelSize);
  for (const id of ['pixel-size', 'pixel-live']) $(id).value = pixelSize;
  for (const id of ['pixel-size-label', 'pixel-live-label'])
    $(id).textContent = pixelSize ? `${pixelSize} px` : 'Sans filtre';
  document
    .querySelectorAll('[data-pixel]')
    .forEach((button) =>
      button.classList.toggle('selected', Number(button.dataset.pixel) === pixelSize)
    );
  dirty = true;
}
setPixelSize(pixelSize);
for (const id of ['pixel-size', 'pixel-live'])
  $(id).addEventListener('input', (e) => setPixelSize(e.target.value));
for (const id of ['pixel-size', 'pixel-live']) $(id).addEventListener('change', save);
document.querySelectorAll('[data-pixel]').forEach((button) =>
  button.addEventListener('click', () => {
    setPixelSize(button.dataset.pixel);
    save();
  })
);
$('pixel-test').addEventListener('click', () => {
  closeDialog();
  play();
  $('pixel-preview').hidden = false;
});
$('pixel-close').addEventListener('click', () => {
  $('pixel-preview').hidden = true;
  canvas.focus();
});
$('quality').addEventListener('change', (e) => {
  quality = e.target.value;
  applyQuality();
  dirty = true;
  save();
});
$('sensitivity').value = sensitivity;
$('sensitivity').addEventListener('input', (e) => {
  sensitivity = Number(e.target.value);
  dirty = true;
  save();
});
$('time').addEventListener('input', (e) => {
  clockHour = Number(e.target.value);
  adventure.hour = clockHour;
  adventure.nightSeconds = 0;
  dirty = true;
  updateTime();
  save();
});
$('camera-motion').value = motionScale;
$('camera-motion').addEventListener('input', (e) => {
  motionScale = Number(e.target.value);
  player.motionScale = motionScale;
  dirty = true;
  save();
});
$('day-duration').value = adventure.dayMinutes;
$('day-duration-label').textContent = adventure.dayMinutes + ' min';
$('day-duration').addEventListener('input', (e) => {
  adventure.dayMinutes = Number(e.target.value);
  $('day-duration-label').textContent = adventure.dayMinutes + ' min';
  dirty = true;
  save();
});
$('weather-select').value = weather.automatic ? 'auto' : weather.type;
$('weather-select').addEventListener('change', (e) => {
  weather.automatic = e.target.value === 'auto';
  if (!weather.automatic) weather.set(e.target.value);
  dirty = true;
  save();
  updateTime();
});
const lockButton = $('capture-mouse');
if (window.self !== window.top || !canvas.requestPointerLock) {
  lockButton.disabled = true;
  lockButton.textContent = 'Clic-glissé · contexte intégré';
}
lockButton.addEventListener('click', () => {
  try {
    const result = canvas.requestPointerLock();
    result?.catch(() => toast('Capture indisponible : utilisez le clic-glissé.'));
  } catch {
    toast('Capture indisponible : utilisez le clic-glissé.');
  }
});
document.addEventListener('pointerlockchange', () => {
  if (document.pointerLockElement === canvas) play();
  else if (playing) pause();
});
document.addEventListener('pointerlockerror', () =>
  toast('Capture indisponible : utilisez le clic-glissé.')
);
$('day-cycle').checked = adventure.cycle;
$('day-cycle').addEventListener('change', (e) => {
  adventure.cycle = e.target.checked;
  dirty = true;
  save();
});
$('peaceful').checked = adventure.peaceful;
$('peaceful').addEventListener('change', (e) => {
  adventure.peaceful = e.target.checked;
  dirty = true;
  save();
});
$('show-stats').addEventListener('change', (e) => ($('stats').hidden = !e.target.checked));
document.querySelectorAll('[data-slot]').forEach((el) =>
  el.addEventListener('click', () => {
    selectSlot(Number(el.dataset.slot));
    canvas.focus();
  })
);
document
  .querySelectorAll('[data-tool]')
  .forEach((el) => el.addEventListener('click', () => selectTool(el.dataset.tool)));
for (const [action, label] of Object.entries(ACTIONS)) {
  const row = document.createElement('div');
  row.className = 'binding-row';
  const name = document.createElement('span');
  name.textContent = label;
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.bind = action;
  button.setAttribute('aria-label', `Modifier la touche : ${label}`);
  button.addEventListener('click', () => {
    rebinding = action;
    syncControlsUI();
  });
  row.append(name, button);
  $('key-bindings').append(row);
}
$('reset-bindings').addEventListener('click', () => {
  rebinding = null;
  controls.reset();
  keys.clear();
  syncControlsUI();
  syncToolUI();
  dirty = true;
  save();
});
document.querySelectorAll('[data-action]').forEach((el) =>
  el.addEventListener('click', () => {
    actionMode = el.dataset.action;
    syncToolUI();
    canvas.focus();
  })
);
$('undo-sculpt').addEventListener('click', undoSculpt);
$('brush-smaller').addEventListener('click', () => {
  resizeBrush(-0.4);
  canvas.focus();
});
$('brush-larger').addEventListener('click', () => {
  resizeBrush(0.4);
  canvas.focus();
});
$('random-refresh').checked = randomRefresh;
$('random-refresh').onchange = (e) => {
  randomRefresh = e.target.checked;
  try {
    localStorage.setItem('vallon-random-refresh', String(randomRefresh));
  } catch {}
};
$('random-seed').onclick = () => {
  $('world-seed').value = randomSeed();
};
$('torch-equip').onclick = () => equipTorch();
document.querySelectorAll('[data-quick-action]').forEach(
  (b) =>
    (b.onclick = () => {
      selectSlot(1);
      topoActive = true;
      actionMode = b.dataset.quickAction;
      syncToolUI();
      canvas.focus();
    })
);
$('new-world').addEventListener('click', () => {
  if (
    (blocks.size > 0 ||
      removedProps.size > 0 ||
      walked > 1 ||
      world.editedCells > 0 ||
      caves.field.edits.length > 0) &&
    $('new-world').dataset.confirm !== 'yes'
  ) {
    $('new-world').dataset.confirm = 'yes';
    $('new-world').textContent = 'Remplacer ce paysage ?';
    setTimeout(() => {
      $('new-world').dataset.confirm = '';
      $('new-world').textContent = 'Nouveau paysage';
    }, 5000);
    return;
  }
  const nextSeed = parseSeed($('world-seed').value);
  if (nextSeed === null) {
    toast('Seed : nombre entre 0 et 4294967295.');
    return;
  }
  try {
    localStorage.setItem('vallon-world:' + seed, localStorage.getItem(STORE) || 'null');
  } catch {}
  const url = new URL(location.href);
  url.searchParams.set('seed', nextSeed);
  history.replaceState(null, '', url);
  removedProps.clear();
  worldScale = 0.84;
  inventory = freshInventory();
  journey = createJourney();
  adventure = createAdventure();
  clockHour = adventure.hour;
  achievementQueue = [];
  combat = false;
  buildPlan = normalizePlan();
  favoritePlans = SURFACES.slice(0, 3).map((m) => normalizePlan({ material: m.id }));
  pendingBlueprint = null;
  catalog?.set(buildPlan);
  pickTier = 2;
  walked = 0;
  collected = 0;
  debug?.reset();
  createLandscape(nextSeed);
  selectSlot(0);
  save();
  $('new-world').dataset.confirm = '';
  $('new-world').textContent = 'Nouveau paysage';
  toast('Une nouvelle vallée vous attend.');
});

createLandscape(seed, true);
updateTime();
selectSlot(0);
syncControlsUI();
catalog = new ConstructionUI(building, {
  plan: buildPlan,
  select: choosePlan,
  state: () => ({ inventory, journey, blocks: blocks.values(), pickTier, hotbarSlot }),
  edit: editPiece,
  target: (key) => blocks.get(key),
  eat: eatBerry,
  home: returnHome,
  creative: (on) => {
    journey.creative = journey.chapter >= CHAPTERS.length && on;
    dirty = true;
    save();
  },
  blueprint: chooseBlueprint,
});
for (const id of ['catalog-open', 'catalog-menu'])
  $(id).addEventListener('click', () => openDialog('construction'));
for (const id of ['journal-open', 'journal-menu'])
  $(id).addEventListener('click', () => openDialog('journal'));
$('cancel-blueprint').addEventListener('click', () => {
  pendingBlueprint = null;
  syncToolUI();
  canvas.focus();
});
inventoryUI = new InventoryUI({
  state: () => ({ inventory, v: adventure, j: journey, pickTier }),
  craft: craftAdventure,
  upgrade,
  eat: (key) => (key === 'berries' ? eatBerry() : eatMeal()),
  build: () => openDialog('construction'),
});
adventureUI = new AdventureUI({
  state: () => ({ v: adventure, inventory, j: journey }),
  craft: craftAdventure,
  eat: eatMeal,
});
for (const id of ['achievements-open', 'achievements-menu', 'achievements-journal'])
  $(id).addEventListener('click', () => openDialog('achievements'));
$('combat-toggle').addEventListener('click', () => {
  toggleCombat();
  canvas.focus();
});
$('dodge-button').addEventListener('click', () => {
  dodge();
  canvas.focus();
});
$('save-label').textContent = storageOK ? 'Sauvegarde locale' : 'Session temporaire';
debug = new DebugTools(
  {
    items: Object.keys(ITEMS),
    label: (key) => ITEMS[key][0],
    state: () => ({
      debugged: adventure.debugged,
      hour: clockHour,
      weather: weather.automatic ? 'automatic' : weather.type,
      fps,
      calls: atmosphere.calls,
      triangles: atmosphere.triangles || 0,
      position: player.position.toArray(),
    }),
    cheat: () => {
      adventure.debugged = true;
      dirty = true;
      toast('Test activé · nouveaux succès désactivés pour cette partie.');
      save();
    },
    all: () => {
      for (const key of Object.keys(ITEMS)) inventory[key] = Math.min(10000, inventory[key] + 64);
      pickTier = 4;
      adventure.sword = 3;
      adventure.armor = 2;
      dirty = true;
      updateInventory();
      save();
    },
    grant: (key) => {
      inventory[key] = Math.min(10000, inventory[key] + 64);
      dirty = true;
      updateInventory();
      save();
    },
    hour: (value) => {
      clockHour = adventure.hour = value;
      updateTime();
      dirty = true;
      save();
    },
    weather: (type) => {
      weather.automatic = type === 'automatic';
      if (!weather.automatic) weather.set(type);
      dirty = true;
      save();
    },
    creative: (on) => {
      journey.creative = on;
      dirty = true;
      save();
    },
    teleport: (target) => {
      if (target === 'cave') {
        if (!inCave) enterCave();
      } else {
        if (inCave) leaveCave();
        panorama();
        if (target === 'clouds') {
          player.position.y = 740;
          player.syncCamera();
        }
      }
    },
    land: () => {
      if (inCave) player.teleport(caves.field.spawn.x, caves.field.spawn.z);
      else player.teleport(world.spawn.x, world.spawn.z);
    },
    close: closeDialog,
  },
  scene
);
const biomeLabels = {
  meadow: 'Prairie sauvage',
  forest: 'Lisière des bois',
  alpine: 'Hauts pâturages',
  rock: 'Les crêtes',
  heath: 'Landes fleuries',
  wetland: 'Prairies humides',
  birch: 'Bois de bouleaux',
  steppe: 'Prairies dorées',
  shore: 'Berges du lac',
};
let last = performance.now(),
  hudTimer = 0,
  saveTimer = 0,
  refuge = null;
const vr = setupVR(renderer, scene, camera, {
  player: () => player,
  floor: (x,z) => inCave ? caves.field.floor(x,z) : world.height(x,z),
  solid: (point) => inCave
    ? caves.field.density(point.x,point.y,point.z)<=0
    : colliders(point.x,point.z,.28).some(obstacle=>{
      const bottom=obstacle.baseY ?? obstacle.y ?? world.height(obstacle.x,obstacle.z);
      const top=obstacle.topY ?? bottom+(obstacle.height||2);
      if(point.y<bottom-.05 || point.y>top+.08) return false;
      const x=point.x-obstacle.x,z=point.z-obstacle.z;
      return obstacle.width
        ? Math.abs(x)<obstacle.width/2+.10 && Math.abs(z)<(obstacle.depth||obstacle.width)/2+.10
        : Math.hypot(x,z)<(obstacle.radius||.2)+.10;
    }),
  start: () => { if(document.pointerLockElement) document.exitPointerLock(); ready=true; play(); },
});
let vrPerformance = false;
let vrSceneryClock = 0;
function frame(now, xrFrame) {
  const immersive=renderer.xr.isPresenting;
  const wallDt = (now - last) / 1000,
    dt = THREE.MathUtils.clamp(wallDt,0,0.045);
  last = now;
  if (document.hidden && !immersive) return;
  if(immersive !== vrPerformance) {
    vrPerformance=immersive;
    renderer.shadowMap.enabled=!immersive && quality!=='low';
    vegetation.setQuality(immersive?(vr.hyper?'hyper':'vr'):quality);
    vegetation.streamBudget=immersive?(vr.hyper?80:180):1200;
    terrain.dispose();
    terrain=new Terrain(scene,world,{immersive,hyper:immersive&&vr.hyper});
    if(inCave) terrain.rootGroup.visible=false;
    if(immersive) outdoorFog.density=.0048;
    vr.view.far=vr.hyper?230:480;
    vr.view.updateProjectionMatrix();
    landscape.waterMaterial.uniforms.uHasReflection.value=0;
  }
  vrSceneryClock+=dt;
  const updateScenery=!immersive || vrSceneryClock >= .048;
  if(updateScenery) vrSceneryClock=0;
  if (playing) elapsed += dt;
  weather.update(dt, playing);
  player.motionScale = motionScale;
  frames++;
  frameTime += wallDt;
  if (frameTime >= 0.8) {
    fps = Math.round(frames / frameTime);
    frameTime = 0;
    frames = 0;
  }
  if (playing) {
    tickVitals(adventure, dt, {
      energy: journey.energy,
      sheltered:
        !inCave &&
        refuge &&
        Math.hypot(player.position.x - refuge.x, player.position.z - refuge.z) < 6,
      guard: combat && keys.has(controls.code('guard')),
    });
    clockHour = adventure.hour;
    actionCooldown = Math.max(0, actionCooldown - dt);
    buildCooldown = Math.max(0, buildCooldown - dt);
    const placing =
      keys.has(controls.code('build')) ||
      (drag?.button === 2 && !drag.looking && now - drag.start > 280);
    if (placing && buildCooldown <= 0) {
      build();
      if (drag?.button === 2) drag.acted = true;
    }
    if (keys.has(controls.code('primary')) && !adventure.guard) useTool();
    if (
      drag &&
      drag.button === 0 &&
      !drag.looking &&
      now - drag.start > 280 &&
      actionCooldown <= 0 &&
      !adventure.guard
    ) {
      useTool();
      drag.acted = true;
    }
    if (keys.has('ArrowLeft')) player.look(-dt * 550, 0, sensitivity);
    if (keys.has('ArrowRight')) player.look(dt * 550, 0, sensitivity);
    if (keys.has('ArrowUp')) player.look(0, -dt * 400, sensitivity);
    if (keys.has('ArrowDown')) player.look(0, dt * 400, sensitivity);
    const sprint =
      (keys.has('ShiftLeft') || keys.has('ShiftRight')) &&
      ['KeyW', 'KeyZ', 'KeyA', 'KeyQ', 'KeyS', 'KeyD'].some((k) => keys.has(k));
    if (sprint && journey.energy < 5) {
      keys.delete('ShiftLeft');
      keys.delete('ShiftRight');
    }
    journey.energy = THREE.MathUtils.clamp(
      journey.energy +
        (sprint
          ? -3
          : refuge && Math.hypot(player.position.x - refuge.x, player.position.z - refuge.z) < 6
            ? 3
            : 0.35) *
          dt,
      0,
      100
    );
    const px = player.position.x,
      pz = player.position.z;
    if (immersive) vr.step(xrFrame,dt);
    else if (debug.fly) debug.move(player, dt, keys, world, inCave ? caves.field : null);
    else
      player.update(dt, keys, {
        speedFactor: adventure.slowTime > 0 ? 0.55 : 1,
        repeatJump: placing && !topoActive && hotbarSlot >= 3,
      });
    const distance = Math.hypot(player.position.x - px, player.position.z - pz);
    walked += distance;
    if (adventure.dodgeTime > 0) player.push(dodgeVector.x * 9 * dt, dodgeVector.z * 9 * dt);
    dirty = true;
    const events = fauna.update(
      dt,
      { x: player.position.x, y: player.position.y, z: player.position.z },
      {
        time: adventure.time,
        hour: clockHour,
        cave: inCave,
        sprint,
        peaceful: adventure.peaceful,
        protectedAt: lightProtection,
      }
    );
    for (const event of events)
      if (event.type === 'attack') hurtPlayer(event);
      else if (event.type === 'alert')
        toast(SPECIES[event.entity.species].label + ' · attention à son attaque !');
  }
  camera.updateMatrixWorld();
  if(immersive) toolView.root.visible=false;
  if (inCave) caves.update(camera, elapsed);
  else {
    terrain.update(camera, dt);
    if(updateScenery) vegetation.update(camera, elapsed, immersive ? .048 : dt);
    landscape.update(camera, elapsed, skyMaterial.uniforms.uSun.value);
  }
  toolView.setPickTier(pickTier);
  toolView.setSwordTier(adventure.sword);
  toolView.update(
    dt,
    elapsed,
    torchEquipped
      ? 'hand'
      : combat
        ? 'sword'
        : hotbarSlot >= 3
          ? surface(buildPlan.material).mining === 'wood'
            ? 'wood'
            : surface(buildPlan.material).mining === 'soil'
              ? 'clay'
              : 'stone'
          : activeTool,
    playing,
    Math.min(1, Math.hypot(player.velocity.x, player.velocity.z) / 4.5),
    inCave,
    adventure.guard
  );
  if (
    !ready &&
    (inCave
      ? caves.stats.chunks >= 12
      : vegetation.stats.grassCells >= 5 && terrain.stats.chunks >= 30)
  ) {
    ready = true;
    $('play').disabled = false;
    $('play').innerHTML =
      `${started ? 'Reprendre la promenade' : 'Entrer dans le paysage'} <span>↗</span>`;
  }
  if(immersive) toolView.root.visible=false;
  building.update(camera, dt, !inCave);
  torches.update(elapsed, torchEquipped && inventory.torch > 0, inCave, playing);
  torch.visible = inCave && !torchEquipped;
  torch.intensity = 14;
  debug.scan(player, caves, inCave);
  fauna.render(adventure.time, camera);
  sky.position.copy(camera.position);
  skyMaterial.uniforms.uTime.value = elapsed;
  sun.target.position.copy(player.position);
  sun.position.copy(player.position).addScaledVector(skyMaterial.uniforms.uSun.value, 240);
  sun.target.updateMatrixWorld();
  hudTimer += dt;
  saveTimer += dt;
  if (hudTimer > 0.12) {
    hudTimer = 0;
    debug.refresh();
    if (playing) updateTime();
    const s = world.sample(player.position.x, player.position.z);
    $('biome').textContent = inCave
      ? player.position.z < -75
        ? 'Grottes profondes'
        : 'Galeries de pierre'
      : biomeLabels[s.biome] || 'Terres sauvages';
    const entranceDistance = entrance.distance(player, inCave);
    $('expedition').textContent = inCave
      ? `${player.position.z < -75 ? 'Pierre profonde · pioche niv. 3+' : 'Galeries · charbon et cristaux'} · Sortie ${Math.round(entranceDistance)} m${entranceDistance < 6 ? ' · ' + controls.label('cave') + ' remonter' : ''}`
      : entranceDistance < 90
        ? `Grottes · entrée ${Math.round(entranceDistance)} m${entranceDistance < 6 ? ' · ' + controls.label('cave') + ' descendre' : ''}`
        : '';
    const angle = ((((-player.yaw * 180) / Math.PI) % 360) + 360) % 360;
    $('heading').textContent = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO'][
      Math.round(angle / 45) % 8
    ];
    $('position-label').textContent =
      `ALT. ${Math.round(player.position.y)} M  ·  ${Math.round(walked)} M PARCOURUS`;
    const reward = adventure.debugged
      ? null
      : advanceJourney(journey, blocks.values(), pickTier, inventory);
    if (reward) {
      dirty = true;
      updateInventory();
      save();
      toast('Étape accomplie · ' + reward.reward);
    }
    const status = journeyStatus(journey, blocks.values(), pickTier);
    refuge = status.roof;
    $('journey-progress').firstElementChild.style.width = `${status.progress * 100}%`;
    $('objective').textContent = status.title;
    $('objective-detail').textContent = status.detail;
    $('energy-fill').style.width = journey.energy + '%';
    $('energy-value').textContent = Math.round(journey.energy);
    document.body.classList.toggle('combat-mode', combat);
    $('construction-strip').hidden = hotbarSlot < 3 && !pendingBlueprint;
    $('energy-label').textContent =
      `ÉNERGIE ${Math.round(journey.energy)} / 100 · ${controls.label('interact')} INTERAGIR / BAIES`;
    if (!$('journal').hidden) catalog?.journal();
    adventureUI?.hud(combat);
    if (!$('achievements').hidden) adventureUI?.refresh();
    if (playing) {
      if (!inCave && !adventure.stats.biomes.includes(s.biome))
        adventure.stats.biomes.push(s.biome);
      if (inCave && player.position.z < -95) adventure.stats.deep = true;
      for (const e of fauna.active.values())
        if (
          Math.hypot(e.x - player.position.x, e.z - player.position.z) < 18 &&
          !adventure.stats.seen.includes(e.species) &&
          fauna.line(e, { x: player.position.x, y: player.position.y, z: player.position.z })
        ) {
          adventure.stats.seen.push(e.species);
          dirty = true;
        }
      const awards = adventure.debugged
        ? []
        : unlockAchievements(
            adventure,
            { j: journey, blocks: [...blocks.values()], refuge, walked },
            inventory
          );
      if (awards.length) {
        achievementQueue.push(...awards);
        dirty = true;
        updateInventory();
        save();
      }
      if (achievementQueue.length && elapsed - (toast.achievementTime || -99) > 3.5) {
        const a = achievementQueue.shift();
        showAchievement(a);
        toast.achievementTime = elapsed;
      }
    }

    if (playing) {
      target = findTarget();
      let material =
        target?.material ||
        (target?.kind === 'ground'
          ? surfaceMaterial(world, target.point.x, target.point.z)
          : target?.kind === 'prop'
            ? propMaterial(target.collider)
            : target?.kind === 'block'
              ? surface(target.block.material).mining
              : null);
      const rule = material ? miningRule(material, activeTool, pickTier) : null,
        required = rule ? Math.max(rule.tier, target?.tier || 1) : 1;
      $('target-label').textContent =
        target?.kind === 'entity'
          ? `${SPECIES[target.entity.species].label} · ${Math.ceil(target.entity.hp)}/${SPECIES[target.entity.species].hp} · ${SPECIES[target.entity.species].passive ? controls.label('interact') + ' nourrir · confiance ' + target.entity.trust + '/3' : target.entity.mode === 'windup' ? 'ATTAQUE IMMINENTE' : controls.label('primary') + ' frapper · ' + controls.label('combat') + ' arme'}`
          : rule
            ? `${rule.label}${material === 'berries' ? ' · ' + target.collider.berryCount + ' baies' : ' · niv. ' + required} · ${rule.level < required ? 'pioche requise' : controls.label('primary') + ' / clic maintenu'}`
            : '';
      $('mining-meter').hidden = mineProgress <= 0 || elapsed - mineLast > 0.65;
      $('mining-meter').firstElementChild.style.width = `${Math.min(1, mineProgress) * 100}%`;
      const p = inCave ? null : placement(target);
      showBuildPreview(p);
      if (
        target?.kind === 'block' &&
        ['door', 'workbench', 'forge', 'beacon'].includes(target.block.shape)
      )
        $('target-label').textContent +=
          ` · ${controls.label('interact')} ${target.block.shape === 'door' ? 'ouvrir / fermer' : 'utiliser'}`;
      syncToolUI();
      toolView.showBrush(
        !inCave && target?.kind === 'ground' && hotbarSlot < 3 ? target.point : null,
        world,
        brushRadius,
        actionMode
      );
    }
    if (!$('stats').hidden) {
      $('stats').textContent =
        `${fps} FPS · ${quality}\n${renderer.info.render.calls} appels · ${Math.round(renderer.info.render.triangles / 1000)} k triangles\nTerrain ${JSON.stringify(inCave ? caves.stats : terrain.stats)}\nVégétation ${JSON.stringify(vegetation.stats)}`;
    }
  }
  if (saveTimer > 5) {
    saveTimer = 0;
    save();
  }
  weatherFX.update(
    camera,
    world,
    weather,
    quality,
    playing,
    inCave,
    building
      .colliders(player.position.x, player.position.z, 0.3)
      .some((b) => b.y > player.position.y + player.eyeHeight && b.y < player.position.y + 8)
  );
  if (!immersive && (elapsed - cloudMaterialsScan > 0.5 || cloudMaterialsScan < 0)) {
    scene.traverse((object) => {
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      for (const material of materials) cloudShadows.install(material);
    });
    for (const material of vegetation.grassMaterials) cloudShadows.installGrass(material);
    cloudMaterialsScan = elapsed;
  }
  if(immersive) {
    if(updateScenery) atmosphere.particles.update(camera,elapsed,skyMaterial.uniforms.uDay.value,inCave,playing&&!vr.hyper);
    renderer.render(scene,vr.view);
  } else {
    cloudShadows.update(camera,elapsed,skyMaterial,inCave);
    waterReflection.update(camera,landscape,elapsed,quality,!inCave);
    atmosphere.render(camera,elapsed,skyMaterial,inCave,playing);
  }
}
renderer.setAnimationLoop(frame);
// Small diagnostics surface for repeatable integration checks, without controlling input.
window.__VALLON__ = {
  get state() {
    return {
      adventure: JSON.parse(JSON.stringify(adventure)),
      debug: {
        fly: debug.fly,
        noclip: debug.noclip,
        god: debug.god,
        xray: debug.xray,
        ores: debug.markers.count,
      },
      torches: torches.serialize(),
      torchEquipped,
      combat,
      weather: { ...weather.serialize(), flash: weather.flash, rainParticles: weatherFX.count },
      body: { radius: player.radius, height: player.bodyHeight, eyes: player.eyeHeight },
      fauna: fauna.stats,
      seed,
      quality,
      playing,
      ready,
      inCave,
      pickTier,
      mineProgress,
      flowers: landscape.count,
      caves: caves.stats,
      activeTool,
      hotbarSlot,
      selected,
      brushRadius,
      bindings: controls.bindings,
      actionMode,
      topoActive,
      terrainEdits: world.editedCells,
      undoCount: world.undoCount,
      position: player.position.toArray(),
      inventory: { ...inventory },
      journey: JSON.parse(JSON.stringify(journey)),
      buildPlan: { ...buildPlan },
      pendingBlueprint,
      buildingBatches: building.batches.size,
      blocks: blocks.size,
      removed: removedProps.size,
      fps,
      terrain: terrain.stats,
      vegetation: vegetation.stats,
      drawCalls: atmosphere.calls + 2,
      triangles: atmosphere.triangles,
      atmosphere: {
        rays: atmosphere.rayMaterial.uniforms.uStrength.value,
        particles: atmosphere.particles.geometry.drawRange.count,
        lakes: landscape.waters.length,
        planarReflection: landscape.waterMaterial.uniforms.uHasReflection.value > 0,
        reflectionSize: waterReflection.size,
        clouds: {
          steps: atmosphere.clouds.material.uniforms.uSteps.value,
          width: atmosphere.clouds.target.width,
          height: atmosphere.clouds.target.height,
        },
        handVisible: toolView.models[0].visible && toolView.root.visible,
      },
    };
  },
  get entrance() {
    return entrance;
  },
  get cloudShadows() {
    return cloudShadows;
  },
  get world() {
    return world;
  },
  get player() {
    return player;
  },
  get vegetation() {
    return vegetation;
  },
  get terrain() {
    return terrain;
  },
  get caves() {
    return caves;
  },
  get building() {
    return building;
  },
  get fauna() {
    return fauna;
  },
  toggleCombat,
  dodge,
  craftAdventure,
  eatMeal,
  choosePlan,
  editPiece,
  interact,
  chooseBlueprint,
  blueprintPieces,
  eatBerry,
  returnHome,
  toggleCave,
  panorama,
  upgrade,
  build,
  harvest,
  useTool,
  undoSculpt,
  findTarget,
  placement,
  canBuild,
  save,
};

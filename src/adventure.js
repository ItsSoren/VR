// Balance is expressed in seconds of active play, metres, and points out of 100.
export const SPECIES = {
  sheep: {
    label: 'Mouton',
    passive: true,
    hp: 32,
    speed: 1.1,
    flee: 3.7,
    radius: 0.48,
    height: 1.15,
    feed: 3,
    loot: { meat: 2, wool: 1 },
    biomes: ['meadow', 'alpine'],
  },
  deer: {
    label: 'Chevreuil',
    passive: true,
    hp: 40,
    speed: 1.5,
    flee: 5.9,
    radius: 0.44,
    height: 1.65,
    feed: 3,
    loot: { meat: 2 },
    biomes: ['forest', 'meadow'],
  },
  rabbit: {
    label: 'Lièvre',
    passive: true,
    hp: 18,
    speed: 1.4,
    flee: 5.2,
    radius: 0.25,
    height: 0.65,
    feed: 3,
    loot: { meat: 1 },
    biomes: ['meadow', 'forest'],
  },
  boar: {
    label: 'Sanglier',
    hp: 55,
    speed: 2.3,
    radius: 0.5,
    height: 1.05,
    damage: 18,
    notice: 7,
    windup: 1.05,
    recovery: 2.4,
    loot: { meat: 3 },
    biomes: ['forest', 'meadow'],
  },
  wolf: {
    label: 'Loup',
    hp: 46,
    speed: 3.6,
    radius: 0.42,
    height: 1.2,
    damage: 12,
    notice: 16,
    windup: 0.8,
    recovery: 1.8,
    loot: { meat: 2 },
    biomes: ['forest', 'alpine', 'meadow'],
  },
  sentinel: {
    label: 'Gardien de cristal',
    hp: 95,
    speed: 1.65,
    radius: 0.65,
    height: 2.2,
    damage: 24,
    notice: 12,
    windup: 1.3,
    recovery: 2.7,
    loot: { stone: 3, crystal: 1 },
    biomes: ['cave'],
  },
  fox: {
    label: 'Renard roux',
    passive: true,
    hp: 24,
    speed: 1.7,
    flee: 5.5,
    radius: 0.34,
    height: 0.85,
    loot: { meat: 1 },
    biomes: ['forest', 'meadow', 'heath'],
    description:
      'Omnivore et farouche. Il fuit les courses et accepte les baies ; sa queue blanche vous aide à le suivre dans les bois.',
  },
  badger: {
    label: 'Blaireau',
    passive: true,
    hp: 36,
    speed: 0.85,
    flee: 2.8,
    radius: 0.38,
    height: 0.7,
    loot: { meat: 2 },
    biomes: ['forest', 'birch', 'heath'],
    description:
      'Habite les sous-bois. Plus lent et trapu que le renard ; trois repas espacés gagnent sa confiance.',
  },
  goat: {
    label: 'Chèvre des crêtes',
    passive: true,
    hp: 38,
    speed: 1.4,
    flee: 4.4,
    radius: 0.4,
    height: 1.5,
    maxSlope: 0.95,
    loot: { meat: 2, wool: 1 },
    biomes: ['alpine', 'rock', 'steppe'],
    description:
      'Grimpe sur des pentes plus fortes que les autres animaux. Approchez à pied et nourrissez-la pour qu’elle vous accompagne.',
  },
  tortoise: {
    label: 'Tortue des berges',
    passive: true,
    hp: 30,
    speed: 0.35,
    flee: 0.55,
    radius: 0.35,
    height: 0.55,
    loot: { meat: 1 },
    biomes: ['shore', 'wetland', 'meadow'],
    description:
      'Vit autour des étangs. Se replie dans sa carapace à votre approche : elle absorbe alors 65 % des dégâts. Une baie la fait ressortir.',
  },
  lynx: {
    label: 'Lynx des landes',
    hp: 52,
    speed: 3.3,
    radius: 0.42,
    height: 1.15,
    damage: 16,
    notice: 11,
    windup: 1.05,
    recovery: 3,
    charge: 7.5,
    prepareRange: 5,
    reach: 1.5,
    loot: { meat: 2, wool: 1 },
    biomes: ['forest', 'heath', 'alpine'],
    description:
      'Chasseur des landes et des bois. Prépare son bond pendant 1,05 s, puis s’élance tout droit. Une esquive latérale ouvre trois secondes pour riposter.',
  },
  crawler: {
    label: 'Araignée de schiste',
    hp: 48,
    speed: 2,
    radius: 0.62,
    height: 0.8,
    damage: 10,
    notice: 9,
    windup: 1.2,
    recovery: 2.8,
    reach: 2.2,
    prepareRange: 2,
    slow: 2.4,
    loot: { coal: 2, copper: 1 },
    biomes: ['cave'],
    description:
      'Rôde dans les chambres profondes. Sa morsure annoncée ralentit la marche pendant 2,4 s. La garde bloque ce ralentissement ; la parade l’étourdit.',
  },
};
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const number = (v, f = 0) => (Number.isFinite(v) ? v : f);
export function createAdventure(saved) {
  const stats = {
    seen: [],
    biomes: [],
    kills: {},
    tamed: [],
    fed: 0,
    wool: 0,
    parries: 0,
    dodges: 0,
    cave: false,
    deep: false,
    nights: 0,
    homeDefence: 0,
    ...saved?.stats,
  };
  for (const k of ['seen', 'biomes', 'tamed'])
    stats[k] = Array.isArray(stats[k])
      ? [...new Set(stats[k].filter((v) => typeof v === 'string'))].slice(0, 256)
      : [];
  for (const k of ['fed', 'wool', 'parries', 'dodges', 'nights', 'homeDefence'])
    stats[k] = Math.max(0, number(stats[k]));
  if (!stats.kills || typeof stats.kills !== 'object') stats.kills = {};
  return {
    health: clamp(number(saved?.health, 100), 0, 100),
    sword: clamp(Math.floor(number(saved?.sword, 1)), 1, 3),
    armor: clamp(Math.floor(number(saved?.armor)), 0, 2),
    time: Math.max(0, number(saved?.time)),
    hour: clamp(number(saved?.hour, 17.4), 0, 23.999),
    cycle: saved?.cycle !== false,
    dayMinutes: clamp(number(saved?.dayMinutes, 72), 30, 120),
    peaceful: !!saved?.peaceful,
    debugged: !!saved?.debugged,
    stats,
    achieved: { ...saved?.achieved },
    deaths: Math.max(0, number(saved?.deaths)),
    nightSeconds: Math.max(0, number(saved?.nightSeconds)),
    invulnerable: 8,
    lastDamage: -100,
    attackCd: 0,
    dodgeCd: 0,
    dodgeTime: 0,
    guardTime: 0,
    guard: false,
  };
}
export const night = (hour) => hour >= 20 || hour < 5;
export function tickVitals(v, dt, { energy = 100, sheltered = false, guard = false } = {}) {
  dt = clamp(number(dt), 0, 0.12);
  v.time += dt;
  for (const k of ['attackCd', 'dodgeCd', 'dodgeTime', 'invulnerable', 'slowTime'])
    v[k] = Math.max(0, (v[k] || 0) - dt);
  v.guard = guard;
  v.guardTime = guard ? v.guardTime + dt : 0;
  if (v.time - v.lastDamage > 12 && energy >= 35)
    v.health = Math.min(100, v.health + dt * (sheltered ? 2 : 0.2));
  const before = night(v.hour);
  if (v.cycle) v.hour = (v.hour + (dt * 24) / (v.dayMinutes * 60)) % 24;
  if (before) v.nightSeconds += dt;
  // Changing the clock by hand never awards a survived night.
  if (before && !night(v.hour) && v.nightSeconds >= 120) {
    v.stats.nights++;
    v.nightSeconds = 0;
  }
  if (!before && !night(v.hour)) v.nightSeconds = 0;
}
export function weapon(v) {
  return {
    damage: [0, 12, 20, 28][v.sword],
    delay: [0, 0.65, 0.58, 0.52][v.sword],
    label: ['', 'Épée de bois', 'Épée de fer', 'Épée de cristal'][v.sword],
  };
}
export function startDodge(v, energy) {
  if (v.dodgeCd > 0 || energy < 18) return false;
  v.dodgeCd = 1.6;
  v.dodgeTime = 0.32;
  v.invulnerable = Math.max(v.invulnerable, 0.32);
  return true;
}
export function receiveAttack(v, damage, energy, { facing = true } = {}) {
  if (v.peaceful) return { damage: 0, energy, kind: 'peaceful' };
  if (v.dodgeTime > 0) {
    v.stats.dodges++;
    return { damage: 0, energy, kind: 'dodge' };
  }
  if (v.invulnerable > 0) return { damage: 0, energy, kind: 'immune' };
  let kind = 'hit';
  if (v.guard && facing && energy >= 8) {
    energy -= 8;
    if (v.guardTime <= 0.28) {
      v.stats.parries++;
      return { damage: 0, energy, kind: 'parry' };
    }
    damage *= 0.35;
    kind = 'block';
  }
  damage = Math.round(damage * (1 - [0, 0.2, 0.35][v.armor]));
  v.health = Math.max(0, v.health - damage);
  v.lastDamage = v.time;
  v.invulnerable = 0.65;
  return { damage, energy, kind };
}
export function equipmentRecipe(v, type) {
  if (type === 'sword')
    return v.sword === 1 ? { wood: 4, iron: 6 } : v.sword === 2 ? { iron: 4, crystal: 4 } : null;
  if (type === 'armor')
    return v.armor === 0 ? { wool: 4, wood: 2 } : v.armor === 1 ? { wool: 4, iron: 8 } : null;
  if (type === 'meal') return { meat: 2, coal: 1 };
  return null;
}
export function craftEquipment(v, inventory, stations, type) {
  const cost = equipmentRecipe(v, type);
  if (!cost) return { ok: false, error: 'Équipement déjà au maximum.' };
  if (type === 'sword' || type === 'meal' || (type === 'armor' && v.armor === 1)) {
    if (!stations.forge) return { ok: false, error: 'Allumez une forge pour cette recette.' };
  } else if (!stations.workbench)
    return { ok: false, error: 'Utilisez un établi pour cette recette.' };
  if (Object.entries(cost).some(([k, n]) => (inventory[k] || 0) < n))
    return { ok: false, error: 'Il manque des ressources pour cette recette.' };
  for (const [k, n] of Object.entries(cost)) inventory[k] -= n;
  if (type === 'sword') v.sword++;
  else if (type === 'armor') v.armor++;
  else inventory.meal = (inventory.meal || 0) + 2;
  return { ok: true, cost };
}
export function consumeFood(v, journey, inventory, key) {
  if (
    !['berries', 'meal'].includes(key) ||
    !inventory[key] ||
    (v.health >= 100 && journey.energy >= 100)
  )
    return false;
  inventory[key]--;
  v.health = Math.min(100, v.health + (key === 'meal' ? 35 : 8));
  journey.energy = Math.min(100, journey.energy + (key === 'meal' ? 40 : 25));
  return true;
}
export const ACHIEVEMENTS = [
  ['wood', 'Premiers copeaux', 'Récolter 4 bois.', { wood: 2 }, (c) => c.j.harvested.wood >= 4],
  [
    'berries',
    'Le goût du Vallon',
    'Récolter 3 baies.',
    { berries: 3 },
    (c) => c.j.harvested.berries >= 3,
  ],
  ['walk', 'Les pieds voyageurs', 'Parcourir 300 mètres.', { berries: 4 }, (c) => c.walked >= 300],
  [
    'biomes',
    'Trois horizons',
    'Découvrir 3 biomes de surface.',
    { clay: 4 },
    (c) => c.v.stats.biomes.length >= 3,
  ],
  ['cave', 'Sous nos pieds', 'Entrer dans une grotte.', { coal: 2 }, (c) => c.v.stats.cave],
  [
    'deep',
    'Dans les profondeurs',
    'Explorer au-delà de 95 m dans les grottes.',
    { crystal: 1 },
    (c) => c.v.stats.deep,
  ],
  [
    'ores',
    'Prospecteur',
    'Récolter charbon, cuivre et fer.',
    { iron: 2 },
    (c) => ['coal', 'copper', 'iron'].every((k) => c.j.harvested[k] > 0),
  ],
  ['bench', 'Artisan', 'Utiliser un établi.', { wood: 4 }, (c) => c.j.stations.workbench],
  ['roof', 'Un chez-soi', 'Construire un refuge reconnu.', { wool: 2 }, (c) => !!c.refuge],
  ['forge', 'Maître du feu', 'Allumer une forge.', { coal: 3 }, (c) => c.j.stations.forge],
  [
    'beacon',
    'La lumière du retour',
    'Activer un phare.',
    { copper: 2 },
    (c) => c.j.stations.beacon,
  ],
  [
    'designer',
    'Toutes les matières',
    'Construire avec 6 matériaux payés.',
    { iron: 2 },
    (c) => new Set(c.blocks.filter((b) => !b.free).map((b) => b.material)).size >= 6,
  ],
  [
    'village',
    'Une vallée habitée',
    'Achever les 5 chapitres.',
    { diamond: 1 },
    (c) => c.j.chapter >= 5,
  ],
  [
    'naturalist',
    'Carnet naturaliste',
    'Observer les 3 espèces passives à moins de 18 m.',
    { berries: 6 },
    (c) => ['sheep', 'rabbit', 'deer'].every((k) => c.v.stats.seen.includes(k)),
  ],
  [
    'friend',
    'Une confiance méritée',
    'Apprivoiser un animal en le nourrissant 3 fois.',
    { wool: 2 },
    (c) => c.v.stats.tamed.length >= 1,
  ],
  [
    'shepherd',
    'Berger patient',
    'Obtenir 6 laines en nourrissant les moutons.',
    { wool: 2 },
    (c) => c.v.stats.wool >= 6,
  ],
  [
    'armor',
    'Prêt pour la route',
    'Fabriquer une protection en laine.',
    { berries: 3 },
    (c) => c.v.armor >= 1,
  ],
  [
    'fighter',
    'Premier duel',
    'Vaincre une créature hostile.',
    { meat: 2 },
    (c) => Object.values(c.v.stats.kills).some((n) => n > 0),
  ],
  [
    'parry',
    'Au bon moment',
    'Réussir 3 parades parfaites dans les 0,28 premières secondes.',
    { iron: 2 },
    (c) => c.v.stats.parries >= 3,
  ],
  [
    'dodge',
    'Sur le côté',
    'Éviter 2 attaques avec une esquive.',
    { berries: 4 },
    (c) => c.v.stats.dodges >= 2,
  ],
  [
    'bestiary',
    'Les dangers du Vallon',
    'Vaincre un sanglier, un loup et un gardien.',
    { crystal: 2 },
    (c) => ['boar', 'wolf', 'sentinel'].every((k) => c.v.stats.kills[k] > 0),
  ],
  [
    'night',
    'Jusqu’à l’aube',
    'Passer au moins 2 minutes de nuit, puis voir l’aube naturelle.',
    { coal: 3 },
    (c) => c.v.stats.nights >= 1,
  ],
  [
    'defence',
    'Gardien du foyer',
    'Vaincre 2 hostiles à moins de 20 m de son refuge.',
    { crystal: 1 },
    (c) => c.v.stats.homeDefence >= 2,
  ],
  ['sword', 'Lame d’améthyste', 'Fabriquer l’épée de cristal.', { iron: 3 }, (c) => c.v.sword >= 3],
].map(([id, title, detail, reward, test]) => ({ id, title, detail, reward, test }));
export function unlockAchievements(v, context, inventory) {
  const unlocked = [];
  for (const a of ACHIEVEMENTS)
    if (!Object.hasOwn(v.achieved, a.id) && a.test({ ...context, v })) {
      v.achieved[a.id] = Math.floor(v.time);
      for (const [k, n] of Object.entries(a.reward)) inventory[k] = (inventory[k] || 0) + n;
      unlocked.push(a);
    }
  return unlocked;
}

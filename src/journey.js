import { surface } from './building.js';

export const CHAPTERS = [
  {
    title: 'Installez votre atelier',
    detail: 'Récoltez 8 bois, 4 pierres et 3 baies. Posez un établi, puis utilisez-le.',
    reward: { wood: 12, stone: 8 },
    rewardText: '12 bois + 8 pierres · charpente et meubles',
  },
  {
    title: 'Un vrai toit',
    detail:
      'Autour de l’établi : 4 dalles, 6 murs/blocs, une porte et 4 toitures au-dessus du sol.',
    reward: { clay: 12, coal: 4 },
    rewardText: '12 terres + 4 charbons · démarrage de la forge',
  },
  {
    title: 'Le feu et le verre',
    detail:
      'Construisez et allumez une forge avec 2 charbons. Ajoutez 2 fenêtres et 4 pièces en brique ou verre.',
    reward: { copper: 4 },
    rewardText: '4 cuivres · pierre noble et améthyste',
  },
  {
    title: 'Une lumière dans la vallée',
    detail:
      'Améliorez la pioche. Récoltez 8 fers et 4 cristaux dans les grottes, bâtissez et activez un phare.',
    reward: { crystal: 4, iron: 4 },
    rewardText: '4 cristaux + 4 fers · finitions rares',
  },
  {
    title: 'Faites vivre le Vallon',
    detail:
      'Un refuge, un phare actif, une pioche niv. 4, 28 pièces, 6 matériaux et 2 jardinières.',
    reward: { diamond: 3 },
    rewardText: '3 diamants · mode de construction libre',
  },
];
export function createJourney(saved) {
  return {
    chapter: Math.max(0, Math.min(CHAPTERS.length, Math.floor(saved?.chapter || 0))),
    harvested: { wood: 0, stone: 0, berries: 0, iron: 0, crystal: 0, ...saved?.harvested },
    stations: { ...saved?.stations },
    home:
      Array.isArray(saved?.home) && saved.home.length === 2 && saved.home.every(Number.isFinite)
        ? saved.home
        : null,
    energy: Math.max(0, Math.min(100, Number.isFinite(saved?.energy) ? saved.energy : 100)),
    creative: !!saved?.creative,
  };
}
export function shelterAt(records) {
  const all = [...records].filter((b) => !b.free),
    benches = all.filter((b) => b.shape === 'workbench');
  for (const bench of benches) {
    const nearby = all.filter(
      (b) => Math.hypot(b.x - bench.x, b.z - bench.z) < 10 && Math.abs(b.y - bench.y) < 5
    );
    const floors = nearby.filter((b) => b.shape === 'slab'),
      walls = nearby.filter((b) => ['cube', 'wall'].includes(b.shape));
    const floorY = floors.length ? Math.min(...floors.map((b) => b.y)) : bench.y;
    const roofs = nearby.filter((b) => ['roof', 'ridge'].includes(b.shape) && b.y >= floorY + 1.4);
    if (
      floors.length >= 4 &&
      walls.length >= 6 &&
      nearby.some((b) => b.shape === 'door') &&
      roofs.length >= 4
    ) {
      // Count only roofs over this construction, not unrelated pieces placed high away.
      const minX = Math.min(...floors.map((b) => b.x)) - 1,
        maxX = Math.max(...floors.map((b) => b.x)) + 1,
        minZ = Math.min(...floors.map((b) => b.z)) - 1,
        maxZ = Math.max(...floors.map((b) => b.z)) + 1;
      if (roofs.filter((b) => b.x >= minX && b.x <= maxX && b.z >= minZ && b.z <= maxZ).length >= 4)
        return { x: bench.x, z: bench.z, pieces: nearby.length };
    }
  }
  return null;
}
export function journeyStatus(j, records, pickTier) {
  const all = [...records].filter((b) => !b.free),
    h = j.harvested,
    roof = shelterAt(all),
    materials = new Set(all.map((b) => b.material)),
    chapter = j.chapter;
  const conditions =
    [
      [
        ['Bois récolté', h.wood, 8],
        ['Pierre récoltée', h.stone, 4],
        ['Baies récoltées', h.berries, 3],
        ['Établi utilisé', Number(j.stations.workbench), 1],
      ],
      [['Refuge construit', Number(!!roof), 1]],
      [
        ['Forge allumée', Number(j.stations.forge), 1],
        ['Fenêtres', all.filter((b) => b.shape === 'window').length, 2],
        ['Briques / verre', all.filter((b) => ['brick', 'glass'].includes(b.material)).length, 4],
      ],
      [
        ['Pioche niv. 3', Math.min(1, pickTier - 2), 1],
        ['Fer récolté', h.iron, 8],
        ['Cristaux récoltés', h.crystal, 4],
        ['Phare activé', Number(j.stations.beacon), 1],
      ],
      [
        ['Refuge', Number(!!roof), 1],
        ['Phare actif', Number(j.stations.beacon), 1],
        ['Pioche niv. 4', Number(pickTier >= 4), 1],
        ['Pièces', all.length, 28],
        ['Matériaux', materials.size, 6],
        ['Jardinières', all.filter((b) => b.shape === 'planter').length, 2],
      ],
    ][chapter] || [];
  return {
    title: CHAPTERS[chapter]?.title || 'La vallée est à vous',
    detail:
      CHAPTERS[chapter]?.detail ||
      'Le mode libre est débloqué. Créez, agrandissez et personnalisez votre village.',
    conditions,
    done: conditions.length > 0 && conditions.every(([, n, goal]) => n >= goal),
    progress: chapter / CHAPTERS.length,
    roof,
    materials: materials.size,
    pieces: all.length,
  };
}
export function advanceJourney(j, records, pickTier, inventory) {
  const status = journeyStatus(j, records, pickTier);
  if (!status.done) return null;
  const chapter = CHAPTERS[j.chapter];
  for (const [key, n] of Object.entries(chapter.reward)) inventory[key] = (inventory[key] || 0) + n;
  j.chapter++;
  return { title: chapter.title, reward: chapter.rewardText };
}
export function recordHarvest(j, key, amount) {
  if (Number.isFinite(amount) && amount > 0) j.harvested[key] = (j.harvested[key] || 0) + amount;
}
export function diversity(records) {
  return new Set([...records].map((b) => surface(b.material).id)).size;
}

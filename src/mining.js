export const MATERIALS = {
  soil: { label: 'Terre / herbe', tier: 1, resource: 'clay', seconds: 0.65 },
  sand: { label: 'Sable', tier: 1, resource: 'clay', seconds: 0.5 },
  wood: { label: 'Bois', tier: 1, resource: 'wood', seconds: 1.1 },
  berries: { label: 'Buisson de baies', tier: 1, resource: 'berries', seconds: 0.55 },
  stone: { label: 'Pierre', tier: 2, resource: 'stone', seconds: 2.1 },
  coal: { label: 'Charbon', tier: 2, resource: 'coal', seconds: 1.3 },
  copper: { label: 'Cuivre', tier: 2, resource: 'copper', seconds: 1.6 },
  iron: { label: 'Fer', tier: 2, resource: 'iron', seconds: 1.8 },
  deepstone: { label: 'Roche profonde', tier: 3, resource: 'stone', seconds: 2.2 },
  crystal: { label: 'Cristal d’améthyste', tier: 3, resource: 'crystal', seconds: 2 },
  diamond: { label: 'Diamant', tier: 4, resource: 'diamond', seconds: 3.2 },
};
export function miningRule(material, tool, pickTier = 2) {
  const m = MATERIALS[material] || MATERIALS.stone;
  const level = tool === 'pick' ? pickTier : 1;
  const allowed = level >= m.tier;
  const multiplier =
    tool === 'shovel' && ['soil', 'sand'].includes(material)
      ? 0.34
      : tool === 'pick' && m.tier >= 2
        ? Math.max(0.38, 1 - (pickTier - m.tier) * 0.22)
        : tool === 'pick'
          ? 0.95
          : tool === 'shovel'
            ? 1.8
            : 1.4;
  return { ...m, allowed, level, duration: m.seconds * multiplier };
}
export function surfaceMaterial(world, x, z) {
  const s = world.sample(x, z),
    depth = -(world.displacement?.(x, z) || 0);
  return depth >= 4.99
    ? 'deepstone'
    : depth >= 1.69 || s.biome === 'rock'
      ? 'stone'
      : s.height < (world.lake?.level || 0) + 1.8 && x < -180
        ? 'sand'
        : 'soil';
}
export function upgradeCost(tier) {
  return tier === 2 ? { stone: 6, wood: 4 } : tier === 3 ? { iron: 8, wood: 4 } : null;
}
export function upgradePick(inventory, tier) {
  const cost = upgradeCost(tier);
  if (!cost || Object.entries(cost).some(([k, n]) => (inventory[k] || 0) < n)) return null;
  return {
    tier: tier + 1,
    inventory: Object.fromEntries(
      Object.entries(inventory).map(([k, n]) => [k, n - (cost[k] || 0)])
    ),
  };
}

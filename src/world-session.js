export function parseSeed(value) {
  if (!/^\d{1,10}$/.test(String(value))) return null;
  const seed = Number(value);
  return Number.isSafeInteger(seed) && seed <= 4294967295 ? seed : null;
}
export function randomSeed() {
  return crypto.getRandomValues(new Uint32Array(1))[0];
}
/** Deterministic, dry clearing with gentle footing; search is bounded. */
export function chooseSpawn(world, seed) {
  let state = Number(seed) >>> 0;
  const random = () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };
  for (let i = 0; i < 160; i++) {
    const x = (random() - 0.5) * 1500,
      z = (random() - 0.5) * 1500,
      s = world.sample(x, z);
    if (s.slope > 0.3 || s.height > 145 || (s.canopy || 0) > 0.3 || world.waterLevel(x, z) !== null)
      continue;
    if (
      [
        [-2, 0],
        [2, 0],
        [0, -2],
        [0, 2],
      ].some(([a, b]) => Math.abs(world.height(x + a, z + b) - s.height) > 0.8)
    )
      continue;
    return { x, z, yaw: random() * Math.PI * 2, pitch: -0.12 };
  }
  return { ...world.panorama };
}

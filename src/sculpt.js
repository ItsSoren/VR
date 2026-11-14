const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const ease = (t) => t * t * (3 - 2 * t);
const key = (x, z) => `${x},${z}`;

/** Sparse metre-grid displacements. One surface is shared by rendering and physics. */
export function createEditableWorld(base) {
  const cells = new Map(),
    history = [];
  let revision = 0;
  function displacement(x, z) {
    const ix = Math.floor(x),
      iz = Math.floor(z),
      u = ease(x - ix),
      v = ease(z - iz);
    const a = cells.get(key(ix, iz)) || 0,
      b = cells.get(key(ix + 1, iz)) || 0;
    const c = cells.get(key(ix, iz + 1)) || 0,
      d = cells.get(key(ix + 1, iz + 1)) || 0;
    return (a + (b - a) * u) * (1 - v) + (c + (d - c) * u) * v;
  }
  const height = (x, z) => base.height(x, z) + displacement(x, z);
  function surface(x, z, h, slope) {
    const s = base.surface(x, z, h, slope),
      disturbance = clamp(Math.abs(displacement(x, z)) * 1.6, 0, 1);
    return { ...s, disturbance, grass: s.grass * (1 - disturbance) };
  }
  function sample(x, z) {
    const h = height(x, z),
      e = 0.6;
    const slope = Math.hypot(
      (height(x + e, z) - height(x - e, z)) / (2 * e),
      (height(x, z + e) - height(x, z - e)) / (2 * e)
    );
    return surface(x, z, h, slope);
  }
  function stroke(x, z, { mode = 'dig', radius = 2.6, strength = 0.35, miningTier = 4 } = {}) {
    if (
      ![x, z, radius, strength].every(Number.isFinite) ||
      Math.abs(x) > 1450 ||
      Math.abs(z) > 1450 ||
      !['dig', 'raise', 'smooth'].includes(mode)
    )
      return null;
    radius = clamp(radius, 1.8, 4);
    strength = clamp(strength, 0.02, 0.45);
    const changes = [],
      r = radius;
    for (let iz = Math.floor(z - r); iz <= Math.ceil(z + r); iz++)
      for (let ix = Math.floor(x - r); ix <= Math.ceil(x + r); ix++) {
        const q = ((ix - x) ** 2 + (iz - z) ** 2) / (r * r);
        if (q >= 1) continue;
        const k = key(ix, iz),
          before = cells.get(k) || 0,
          weight = (1 - q) ** 3;
        let amount = (mode === 'dig' ? -strength : strength) * weight;
        if (mode === 'smooth') {
          const avg =
            (height(ix - 1, iz) + height(ix + 1, iz) + height(ix, iz - 1) + height(ix, iz + 1)) / 4;
          amount = clamp((avg - height(ix, iz)) * 0.6, -strength, strength) * weight;
        }
        // Layer boundaries cannot be bypassed by a wide brush centred on soil.
        const floor = miningTier < 2 ? -1.7 : miningTier < 3 ? -5 : -12;
        const after =
          mode === 'raise'
            ? clamp(before + amount, -12, 12)
            : before < floor
              ? before
              : clamp(before + amount, floor, 12);
        if (Math.abs(after - before) > 1e-6) changes.push({ k, before, after });
      }
    if (!changes.length || cells.size + changes.filter((c) => !cells.has(c.k)).length > 30000)
      return null;
    for (const c of changes) cells.set(c.k, c.after);
    const record = {
      changes,
      mode,
      bounds: { x: x - r - 2, z: z - r - 2, maxX: x + r + 2, maxZ: z + r + 2 },
    };
    history.push(record);
    if (history.length > 32) history.shift();
    revision++;
    return record;
  }
  function undo() {
    const record = history.pop();
    if (!record) return null;
    for (const c of record.changes) {
      if (Math.abs(c.before) < 1e-6) cells.delete(c.k);
      else cells.set(c.k, c.before);
    }
    revision++;
    return record;
  }
  function restore(data) {
    cells.clear();
    history.length = 0;
    if (Array.isArray(data))
      for (const entry of data.slice(0, 30000)) {
        if (!Array.isArray(entry) || entry.length !== 3) continue;
        const [x, z, d] = entry;
        if (
          ![x, z, d].every(Number.isFinite) ||
          !Number.isInteger(x) ||
          !Number.isInteger(z) ||
          Math.abs(x) > 1455 ||
          Math.abs(z) > 1455
        )
          continue;
        cells.set(key(x, z), clamp(d, -12, 12));
      }
    revision++;
  }
  const waterLevel = (x, z) => {
    if (!base.lakes) return base.waterLevel?.(x, z) ?? null;
    for (const p of base.lakes)
      if (Math.hypot((x - p.x) / p.rx, (z - p.z) / p.rz) < 1 && height(x, z) < p.level)
        return p.level;
    return null;
  };
  return {
    ...base,
    height,
    sample,
    surface,
    waterLevel,
    displacement,
    stroke,
    undo,
    restore,
    serialize: () => [...cells].map(([k, d]) => [...k.split(',').map(Number), d]),
    peekUndo: () => history.at(-1),
    get editedCells() {
      return cells.size;
    },
    get revision() {
      return revision;
    },
    get undoCount() {
      return history.length;
    },
  };
}

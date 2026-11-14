import * as THREE from 'three';
const fract = (x) => x - Math.floor(x);
const random = (p, n) =>
  fract(Math.sin(p.x * 12.9898 + p.z * 78.233 + p.rotation * 19.37 + n * 37.71) * 43758.5453);
const position = new THREE.Vector3(),
  rotation = new THREE.Quaternion(),
  scale = new THREE.Vector3(),
  euler = new THREE.Euler();
export function propVariation(p) {
  const tree = p.type === 'tree' || p.prototype < 3,
    rock = p.type === 'rock' || (p.prototype >= 3 && p.prototype < 6);
  const form = random(p, 1),
    width = tree
      ? 0.68 + random(p, 2) * 0.64
      : rock
        ? 0.65 + random(p, 2) * 0.95
        : 0.7 + random(p, 2) * 0.75;
  const height = tree
    ? form < 0.25
      ? 0.62 + form
      : 0.9 + random(p, 3) * 0.43
    : rock
      ? 0.45 + random(p, 3) * 1.05
      : 0.55 + random(p, 3) * 0.85;
  return {
    x: width,
    y: height,
    z: width * (0.72 + random(p, 4) * 0.53),
    leanX: tree ? (random(p, 5) - 0.5) * 0.055 : (random(p, 5) - 0.5) * 0.22,
    leanZ: tree ? (random(p, 6) - 0.5) * 0.055 : (random(p, 6) - 0.5) * 0.22,
    tone: random(p, 7),
    light: 0.8 + random(p, 8) * 0.2,
  };
}
/** One deterministic transform for wood, foliage, fruit and distant silhouettes. */
export function propMatrix(p, matrix) {
  const v = propVariation(p);
  position.set(p.x, p.baseY - 0.045, p.z);
  rotation.setFromEuler(euler.set(v.leanX, p.rotation, v.leanZ));
  scale.set(p.scale * v.x, p.scale * v.y, p.scale * v.z);
  return matrix.compose(position, rotation, scale);
}
export function propTint(p, color, foliage = false) {
  const v = propVariation(p);
  if (foliage || p.prototype >= 6)
    color.setRGB(0.83 + v.tone * 0.17, 0.94 + v.tone * 0.06, 0.75 + (1 - v.tone) * 0.25);
  else color.setRGB(1, 0.91 + v.tone * 0.09, 0.83 + v.tone * 0.17);
  return color.multiplyScalar(v.light);
}

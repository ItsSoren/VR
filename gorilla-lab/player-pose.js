// Shared, allocation-free rules for player calibration and collision response.
export function calibratedHeight(previous, sample) {
  if (!Number.isFinite(sample) || sample < .1) return previous;
  // Rising from a seated start updates the reference; crouching keeps its range.
  return Number.isFinite(previous) ? Math.max(previous, sample) : sample;
}
export function torsoBend(lookDown, forward) {
  const t = Math.max(0, Math.min(1, (lookDown - .2) / .72));
  return -1.12 * t * t * (3 - 2 * t) - forward * .45;
}
export function removeInwardVelocity(velocity, normal) {
  const inward = velocity.dot(normal);
  if (inward < 0) velocity.addScaledVector(normal, -inward);
}
export function bodyProxyOffset(inVR, back, distance, out) {
  // A PC view rotation must never move the feet or torso collision axes.
  return out.copy(back).multiplyScalar(inVR ? distance : 0);
}


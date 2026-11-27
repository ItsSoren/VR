// Shared, allocation-free rules for player calibration and collision response.
const standingEyeBase=.43, sizeStep=.088;
export const vrTorsoStretch=.43;
export function standingEyeHeight(size) {
  return standingEyeBase+sizeStep*size;
}
export function avatarWidth(size) {
  return .72+size*.05;
}
export function avatarSizeFromHeight(height) {
  return Math.max(1,Math.min(10,(height-standingEyeBase)/sizeStep));
}
export function extraGroundReach(size,lowered) {
  return Math.max(0,standingEyeHeight(size??3)-standingEyeHeight(3))*lowered;
}

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

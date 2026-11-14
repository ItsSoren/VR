const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/** Cosmetic offsets never alter feet, physics or the player's stored aiming angles. */
export class CameraFeel {
  constructor() {
    this.phase = 0;
    this.motion = 0;
    this.kick = 0;
    this.trauma = 0;
    this.age = 0;
  }
  impact(strength = 0.5) {
    this.kick = Math.min(1, this.kick + strength * 0.7);
    this.trauma = Math.min(1, this.trauma + strength * 0.35);
  }
  reset() {
    this.phase = this.motion = this.kick = this.trauma = this.age = 0;
  }
  sample(dt, speed, grounded, sprinting, scale = 1) {
    if (dt > 0) {
      dt = Math.min(0.12, dt);
      this.age += dt;
      this.motion +=
        (clamp(speed / 4.5, 0, 1) * (grounded ? 1 : 0) - this.motion) * (1 - Math.exp(-dt * 12));
      this.phase += dt * (sprinting ? 14 : 10) * clamp(speed / 4.5, 0, 1.5);
      this.kick *= Math.exp(-dt * 14);
      this.trauma *= Math.exp(-dt * 10);
    }
    scale = clamp(scale, 0, 1);
    if (scale === 0) return { y: 0, roll: 0, pitch: 0, fov: 0 };
    return {
      y: (Math.sin(this.phase * 2) * 0.013 * this.motion - this.kick * 0.025) * scale,
      roll:
        (Math.sin(this.phase) * 0.006 * this.motion +
          Math.sin(this.age * 55) * this.trauma * 0.008) *
        scale,
      pitch: (this.kick * 0.027 + Math.sin(this.age * 61) * this.trauma * 0.003) * scale,
      fov: (sprinting ? 7 : 0) * scale,
    };
  }
}

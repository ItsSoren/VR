import * as THREE from 'three';

/** A fixed particle budget. Rain stops at sampled ground, and hides inside shelter. */
export class WeatherFX {
  constructor(scene) {
    this.capacity = 900;
    this.geometry = new THREE.BufferGeometry();
    this.positions = new Float32Array(this.capacity * 6);
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.material = new THREE.LineBasicMaterial({
      color: '#b7cfdf',
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });
    this.rain = new THREE.LineSegments(this.geometry, this.material);
    this.rain.name = 'Pluie et vent';
    this.rain.frustumCulled = false;
    scene.add(this.rain);
    this.cache = new Float32Array(this.capacity);
    this.cacheTick = -1;
    this.count = 0;
  }
  update(camera, world, weather, quality, playing, cave, sheltered = false) {
    const w = weather.values,
      budget = quality === 'high' ? 900 : quality === 'medium' ? 480 : 180;
    this.count = Math.floor(budget * w.rain);
    this.rain.visible = !cave && !sheltered && playing && this.count > 0;
    if (!this.rain.visible) return;
    const tick = Math.floor(weather.clock),
      sample = tick !== this.cacheTick;
    this.cacheTick = tick;
    const clock = weather.clock,
      px = camera.position.x,
      py = camera.position.y,
      pz = camera.position.z;
    for (let i = 0; i < this.count; i++) {
      const angle = i * 2.39996,
        radius = 2 + ((i * 7.17) % 19);
      const x = px + Math.sin(angle) * radius,
        z = pz + Math.cos(angle) * radius;
      if (sample) this.cache[i] = world.height(x, z) + 0.04;
      const floor = this.cache[i],
        top = Math.max(floor + 1, py + 14);
      const t = (((i * 0.617 - (clock * (w.rain * 9 + 9)) / (top - floor)) % 1) + 1) % 1;
      const y = floor + t * (top - floor),
        j = i * 6,
        drift = w.wind * 0.4;
      this.positions[j] = x;
      this.positions[j + 1] = y;
      this.positions[j + 2] = z;
      this.positions[j + 3] = x + drift;
      this.positions[j + 4] = Math.max(floor, y - 0.55);
      this.positions[j + 5] = z + drift * 0.3;
    }
    this.geometry.setDrawRange(0, this.count * 2);
    this.geometry.attributes.position.needsUpdate = true;
  }
}

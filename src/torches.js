import * as THREE from 'three';

export const TORCH_RECIPE = { wood: 1, coal: 1 };
export function craftTorches(inventory) {
  if (Object.entries(TORCH_RECIPE).some(([key, n]) => (inventory[key] || 0) < n)) return false;
  for (const [key, n] of Object.entries(TORCH_RECIPE)) inventory[key] -= n;
  inventory.torch = (inventory.torch || 0) + 4;
  return true;
}
export class Torches {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.placed = [];
    this.handle = new THREE.CylinderGeometry(0.065, 0.085, 0.7, 5);
    this.flame = new THREE.ConeGeometry(0.13, 0.34, 5);
    this.wood = new THREE.MeshStandardMaterial({ color: '#805233', flatShading: true });
    this.fire = new THREE.MeshBasicMaterial({ color: '#ffb646' });
    this.held = this.model();
    this.held.position.set(0.34, -0.34, -0.62);
    camera.add(this.held);
    this.lights = Array.from({ length: 6 }, () => {
      const light = new THREE.PointLight('#ffc16c', 0, 17, 2);
      scene.add(light);
      return light;
    });
    this.embers = new THREE.InstancedMesh(
      new THREE.OctahedronGeometry(0.022, 0),
      new THREE.MeshBasicMaterial({ color: '#ffd787' }),
      56
    );
    this.embers.frustumCulled = false;
    scene.add(this.embers);
    this.dummy = new THREE.Object3D();
  }
  model() {
    const root = new THREE.Group(),
      handle = new THREE.Mesh(this.handle, this.wood),
      fire = new THREE.Mesh(this.flame, this.fire);
    handle.position.y = 0.35;
    fire.position.y = 0.82;
    root.add(handle, fire);
    return root;
  }
  clear() {
    for (const t of this.placed) this.scene.remove(t.mesh);
    this.placed = [];
  }
  restore(saved = []) {
    this.clear();
    for (const t of saved.slice(0, 128))
      if ([t.x, t.y, t.z].every(Number.isFinite)) this.add(t, !!t.cave);
  }
  add(p, cave = false) {
    if (this.placed.length >= 128) return false;
    const mesh = this.model();
    mesh.position.set(p.x, p.y, p.z);
    this.scene.add(mesh);
    this.placed.push({ x: p.x, y: p.y, z: p.z, cave, mesh });
    return true;
  }
  remove(t) {
    this.scene.remove(t.mesh);
    this.placed.splice(this.placed.indexOf(t), 1);
  }
  target(ray) {
    return this.placed.find(
      (t) =>
        ray.distanceToPoint(new THREE.Vector3(t.x, t.y + 0.5, t.z)) < 0.3 &&
        ray.origin.distanceTo(new THREE.Vector3(t.x, t.y, t.z)) < 6
    );
  }
  serialize() {
    return this.placed.map(({ x, y, z, cave }) => ({ x, y, z, cave }));
  }
  update(time, equipped, cave, playing) {
    this.held.visible = equipped && playing;
    const sources = this.placed.filter((t) => t.cave === cave);
    for (const t of this.placed) t.mesh.visible = t.cave === cave;
    sources.sort(
      (a, b) =>
        this.camera.position.distanceToSquared(a.mesh.position) -
        this.camera.position.distanceToSquared(b.mesh.position)
    );
    const points = sources
      .slice(0, equipped ? 5 : 6)
      .map((t) => t.mesh.position.clone().add(new THREE.Vector3(0, 0.85, 0)));
    if (equipped && playing)
      points.unshift(
        this.held.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.5, 0))
      );
    this.lights.forEach((light, i) => {
      light.visible = !!points[i];
      if (!points[i]) return;
      light.position.copy(points[i]);
      light.intensity = 18 * (0.92 + Math.sin(time * 11 + i) * 0.06 + Math.sin(time * 17) * 0.025);
    });
    let n = 0;
    for (let i = 0; i < points.length; i++)
      for (let j = 0; j < 8; j++) {
        const life = (time * 0.65 + j * 0.123 + i * 0.17) % 1;
        this.dummy.position
          .copy(points[i])
          .add(
            new THREE.Vector3(
              Math.sin(j * 7 + time) * life * 0.14,
              life * 0.8,
              Math.cos(j * 3 + time) * life * 0.14
            )
          );
        this.dummy.scale.setScalar(1 - life);
        this.dummy.updateMatrix();
        this.embers.setMatrixAt(n++, this.dummy.matrix);
      }
    this.embers.count = n;
    this.embers.visible = playing;
    this.embers.instanceMatrix.needsUpdate = true;
  }
}

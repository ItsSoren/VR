import * as THREE from 'three';

/** A readable surface landmark and a warm exit in the underground vestibule. */
export class CaveEntrance {
  constructor(scene, world, caves, anchorWorld = world) {
    const spawn = anchorWorld.spawn;
    let best = null;
    for (let i = 0; i < 48; i++) {
      const angle = i * 2.39996;
      const x = spawn.x + Math.cos(angle) * (42 + (i % 4) * 9);
      const z = spawn.z + Math.sin(angle) * (42 + (i % 4) * 9);
      const s = anchorWorld.sample(x, z);
      const score = Math.abs(s.slope - 0.2) + (s.height < 5 ? 10 : 0);
      if (!best || score < best.score) best = { x, z, score };
    }
    this.position = new THREE.Vector3(best.x, world.height(best.x, best.z), best.z);
    this.group = new THREE.Group();
    this.group.position.copy(this.position);
    const stone = new THREE.MeshStandardMaterial({
      color: '#767b70',
      roughness: 1,
      flatShading: true,
    });
    const dark = new THREE.MeshBasicMaterial({ color: '#080f13' });
    const arch = (geometry, material, x, y, z, sx = 1, sy = 1, sz = 1) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
      mesh.scale.set(sx, sy, sz);
      mesh.castShadow = mesh.receiveShadow = true;
      this.group.add(mesh);
      return mesh;
    };
    const rock = new THREE.IcosahedronGeometry(1, 0);
    arch(rock, stone, -2.4, 1.4, 0, 1.8, 2.7, 2.3);
    arch(rock, stone, 2.4, 1.6, 0, 1.9, 3, 2.4);
    arch(rock, stone, 0, 4.1, 0, 3.3, 1.6, 2.5);
    arch(new THREE.PlaneGeometry(3.5, 4), dark, 0, 2, -0.2);
    const sign = document.createElement('canvas');
    sign.width = 512;
    sign.height = 128;
    const ctx = sign.getContext('2d');
    ctx.fillStyle = '#172421';
    ctx.fillRect(0, 0, 512, 128);
    ctx.fillStyle = '#eee7cd';
    ctx.font = '32px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('GROTTES · ENTRÉE', 256, 58);
    ctx.font = '22px sans-serif';
    ctx.fillText('Charbon → cristaux → pierre profonde', 256, 99);
    arch(
      new THREE.PlaneGeometry(3.2, 0.8),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sign), side: THREE.DoubleSide }),
      0,
      4.8,
      1
    );
    scene.add(this.group);
    this.exit = new THREE.Group();
    this.exit.position.set(caves.field.spawn.x, caves.field.floor(0, 7), caves.field.spawn.z + 4);
    const opening = new THREE.Mesh(
      new THREE.PlaneGeometry(3, 4),
      new THREE.MeshBasicMaterial({ color: '#b8d5db', side: THREE.DoubleSide })
    );
    opening.position.y = 2;
    this.exit.add(opening);
    const light = new THREE.PointLight('#ffe3ad', 65, 25, 2);
    light.position.set(0, 3, -2);
    this.exit.add(light);
    caves.group.add(this.exit);
  }
  distance(player, inCave = false) {
    const p = inCave ? this.exit.position : this.position;
    return Math.hypot(player.position.x - p.x, player.position.z - p.z);
  }
  dispose() {
    this.group.removeFromParent();
    this.exit.removeFromParent();
    const geometries = new Set(),
      materials = new Set();
    for (const group of [this.group, this.exit])
      group.traverse((o) => {
        if (o.geometry) geometries.add(o.geometry);
        if (o.material) materials.add(o.material);
      });
    for (const g of geometries) g.dispose();
    for (const m of materials) {
      m.map?.dispose();
      m.dispose();
    }
  }
}

import * as THREE from 'three';

export class ToolView {
  constructor(camera, scene) {
    this.root = new THREE.Group();
    this.root.position.set(0.38, -0.36, -0.65);
    this.root.scale.setScalar(0.72);
    camera.add(this.root);
    scene.add(camera);
    this.materials = [];
    this.geometries = [];
    this.models = [];
    this.swing = 0;
    this.lightScale = { value: 1 };
    const material = (color) => {
      const m = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.9,
        depthTest: false,
        depthWrite: false,
      });
      // The camera lamp must not bleach objects held centimetres from its source.
      m.onBeforeCompile = (s) => {
        s.uniforms.toolLightScale = this.lightScale;
        s.fragmentShader = 'uniform float toolLightScale;\n' + s.fragmentShader;
        s.fragmentShader = s.fragmentShader.replace(
          '#include <lights_fragment_end>',
          '#include <lights_fragment_end>\nreflectedLight.directDiffuse*=toolLightScale;reflectedLight.directSpecular*=toolLightScale;'
        );
      };
      m.customProgramCacheKey = () => 'vallon-held-tool';
      this.materials.push(m);
      return m;
    };
    const wood = material('#8c633f'),
      metal = material('#aab5ae'),
      stone = material('#99a49a'),
      clay = material('#c29373');
    this.swordMaterial = material('#ac8154');
    const box = (group, w, h, d, x, y, z, m) => {
      const g = new THREE.BoxGeometry(w, h, d);
      this.geometries.push(g);
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(x, y, z);
      mesh.renderOrder = 100;
      mesh.frustumCulled = false;
      group.add(mesh);
      return mesh;
    };
    this.pickHeads = [];
    for (const name of ['hand', 'shovel', 'pick', 'wood', 'stone', 'clay', 'sword']) {
      const group = new THREE.Group();
      group.name = name;
      // Keep the view clear: tools float at the edge, with no hand or forearm.
      if (name === 'shovel') {
        box(group, 0.035, 0.56, 0.035, 0, 0.24, -0.05, wood);
        box(group, 0.2, 0.23, 0.035, 0, 0.6, -0.05, metal);
        box(group, 0.23, 0.035, 0.06, 0, 0.49, -0.03, metal);
      }
      if (name === 'pick') {
        const handle = box(group, 0.038, 0.62, 0.042, 0, 0.26, -0.05, wood);
        handle.rotation.z = -0.08;
        const outlines = [
          [
            [-0.24, -0.04],
            [-0.18, 0.07],
            [-0.07, 0.105],
            [0.09, 0.09],
            [0.22, 0.005],
            [0.26, -0.1],
            [0.08, 0.02],
            [-0.09, 0.025],
          ],
          [
            [-0.27, -0.1],
            [-0.21, 0.05],
            [-0.08, 0.11],
            [0.08, 0.105],
            [0.22, 0.04],
            [0.29, -0.11],
            [0.17, -0.035],
            [0.06, 0.025],
            [-0.07, 0.03],
            [-0.18, -0.02],
          ],
          [
            [-0.3, -0.15],
            [-0.24, 0.04],
            [-0.09, 0.13],
            [0.08, 0.12],
            [0.23, 0.02],
            [0.32, -0.15],
            [0.18, -0.07],
            [0.065, 0.025],
            [-0.075, 0.03],
            [-0.19, -0.065],
          ],
        ];
        outlines.forEach((points, i) => {
          const shape = new THREE.Shape();
          points.forEach(([x, y], j) => (j ? shape.lineTo(x, y) : shape.moveTo(x, y)));
          shape.closePath();
          const geometry = new THREE.ExtrudeGeometry(shape, {
            depth: 0.058,
            bevelEnabled: true,
            bevelSegments: 1,
            steps: 1,
            bevelSize: 0.009,
            bevelThickness: 0.006,
          });
          this.geometries.push(geometry);
          const m = material(['#87948d', '#c2d1d5', '#af93dc'][i]);
          m.flatShading = true;
          m.roughness = i === 0 ? 0.9 : 0.4;
          m.metalness = i === 0 ? 0.05 : 0.45;
          const head = new THREE.Mesh(geometry, m);
          head.position.set(0, 0.58, -0.08);
          head.renderOrder = 100;
          head.frustumCulled = false;
          group.add(head);
          this.pickHeads.push(head);
          const band = box(group, 0.062, 0.045, 0.061, 0, 0.46 - i * 0.055, -0.05, m);
          band.userData.tier = i + 2;
          this.pickHeads.push(band);
          head.userData.tier = i + 2;
        });
      }
      if (name === 'sword') {
        box(group, 0.055, 0.22, 0.055, 0, 0.17, -0.05, wood);
        box(group, 0.22, 0.04, 0.08, 0, 0.3, -0.05, metal);
        box(group, 0.075, 0.55, 0.026, 0, 0.6, -0.05, this.swordMaterial);
        box(group, 0.03, 0.11, 0.026, 0, 0.92, -0.05, this.swordMaterial);
      }
      if (['wood', 'stone', 'clay'].includes(name)) {
        const block = box(group, 0.23, 0.23, 0.23, 0, 0.17, -0.11, { wood, stone, clay }[name]);
        block.rotation.y = 0.25;
      }
      group.rotation.set(-0.12, 0, -0.35);
      this.root.add(group);
      this.models.push(group);
    }
    this.brushGeometry = new THREE.BufferGeometry();
    this.brushGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(65 * 3), 3)
    );
    this.brush = new THREE.Line(
      this.brushGeometry,
      new THREE.LineBasicMaterial({
        color: '#f4d58e',
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
        depthTest: false,
      })
    );
    this.brush.renderOrder = 98;
    this.brush.frustumCulled = false;
    this.brush.visible = false;
    scene.add(this.brush);
  }
  setPickTier(tier) {
    this.pickHeads.forEach((m) => (m.visible = m.userData.tier === tier));
  }
  strike() {
    this.swing = 1;
  }
  setSwordTier(tier) {
    this.swordMaterial.color.set(['', '#ac8154', '#bdcacb', '#b799e7'][tier] || '#ac8154');
    this.swordMaterial.emissive.set(tier === 3 ? '#513782' : '#000000');
    this.swordMaterial.emissiveIntensity = tier === 3 ? 0.2 : 0;
  }
  update(dt, time, tool, playing, moving, underground = false, guard = false) {
    this.lightScale.value = underground ? 0.035 : 1;
    this.root.visible = playing && tool !== 'hand';
    this.models.forEach((m) => (m.visible = m.name === tool));
    this.swing = Math.max(0, this.swing - dt * 4.5);
    const hit = Math.sin(this.swing * Math.PI);
    this.root.position.set(
      0.38 - hit * 0.09,
      -0.36 + Math.sin(time * 8) * moving * 0.012 - hit * 0.13,
      -0.65 - hit * 0.12
    );
    this.root.rotation.set(-hit * 0.65, hit * 0.22, hit * 0.08);
    if (guard) {
      this.root.position.set(0.07, -0.28, -0.6);
      this.root.rotation.set(0.15, 0.25, 1.05);
    }
  }
  showBrush(hit, world, radius, mode) {
    this.brush.visible = !!hit;
    if (!hit) return;
    const attr = this.brushGeometry.getAttribute('position');
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2,
        x = hit.x + Math.cos(a) * radius,
        z = hit.z + Math.sin(a) * radius;
      attr.setXYZ(i, x, world.height(x, z) + 0.05, z);
    }
    attr.needsUpdate = true;
    this.brush.material.color.set(
      mode === 'raise' ? '#b8e0b2' : mode === 'smooth' ? '#a5d9df' : '#f4d58e'
    );
  }
}

import * as THREE from 'three';

const BIAS = new THREE.Matrix4().set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);

/** Renders one nearby lake into a small planar reflection texture. */
export class PlanarWaterReflection {
  constructor(renderer, scene, { exclude = [] } = {}) {
    this.renderer = renderer;
    this.scene = scene;
    this.exclude = exclude;
    this.target = new THREE.WebGLRenderTarget(512, 512, {
      depthBuffer: true,
      stencilBuffer: false,
      generateMipmaps: false,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
    });
    this.target.texture.name = 'Vallon lake reflection';
    this.virtualCamera = new THREE.PerspectiveCamera();
    this.reflectionMatrix = new THREE.Matrix4();
    this.frame = 0;
    this.size = 512;
    this.lake = null;
  }

  update(camera, landscape, time, quality, enabled = true) {
    const uniforms = landscape.waterMaterial.uniforms;
    uniforms.uReflectionTex.value = this.target.texture;
    if (!enabled || quality === 'low' || !landscape.waters.length) {
      uniforms.uHasReflection.value = 0;
      return false;
    }

    const size = quality === 'high' ? 768 : 512;
    if (size !== this.size) {
      this.target.setSize(size, size);
      this.size = size;
    }
    if (this.frame++ % 5 !== 0) return Boolean(uniforms.uHasReflection.value);

    camera.updateMatrixWorld(true);
    const cameraPosition = camera.getWorldPosition(new THREE.Vector3());
    const lake = landscape.waters
      .map((mesh, i) => {
        const data = landscape.world.lakes[i];
        const normalizedDistance = Math.hypot(
          (mesh.position.x - cameraPosition.x) / data.rx,
          (mesh.position.z - cameraPosition.z) / data.rz
        );
        return {
          mesh,
          data,
          normalizedDistance,
          shoreDistance: Math.max(0, normalizedDistance - 1) * Math.min(data.rx, data.rz),
        };
      })
      .filter(
        ({ mesh, normalizedDistance }) =>
          normalizedDistance < 1.5 && cameraPosition.y > mesh.position.y + 0.02
      )
      .sort((a, b) => a.shoreDistance - b.shoreDistance)[0];
    if (!lake) {
      uniforms.uHasReflection.value = 0;
      return false;
    }
    const lakeData = lake.data;

    this.#setMirrorCamera(camera, lake.mesh.position.y);
    uniforms.uReflectionMatrix.value.copy(this.reflectionMatrix);
    uniforms.uReflectionLake.value.set(lakeData.x, lakeData.z, lakeData.rx, lakeData.rz);
    this.landscape = landscape;
    this.#render(camera);
    uniforms.uHasReflection.value = 1;
    this.lake = lake.mesh;
    return true;
  }

  #setMirrorCamera(camera, waterLevel) {
    const mirror = this.virtualCamera;
    mirror.copy(camera, false);
    mirror.parent = null;
    camera.updateMatrixWorld(true);

    const position = camera.getWorldPosition(new THREE.Vector3());
    const direction = camera.getWorldDirection(new THREE.Vector3());
    const target = position.clone().add(direction);
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(
      camera.getWorldQuaternion(new THREE.Quaternion())
    );
    const planePoint = new THREE.Vector3(0, waterLevel + 0.025, 0);
    const planeNormal = new THREE.Vector3(0, 1, 0);
    const reflectPoint = (point) => {
      const distance = planeNormal.dot(point.clone().sub(planePoint));
      return point.addScaledVector(planeNormal, -2 * distance);
    };
    const reflectedPosition = reflectPoint(position);
    const reflectedTarget = reflectPoint(target);
    up.addScaledVector(planeNormal, -2 * planeNormal.dot(up));
    mirror.position.copy(reflectedPosition);
    mirror.up.copy(up);
    mirror.lookAt(reflectedTarget);
    mirror.far = camera.far;
    mirror.updateMatrixWorld(true);
    mirror.projectionMatrix.copy(camera.projectionMatrix);

    const clipPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(planeNormal, planePoint);
    clipPlane.applyMatrix4(mirror.matrixWorldInverse);
    const clip = new THREE.Vector4(
      clipPlane.normal.x,
      clipPlane.normal.y,
      clipPlane.normal.z,
      clipPlane.constant
    );
    const projection = mirror.projectionMatrix;
    const e = projection.elements;
    const q = new THREE.Vector4(
      (Math.sign(clip.x) + e[8]) / e[0],
      (Math.sign(clip.y) + e[9]) / e[5],
      -1,
      (1 + e[10]) / e[14]
    );
    clip.multiplyScalar(2 / clip.dot(q));
    e[2] = clip.x;
    e[6] = clip.y;
    e[10] = clip.z + 1 - 0.003;
    e[14] = clip.w;

    this.reflectionMatrix
      .copy(BIAS)
      .multiply(mirror.projectionMatrix)
      .multiply(mirror.matrixWorldInverse);
  }

  #render(camera) {
    const renderer = this.renderer;
    const oldTarget = renderer.getRenderTarget();
    const oldViewport = renderer.getViewport(new THREE.Vector4());
    const oldScissor = renderer.getScissor(new THREE.Vector4());
    const oldScissorTest = renderer.getScissorTest();
    const oldClearColor = renderer.getClearColor(new THREE.Color());
    const oldClearAlpha = renderer.getClearAlpha();
    const oldAutoClear = renderer.autoClear;
    const oldXr = renderer.xr.enabled;
    const oldShadowUpdate = renderer.shadowMap.autoUpdate;
    const oldInfoAutoReset = renderer.info.autoReset;
    const info = renderer.info.render;
    const oldInfo = {
      calls: info.calls,
      triangles: info.triangles,
      points: info.points,
      lines: info.lines,
    };
    const visibility = new Map();
    const hide = (object) => {
      if (!object || visibility.has(object)) return;
      visibility.set(object, object.visible);
      object.visible = false;
    };
    for (const water of this.landscape.waters) hide(water);
    for (const child of camera.children) hide(child);
    for (const object of this.exclude) hide(object);

    try {
      renderer.xr.enabled = false;
      renderer.shadowMap.autoUpdate = false;
      renderer.autoClear = true;
      renderer.info.autoReset = false;
      renderer.setRenderTarget(this.target);
      renderer.setViewport(0, 0, this.size, this.size);
      renderer.setScissorTest(false);
      renderer.setClearColor(0x8798a3, 1);
      renderer.render(this.scene, this.virtualCamera);
    } finally {
      for (const [object, visible] of visibility) object.visible = visible;
      renderer.setRenderTarget(oldTarget);
      renderer.setViewport(oldViewport);
      renderer.setScissor(oldScissor);
      renderer.setScissorTest(oldScissorTest);
      renderer.setClearColor(oldClearColor, oldClearAlpha);
      renderer.autoClear = oldAutoClear;
      renderer.xr.enabled = oldXr;
      renderer.shadowMap.autoUpdate = oldShadowUpdate;
      renderer.info.autoReset = oldInfoAutoReset;
      Object.assign(info, oldInfo);
    }
  }

  dispose() {
    this.target.dispose();
  }
}

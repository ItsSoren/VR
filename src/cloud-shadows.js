import * as THREE from 'three';

// Keep this density function in lockstep with the volume pass in clouds.js. Both
// shaders sample the same repeating Data3DTexture and use the same cloud drift.
const densityGLSL = `
float cloudNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return texture(tNoise,(i+f+.5)/32.).r;}
float cloudDensity(vec3 p){
  float height=(p.y-620.)/240.;if(height<0.||height>1.)return 0.;
  vec3 q=(p+vec3(uTime*2.8,0.,uTime*.7))*.0028;
  float n=cloudNoise(q)*.63+cloudNoise(q*2.03)*.26+cloudNoise(q*4.13)*.11;
  float shape=smoothstep(0.,.2,height)*(1.-smoothstep(.62,1.,height));
  return max(0.,n-(.72-uCover*.32))*shape*1.8;
}`;

const fragment = `precision highp float;precision highp sampler3D;
  in vec2 vUv;out vec4 fragColor;
  uniform sampler3D tNoise;uniform vec2 uCenter;uniform float uSpan,uTime,uCover,uSunY,uStrength;
  uniform vec3 uSun;
  ${densityGLSL}
  void main(){
    if(uSunY<.035||uStrength<=.001){fragColor=vec4(1.);return;}
    vec2 xz=uCenter+(vUv-.5)*uSpan;
    float start=620./uSunY,end=860./uSunY;
    float stepSize=(end-start)/16.;float opticalDepth=0.;
    for(int i=0;i<16;i++){
      vec3 p=vec3(xz.x,0.,xz.y)+uSun*(start+(float(i)+.5)*stepSize);
      opticalDepth+=cloudDensity(p)*stepSize*.018;
    }
    float transmittance=exp(-opticalDepth);
    fragColor=vec4(mix(1.,transmittance,uStrength));
  }`;

const vertex = `in vec3 position;in vec2 uv;out vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`;

const QUALITY = {
  high: { size: 256, span: 1200, interval: 0.16 },
  medium: { size: 192, span: 1000, interval: 0.24 },
  low: { size: 128, span: 800, interval: 0.36 },
};

/**
 * A camera-centered, low-resolution cloud transmittance field. It shares the
 * volumetric cloud pass's density texture/time/coverage and projects that
 * transmittance into direct lighting on standard materials and custom grass.
 */
export class CloudShadows {
  constructor(renderer, scene, clouds) {
    this.renderer = renderer;
    this.scene = scene;
    this.clouds = clouds;
    this.quality = 'high';
    this.lastRender = -Infinity;
    this.lastTime = -Infinity;
    this.center = new THREE.Vector2(Infinity, Infinity);
    this.sun = new THREE.Vector3(0, 1, 0);
    this.materials = new Set();
    this.grassMaterials = new Set();
    this.wrapped = new WeakMap();
    this.target = new THREE.WebGLRenderTarget(1, 1, {
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false,
      stencilBuffer: false,
      generateMipmaps: false,
    });
    this.target.texture.name = 'Cloud shadow transmittance';
    this.uniforms = {
      tCloudShadow: { value: this.target.texture },
      uCloudShadowCenter: { value: this.center },
      uCloudShadowSpan: { value: QUALITY.high.span },
      uCloudShadowSun: { value: this.sun },
      uCloudShadowStrength: { value: 0 },
    };

    const noise = clouds?.material?.uniforms?.tNoise?.value;
    this.passMaterial = new THREE.RawShaderMaterial({
      glslVersion: THREE.GLSL3,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
      uniforms: {
        tNoise: { value: noise || null },
        uCenter: { value: new THREE.Vector2() },
        uSpan: { value: QUALITY.high.span },
        uSun: { value: this.sun },
        uSunY: { value: 1 },
        uTime: { value: 0 },
        uCover: { value: 0.25 },
        uStrength: { value: 0 },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    });
    this.passScene = new THREE.Scene();
    this.passCamera = new THREE.Camera();
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.passMaterial);
    this.quad.frustumCulled = false;
    this.passScene.add(this.quad);
    this.resize();

    // Install on materials that already exist. Later-created materials can use
    // install() explicitly; there is deliberately no per-frame scene walk.
    scene?.traverse?.((object) => {
      const list = Array.isArray(object.material) ? object.material : [object.material];
      for (const material of list) {
        if (material?.isMeshStandardMaterial) this.install(material);
      }
    });
  }

  setQuality(quality) {
    if (!QUALITY[quality] || quality === this.quality) return;
    this.quality = quality;
    this.resize();
    this.lastRender = -Infinity;
  }

  resize() {
    const config = QUALITY[this.quality];
    this.target.setSize(config.size, config.size);
    this.uniforms.uCloudShadowSpan.value = config.span;
    this.passMaterial.uniforms.uSpan.value = config.span;
  }

  /** Register a MeshStandardMaterial once, retaining any existing shader hooks. */
  install(material) {
    if (!material?.isMeshStandardMaterial || this.wrapped.has(material)) return material;
    this.wrapped.set(material, 'standard');
    this.materials.add(material);
    material.addEventListener('dispose', () => this.materials.delete(material));
    const previousCompile = material.onBeforeCompile;
    const previousKey = material.customProgramCacheKey;
    material.onBeforeCompile = (shader, renderer) => {
      previousCompile.call(material, shader, renderer);
      Object.assign(shader.uniforms, this.uniforms);
      shader.vertexShader = shader.vertexShader.replace(
        '#include <common>',
        '#include <common>\nvarying vec3 vCloudShadowWorld;'
      );
      shader.vertexShader = shader.vertexShader.replace(
        '#include <worldpos_vertex>',
        `#include <worldpos_vertex>
vec4 cloudWorld=vec4(transformed,1.);
#ifdef USE_INSTANCING
cloudWorld=instanceMatrix*cloudWorld;
#endif
vCloudShadowWorld=(modelMatrix*cloudWorld).xyz;`
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <common>',
        `#include <common>
         varying vec3 vCloudShadowWorld;
         uniform sampler2D tCloudShadow;
         uniform vec2 uCloudShadowCenter;
         uniform float uCloudShadowSpan,uCloudShadowStrength;
         uniform vec3 uCloudShadowSun;
         float vallonCloudTransmittance(){
           vec2 p=vCloudShadowWorld.xz-uCloudShadowSun.xz*(vCloudShadowWorld.y/max(.035,uCloudShadowSun.y));
           vec2 uv=(p-uCloudShadowCenter)/uCloudShadowSpan+.5;
           float inside=step(0.,uv.x)*step(uv.x,1.)*step(0.,uv.y)*step(uv.y,1.);
           return mix(1.,mix(1.,texture2D(tCloudShadow,uv).r,uCloudShadowStrength),inside);
         }`
      );
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <lights_fragment_begin>', THREE.ShaderChunk.lights_fragment_begin)
        .replace(
          'getDirectionalLightInfo( directionalLight, directLight );',
          `getDirectionalLightInfo( directionalLight, directLight );
         directLight.color *= vallonCloudTransmittance();`
        );
    };
    material.customProgramCacheKey = () => `${previousKey.call(material)}-vallon-cloud-shadow`;
    material.needsUpdate = true;
    return material;
  }

  /** Add the same transmittance to the custom shader grass lighting path. */
  installGrass(material) {
    if (!material?.isShaderMaterial || this.wrapped.has(material)) return material;
    this.wrapped.set(material, 'grass');
    this.grassMaterials.add(material);
    material.addEventListener('dispose', () => this.grassMaterials.delete(material));
    const previousCompile = material.onBeforeCompile;
    const previousKey = material.customProgramCacheKey;
    material.onBeforeCompile = (shader, renderer) => {
      previousCompile.call(material, shader, renderer);
      Object.assign(shader.uniforms, this.uniforms);
      shader.fragmentShader = shader.fragmentShader.replace(
        'varying vec3 vTint, vWorld, vNormal;',
        `varying vec3 vTint, vWorld, vNormal;
         uniform sampler2D tCloudShadow;
         uniform vec2 uCloudShadowCenter;
         uniform float uCloudShadowSpan,uCloudShadowStrength;
         uniform vec3 uCloudShadowSun;
         float vallonGrassCloudTransmittance(){
           vec2 p=vWorld.xz-uCloudShadowSun.xz*(vWorld.y/max(.035,uCloudShadowSun.y));
           vec2 uv=(p-uCloudShadowCenter)/uCloudShadowSpan+.5;
           float inside=step(0.,uv.x)*step(uv.x,1.)*step(0.,uv.y)*step(uv.y,1.);
           return mix(1.,mix(1.,texture2D(tCloudShadow,uv).r,uCloudShadowStrength),inside);
         }`
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        'float d = length(cameraPosition - vWorld);',
        'color *= .55 + .45 * vallonGrassCloudTransmittance();\n    float d = length(cameraPosition - vWorld);'
      );
    };
    material.customProgramCacheKey = () =>
      `${previousKey.call(material)}-vallon-cloud-shadow-grass`;
    material.needsUpdate = true;
    return material;
  }

  update(camera, time, skyMaterial, inCave = false) {
    const sky = skyMaterial?.uniforms;
    if (!camera || !sky?.uSun || !sky?.uCover) return false;
    const config = QUALITY[this.quality];
    const elapsed = Number.isFinite(time) ? time : 0;
    const cadence =
      !Number.isFinite(this.lastRender) || elapsed - this.lastRender >= config.interval;
    if (!cadence) return false;

    this.sun.copy(sky.uSun.value).normalize();
    const day = sky.uDay?.value ?? 1;
    const strength = inCave ? 0 : THREE.MathUtils.clamp(day, 0, 1);
    const texel = config.span / config.size;
    const cx = Math.round(camera.position.x / texel) * texel;
    const cz = Math.round(camera.position.z / texel) * texel;
    this.center.set(cx, cz);
    this.uniforms.uCloudShadowStrength.value = strength;

    const pass = this.passMaterial.uniforms;
    pass.tNoise.value = this.clouds?.material?.uniforms?.tNoise?.value || pass.tNoise.value;
    pass.uCenter.value.set(cx, cz);
    pass.uSpan.value = config.span;
    pass.uSun.value.copy(this.sun);
    pass.uSunY.value = this.sun.y;
    pass.uTime.value = elapsed;
    pass.uCover.value = sky.uCover.value;
    pass.uStrength.value = strength > 0 ? 1 : 0;

    this.renderPass();
    this.lastTime = elapsed;
    this.lastRender = elapsed;
    return true;
  }

  renderPass() {
    const renderer = this.renderer;
    const target = renderer.getRenderTarget();
    const viewport = renderer.getViewport(new THREE.Vector4());
    const scissor = renderer.getScissor(new THREE.Vector4());
    const scissorTest = renderer.getScissorTest();
    const clearColor = renderer.getClearColor(new THREE.Color());
    const clearAlpha = renderer.getClearAlpha();
    const autoClear = renderer.autoClear;
    try {
      renderer.setRenderTarget(this.target);
      renderer.setViewport(0, 0, this.target.width, this.target.height);
      renderer.setScissorTest(false);
      renderer.autoClear = false;
      renderer.setClearColor(0xffffff, 1);
      renderer.clear(true, false, false);
      renderer.render(this.passScene, this.passCamera);
    } finally {
      renderer.setRenderTarget(target);
      renderer.setViewport(viewport);
      renderer.setScissor(scissor);
      renderer.setScissorTest(scissorTest);
      renderer.setClearColor(clearColor, clearAlpha);
      renderer.autoClear = autoClear;
    }
  }

  dispose() {
    this.target.dispose();
    this.passMaterial.dispose();
    this.quad.geometry.dispose();
    this.materials.clear();
    this.grassMaterials.clear();
  }
}

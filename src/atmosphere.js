import * as THREE from 'three';
import { VolumetricClouds } from './clouds.js';

const vertex = `varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`;

export function createSkyMaterial() {
  return new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      uSun: { value: new THREE.Vector3(-1, 0.3, 0.22).normalize() },
      uTime: { value: 0 },
      uDay: { value: 1 },
      uDawn: { value: 0 },
      uDusk: { value: 0 },
      uCover: { value: 0.25 },
    },
    vertexShader: `varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader: `

 varying vec3 vDir;uniform vec3 uSun;uniform float uTime,uDay,uDawn,uDusk,uCover;

 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}

 void main(){

  vec3 d=normalize(vDir);float h=max(d.y,0.),mu=dot(d,uSun),sun=max(mu,0.);

  float dusk=uDusk,haze=exp(-h*7.);

  vec3 zenith=vec3(.025,.16,.52),horizon=mix(vec3(.30,.51,.76),vec3(.82,.45,.18),dusk*pow(sun,8.));

  vec3 col=mix(horizon,zenith,pow(h,.42));col=mix(col,vec3(.32,.49,.69),uDawn*haze*.32);col=mix(col,vec3(.21,.27,.34),smoothstep(.4,1.,uCover)*.5);

  // Rayleigh-shaped blue scattering and forward Mie aureole at low sun.

  col+=vec3(.15,.22,.31)*(1.+mu*mu)*haze*.08;

  col+=mix(vec3(.8,.72,.53),vec3(1.,.42,.12),dusk)*pow(sun,32.)*.24;

  col+=vec3(2.8,2.35,1.65)*smoothstep(.99987,.99997,sun);

  float transmission=1.;

  vec3 nightCol=mix(vec3(.033,.049,.091),vec3(.007,.015,.04),pow(h,.5));

  vec2 starUv=d.xz/max(.1,d.y+.3)*420.;vec2 cell=floor(starUv);float star=step(.997,hash(cell))*pow(max(0.,1.-length(fract(starUv)-.5)*2.),7.);

  nightCol+=vec3(.65,.77,1.)*star*transmission*smoothstep(.05,.4,h)*2.;

  float moon=max(dot(d,-uSun),0.);nightCol+=vec3(.58,.72,.95)*smoothstep(.99975,.99995,moon)*transmission;

  col=mix(nightCol,col,uDay);gl_FragColor=vec4(col,1.);

  #include <tonemapping_fragment>

  #include <colorspace_fragment>

 }`,
  });
}

/** Depth-occluded radial scattering, at half resolution; one linear colour composite. */

export class Atmosphere {
  constructor(renderer, scene) {
    this.renderer = renderer;
    this.scene = scene;
    this.quality = 'high';
    this.size = new THREE.Vector2();
    this.sunPoint = new THREE.Vector3();
    this.calls = 0;

    this.target = new THREE.WebGLRenderTarget(1, 1, {
      type: THREE.HalfFloatType,
      depthBuffer: true,
    });
    this.target.depthTexture = new THREE.DepthTexture(1, 1, THREE.UnsignedIntType);

    this.rays = new THREE.WebGLRenderTarget(1, 1, {
      type: THREE.HalfFloatType,
      depthBuffer: false,
    });

    this.postScene = new THREE.Scene();
    this.postCamera = new THREE.Camera();
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
    this.quad.frustumCulled = false;
    this.postScene.add(this.quad);

    this.rayMaterial = new THREE.ShaderMaterial({
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
      uniforms: {
        tDepth: { value: this.target.depthTexture },
        tScene: { value: this.target.texture },
        uSun: { value: new THREE.Vector2() },
        uStrength: { value: 0 },
      },
      vertexShader: vertex,
      fragmentShader: `

   varying vec2 vUv;uniform sampler2D tDepth,tScene,tClouds;uniform vec2 uSun;uniform float uStrength;

   void main(){vec2 uv=vUv,stepUv=(uv-uSun)*.94/28.;float sum=0.,decay=1.;

    for(int i=0;i<28;i++){uv-=stepUv;float inside=step(0.,uv.x)*step(uv.x,1.)*step(0.,uv.y)*step(uv.y,1.);float sky=step(.99998,texture2D(tDepth,uv).r)*inside;

     vec3 light=texture2D(tScene,uv).rgb;float cloudLight=smoothstep(.28,.9,dot(light,vec3(.21,.72,.07)));sum+=sky*cloudLight*(1.-texture2D(tClouds,uv).a)*decay;decay*=.96;}

    float radial=exp(-length(vUv-uSun)*1.35);gl_FragColor=vec4(vec3(sum/28.*radial*uStrength),1.);}`,
    });

    this.composite = new THREE.ShaderMaterial({
      depthTest: false,
      depthWrite: false,
      uniforms: {
        tScene: { value: this.target.texture },
        tRays: { value: this.rays.texture },
        uRayBlend: { value: 0 },
        uDay: { value: 1 },
        tDepth: { value: this.target.depthTexture },
        uTexel: { value: new THREE.Vector2(1, 1) },
        uAO: { value: 1 },
        uPixelSize: { value: 0 },
      },
      vertexShader: vertex,
      fragmentShader: `

   varying vec2 vUv;uniform sampler2D tScene,tRays,tDepth,tClouds;uniform float uRayBlend,uDay,uAO,uCloudBlend,uPixelSize;uniform vec2 uTexel;
   float linearDepth(float z){return .08*7000./(7000.-z*(7000.-.08));}

   void main(){vec2 uv=vUv;if(uPixelSize>0.){vec2 cell=uTexel*uPixelSize;uv=(floor(vUv/cell)+.5)*cell;}
    vec3 col=texture2D(tScene,uv).rgb;vec4 cloud=texture2D(tClouds,uv)*uCloudBlend;col=col*(1.-cloud.a)+cloud.rgb;
    float center=linearDepth(texture2D(tDepth,uv).r),contact=0.;vec3 bloom=vec3(0.);
    for(int j=0;j<8;j++){float a=float(j)*.785398;vec2 offset=vec2(cos(a),sin(a))*uTexel;
     float neighbor=linearDepth(texture2D(tDepth,uv+offset*5.).r),delta=center-neighbor;
     contact+=smoothstep(.07,.25,delta)*(1.-smoothstep(.35,1.7,delta));
     vec3 bright=texture2D(tScene,uv+offset*9.).rgb;bloom+=max(bright-vec3(1.4),vec3(0.));
    }
    col*=1.-contact/8.*.28*uAO*(1.-smoothstep(35.,90.,center));col+=bloom/8.*.09*uDay;

    col+=vec3(1.,.79,.47)*texture2D(tRays,uv).r*uRayBlend;

    float vignette=smoothstep(.28,.86,length((vUv-.5)*vec2(1.,.8)));col*=1.-vignette*.06;
    float luma=dot(col,vec3(.2126,.7152,.0722));col=mix(vec3(luma),col,1.08);col*=mix(vec3(.94,.98,1.06),vec3(1.035,1.01,.96),smoothstep(.12,.9,luma)*uDay);

    gl_FragColor=vec4(col,1.);

    #include <tonemapping_fragment>

    #include <colorspace_fragment>

   }`,
    });

    this.particles = new AirParticles(scene);
    this.clouds = new VolumetricClouds(this.target.depthTexture);
    this.rayMaterial.uniforms.tClouds = { value: this.clouds.target.texture };
    this.composite.uniforms.tClouds = { value: this.clouds.target.texture };
    this.composite.uniforms.uCloudBlend = { value: 1 };
  }

  setPixelSize(size) {
    this.pixelSize = THREE.MathUtils.clamp(Number(size) || 0, 0, 8);
    this.composite.uniforms.uPixelSize.value = this.pixelSize * this.renderer.getPixelRatio();
  }

  setQuality(quality) {
    this.quality = quality;
    this.resize();
  }

  resize() {
    this.renderer.getDrawingBufferSize(this.size);
    const w = Math.max(1, this.size.x),
      h = Math.max(1, this.size.y),
      samples = Math.min(
        this.renderer.capabilities.maxSamples,
        this.quality === 'high' ? 4 : this.quality === 'medium' ? 2 : 0
      );
    if (this.target.samples !== samples) {
      this.target.dispose();
      this.target.samples = samples;
    }
    this.target.setSize(w, h);
    this.composite.uniforms.uTexel.value.set(1 / w, 1 / h);
    this.setPixelSize(this.pixelSize || 0);
    this.composite.uniforms.uAO.value = this.quality === 'low' ? 0 : 1;
    const scale = this.quality === 'high' ? 0.5 : 0.33;
    this.rays.setSize(Math.ceil(w * scale), Math.ceil(h * scale));
    this.clouds?.resize(w, h, this.quality);
  }

  render(camera, time, sky, cave = false, playing = true) {
    this.particles.update(camera, time, sky.uniforms.uDay.value, cave, playing);
    this.clouds.update(camera, time, sky);
    this.renderer.getDrawingBufferSize(this.size);
    if (this.target.width !== this.size.x || this.target.height !== this.size.y) this.resize();

    this.sunPoint
      .copy(camera.position)
      .addScaledVector(sky.uniforms.uSun.value, 3000)
      .project(camera);

    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    const front = direction.dot(sky.uniforms.uSun.value) > 0;

    const visibility =
      front &&
      this.sunPoint.x > -1.4 &&
      this.sunPoint.x < 1.4 &&
      this.sunPoint.y > -1.4 &&
      this.sunPoint.y < 1.4;

    const strength =
      !cave && visibility && this.quality !== 'low' ? 0.62 * sky.uniforms.uDay.value : 0;

    this.rayMaterial.uniforms.uSun.value.set(
      this.sunPoint.x * 0.5 + 0.5,
      this.sunPoint.y * 0.5 + 0.5
    );
    this.rayMaterial.uniforms.uStrength.value = strength;

    this.renderer.setRenderTarget(this.target);
    this.renderer.render(this.scene, camera);
    this.calls = this.renderer.info.render.calls;
    this.triangles = this.renderer.info.render.triangles;

    this.composite.uniforms.uCloudBlend.value = cave ? 0 : 1;
    if (!cave) {
      this.quad.material = this.clouds.material;
      this.renderer.setRenderTarget(this.clouds.target);
      this.renderer.render(this.postScene, this.postCamera);
    }
    this.composite.uniforms.uRayBlend.value = strength > 0 ? 1 : 0;
    this.composite.uniforms.uDay.value = sky.uniforms.uDay.value;

    if (strength > 0) {
      this.quad.material = this.rayMaterial;
      this.renderer.setRenderTarget(this.rays);
      this.renderer.render(this.postScene, this.postCamera);
    }

    this.quad.material = this.composite;
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.postScene, this.postCamera);
  }
}

class AirParticles {
  constructor(scene) {
    this.count = 520;
    this.bursts = [];
    this.origin = new THREE.Vector3();
    const pos = new Float32Array((this.count + 96) * 3),
      colors = new Float32Array(pos.length),
      sizes = new Float32Array(this.count + 96);

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    this.material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      vertexColors: true,
      uniforms: { uPixel: { value: 1 } },
      vertexShader: `attribute float size;varying vec3 vColor;uniform float uPixel;void main(){vColor=color;vec4 v=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*v;gl_PointSize=clamp(size*uPixel*260./max(1.,-v.z),1.,16.);}`,
      fragmentShader:
        `varying vec3 vColor;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(vColor,pow(1.-r,2.)*.55);#include <tonemapping_fragment>\n#include <colorspace_fragment>}`.replace(
          ';#include',
          ';\n#include'
        ),
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;
    this.points.name = 'Pollen, lucioles et poussières';
    scene.add(this.points);
  }

  burst(point, kind = 'soil') {
    const color =
      kind === 'entity'
        ? [0.7, 0.35, 0.22]
        : kind === 'stone' || kind === 'crystal'
          ? [0.47, 0.58, 0.65]
          : [0.48, 0.35, 0.18];

    for (let i = 0; i < 16; i++)
      this.bursts.push({
        p: point.clone(),
        v: new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          Math.random() * 2.5,
          (Math.random() - 0.5) * 2
        ),
        life: 0.7 + Math.random() * 0.4,
        color,
      });
    this.bursts = this.bursts.slice(-96);
  }

  update(camera, time, day, cave, playing) {
    const dt = Math.min(0.06, Math.max(0, time - (this.last ?? time)));
    this.last = time;
    this.points.visible = playing;
    const p = this.geometry.attributes.position,
      c = this.geometry.attributes.color,
      s = this.geometry.attributes.size;

    for (let i = 0; i < this.count; i++) {
      const a = i * 2.399963,
        x = ((i * 17.37 + time * 0.12) % 36) - 18,
        z = ((i * 9.17 + time * 0.07) % 36) - 18,
        y = ((i * 0.731 + time * 0.045) % 10) - 2;

      p.setXYZ(
        i,
        camera.position.x + x + Math.sin(time * 0.3 + a) * 0.6,
        camera.position.y + y,
        camera.position.z + z
      );

      const glow = day < 0.3 && !cave && i % 9 === 0;
      c.setXYZ(
        i,
        glow ? 0.85 : cave ? 0.25 : 0.58,
        glow ? 1 : cave ? 0.43 : 0.56,
        glow ? 0.24 : cave ? 0.67 : 0.32
      );
      s.setX(i, glow ? 0.065 * (0.5 + Math.sin(time * 2 + a) * 0.5) : 0.012);
    }

    this.bursts = this.bursts.filter((b) => {
      if (playing) {
        b.life -= dt;
        b.v.y -= dt * 3;
        b.p.addScaledVector(b.v, dt);
      }
      return b.life > 0;
    });

    this.bursts.forEach((b, i) => {
      p.setXYZ(this.count + i, ...b.p.toArray());
      c.setXYZ(this.count + i, ...b.color);
      s.setX(this.count + i, b.life * 0.055);
    });

    this.geometry.setDrawRange(0, this.count + this.bursts.length);
    for (const a of [p, c, s]) a.needsUpdate = true;
    this.material.uniforms.uPixel.value = Math.min(devicePixelRatio, 1.5);
  }
}

import * as THREE from 'three';

/** World-space density, rendered below native resolution with depth clipping. */
export class VolumetricClouds {
  constructor(depth) {
    const size = 32,
      data = new Uint8Array(size ** 3);
    for (let z = 0; z < size; z++)
      for (let y = 0; y < size; y++)
        for (let x = 0; x < size; x++) {
          const v = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
          data[x + size * (y + size * z)] = (v - Math.floor(v)) * 255;
        }
    const noise = new THREE.Data3DTexture(data, size, size, size);
    noise.format = THREE.RedFormat;
    noise.minFilter = noise.magFilter = THREE.LinearFilter;
    noise.wrapS = noise.wrapT = noise.wrapR = THREE.RepeatWrapping;
    noise.needsUpdate = true;
    this.target = new THREE.WebGLRenderTarget(1, 1, {
      type: THREE.HalfFloatType,
      depthBuffer: false,
    });
    this.material = new THREE.RawShaderMaterial({
      glslVersion: THREE.GLSL3,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        tNoise: { value: noise },
        tDepth: { value: depth },
        uInverse: { value: new THREE.Matrix4() },
        uRotation: { value: new THREE.Matrix3() },
        uCamera: { value: new THREE.Vector3() },
        uSun: { value: new THREE.Vector3() },
        uTime: { value: 0 },
        uDay: { value: 1 },
        uDusk: { value: 0 },
        uCover: { value: 0.25 },
        uSteps: { value: 40 },
        uNear: { value: 0.08 },
        uFar: { value: 7000 },
      },
      vertexShader: `in vec3 position;in vec2 uv;out vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`,
      fragmentShader: `precision highp float;precision highp sampler3D;
        in vec2 vUv;out vec4 fragColor;
        uniform sampler3D tNoise;uniform sampler2D tDepth;
        uniform mat4 uInverse;uniform mat3 uRotation;uniform vec3 uCamera,uSun;
        uniform float uTime,uDay,uDusk,uCover,uNear,uFar;uniform int uSteps;
        float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return texture(tNoise,(i+f+.5)/32.).r;}
        float density(vec3 p){
          float height=(p.y-620.)/240.;if(height<0.||height>1.)return 0.;
          vec3 q=(p+vec3(uTime*2.8,0.,uTime*.7))*.0028;
          float n=noise(q)*.63+noise(q*2.03)*.26+noise(q*4.13)*.11;
          float shape=smoothstep(0.,.2,height)*(1.-smoothstep(.62,1.,height));
          return max(0.,n-(.72-uCover*.32))*shape*1.8;
        }
        void main(){
          vec4 view=uInverse*vec4(vUv*2.-1.,1.,1.);vec3 ray=normalize(view.xyz/view.w);
          float z=texture(tDepth,vUv).r;
          float limit=uNear*uFar/(uFar-z*(uFar-uNear))/max(.001,-ray.z);
          ray=normalize(uRotation*ray);
          if(abs(ray.y)<.001){fragColor=vec4(0.);return;}
          float a=(620.-uCamera.y)/ray.y,b=(860.-uCamera.y)/ray.y;
          float start=max(0.,min(a,b)),end=min(min(max(a,b),limit),6500.);
          if(end<=start){fragColor=vec4(0.);return;}
          float stepSize=(end-start)/float(uSteps),transmission=1.;vec3 color=vec3(0.);
          vec3 sunColor=mix(vec3(1.,.98,.91),vec3(1.,.44,.18),uDusk*.8);
          for(int i=0;i<48;i++){
            if(i>=uSteps||transmission<.025)break;
            vec3 p=uCamera+ray*(start+(float(i)+.5)*stepSize);float d=density(p);
            if(d>.001){
              float shade=density(p+uSun*45.)+density(p+uSun*100.)+density(p+uSun*180.);
              float lighting=exp(-shade*2.4),forward=pow(max(0.,dot(ray,uSun)),12.);
              vec3 lit=mix(vec3(.025,.04,.075),vec3(.38,.47,.59)+sunColor*(lighting*.75+forward*.22),uDay);
              float opacity=1.-exp(-d*stepSize*.018);
              color+=transmission*opacity*lit;transmission*=1.-opacity;
            }
          }
          fragColor=vec4(color,1.-transmission);
        }`,
    });
  }
  resize(w, h, quality) {
    const scale = { high: 0.5, medium: 0.35, low: 0.25 }[quality];
    this.target.setSize(Math.max(1, Math.ceil(w * scale)), Math.max(1, Math.ceil(h * scale)));
    this.material.uniforms.uSteps.value = { high: 40, medium: 28, low: 18 }[quality];
  }
  update(camera, time, sky) {
    const u = this.material.uniforms;
    u.uInverse.value.copy(camera.projectionMatrixInverse);
    u.uRotation.value.setFromMatrix4(camera.matrixWorld);
    u.uCamera.value.copy(camera.position);
    for (const key of ['uSun', 'uDay', 'uDusk', 'uCover']) {
      if (key === 'uSun') u[key].value.copy(sky.uniforms[key].value);
      else u[key].value = sky.uniforms[key].value;
    }
    u.uTime.value = time;
    u.uNear.value = camera.near;
    u.uFar.value = camera.far;
  }
}

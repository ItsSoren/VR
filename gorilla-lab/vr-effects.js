import {createHdrBloom} from './hdr-bloom.js';

import * as T from 'three';
import { vrFovShader } from './vr-fov.js';

// Chaque œil dispose de sa propre cible de rendu, à la taille native de son viewport XR.
export function createVrEffects(renderer) {
  const passScene=new T.Scene(), camera=new T.PerspectiveCamera();
  camera.matrixAutoUpdate=false;
  const settings={
    source:{value:null},exposure:{value:1},visibleField:{value:1},
  };
  const material=new T.ShaderMaterial({
    uniforms:settings,depthTest:false,depthWrite:false,toneMapped:false,
    vertexShader:
      'varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
    fragmentShader:
      'varying vec2 vUv; uniform sampler2D source; uniform float exposure;'+
      vrFovShader+
      'vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }'+
      'void main(){vec3 c=texture2D(source,vUv).rgb;'+
      'c=aces(c*exposure);'+
      'gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2))*(1.-vrFovShade(vUv)),1.);}',
  });
  const quad=new T.Mesh(new T.PlaneGeometry(2,2),material);
  quad.frustumCulled=false;
  passScene.add(quad);
  const hdrBloom=createHdrBloom(renderer),half=hdrBloom.supported;
  const targets=[];
  let eyes=[];
  quad.onBeforeRender=(_r,_s,eye)=>{
    const i=Math.max(0,eyes.indexOf(eye));
    const target=targets[i]??targets[0];
    settings.source.value=target.texture;
    material.uniformsNeedUpdate=true;
  };
  function render(scene,base,{bloom,visibleField}){
    renderer.xr.updateCamera(base);
    eyes=renderer.xr.getCamera().cameras;
    if(eyes.length===0||eyes.some(eye=>!eye.viewport?.z||!eye.viewport?.w))return false;
    settings.visibleField.value=visibleField;
    settings.exposure.value=renderer.toneMappingExposure;
    // La composition manipule l’état global du moteur. Le bloc finally le rétablit même en cas d’erreur.
    const original=renderer.getRenderTarget(),xrEnabled=renderer.xr.enabled;
    const shadowUpdate=renderer.shadowMap.autoUpdate,autoReset=renderer.info.autoReset;
    renderer.info.reset();renderer.info.autoReset=false;
    try{
      renderer.xr.enabled=false;
      for(let i=0;i<eyes.length;i++){
        const eye=eyes[i];
        const width=Math.max(32,Math.round(eye.viewport.z));
        const height=Math.max(32,Math.round(eye.viewport.w));
        let target=targets[i];
        if(!target){
          target=targets[i]=new T.WebGLRenderTarget(width,height,{type:half?T.HalfFloatType:T.UnsignedByteType,minFilter:T.NearestFilter,magFilter:T.NearestFilter,depthBuffer:true,stencilBuffer:false});
        }else if(target.width!==width||target.height!==height)target.setSize(width,height);
        camera.matrix.copy(eye.matrixWorld);camera.matrixWorld.copy(eye.matrixWorld);
        camera.matrixWorldInverse.copy(eye.matrixWorldInverse);
        camera.projectionMatrix.copy(eye.projectionMatrix);
        camera.projectionMatrixInverse.copy(eye.projectionMatrixInverse);
        camera.layers.mask=eye.layers.mask;
        renderer.shadowMap.autoUpdate=i===0&&shadowUpdate;
        renderer.setRenderTarget(target);renderer.render(scene,camera);
        hdrBloom.apply(target,bloom);
      }
    }finally{
      renderer.shadowMap.autoUpdate=shadowUpdate;
      renderer.xr.enabled=xrEnabled;
      renderer.setRenderTarget(original);
      renderer.info.autoReset=autoReset;
    }
    renderer.info.autoReset=false;
    try{renderer.render(passScene,base);}finally{renderer.info.autoReset=autoReset;}
    return true;
  }
  renderer.xr.addEventListener('sessionend',()=>{
    for(const target of targets)target.dispose();
    targets.length=0;eyes=[];hdrBloom.dispose();
  });
  return {render};
}

export function addRayProbe(mesh){
  const rayEnabled={value:0}, primitives={value:Array.from({length:7},()=>new T.Vector4(0,0,0,0))};
  const mat=mesh.material;
  mat.onBeforeCompile=shader=>{
    shader.uniforms.uLabTrace=rayEnabled;
    shader.uniforms.uLabProbeCenter={value:mesh.position};
    shader.uniforms.uLabPrimitives=primitives;
    shader.vertexShader='varying vec3 vRayWorld;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <worldpos_vertex>','#include <worldpos_vertex>\nvRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;');
    shader.fragmentShader=
      'uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',[
      'if(uLabTrace>.5){',
      '  vec3 origin=vRayWorld;',
      '  vec3 n=normalize(origin-uLabProbeCenter);',
      '  vec3 r=reflect(normalize(origin-cameraPosition),n);',
      '  origin+=n*.01;',
      '  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));',
      '  float nearest=80.;',
      '  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){',
      '    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);',
      '    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);',
      '  }}',
      '  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){',
      '    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;',
      '    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){',
      '      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));',
      '      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));',
      '    }}',
      '  }}',
      '  outgoingLight=mix(outgoingLight,traced,.82);',
      '}',
      '#include <opaque_fragment>',
    ].join('\n'));
  };
  mat.customProgramCacheKey=()=> 'gorilla-lab-ray-probe-v2';
  return function update(enabled,objects){
    rayEnabled.value=enabled?1:0;
    if(!enabled)return;
    for(let i=0;i<primitives.value.length;i++){
      const body=objects[i], entry=primitives.value[i];
      if(body?.mesh.visible)entry.set(body.mesh.position.x,body.mesh.position.y,body.mesh.position.z,body.shape.sphereRadius||body.radius*.83);
      else entry.set(0,0,0,0);
    }
  };
}



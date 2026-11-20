import * as T from 'three';

export const effectChannels={
  deform:{label:'Déformation',max:.32,defaultSpeed:1.8,defaultScale:9},
  tint:{label:'Couleur animée',max:1,defaultSpeed:.75,defaultScale:15},
  glow:{label:'Émission lumineuse',max:2,defaultSpeed:.6,defaultScale:19},
};

const effectsByMaterial=new WeakMap();
const time={value:0};
const signals=['sine','triangle','pulse','stars'];
const range=(value,min,max,fallback)=>Number.isFinite(value)?Math.min(max,Math.max(min,value)):fallback;

export function normalizeModelEffect(raw){
  if(!raw||typeof raw!=='object')return null;
  const effect={};
  for(const [key,channel] of Object.entries(effectChannels)){
    const input=raw[key];
    effect[key]={
      strength:range(input?.strength,0,channel.max,0),
      speed:range(input?.speed,0,8,channel.defaultSpeed),
      scale:range(input?.scale,0,48,channel.defaultScale),
      signal:signals.includes(input?.signal)&&(key!=='deform'||input.signal!=='stars')?input.signal:'sine',
      ...(key==='deform'?{}:{color:/^#[0-9a-f]{6}$/i.test(input?.color??'')?input.color:'#ffffff'}),
    };
  }
  return effect;
}

export function setModelEffectTime(seconds){time.value=seconds;}
export function getModelEffect(material){return effectsByMaterial.get(material);}

export function applyModelEffect(material,effect){
  if(!effect||!Object.values(effect).some(channel=>channel.strength>0))return material;
  const vector=key=>{
    const c=effect[key];
    return new T.Vector4(c.strength,c.speed,c.scale,signals.indexOf(c.signal));
  };
  const uniforms={
    uFoundryTime:time,
    uFoundryDeform:{value:vector('deform')},uFoundryTint:{value:vector('tint')},uFoundryGlow:{value:vector('glow')},
    uFoundryTintColor:{value:new T.Color(effect.tint.color)},uFoundryGlowColor:{value:new T.Color(effect.glow.color)},
  };
  const common=`
uniform float uFoundryTime;
varying vec3 vFoundryPosition;
float foundryWave(vec4 channel, vec3 p){
  float phase=uFoundryTime*channel.y*6.2831853+dot(p,vec3(.61,.79,-.53))*channel.z;
  float wave=.5+.5*sin(phase);
  if(channel.w>1.5)return smoothstep(.65,.85,wave);
  if(channel.w>.5)return 1.-abs(fract(phase/6.2831853)*2.-1.);
  return wave;
}
`;
  material.onBeforeCompile=shader=>{
    Object.assign(shader.uniforms,uniforms);
    shader.vertexShader=common+'uniform vec4 uFoundryDeform;\n'+shader.vertexShader.replace('#include <begin_vertex>',`
      #include <begin_vertex>
      vFoundryPosition=position;
      float squeeze=(foundryWave(uFoundryDeform,position)*2.-1.)*uFoundryDeform.x;
      transformed*=vec3(1.-squeeze*.4,1.+squeeze,1.-squeeze*.4);
    `);
    shader.fragmentShader=common+`uniform vec4 uFoundryTint,uFoundryGlow;
uniform vec3 uFoundryTintColor,uFoundryGlowColor;
float foundrySurface(vec4 channel, vec3 p){
  if(channel.w<2.5)return foundryWave(channel,p);
  vec2 plane=vec2(dot(p,vec3(.74,.23,.63)),dot(p,vec3(-.28,.95,-.19)))*channel.z;
  plane+=uFoundryTime*channel.y*vec2(.09,-.04);
  vec2 cell=floor(plane);
  vec3 h=fract(cell.xyx*vec3(.1031,.1030,.0973));
  h+=dot(h,h.yxz+33.33);
  h=fract((h.xxy+h.yzz)*h.zyx);
  float distanceToStar=length(fract(plane)-(.23+.54*h.xy));
  float radius=mix(.045,.16,h.z),pixel=clamp(length(fwidth(plane))*.5,.01,.16);
  float spark=1.-smoothstep(max(0.,radius-pixel),radius+pixel,distanceToStar);
  return step(.64,h.z)*spark*(.75+.25*sin(uFoundryTime*channel.y*6.2831853+h.x*20.));
}
`+shader.fragmentShader
      .replace('#include <color_fragment>',`#include <color_fragment>
        diffuseColor.rgb=mix(diffuseColor.rgb,uFoundryTintColor,uFoundryTint.x*foundrySurface(uFoundryTint,vFoundryPosition));`)
      .replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
        totalEmissiveRadiance+=uFoundryGlowColor*uFoundryGlow.x*foundrySurface(uFoundryGlow,vFoundryPosition);`);
  };
  material.customProgramCacheKey=()=> 'foundry-effect-v1';
  effectsByMaterial.set(material,effect);
  return material;
}

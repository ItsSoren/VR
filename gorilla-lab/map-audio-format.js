export const surfaceSounds={
  regolith:'Régolithe sec',asphalt:'Asphalte rugueux',concrete:'Béton plein',steel:'Tôle d’acier',
  grating:'Grille métallique',glass:'Verre épais',ceramic:'Plaques céramiques',rubber:'Caoutchouc',
  gravel:'Gravillons',panel:'Panneau composite',
};
export const ambientSounds={district:'Ventilation urbaine',reactor:'Réacteurs et relais'};
export const maxSoundAssets=12,maxSoundAssetLength=600_000,maxSoundZones=48;
const assetId=/^audio-[a-z0-9-]{1,64}$/i;
const audioData=/^data:audio\/(?:wav|wave|x-wav|mpeg|mp3|ogg|webm|mp4|aac|flac|x-flac);base64,[a-z0-9+/]+={0,2}$/i;
const number=(value,min,max,fallback)=>Number.isFinite(value)?Math.max(min,Math.min(max,value)):fallback;
const label=(value,fallback)=>typeof value==='string'&&value.trim()?value.trim().slice(0,42):fallback;
export function isSoundClip(id){return Object.hasOwn(surfaceSounds,id)||Object.hasOwn(ambientSounds,id)||typeof id==='string'&&assetId.test(id);}
function normalizeProfile(raw){
  if(!raw||!isSoundClip(raw.clip))return null;
  return {
    clip:raw.clip,volume:number(raw.volume,0,1,.62),volumeVariation:number(raw.volumeVariation,0,.8,.16),
    rate:number(raw.rate,.4,2.5,1),rateVariation:number(raw.rateVariation,0,.7,.10),
    pitch:number(raw.pitch,-1200,1200,0),pitchVariation:number(raw.pitchVariation,0,800,135),
  };
}
export function normalizeSurfaceSound(raw){
  const profile=normalizeProfile(raw);
  return profile?{...profile,cooldown:number(raw.cooldown,.03,2,.14),
    minImpact:number(raw.minImpact,.1,12,.65),range:number(raw.range,2,80,22)}:null;
}
export function normalizeSoundZones(raw){
  if(!Array.isArray(raw))return [];
  return raw.slice(0,maxSoundZones).flatMap((zone,index)=>{
    const profile=normalizeProfile(zone);
    if(!profile)return [];
    return [{name:label(zone.name,'Zone '+(index+1)),x:number(zone.x,-1024,1024,0),
      y:number(zone.y,-20000,20000,1.5),z:number(zone.z,-1024,1024,0),
      w:number(zone.w,.1,1024,12),h:number(zone.h,.1,256,5),d:number(zone.d,.1,1024,12),...profile,
      fadeDistance:number(zone.fadeDistance,.05,100,2.5),fadeIn:number(zone.fadeIn,.02,12,1.2),
      fadeOut:number(zone.fadeOut,.02,12,1.8),mode:zone.mode==='enter'?'enter':'loop'}];
  });
}
export function normalizeSoundAssets(raw){
  if(!Array.isArray(raw))return [];
  const seen=new Set();
  return raw.slice(0,maxSoundAssets).filter(asset=>{
    if(!asset||typeof asset.id!=='string'||!assetId.test(asset.id)||seen.has(asset.id)||
      typeof asset.data!=='string'||asset.data.length>maxSoundAssetLength||!audioData.test(asset.data))return false;
    seen.add(asset.id);return true;
  }).map(asset=>({id:asset.id,name:label(asset.name,'Son importé'),data:asset.data}));
}
export function soundZoneLevel(zone,position){
  const dx=zone.w/2-Math.abs(position.x-zone.x),dy=zone.h/2-Math.abs(position.y-zone.y),
    dz=zone.d/2-Math.abs(position.z-zone.z);
  if(Math.min(dx,dy,dz)<=0)return 0;
  // Low or narrow zones should still reach full level at their centre.
  const edge=Math.min(1,dx/Math.min(zone.fadeDistance,zone.w/2),dy/Math.min(zone.fadeDistance,zone.h/2),
    dz/Math.min(zone.fadeDistance,zone.d/2));
  return edge*edge*(3-2*edge);
}

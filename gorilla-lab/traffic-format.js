import {normalizeModelPack} from './model-pack.js';
import {isRetiredArenaModel} from './model-assets.js';

export const maxTrafficRoutes=12;
export const maxTrafficCount=72;
export const maxTrafficWaypoints=40;
const bounded=(value,min,max,fallback)=>Number.isFinite(value)?Math.min(max,Math.max(min,value)):fallback;
export function normalizeTraffic(raw){
  if(!Array.isArray(raw))return [];
  return raw.slice(0,maxTrafficRoutes).flatMap(route=>{
    const points=[];
    for(const p of Array.isArray(route?.points)?route.points.slice(0,maxTrafficWaypoints):[]){
      if(!Array.isArray(p)||p.length!==3||!p.every(Number.isFinite))continue;
      const next=[bounded(p[0],-1024,1024,0),bounded(p[1],-256,512,0),bounded(p[2],-1024,1024,0)];
      const last=points.at(-1);
      if(!last||Math.hypot(...next.map((v,i)=>v-last[i]))>.15)points.push(next);
    }
    const last=points.at(-1);
    if(points.length>2&&Math.hypot(...points[0].map((v,i)=>v-last[i]))<=.15)points.pop();
    if(points.length<3)return [];
    const models=[];
    for(const entry of Array.isArray(route.models)?route.models.slice(0,2):[]){
      const rawModel=entry?.model;
      if(!rawModel||isRetiredArenaModel(rawModel)||!Array.isArray(rawModel.parts)||!rawModel.parts.length)continue;
      try{
        const [model]=normalizeModelPack({version:1,models:[rawModel]}).models;
        if(model?.parts.length)models.push({model,w:bounded(entry.w,.08,30,2),h:bounded(entry.h,.08,20,1.5),d:bounded(entry.d,.08,50,4)});
      }catch{/* An invalid template does not block the rest of the map. */}
    }
    if(!models.length)return [];
    return [{name:typeof route.name==='string'&&route.name.trim()?route.name.trim().slice(0,42):'Flux de circulation',
      points,models,count:Math.round(bounded(route.count,1,maxTrafficCount,8)),
      speed:bounded(route.speed,.5,160,10),pause:bounded(route.pause,0,25,0),
      interval:bounded(route.interval,3,180,20),phase:bounded(route.phase,0,359,0),
      brightness:bounded(route.brightness,.25,6,1),
      spread:bounded(route.spread,.25,1,1),smooth:route.smooth===true,visible:route.visible!==false}];
  });
}

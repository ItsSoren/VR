import * as T from 'three';
import {createArenaObjectSpecs} from './arena-objects.js';

export const spawnAssetIds=[
  'spawn-cube','spawn-ball','spawn-tetrahedron','spawn-brick','spawn-large-rectangle',
  'spawn-large-sphere',null,'spawn-phone','spawn-bread','spawn-wheel',
  'spawn-cup','spawn-flashlight','spawn-soda','spawn-cone','spawn-radio',
];

let registry=null;
const retiredAssets=new Set(['spawn-coconut','palm-tree','palm-trunk','palm-fronds','range-target','target-ring-outer','target-ring-middle','target-ring-inner','target-post','target-score']);
export function isRetiredArenaAsset(id){
  return typeof id==='string'&&retiredAssets.has(id.replace(/^custom-model-game-/,''));
}
export function isRetiredArenaModel(model){
  const parts=model?.parts;
  return isRetiredArenaAsset(model?.id)||isRetiredArenaAsset(model?.assetId)||
    (Array.isArray(parts)&&parts.length>0&&parts.every(part=>isRetiredArenaAsset(part?.assetId)));
}
function ensureRegistry(){
  if(registry)return registry;
  const specs=createArenaObjectSpecs();
  const ids=spawnAssetIds;
  registry=new Map(specs.flatMap((spec,index)=>[[ids[index],{geometry:spec.geo,material:spec.material,mass:spec.mass,properties:spec.properties??{}}]]));
  registry.set('chrome-sphere',{
    geometry:new T.IcosahedronGeometry(.54,2),
    material:new T.MeshStandardMaterial({color:'#c8e6ed',metalness:1,roughness:.16}),
  });
  return registry;
}
export function isBuiltinAsset(id){return typeof id==='string'&&ensureRegistry().has(id);}
export function getBuiltinAsset(id){return ensureRegistry().get(id)??null;}

function part(name,assetId,position=[0,0,0],scale=[1,1,1],rotation=[0,0,0]){
  return {name,shape:'asset',assetId,position,scale,rotation,color:'#ffffff',surface:'plain'};
}
function template(assetId,name,kind='prop',properties={}){
  return {id:'custom-model-game-'+assetId,name,assetId,kind,inGame:false,
    properties:{grabbable:kind==='prop',frozen:false,collidable:true,supportWhileHeld:false,...properties},
    hitbox:{mode:'auto',shape:'convex',precision:48},parts:[part(name,assetId)]};
}
export function createBuiltinModelTemplates(){
  const templates=[
    ...[
      ['spawn-cube','Cube'],['spawn-ball','Boule'],['spawn-tetrahedron','Tétraèdre'],
      ['spawn-brick','Brique'],['spawn-large-rectangle','Grand rectangle'],
      ['spawn-large-sphere','Grande sphère'],
      ['spawn-phone','Téléphone'],['spawn-bread','Baguette de pain'],
      ['spawn-wheel','Roue'],['spawn-cup','Tasse'],['spawn-flashlight','Lampe torche'],
      ['spawn-soda','Canette de soda'],['spawn-cone','Cône de chantier'],['spawn-radio','Talkie-walkie'],
    ].map(([id,name])=>template(id,name)),
    template('chrome-sphere','Sphère chrome','prop',{frozen:true}),
  ];
  return templates;
}


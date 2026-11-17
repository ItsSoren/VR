import * as T from 'three';
import {createArenaObjectSpecs} from './arena-objects.js';
import {labProbe,labTree,labTarget} from './lab-layout.js';

export const spawnAssetIds=[
  'spawn-cube','spawn-ball','spawn-tetrahedron','spawn-brick','spawn-large-rectangle',
  'spawn-large-sphere','spawn-coconut','spawn-phone','spawn-bread','spawn-wheel',
  'spawn-cup','spawn-flashlight','spawn-soda','spawn-cone','spawn-radio',
];

let registry=null;
function palmAssets(){
  const color=new T.Color();
  const trunk=new T.CylinderGeometry(.16,.25,3.15,9,12);
  const p=trunk.attributes.position,colors=[];
  for(let i=0;i<p.count;i++){
    const ring=Math.round((p.getY(i)+1.575)/3.15*12);
    const facet=Math.floor((Math.atan2(p.getX(i),p.getZ(i))+Math.PI)*1.43);
    color.setHSL(.084+ring*.002,.35,.35+(ring%3)*.032+(facet%3)*.018);
    colors.push(color.r,color.g,color.b);
  }
  trunk.setAttribute('color',new T.Float32BufferAttribute(colors,3));
  const vertices=[],leafColors=[],crown=3.14;
  function triangle(a,b,c,shade){
    vertices.push(...a,...b,...c);color.setHSL(.25+shade*.043,.54,.28+shade*.17);
    for(let i=0;i<3;i++)leafColors.push(color.r,color.g,color.b);
  }
  for(let i=0;i<10;i++){
    const a=i*2.39996,len=1.35+(i%4)*.20;
    function leaf(t,w){
      const span=t*len;
      return [Math.cos(a)*span-Math.sin(a)*w,crown+Math.sin(t*Math.PI)*.38-t*t*.54+(i%3)*.055,Math.sin(a)*span+Math.cos(a)*w];
    }
    for(let segment=0;segment<7;segment++){
      const t=segment/7,u=(segment+1)/7,w=.285*Math.sin(Math.PI*t)**.7,v=.285*Math.sin(Math.PI*u)**.7;
      for(const side of [-1,1]){
        const edge=leaf(t,w*side),next=leaf(u,v*side);
        edge[1]-=.065;next[1]-=.065;
        triangle(leaf(t,0),edge,next,.31+(segment%4)*.14);
        triangle(leaf(t,0),next,leaf(u,0),.47+(i%3)*.16);
      }
    }
  }
  const fronds=new T.BufferGeometry();
  fronds.setAttribute('position',new T.Float32BufferAttribute(vertices,3));
  fronds.setAttribute('color',new T.Float32BufferAttribute(leafColors,3));
  fronds.computeVertexNormals();
  return {
    trunk:{geometry:trunk,material:new T.MeshLambertMaterial({color:0xffffff,vertexColors:true,flatShading:true})},
    fronds:{geometry:fronds,material:new T.MeshLambertMaterial({vertexColors:true,side:T.DoubleSide,flatShading:true})},
  };
}
function targetAssets(){
  const makeLabel=()=>{
    const canvas=document.createElement('canvas');canvas.width=256;canvas.height=64;
    const ctx=canvas.getContext('2d');ctx.fillStyle='#182831';ctx.fillRect(0,0,256,64);
    ctx.textAlign='center';ctx.font='bold 28px system-ui';ctx.fillStyle='#fff0ce';
    ctx.fillText('CIBLE · 0',128,42);
    const map=new T.CanvasTexture(canvas);map.colorSpace=T.SRGBColorSpace;return map;
  };
  return {
    'target-ring-outer':{geometry:new T.CircleGeometry(.90,20),material:new T.MeshLambertMaterial({color:'#e2ad5c',side:T.DoubleSide})},
    'target-ring-middle':{geometry:new T.CircleGeometry(.58,20),material:new T.MeshLambertMaterial({color:'#ca664b',side:T.DoubleSide})},
    'target-ring-inner':{geometry:new T.CircleGeometry(.27,20),material:new T.MeshLambertMaterial({color:'#f5e5bd',side:T.DoubleSide})},
    'target-post':{geometry:new T.BoxGeometry(.14,1.5,.14),material:new T.MeshLambertMaterial({color:'#485d5d',flatShading:true})},
    'target-score':{geometry:new T.PlaneGeometry(1.4,.35),material:new T.MeshBasicMaterial({map:makeLabel(),side:T.DoubleSide})},
  };
}
function ensureRegistry(){
  if(registry)return registry;
  const specs=createArenaObjectSpecs();
  const ids=spawnAssetIds;
  registry=new Map(specs.map((spec,index)=>[ids[index],{geometry:spec.geo,material:spec.material,mass:spec.mass,properties:spec.properties??{}}]));
  const palm=palmAssets();
  registry.set('palm-trunk',palm.trunk);registry.set('palm-fronds',palm.fronds);
  registry.set('chrome-sphere',{
    geometry:new T.IcosahedronGeometry(.54,2),
    material:new T.MeshStandardMaterial({color:'#c8e6ed',metalness:1,roughness:.16}),
  });
  for(const [id,asset] of Object.entries(targetAssets()))registry.set(id,asset);
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
    hitbox:{mode:'auto'},parts:[part(name,assetId)]};
}
export function createBuiltinModelTemplates(){
  const templates=[
    ...[
      ['spawn-cube','Cube'],['spawn-ball','Boule'],['spawn-tetrahedron','Tétraèdre'],
      ['spawn-brick','Brique'],['spawn-large-rectangle','Grand rectangle'],
      ['spawn-large-sphere','Grande sphère'],['spawn-coconut','Noix de coco'],
      ['spawn-phone','Téléphone'],['spawn-bread','Baguette de pain'],
      ['spawn-wheel','Roue'],['spawn-cup','Tasse'],['spawn-flashlight','Lampe torche'],
      ['spawn-soda','Canette de soda'],['spawn-cone','Cône de chantier'],['spawn-radio','Talkie-walkie'],
    ].map(([id,name])=>template(id,name,'prop',id==='spawn-coconut'?{frozen:true}:{})),
    template('chrome-sphere','Sphère chrome','prop'),
  ];
  const tree=template('palm-tree','Cocotier','structure',{grabbable:false});
  tree.parts=[
    part('Tronc','palm-trunk',[0,1.575,0],[1,1,1],[0,0,-8]),
    part('Palmes','palm-fronds',[0,0,0],[1,1,1],[0,0,-8]),
  ];
  for(let i=0;i<5;i++){
    const a=i*Math.PI*2/5;
    tree.parts.push(part('Noix de coco '+(i+1),'spawn-coconut',
      [Math.cos(a)*(.25+(i%2)*.10),2.88+(i%3)*.06,Math.sin(a)*(.25+(i%2)*.10)],
      [.91,1.16,.91],[0,0,-8]));
  }
  templates.push(tree);
  const target=template('range-target','Cible de tir','structure',{grabbable:false});
  target.parts=[
    part('Anneau extérieur','target-ring-outer'),
    part('Anneau intermédiaire','target-ring-middle',[0,0,.012]),
    part('Centre','target-ring-inner',[0,0,.024]),
    part('Pied','target-post',[0,.75-labTarget.y,-.11]),
    part('Panneau de score','target-score',[0,2.64-labTarget.y,.02]),
  ];
  templates.push(target);
  return templates;
}

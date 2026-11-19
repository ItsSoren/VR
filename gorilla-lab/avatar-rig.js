import * as T from 'three';

const definitions=[
  ['torso','Torse',null,[0,-.43,.04],0],
  ['head','Tête','torso',[0,0,0],45],
];
for(const [side,sign,label] of [['left',-1,'gauche'],['right',1,'droit']]){
  const arm=side+'Arm',forearm=side+'Forearm',hand=side+'Hand';
  definitions.push(
    [arm,'Bras '+label,'torso',[.27*sign,-.23,.04],100],
    [forearm,'Avant-bras '+label,arm,[.35*sign,-.52,.02],120],
    [hand,side==='left'?'Main gauche':'Main droite',forearm,[.41*sign,-.75,0],55],
  );
  for(let i=1;i<=3;i++)definitions.push([
    side+'Finger'+i,'Doigt '+i+' · '+(side==='left'?'main gauche':'main droite'),hand,
    [(.375+(i-1)*.035)*sign,-.83,-.025],140,
  ]);
}
export const avatarJoints=Object.freeze(Object.fromEntries(definitions.map(([key,label,parent,pivot,limit])=>[
  key,{label,parent,pivot,limit},
])));
const clamp=(value,min,max,fallback)=>Number.isFinite(value)?T.MathUtils.clamp(value,min,max):fallback;
export function normalizeAvatarJoint(key,value){
  const base=avatarJoints[key];
  return {
    pivot:base.pivot.map((defaultValue,index)=>clamp(value?.pivot?.[index],-3,3,defaultValue)),
    axis:['x','y','z'].includes(value?.axis)?value.axis:'x',
    limit:clamp(value?.limit,0,150,base.limit),
  };
}
export function normalizeAvatarRig(raw){
  return Object.fromEntries(definitions.map(([key])=>[key,normalizeAvatarJoint(key,raw?.[key])]));
}
export function avatarReady(model){
  if(!model?.parts.length)return false;
  if(model.kind!=='avatar')return true;
  return model.parts.some(part=>part.avatarJoint==='head')&&model.parts.some(part=>part.avatarJoint==='torso');
}
export function avatarTemplateParts(){
  const shape=(avatarJoint,name,position,scale,color,shape='sphere',rotation=[0,0,0])=>
    ({name,avatarJoint,shape,position,scale,rotation,color,surface:'plain',texture:null});
  const fur='#6e4b58',skin='#a17668';
  const parts=[
    shape('torso','Torse',[0,-.43,.04],[.58,.69,.38],fur),
    shape('head','Crâne',[0,.01,.01],[.32,.36,.29],fur),
    shape('head','Museau',[0,-.045,-.125],[.22,.14,.19],skin),
    shape('head','Oreille gauche',[-.16,.012,.025],[.086,.106,.064],skin),
    shape('head','Oreille droite',[.16,.012,.025],[.086,.106,.064],skin),
    shape('head','Œil gauche',[-.058,.036,-.121],[.034,.03,.035],'#24202c'),
    shape('head','Œil droit',[.058,.036,-.121],[.034,.03,.035],'#24202c'),
  ];
  for(const [side,sign,label] of [['left',-1,'gauche'],['right',1,'droit']]){
    parts.push(
      shape(side+'Arm','Bras '+label,[.31*sign,-.38,.04],[.17,.38,.17],fur,'sphere',[0,0,sign*15]),
      shape(side+'Forearm','Avant-bras '+label,[.38*sign,-.63,.009],[.13,.30,.14],fur,'sphere',[0,0,sign*13]),
      shape(side+'Hand','Paume '+label,[.41*sign,-.787,-.003],[.13,.125,.075],skin),
    );
    for(let i=1;i<=3;i++)parts.push(shape(side+'Finger'+i,'Doigt '+i+' '+label,
      [(.375+(i-1)*.035)*sign,-.868,-.025],[.035,.096,.04],skin));
  }
  return parts;
}
export function createAvatarRig(model,makeMesh,disposeMesh){
  const config=normalizeAvatarRig(model.avatarRig);
  const root=new T.Group(),bones={},meshes=[];
  let triangles=0;
  for(const [key,,parent] of definitions){
    const bone=new T.Group();
    bone.position.fromArray(config[key].pivot);
    if(parent)bone.position.sub(new T.Vector3(...config[parent].pivot));
    (parent?bones[parent]:root).add(bone);
    bones[key]=bone;
  }
  for(const [index,part] of model.parts.entries()){
    const key=Object.hasOwn(bones,part.avatarJoint)?part.avatarJoint:'torso';
    const mesh=makeMesh(part,index);
    const n=mesh.geometry.index?.count??mesh.geometry.attributes.position.count;
    triangles+=n/3;
    mesh.position.sub(new T.Vector3(...config[key].pivot));
    bones[key].add(mesh);meshes.push(mesh);
  }
  function setBend(name,amount){
    const bone=bones[name],joint=config[name];
    if(!bone)return;
    bone.rotation.set(0,0,0);
    bone.rotation[joint.axis]=T.MathUtils.degToRad(joint.limit)*clamp(amount,-1,1,0);
  }
  function setPivot(key,pivot){
    const previous=config[key].pivot;
    config[key]=normalizeAvatarJoint(key,{...config[key],pivot});
    const delta=new T.Vector3(...previous).sub(new T.Vector3(...config[key].pivot));
    for(const mesh of bones[key].children)if(mesh.isMesh)mesh.position.add(delta);
    for(const [child,,parent] of definitions){
      if(child!==key&&parent!==key)continue;
      const position=bones[child].position.fromArray(config[child].pivot);
      if(parent)position.sub(new T.Vector3(...config[parent].pivot));
    }
    return config[key].pivot;
  }
  return {root,bones,meshes,triangles,setBend,setPivot,headPivot:new T.Vector3(...config.head.pivot),
    dispose(){root.removeFromParent();for(const mesh of meshes)disposeMesh(mesh);}};
}

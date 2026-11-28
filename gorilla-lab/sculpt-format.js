export const sculptStates=['Repos','Patrouille','Poursuite','Contact'];
export const sculptStorage='gorilla-lab-entity-models-v1';
export const maxSculptVertices=12000;
export const sculptVertexCounts={sphere:2562,cube:1946};
export const sculptJoints=[
  ['Torse',-1,[0,.65,0]],['Tete',0,[0,1.18,0]],
];
for(const [side,sign] of [['G',-1],['D',1]]){
  const first=sculptJoints.length;
  sculptJoints.push(
    ['Epaule '+side,0,[sign*.23,.96,0]],
    ['Coude '+side,first,[sign*.36,.65,0]],
    ['Poignet '+side,first+1,[sign*.43,.38,0]],
    ['Doigt 1 '+side,first+2,[sign*.39,.28,-.04]],
    ['Doigt 2 '+side,first+2,[sign*.43,.27,0]],
    ['Doigt 3 '+side,first+2,[sign*.47,.28,.04]],
    ['Hanche '+side,0,[sign*.15,.46,0]],
    ['Genou '+side,first+6,[sign*.17,.23,0]],
    ['Pied '+side,first+7,[sign*.18,.07,-.03]],
  );
}
const bounded=(value,low,high,fallback=0)=>Number.isFinite(value)?Math.max(low,Math.min(high,value)):fallback;
export const sculptPose=()=>sculptJoints.map(()=>[0,0,0]);
export function normalizeSculpt(raw){
  const baseCount=sculptVertexCounts[raw?.base],count=raw?.vertices?.length/3;
  if(!Number.isInteger(baseCount)||!Array.isArray(raw.vertices)||!Number.isInteger(count)||
    count<baseCount||count>maxSculptVertices||!raw.vertices.every(Number.isFinite))return null;
  const indices=raw.indices;
  if(indices!==undefined){
    if(!Array.isArray(indices)||indices.length!==(count-2)*6||
      !indices.every(index=>Number.isInteger(index)&&index>=0&&index<count))return null;
  }else if(count!==baseCount)return null;
  return {
    base:raw.base,
    ...(indices?{indices}:{}),
    vertices:raw.vertices.map(value=>Math.round(bounded(value,-3000,3000))),
    color:typeof raw.color==='string'&&/^#[0-9a-f]{6}$/i.test(raw.color)?raw.color.toLowerCase():'#62566b',
    pivots:sculptJoints.map(([, ,point],i)=>point.map((v,a)=>bounded(raw.pivots?.[i]?.[a],-3,3,v))),
    clips:sculptStates.map((_,i)=>(Array.isArray(raw.clips?.[i])?raw.clips[i]:[]).slice(0,12).map(frame=>({
      duration:bounded(frame?.duration,.08,2,.35),
      pose:sculptJoints.map((_,j)=>[0,1,2].map(axis=>bounded(frame?.pose?.[j]?.[axis],-180,180))),
    }))),
    contact:raw.contact==='animate'?'animate':'kill',
  };
}

export function readSculpts(storage){
  try{
    const data=JSON.parse(storage.getItem(sculptStorage)??'[]');
    return Array.isArray(data)?data.slice(0,20).flatMap(item=>{
      const sculpt=normalizeSculpt(item?.sculpt);
      return sculpt&&typeof item.id==='string'&&typeof item.name==='string'?
        [{id:item.id.slice(0,64),name:item.name.slice(0,36),sculpt}]:[];
    }):[];
  }catch{return [];}
}

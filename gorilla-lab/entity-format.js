export const maxMapEntities=16, maxPatrolPoints=12;
export const creatureLooks=['sentinelle','vigie'];
const finite=(n,min,max,fallback)=>Number.isFinite(n)?Math.max(min,Math.min(max,n)):fallback;
const coordinates=value=>value&&[value.x,value.y,value.z].every(Number.isFinite);
function point(p){
  return {x:finite(p.x,-1024,1024,0),y:finite(p.y,-2999,2999,0),z:finite(p.z,-1024,1024,0)};
}

export function normalizeEntities(input){
  if(!Array.isArray(input))return [];
  const entities=[];
  for(const entry of input){
    if(!coordinates(entry))continue;
    entities.push({
      id:entities.length+1,name:typeof entry.name==='string'&&entry.name.trim()?entry.name.trim().slice(0,36):'Sentinelle',
      look:creatureLooks.includes(entry.look)?entry.look:creatureLooks[0],...point(entry),
      yaw:finite(entry.yaw,-360,360,0),
      speed:finite(entry.speed,.5,4,1.65), sight:finite(entry.sight,2,20,10),
      route:(Array.isArray(entry.route)?entry.route:[]).slice(0,maxPatrolPoints).filter(coordinates).map(point),
    });
    if(entities.length===maxMapEntities)break;
  }
  return entities;
}

export function entityExercise(){
  const block=(name,x,y,z,w,h,d,material=9)=>({name,x,y,z,w,h,d,material,solid:true});
  return {format:'gorilla-lab-map',version:1,name:'Sentinelle · parcours de test',worldSize:32,spawn:{x:0,y:.03,z:7,yaw:0},
    pieces:[
      block('Sol',0,-.2,0,19,.4,20),block('Mur gauche',-9.5,1,0,.5,2.5,20),
      block('Mur droit',9.5,1,0,.5,2.5,20),block('Mur nord',0,1,-10,19,2.5,.5),
      block('Mur sud',0,1,10,19,2.5,.5),block('Paravent central',0,1,1,4.8,2.5,.30,6),
      block('Abri ouest',-6,1,-2,.34,2.5,3.5,6),block('Abri est',6,1,3,.34,2.5,3.5,6),
      block('Blocs de franchissement',2.5,.28,-2,1.5,.56,1.5,3),
    ],
    entities:[{name:'Sentinelle',look:'sentinelle',x:0,y:0,z:-6,yaw:90,speed:1.55,sight:11,
      route:[{x:4,y:0,z:-6},{x:4,y:0,z:-2},{x:-4,y:0,z:-2},{x:-4,y:0,z:-6}]}]};
}

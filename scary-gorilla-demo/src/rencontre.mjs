import {locations} from './level.mjs';

const origin={x:-2.20,z:-55.22};
const reveal={x:-1.20,z:-53.82};
const hidingPlace={x:-2.18,z:-57.85};
const archiveLane=2.28;
const nearDoor=-47.65;
const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
const {left,right,near,far}=locations.archiveCover;
const clearance=.27;
const corners=[
  {x:left-clearance-.025,z:far-clearance-.025},
  {x:right+clearance+.025,z:far-clearance-.025},
  {x:right+clearance+.025,z:near+clearance+.025},
  {x:left-clearance-.025,z:near+clearance+.025},
];

export function archiveLineClear(a,b,padding=0) {
  let enter=0,exit=1;
  for(const [axis,min,max] of [['x',left-padding,right+padding],['z',far-padding,near+padding]]){
    const start=a[axis],delta=b[axis]-start;
    if(Math.abs(delta)<1e-7){
      if(start<min||start>max)return true;
      continue;
    }
    const first=(min-start)/delta,last=(max-start)/delta;
    enter=Math.max(enter,Math.min(first,last));
    exit=Math.min(exit,Math.max(first,last));
    if(enter>exit)return true;
  }
  return false;
}

function routeAround(from,to) {
  if(archiveLineClear(from,to,clearance))return to;
  const costs=corners.map(corner=>archiveLineClear(corner,to,clearance)?distance(corner,to):Infinity);
  for(let turn=0;turn<3;turn++)for(let i=0;i<4;i++)for(const step of [-1,1]){
    const j=(i+step+4)%4;
    costs[i]=Math.min(costs[i],costs[j]+distance(corners[i],corners[j]));
  }
  let next=from, best=Infinity;
  for(let i=0;i<4;i++){
    if(!archiveLineClear(from,corners[i],clearance)||distance(from,corners[i])<.001)continue;
    const cost=distance(from,corners[i])+costs[i];
    if(cost<best){best=cost;next=corners[i];}
  }
  return next;
}

export function createEncounter() {
  let phase='hidden',time=0;
  const position={...origin};
  const target={x:0,z:0};
  const frame={event:null,distance:0};

  function change(next,event=null) {
    phase=next;
    time=0;
    frame.event=event;
  }

  function walk(target,speed,dt) {
    target=routeAround(position,target);
    const remaining=distance(target,position);
    const travel=Math.min(remaining,speed*dt);
    if(travel>0){
      position.x+=(target.x-position.x)*travel/remaining;
      position.z+=(target.z-position.z)*travel/remaining;
    }
    frame.distance=travel;
  }

  return {
    get phase() {return phase;},
    get position() {return position;},
    reset() {Object.assign(position,origin);change('hidden');},
    start() {if(phase==='hidden')change('observing');},
    update(dt,head,lit) {
      frame.event=null;
      frame.distance=0;
      if(phase==='hidden'||phase==='gone'||phase==='caught')return frame;
      time+=dt;
      const serviceExit=head.x>4.0&&head.z>-50.06&&head.z<-47.95;
      if((phase==='observing'||phase==='pursuing')&&(head.z>=locations.archiveEntrance||serviceExit)){
        change('retreating','escaped');
      }
      if(phase==='observing'){
        walk(reveal,1.46,dt);
        if(time>=1.55||distance(position,head)<1.9)change('pursuing','pursuit');
      }else if(phase==='pursuing'){
        target.x=clamp(head.x,-archiveLane,archiveLane);
        target.z=clamp(head.z,-58.8,nearDoor);
        if(target.z>far-clearance&&target.z<near+clearance&&target.x>left-clearance&&target.x<right+clearance){
          target.x=target.x<0?left-clearance-.026:right+clearance+.026;
        }
        walk(target,lit ? .43 : 1.46,dt);
        const withinReach=head.y>.08&&head.y<1.85&&distance(position,head)<.49&&archiveLineClear(position,head);
        if(withinReach)change('caught','caught');
        else if(time>=16)change('retreating');
      }else{
        walk(hidingPlace,1.82,dt);
        if(distance(position,hidingPlace)<.04)change('gone');
      }
      return frame;
    },
  };
}

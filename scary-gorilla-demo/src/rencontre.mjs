import {locations} from './level.mjs';

const origin={x:-2.20,z:-55.22};
const reveal={x:-.66,z:-53.82};
const hidingPlace={x:-2.18,z:-57.85};
const archiveLane=2.28;
const nearDoor=-47.65;
const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));

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
      if((phase==='observing'||phase==='pursuing')&&head.z>=locations.archiveEntrance){
        change('retreating','escaped');
      }
      if(phase==='observing'){
        walk(reveal,1.46,dt);
        if(time>=1.55||distance(position,head)<1.9)change('pursuing','pursuit');
      }else if(phase==='pursuing'){
        target.x=clamp(head.x,-archiveLane,archiveLane);
        target.z=clamp(head.z,-58.8,nearDoor);
        walk(target,lit ? .43 : 1.46,dt);
        const withinReach=head.y>.08&&head.y<1.85&&distance(position,head)<.49;
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

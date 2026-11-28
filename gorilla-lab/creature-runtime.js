import * as T from 'three';

export const entityState=Object.freeze({patrol:0,chase:1,search:2,caught:3});
const tick=.067;
const yAxis=new T.Vector3(0,1,0);
const turn=(a,b)=>Math.atan2(Math.sin(b-a),Math.cos(b-a));
const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
const face=(dx,dz)=>Math.atan2(-dx,-dz);

function createEntityQueries(){
  const ray=new T.Ray(),bounds=new T.Box3(),inverse=new T.Quaternion(),hit=new T.Vector3();
  const from=new T.Vector3(),to=new T.Vector3(),delta=new T.Vector3(),sample=new T.Vector3();
  // Work with the same oriented volumes used by visible map pieces and doors.
  function intersection(a,b,box,padding=0){
    if(!box.quaternion||!box.position||!box.half)return Infinity;
    inverse.copy(box.quaternion).invert();
    ray.origin.copy(a).sub(box.position).applyQuaternion(inverse);
    ray.direction.subVectors(b,a).applyQuaternion(inverse);
    const limit=ray.direction.length();
    if(limit<1e-7)return Infinity;
    ray.direction.multiplyScalar(1/limit);
    bounds.min.copy(box.half).negate().addScalar(-padding);
    bounds.max.copy(box.half).addScalar(padding);
    const point=ray.intersectBox(bounds,hit);
    if(!point)return Infinity;
    const length=point.distanceTo(ray.origin);
    return length<=limit?length:Infinity;
  }
  function blocked(a,b,boxes,padding=0){
    for(const box of boxes){
      if(!box.heightfield){
        if(intersection(a,b,box,padding)<Infinity)return true;
        continue;
      }
      const steps=Math.min(64,Math.max(2,Math.ceil(delta.subVectors(b,a).length()/.23)));
      for(let i=0;i<=steps;i++){
        sample.lerpVectors(a,b,i/steps);
        if(sample.x>=box.xMin&&sample.x<=box.xMax&&sample.z>=box.zMin&&sample.z<=box.zMax&&
          sample.y-box.height(sample.x,sample.z)<padding)return true;
      }
    }
    return false;
  }
  function floor(x,y,z,boxes){
    from.set(x,y+.38,z);to.set(x,y-.56,z);
    let highest=-Infinity;
    for(const box of boxes){
      if(box.heightfield){
        if(x<box.xMin||x>box.xMax||z<box.zMin||z>box.zMax)continue;
        const h=box.height(x,z);
        if(h<=from.y&&h>=to.y)highest=Math.max(highest,h);
      }else{
        const depth=intersection(from,to,box);
        if(depth<Infinity)highest=Math.max(highest,from.y-depth);
      }
    }
    return highest;
  }
  return {blocked,floor};
}

export function createEntitySimulation(onCapture=()=>{}){
  const entities=[],protectedPlayers=new Map(),query=createEntityQueries();
  const eyes=new T.Vector3(),target=new T.Vector3(),direction=new T.Vector3(),next=new T.Vector3();
  let accumulator=0,time=0;
  function set(definitions){
    entities.length=0;protectedPlayers.clear();accumulator=time=0;
    for(const p of definitions)entities.push({id:p.id,definition:p,x:p.x,y:p.y,z:p.z,yaw:p.yaw*Math.PI/180,
      waypoint:0,state:entityState.patrol,holdUntil:0,searchUntil:0,lookAt:0,seen:null,memory:null,caught:0,captureSeq:0});
  }
  function targetVisible(e,p,boxes,radius,peripheral){
    const horizontal=distance(e,p);
    if(horizontal>radius||Math.abs(p.y-e.y-.8)>1.2||
      (peripheral&&horizontal>.85&&Math.abs(turn(e.yaw,face(p.x-e.x,p.z-e.z)))>1.18))return false;
    eyes.set(e.x,e.y+1.02,e.z);target.set(p.x,p.y,p.z);
    return !query.blocked(eyes,target,boxes);
  }
  function move(e,goal,boxes,velocity){
    const gap=distance(e,goal);
    if(gap<.015)return;
    const heading=face(goal.x-e.x,goal.z-e.z);
    const length=Math.min(gap,velocity*tick);
    eyes.set(e.x,e.y+.64,e.z);
    for(const offset of [0,.56,-.56,1.08,-1.08]){
      direction.set(0,0,-1).applyAxisAngle(yAxis,heading+offset);
      next.copy(eyes).addScaledVector(direction,length);
      if(query.blocked(eyes,next,boxes,.21))continue;
      const floor=query.floor(next.x,e.y,next.z,boxes);
      if(!Number.isFinite(floor))continue;
      e.x=next.x;e.y=floor;e.z=next.z;
      e.yaw+=turn(e.yaw,heading+offset)*.43;
      return;
    }
    e.yaw+=turn(e.yaw,heading)*.37;
  }
  function step(e,players,boxes){
    const {definition:d}=e;
    if(time<e.holdUntil)return;
    if(e.state===entityState.caught){e.state=entityState.patrol;e.memory=null;e.seen=null;}
    if(time>=e.lookAt){
      e.lookAt=time+.16+(e.id%3)*.016;
      let closest=null,min=Infinity;
      for(const p of players){
        if((protectedPlayers.get(p.id)??0)>time)continue;
        const range=distance(e,p);
        if(range<min&&targetVisible(e,p,boxes,d.sight,e.state!==entityState.chase)){
          min=range;closest=p;
        }
      }
      e.seen=closest?.id??null;
    }
    const seen=e.seen===null?null:players.find(p=>p.id===e.seen);
    if(seen){
      e.state=entityState.chase;
      e.memory={x:seen.x,y:seen.y,z:seen.z};
      if(distance(e,seen)<.52&&(protectedPlayers.get(seen.id)??0)<=time&&targetVisible(e,seen,boxes,.55,false)){
        e.caught=seen.id;e.captureSeq=e.captureSeq%999+1;
        e.state=entityState.caught;
        e.holdUntil=time+1.25;
        protectedPlayers.set(seen.id,time+3);
        onCapture(seen,e);
        return;
      }
      move(e,seen,boxes,d.speed*1.65);
      return;
    }
    if(e.state===entityState.chase){e.state=entityState.search;e.searchUntil=time+2.6;}
    if(e.state===entityState.search){
      if(time<e.searchUntil){
        if(e.memory&&distance(e,e.memory)>.3)move(e,e.memory,boxes,d.speed);
        else e.yaw+=1.55*tick;
        return;
      }
      e.state=entityState.patrol;e.memory=null;
      if(d.route.length)e.waypoint=d.route.reduce((nearest,p,i)=>distance(e,p)<distance(e,d.route[nearest])?i:nearest,0);
    }
    const point=d.route[e.waypoint]??d;
    if(distance(e,point)<.26){
      if(d.route.length>1)e.waypoint=(e.waypoint+1)%d.route.length;
      else e.yaw+=.6*tick;
    }else move(e,point,boxes,d.speed);
  }
  return {set,poses:entities,update(dt,players,boxes){
    accumulator=Math.min(accumulator+dt,tick*3);
    while(accumulator>=tick){
      accumulator-=tick;time+=tick;
      for(const [id,until] of protectedPlayers)if(until<=time)protectedPlayers.delete(id);
      for(const e of entities){
        if(e.caught&&time>=e.holdUntil+3)e.caught=0;
        step(e,players,boxes);
      }
    }
  }};
}

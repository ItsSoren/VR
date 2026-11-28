// Remote entities are presentation only. The host owns AI, collisions and state.
const maxPredictionMs=120;
export function createEntityReplicas(){
  const entries=new Map();
  let lastAt=0;
  function receive(states,time,arrival=time){
    const present=new Set();
    for(const row of states){
      present.add(row.id);
      let entry=entries.get(row.id);
      if(!entry){
        const pose={...row};
        entry={pose,target:row,time,arrival,vx:0,vy:0,vz:0};
        entries.set(row.id,entry);
        continue;
      }
      const seconds=(time-entry.time)/1000;
      if(seconds>=.05&&seconds<=.6&&row.state===entry.target.state&&
        Math.hypot(row.x-entry.target.x,row.y-entry.target.y,row.z-entry.target.z)<=18*seconds){
        entry.vx=(row.x-entry.target.x)/seconds;
        entry.vy=(row.y-entry.target.y)/seconds;
        entry.vz=(row.z-entry.target.z)/seconds;
      }else entry.vx=entry.vy=entry.vz=0;
      if(Math.hypot(row.x-entry.pose.x,row.y-entry.pose.y,row.z-entry.pose.z)>2.5)Object.assign(entry.pose,row);
      entry.target=row;entry.time=time;entry.arrival=arrival;
    }
    for(const id of entries.keys())if(!present.has(id))entries.delete(id);
  }
  return {receive,clear(){entries.clear();lastAt=0;},update(now){
    const alpha=lastAt?1-Math.exp(-Math.max(0,now-lastAt)/48):1;
    lastAt=now;
    const result=[];
    for(const {pose,target,arrival,vx,vy,vz} of entries.values()){
      const ahead=Math.min(maxPredictionMs,Math.max(0,now-arrival))/1000;
      pose.x+=(target.x+vx*ahead-pose.x)*alpha;
      pose.y+=(target.y+vy*ahead-pose.y)*alpha;
      pose.z+=(target.z+vz*ahead-pose.z)*alpha;
      const turn=target.yaw-pose.yaw;
      pose.yaw+=Math.atan2(Math.sin(turn),Math.cos(turn))*alpha;
      pose.state=target.state;result.push(pose);
    }
    return result;
  }};
}

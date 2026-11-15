
const socketURL='wss://clouddata.turbowarp.org';
const projectPrefix='itssoren.github.io/VR/gorilla-lab/';
const names={vr:'☁ GorillaVR',pc:'☁ GorillaPC'};
const digits=(n,width)=>Math.round(n).toString().padStart(width,'0');
export function roomCode(value){return String(value).trim().toUpperCase().replace(/[\s-]/g,'');}
export function mapCode(value){
  let hash=2166136261;
  for(let i=0;i<value.length;i++)hash=Math.imul(hash^value.charCodeAt(i),16777619);
  return (hash>>>0)%1000000;
}
export function encodePose({time,id,x,y,z,yaw,map}){
  const coords=[x,y,z];
  if(!Number.isSafeInteger(time)||time<1e12||time>=1e13||!Number.isInteger(id)||id<1e6||id>=1e7||
      !coords.every(n=>Number.isFinite(n)&&Math.abs(n)<=180)||!Number.isFinite(yaw)||!Number.isInteger(map)||map<0||map>=1e6)return null;
  const angle=((yaw*180/Math.PI%360)+360)%360;
  return '1'+time+digits(id,7)+coords.map(n=>digits(n*100+20000,5)).join('')+digits(Math.round(angle*10)%3600,4)+digits(map,6);
}
export function decodePose(value,now=Date.now()){
  if(typeof value!=='string'||!/^1[0-9]{45}$/.test(value))return null;
  const time=Number(value.slice(1,14)),id=Number(value.slice(14,21));
  const [x,y,z]=[21,26,31].map(i=>(Number(value.slice(i,i+5))-20000)/100);
  const angle=Number(value.slice(36,40)),map=Number(value.slice(40,46));
  if(Math.abs(time-now)>25000||id<1e6||angle>=3600||[x,y,z].some(n=>Math.abs(n)>180))return null;
  return {time,id,x,y,z,yaw:angle*Math.PI/1800,map};
}

export function createCloudClient({onStatus,onPose,Socket=WebSocket,now=Date.now,random=Math.random}){
  let socket=null,role=null,code='',lastSend=-Infinity,remote=null,openedAt=0;
  const id=Math.floor(1000000+random()*8999999);
  const user='player'+id;
  function leave(){
    const current=socket;
    socket=null;role=null;code='';remote=null;onPose(null);
    if(current){
      current.onopen=current.onmessage=current.onerror=current.onclose=null;
      try{current.close();}catch{}
    }
    onStatus('Hors ligne');
  }
  function join(raw,nextRole){
    const normalized=roomCode(raw);
    if(!/^[A-Z0-9]{5,12}$/.test(normalized)||!names[nextRole]){
      onStatus('Code invalide : 5 à 12 lettres ou chiffres.');
      return false;
    }
    if(socket&&role===nextRole&&code===normalized)return true;
    if(socket){
      onStatus('Déconnecte-toi avant de changer de rôle ou de salon.');
      return false;
    }
    role=nextRole;code=normalized;
    let ws;
    try{ws=new Socket(socketURL);}catch{onStatus('WebSocket indisponible.');role=null;return false;}
    socket=ws;
    lastSend=-Infinity;remote=null;
    onStatus('Connexion à TurboWarp…');
    ws.onopen=()=>{
      if(socket!==ws)return;
      openedAt=now();
      ws.send(JSON.stringify({method:'handshake',project_id:projectPrefix+code,user})+'\n');
      onStatus('Salon '+code+' · en attente du '+(role==='vr'?'spectateur':'joueur VR'));
    };
    ws.onmessage=event=>{
      if(socket!==ws||typeof event.data!=='string'||event.data.length>65_000)return;
      const incoming=names[role==='vr'?'pc':'vr'];
      for(const line of event.data.split('\n')){
        if(!line.trim())continue;
        let packet;try{packet=JSON.parse(line);}catch{continue;}
        if(packet.method!=='set'||packet.name!==incoming)continue;
        const pose=decodeAvatar(packet.value,now());
        if(!pose||pose.id===id||remote&&pose.id===remote.id&&pose.time<=remote.time)continue;
        remote={...pose,received:now()};onPose(remote);
      }
    };
    ws.onerror=()=>{if(socket===ws)onStatus('Impossible de joindre TurboWarp.');};
    ws.onclose=event=>{
      if(socket!==ws)return;
      socket=null;role=null;code='';remote=null;onPose(null);
      onStatus('TurboWarp déconnecté ('+event.code+').');
    };
    return true;
  }
  function tick(data){
    const time=now();
    if(remote&&time-remote.received>4400){remote=null;onPose(null);onStatus('Salon '+code+' · en attente du correspondant');}
    if(!data||!role||socket?.readyState!==1||socket.bufferedAmount>4096||time-openedAt<350||time-lastSend<100)return false;
    const value=encodePose({...data,time,id});
    if(!value)return false;
    lastSend=time;
    socket.send(JSON.stringify({method:'set',name:names[role],value:encodeAvatar(value,data.avatar,data.objectFeed?.(time))})+'\n');
    return true;
  }
  return {join,leave,tick,get role(){return role;},get code(){return code;},get remote(){return remote;}};
}



const pointSize=15, quatSize=12, objectSize=44;
const packPoint=p=>p&&[p.x,p.y,p.z].every(n=>Number.isFinite(n)&&Math.abs(n)<=180)
  ?[p.x,p.y,p.z].map(n=>digits(n*100+20000,5)).join(''):null;
function unpackPoint(s,i){
  const [x,y,z]=[i,i+5,i+10].map(k=>(Number(s.slice(k,k+5))-20000)/100);
  return [x,y,z].some(n=>Math.abs(n)>180)?null:{x,y,z};
}
const packQuat=q=>q&&[q.x,q.y,q.z,q.w].every(Number.isFinite)
  ?[q.x,q.y,q.z,q.w].map(n=>digits(Math.max(0,Math.min(998,n*499+499)),3)).join(''):null;
function unpackQuat(s,i){
  const values=[i,i+3,i+6,i+9].map(k=>(Number(s.slice(k,k+3))-499)/499);
  const length=Math.hypot(...values);
  if(length<.82||length>1.18)return null;
  const [x,y,z,w]=values.map(n=>n/length);return {x,y,z,w};
}
export function encodeObjectState(body){
  const p=packPoint(body.mesh.position),q=packQuat(body.mesh.quaternion);
  const id=body.netId, type=body.netType;
  if(!p||!q||!Number.isInteger(id)||id<1||id>=100000||!Number.isInteger(type)||type<0||type>10)return null;
  const flags=(body.owner?1:0)+(body.frozen?2:0)+((body.velocity.lengthSq()<.002&&body.angular.lengthSq()<.004&&!body.owner)?4:0);
  const style=Math.min(4,Math.max(0,(body.materialStyle??-1)+1));
  const color=body.mesh.material.color?.getHex()??0xffffff;
  return digits(id,5)+digits(type,2)+flags+style+digits(color,8)+p+q;
}
export function objectRemoval(id){
  return digits(id,5)+'99'+'0'.repeat(objectSize-7);
}
export function encodeAvatar(pose,avatar,delta){
  if(!avatar)return pose;
  const head=packQuat(avatar.head);
  if(!head)return pose;
  const hands=avatar.hands.map(h=>{
    const p=h&&packPoint(h.position),q=h&&packQuat(h.quaternion);
    return p&&q?'1'+p+q:'0'+'0'.repeat(pointSize+quatSize);
  });
  const height=digits(Math.max(0,Math.min(999,avatar.height*100)),3);
  const arms=digits(Math.max(0,Math.min(999,avatar.armSpan*100)),3);
  const light=String(Math.min(2,Math.max(0,avatar.light??0)));
  const pressures=avatar.hands.map(hand=>[0,1,2].map(i=>{
    const pressure=hand?.pressure?.[i]??0;
    return Math.round(Math.max(0,Math.min(1,pressure))*9);
  }).join('')).join('');
  return pose+'3'+head+hands.join('')+height+arms+light+digits(avatar.coconuts??31,2)+digits(avatar.color??0,2)+pressures+(delta?(delta.full?'2':'1')+delta.records.join(''):'0');
}
export function decodeAvatar(value,now){
  if(typeof value!=='string'||value.length>64000||!/^[0-9]+$/.test(value))return null;
  const pose=decodePose(value.slice(0,46),now);
  if(!pose||value.length===46)return pose;
  const legacy=value[46]==='2';
  const header=legacy?125:133, stride=legacy?43:objectSize;
  if((!legacy&&value[46]!=='3')||value.length<header)return null;
  const head=unpackQuat(value,47);
  if(!head)return null;
  const hands=[59,87].map(i=>value[i]==='1'?{position:unpackPoint(value,i+1),quaternion:unpackQuat(value,i+16),pressure:legacy?null:[0,1,2].map(k=>Number(value[126+(i===59?0:3)+k])/9)}:null);
  if(hands.some(h=>h&&(!h.position||!h.quaternion)))return null;
  const light=Number(value[121]),coconuts=Number(value.slice(122,124)),mode=value[header-1],avatarColor=legacy?0:Number(value.slice(124,126));
  if(light>2||coconuts>31||!['0','1','2'].includes(mode)||(value.length-header)%stride!==0||(mode==='0'&&value.length!==header))return null;
  pose.avatar={head,hands,height:Number(value.slice(115,118))/100,armSpan:Number(value.slice(118,121))/100,light,coconuts,color:avatarColor};
  if(mode!=='0'){
    const records=[];
    for(let i=header;i<value.length;i+=stride){
      const offset=i+(legacy?6:7);
      const id=Number(value.slice(i,i+5)),type=Number(value.slice(i+5,offset));
      if(!id)return null;
      if(type===(legacy?9:99)){records.push({id,removed:true});continue;}
      const flags=Number(value[offset]),style=Number(value[offset+1]),color=Number(value.slice(offset+2,offset+10));
      const position=unpackPoint(value,offset+10),rotation=unpackQuat(value,offset+25);
      if(type>10||flags>7||style>4||color>0xffffff||!position||!rotation)return null;
      records.push({id,type,flags,style,color,position,rotation});
    }
    pose.objects={full:mode==='2',records};
  }
  return pose;
}
export function createObjectFeed(){
  const previous=new Map();
  let last=-Infinity,fullAt=-Infinity;
  function capture(now,bodies){
    if(now-last<200)return null;
    last=now;
    const full=now-fullAt>=1600;
    if(full)fullAt=now;
    const keep=new Set(),records=[];
    for(const body of bodies){
      if(!body.mesh.visible)continue;
      const record=encodeObjectState(body);
      if(!record)continue;
      keep.add(body.netId);
      if(full||previous.get(body.netId)!==record)records.push(record);
      previous.set(body.netId,record);
    }
    for(const id of previous.keys())if(!keep.has(id)){
      if(!full)records.push(objectRemoval(id));
      previous.delete(id);
    }
    return (full||records.length)?{full,records}:null;
  }
  return {capture,reset(){previous.clear();last=fullAt=-Infinity;}};
}


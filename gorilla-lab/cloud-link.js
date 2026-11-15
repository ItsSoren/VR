
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
      if(socket!==ws||typeof event.data!=='string'||event.data.length>16_000)return;
      const incoming=names[role==='vr'?'pc':'vr'];
      for(const line of event.data.split('\n')){
        if(!line.trim())continue;
        let packet;try{packet=JSON.parse(line);}catch{continue;}
        if(packet.method!=='set'||packet.name!==incoming)continue;
        const pose=decodePose(packet.value,now());
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
    socket.send(JSON.stringify({method:'set',name:names[role],value})+'\n');
    return true;
  }
  return {join,leave,tick,get role(){return role;},get code(){return code;},get remote(){return remote;}};
}


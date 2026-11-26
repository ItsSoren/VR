
const socketURL='wss://clouddata.turbowarp.org';
const projectPrefix='itssoren.github.io/VR/gorilla-lab/';
const names={vr:'☁ GorillaVR',pc:'☁ GorillaPC'};
const playerNames=Array.from({length:8},(_,i)=>'☁ GorillaPlayer'+i);
const publicHost='☁ GorillaHost';
export const publicRooms=['ARENE1','ARENE2','ARENE3'];
const roles=new Map([[publicHost,'vr'],[names.vr,'vr'],[names.pc,'pc'],...playerNames.map(name=>[name,'player'])]);
const maxObjectType=53, freshness=4400, maxValueLength=64000;
export const maxRoomSourceLength=4096,maxSyncedHinges=512;
const protocolVersion=6;
// TurboWarp regroupe les mises à jour : un seul paquet toutes les 100 ms par client actif.
const playerInterval=100, spectatorInterval=200, repeatShotsFor=450, maxShotEvents=6;
const digits=(n,width)=>Math.round(n).toString().padStart(width,'0');
export function roomCode(value){return String(value).trim().toUpperCase().replace(/[\s-]/g,'');}
export function mapCode(value){
  let hash=2166136261;
  for(let i=0;i<value.length;i++)hash=Math.imul(hash^value.charCodeAt(i),16777619);
  return (hash>>>0)%1000000;
}
export function encodePose({time,id,x,y,z,yaw,map},wide=false){
  const coords=packPoint({x,y,z},wide);
  if(!Number.isSafeInteger(time)||time<1e12||time>=1e13||!Number.isInteger(id)||id<1e6||id>=1e7||
      !coords||!Number.isFinite(yaw)||!Number.isInteger(map)||map<0||map>=1e6)return null;
  const angle=((yaw*180/Math.PI%360)+360)%360;
  return (wide?'6':'1')+time+digits(id,7)+coords+digits(Math.round(angle*10)%3600,4)+digits(map,6);
}
export function decodePose(value,now=Date.now()){
  if(typeof value!=='string'||!/^[16][0-9]{45}$/.test(value))return null;
  const time=Number(value.slice(1,14)),id=Number(value.slice(14,21));
  const point=unpackPoint(value,21,value[0]==='6');
  const angle=Number(value.slice(36,40)),map=Number(value.slice(40,46));
  if(time<1e12||now!==null&&Math.abs(time-now)>25000||id<1e6||angle>=3600||!point)return null;
  return {time,id,...point,yaw:angle*Math.PI/1800,map};
}

// Le relais transporte des états et des intentions. L’hôte garde l’autorité sur la physique.
export function createCloudClient({onStatus=()=>{},onPose=()=>{},onPeer=()=>{},onAction=()=>{},onShot=()=>{},
    Socket=globalThis.WebSocket,now=Date.now,monotonicNow=now===Date.now?()=>performance.now():now,random=Math.random}={}){
  const senders=new Map();
  const clockStart=monotonicNow(),wallStart=now();
  let socket=null,role=null,code='',id=0,channel='',lastSend=-Infinity,remote=null,openedAt=0,startedAt=0;
  let retryAt=Infinity,retries=0,state='offline',localReady=false,localMap=-1;
  let actionNumber=0,pendingActions=[],collisionAt=Infinity,hostProbe=350,firstHostSend=Infinity;
  let shotNumber=0,pendingShots=[];
  let networkStats={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};
  function status(next,message){state=next;onStatus(message);}
  function waitLabel(){return 'Salon '+code+' · '+(role==='vr'?'en attente de joueurs ou du spectateur':'en attente de l’hôte');}
  function peerTiming(){
    if(!remote)return null;
    const gaps=senders.get(remote.id)?.gaps??[];
    if(!gaps.length)return null;
    const mean=gaps.reduce((total,ms)=>total+ms,0)/gaps.length;
    const ordered=gaps.slice().sort((a,b)=>a-b);
    return {
      peer:remote.id,samples:gaps.length,intervalMs:Math.round(mean),
      p95IntervalMs:Math.round(ordered[Math.ceil(ordered.length*.95)-1]),
      jitterMs:Math.round(gaps.reduce((total,ms)=>total+Math.abs(ms-mean),0)/gaps.length),
    };
  }
  function peerPoses(){return [...senders.values()].map(sender=>sender.pose).filter(Boolean);}
  function selectRemote(){
    const candidates=peerPoses().filter(p=>role==='vr'?p.role!=='vr':p.role==='vr');
    const priority=p=>Number(p.ready)*2+Number(p.role==='pc');
    const next=candidates.find(p=>p.id===remote?.id)??null;
    const primary=candidates.reduce((best,p)=>!best||priority(p)>priority(best)?p:best,next);
    if(primary!==remote){remote=primary;onPose(remote);}
  }
  function disconnectPeers(reset){
    for(const sender of senders.values()){
      if(sender.pose)onPeer(null,sender.pose);
      sender.pose=sender.candidate=null;sender.gaps.length=0;
    }
    if(reset)senders.clear();
    selectRemote();
  }
  function closeSocket(){
    const current=socket;
    socket=null;
    if(current){
      current.onopen=current.onmessage=current.onerror=current.onclose=null;
      try{current.close();}catch{}
    }
  }
  function leave(){
    closeSocket();
    role=null;code='';retryAt=Infinity;localReady=false;localMap=-1;pendingActions=[];pendingShots=[];
    disconnectPeers(true);
    status('offline','Hors ligne');
  }
  function retry(closeCode){
    const delay=Math.min(30_000,1500*2**Math.min(retries++,5));
    retryAt=monotonicNow()+delay;
    status('retry','TurboWarp déconnecté ('+closeCode+') · reconnexion automatique au salon '+code);
  }
  function expire(time){
    let changed=false;
    for(const [senderId,sender] of senders){
      if(sender.pose&&time-sender.pose.arrival>freshness){onPeer(null,sender.pose);sender.pose=null;changed=true;}
      if(sender.candidate&&time-sender.candidate.arrival>freshness)sender.candidate=null;
      if(time-sender.lastArrival>60_000)senders.delete(senderId);
    }
    if(changed)selectRemote();
  }
  function receive(peerRole,name,packet,time){
    const data=decodeAvatar(packet.value,null);
    if(!data||data.id===id)return;
    let sender=senders.get(data.id);
    if(!sender){
      if(senders.size>=64)return;
      sender={gaps:[],lastTime:-Infinity,lastAction:0,lastShot:0,shotWindow:-Infinity,shotCount:0,lastArrival:time,pose:null,candidate:null};
      senders.set(data.id,sender);
    }
    if(data.time<=sender.lastTime)return;
    const prior=sender.pose??sender.candidate;
    if(prior&&data.time-prior.time>freshness+time-prior.arrival){
      if(sender.pose)return;
      sender.candidate=null;
    }
    sender.lastTime=data.time;sender.lastArrival=time;
    const pose={...data,ready:data.ready??true,protocol:data.protocol??(data.ready===undefined?3:4),role:peerRole,channel:name,received:now(),arrival:time};
    const candidate=sender.candidate;
    // A retained value cannot prove a modern client is still broadcasting. Legacy
    // packets can be used immediately if their timestamp is close to the local clock.
    if(!sender.pose&&(!candidate||candidate.channel!==name||candidate.map!==pose.map||time-candidate.arrival>freshness)&&
        (data.ready!==undefined||Math.abs(data.time-pose.received)>25000)){
      sender.candidate=pose;
      return;
    }
    sender.candidate=null;
    if(!sender.pose&&candidate?.ready&&candidate.map===pose.map){
      if(candidate.objects?.full&&!pose.objects?.full){
        const records=new Map(candidate.objects.records.map(record=>[record.id,record]));
        for(const record of pose.objects?.records??[]){
          if(record.removed)records.delete(record.id);
          else records.set(record.id,record);
        }
        pose.objects={full:true,records:[...records.values()]};
      }
      pose.roomSource??=candidate.roomSource;
    }
    if(sender.pose?.map===pose.map){
      const gap=time-sender.pose.arrival;
      if(gap>0&&gap<=freshness){
        sender.gaps.push(gap);
        if(sender.gaps.length>48)sender.gaps.shift();
      }
    }else sender.gaps.length=0;
    sender.pose=pose;
    if(role==='vr'&&peerRole==='vr'&&pose.ready){
      // Un salon déjà ouvert a la priorité. En cas d’ouverture simultanée, compare les identifiants.
      if(firstHostSend===Infinity||candidate?.arrival<firstHostSend||data.id<id){
        role='player';channel=playerNames[id%playerNames.length];
        status('open','Salon '+code+' · hôte détecté, entrée en joueur');
      }else return;
    }
    networkStats.received++;networkStats.bytesReceived+=packet.value.length;
    onPeer(pose);
    selectRemote();
    if(!localReady||!pose.ready||pose.map!==localMap)return;
    // Le relais peut sauter un état. Chaque tir est répété quelques paquets, puis dédupliqué.
    if(time-sender.shotWindow>=1000){sender.shotWindow=time;sender.shotCount=0;}
    for(const {seq,position,quaternion} of pose.shots??[]){
      if(seq<=sender.lastShot)continue;
      sender.lastShot=seq;
      if(sender.shotCount>=14||
        (position.x-pose.x)**2+(position.y-pose.y)**2+(position.z-pose.z)**2>7**2)continue;
      sender.shotCount++;
      onShot({position,quaternion},pose);
    }
    if(role!=='vr'||peerRole!=='player'||data.actionTarget!==id)return;
    for(const {seq,action} of data.actions??[]){
      if(seq<=sender.lastAction)continue;
      sender.lastAction=seq;
      onAction(action,pose);
    }
  }
  function openSocket(){
    let ws;
    try{ws=new Socket(socketURL);}catch{return false;}
    socket=ws;startedAt=monotonicNow();lastSend=-Infinity;firstHostSend=Infinity;
    status('connecting','Connexion à TurboWarp · salon '+code);
    ws.onopen=()=>{
      if(socket!==ws)return;
      openedAt=monotonicNow();
      ws.send(JSON.stringify({method:'handshake',project_id:projectPrefix+code,user:'player'+id})+'\n');
      status('open',waitLabel());
    };
    ws.onmessage=event=>{
      if(socket!==ws||typeof event.data!=='string'||event.data.length>1_050_000)return;
      const time=monotonicNow();
      expire(time);
      for(const line of event.data.split('\n')){
        if(!line.trim())continue;
        let packet;
        try{packet=JSON.parse(line);}catch{
          console.warn('Réponse TurboWarp non reconnue :',line.slice(0,200));
          continue;
        }
        const peerRole=roles.get(packet?.name);
        if(packet?.method!=='set'||!peerRole)continue;
        receive(peerRole,packet.name,packet,time);
      }
    };
    ws.onerror=()=>{if(socket===ws)status('connecting','Impossible de joindre TurboWarp · salon '+code);};
    ws.onclose=event=>{
      if(socket!==ws)return;
      const closeCode=event.code;
      closeSocket();disconnectPeers(false);pendingActions=[];pendingShots=[];
      if([1001,1005,1006,1011,1012,1013,1014,4003].includes(closeCode)){retry(closeCode);return;}
      role=null;code='';
      const detail={4000:'requête invalide',4002:'identifiant refusé',4004:'salon indisponible',4005:'connexion refusée',4006:'client non identifié'}[closeCode];
      status('error','TurboWarp déconnecté ('+closeCode+')'+(detail?' · '+detail: event.reason?' · '+event.reason.slice(0,100):''));
    };
    return true;
  }
  function join(raw,nextRole){
    const normalized=roomCode(raw);
    if(!/^[A-Z0-9]{5,12}$/.test(normalized)||!['vr','pc','player'].includes(nextRole)){
      onStatus('Code invalide : 5 à 12 lettres ou chiffres.');
      return false;
    }
    if(role===nextRole&&code===normalized)return true;
    if(role){onStatus('Déconnecte-toi avant de changer de rôle ou de salon.');return false;}
    disconnectPeers(true);
    id=Math.floor(1000000+random()*8999999);
    role=nextRole;code=normalized;channel=names[role]??playerNames[id%playerNames.length];
    hostProbe=350;
    if(role==='vr'&&publicRooms.includes(code)){
      channel=id%2===0?names.vr:publicHost;
      hostProbe=750+id%150;
    }
    actionNumber=shotNumber=0;pendingShots=[];
    networkStats={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};
    retries=0;retryAt=collisionAt=Infinity;
    if(openSocket())return true;
    role=null;code='';status('error','WebSocket indisponible.');
    return false;
  }
  function sendAction(action,map){
    const minimumProtocol=action.type==='hinge'?6:action.hand||action.type==='world'?5:4;
    if(role!=='player'||state!=='open'||!remote?.ready||remote.protocol<minimumProtocol||remote.map!==map||!encodeAction(action)||actionNumber>=99_999_999)return false;
    const time=monotonicNow();
    pendingActions=pendingActions.filter(entry=>entry.expires>=time&&entry.target===remote.id&&entry.map===map);
    if(pendingActions.length>=8)return false;
    pendingActions.push({action:{...action},seq:++actionNumber,expires:time+1800,target:remote.id,map});
    return true;
  }
  function queueShot(position,quaternion,map){
    if(!role||role==='pc'||state!=='open'||shotNumber>=99_999_999)return;
    const point=packPoint(position,true),rotation=packQuat(quaternion);
    if(!point||!rotation)return;
    const time=monotonicNow();
    pendingShots=pendingShots.filter(s=>s.expires>=time&&s.map===map).slice(-(maxShotEvents-1));
    pendingShots.push({record:digits(++shotNumber,8)+point+rotation,expires:time+repeatShotsFor,map});
  }
  function tick(data){
    const time=monotonicNow();
    localReady=!!data&&data.ready!==false;localMap=data?.map??-1;
    expire(time);
    if(role&&!socket&&time>=retryAt){
      retryAt=Infinity;
      if(!openSocket())retry(1006);
    }
    if(socket&&socket.readyState===0&&time-startedAt>10_000){closeSocket();retry(1006);}
    networkStats.bufferedBytes=socket?.bufferedAmount??0;
    const interval=role==='pc'?spectatorInterval:playerInterval;
    if(!data||!role||socket?.readyState!==1||networkStats.bufferedBytes>4096||time-openedAt<(role==='vr'?hostProbe:350)||time-lastSend<interval)return false;
    if(role==='player'){
      const active=peerPoses().filter(p=>p.role==='player');
      const incumbent=active.find(p=>p.channel===channel);
      if(incumbent)collisionAt=Math.min(time,collisionAt);
      else collisionAt=Infinity;
      if(incumbent&&(incumbent.id<id||time-collisionAt>=800)){
        const free=playerNames.find(name=>!active.some(p=>p.channel===name));
        if(!free){if(state!=='capacity')status('capacity','Salon '+code+' · toutes les places joueur PC / mobile sont occupées.');return false;}
        channel=free;collisionAt=Infinity;
      }
    }
    if(retries||state==='capacity'){retries=0;status('open',waitLabel());}
    const wallTime=Math.round(wallStart+time-clockStart);
    const pose=encodePose({...data,time:wallTime,id},true);
    if(!pose)return false;
    pendingActions=pendingActions.filter(entry=>entry.expires>=time&&entry.target===remote?.id&&entry.map===data.map);
    pendingShots=pendingShots.filter(s=>s.expires>=time&&s.map===data.map);
    const delta=networkStats.bufferedBytes===0?data.objectFeed?.(time):null;
    const avatar=typeof data.avatar==='function'?data.avatar():data.avatar;
    const value=encodeAvatar(pose,avatar,delta,{
      version:protocolVersion,ready:data.ready!==false,actions:pendingActions,actionTarget:pendingActions[0]?.target??0,
      shots:pendingShots,score:data.score,
      roomSource:role==='vr'||(data.roomSource?.startsWith('rtc:')||data.roomSource?.startsWith('photo:'))?data.roomSource:null,hinges:role==='vr'?data.hinges:null,
    });
    lastSend=time;
    if(role==='vr')firstHostSend=Math.min(firstHostSend,time);
    socket.send(JSON.stringify({method:'set',name:channel,value})+'\n');
    networkStats.sent++;networkStats.bytesSent+=value.length;
    return true;
  }
  return {join,leave,tick,sendAction,queueShot,get stats(){return {...networkStats,peerTiming:peerTiming()};},get role(){return role;},get id(){return id;},get code(){return code;},get state(){return state;},
    get remote(){return remote;},get peers(){return peerPoses();}};
}



const pointSize=15, quatSize=12, objectSize=44, actionSize=15, shotSize=35;
const packPoint=(p,wide=false)=>p&&[p.x,p.y,p.z].every(n=>Number.isFinite(n)&&Math.abs(n)<=(wide?2999:180))
  ?[p.x,p.y,p.z].map(n=>Math.abs(n)>180?digits(n*10+70000,5):digits(n*100+20000,5)).join(''):null;
function unpackPoint(s,i,wide=false){
  const [x,y,z]=[i,i+5,i+10].map(k=>{
    const value=Number(s.slice(k,k+5));
    if(value>=2000&&value<=38000)return (value-20000)/100;
    if(wide&&value>=40010&&value<=99990)return (value-70000)/10;
    return NaN;
  });
  return [x,y,z].every(Number.isFinite)?{x,y,z}:null;
}
const packQuat=q=>q&&[q.x,q.y,q.z,q.w].every(Number.isFinite)
  ?[q.x,q.y,q.z,q.w].map(n=>digits(Math.max(0,Math.min(998,n*499+499)),3)).join(''):null;
function unpackQuat(s,i){
  const values=[i,i+3,i+6,i+9].map(k=>(Number(s.slice(k,k+3))-499)/499);
  const length=Math.hypot(...values);
  if(length<.82||length>1.18)return null;
  const [x,y,z,w]=values.map(n=>n/length);return {x,y,z,w};
}
export function encodeObjectState(body,wide=false){
  const p=packPoint(body.mesh.position,wide),q=packQuat(body.mesh.quaternion);
  const id=body.netId, type=body.netType;
  if(!p||!q||!Number.isInteger(id)||id<1||id>=100000||!Number.isInteger(type)||type<0||type>maxObjectType)return null;
  const flags=(body.owner?1:0)+(body.frozen?2:0)+((body.velocity.lengthSq()<.002&&body.angular.lengthSq()<.004&&!body.owner)?4:0);
  const style=Math.min(4,Math.max(0,(body.materialStyle??-1)+1));
  const color=body.mesh.material?.color?.getHex()??0xffffff;
  // Eight decimal digits have space for the original RGB and four item states.
  const itemState=Math.min(3,Math.max(0,body.itemState|0));
  return digits(id,5)+digits(type,2)+flags+style+digits(color+itemState*0x1000000,8)+p+q;
}
export function objectRemoval(id){
  return digits(id,5)+'99'+'0'.repeat(objectSize-7);
}
function packAvatar(avatar,wide){
  if(!avatar)return null;
  const head=packQuat(avatar.head);
  if(!head)return null;
  const handStates=[avatar.hands?.[0],avatar.hands?.[1]];
  const hands=handStates.map(h=>{
    const p=h&&packPoint(h.position,wide),q=h&&packQuat(h.quaternion);
    return p&&q?'1'+p+q:'0'+'0'.repeat(pointSize+quatSize);
  });
  const height=digits(Math.max(0,Math.min(999,(avatar.height??1)*100)),3);
  const arms=digits(Math.max(0,Math.min(999,(avatar.armSpan??1)*100)),3);
  const light=String(Math.min(2,Math.max(0,avatar.light??0)));
  const pressures=handStates.map(hand=>[0,1,2].map(i=>{
    const pressure=hand?.pressure?.[i]??0;
    return Math.round(Math.max(0,Math.min(1,pressure))*9);
  }).join('')).join('');
  return head+hands.join('')+height+arms+light+'00'+digits(avatar.color??0,2)+pressures;
}
function encodeAction(action){
  if(!action)return null;
  const {type,typeId,objectId,mode}=action;
  if(type==='spawn')return Number.isInteger(typeId)&&typeId>=0&&typeId<=maxObjectType?'10'+digits(typeId,5):null;
  if(type==='world'){
    const maxType=mode===1?2:mode===2?4:mode===3?2:-1;
    return Number.isInteger(typeId)&&typeId>=0&&typeId<=maxType?'5'+mode+digits(typeId,5):null;
  }
  if(!Number.isInteger(objectId)||objectId<1||objectId>=100000)return null;
  if(type==='hinge')return '60'+digits(objectId,5);
  if(type==='item')return [1,2,3].includes(mode)?'7'+mode+digits(objectId,5):null;
  if(type==='tool')return Number.isInteger(mode)&&mode>=1&&mode<=7?'2'+mode+digits(objectId,5):null;
  const hand=action.hand??0;
  if((type==='hold'||type==='release')&&[0,1,2].includes(hand))return (type==='hold'?'3':'4')+hand+digits(objectId,5);
  return null;
}
function decodeAction(value){
  const kind=value[0],mode=Number(value[1]),objectId=Number(value.slice(2));
  const type=['','spawn','tool','hold','release','world','hinge','item'][kind];
  if(!type)return null;
  let action={type,objectId};
  if(type==='spawn')action={type,typeId:objectId};
  else if(type==='world')action={type,mode,typeId:objectId};
  else if(type==='tool'||type==='item')action.mode=mode;
  else if(mode)action.hand=mode;
  return encodeAction(action)===value?action:null;
}
function packTool(tool,wide){
  const p=packPoint(tool?.position,wide),q=packQuat(tool?.quaternion),end=packPoint(tool?.end,wide);
  return p&&q&&end&&Number.isInteger(tool.mode)&&tool.mode>=1&&tool.mode<=7?'1'+tool.mode+p+q+end:'0';
}
function packRoomState(source,hinges){
  const text=typeof source==='string'&&source.length<=maxRoomSourceLength&&/^[!-~]+$/.test(source)?source:'';
  const doors=(hinges??[]).slice(0,maxSyncedHinges);
  const encoded=[...text].map(character=>digits(character.charCodeAt(0),3)).join('');
  return digits(text.length,4)+encoded+digits(doors.length,3)+doors
    .map(({id,progress})=>digits(id,5)+digits(Math.round(progress*1000),4)).join('');
}

export function encodeAvatar(pose,avatar,delta,meta=null){
  const wide=meta?.version===6;
  const packed=packAvatar(avatar,wide);
  let records=delta?.records.join('')??'';
  if(!meta){
    if(!packed)return pose;
    return pose+'3'+packed+(delta?(delta.full?'2':'1')+records:'0');
  }
  const actions=(meta.actions??[]).map(({seq,action})=>digits(seq,8)+encodeAction(action)).join('');
  const extended=wide||meta.version===5;
  const gunPosition=extended&&packPoint(avatar?.gun?.position,wide),gunRotation=extended&&packQuat(avatar?.gun?.quaternion);
  const gun=packed&&gunPosition&&gunRotation?'1'+gunPosition+gunRotation:'0';
  const shots=meta.shots??[];
  const extra=extended?gun+digits(shots.length,1)+shots.map(s=>s.record).join('')+
    digits(Math.max(0,Math.min(999999,meta.score??0)),6):'';
  const head=pose+(wide?'6':extended?'5':'4')+Number(meta.ready)+Number(Boolean(packed))+(packed??'')+packTool(packed?avatar.tool:null,wide)+
    digits(meta.actionTarget??0,7)+digits(actions.length/actionSize,1)+actions+extra+(wide?packRoomState(meta.roomSource,meta.hinges):'');
  if(head.length+1+records.length>maxValueLength){delta=null;records='';}
  return head+(delta?(delta.full?'2':'1'):'0')+records;
}
function unpackAvatar(value,start,legacy,wide=false){
  const head=unpackQuat(value,start);
  if(!head)return null;
  const hands=[start+12,start+40].map((i,hand)=>value[i]==='1'?{
    position:unpackPoint(value,i+1,wide),quaternion:unpackQuat(value,i+16),
    pressure:legacy?null:[0,1,2].map(k=>Number(value[start+79+3*hand+k])/9),
  }:null);
  if(hands.some(h=>h&&(!h.position||!h.quaternion)))return null;
  const light=Number(value[start+74]);
  // Two legacy digits are reserved to preserve the following field offsets.
  if(light>2||Number(value.slice(start+75,start+77))>31)return null;
  return {head,hands,height:Number(value.slice(start+68,start+71))/100,armSpan:Number(value.slice(start+71,start+74))/100,
    light,color:legacy?0:Number(value.slice(start+77,start+79))};
}
export function decodeAvatar(value,now){
  if(typeof value!=='string'||value.length>maxValueLength||!/^[0-9]+$/.test(value))return null;
  const pose=decodePose(value.slice(0,46),now);
  if(!pose||value.length===46)return pose;
  const legacy=value[46]==='2';
  const stride=legacy?43:objectSize;
  let header=legacy?125:133;
  const wide=value[46]==='6';
  if(value[0]==='6'&&!wide)return null;
  if(value[46]==='4'||value[46]==='5'||wide){
    pose.protocol=Number(value[46]);
    if(value.length<59||!/[01]/.test(value[47])||!/[01]/.test(value[48]))return null;
    pose.ready=value[47]==='1';
    let i=49;
    if(value[48]==='1'){
      if(value.length<i+85||!(pose.avatar=unpackAvatar(value,i,false,wide)))return null;
      i+=85;
    }
    if(value[i]==='1'){
      if(!pose.avatar||value.length<i+44)return null;
      const mode=Number(value[i+1]),position=unpackPoint(value,i+2,wide),quaternion=unpackQuat(value,i+17),end=unpackPoint(value,i+29,wide);
      if(mode<1||mode>7||!position||!quaternion||!end)return null;
      pose.avatar.tool={mode,position,quaternion,end};
      i+=44;
    }else if(value[i]==='0')i++;
    else return null;
    if(value.length<i+9)return null;
    pose.actionTarget=Number(value.slice(i,i+7));
    const actionCount=Number(value[i+7]);
    if(actionCount>8||(actionCount===0?pose.actionTarget!==0:pose.actionTarget<1e6))return null;
    i+=8;
    header=i+actionCount*actionSize+1;
    if(value.length<header)return null;
    pose.actions=[];
    let lastSeq=0;
    for(;i<header-1;i+=actionSize){
      const seq=Number(value.slice(i,i+8)),action=decodeAction(value.slice(i+8,i+actionSize));
      if(!action||seq<=lastSeq)return null;
      pose.actions.push({seq,action});lastSeq=seq;
    }
    if(pose.protocol>=5){
      if(value[i]==='1'){
        if(!pose.avatar||value.length<i+28)return null;
        const position=unpackPoint(value,i+1,wide),quaternion=unpackQuat(value,i+16);
        if(!position||!quaternion)return null;
        pose.avatar.gun={position,quaternion};
        i+=28;
      }else if(value[i]==='0')i++;
      else return null;
      const count=Number(value[i++]);
      if(!Number.isInteger(count)||count>maxShotEvents||value.length<i+count*shotSize+7)return null;
      pose.shots=[];
      let previous=0;
      for(let end=i+count*shotSize;i<end;i+=shotSize){
        const seq=Number(value.slice(i,i+8)),position=unpackPoint(value,i+8,wide),quaternion=unpackQuat(value,i+23);
        if(seq<=previous||!position||!quaternion)return null;
        pose.shots.push({seq,position,quaternion});previous=seq;
      }
      pose.score=Number(value.slice(i,i+6));
      header=i+7;
    }
    if(wide){
      i=header-1;
      const length=Number(value.slice(i,i+4));i+=4;
      if(length>maxRoomSourceLength||value.length<i+length*3+4)return null;
      let source='';
      for(let end=i+length*3;i<end;i+=3){
        const byte=Number(value.slice(i,i+3));
        if(byte<33||byte>126)return null;
        source+=String.fromCharCode(byte);
      }
      if(source)pose.roomSource=source;
      const count=Number(value.slice(i,i+3));i+=3;
      if(count>maxSyncedHinges||value.length<i+count*9+1)return null;
      pose.hinges=[];
      let previous=0;
      for(let end=i+count*9;i<end;i+=9){
        const id=Number(value.slice(i,i+5)),progress=Number(value.slice(i+5,i+9));
        if(id<=previous||progress>1000)return null;
        pose.hinges.push({id,progress:progress/1000});previous=id;
      }
      header=i+1;
    }
  }else{
    if((!legacy&&value[46]!=='3')||value.length<header)return null;
    if(!(pose.avatar=unpackAvatar(value,47,legacy)))return null;
  }
  const mode=value[header-1];
  if(!['0','1','2'].includes(mode)||(value.length-header)%stride!==0||(mode==='0'&&value.length!==header))return null;
  if(mode!=='0'){
    const records=[];
    for(let i=header;i<value.length;i+=stride){
      const offset=i+(legacy?6:7);
      const id=Number(value.slice(i,i+5)),type=Number(value.slice(i+5,offset));
      if(!id)return null;
      if(type===(legacy?9:99)){records.push({id,removed:true});continue;}
      const flags=Number(value[offset]),style=Number(value[offset+1]);
      const packedColor=Number(value.slice(offset+2,offset+10));
      const color=packedColor%0x1000000,itemState=Math.floor(packedColor/0x1000000);
      const position=unpackPoint(value,offset+10,wide),rotation=unpackQuat(value,offset+25);
      if(type>maxObjectType||flags>7||style>4||itemState>3||!position||!rotation)return null;
      records.push({id,type,flags,style,color,position,rotation,...(itemState?{itemState}:{})});
    }
    pose.objects={full:mode==='2',records};
  }
  return pose;
}
// Les petites pièces rapides utilisent aussi le paquet entre deux mises à jour ordinaires.
const smallObjectRadius=.45, fastObjectSpeed=2.5;
export function createObjectFeed(){
  const previous=new Map(),recent=new Map();
  let slowAt=-Infinity,fullAt=-Infinity;
  function capture(now,bodies,wide=false){
    const full=now-fullAt>=1600;
    const regular=full||now-slowAt>=200;
    if(full)fullAt=now;
    if(regular)slowAt=now;
    const keep=regular?new Set():null,records=[];
    for(const body of bodies){
      if(!body.mesh.visible)continue;
      const id=body.netId,prior=previous.get(id);
      const fast=Boolean(body.owner)||body.radius<=smallObjectRadius&&!body.frozen&&(
        body.velocity.lengthSq()>=fastObjectSpeed**2||
        body.angular.lengthSq()*body.radius**2>=fastObjectSpeed**2
      );
      // En quittant la cadence rapide, publie aussi la pose de transition ou d’arrêt.
      if(!regular&&!fast&&!prior?.fast)continue;
      const record=encodeObjectState(body,wide);
      if(!record)continue;
      keep?.add(id);
      const changed=record!==prior?.record;
      if(changed)recent.set(id,{record,until:now+420});
      if(full||!regular&&changed)records.push(record);
      if(prior){prior.record=record;prior.fast=fast;}
      else previous.set(id,{record,fast});
    }
    if(regular){
      for(const id of previous.keys())if(!keep.has(id)){
        recent.set(id,{record:objectRemoval(id),until:now+420});
        previous.delete(id);
      }
      // Les répétitions passent à cadence ordinaire, y compris la pose finale et les suppressions.
      for(const [id,entry] of recent){
        if(entry.until<now)recent.delete(id);
        else if(!full)records.push(entry.record);
      }
    }
    return (full||records.length)?{full,records}:null;
  }
  return {capture,requestFull(){fullAt=-Infinity;},reset(){previous.clear();recent.clear();slowAt=fullAt=-Infinity;}};
}



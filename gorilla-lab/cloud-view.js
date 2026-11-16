import * as T from 'three';
import {createAvatarStyle} from './avatar-style.js';
import {createHandSkin} from './hand-skin.js';
import {createBodySkin} from './body-skin.js';
import {createBlasterModel} from './arcade-blaster.js';
import {createToolVisual} from './tool-visual.js';
import {createCloudClient,mapCode,roomCode,createObjectFeed} from './cloud-link.js';

const up=T.Object3D.DEFAULT_UP;
const cameraType=15;
const cameraModes=['Libre','Face au joueur','Troisième personne','Caméra physique'];

function makeOrb(){
  const model=new T.Group();
  const core=new T.Mesh(new T.IcosahedronGeometry(.155,1),new T.MeshStandardMaterial({
    color:'#a8eeeb',roughness:.38,emissive:'#2cb7c4',emissiveIntensity:.68,flatShading:true,
  }));
  const hover=new T.Mesh(new T.TorusGeometry(.23,.018,5,20),new T.MeshBasicMaterial({
    color:'#84e6ff',transparent:true,opacity:.85,blending:T.AdditiveBlending,depthWrite:false,
  }));
  hover.rotation.x=Math.PI/2;hover.position.y=-.12;
  const trail=new T.Mesh(new T.ConeGeometry(.11,.28,9,1,true),new T.MeshBasicMaterial({
    color:'#55c7ff',transparent:true,opacity:.45,side:T.DoubleSide,blending:T.AdditiveBlending,depthWrite:false,
  }));
  trail.rotation.x=Math.PI;trail.position.y=-.20;model.add(core,hover,trail);
  return {model,draw(pose,time){
    core.rotation.y=time*.0014;
    hover.position.y=-.13+Math.sin(time*.008)*.035;
    trail.scale.y=.75+Math.sin(time*.013)*.24;
  }};
}

function makeAvatar(){
  const model=new T.Group(),toolRoot=new T.Group();
  const style=createAvatarStyle(0),head=style.createHead();
  const hands=['left','right'].map(side=>{
    const skin=createHandSkin(side,style.hand,{openWrist:true});
    return {skin,position:new T.Vector3(),quaternion:new T.Quaternion(),pressure:[0,0,0],tracked:false};
  });
  const skin=createBodySkin(style.fur,hands.map(h=>({geometry:h.skin.mesh.geometry,wristIndices:h.skin.wristIndices})));
  const body=skin.mesh;
  model.add(head,body);
  const tool=createToolVisual(toolRoot);
  let gun=null;
  const handPoint=new T.Vector3(),handPoses=[null,null],look=new T.Vector3();
  const relative=new T.Quaternion(),torsoRelative=new T.Quaternion(),goal=new T.Quaternion();
  const toolState={mode:0,position:new T.Vector3(),quaternion:new T.Quaternion(),end:new T.Vector3()};
  function draw(pose,time,dt){
    const data=pose.avatar,smooth=1-Math.exp(-dt*32);
    if(!data){
      body.position.set(0,-.46,0);body.rotation.x=0;
      handPoses.fill(null);
      skin.pose(handPoses,.42,.97,.68,true);
      tool.hide();toolState.mode=0;
      if(gun)gun.visible=false;
      return;
    }
    relative.copy(model.quaternion).invert();
    goal.copy(data.head).premultiply(relative);
    head.quaternion.slerp(goal,smooth);
    look.set(0,0,-1).applyQuaternion(head.quaternion);
    const lean=T.MathUtils.smoothstep(-look.y,.28,.94);
    const stretch=Math.max(.38,data.armSpan*(2/3)/.82);
    body.position.set(0,-.25-.24*stretch,.24*lean);body.rotation.x=-.5*lean;
    torsoRelative.copy(body.quaternion).invert();
    style.setColor(data.color??0);
    for(let i=0;i<hands.length;i++){
      const h=hands[i],state=data.hands[i];
      handPoses[i]=state?h:null;
      if(!state){h.tracked=false;continue;}
      handPoint.copy(state.position).sub(pose).applyQuaternion(relative).sub(body.position).applyQuaternion(torsoRelative);
      goal.copy(state.quaternion).premultiply(relative).premultiply(torsoRelative);
      if(h.tracked){h.position.lerp(handPoint,smooth);h.quaternion.slerp(goal,smooth);}
      else {h.position.copy(handPoint);h.quaternion.copy(goal);}
      h.tracked=true;
      for(let j=0;j<3;j++)h.pressure[j]+=((state.pressure?.[j]??0)-h.pressure[j])*smooth;
      h.skin.pose(h.pressure,false);
    }
    skin.pose(handPoses,data.armSpan*.5,.97,stretch,true);
    if(data.gun){
      if(!gun){gun=createBlasterModel();gun.visible=false;toolRoot.add(gun);}
      const a=gun.visible?smooth:1;
      gun.position.lerp(data.gun.position,a);
      gun.quaternion.slerp(goal.copy(data.gun.quaternion),a);
      gun.visible=true;
    }else if(gun)gun.visible=false;
    const toolData=data.tool;
    if(!toolData){tool.hide();toolState.mode=0;return;}
    const a=toolState.mode?smooth:1;
    toolState.mode=toolData.mode;
    toolState.position.lerp(toolData.position,a);
    toolState.quaternion.slerp(goal.copy(toolData.quaternion),a);
    toolState.end.lerp(toolData.end,a);
    tool.update(toolState);
  }
  return {model,toolRoot,draw,dispose(){
    for(const h of hands)h.skin.mesh.geometry.dispose();
    style.hand.dispose();
  }};
}

function disposeArt(root){
  if(!root)return;
  root.removeFromParent();
  const materials=new Set();
  root.traverse(node=>{
    if(!node.isMesh)return;
    node.geometry.dispose();
    materials.add(node.material);
  });
  for(const material of materials)material.dispose();
}

export function addSpectator({scene,currentMap,seedArena,makeReplica,applyLight,applyCoconuts,applyScore,onAction,onShot}){
  const peers=new Map(),replicas=new Map(),feed=createObjectFeed();
  let replicaHost=0,replicaMap=-1,replicaLight=-1,replicaCoconuts=-1;
  let cachedMap='',cachedId=0,replicaScore=-1;
  function localMap(){
    const name=currentMap();
    if(name!==cachedMap){cachedMap=name;cachedId=mapCode(name);}
    return cachedId;
  }
  function readyHere(pose){return !!pose?.ready&&pose.map===localMap();}
  function removeReplica(id){
    const r=replicas.get(id);
    if(r){scene.remove(r.mesh);r.mesh.material?.dispose();replicas.delete(id);}
  }
  function clearReplicas(){
    for(const id of replicas.keys())removeReplica(id);
    replicaHost=0;replicaMap=-1;
    if(replicaLight!==-1){replicaLight=-1;applyLight?.(null);}
    if(replicaCoconuts!==-1){replicaCoconuts=-1;applyCoconuts?.(null);}
    if(replicaScore!==-1){replicaScore=-1;applyScore?.(0);}
  }
  function setReplicaAppearance(replica,record){
    if(replica.color===record.color&&replica.style===record.style)return;
    replica.color=record.color;replica.style=record.style;
    const m=replica.mesh.material;
    if(!m?.color)return;
    m.color.setHex(record.color);
    if(record.style===0){
      Object.assign(m,replica.baseMaterial);
      if(replica.baseEmissive)m.emissive.copy(replica.baseEmissive);
      m.needsUpdate=true;
      return;
    }
    m.roughness=[.44,.94,.12,.16,.40][record.style];
    m.metalness=[.10,0,.87,.12,0][record.style];
    m.opacity=record.style===3?.40:1;m.transparent=record.style===3;m.depthWrite=!m.transparent;
    m.emissive?.copy(m.color);m.emissiveIntensity=record.style===4?1.65:0;m.needsUpdate=true;
  }
  // Une carte différente peut réutiliser les mêmes identifiants. Filtre avant de créer les répliques.
  function takeObjects(pose){
    if(!readyHere(pose)){clearReplicas();return;}
    if(replicaHost!==pose.id||replicaMap!==pose.map){clearReplicas();replicaHost=pose.id;replicaMap=pose.map;}
    if(pose.avatar&&pose.avatar.light!==replicaLight){replicaLight=pose.avatar.light;applyLight?.(replicaLight);}
    if(pose.avatar&&pose.avatar.coconuts!==replicaCoconuts){replicaCoconuts=pose.avatar.coconuts;applyCoconuts?.(replicaCoconuts);}
    if(pose.score!==undefined&&pose.score!==replicaScore){replicaScore=pose.score;applyScore?.(replicaScore);}
    if(!pose.objects)return;
    const present=pose.objects.full?new Set():null;
    for(const record of pose.objects.records){
      if(record.removed){removeReplica(record.id);continue;}
      present?.add(record.id);
      let r=replicas.get(record.id);
      if(r&&r.type!==record.type){removeReplica(record.id);r=null;}
      if(!r){
        const mesh=makeReplica?.(record.type);if(!mesh)continue;
        const {roughness,metalness,transparent,depthWrite,opacity,emissiveIntensity}=mesh.material??{};
        const baseMaterial={roughness,metalness,transparent,depthWrite,opacity,emissiveIntensity};
        mesh.userData.netId=record.id;mesh.userData.netType=record.type;
        r={mesh,baseMaterial,baseEmissive:mesh.material?.emissive?.clone(),type:record.type,target:new T.Vector3().copy(record.position),
          quaternion:new T.Quaternion().copy(record.rotation),velocity:new T.Vector3(),time:pose.time};
        mesh.position.copy(r.target);mesh.quaternion.copy(r.quaternion);
        replicas.set(record.id,r);scene.add(mesh);
      }
      const difference=(pose.time-r.time)/1000;
      if(difference>.06&&difference<.65&&!(record.flags&6))r.velocity.copy(record.position).sub(r.target).multiplyScalar(1/difference).clampLength(0,23);
      else r.velocity.set(0,0,0);
      r.target.copy(record.position);r.quaternion.copy(record.rotation);r.time=pose.time;r.flags=record.flags;
      r.received=pose.arrival;
      r.mesh.userData.netFlags=record.flags;r.mesh.userData.held=Boolean(record.flags&1);
      setReplicaAppearance(r,record);
    }
    if(present)for(const id of replicas.keys())if(!present.has(id))removeReplica(id);
  }
  const objectTarget=new T.Vector3();
  // Le lecteur interpole la pose reçue et la pose affichée sans simuler une deuxième physique.
  function drawReplicas(dt,visible,now){
    const smooth=1-Math.exp(-dt*22);
    for(const r of replicas.values()){
      r.mesh.visible=visible;if(!visible)continue;
      const horizon=r.flags&6?0:Math.min(.12,Math.max(0,(now-r.received)/1000));
      objectTarget.copy(r.target).addScaledVector(r.velocity,horizon);
      if(r.mesh.position.distanceToSquared(objectTarget)>16 || ((r.flags&6)&&r.mesh.position.distanceToSquared(r.target)<.0001))r.mesh.position.copy(objectTarget);
      else r.mesh.position.lerp(objectTarget,smooth);
      r.mesh.quaternion.slerp(r.quaternion,smooth);
      if((r.flags&6)&&r.mesh.quaternion.angleTo(r.quaternion)<.008)r.mesh.quaternion.copy(r.quaternion);
      r.mesh.updateMatrixWorld(true);
    }
  }

  const $=id=>document.querySelector(id);
  const status=$('#cloud-status'),room=$('#cloud-room'),modeButton=$('#cloud-camera');
  let statusAt=-Infinity,cameraMode=0,networkCaption='Hors ligne',copyUntil=0;
  function setCamera(mode){
    cameraMode=mode;
    modeButton.textContent='Caméra : '+cameraModes[mode];
  }
  function cycleCamera(){setCamera((cameraMode+1)%cameraModes.length);}
  modeButton.onclick=cycleCamera;
  const client=createCloudClient({
    onStatus(text){networkCaption=text;status.textContent=text;},
    onPose(pose){if(client.role!=='vr')takeObjects(pose);},
    onPeer(pose,previous){
      if(!pose){
        const entry=peers.get(previous.id);
        if(entry?.art){disposeArt(entry.art.model);disposeArt(entry.art.toolRoot);entry.art.dispose?.();}
        peers.delete(previous.id);
        return;
      }
      let entry=peers.get(pose.id);
      if(!entry){entry={art:null,motion:new T.Vector3(),handMotion:[new T.Vector3(),new T.Vector3()]};peers.set(pose.id,entry);}
      const prior=entry.pose;
      entry.motion.set(0,0,0);
      for(const motion of entry.handMotion)motion.set(0,0,0);
      if(prior&&prior.map===pose.map){
        const seconds=(pose.time-prior.time)/1000;
        if(seconds>=.055&&seconds<=.65){
          entry.motion.set(pose.x-prior.x,pose.y-prior.y,pose.z-prior.z).multiplyScalar(1/seconds);
          if(entry.motion.lengthSq()>=18**2)entry.motion.set(0,0,0);
          for(let i=0;i<2;i++){
            const before=prior.avatar?.hands[i],after=pose.avatar?.hands[i];
            if(before&&after)entry.handMotion[i].copy(after.position).sub(before.position).multiplyScalar(1/seconds).clampLength(0,23);
          }
        }
      }
      entry.pose=pose;
    },
    onAction,onShot,
  });
  const roomFromURL=roomCode(new URLSearchParams(location.search).get('room')??'');
  room.value=/^[A-Z0-9]{5,12}$/.test(roomFromURL)?roomFromURL:Math.random().toString(36).slice(2,8).padEnd(6,'0').toUpperCase();
  function connect(role){
    const code=roomCode(room.value);
    if(client.role===role&&client.code===code)return;
    if(!client.join(code,role))return;
    room.value=code;
    if(role!=='vr')$('#game').focus();
    feed.reset();setCamera(0);
    seedArena(mapCode(code));cachedMap='';
  }
  $('#cloud-vr').onclick=()=>connect('vr');
  $('#cloud-pc').onclick=()=>connect('pc');
  const playerButton=$('#cloud-player');
  if(playerButton)playerButton.onclick=()=>connect('player');
  $('#cloud-leave').onclick=()=>{copyUntil=0;client.leave();};
  $('#cloud-copy').onclick=async()=>{
    const url=new URL(location.href);
    url.searchParams.set('room',roomCode(room.value));
    try{await navigator.clipboard.writeText(url.href);status.textContent='Lien copié.';}
    catch{status.textContent=url.href;}
    copyUntil=performance.now()+2500;
  };
  addEventListener('pagehide',()=>client.leave());

  const target=new T.Vector3(),followTarget=new T.Vector3(),orbitOffset=new T.Vector3(),flight=new T.Vector3();
  let jumpTime=0;
  function fly({dt,position,yaw,pitch,camera,rig,keys,flat}){
    const move=flat?.movement;
    const x=Number(keys.has('KeyD'))-Number(keys.has('KeyQ')||keys.has('KeyA'))+(move?.x??0);
    const z=Number(keys.has('KeyS'))-Number(keys.has('KeyZ')||keys.has('KeyW'))+(move?.z??0);
    if(flat?.consumeJump?.())jumpTime=.26;
    jumpTime=Math.max(0,jumpTime-dt);
    const y=Number(keys.has('Space')||jumpTime>0)-Number(keys.has('ShiftLeft')||keys.has('ShiftRight'));
    const speed=keys.has('ControlLeft')||keys.has('ControlRight')?11:3.2;
    flight.set(x,y,z).clampLength(0,1).applyAxisAngle(up,yaw);
    rig.position.addScaledVector(flight,dt*speed).clampScalar(-175,175);
    rig.rotation.set(0,yaw,0);
    camera.position.set(0,0,0);camera.rotation.set(pitch,0,0,'YXZ');
    rig.updateMatrixWorld(true);
    position.copy(rig.position);
  }
  function renderPeers(ready,time,dt,now){
    for(const entry of peers.values()){
      const pose=entry.pose;
      const visible=ready&&readyHere(pose);
      if(!visible){
        if(entry.art){entry.art.model.visible=false;if(entry.art.toolRoot)entry.art.toolRoot.visible=false;}
        continue;
      }
      if(!entry.art){
        entry.art=pose.role==='pc'?makeOrb():makeAvatar();
        scene.add(entry.art.model);entry.art.model.visible=false;
        if(entry.art.toolRoot)scene.add(entry.art.toolRoot);
      }
      const {model,toolRoot}=entry.art;
      const prediction=Math.min(.12,Math.max(0,(now-pose.arrival)/1000+.025));
      target.copy(pose).addScaledVector(entry.motion,prediction);
      if(!model.visible||model.position.distanceToSquared(target)>64)model.position.copy(target);
      else model.position.lerp(target,1-Math.exp(-dt*34));
      model.rotation.y=pose.yaw;
      model.visible=true;if(toolRoot)toolRoot.visible=true;
      entry.art.draw(pose,time,dt);
    }
  }
  function updateStatus(localReady,now){
    if(now<copyUntil)return;
    const host=client.remote;
    let caption=networkCaption;
    if(client.state==='open'){
      const prefix='Salon '+client.code+' · ';
      const readyPeers=client.peers.filter(pose=>pose.ready);
      if(!localReady)caption=prefix+(client.role==='vr'?'sélectionne « Entrer en VR » pour ouvrir la partie':'quitte la session VR pour utiliser ce rôle');
      else if(client.role!=='vr'&&host&&host.map!==localMap())caption=prefix+'le joueur VR utilise une autre carte. Chargez la même carte.';
      else if(client.role!=='vr'&&host&&!host.ready)caption=prefix+'casque connecté · en attente du démarrage VR';
      else if(client.role==='player'&&host&&host.protocol<5)caption=prefix+'charge la R31 sur le casque pour synchroniser la partie';
      else if(client.role!=='vr'&&readyHere(host))caption=prefix+'joueur VR connecté';
      else if(client.role==='vr'){
        const local=readyPeers.filter(readyHere);
        const count=local.filter(p=>p.role==='player').length;
        const watcher=local.some(p=>p.role==='pc');
        if(count||watcher)caption=prefix+[watcher?'spectateur connecté':'',count?count+' joueur'+(count===1?'':'s')+' PC / mobile':''].filter(Boolean).join(' · ');
        else if(readyPeers.length)caption=prefix+'le correspondant utilise une autre carte. Chargez la même carte.';
      }
    }
    if(status.textContent!==caption)status.textContent=caption;
  }
  function update(frame){
    const {inVR,time,dt,position,yaw,camera,rig,keys,avatar,bodies,score}=frame;
    if(!client.role){clearReplicas();return;}
    const ready=client.role==='vr'?inVR:client.role==='player'||!inVR,now=performance.now();
    const map=localMap(),host=client.role!=='vr'?client.remote:null;
    const showWorld=ready&&readyHere(host);
    if(!showWorld&&replicaMap!==-1)clearReplicas();
    drawReplicas(dt,showWorld,now);
    renderPeers(ready,time,dt,now);
    if(client.role==='pc'&&!inVR){
      if((frame.actions??keys).delete('KeyC'))cycleCamera();
      const physical=cameraMode===3&&showWorld?[...replicas.values()].find(r=>r.type===cameraType)?.mesh:null;
      const model=showWorld?peers.get(host.id)?.art?.model:null;
      if(physical){
        orbitOffset.set(0,0,-.23).applyQuaternion(physical.quaternion);
        rig.position.copy(physical.position).add(orbitOffset);rig.rotation.set(0,0,0);
        camera.position.set(0,0,0);camera.quaternion.copy(physical.quaternion);
        rig.updateMatrixWorld(true);position.copy(rig.position);
      }else if(model&&(cameraMode===1||cameraMode===2)){
        orbitOffset.set(0,.72,cameraMode===1?-2.7:2.7).applyAxisAngle(up,model.rotation.y);
        followTarget.copy(model.position).add(orbitOffset);
        rig.position.lerp(followTarget,1-Math.exp(-dt*11));
        camera.position.set(0,0,0);
        rig.updateMatrixWorld(true);camera.lookAt(model.position);camera.updateWorldMatrix(true,false);
        position.copy(rig.position);
      }else fly(frame);
    }
    client.tick({x:position.x,y:position.y,z:position.z,yaw,map,ready,avatar:ready&&client.role!=='pc'?avatar:null,score,
      objectFeed:ready&&client.role==='vr'&&bodies?t=>feed.capture(t,bodies):null});
    if(now-statusAt>=150){statusAt=now;updateStatus(ready,now);}
  }
  function getPeer(id){const pose=peers.get(id)?.pose;return readyHere(pose)?pose:null;}
  return {update,getPeer,handMotion(id,index){return peers.get(id)?.handMotion[index];},sendAction(action){return client.sendAction(action,localMap());},
    sendShot(position,quaternion){client.queueShot(position,quaternion,localMap());},
    get stats(){return client.stats;},
    get role(){return client.role;},get connected(){return readyHere(client.remote);},
    get remoteSpectator(){return client.peers.find(p=>p.role==='pc'&&readyHere(p))??null;},
    get remoteLight(){return replicaLight===-1?null:replicaLight;},get replicaCount(){return replicas.size;},
    forEachReplica(fn){for(const r of replicas.values())if(r.mesh.visible)fn(r.mesh);}};
}

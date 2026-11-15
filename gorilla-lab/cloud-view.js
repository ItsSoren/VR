
import * as T from 'three';
import {createAvatarStyle} from './avatar-style.js';
import {createHandSkin} from './hand-skin.js';
import {createBodySkin} from './body-skin.js';
import {createCloudClient,mapCode,roomCode,createObjectFeed} from './cloud-link.js';

export function addSpectator({scene,currentMap,seedArena,makeReplica,applyLight,applyCoconuts}){
  const orb=new T.Group(), remotePlayer=new T.Group();
  const orbCore=new T.Mesh(new T.IcosahedronGeometry(.155,1),new T.MeshStandardMaterial({
    color:'#a8eeeb',roughness:.38,emissive:'#2cb7c4',emissiveIntensity:.68,flatShading:true,
  }));
  const hover=new T.Mesh(new T.TorusGeometry(.23,.018,5,20),new T.MeshBasicMaterial({
    color:'#84e6ff',transparent:true,opacity:.85,blending:T.AdditiveBlending,depthWrite:false,
  }));
  hover.rotation.x=Math.PI/2;hover.position.y=-.12;orb.add(orbCore,hover);
  const trail=new T.Mesh(new T.ConeGeometry(.11,.28,9,1,true),new T.MeshBasicMaterial({
    color:'#55c7ff',transparent:true,opacity:.45,side:T.DoubleSide,blending:T.AdditiveBlending,depthWrite:false,
  }));
  trail.rotation.x=Math.PI;trail.position.y=-.20;orb.add(trail);
  const style=createAvatarStyle(0);
  const head=style.createHead();
  const remoteHands=['left','right'].map(side=>{
    const skin=createHandSkin(side,style.hand,{openWrist:true});
    return {skin,position:new T.Vector3(),quaternion:new T.Quaternion(),pressure:[0,0,0],tracked:false};
  });
  const bodySkin=createBodySkin(style.fur,remoteHands.map(h=>({geometry:h.skin.mesh.geometry,wristIndices:h.skin.wristIndices})));
  const body=bodySkin.mesh;
  body.position.y=-.46;
  remotePlayer.add(head,body);scene.add(orb,remotePlayer);
  const handPoint=new T.Vector3(),handPoses=[null,null];
  const relative=new T.Quaternion(),goal=new T.Quaternion();
  const replicas=new Map(),feed=createObjectFeed();
  let replicaHost=0,replicaMap=-1,replicaLight=-1,replicaCoconuts=-1;
  function removeReplica(id){
    const r=replicas.get(id);
    if(r){scene.remove(r.mesh);r.mesh.material.dispose();replicas.delete(id);}
  }
  function clearReplicas(){for(const id of replicas.keys())removeReplica(id); replicaHost=0;replicaMap=-1;if(replicaLight!==-1){replicaLight=-1;applyLight?.(null);}if(replicaCoconuts!==-1){replicaCoconuts=-1;applyCoconuts?.(null);}}
  function setReplicaAppearance(replica,record){
    if(replica.color===record.color&&replica.style===record.style)return;
    replica.color=record.color;replica.style=record.style;
    const m=replica.mesh.material;
    m.color.setHex(record.color);
    if(record.style===0)return;
    m.roughness=[.44,.94,.12,.16,.40][record.style];
    m.metalness=[.10,0,.87,.12,0][record.style];
    m.opacity=record.style===3?.40:1;m.transparent=record.style===3;m.depthWrite=!m.transparent;
    m.emissive.copy(m.color);m.emissiveIntensity=record.style===4?1.65:0;m.needsUpdate=true;
  }
  function takeObjects(pose){
    if(client.role!=='pc'||pose.map!==mapCode(currentMap()))return;
    if(replicaHost!==pose.id||replicaMap!==pose.map){clearReplicas();replicaHost=pose.id;replicaMap=pose.map;}
    if(pose.avatar&&pose.avatar.light!==replicaLight){replicaLight=pose.avatar.light;applyLight?.(replicaLight);}
    if(pose.avatar&&pose.avatar.coconuts!==replicaCoconuts){replicaCoconuts=pose.avatar.coconuts;applyCoconuts?.(replicaCoconuts);}
    if(!pose.objects)return;
    const present=pose.objects.full?new Set():null;
    for(const record of pose.objects.records){
      if(record.removed){removeReplica(record.id);continue;}
      present?.add(record.id);
      let r=replicas.get(record.id);
      if(r&&r.type!==record.type){removeReplica(record.id);r=null;}
      if(!r){
        const mesh=makeReplica?.(record.type);if(!mesh)continue;
        scene.add(mesh);
        r={mesh,type:record.type,target:new T.Vector3().copy(record.position),quaternion:new T.Quaternion().copy(record.rotation),velocity:new T.Vector3(),time:pose.time,flags:record.flags};
        mesh.position.copy(r.target);mesh.quaternion.copy(r.quaternion);
        replicas.set(record.id,r);
      }
      const difference=(pose.time-r.time)/1000;
      if(difference>.06&&difference<.65&&!(record.flags&6))r.velocity.copy(record.position).sub(r.target).multiplyScalar(1/difference).clampLength(0,23);
      else r.velocity.set(0,0,0);
      r.target.copy(record.position);r.quaternion.copy(record.rotation);r.time=pose.time;r.flags=record.flags;
      r.received=pose.received;
      setReplicaAppearance(r,record);
    }
    if(present)for(const id of replicas.keys())if(!present.has(id))removeReplica(id);
  }
  const objectTarget=new T.Vector3();
  function drawReplicas(dt,visible){
    for(const r of replicas.values()){
      r.mesh.visible=visible;if(!visible)continue;
      const horizon=r.flags&6?0:Math.min(.12,Math.max(0,(Date.now()-r.received)/1000));
      objectTarget.copy(r.target).addScaledVector(r.velocity,horizon);
      const a=1-Math.exp(-dt*22);
      if(r.mesh.position.distanceToSquared(objectTarget)>16 || ((r.flags&6)&&r.mesh.position.distanceToSquared(r.target)<.0001))r.mesh.position.copy(objectTarget);
      else r.mesh.position.lerp(objectTarget,a);
      r.mesh.quaternion.slerp(r.quaternion,a);
      if((r.flags&6)&&r.mesh.quaternion.angleTo(r.quaternion)<.008)r.mesh.quaternion.copy(r.quaternion);
    }
  }
  function drawAvatar(model,pose,dt){
    const data=pose.avatar;
    const smooth=1-Math.exp(-dt*20);
    if(data){
      relative.copy(model.quaternion).invert();
      goal.copy(data.head).premultiply(relative);
      head.quaternion.slerp(goal,smooth);
      const stretch=Math.max(.38,data.armSpan*(2/3)/.82);
      body.position.y=-.25-.24*stretch;
      style.setColor(data.color??0);
      for(let i=0;i<remoteHands.length;i++){
        const h=remoteHands[i],state=data.hands[i];
        handPoses[i]=state?h:null;
        if(!state){h.tracked=false;continue;}
        handPoint.copy(state.position).sub(pose).applyQuaternion(relative).sub(body.position);
        goal.copy(state.quaternion).premultiply(relative);
        if(h.tracked){h.position.lerp(handPoint,smooth);h.quaternion.slerp(goal,smooth);}
        else {h.position.copy(handPoint);h.quaternion.copy(goal);}
        h.tracked=true;
        for(let j=0;j<3;j++)h.pressure[j]+=( (state.pressure?.[j]??0)-h.pressure[j])*smooth;
        h.skin.pose(h.pressure,false);
      }
      bodySkin.pose(handPoses,data.armSpan*.5,.97,stretch,true);
    }else{
      handPoses.fill(null);
      bodySkin.pose(handPoses,.42,.97,.68,true);
    }
  }
  orb.visible=remotePlayer.visible=false;
  const $=id=>document.querySelector(id);
  const status=$('#cloud-status'),room=$('#cloud-room'),modeButton=$('#cloud-camera');
  const modes=['Libre','Face au joueur','Troisième personne'];
  let cameraMode=0;
  function cycleCamera(){cameraMode=(cameraMode+1)%modes.length;modeButton.textContent='Caméra : '+modes[cameraMode];}
  modeButton.onclick=cycleCamera;
  let remote=null,motion=null,networkCaption='Hors ligne',mapMismatch=false;
  let cachedMap='',cachedId=0;
  const client=createCloudClient({
    onStatus(text){networkCaption=text;status.textContent=text;mapMismatch=false;},
    onPose(pose){
      motion=null;
      if(pose&&remote&&remote.id===pose.id&&remote.map===pose.map){
        const seconds=(pose.time-remote.time)/1000;
        if(seconds>=.055&&seconds<=.65){
          const dx=pose.x-remote.x,dy=pose.y-remote.y,dz=pose.z-remote.z;
          const speed=Math.hypot(dx,dy,dz)/seconds;
          if(speed<18)motion={x:dx/seconds,y:dy/seconds,z:dz/seconds};
        }
      }
      remote=pose;
      if(pose)takeObjects(pose);else clearReplicas();
    },
  });
  const roomFromURL=roomCode(new URLSearchParams(location.search).get('room')??'');
  room.value=/^[A-Z0-9]{5,12}$/.test(roomFromURL)?roomFromURL:Math.random().toString(36).slice(2,8).toUpperCase();
  function connect(role){
    const code=roomCode(room.value);
    if(client.join(code,role)){
      room.value=code;
      if(role==='pc')document.querySelector('#game').focus();
      feed.reset();
      cameraMode=0;modeButton.textContent='Caméra : Libre';
      if(!client.remote){seedArena(mapCode(code));cachedMap='';}
    }
  }
  $('#cloud-vr').onclick=()=>connect('vr');
  $('#cloud-pc').onclick=()=>connect('pc');
  $('#cloud-leave').onclick=()=>client.leave();
  $('#cloud-copy').onclick=async()=>{
    const url=new URL(location.href);
    url.searchParams.set('room',roomCode(room.value));
    try{await navigator.clipboard.writeText(url.href);status.textContent='Lien copié.';}
    catch{status.textContent=url.href;}
  };
  addEventListener('pagehide',()=>client.leave());
  const target=new T.Vector3(),followTarget=new T.Vector3(),orbitOffset=new T.Vector3(),flight=new T.Vector3();
  let hadRemote=false;
  function update({inVR,time,dt,position,yaw,pitch,camera,rig,keys,avatar,bodies}){
    if(!client.role){orb.visible=remotePlayer.visible=false;hadRemote=false;clearReplicas();return;}
    const name=currentMap();
    if(name!==cachedMap){cachedMap=name;cachedId=mapCode(name);}
    const matchingRole=client.role==='vr'?inVR:!inVR;
    if(remote&&remote.map!==cachedId){
      if(!mapMismatch){status.textContent='Le correspondant joue sur une autre map. Chargez la même map.';mapMismatch=true;}
    }else if(remote&&matchingRole){
      if(mapMismatch||status.textContent===networkCaption){
        status.textContent='Salon '+client.code+' · '+(client.role==='vr'?'spectateur connecté':'joueur VR connecté');
      }
      mapMismatch=false;
    }
    const visible=Boolean(remote&&remote.map===cachedId&&matchingRole);
    if(!visible&&replicaMap!==-1)clearReplicas();
    if(client.role==='pc'&&!inVR){
      if(keys.delete('KeyC'))cycleCamera();
      if(cameraMode===0||!visible){
        const x=Number(keys.has('ArrowRight'))-Number(keys.has('ArrowLeft'));
        const z=Number(keys.has('ArrowDown'))-Number(keys.has('ArrowUp'));
        const y=Number(keys.has('Space'))-Number(keys.has('ShiftLeft')||keys.has('ShiftRight'));
        const speed=keys.has('ControlLeft')||keys.has('ControlRight')?11:3.2;
        flight.set(x,y,z).clampLength(0,1).applyAxisAngle(T.Object3D.DEFAULT_UP,yaw);
        rig.position.addScaledVector(flight,dt*speed);
        rig.position.clampScalar(-175,175);
        rig.rotation.set(0,yaw,0);
        camera.position.set(0,0,0);
        camera.rotation.set(pitch,0,0,'YXZ');
        rig.updateMatrixWorld(true);
        position.copy(rig.position);
      }
    }
    orb.visible=visible&&client.role==='vr';
    remotePlayer.visible=visible&&client.role==='pc';
    drawReplicas(dt,remotePlayer.visible);
    if(visible){
      const model=orb.visible?orb:remotePlayer;
      const prediction=Math.min(.19,Math.max(0,(Date.now()-remote.received)/1000+.036));
      target.set(remote.x+(motion?.x??0)*prediction,remote.y+(motion?.y??0)*prediction,remote.z+(motion?.z??0)*prediction);
      if(!hadRemote||model.position.distanceToSquared(target)>64)model.position.copy(target);
      else model.position.lerp(target,1-Math.exp(-dt*11));
      model.rotation.y+=T.MathUtils.euclideanModulo(remote.yaw-model.rotation.y+Math.PI,2*Math.PI)-Math.PI;
      hadRemote=true;
      if(remotePlayer.visible)drawAvatar(model,remote,dt);
      if(orb.visible){
        orbCore.rotation.y=time*.0014;
        hover.position.y=-.13+Math.sin(time*.008)*.035;
        trail.scale.y=.75+Math.sin(time*.013)*.24;
      }
      if(remotePlayer.visible&&cameraMode!==0){
        orbitOffset.set(0,.72,cameraMode===1?-2.7:2.7).applyAxisAngle(T.Object3D.DEFAULT_UP,remotePlayer.rotation.y);
        followTarget.copy(remotePlayer.position).add(orbitOffset);
        rig.position.lerp(followTarget,1-Math.exp(-dt*11));
        camera.position.set(0,0,0);
        rig.updateMatrixWorld(true);
        camera.lookAt(remotePlayer.position);
        camera.updateWorldMatrix(true,false);
        position.copy(rig.position);
      }
    }else hadRemote=false;
    client.tick(matchingRole?{x:position.x,y:position.y,z:position.z,yaw,map:cachedId,
      avatar:inVR?avatar:null,objectFeed:inVR&&avatar&&bodies?t=>feed.capture(t,bodies):null}:null);
  }
  return {update,get role(){return client.role;},get connected(){return Boolean(client.remote);},get remoteLight(){return replicaLight===-1?null:replicaLight;},get replicaCount(){return replicas.size;},forEachReplica(fn){for(const r of replicas.values())if(r.mesh.visible)fn(r.mesh);}};
}




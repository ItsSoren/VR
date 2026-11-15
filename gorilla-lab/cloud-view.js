
import * as T from 'three';
import {createCloudClient,mapCode,roomCode} from './cloud-link.js';

export function addSpectator({scene,currentMap,seedArena}){
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
  const avatarMaterial=new T.MeshLambertMaterial({color:'#f4f3e7',flatShading:true});
  const head=new T.Mesh(new T.IcosahedronGeometry(.145,1),avatarMaterial);
  const body=new T.Mesh(new T.IcosahedronGeometry(.24,1),avatarMaterial);
  body.position.set(0,-.35,.09);body.scale.set(.91,1.12,.69);
  remotePlayer.add(head,body);scene.add(orb,remotePlayer);
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
    },
  });
  const roomFromURL=roomCode(new URLSearchParams(location.search).get('room')??'');
  room.value=/^[A-Z0-9]{5,12}$/.test(roomFromURL)?roomFromURL:Math.random().toString(36).slice(2,8).toUpperCase();
  function connect(role){
    const code=roomCode(room.value);
    if(client.join(code,role)){
      room.value=code;
      if(role==='pc')document.querySelector('#game').focus();
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
  function update({inVR,time,dt,position,yaw,pitch,camera,rig,keys}){
    if(!client.role){orb.visible=remotePlayer.visible=false;hadRemote=false;return;}
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
    if(visible){
      const model=orb.visible?orb:remotePlayer;
      const prediction=Math.min(.19,Math.max(0,(Date.now()-remote.received)/1000+.036));
      target.set(remote.x+(motion?.x??0)*prediction,remote.y+(motion?.y??0)*prediction,remote.z+(motion?.z??0)*prediction);
      if(!hadRemote||model.position.distanceToSquared(target)>64)model.position.copy(target);
      else model.position.lerp(target,1-Math.exp(-dt*11));
      model.rotation.y+=T.MathUtils.euclideanModulo(remote.yaw-model.rotation.y+Math.PI,2*Math.PI)-Math.PI;
      hadRemote=true;
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
    client.tick(matchingRole?{x:position.x,y:position.y,z:position.z,yaw,map:cachedId}:null);
  }
  return {update,get role(){return client.role;},get connected(){return Boolean(client.remote);}};
}



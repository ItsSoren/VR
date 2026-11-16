import * as T from 'three';
import {createArcadeBlaster} from './arcade-blaster.js';

// Relie les commandes et les collisions du monde au pistolet, qui reste indépendant des plateformes.
export function createBlasterSystem({scene,rig,camera,arena,objects,spectator}){
  const up=new T.Vector3(0,1,0),spin=new T.Quaternion();
  let blasterInFlight=0;
  const shotRay=new T.Raycaster(),shotsAgainst=[],shotObjects=new Map();
  // Le tir interroge les surfaces visuelles. Seule la simulation locale de référence pousse les objets.
  const blaster=createArcadeBlaster(scene,{
    onShot:(position,quaternion)=>spectator.sendShot(position,quaternion),
    impact(origin,direction,length,authoritative){
    shotRay.set(origin,direction);shotRay.far=length;
    const hit=shotRay.intersectObjects(shotsAgainst,false)[0];
    if(!hit)return null;
    const body=shotObjects.get(hit.object);
    if(authoritative&&body&&!body.owner&&!body.frozen)body.velocity.addScaledVector(direction,Math.min(4,2.6/body.mass));
    return hit.distance;
  }});
  const blasterAim={position:new T.Vector3(),quaternion:new T.Quaternion(),modelPosition:new T.Vector3()};
  const visibleGun={position:blasterAim.modelPosition,quaternion:blasterAim.quaternion};
  let gun=null;
  function update({frame,space,inVR,enabled,remoteWorld,dt,yaw,drop,rightHand,flatFiring}){
    let aim=null,firing=false;
    if(enabled){
      if(inVR){
        const input=[...frame.session.inputSources].find(source=>source.handedness==='right');
        const pose=input&&frame.getPose(input.targetRaySpace,space);
        if(pose){
          const {position:p,orientation:q}=pose.transform;
          aim=blasterAim;
          aim.position.set(p.x,p.y-drop,p.z).applyAxisAngle(up,yaw).add(rig.position);
          aim.modelPosition.copy(rightHand.valid?rightHand.mesh.position:aim.position);
          aim.quaternion.set(q.x,q.y,q.z,q.w).premultiply(spin.setFromAxisAngle(up,yaw));
          firing=Boolean(input.gamepad?.buttons[0]?.pressed);
        }
      }else{
        aim=blasterAim;
        camera.getWorldPosition(aim.position);camera.getWorldQuaternion(aim.quaternion);
        aim.modelPosition.set(.16,-.17,-.43).applyQuaternion(aim.quaternion).add(aim.position);
        firing=flatFiring;
      }
    }
    gun=aim?visibleGun:null;
    shotsAgainst.length=0;shotObjects.clear();
    if(aim||blasterInFlight){
      for(const box of arena.boxes)if(box.mesh?.isMesh&&box.mesh.visible)shotsAgainst.push(box.mesh);
      if(remoteWorld)spectator.forEachReplica(mesh=>shotsAgainst.push(mesh));
      else for(const body of objects)if(body.mesh.visible&&body.collidable&&!body.owner){
        shotsAgainst.push(body.mesh);shotObjects.set(body.mesh,body);
      }
    }
    blaster.update({dt,aim,firing});
    if(firing)blasterInFlight=1.3;
    else blasterInFlight=Math.max(0,blasterInFlight-dt);
  }

  return {
    update,
    receiveShot({position,quaternion},authoritative){
      blaster.replay(position,new T.Quaternion().copy(quaternion),authoritative);
      blasterInFlight=1.3;
    },
    reset(){blaster.reset();blasterInFlight=0;gun=null;},
    get gun(){return gun;},
    get shotsFired(){return blaster.shotsFired;},
  };
}

// Les événements DOM gardent l’état du tir entre deux images, même quand le pointeur sort du bouton.
export function bindBlasterTrigger(canvas,shootButton){
  let firePointer=false,touchFire=false;
  canvas.addEventListener('pointerdown',event=>{
    if(event.pointerType!=='touch'&&event.button===0)firePointer=true;
  });
  canvas.addEventListener('lostpointercapture',()=>{firePointer=false;});
  addEventListener('pointerup',()=>{firePointer=false;});
  addEventListener('pointercancel',()=>{firePointer=touchFire=false;});
  shootButton.onpointerdown=event=>{event.preventDefault();touchFire=true;shootButton.setPointerCapture(event.pointerId);};
  shootButton.onpointerup=shootButton.onpointercancel=shootButton.onlostpointercapture=()=>{touchFire=false;};
  return {
    get held(){return firePointer||touchFire;},
    clear(){firePointer=touchFire=false;},
  };
}

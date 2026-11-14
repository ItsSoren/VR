
import * as T from 'three';

export function setupVR(renderer, scene, camera, { player, floor, solid, start }) {
  const rig = new T.Group();
  const view = new T.PerspectiveCamera(68, 1, .07, 7000);
  rig.add(view);
  scene.add(rig);
  const gloves = new T.MeshLambertMaterial({ color:0x705840, flatShading:true });
  const hands = ['left','right'].map(side => {
    const mesh = new T.Mesh(new T.IcosahedronGeometry(1,1),gloves);
    mesh.scale.set(.09,.105,.13);
    mesh.visible=false;
    scene.add(mesh);
    return {side,mesh,anchor:new T.Vector3(),local:new T.Vector3(),touch:false};
  });
  const button=document.createElement('button');
  button.textContent='Entrer en VR';
  button.title='Pousse sur le sol ou un obstacle avec les mains. Joystick droit : rotation par crans de 45°.';
  button.style.cssText='position:fixed;right:18px;bottom:18px;z-index:10000;padding:12px 16px;background:#ead6a2;color:#253129;border:0;border-radius:6px;font:bold 15px system-ui';
  button.hidden=true;
  document.body.append(button);
  renderer.xr.enabled=true;
  renderer.xr.setReferenceSpaceType('local-floor');
  renderer.xr.setFramebufferScaleFactor(.72);
  navigator.xr?.isSessionSupported('immersive-vr').then(ok=>button.hidden=!ok).catch(()=>{});
  let owner, yaw=0, latch=false;
  const axis=new T.Vector3(0,1,0);
  const head=new T.Vector3(), rotated=new T.Vector3(), worldHead=new T.Vector3(), movement=new T.Vector3(), velocity=new T.Vector3(), shift=new T.Vector3(), candidate=new T.Vector3();
  function transform(point,out) {
    return out.copy(point).applyAxisAngle(axis,yaw).add(rig.position);
  }
  button.onclick=async()=>{
    let session;
    try {
      session=await navigator.xr.requestSession('immersive-vr',{requiredFeatures:['local-floor']});
      await renderer.xr.setSession(session);
      renderer.xr.setFoveation(.7);
      button.hidden=true;
      start();
    } catch(error) {
      if(session) await session.end().catch(()=>{});
      button.textContent='VR indisponible';
      console.warn(error);
    }
  };
  renderer.xr.addEventListener('sessionend',()=>{
    owner=null;
    for(const hand of hands) { hand.mesh.visible=false; hand.touch=false; }
    player().velocity.set(0,0,0);
    player().syncCamera();
    button.hidden=false;
  });
  return {
    view,
    step(frame,dt) {
      const space=renderer.xr.getReferenceSpace();
      const pose=frame && space && frame.getViewerPose(space);
      if(!pose) return false;
      const p=pose.transform.position;
      head.set(p.x,p.y,p.z);
      const current=player();
      if(owner!==current) {
        owner=current;
        yaw=current.yaw||0;
        rotated.copy(head).applyAxisAngle(axis,yaw);
        rig.position.set(current.position.x-rotated.x,current.position.y,current.position.z-rotated.z);
        velocity.set(0,0,0);
        latch=false;
        for(const hand of hands) hand.touch=false;
      }
      const inputs=[...frame.session.inputSources];
      const horizontal=inputs.find(source=>source.handedness==='right'&&source.gamepad?.mapping==='xr-standard')?.gamepad.axes[2]??0;
      if(Math.abs(horizontal)<.30) latch=false;
      if(Math.abs(horizontal)>.65 && !latch) {
        latch=true;
        transform(head,worldHead);
        yaw-=Math.sign(horizontal)*Math.PI/4;
        transform(head,rotated);
        rig.position.add(shift.subVectors(worldHead,rotated));
        velocity.set(0,0,0);
        for(const hand of hands) hand.touch=false;
      }
      movement.set(0,0,0);
      let contacts=0;
      for(const hand of hands) {
        const input=inputs.find(source=>source.handedness===hand.side&&source.gripSpace);
        const grip=input&&frame.getPose(input.gripSpace,space);
        hand.mesh.visible=Boolean(grip);
        if(!grip) {hand.touch=false;continue;}
        const g=grip.transform.position;
        hand.local.set(g.x,g.y,g.z);
        shift.subVectors(hand.local,head).clampLength(0,1.35);
        hand.local.copy(head).add(shift);
        transform(hand.local,candidate);
        const surface=floor(candidate.x,candidate.z)+.085;
        const againstWall=solid(candidate);
        if(hand.touch && (candidate.distanceTo(hand.anchor)>.52 || (candidate.y>surface+.17&&!againstWall&&hand.anchor.y<surface+.12))) hand.touch=false;
        if(!hand.touch && (candidate.y<=surface || againstWall)) {
          hand.touch=true;
          if(againstWall&&hand.mesh.position.distanceTo(candidate)<.40) hand.anchor.copy(hand.mesh.position);
          else hand.anchor.copy(candidate);
          if(candidate.y<=surface) hand.anchor.y=surface;
        }
        if(hand.touch) {
          movement.add(shift.subVectors(hand.anchor,candidate));
          contacts++;
        }
        const q=grip.transform.orientation;
        hand.mesh.quaternion.set(q.x,q.y,q.z,q.w);
        hand.mesh.quaternion.premultiply(new T.Quaternion().setFromAxisAngle(axis,yaw));
      }
      if(contacts) {
        movement.multiplyScalar(1/contacts).clampLength(0,dt*7);
        velocity.lerp(shift.copy(movement).multiplyScalar(1/Math.max(dt,.008)),.37);
      } else {
        velocity.y-=11*dt;
        movement.copy(velocity).multiplyScalar(dt);
      }
      transform(head,worldHead);
      const nextX=worldHead.x+movement.x,nextZ=worldHead.z+movement.z;
      if(solid(candidate.set(nextX,worldHead.y,nextZ)) || floor(nextX,nextZ)>rig.position.y+.52) {
        movement.x=movement.z=velocity.x=velocity.z=0;
      }
      rig.position.add(movement);
      transform(head,worldHead);
      const surface=floor(worldHead.x,worldHead.z);
      if(rig.position.y<surface) {
        rig.position.y=surface;
        velocity.y=Math.max(0,velocity.y);
        if(!contacts) {velocity.x*=Math.exp(-5*dt);velocity.z*=Math.exp(-5*dt);}
        transform(head,worldHead);
      }
      for(const hand of hands) if(hand.mesh.visible) {
        if(hand.touch) hand.mesh.position.copy(hand.anchor);
        else transform(hand.local,hand.mesh.position);
      }
      rig.rotation.y=yaw;
      rig.updateMatrixWorld(true);
      current.position.set(worldHead.x,rig.position.y,worldHead.z);
      current.velocity.copy(velocity);
      current.yaw=yaw;
      camera.position.copy(worldHead);
      const q=pose.transform.orientation;
      camera.quaternion.set(q.x,q.y,q.z,q.w);
      camera.quaternion.premultiply(new T.Quaternion().setFromAxisAngle(axis,yaw));
      camera.updateMatrixWorld();
      return true;
    },
  };
}


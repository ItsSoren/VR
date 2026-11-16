// WebXR gripSpace supplies the grip pose in the reference space. targetRaySpace
// is reserved for aiming. See https://www.w3.org/TR/webxr/#grip-space
import {Quaternion, Vector3} from 'three';
import {palmCenter} from './hand-skin.js';

const up=new Vector3(0,1,0), localAxis=new Vector3(0,0,1);
const wristTwists={
  left:new Quaternion().setFromAxisAngle(localAxis,Math.PI/2),
  right:new Quaternion().setFromAxisAngle(localAxis,-Math.PI/2),
};
const worldYaw=new Quaternion(), offset=new Vector3();

// main.js sends target (mesh origin) to locomotion.js. The solver adds the
// same rotated palmCenter before sweeping the hull from physics.js.
export function placeTrackedPalm(hand,transform,drop,yaw,rigPosition){
  const p=transform.position, q=transform.orientation;
  hand.gripPosition.set(p.x,p.y-drop,p.z).applyAxisAngle(up,yaw).add(rigPosition);
  hand.controllerRotation.set(q.x,q.y,q.z,q.w).premultiply(worldYaw.setFromAxisAngle(up,yaw));
  hand.mesh.quaternion.copy(hand.controllerRotation).multiply(wristTwists[hand.side]);
  hand.target.copy(hand.gripPosition).sub(offset.copy(palmCenter).applyQuaternion(hand.mesh.quaternion));
}

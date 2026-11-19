import {Euler,MathUtils,Vector3,Quaternion} from 'three';

// Both end handles use the same axis name. The start point identifies the side.
export function scaleHandleSigns(axis,worldOffset,worldRotation){
  const local=worldOffset.clone().applyQuaternion(worldRotation.clone().invert());
  return ['x','y','z'].map(key=>axis?.includes(key.toUpperCase())&&local[key]<-1e-6?-1:1);
}

// Moving one handle preserves the opposite face. Ctrl keeps the centre fixed.
export function resizedCenter(original,next,symmetric=false,sides=[1,1,1]){
  if(symmetric)return {x:original.x,y:original.y,z:original.z};
  const delta=new Vector3(
    sides[0]*(next.w-original.w)/2,
    original.terrain?0:sides[1]*(next.h-original.h)/2,
    sides[2]*(next.d-original.d)/2
  );
  delta.applyEuler(new Euler(
    MathUtils.degToRad(original.pitch),
    MathUtils.degToRad(original.yaw),
    MathUtils.degToRad(original.roll??0),'YXZ'
  ));
  return {x:original.x+delta.x,y:original.y+delta.y,z:original.z+delta.z};
}


// Apply the world-space gizmo to a frozen pose, so each pointer event is
// independent of previous events. The saved format stores only TRS.
export function modelGroupTransform(parts, before, after, bounds, symmetric){
  const offset=symmetric?new Vector3():bounds.clone().multiply(new Vector3(1,1,1).sub(after.scale));
  return parts.map(part=>{
    const rotation=new Quaternion().setFromEuler(new Euler(...part.rotation.map(MathUtils.degToRad),'ZYX'));
    const scale=part.scale.map((value,axis)=>
      value*new Vector3().setComponent(axis,1).applyQuaternion(rotation).multiply(after.scale).length());
    const position=new Vector3().fromArray(part.position).sub(before)
      .multiply(after.scale).add(offset).applyQuaternion(after.quaternion).add(after.position).toArray();
    rotation.premultiply(after.quaternion);
    const euler=new Euler().setFromQuaternion(rotation,'ZYX');
    return {position,rotation:[euler.x,euler.y,euler.z].map(MathUtils.radToDeg),scale};
  });
}

export function modelFacePosition(position,rotation,minimum,startScale,endScale,symmetric){
  const shift=symmetric?new Vector3():minimum.clone().multiply(startScale.clone().sub(endScale));
  return shift.applyQuaternion(rotation).add(position);
}

import {Euler,MathUtils,Vector3} from 'three';

// Three TransformControls exposes the positive-axis scale handle.
// Without Ctrl, moving this handle preserves the opposite face. Ctrl keeps
// the centre fixed and scales both faces. Works for rotated decor as well.
export function resizedCenter(original,next,symmetric=false){
  if(symmetric)return {x:original.x,y:original.y,z:original.z};
  const delta=new Vector3(
    (next.w-original.w)/2,
    original.terrain?0:(next.h-original.h)/2,
    (next.d-original.d)/2
  );
  delta.applyEuler(new Euler(
    MathUtils.degToRad(original.pitch),
    MathUtils.degToRad(original.yaw),
    MathUtils.degToRad(original.roll??0),'YXZ'
  ));
  return {x:original.x+delta.x,y:original.y+delta.y,z:original.z+delta.z};
}

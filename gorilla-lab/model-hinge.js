import * as T from 'three';

const axis=new T.Vector3(0,1,0);
const finite=(value,fallback,min,max)=>Number.isFinite(value)?T.MathUtils.clamp(value,min,max):fallback;

export function normalizeHinge(value){
  if(!Array.isArray(value?.pivot)||value.pivot.length!==3)return null;
  const mode=value.mode==='slide'||value.mode==='screw'?value.mode:null;
  const direction=value.axis==='x'||value.axis==='z'?value.axis:null;
  return {
    ...(mode?{mode,travel:finite(value.travel,1,-16,16)}:{}),
    ...(direction?{axis:direction}:{}),
    pivot:value.pivot.map(component=>finite(component,0,-6,6)),
    closed:finite(value.closed,0,-180,180),
    open:finite(value.open,95,-180,180),
    seconds:finite(value.seconds,.7,.1,6),
  };
}

export function hingeAngle(hinge,progress){
  return T.MathUtils.degToRad(T.MathUtils.lerp(hinge.closed,hinge.open,T.MathUtils.smoothstep(progress,0,1)));
}

export function applyHinge(mesh,pivot,basePosition,baseRotation,angle){
  mesh.quaternion.setFromAxisAngle(axis,angle);
  mesh.position.copy(basePosition).sub(pivot).applyQuaternion(mesh.quaternion).add(pivot);
  mesh.quaternion.multiply(baseRotation);
}

const mechanismAxis=new T.Vector3();
export function applyMechanism(mesh,pivot,basePosition,baseRotation,config,progress,distanceScale=1){
  const along=config.axis==='x'?0:config.axis==='z'?2:1;
  mechanismAxis.set(0,0,0).setComponent(along,1);
  const angle=config.mode==='slide'?0:hingeAngle(config,progress);
  mesh.quaternion.setFromAxisAngle(mechanismAxis,angle);
  mesh.position.copy(basePosition).sub(pivot).applyQuaternion(mesh.quaternion).add(pivot);
  if(config.mode)mesh.position.addScaledVector(mechanismAxis,config.travel*distanceScale*T.MathUtils.smoothstep(progress,0,1));
  mesh.quaternion.multiply(baseRotation);
}

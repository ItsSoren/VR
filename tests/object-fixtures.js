import * as T from 'three';
import {ConvexGeometry} from 'three/addons/geometries/ConvexGeometry.js';
import {colliderFor,boxCollider} from '../gorilla-lab/physics.js';
export function phoneBody(x=0,y=.5,z=0){
  const outline=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]];
  const geo=new ConvexGeometry([-.0152,.0117].flatMap(z=>outline.map(([x,y])=>new T.Vector3(x,y,z))));
  const shape=colliderFor(geo),mesh=new T.Object3D();geo.dispose();
  mesh.position.set(x,y,z);mesh.rotation.x=Math.PI/2;
  return {mesh,shape,radius:shape.radius,mass:.23,velocity:new T.Vector3(),angular:new T.Vector3(),owner:null,frozen:false,collidable:true,friction:.8,start:mesh.position.clone(),startRotation:mesh.quaternion.clone(),beforePhysics:mesh.position.clone()};
}
export function floorBox(){
  const half=new T.Vector3(20,.5,20);
  const mesh=new T.Object3D();mesh.position.set(0,-.5,0);
  return {mesh,position:mesh.position,quaternion:mesh.quaternion,half,min:half.clone().negate(),friction:.8,shape:boxCollider(half)};
}

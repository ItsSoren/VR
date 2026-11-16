import * as T from 'three';

// Profile in side view: the first coordinate is depth along the barrel.
export function gunProfile(points,width){
  const profile=new T.Shape();
  points.forEach(([z,y],i)=>i===0?profile.moveTo(-z,y):profile.lineTo(-z,y));
  profile.closePath();
  return new T.ExtrudeGeometry(profile,{depth:width,bevelEnabled:false})
    .translate(0,0,-width/2).rotateY(Math.PI/2);
}

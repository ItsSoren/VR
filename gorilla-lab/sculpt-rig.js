import * as T from 'three';
import {mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';
import {sculptJoints} from './sculpt-format.js';

export function sculptGeometry(base,vertices){
  const source=base==='cube'?new T.BoxGeometry(.9,1.25,.67,18,18,18):new T.IcosahedronGeometry(1,15);
  source.deleteAttribute('normal');
  source.deleteAttribute('uv');
  const geometry=mergeVertices(source,.00001);
  source.dispose();
  if(base==='sphere')geometry.scale(.46,.64,.34);
  geometry.translate(0,.68,0);
  if(vertices)geometry.attributes.position.array.set(vertices.map(n=>n/1000));
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}
export function sculptVertices(geometry){
  return Array.from(geometry.attributes.position.array,n=>Math.round(n*1000));
}
export function sculptRig(data){
  const geometry=sculptGeometry(data.base,data.vertices);
  const material=new T.MeshStandardMaterial({color:data.color,roughness:.86,side:T.DoubleSide});
  const mesh=new T.SkinnedMesh(geometry,material);
  mesh.frustumCulled=false;
  const pivots=data.pivots.map(point=>new T.Vector3(...point));
  const bones=sculptJoints.map((_,i)=>{
    const bone=new T.Bone();
    bone.position.copy(pivots[i]);
    return bone;
  });
  const segments=sculptJoints.map(([,parent],i)=>{
    if(parent<0)mesh.add(bones[i]);
    else{
      bones[parent].add(bones[i]);
      bones[i].position.sub(pivots[parent]);
    }
    const from=parent<0?pivots[0].clone().add(new T.Vector3(0,.19,0)):pivots[parent].clone().lerp(pivots[i],.55);
    return new T.Line3(from,pivots[i]);
  });
  const pos=geometry.attributes.position,indices=[],weights=[];
  const point=new T.Vector3(),near=new T.Vector3();
  for(let i=0;i<pos.count;i++){
    point.fromBufferAttribute(pos,i);
    const selected=segments.map((segment,j)=>[j,(segment.distanceSq()<1e-10?segment.end:segment.closestPointToPoint(point,true,near)).distanceToSquared(point)])
      .sort((a,b)=>a[1]-b[1]).slice(0,4);
    const strength=selected.map(([,dist])=>1/(.0018+dist)**2.6);
    const total=strength.reduce((a,b)=>a+b,0);
    for(let j=0;j<4;j++){indices.push(selected[j][0]);weights.push(strength[j]/total);}
  }
  geometry.setAttribute('skinIndex',new T.Uint16BufferAttribute(indices,4));
  geometry.setAttribute('skinWeight',new T.Float32BufferAttribute(weights,4));
  mesh.bind(new T.Skeleton(bones));
  return {mesh,bones,dispose(){mesh.removeFromParent();mesh.skeleton.dispose();geometry.dispose();material.dispose();}};
}
export function applySculptPose(rig,pose){
  for(const [i,bone] of rig.bones.entries())bone.rotation.set(...pose[i].map(T.MathUtils.degToRad));
}
export function playSculptClip(rig,frames,time,loop=true){
  if(!frames.length)return;
  const duration=frames.reduce((sum,frame)=>sum+frame.duration,0);
  time=loop?time%duration:Math.min(time,duration);
  for(const [i,frame] of frames.entries()){
    if(time>frame.duration&&i<frames.length-1){time-=frame.duration;continue;}
    const next=frames[loop?(i+1)%frames.length:Math.min(i+1,frames.length-1)];
    const t=T.MathUtils.smoothstep(time/frame.duration,0,1);
    for(const [j,bone] of rig.bones.entries())bone.rotation.set(...frame.pose[j].map((v,axis)=>
      T.MathUtils.degToRad(T.MathUtils.lerp(v,next.pose[j][axis],t))));
    return;
  }
}

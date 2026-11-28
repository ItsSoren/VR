import * as T from 'three';
import {maxSculptVertices} from './sculpt-format.js';

export function sculptNeighbors(geometry){
  const indices=geometry.index.array;
  const links=Array.from({length:geometry.attributes.position.count},()=>new Set());
  for(let i=0;i<indices.length;i+=3){
    for(let j=0;j<3;j++){
      const a=indices[i+j],b=indices[i+(j+1)%3];
      links[a].add(b);links[b].add(a);
    }
  }
  return links.map(link=>Array.from(link));
}

export function refineSculpt(geometry,centers,radius,spacing){
  const pos=geometry.attributes.position,index=geometry.index.array;
  const midpoint=new Map(),triangle=new T.Triangle(),nearest=new T.Vector3();
  const positions=Array.from(pos.array),indices=[];
  const edgeKey=(a,b)=>Math.min(a,b)*maxSculptVertices+Math.max(a,b);
  function split(a,b,pa,pb){
    if(pa.distanceToSquared(pb)<spacing*spacing||positions.length>=maxSculptVertices*3)return;
    const key=edgeKey(a,b);
    if(midpoint.has(key))return;
    midpoint.set(key,positions.length/3);
    positions.push((pa.x+pb.x)/2,(pa.y+pb.y)/2,(pa.z+pb.z)/2);
  }
  for(let i=0;i<index.length;i+=3){
    const a=index[i],b=index[i+1],c=index[i+2];
    triangle.a.fromBufferAttribute(pos,a);triangle.b.fromBufferAttribute(pos,b);triangle.c.fromBufferAttribute(pos,c);
    if(!centers.some(center=>triangle.closestPointToPoint(center,nearest).distanceToSquared(center)<radius*radius))continue;
    split(a,b,triangle.a,triangle.b);split(b,c,triangle.b,triangle.c);split(c,a,triangle.c,triangle.a);
  }
  if(!midpoint.size)return false;
  for(let i=0;i<index.length;i+=3){
    let a=index[i],b=index[i+1],c=index[i+2];
    let ab=midpoint.get(edgeKey(a,b)),bc=midpoint.get(edgeKey(b,c)),ca=midpoint.get(edgeKey(c,a));
    const count=Number(ab!==undefined)+Number(bc!==undefined)+Number(ca!==undefined);
    if(!count){indices.push(a,b,c);continue;}
    if(count===3){indices.push(a,ab,ca,ab,b,bc,bc,c,ca,ab,bc,ca);continue;}
    // Rotate until AB is split and BC has the second split, when present.
    while(ab===undefined||(count===2&&bc===undefined)){
      [a,b,c]=[b,c,a];[ab,bc,ca]=[bc,ca,ab];
    }
    if(count===1)indices.push(a,ab,c,ab,b,c);
    else indices.push(ab,b,bc,a,ab,c,ab,bc,c);
  }
  // Release buffers for the old attributes before replacing the topology.
  geometry.dispose();
  geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));
  geometry.deleteAttribute('normal');
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return true;
}

export function sculptInfluence(pos,adjacency,center,radius,seeds){
  const point=new T.Vector3(),queue=[],seen=new Uint8Array(pos.length/3),weights=[];
  if(seeds?.length)queue.push(...seeds);
  else{
    let nearest=Infinity,seed=-1;
    for(let i=0;i<seen.length;i++){
      const dist=point.fromArray(pos,i*3).distanceToSquared(center);
      if(dist<nearest){nearest=dist;seed=i;}
    }
    if(seed>=0)queue.push(seed);
  }
  for(let i=0;i<queue.length;i++){
    const id=queue[i];
    if(seen[id])continue;
    seen[id]=1;
    const distance=point.fromArray(pos,id*3).distanceTo(center);
    if(distance>=radius)continue;
    weights.push([id,1-T.MathUtils.smoothstep(distance,0,radius)]);
    for(const next of adjacency[id])if(!seen[next])queue.push(next);
  }
  return weights;
}

export function shapeSculpt(pos,original,normals,adjacency,weights,center,tool,translation,strength,mirror=false){
  const point=new T.Vector3(),vector=new T.Vector3();
  for(const [id,weight] of weights){
    const at=id*3;
    point.fromArray(original,at);
    if(tool==='grab'||tool==='hook'){
      vector.copy(translation);
      if(mirror)vector.x*=-1;
      point.addScaledVector(vector,weight*strength);
    }else if(tool==='smooth'){
      vector.set(0,0,0);
      for(const next of adjacency[id]){
        vector.x+=original[next*3];vector.y+=original[next*3+1];vector.z+=original[next*3+2];
      }
      point.lerp(vector.multiplyScalar(1/adjacency[id].length),Math.min(1,strength)*weight);
    }else if(tool==='pinch'){
      vector.subVectors(center,point);
      point.addScaledVector(vector,strength*weight);
    }else{
      point.addScaledVector(vector.fromArray(normals,at),strength*weight);
    }
    point.clampScalar(-3,3).toArray(pos,at);
  }
}

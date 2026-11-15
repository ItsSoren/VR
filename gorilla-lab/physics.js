
import * as T from 'three';

const qInv=new T.Quaternion(), local=new T.Vector3(), closest=new T.Vector3();
export function penetration(position,radius,box,normal) {
  qInv.copy(box.quaternion).invert();
  local.copy(position).sub(box.position).applyQuaternion(qInv);
  const h=box.half;
  closest.copy(local).clamp(box.min,h);
  normal.subVectors(local,closest);
  const d=normal.length();
  if(d>=radius) return 0;
  if(d>1e-6) {
    normal.multiplyScalar(1/d).applyQuaternion(box.quaternion);
    return radius-d;
  }
  const x=h.x-Math.abs(local.x),y=h.y-Math.abs(local.y),z=h.z-Math.abs(local.z);
  if(x<=y&&x<=z) normal.set(Math.sign(local.x)||1,0,0);
  else if(y<=z) normal.set(0,Math.sign(local.y)||1,0);
  else normal.set(0,0,Math.sign(local.z)||1);
  normal.applyQuaternion(box.quaternion);
  return radius+Math.min(x,y,z);
}

const normal=new T.Vector3(), tangent=new T.Vector3(), correction=new T.Vector3();
export function solve(position,radius,boxes,velocity,bounce=0,drag=0,dt=0) {
  let floor=false;
  for(let pass=0;pass<3;pass++) {
    for(const box of boxes) {
      const depth=penetration(position,radius,box,normal);
      if(!depth) continue;
      position.addScaledVector(normal,depth+.0001);
      if(normal.y>.65) floor=true;
      if(!velocity) continue;
      const vn=velocity.dot(normal);
      if(vn<0) velocity.addScaledVector(normal,-vn*(Math.abs(vn)<.55?1:1+bounce));
      tangent.copy(velocity).addScaledVector(normal,-velocity.dot(normal));
      velocity.addScaledVector(tangent,-Math.min(.95,drag*box.friction*dt));
    }
  }
  return floor;
}
const sample=new T.Vector3();
export function handContact(from,to,radius,boxes,out,hitNormal) {
  const steps=Math.min(24,Math.max(1,Math.ceil(from.distanceTo(to)/(.65*radius))));
  for(let i=1;i<=steps;i++) {
    sample.copy(from).lerp(to,i/steps);
    for(const box of boxes) {
      const depth=penetration(sample,radius,box,normal);
      if(depth) {
        out.copy(sample).addScaledVector(normal,depth+.001); hitNormal.copy(normal);
        return box;
      }
    }
  }
  return null;
}


const probePoint=new T.Vector3(), contact=new T.Vector3(), lever=new T.Vector3();
const angular=new T.Vector3(), supportAxis=new T.Vector3(), angularImpulse=new T.Vector3();
const triangle=new T.Triangle(), nearestPoint=new T.Vector3();
export function colliderFor(geometry,sphereRadius=0) {
  const positions=geometry.attributes.position;
  const vertices=[], faces=[], keys=new Set();
  for(let i=0;i<positions.count;i++){
    const p=new T.Vector3().fromBufferAttribute(positions,i);
    const key=p.toArray().map(n=>n.toFixed(5)).join(',');
    if(!keys.has(key)){keys.add(key);vertices.push(p);}
  }
  for(let i=0;i<(geometry.index?.count??positions.count);i+=3) {
    const at=n=>new T.Vector3().fromBufferAttribute(positions,geometry.index?geometry.index.getX(n):n);
    const a=at(i),b=at(i+1),c=at(i+2);
    const n=new T.Triangle(a,b,c).getNormal(new T.Vector3());
    if(n.lengthSq()>.1)faces.push({a,b,c,n});
  }
  const radius=sphereRadius||Math.max(...vertices.map(v=>v.length()));
  return {vertices,faces,sphereRadius,radius};
}
export function distanceToObject(point,body){
  const {mesh,shape}=body;
  if(shape.sphereRadius)return Math.max(0,point.distanceTo(mesh.position)-shape.sphereRadius);
  qInv.copy(mesh.quaternion).invert();
  local.copy(point).sub(mesh.position).applyQuaternion(qInv);
  if(shape.faces.every(f=>f.n.dot(probePoint.subVectors(local,f.a))<=.0001))return 0;
  let distance=Infinity;
  for(const {a,b,c} of shape.faces) {
    triangle.set(a,b,c).closestPointToPoint(local,nearestPoint);
    distance=Math.min(distance,local.distanceToSquared(nearestPoint));
  }
  return Math.sqrt(distance);
}
function shapeContact(body,box,outNormal,outPoint) {
  const {mesh,shape}=body;
  if(shape.sphereRadius){
    const amount=penetration(mesh.position,shape.sphereRadius,box,outNormal);
    outPoint.copy(mesh.position).addScaledVector(outNormal,-shape.sphereRadius);
    return amount;
  }
  qInv.copy(box.quaternion).invert();
  local.copy(mesh.position).sub(box.position).applyQuaternion(qInv);
  closest.copy(local).clamp(box.min,box.half);
  if(local.distanceToSquared(closest)>shape.radius*shape.radius)return 0;
  let deepest=0, matches=0;
  for(const vertex of shape.vertices){
    probePoint.copy(vertex).applyQuaternion(mesh.quaternion).add(mesh.position);
    const depth=penetration(probePoint,.007,box,supportAxis);
    if(depth<=0)continue;
    if(depth>deepest+.003 || !matches){
      deepest=depth;matches=1;
      outPoint.copy(probePoint);outNormal.copy(supportAxis);
    }else if(Math.abs(depth-deepest)<.003&&supportAxis.dot(outNormal)>.98){
      outPoint.lerp(probePoint,1/(++matches));
      deepest=Math.max(deepest,depth);
    }
  }
  return deepest;
}
export function placeObject(body,boxes){
  for(let pass=0;pass<2;pass++) for(const box of boxes){
    const depth=shapeContact(body,box,normal,contact);
    if(depth>0)body.mesh.position.addScaledVector(normal,depth);
  }
}
function againstArena(body,boxes,rebound,dt){
  let grounded=false;
  for(let pass=0;pass<2;pass++) for(const box of boxes){
    const depth=shapeContact(body,box,normal,contact);
    if(depth<=0)continue;
    body.mesh.position.addScaledVector(normal,depth);
    grounded ||= normal.y>.57;
    lever.copy(contact).sub(body.mesh.position);
    angular.crossVectors(body.angular,lever).add(body.velocity);
    const vn=angular.dot(normal);
    if(vn>=0)continue;
    const invInertia=1/Math.max(.002,body.shape.radius**2*.45);
    angularImpulse.crossVectors(lever,normal);
    const j=-vn*(Math.abs(vn)>.8?1+rebound:1)/(1+angularImpulse.lengthSq()*invInertia);
    body.velocity.addScaledVector(normal,j);
    body.angular.addScaledVector(angularImpulse,j*invInertia);
    tangent.copy(angular).addScaledVector(normal,-vn);
    if(tangent.lengthSq()>.000001){
      const speed=tangent.length();
      tangent.multiplyScalar(1/speed);
      angularImpulse.crossVectors(lever,tangent);
      const friction=Math.min(j*box.friction*.62,speed/(1+angularImpulse.lengthSq()*invInertia));
      body.velocity.addScaledVector(tangent,-friction);
      body.angular.addScaledVector(angularImpulse,-friction*invInertia);
    }
  }
  if(grounded){
    body.angular.multiplyScalar(Math.exp(-dt*(body.shape.sphereRadius?.22:2.1)));
    if(body.shape.sphereRadius){body.velocity.x*=Math.exp(-dt*.21);body.velocity.z*=Math.exp(-dt*.21);}
    else if(body.velocity.lengthSq()<.004&&body.angular.lengthSq()<.018){body.velocity.set(0,0,0);body.angular.set(0,0,0);}
  }
}
function support(body,direction){
  if(body.shape.sphereRadius)return body.shape.sphereRadius;
  qInv.copy(body.mesh.quaternion).invert();
  supportAxis.copy(direction).applyQuaternion(qInv);
  let extent=-Infinity;
  for(const vertex of body.shape.vertices)extent=Math.max(extent,vertex.dot(supportAxis));
  return extent;
}
export function solveObjects(objects,boxes,dt,gravity,rebound,surfaceAt) {
  const count=Math.max(1,Math.ceil(dt/.006));
  const step=dt/count;
  for(let k=0;k<count;k++) {
    for(const body of objects) {
      if(body.owner || !body.mesh.visible) continue;
      body.velocity.y-=gravity*step*(surfaceAt(body.mesh.position)?.gravity??1);
      body.mesh.position.addScaledVector(body.velocity,step);
      const speed=body.angular.length();
      if(speed>.0001)body.mesh.rotateOnWorldAxis(angular.copy(body.angular).multiplyScalar(1/speed),Math.min(speed,30)*step);
      againstArena(body,boxes,rebound,step);
    }
    const ordered=objects.filter(o=>o.mesh.visible).sort((a,b)=>a.mesh.position.x-b.mesh.position.x);
    for(let i=0;i<ordered.length;i++) for(let j=i+1;j<ordered.length;j++) {
      const a=ordered[i], b=ordered[j];
      if(b.mesh.position.x-a.mesh.position.x>a.radius+.46)break;
      if(a.owner&&b.owner)continue;
      correction.subVectors(b.mesh.position,a.mesh.position);
      const d=correction.length();
      if(d>=a.radius+b.radius||d<.0001)continue;
      correction.multiplyScalar(1/d);
      const overlap=support(a,correction)+support(b,angular.copy(correction).negate())-d;
      if(overlap<=0)continue;
      const ia=a.owner?0:1/a.mass,ib=b.owner?0:1/b.mass,total=ia+ib;
      a.mesh.position.addScaledVector(correction,-overlap*ia/total);
      b.mesh.position.addScaledVector(correction,overlap*ib/total);
      const relative=tangent.subVectors(b.velocity,a.velocity).dot(correction);
      if(relative<0){
        const impulse=-relative*(1+rebound)/total;
        a.velocity.addScaledVector(correction,-impulse*ia);
        b.velocity.addScaledVector(correction,impulse*ib);
      }
    }
  }
}


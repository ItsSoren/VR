
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
export function solveObjects(objects,boxes,dt,gravity,rebound,surfaceAt) {
  const count=Math.max(1,Math.ceil(dt/.008));
  const step=dt/count;
  for(let k=0;k<count;k++) {
    for(const body of objects) {
      if(body.owner || !body.mesh.visible) continue;
      body.velocity.y-=gravity*step*(surfaceAt(body.mesh.position)?.gravity??1);
      body.mesh.position.addScaledVector(body.velocity,step);
      const grounded=solve(body.mesh.position,body.radius,boxes,body.velocity,rebound,4,step);
      body.mesh.rotateOnWorldAxis(body.axis,body.spin*step);
      body.spin*=Math.exp(-step*(grounded?3:.15));
    }
    for(let i=0;i<objects.length;i++) for(let j=i+1;j<objects.length;j++) {
      const a=objects[i], b=objects[j];
      if(!a.mesh.visible || !b.mesh.visible || (a.owner&&b.owner)) continue;
      correction.subVectors(b.mesh.position,a.mesh.position);
      const d=correction.length(), overlap=a.radius+b.radius-d;
      if(overlap<=0||d<.0001) continue;
      correction.multiplyScalar(1/d);
      const ia=a.owner?0:1/a.mass,ib=b.owner?0:1/b.mass,total=ia+ib;
      a.mesh.position.addScaledVector(correction,-overlap*ia/total);
      b.mesh.position.addScaledVector(correction,overlap*ib/total);
      const relative=tangent.subVectors(b.velocity,a.velocity).dot(correction);
      if(relative<0) {
        const impulse=-relative*(1+rebound)/total;
        a.velocity.addScaledVector(correction,-impulse*ia);
        b.velocity.addScaledVector(correction,impulse*ib);
      }
    }
  }
}



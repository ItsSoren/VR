
import * as T from 'three';

const qInv=new T.Quaternion(), local=new T.Vector3(), closest=new T.Vector3();
const boundsRotation=new T.Matrix4();
function boundsFor(box){
  if(box.heightfield||box.objectBody)return null;
  if(box.bounds)return box.bounds;
  const m=boundsRotation.makeRotationFromQuaternion(box.quaternion).elements;
  const h=box.half,p=box.position;
  const x=Math.abs(m[0])*h.x+Math.abs(m[4])*h.y+Math.abs(m[8])*h.z;
  const y=Math.abs(m[1])*h.x+Math.abs(m[5])*h.y+Math.abs(m[9])*h.z;
  const z=Math.abs(m[2])*h.x+Math.abs(m[6])*h.y+Math.abs(m[10])*h.z;
  return box.bounds={minX:p.x-x,maxX:p.x+x,minY:p.y-y,maxY:p.y+y,minZ:p.z-z,maxZ:p.z+z};
}
function nearBox(point,radius,box){
  const b=boundsFor(box);
  return !b||(point.x+radius>=b.minX&&point.x-radius<=b.maxX&&point.y+radius>=b.minY&&point.y-radius<=b.maxY&&point.z+radius>=b.minZ&&point.z-radius<=b.maxZ);
}
export function penetration(position,radius,box,normal) {
  if(box.heightfield)return heightContact(position,radius,box,normal);
  if(box.objectBody)return objectPenetration(position,radius,box.objectBody,normal);
  if(!nearBox(position,radius,box))return 0;
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
const sample=new T.Vector3(), sweepCandidates=[];
export function handContact(from,to,radius,boxes,out,hitNormal) {
  const steps=Math.min(24,Math.max(1,Math.ceil(from.distanceTo(to)/(.65*radius))));
  sweepCandidates.length=0;
  const x0=Math.min(from.x,to.x)-radius,x1=Math.max(from.x,to.x)+radius;
  const y0=Math.min(from.y,to.y)-radius,y1=Math.max(from.y,to.y)+radius;
  const z0=Math.min(from.z,to.z)-radius,z1=Math.max(from.z,to.z)+radius;
  for(const box of boxes){const b=boundsFor(box);if(!b||x1>=b.minX&&x0<=b.maxX&&y1>=b.minY&&y0<=b.maxY&&z1>=b.minZ&&z0<=b.maxZ)sweepCandidates.push(box); }
  for(let i=1;i<=steps;i++) {
    sample.copy(from).lerp(to,i/steps);
    for(const box of sweepCandidates) {
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
  const unique=list=>{
    const result=[];
    for(const direction of list)if(direction.lengthSq()>.5&&!result.some(n=>Math.abs(n.dot(direction))>.9999))result.push(direction);
    return result;
  };
  return {vertices,faces,sphereRadius,radius,
    normals:sphereRadius?[]:unique(faces.map(f=>f.n)),
    edges:sphereRadius?[]:unique(faces.flatMap(f=>[
      new T.Vector3().subVectors(f.b,f.a).normalize(),
      new T.Vector3().subVectors(f.c,f.b).normalize(),
      new T.Vector3().subVectors(f.a,f.c).normalize(),
    ])),
  };
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
function vertexContact(body,box,outNormal,outPoint) {
  const {mesh,shape}=body;
  if(shape.sphereRadius){
    const amount=penetration(mesh.position,shape.sphereRadius,box,outNormal);
    outPoint.copy(mesh.position).addScaledVector(outNormal,-shape.sphereRadius);
    return amount;
  }
  if(!box.heightfield){
    qInv.copy(box.quaternion).invert();
    local.copy(mesh.position).sub(box.position).applyQuaternion(qInv);
    closest.copy(local).clamp(box.min,box.half);
    if(local.distanceToSquared(closest)>shape.radius*shape.radius)return 0;
  }
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
const satAxis=new T.Vector3(), satCross=new T.Vector3(), satPoint=new T.Vector3();
const separating=new T.Vector3(), reverseAxis=new T.Vector3();
export function boxCollider(half) {
  return colliderFor(new T.BoxGeometry(half.x*2,half.y*2,half.z*2));
}
function sat(a,b,out) {
  const d=separating.subVectors(a.mesh.position,b.mesh.position);
  let best=Infinity;
  function axisTest(axis){
    if(axis.lengthSq()<.00001)return true;
    axis.normalize();
    const center=d.dot(axis);
    const reverse=reverseAxis.copy(axis).negate();
    const towardPositive=support(a,reverse)+support(b,axis)-center;
    const towardNegative=support(a,axis)+support(b,reverse)+center;
    if(towardPositive<=0||towardNegative<=0)return false;
    if(Math.min(towardPositive,towardNegative)<best){
      best=Math.min(towardPositive,towardNegative);
      out.copy(axis).multiplyScalar(towardPositive<towardNegative?1:-1);
    }
    return true;
  }
  for(const n of a.shape.normals)if(!axisTest(satAxis.copy(n).applyQuaternion(a.mesh.quaternion)))return 0;
  for(const n of b.shape.normals)if(!axisTest(satAxis.copy(n).applyQuaternion(b.mesh.quaternion)))return 0;
  for(const ae of a.shape.edges){
    satPoint.copy(ae).applyQuaternion(a.mesh.quaternion);
    for(const be of b.shape.edges)if(!axisTest(satAxis.copy(be).applyQuaternion(b.mesh.quaternion).cross(satPoint)))return 0;
  }
  if(a.shape.sphereRadius||b.shape.sphereRadius){
    if(!axisTest(satCross.copy(d)))return 0;
    const ball=a.shape.sphereRadius?a:b, hull=ball===a?b:a;
    if(!hull.shape.sphereRadius){
      let distance=Infinity;
      qInv.copy(hull.mesh.quaternion).invert();
      local.copy(ball.mesh.position).sub(hull.mesh.position).applyQuaternion(qInv);
      for(const {a,b,c} of hull.shape.faces){
        triangle.set(a,b,c).closestPointToPoint(local,nearestPoint);
        const dd=local.distanceToSquared(nearestPoint);
        if(dd<distance){distance=dd;satPoint.copy(nearestPoint);}
      }
      if(!axisTest(satAxis.subVectors(local,satPoint).applyQuaternion(hull.mesh.quaternion)))return 0;
    }
  }
  return Number.isFinite(best)?best:0;
}
const lastShapePoint=new T.Vector3();
function shapeContact(body,box,outNormal,outPoint) {
  if(!body.precise||body.shape.sphereRadius||!box.shape||box.heightfield)return vertexContact(body,box,outNormal,outPoint);
  qInv.copy(box.quaternion).invert();
  local.copy(body.mesh.position).sub(box.position).applyQuaternion(qInv);
  if(local.distanceToSquared(closest.copy(local).clamp(box.min,box.half))>body.radius**2)return 0;
  const depth=sat(body,box,outNormal);
  if(!depth)return 0;
  let lowest=Infinity,count=0;
  for(const vertex of body.shape.vertices){
    lastShapePoint.copy(vertex).applyQuaternion(body.mesh.quaternion).add(body.mesh.position);
    const value=lastShapePoint.dot(outNormal);
    if(value<lowest-.003){lowest=value;count=1;outPoint.copy(lastShapePoint);}
    else if(value<lowest+.003)outPoint.lerp(lastShapePoint,1/(++count));
  }
  return depth;
}
const palmHull=colliderFor(new T.OctahedronGeometry(1,0).scale(.055,.033,.075));
const palmBody={mesh:{position:new T.Vector3(),quaternion:new T.Quaternion()},shape:palmHull,radius:palmHull.radius,precise:true};
const palmPoint=new T.Vector3();
export function palmContact(from,to,rotation,boxes,out,hitNormal){
  const steps=Math.min(48,Math.max(1,Math.ceil(from.distanceTo(to)/.021)));
  const r=palmHull.radius;
  sweepCandidates.length=0;
  for(const box of boxes){
    const b=boundsFor(box);
    if(b&&(Math.max(from.x,to.x)+r<b.minX||Math.min(from.x,to.x)-r>b.maxX
      ||Math.max(from.y,to.y)+r<b.minY||Math.min(from.y,to.y)-r>b.maxY
      ||Math.max(from.z,to.z)+r<b.minZ||Math.min(from.z,to.z)-r>b.maxZ))continue;
    sweepCandidates.push(box);
  }
  palmBody.mesh.quaternion.copy(rotation);
  const center=palmBody.mesh.position;
  for(let i=1;i<=steps;i++){
    center.lerpVectors(from,to,i/steps);
    for(const box of sweepCandidates){
      const object=box.objectBody;
      if(object&&(object.owner||center.distanceToSquared(object.mesh.position)>(r+object.radius)**2))continue;
      const depth=object?sat(palmBody,object,normal):shapeContact(palmBody,box,normal,palmPoint);
      if(depth>0){
        out.copy(center).addScaledVector(normal,depth+.0005);
        hitNormal.copy(normal);
        return box;
      }
    }
  }
  return null;
}

export function placeObject(body,boxes){
  for(let pass=0;pass<2;pass++) for(const box of boxes){
    if(!nearBox(body.mesh.position,body.radius,box))continue;
    const depth=shapeContact(body,box,normal,contact);
    if(depth>0)body.mesh.position.addScaledVector(normal,depth);
  }
}
function againstArena(body,boxes,rebound,dt){
  let grounded=false;
  for(let pass=0;pass<2;pass++) for(const box of boxes){
    if(!nearBox(body.mesh.position,body.radius,box))continue;
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
    const j=-vn*(Math.abs(vn)>.8?1+Math.min(.98,rebound*(box.bounce??1)):1)/(1+angularImpulse.lengthSq()*invInertia);
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
      if(body.owner || body.frozen || !body.mesh.visible) continue;
      body.velocity.y-=gravity*step*(surfaceAt(body.mesh.position)?.gravity??1);
      body.mesh.position.addScaledVector(body.velocity,step);
      const speed=body.angular.length();
      if(speed>.0001)body.mesh.rotateOnWorldAxis(angular.copy(body.angular).multiplyScalar(1/speed),Math.min(speed,30)*step);
      againstArena(body,boxes,rebound,step);
    }
    const ordered=objects.filter(o=>o.mesh.visible).sort((a,b)=>a.mesh.position.x-b.mesh.position.x);
    const largest=ordered.reduce((max,body)=>Math.max(max,body.radius),0);
    for(let i=0;i<ordered.length;i++) for(let j=i+1;j<ordered.length;j++) {
      const a=ordered[i], b=ordered[j];
      if(b.mesh.position.x-a.mesh.position.x>a.radius+largest)break;
      if((a.owner||a.frozen)&&(b.owner||b.frozen))continue;
      correction.subVectors(b.mesh.position,a.mesh.position);
      const d=correction.length();
      if(d>=a.radius+b.radius||d<.0001)continue;
      correction.multiplyScalar(1/d);
      const precise=a.precise||b.precise;
      const overlap=precise?sat(a,b,normal):support(a,correction)+support(b,angular.copy(correction).negate())-d;
      if(precise)correction.copy(normal).negate();
      if(overlap<=0)continue;
      const ia=a.owner||a.frozen?0:1/a.mass,ib=b.owner||b.frozen?0:1/b.mass,total=ia+ib;
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


function heightContact(p,radius,field,out) {
  if(p.x<field.xMin||p.x>field.xMax||p.z<field.zMin||p.z>field.zMax)return 0;
  const h=field.height(p.x,p.z);
  if(p.y-h>=radius*1.6)return 0;
  const eps=.045;
  const dx=(field.height(p.x+eps,p.z)-field.height(p.x-eps,p.z))/(2*eps);
  const dz=(field.height(p.x,p.z+eps)-field.height(p.x,p.z-eps))/(2*eps);
  out.set(-dx,1,-dz).normalize();
  return Math.max(0,radius-(p.y-h)*out.y);
}

const playerProbe={mesh:{position:null,quaternion:new T.Quaternion()},shape:{sphereRadius:0,normals:[],edges:[]}};
function objectPenetration(position,radius,object,out){
  if(!object.blocksPlayer || object.owner || !object.mesh.visible)return 0;
  if(position.distanceToSquared(object.mesh.position)>(radius+object.radius)**2)return 0;
  playerProbe.mesh.position=position;
  playerProbe.shape.sphereRadius=radius;
  return sat(playerProbe,object,out);
}
export function playerObjectContact(position,radius,object,velocity){
  const depth=objectPenetration(position,radius,object,normal);
  if(depth<=0)return false;
  position.addScaledVector(normal,depth+.001);
  const inward=velocity.dot(normal);
  if(inward<0){
    velocity.addScaledVector(normal,-inward);
    if(Math.abs(normal.y)<.6)object.velocity.addScaledVector(normal,-Math.min(2.8,-inward*.24));
  }
  return true;
}



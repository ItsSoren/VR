
import * as T from 'three';
import {palmHalfExtent} from './hand-skin.js';

const qInv=new T.Quaternion(), local=new T.Vector3(), closest=new T.Vector3();
const boundsRotation=new T.Matrix4();
const boxBounds=new WeakMap();
function boundsFor(box){
  if(box.heightfield||box.objectBody)return null;
  const cached=boxBounds.get(box);
  if(cached?.position.equals(box.position)&&cached.quaternion.equals(box.quaternion)&&cached.half.equals(box.half))return cached.bounds;
  const m=boundsRotation.makeRotationFromQuaternion(box.quaternion).elements;
  const h=box.half,p=box.position;
  const x=Math.abs(m[0])*h.x+Math.abs(m[4])*h.y+Math.abs(m[8])*h.z;
  const y=Math.abs(m[1])*h.x+Math.abs(m[5])*h.y+Math.abs(m[9])*h.z;
  const z=Math.abs(m[2])*h.x+Math.abs(m[6])*h.y+Math.abs(m[10])*h.z;
  const bounds={minX:p.x-x,maxX:p.x+x,minY:p.y-y,maxY:p.y+y,minZ:p.z-z,maxZ:p.z+z};
  boxBounds.set(box,{bounds,position:p.clone(),quaternion:box.quaternion.clone(),half:h.clone()});
  return bounds;
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
  if(box.convex)return convexContact(radius,box,normal);
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

const normal=new T.Vector3(), tangent=new T.Vector3();
export function solve(position,radius,boxes,velocity,bounce=0,drag=0,dt=0,support=null) {
  let floor=false;
  for(let pass=0;pass<3;pass++) {
    for(const box of boxes) {
      const depth=penetration(position,radius,box,normal);
      if(!depth) continue;
      position.addScaledVector(normal,depth+.0001);
      // Walking support is separate from hand contact, which also accepts vertical walls.
      if(normal.y>=.62){
        floor=true;
        if(support&&normal.y>support.normal.y){support.normal.copy(normal);support.surface=box;}
      }
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


const probePoint=new T.Vector3(), contact=new T.Vector3(), supportAxis=new T.Vector3();
const triangle=new T.Triangle(), nearestPoint=new T.Vector3();
const hullCenter=new T.Vector3(), hullVector=new T.Vector3(), hullNormal=new T.Vector3(), hullClosest=new T.Vector3();
function convexContact(radius,box,out){
  const {faces,vertices}=box.shape;
  hullCenter.set(0,0,0);
  for(const v of vertices)hullCenter.add(v);
  hullCenter.multiplyScalar(1/vertices.length);
  let plane=-Infinity,distance=Infinity;
  for(const face of faces){
    hullNormal.copy(face.n);
    if(hullNormal.dot(hullVector.subVectors(hullCenter,face.a))>0)hullNormal.negate();
    const signed=hullNormal.dot(hullVector.subVectors(local,face.a));
    if(signed>plane){plane=signed;out.copy(hullNormal);}
    triangle.set(face.a,face.b,face.c).closestPointToPoint(local,nearestPoint);
    const ds=nearestPoint.distanceToSquared(local);
    if(ds<distance){distance=ds;hullClosest.copy(nearestPoint);}
  }
  if(plane<=0){out.applyQuaternion(box.quaternion);return radius-plane;}
  if(distance>=radius*radius)return 0;
  if(distance>1e-12)out.subVectors(local,hullClosest).multiplyScalar(1/Math.sqrt(distance));
  out.applyQuaternion(box.quaternion);
  return radius-Math.sqrt(distance);
}
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
  const {x,y,z}=new T.Box3().setFromPoints(vertices).getSize(new T.Vector3());
  // Use the solid sphere tensor or approximate a hull's tensor with its local bounds.
  const sphereInertia=Math.max(.0001,sphereRadius**2*.4);
  const inverseInertia=sphereRadius?new T.Vector3().setScalar(1/sphereInertia):new T.Vector3(
    12/Math.max(.001,y*y+z*z),
    12/Math.max(.001,x*x+z*z),
    12/Math.max(.001,x*x+y*y)
  );
  const thickness=sphereRadius?2*sphereRadius:Math.min(x,y,z);
  const unique=list=>{
    const result=[];
    for(const direction of list)if(direction.lengthSq()>.5&&!result.some(n=>Math.abs(n.dot(direction))>.9999))result.push(direction);
    return result;
  };
  return {vertices,faces,sphereRadius,radius,inverseInertia,thickness,
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
  if(box.heightfield&&mesh.position.x>=box.xMin&&mesh.position.x<=box.xMax&&mesh.position.z>=box.zMin&&mesh.position.z<=box.zMax){
    const height=box.height(mesh.position.x,mesh.position.z);
    // Resolve a downward crossing from the top even if the hull's vertices skipped the skin.
    if(body.previousY>height&&mesh.position.y<=height&&body.velocity?.y<0){
      floorNormal(box,mesh.position.x,mesh.position.z,outNormal);
      const extent=support(body,hullNormal.copy(outNormal).negate());
      outPoint.copy(mesh.position).addScaledVector(outNormal,-extent);
      return extent+(height-mesh.position.y)*outNormal.y;
    }
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
const separating=new T.Vector3();
const satInverseA=new T.Quaternion(),satInverseB=new T.Quaternion();
const projectionAxis=new T.Vector3(),projectionA={min:0,max:0},projectionB={min:0,max:0};
function projectShape(shape,axis,inverse,out){
  if(shape.sphereRadius){
    out.min=-shape.sphereRadius;
    out.max=shape.sphereRadius;
    return;
  }
  projectionAxis.copy(axis).applyQuaternion(inverse);
  let min=Infinity,max=-Infinity;
  for(const vertex of shape.vertices){
    const value=vertex.dot(projectionAxis);
    min=Math.min(min,value);
    max=Math.max(max,value);
  }
  out.min=min;out.max=max;
}
export function boxCollider(half) {
  return colliderFor(new T.BoxGeometry(half.x*2,half.y*2,half.z*2));
}
function sat(a,b,out) {
  const d=separating.subVectors(a.mesh.position,b.mesh.position);
  if(a.shape.sphereRadius&&b.shape.sphereRadius){
    const distance=d.length();
    if(distance>1e-8)out.copy(d).divideScalar(distance);
    else out.set(1,0,0);
    return Math.max(0,a.shape.sphereRadius+b.shape.sphereRadius-distance);
  }
  let best=Infinity;
  satInverseA.copy(a.mesh.quaternion).invert();
  satInverseB.copy(b.mesh.quaternion).invert();
  function axisTest(axis){
    if(axis.lengthSq()<.00001)return true;
    axis.normalize();
    const center=d.dot(axis);
    projectShape(a.shape,axis,satInverseA,projectionA);
    projectShape(b.shape,axis,satInverseB,projectionB);
    const towardPositive=projectionB.max-projectionA.min-center;
    const towardNegative=projectionA.max-projectionB.min+center;
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
const boxFace=new T.Vector3();
function singleFaceContact(body,box,outNormal){
  qInv.copy(box.quaternion).invert();
  local.copy(body.mesh.position).sub(box.position).applyQuaternion(qInv);
  let axis=-1;
  for(let i=0;i<3;i++){
    if(box.half.getComponent(i)-Math.abs(local.getComponent(i))>=body.radius)continue;
    if(axis>=0)return null;
    axis=i;
  }
  if(axis<0)return null;
  const position=local.getComponent(axis), half=box.half.getComponent(axis);
  outNormal.set(0,0,0).setComponent(axis,1).applyQuaternion(box.quaternion);
  const positive=half+support(body,boxFace.copy(outNormal).negate())-position;
  const negative=half+support(body,outNormal)+position;
  if(negative<positive)outNormal.negate();
  return Math.max(0,Math.min(positive,negative));
}

function shapeContact(body,box,outNormal,outPoint) {
  if(body.shape.sphereRadius||box.heightfield||!box.shape)return vertexContact(body,box,outNormal,outPoint??contact);
  // A hull within two of the box slabs can only contact the third slab's faces.
  // Static colliders own a world pose. Some have no render mesh, and hinged
  // colliders may be offset from the mesh origin.
  const target={mesh:box,shape:box.shape};
  const depth=(box.convex?null:singleFaceContact(body,box,outNormal))??sat(body,target,outNormal);
  if(depth>0&&outPoint)contactPoint(body,target,outNormal,outPoint);
  return depth;
}
const palmHull=colliderFor(new T.OctahedronGeometry(1,0).scale(...palmHalfExtent));
const palmBody={mesh:{position:new T.Vector3(),quaternion:new T.Quaternion()},shape:palmHull,radius:palmHull.radius,precise:true};
const palmPrevious=new T.Vector3(),palmOffset=new T.Vector3(),palmSweepPoint=new T.Vector3();
const palmOffsets=palmHull.vertices.map(()=>new T.Vector3());
function thinPalmCrossing(from,to,field,out,hitNormal){
  if(Math.max(from.x,to.x)+palmHull.radius<field.xMin||Math.min(from.x,to.x)-palmHull.radius>field.xMax||
      Math.max(from.z,to.z)+palmHull.radius<field.zMin||Math.min(from.z,to.z)-palmHull.radius>field.zMax)return false;
  let first=Infinity,side=1;
  for(const offset of palmOffsets){
    const x0=from.x+offset.x,z0=from.z+offset.z,x1=to.x+offset.x,z1=to.z+offset.z;
    if(Math.min(x0,x1)<field.xMin||Math.max(x0,x1)>field.xMax||
        Math.min(z0,z1)<field.zMin||Math.max(z0,z1)>field.zMax)continue;
    const start=from.y+offset.y-field.height(x0,z0),end=to.y+offset.y-field.height(x1,z1);
    if(start*end>0||start===end)continue;
    const approach=Math.sign(start)||-Math.sign(end);
    let low=0,high=1;
    for(let i=0;i<7;i++){
      const t=(low+high)*.5;
      palmSweepPoint.lerpVectors(from,to,t).add(offset);
      if((palmSweepPoint.y-field.height(palmSweepPoint.x,palmSweepPoint.z))*approach>0)low=t;
      else high=t;
    }
    if(high>=first)continue;
    first=high;side=approach;palmOffset.copy(offset);
  }
  if(!Number.isFinite(first))return false;
  out.lerpVectors(from,to,first);
  palmSweepPoint.copy(out).add(palmOffset);
  floorNormal(field,palmSweepPoint.x,palmSweepPoint.z,hitNormal).multiplyScalar(side);
  out.addScaledVector(hitNormal,.0075);
  return true;
}
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
  if(sweepCandidates.some(box=>box.heightfield&&!(box.thickness>0))){
    for(let i=0;i<palmOffsets.length;i++)palmOffsets[i].copy(palmHull.vertices[i]).applyQuaternion(rotation);
  }
  palmPrevious.copy(from);
  for(let i=1;i<=steps;i++){
    center.lerpVectors(from,to,i/steps);
    for(const box of sweepCandidates){
      const object=box.objectBody;
      if(object&&(object.owner||center.distanceToSquared(object.mesh.position)>(r+object.radius)**2))continue;
      // Retenir le côté d'où vient la paume, même si un sommet a franchi
      // toute la surface fine entre deux échantillons.
      if(box.heightfield&&!(box.thickness>0)&&thinPalmCrossing(palmPrevious,center,box,out,hitNormal))return box;
      const depth=object?sat(palmBody,object,normal):shapeContact(palmBody,box,normal);
      if(depth>0){
        out.copy(center).addScaledVector(normal,depth+.0005);
        hitNormal.copy(normal);
        return box;
      }
    }
    palmPrevious.copy(center);
  }
  return null;
}

export function placeObject(body,boxes){
  for(let pass=0;pass<4;pass++){
    let moved=false;
    for(const box of boxes){
      if(!nearBox(body.mesh.position,body.radius,box))continue;
      const depth=shapeContact(body,box,normal);
      if(depth<=1e-6)continue;
      body.mesh.position.addScaledVector(normal,depth);
      moved=true;
    }
    if(!moved)break;
  }
}

const kinematicStart=new T.Vector3(), kinematicStep=new T.Vector3(), kinematicSpin=new T.Vector3();
const kinematicRotation=new T.Quaternion(), turn=new T.Quaternion(), turnStep=new T.Quaternion();
function rotationDelta(from,to,out){
  out.copy(from).invert().premultiply(to).normalize();
  if(out.w<0)out.set(-out.x,-out.y,-out.z,-out.w);
  return 2*Math.atan2(Math.hypot(out.x,out.y,out.z),out.w);
}

export function moveKinematic(body,targetPosition,targetRotation,boxes,dt){
  const {mesh,shape}=body;
  kinematicStart.copy(mesh.position);
  kinematicRotation.copy(mesh.quaternion);
  kinematicStep.subVectors(targetPosition,kinematicStart);
  const angle=rotationDelta(kinematicRotation,targetRotation,turn);
  const travel=kinematicStep.length()+angle*shape.radius;
  const stride=travelLimit(shape);
  const count=Math.max(1,Math.min(MAX_SUBSTEPS,Math.ceil(travel/stride)));
  const fraction=travel>0?Math.min(1,count*stride/travel):1;
  const radiansPerStep=angle*fraction/count;
  kinematicSpin.set(turn.x,turn.y,turn.z).normalize();
  turnStep.setFromAxisAngle(kinematicSpin,radiansPerStep);
  kinematicStep.multiplyScalar(fraction/count);
  // Apply each successive controller increment from the last valid pose, preserving
  // motion along the surface when another component of the motion is blocked.
  for(let i=0;i<count;i++){
    mesh.position.add(kinematicStep);
    mesh.quaternion.premultiply(turnStep).normalize();
    placeObject(body,boxes);
  }
  const elapsed=Math.max(.006,dt||0);
  body.velocity.lerp(kinematicStep.subVectors(mesh.position,kinematicStart).divideScalar(elapsed).clampLength(0,23),.52);
  const movedAngle=rotationDelta(kinematicRotation,mesh.quaternion,turn);
  kinematicSpin.set(turn.x,turn.y,turn.z).normalize().multiplyScalar(Math.min(24,movedAngle/elapsed));
  body.angular.lerp(kinematicSpin,.52);
}
function support(body,direction){
  if(body.shape.sphereRadius)return body.shape.sphereRadius;
  qInv.copy(body.mesh.quaternion).invert();
  supportAxis.copy(direction).applyQuaternion(qInv);
  let extent=-Infinity;
  for(const vertex of body.shape.vertices)extent=Math.max(extent,vertex.dot(supportAxis));
  return extent;
}

const featureU=new T.Vector3(), featureV=new T.Vector3(), featureNormal=new T.Vector3();
const featurePoint=new T.Vector3(), featureA={}, featureB={};
function contactFeature(body,axis,sign,out){
  const {mesh,shape}=body;
  const extent=support(body,featureNormal.copy(axis).multiplyScalar(sign));
  out.plane=mesh.position.dot(axis)+sign*extent;
  if(shape.sphereRadius){
    out.minU=out.maxU=mesh.position.dot(featureU);
    out.minV=out.maxV=mesh.position.dot(featureV);
    return;
  }
  out.minU=out.minV=Infinity;
  out.maxU=out.maxV=-Infinity;
  for(const vertex of shape.vertices){
    if(vertex.dot(supportAxis)<extent-.0015)continue;
    featurePoint.copy(vertex).applyQuaternion(mesh.quaternion).add(mesh.position);
    const u=featurePoint.dot(featureU), v=featurePoint.dot(featureV);
    out.minU=Math.min(out.minU,u);
    out.maxU=Math.max(out.maxU,u);
    out.minV=Math.min(out.minV,v);
    out.maxV=Math.max(out.maxV,v);
  }
}

function contactPoint(a,b,axis,out){
  // Use the overlapping part of the opposing faces or edges, so a corner hit
  // applies its impulse at the corner while a flat landing stays balanced.
  if(Math.abs(axis.y)<.8)featureU.set(-axis.z,0,axis.x).normalize();
  else featureU.set(axis.y,-axis.x,0).normalize();
  featureV.crossVectors(axis,featureU);
  contactFeature(a,axis,-1,featureA);
  contactFeature(b,axis,1,featureB);
  const u=(Math.max(featureA.minU,featureB.minU)+Math.min(featureA.maxU,featureB.maxU))*.5;
  const v=(Math.max(featureA.minV,featureB.minV)+Math.min(featureA.maxV,featureB.maxV))*.5;
  out.copy(axis).multiplyScalar((featureA.plane+featureB.plane)*.5)
    .addScaledVector(featureU,u).addScaledVector(featureV,v);
}

const bodyBoundsPoint=new T.Vector3();
function updateBodyBounds(state){
  const {mesh,shape}=state.body, {bounds}=state;
  if(shape.sphereRadius){
    bounds.min.copy(mesh.position).addScalar(-shape.sphereRadius);
    bounds.max.copy(mesh.position).addScalar(shape.sphereRadius);
  }else{
    bounds.makeEmpty();
    for(const vertex of shape.vertices){
      bodyBoundsPoint.copy(vertex).applyQuaternion(mesh.quaternion).add(mesh.position);
      bounds.expandByPoint(bodyBoundsPoint);
    }
  }
}

function overlapsArena(bounds,box,b){
  const {min,max}=bounds;
  if(box.heightfield)return min.x<=box.xMax&&max.x>=box.xMin&&min.z<=box.zMax&&max.z>=box.zMin;
  return !b||max.x>=b.minX&&min.x<=b.maxX&&max.y>=b.minY&&min.y<=b.maxY&&max.z>=b.minZ&&min.z<=b.maxZ;
}

function isDynamic(body){
  return !body.owner&&!body.frozen;
}

const leverA=new T.Vector3(), leverB=new T.Vector3();
const relativeVelocity=new T.Vector3(), secondVelocity=new T.Vector3();
const torque=new T.Vector3(), rotatedTorque=new T.Vector3(), spinAxis=new T.Vector3();
function pointVelocity(state,lever,out){
  return state&&(state.inverseMass>0||state.held)
    ?out.crossVectors(state.body.angular,lever).add(state.body.velocity)
    :out.set(0,0,0);
}

function inverseInertia(state,lever,axis,out){
  const {mesh,shape}=state.body;
  qInv.copy(mesh.quaternion).invert();
  torque.crossVectors(lever,axis);
  return out.copy(torque).applyQuaternion(qInv).multiply(shape.inverseInertia)
    .applyQuaternion(mesh.quaternion).multiplyScalar(state.inverseMass);
}

function impulseResponse(state,lever,axis){
  if(!state?.inverseMass)return 0;
  inverseInertia(state,lever,axis,rotatedTorque);
  return state.inverseMass+torque.dot(rotatedTorque);
}

function applyImpulse(state,lever,axis,amount){
  if(!state?.inverseMass)return;
  if(state.body.sleeping&&Math.abs(amount)>.005){state.body.sleeping=false;state.body.quietTime=0;}
  state.body.velocity.addScaledVector(axis,amount*state.inverseMass);
  state.body.angular.addScaledVector(inverseInertia(state,lever,axis,rotatedTorque),amount);
}

function frictionOf(body){
  return body.friction??body.spec?.friction??.78;
}

function resolveContact(a,b,box,depth,rebound){
  const {body}=a;
  const other=b?.body;
  const friction=other?Math.sqrt(frictionOf(body)*frictionOf(other)):Math.min(frictionOf(body),box.friction??.78);
  leverA.subVectors(contact,body.mesh.position);
  if(other)leverB.subVectors(contact,other.mesh.position);
  pointVelocity(a,leverA,relativeVelocity).sub(pointVelocity(b,leverB,secondVelocity));
  const inwardSpeed=relativeVelocity.dot(normal);
  let changed=false;
  if(inwardSpeed<-1e-5){
    const bounce=inwardSpeed<-.8?T.MathUtils.clamp(rebound*(box?.bounce??1)*(body.spec?.physics?.bounce??1)*(other?.spec?.physics?.bounce??1),0,.98):0;
    const impulse=-inwardSpeed*(1+bounce)/(impulseResponse(a,leverA,normal)+impulseResponse(b,leverB,normal));
    applyImpulse(a,leverA,normal,impulse);
    applyImpulse(b,leverB,normal,-impulse);

    pointVelocity(a,leverA,relativeVelocity).sub(pointVelocity(b,leverB,secondVelocity));
    tangent.copy(relativeVelocity).addScaledVector(normal,-relativeVelocity.dot(normal));
    const tangentSpeed=tangent.length();
    if(tangentSpeed>1e-5&&friction>0){
      tangent.divideScalar(tangentSpeed);
      const drag=Math.min(impulse*friction,
        tangentSpeed/(impulseResponse(a,leverA,tangent)+impulseResponse(b,leverB,tangent)));
      applyImpulse(a,leverA,tangent,-drag);
      applyImpulse(b,leverB,tangent,drag);
    }
    changed=true;
  }

  const correction=depth-.00015;
  if(correction>1e-6){
    const inverseMass=a.inverseMass+(b?.inverseMass??0);
    if(a.inverseMass){
      body.mesh.position.addScaledVector(normal,correction*a.inverseMass/inverseMass);
      updateBodyBounds(a);
    }
    if(b?.inverseMass){
      other.mesh.position.addScaledVector(normal,-correction*b.inverseMass/inverseMass);
      updateBodyBounds(b);
    }
    changed=true;
  }

  if(a.inverseMass&&normal.y>.57&&inwardSpeed<.2){
    a.groundFriction=Math.max(a.groundFriction,friction);
    a.groundY=Math.max(a.groundY,normal.y);
  }
  if(b?.inverseMass&&normal.y<-.57&&inwardSpeed<.2){
    b.groundFriction=Math.max(b.groundFriction,friction);
    b.groundY=Math.max(b.groundY,-normal.y);
  }
  return changed;
}

function slowRolling(state,dt){
  const {body,groundFriction}=state;
  if(!groundFriction)return;
  const {velocity,angular,shape}=body;
  if(shape.sphereRadius){
    const resistance=Math.exp(-dt*groundFriction*.6);
    velocity.x*=resistance;
    velocity.z*=resistance;
    angular.multiplyScalar(resistance);
    if(state.groundY>.999&&velocity.lengthSq()<.000144&&angular.lengthSq()<.01){
      velocity.set(0,0,0);
      angular.set(0,0,0);
    }
  }else{
    angular.multiplyScalar(Math.exp(-dt*groundFriction*2.5));
    if(velocity.lengthSq()<.0016&&angular.lengthSq()<.012){
      velocity.set(0,0,0);
      angular.set(0,0,0);
    }
  }
}

const MAX_SUBSTEPS=96, SOLVER_PASSES=5;
function travelLimit(shape){
  return Math.max(.008,shape.thickness*.35);
}

export const objectPhysicsStats={substeps:0,active:0,free:0,sleeping:0};

function advanceBody(body,dt,gravity,surfaceAt){
  body.previousY=body.mesh.position.y;
  body.velocity.y-=gravity*dt*(body.spec?.physics?.gravity??1)*(surfaceAt?.(body.mesh.position)?.gravity??1);
  body.mesh.position.addScaledVector(body.velocity,dt);
  const speed=body.angular.length();
  if(speed>1e-5)body.mesh.rotateOnWorldAxis(spinAxis.copy(body.angular).divideScalar(speed),Math.min(speed,30)*dt);
}

function sweptBounds(body,dt,gravity){
  // A sphere bounds every orientation, including rapid rotation and gravity.
  const bounds=new T.Box3().setFromCenterAndSize(body.mesh.position,new T.Vector3());
  const end=body.mesh.position.clone().addScaledVector(body.velocity,dt);
  const acceleration=gravity*surfaceAtGravity(body);
  end.y-=acceleration*dt*dt;
  const turning=body.velocity.y/(2*acceleration);
  if(turning>0&&turning<dt){
    const peak=body.mesh.position.clone().addScaledVector(body.velocity,turning);
    peak.y-=acceleration*turning*turning;bounds.expandByPoint(peak);
  }
  bounds.expandByPoint(end).expandByScalar(body.shape.radius+.002);
  return bounds;
}
function surfaceAtGravity(body){return body.sweepGravity??1;}

export function solveObjects(objects,boxes,dt,gravity,rebound,surfaceAt) {
  Object.assign(objectPhysicsStats,{substeps:0,active:0,free:0,sleeping:0});
  if(!Number.isFinite(dt)||dt<=0)return;
  const states=[], free=[], arena=boxes.map(box=>({box,bounds:boundsFor(box)}));
  const visible=objects.filter(body=>body.mesh.visible!==false);
  const sweeps=new Map();
  for(const body of visible){
    body.sweepGravity=surfaceAt?.(body.mesh.position)?.gravity??1;
    sweeps.set(body,sweptBounds(body,dt,gravity));
  }
  let count=Math.max(1,Math.ceil(dt/.006));
  for(const body of visible){
    const dynamic=isDynamic(body);
    if(body.sleeping&&(body.velocity.lengthSq()>1e-8||body.angular.lengthSq()>1e-8||!dynamic)){
      body.sleeping=false;body.quietTime=0;
    }
    if(body.collidable===false){if(dynamic)free.push(body);continue;}
    const sweep=sweeps.get(body);
    const nearArena=arena.some(({box,bounds})=>overlapsArena(sweep,box,bounds));
    const nearObject=visible.some(other=>other!==body&&other.collidable!==false&&sweep.intersectsBox(sweeps.get(other)));
    if(dynamic&&!nearArena&&!nearObject){body.sleeping=false;body.quietTime=0;free.push(body);continue;}
    if(dynamic&&!body.sleeping){
      const angularSpeed=Math.min(body.angular.length(),30);
      const speed=body.velocity.length()+angularSpeed*body.shape.radius+Math.abs(gravity*body.sweepGravity)*dt;
      count=Math.max(count,Math.ceil(speed*dt/travelLimit(body.shape)));
    }
    const state={body,inverseMass:dynamic?1/body.mass:0,held:body.owner&&!body.frozen,
      bounds:new T.Box3(),groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};
    updateBodyBounds(state);states.push(state);
  }
  // Isolated free flight does not impose thin-collider substeps on resting objects.
  for(const body of free)advanceBody(body,dt,gravity,surfaceAt);
  count=states.some(s=>s.inverseMass&&!s.body.sleeping)?Math.min(MAX_SUBSTEPS,count):1;
  Object.assign(objectPhysicsStats,{substeps:count,active:states.length,free:free.length});
  const step=dt/count;
  for(let k=0;k<count;k++){
    for(const state of states){
      if(!state.inverseMass)continue;
      const {body}=state;
      state.groundFriction=0;state.groundY=0;
      if(!body.sleeping){
        advanceBody(body,step,gravity,surfaceAt);
        updateBodyBounds(state);
      }
    }
    for(let pass=0;pass<SOLVER_PASSES;pass++){
      let changed=false;
      for(const state of states){
        if(!state.inverseMass)continue;
        for(const {box,bounds} of arena){
          if(!overlapsArena(state.bounds,box,bounds))continue;
          const depth=shapeContact(state.body,box,normal,contact);
          if(depth>0)changed=resolveContact(state,null,box,depth,rebound)||changed;
        }
      }
      for(const state of states){state.sweepStart=state.bounds.min.x;state.sweepEnd=state.bounds.max.x;}
      states.sort((a,b)=>a.sweepStart-b.sweepStart);
      for(let i=0;i<states.length;i++){
        const a=states[i];
        for(let j=i+1;j<states.length;j++){
          const b=states[j];
          if(b.sweepStart>a.sweepEnd)break;
          // Bodies resting independently on the ground cannot change each other's contacts.
          if((!a.inverseMass&&!b.inverseMass)||
            (a.body.sleeping&&b.body.sleeping&&a.groundY>.9&&b.groundY>.9)||!a.bounds.intersectsBox(b.bounds))continue;
          const depth=sat(a.body,b.body,normal);
          if(depth<=0)continue;
          contactPoint(a.body,b.body,normal,contact);
          changed=resolveContact(a,b,null,depth,rebound)||changed;
        }
      }
      if(!changed)break;
    }
    for(const state of states)if(state.inverseMass)slowRolling(state,step);
  }
  for(const state of states){
    if(!state.inverseMass)continue;
    const body=state.body;
    const ball=Boolean(body.shape.sphereRadius);
    const quiet=state.groundY>.9&&body.velocity.lengthSq()<(ball ? .000144 : .0064)&&
      body.angular.lengthSq()*(ball ? 1 : body.shape.radius**2)<(ball ? .01 : .0144);
    body.quietTime=quiet?(body.quietTime??0)+dt:0;
    if(body.quietTime>.25){body.sleeping=true;body.velocity.set(0,0,0);body.angular.set(0,0,0);}
    else if(!quiet)body.sleeping=false;
    if(body.sleeping)objectPhysicsStats.sleeping++;
  }
}

function heightContact(p,radius,field,out) {
  if(field.thickness>0)return volumeHeightContact(p,radius,field,out);
  if(p.x<field.xMin||p.x>field.xMax||p.z<field.zMin||p.z>field.zMax)return 0;
  const h=field.height(p.x,p.z);
  // Test signed distance to the supporting triangle, not vertical distance.
  // A palm can touch a steep face while sitting well above its height at the same X/Z.
  floorNormal(field,p.x,p.z,out);
  const distance=(p.y-h)*out.y;
  if(distance<0)out.negate();
  return Math.max(0,radius-Math.abs(distance));
}

function floorNormal(field,x,z,out){
  if(field.normalAt){field.normalAt(x,z,out);return out;}
  const eps=.045;
  const dx=(field.height(x+eps,z)-field.height(x-eps,z))/(2*eps);
  const dz=(field.height(x,z+eps)-field.height(x,z-eps))/(2*eps);
  return out.set(-dx,1,-dz).normalize();
}

function volumeHeightContact(p,radius,field,out){
  const x=T.MathUtils.clamp(p.x,field.xMin,field.xMax),z=T.MathUtils.clamp(p.z,field.zMin,field.zMax);
  const dx=p.x-x,dz=p.z-z;
  if(dx*dx+dz*dz>=radius*radius)return 0;
  const top=field.height(x,z),bottom=top-field.thickness;
  if(dx||dz){
    const dy=p.y-T.MathUtils.clamp(p.y,bottom,top);
    const distance=Math.hypot(dx,dy,dz);
    if(distance>=radius)return 0;
    out.set(dx/distance,dy/distance,dz/distance);
    return radius-distance;
  }
  field.normalAt(x,z,out);
  const roof=(p.y-top)*out.y,floor=(bottom-p.y)*out.y;
  const west=x-field.xMin,east=field.xMax-x,north=z-field.zMin,south=field.zMax-z;
  const wall=Math.min(west,east,north,south);
  const distance=Math.max(roof,floor,-wall);
  if(distance===floor)out.negate();
  else if(distance===-wall){
    if(wall===west)out.set(-1,0,0);
    else if(wall===east)out.set(1,0,0);
    else if(wall===north)out.set(0,0,-1);
    else out.set(0,0,1);
  }
  return Math.max(0,radius-distance);
}

const playerProbe={mesh:{position:null,quaternion:new T.Quaternion()},shape:{sphereRadius:0,normals:[],edges:[]}};
function objectPenetration(position,radius,object,out,heldSupport=false){
  if(!object.blocksPlayer || object.owner&&!heldSupport || !object.mesh.visible)return 0;
  if(position.distanceToSquared(object.mesh.position)>(radius+object.radius)**2)return 0;
  playerProbe.mesh.position=position;
  playerProbe.shape.sphereRadius=radius;
  return sat(playerProbe,object,out);
}
export function playerObjectContact(position,radius,object,velocity,outNormal,heldSupport=false){
  const depth=objectPenetration(position,radius,object,normal,heldSupport);
  if(heldSupport&&normal.y<.62)return false;
  if(depth<=0)return false;
  position.addScaledVector(normal,depth+.001);
  outNormal?.copy(normal);
  const inward=velocity.dot(normal);
  if(inward<0){
    velocity.addScaledVector(normal,-inward);
    if(Math.abs(normal.y)<.6&&isDynamic(object))object.velocity.addScaledVector(normal,-Math.min(2.8,-inward*.24));
  }
  return true;
}

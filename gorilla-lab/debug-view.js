import * as T from 'three';
import {palmCenter,palmHalfExtent} from './hand-skin.js';

// All gizmos are render-only. Read the same colliders used by physics.js and
// emit their edges into one draw call. Nothing is added to the collision list.
export function createDebugView(scene){
  const capacity=100000, positions=new Float32Array(capacity*3), colors=new Float32Array(capacity*3);
  const geometry=new T.BufferGeometry();
  geometry.setAttribute('position',new T.BufferAttribute(positions,3).setUsage(T.DynamicDrawUsage));
  geometry.setAttribute('color',new T.BufferAttribute(colors,3).setUsage(T.DynamicDrawUsage));
  const lines=new T.LineSegments(geometry,new T.LineBasicMaterial({vertexColors:true,depthTest:false,depthWrite:false,toneMapped:false}));
  lines.frustumCulled=false;lines.renderOrder=100;lines.visible=false;scene.add(lines);
  const sphere=new T.WireframeGeometry(new T.SphereGeometry(1,12,8)).attributes.position;
  const palm=new T.WireframeGeometry(new T.OctahedronGeometry(1).scale(...palmHalfExtent)).attributes.position;
  const wireCache=new WeakMap(), unit=new T.Vector3(1,1,1), rotation=new T.Quaternion();
  const a=new T.Vector3(),b=new T.Vector3(),c=new T.Vector3(),d=new T.Vector3(),center=new T.Vector3();
  const axis=new T.Vector3(),side=new T.Vector3(),worldUp=new T.Vector3(0,1,0);
  const palette={grip:new T.Color('#61f6ff'),palm:new T.Color('#71ff87'),solid:new T.Color('#ffe060'),
    proxy:new T.Color('#ff76df'),movement:new T.Color('#fff0af'),normal:new T.Color('#ff994e'),velocity:new T.Color('#80aaff'),force:new T.Color('#ff5454'),rig:new T.Color('#cec4ff')};
  let count=0;
  function line(from,to,color){
    if(count+2>capacity)return;
    from.toArray(positions,count*3);color.toArray(colors,count++*3);
    to.toArray(positions,count*3);color.toArray(colors,count++*3);
  }
  function wire(vertices,position,quaternion,scale,color){
    for(let i=0;i<vertices.count;i+=2){
      a.fromBufferAttribute(vertices,i).multiply(scale).applyQuaternion(quaternion).add(position);
      b.fromBufferAttribute(vertices,i+1).multiply(scale).applyQuaternion(quaternion).add(position);
      line(a,b,color);
    }
  }
  function collider(shape,position,quaternion,color){
    if(shape.sphereRadius){wire(sphere,position,quaternion,d.setScalar(shape.sphereRadius),color);return;}
    for(const {a:first,b:second,c:third} of shape.faces){
      a.copy(first).applyQuaternion(quaternion).add(position);
      b.copy(second).applyQuaternion(quaternion).add(position);
      c.copy(third).applyQuaternion(quaternion).add(position);
      line(a,b,color);line(b,c,color);line(c,a,color);
    }
  }
  function vector(origin,value,scale,color){
    if(value.lengthSq()<1e-8)return;
    center.copy(origin).addScaledVector(value,scale);
    axis.copy(value).normalize();
    side.crossVectors(axis,worldUp);
    if(side.lengthSq()<1e-8)side.set(1,0,0);else side.normalize();
    const tip=Math.min(.09,origin.distanceTo(center)*.3);
    d.copy(center).addScaledVector(axis,-tip);
    line(origin,center,color);
    line(center,a.copy(d).addScaledVector(side,tip*.5),color);
    line(center,b.copy(d).addScaledVector(side,-tip*.5),color);
  }
  function update({settings,boxes,bodies,hands,locomotion,velocity,head,body,neck,proxies,gravity,appliedMove,playerActive,inVR}){
    count=0;
    lines.visible=settings.debugPalm||settings.debugHitboxes||settings.debugInvisible||settings.debugForces||settings.debugBody;
    if(!lines.visible)return;
    if(settings.debugHitboxes||settings.debugInvisible){
      for(const box of boxes){
        const visible=box.mesh?.isObject3D&&box.mesh.visible;
        if(visible?!settings.debugHitboxes:!settings.debugInvisible)continue;
        if(box.shape)collider(box.shape,box.position,box.quaternion,visible?palette.solid:palette.proxy);
        else if(box.heightfield&&box.mesh?.geometry){
          const source=box.mesh.geometry;
          let entry=wireCache.get(source);
          const version=source.attributes.position.version;
          if(entry?.version!==version){
            entry?.edges.dispose();
            entry={version,edges:new T.WireframeGeometry(source)};
            wireCache.set(source,entry);
          }
          wire(entry.edges.attributes.position,box.mesh.position,box.mesh.quaternion,unit,palette.solid);
        }
      }
      if(settings.debugHitboxes)for(const object of bodies){
        if(object.blocksPlayer&&object.mesh.visible)collider(object.shape,object.mesh.position,object.mesh.quaternion,palette.solid);
      }
    }
    if(playerActive){
      if(settings.debugBody){
        if(settings.collisions)for(const {position,radius} of proxies)
          wire(sphere,position,rotation,d.setScalar(radius),palette.rig);
        line(head,neck,palette.rig);
        line(neck,body,palette.rig);
      }
      if(settings.debugForces){
        vector(head,velocity,.13,palette.velocity);
        vector(head,worldUp,-gravity*.038,palette.force);
        vector(head,appliedMove,5,palette.movement);
      }
      if(inVR&&(settings.debugPalm||settings.debugForces))for(const state of locomotion.hands){
        const {hand,normal,offset}=state;
        if(!hand.valid)continue;
        if(settings.debugPalm){
          wire(sphere,hand.gripPosition,rotation,d.setScalar(.014),palette.grip);
          for(let i=0;i<3;i++){
            axis.set(0,0,0).setComponent(i,.075).applyQuaternion(hand.controllerRotation);
            vector(hand.gripPosition,axis,1,palette.grip);
          }
          center.copy(hand.mesh.position).add(offset);
          wire(palm,center,hand.mesh.quaternion,unit,palette.palm);
          line(hand.gripPosition,center,palette.grip);
          if(hand.hasSupport){
            center.copy(palmCenter).applyQuaternion(hand.mesh.quaternion).add(hand.mesh.position);
            wire(palm,center,hand.mesh.quaternion,unit,palette.grip);
          }
        }
        if(settings.debugForces&&hand.surface)
          vector(hand.anchor,normal,.25,palette.normal);
      }
    }
    geometry.setDrawRange(0,count);
    for(const name of ['position','color']){
      const attribute=geometry.attributes[name];
      attribute.clearUpdateRanges();
      if(count)attribute.addUpdateRange(0,count*3);
      attribute.needsUpdate=Boolean(count);
    }
  }
  return {update};
}

import * as T from 'three';

// Planar UVs in metre units so cubes and elongated walls share the same texel density.
export function tiledBox(w,h,d){
  const geometry=new T.BoxGeometry(w,h,d);
  const {uv,normal}=geometry.attributes;
  for(let i=0;i<uv.count;i++){
    const side=Math.abs(normal.getX(i))>.5,top=Math.abs(normal.getY(i))>.5;
    const width=side?d:w,height=top?d:h;
    uv.setXY(i,uv.getX(i)*width/2.6,uv.getY(i)*height/2.6);
  }
  return geometry;
}

// Edit texture coordinates per piece, never mutate a shared texture used elsewhere.
export function transformUVs(geometry,piece){
  const uv=geometry.attributes.uv;
  if(!uv)return geometry;
  const scale=1/(piece.uvScale??1),angle=(piece.uvRotation??0)*Math.PI/180;
  const ca=Math.cos(angle),sa=Math.sin(angle),x0=piece.uvOffsetX??0,y0=piece.uvOffsetY??0;
  for(let i=0;i<uv.count;i++){
    const u=uv.getX(i)*scale,v=uv.getY(i)*scale;
    uv.setXY(i,u*ca-v*sa+x0,u*sa+v*ca+y0);
  }
  uv.needsUpdate=true;
  return geometry;
}

// Basic decorative shapes. Geometry stays unit-sized in the editor and can be
// baked to world dimensions when the game builds a static map.
export function decorPrimitiveGeometry(kind){
  switch(kind){
    case 'sphere':return new T.SphereGeometry(.5,24,16);
    case 'cylinder':return new T.CylinderGeometry(.5,.5,1,24);
    case 'cone':return new T.ConeGeometry(.5,1,24);
    case 'torus':return new T.TorusGeometry(.34,.14,12,32);
    case 'capsule':return new T.CapsuleGeometry(.32,.36,8,16);
    default:return new T.BoxGeometry(1,1,1);
  }
}


// Solid triangular prism. Each face has its own metre-based UV projection.
export function rampGeometry(w=1,h=1,d=1){
  const vertices=[
    [-w/2,-h/2,-d/2],[w/2,-h/2,-d/2],[-w/2,-h/2,d/2],
    [w/2,-h/2,d/2],[-w/2,h/2,-d/2],[w/2,h/2,-d/2],
  ].map(point=>new T.Vector3(...point));
  const positions=[],uvs=[];
  for(const face of [[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){
    const points=face.map(i=>vertices[i]);
    const origin=points[0];
    const u=points[1].clone().sub(origin).normalize();
    const v=points.at(-1).clone().sub(origin);
    v.addScaledVector(u,-v.dot(u)).normalize();
    for(let i=1;i<points.length-1;i++){
      for(const point of [origin,points[i],points[i+1]]){
        positions.push(...point);
        const delta=point.clone().sub(origin);
        uvs.push(delta.dot(u)/2.6,delta.dot(v)/2.6);
      }
    }
  }
  const geometry=new T.BufferGeometry();
  geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));
  geometry.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));
  geometry.computeVertexNormals();
  return geometry;
}

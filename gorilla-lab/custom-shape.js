import * as T from 'three';

// A Gorilla profile is a small editable 2D sketch. It generates watertight
// extrusions or revolution solids, and is carried inside the model JSON.
export const maxProfilePoints=48;
export const minLatheSegments=3,maxLatheSegments=128;
export const sketchPresets=Object.freeze({
  shield:{mode:'extrude',symmetric:true,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},
  panel:{mode:'extrude',symmetric:false,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},
  angle:{mode:'extrude',symmetric:false,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},
  arch:{mode:'extrude',symmetric:false,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},
  bottle:{mode:'lathe',symmetric:false,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},
  bowl:{mode:'lathe',symmetric:false,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32},
});
const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
const fallback=()=>structuredClone(sketchPresets.shield);
const num=(value,def,min,max)=>Number.isFinite(value)?clamp(value,min,max):def;

export function normalizeSketch(input){
  const base=input?.mode==='lathe'?sketchPresets.bottle:fallback();
  const mode=input?.mode==='lathe'?'lathe':'extrude';
  const symmetric=mode==='extrude'&&input?.symmetric===true;
  let points=Array.isArray(input?.points)&&input.points.length>=3&&input.points.length<=maxProfilePoints
    ?input.points.map(point=>[num(point?.[0],0,-1.5,1.5),num(point?.[1],0,-1.5,1.5)])
    :structuredClone(base.points);
  if(mode==='lathe')points=points.map(([x,y])=>[Math.abs(x),y]);
  if(symmetric)points=points.map(([x,y])=>[-Math.abs(x),y]);
  const result={
    mode,symmetric,points,depth:num(input?.depth,base.depth,.025,1.5),
    bevel:num(input?.bevel,base.bevel,0,.15),
    segments:Math.round(num(input?.segments,32,minLatheSegments,maxLatheSegments))
  };
  return result;
}
export function sketchOutline(sketch){
  if(!sketch.symmetric||sketch.mode!=='extrude')return sketch.points.map(p=>[...p]);
  const left=sketch.points.map(([x,y])=>[-Math.abs(x),y]);
  const right=left.slice().reverse().filter(([x])=>x<-.0001).map(([x,y])=>[-x,y]);
  return [...left,...right];
}
function orientation(a,b,c){return(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);}
function intersects(a,b,c,d){
  const o1=orientation(a,b,c),o2=orientation(a,b,d);
  const o3=orientation(c,d,a),o4=orientation(c,d,b);
  return o1*o2< -1e-8&&o3*o4< -1e-8;
}
export function validateSketch(value){
  const sketch=normalizeSketch(value);
  const poly=sketch.mode==='lathe'?sketch.points:sketchOutline(sketch);
  if(poly.length<3||poly.length>maxProfilePoints*2)return 'Il faut au moins trois points.';
  for(let i=1;i<poly.length;i++)
    if(Math.hypot(poly[i][0]-poly[i-1][0],poly[i][1]-poly[i-1][1])<.008)
      return 'Certains points sont trop proches.';
  if(sketch.mode==='lathe'){
    if(sketch.points.some(p=>p[0]<0))return 'Le profil tourné doit rester à droite de l’axe.';
    if(Math.max(...poly.map(p=>p[0]))<.025)return 'Élargis le profil tourné.';
  }else{
    let area=0;
    for(let i=0;i<poly.length;i++){
      const a=poly[i],b=poly[(i+1)%poly.length];
      area+=a[0]*b[1]-b[0]*a[1];
      for(let j=i+2;j<poly.length;j++){
        if(i===0&&j===poly.length-1)continue;
        if(intersects(a,b,poly[j],poly[(j+1)%poly.length]))
          return 'Le contour se croise : déplace les points pour l’ouvrir.';
      }
    }
    if(Math.abs(area)<.001)return 'La forme est trop plate pour créer un volume.';
  }
  return null;
}
export function createSketchGeometry(value){
  const sketch=normalizeSketch(value);
  const failure=validateSketch(sketch);
  if(failure)throw new Error(failure);
  let geometry;
  if(sketch.mode==='lathe'){
    const points=sketch.points.map(([r,y])=>new T.Vector2(Math.max(0,r),y));
    if(points[0].y>points.at(-1).y)points.reverse();
    // Close both open ends at the axis, then discard zero-area pole triangles.
    if(points[0].x>0)points.unshift(new T.Vector2(0,points[0].y));
    if(points.at(-1).x>0)points.push(new T.Vector2(0,points.at(-1).y));
    geometry=new T.LatheGeometry(points,sketch.segments);
    const indices=[],pos=geometry.attributes.position;
    const a=new T.Vector3(),b=new T.Vector3(),c=new T.Vector3(),cross=new T.Vector3();
    const source=geometry.index.array;
    for(let i=0;i<source.length;i+=3){
      a.fromBufferAttribute(pos,source[i]);b.fromBufferAttribute(pos,source[i+1]);c.fromBufferAttribute(pos,source[i+2]);
      if(cross.crossVectors(b.sub(a),c.sub(a)).lengthSq()>1e-16)indices.push(source[i],source[i+1],source[i+2]);
    }
    geometry.setIndex(indices);
  }else{
    const points=sketchOutline(sketch),shape=new T.Shape();
    shape.moveTo(...points[0]);
    for(const point of points.slice(1))shape.lineTo(...point);
    shape.closePath();
    const bevel=Math.min(sketch.bevel,sketch.depth*.42);
    geometry=new T.ExtrudeGeometry(shape,{
      depth:sketch.depth,steps:1,bevelEnabled:bevel>.0001,
      bevelThickness:bevel,bevelSize:bevel*.65,bevelSegments:2,curveSegments:8
    });
  }
  geometry.center();
  geometry.computeVertexNormals();
  if(!geometry.attributes.uv){
    const count=geometry.attributes.position.count;
    geometry.setAttribute('uv',new T.BufferAttribute(new Float32Array(count*2),2));
  }
  return geometry;
}
export function startingSketch(shape='box'){
  const base=shape==='cone'?sketchPresets.bottle:
    shape==='cylinder'?sketchPresets.bowl:
    shape==='diamond'?sketchPresets.shield:
    sketchPresets.panel;
  return normalizeSketch(base);
}


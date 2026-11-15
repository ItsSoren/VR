import * as T from 'three';

const sides=12;
const profile=[
  [-.41,.13,.115],[-.32,.215,.160],[.09,.316,.215],
  [.22,.327,.221],[.34,.264,.193],[.405,.146,.140],[.46,.097,.108],
];
const jointRays=[
  [-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0],
];
const bodyRingPoints=profile.flatMap(([y,xRadius,zRadius])=>Array.from({length:sides},(_,i)=>{
  const angle=(i-.5)*Math.PI*2/sides;
  return [Math.cos(angle)*xRadius,y,Math.sin(angle)*zRadius+.04];
}));

// Les anneaux des bras réutilisent les sommets du torse et des poignets pour fermer le maillage.
export function createBodySkin(material,handMeshes){
  const vertices=bodyRingPoints.length;
  const triangles=[];
  const quad=(index,a,b,c,d)=>index.push(a,b,c,a,c,d);
  function close(index,ring,reverse=false){
    for(let j=1;j<ring.length-1;j++){
      if(reverse)index.push(ring[0],ring[j+1],ring[j]);
      else index.push(ring[0],ring[j],ring[j+1]);
    }
  }
  const at=(row,col)=>row*sides+(col+sides)%sides;
  for(let row=0;row<profile.length-1;row++)for(let i=0;i<sides;i++){
    if((row===2||row===3)&&(i===0||i===6))continue;
    quad(triangles,at(row,i),at(row+1,i),at(row+1,i+1),at(row,i+1));
  }
  close(triangles,Array.from({length:sides},(_,i)=>at(0,i)));
  close(triangles,Array.from({length:sides},(_,i)=>at(profile.length-1,i)),true);

  let next=vertices;
  const arms=handMeshes.map(({geometry,wristIndices},i)=>{
    const col=i===0?6:0;
    const socket=[at(4,col),at(4,col+1),at(3,col+1),at(2,col+1),at(2,col),at(3,col)];
    const rings=[socket,...Array.from({length:5},()=>Array.from({length:6},()=>next++))];
    const wrist=rings.at(-1);
    const remap=new Array(geometry.attributes.position.count);
    wristIndices.forEach((index,j)=>{remap[index]=wrist[j];});
    for(let j=0;j<remap.length;j++)remap[j]??=next++;
    const skin=[];
    for(let j=0;j<geometry.index.count;j++)skin.push(remap[geometry.index.getX(j)]);
    for(let j=0;j<rings.length-1;j++)for(let k=0;k<6;k++){
      const n=(k+1)%6;quad(triangles,rings[j][k],rings[j][n],rings[j+1][n],rings[j+1][k]);
    }
    const cap=[];close(cap,wrist);
    return {socket,rings,wrist,wristIndices,remap,skin,cap,sign:i===0?-1:1};
  });
  const geometry=new T.BufferGeometry();
  const coords=new T.Float32BufferAttribute(next*3,3).setUsage(T.DynamicDrawUsage);
  geometry.setAttribute('position',coords);
  const mesh=new T.Mesh(geometry,material);
  mesh.castShadow=true;mesh.receiveShadow=true;mesh.frustumCulled=false;
  const combinations=Array.from({length:4},(_,mask)=>new T.Uint16BufferAttribute([
    ...triangles,...arms.flatMap((arm,i)=>mask&(1<<i)?arm.skin:arm.cap),
  ],1));
  geometry.setIndex(combinations[0]);
  const rest=new T.Vector3(),base=new T.Vector3(),elbow=new T.Vector3(),wrist=new T.Vector3(),reach=new T.Vector3();
  const tangent=new T.Vector3(),bend=new T.Vector3(),point=new T.Vector3(),center=new T.Vector3();
  const armFrame=new T.Quaternion(),targetFrame=new T.Quaternion(),blendFrame=new T.Quaternion();
  const forward=new T.Vector3(0,0,-1);
  const restHand=new T.Quaternion().setFromEuler(new T.Euler(-1.42,0,0));
  const lengths=[.24,.62,.94,.56];
  const widths=[.089,.084,.069,.054,.037];

  let lastWidth=0,lastStretch=0,wasTracked=true;
  function pose(hands,segmentLength,width,stretch,showHands){
    const trackedNow=Boolean(hands[0]||hands[1]);
    if(!trackedNow&&!wasTracked&&lastWidth===width&&lastStretch===stretch)return;
    lastWidth=width;lastStretch=stretch;wasTracked=trackedNow;
    for(let j=0;j<vertices;j++){
      const [x,y,z]=bodyRingPoints[j];coords.setXYZ(j,x*width,y*stretch,z*width);
    }
    let visible=0;
    for(let i=0;i<arms.length;i++){
      const arm=arms[i],hand=hands[i],source=handMeshes[i].geometry.attributes.position;
      const tracked=Boolean(hand);
      const jointCenters=arm.wristIndices;
      if(tracked&&showHands)visible|=1<<i;
      base.set(0,0,0);
      for(const joint of arm.socket)base.add(rest.fromBufferAttribute(coords,joint));
      base.multiplyScalar(1/6);
      wrist.set(0,0,0);
      for(const joint of jointCenters)wrist.add(rest.fromBufferAttribute(source,joint));
      wrist.multiplyScalar(1/6).applyQuaternion(hand?.quaternion??restHand);
      if(tracked)wrist.add(hand.position);
      else wrist.add(rest.set(base.x+arm.sign*.026,base.y-.43,base.z-.015));
      reach.subVectors(wrist,base);
      tangent.copy(reach).normalize();
      bend.set(arm.sign*.38,-1,.27).addScaledVector(tangent,-tangent.dot(rest.set(arm.sign*.38,-1,.27))).normalize();
      elbow.copy(base).addScaledVector(reach,.49);
      if(tracked)elbow.addScaledVector(bend,Math.sqrt(Math.max(.007,segmentLength**2-reach.lengthSq()*.25))*.72);
      armFrame.setFromUnitVectors(forward,tangent.subVectors(elbow,base).normalize());
      targetFrame.copy(hand?.quaternion??restHand);
      for(let j=0;j<4;j++){
        const lower=j===3;
        center.lerpVectors(lower?elbow:base,lower?wrist:elbow,lengths[j]);
        blendFrame.copy(armFrame).slerp(targetFrame,lower?.79:j*.19);
        for(let k=0;k<6;k++){
          const ray=jointRays[k],radius=widths[j];
          point.set(ray[0]*radius,ray[1]*radius*.84,0).applyQuaternion(blendFrame).add(center);
          coords.setXYZ(arm.rings[j+1][k],point.x,point.y,point.z);
        }
      }
      for(let j=0;j<arm.remap.length;j++){
        point.fromBufferAttribute(source,j).applyQuaternion(targetFrame);
        if(tracked)point.add(hand.position);
        else point.add(rest.set(base.x+arm.sign*.026,base.y-.43,base.z-.015));
        coords.setXYZ(arm.remap[j],point.x,point.y,point.z);
      }
    }
    if(geometry.index!==combinations[visible])geometry.setIndex(combinations[visible]);
    coords.needsUpdate=true;geometry.computeVertexNormals();
  }
  pose([null,null],.42,1,1,false);
  return {mesh,pose};
}

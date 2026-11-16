import * as T from 'three';
import {gunProfile} from './gun-profile.js';

const shotInterval=.1, speed=45, range=55, maxShots=128, maxSparks=96;
const tracerPalette=[new T.Color('#ffdc4d'),new T.Color('#ff5d35'),new T.Color('#bfc4c8')];
const axis=new T.Vector3(0,0,-1);

// impact reçoit le segment parcouru pendant cette image et renvoie la distance du premier obstacle.
export function createBlasterModel(){
  const mesh=new T.Group(), bore=new T.MeshStandardMaterial({color:'#596974',roughness:.38,metalness:.60});
  const shell=new T.MeshStandardMaterial({color:'#29323e',roughness:.68});
  const accent=new T.MeshBasicMaterial({color:'#ffd563',toneMapped:false});
  function part(geo,material,x,y,z,pitch=0){
    const item=new T.Mesh(geo,material);
    item.position.set(x,y,z);item.rotation.x=pitch;mesh.add(item);
  }
  const frame=new T.MeshStandardMaterial({color:'#7f4231',roughness:.46,metalness:.34});
  part(gunProfile([[.024,.025],[.012,.052],[-.121,.059],[-.157,.046],
    [-.169,.026],[-.146,.003],[-.047,-.005],[.015,.006]],.067),shell,.035,0,0);
  part(gunProfile([[.012,.013],[-.035,.012],[-.045,-.017],[-.016,-.086],[.034,-.078],[.028,-.060]],.042),frame,.035,0,0);
  part(new T.CylinderGeometry(.015,.021,.067,6).rotateX(-Math.PI/2),bore,.035,.028,-.17);
  part(new T.BoxGeometry(.054,.014,.073),frame,.035,.045,-.099);
  part(new T.BoxGeometry(.018,.008,.023),accent,.035,.063,-.131);
  return mesh;
}

export function createArcadeBlaster(scene,{impact,onShot}){
  const mesh=createBlasterModel();
  const flash=new T.Mesh(new T.IcosahedronGeometry(.045,0),new T.MeshBasicMaterial({color:'#ffb339',transparent:true,depthWrite:false,toneMapped:false}));
  flash.position.set(.035,.028,-.208);mesh.add(flash);
  scene.add(mesh);mesh.visible=false;
  const geometry=new T.BufferGeometry(),positions=new T.Float32BufferAttribute(maxShots*18,3).setUsage(T.DynamicDrawUsage);
  const colors=new T.Float32BufferAttribute(maxShots*18,3);
  for(let i=0;i<maxShots;i++)for(let j=0;j<6;j++){
    const color=tracerPalette[Math.floor(j/2)];
    colors.setXYZ(i*6+j,color.r,color.g,color.b);
  }
  geometry.setAttribute('position',positions);geometry.setAttribute('color',colors);
  geometry.setDrawRange(0,0);
  const traces=new T.LineSegments(geometry,new T.LineBasicMaterial({vertexColors:true,toneMapped:false,transparent:true,opacity:.94,depthWrite:false}));
  traces.frustumCulled=false;traces.visible=false;scene.add(traces);
  const sparkPositions=new T.Float32BufferAttribute(maxSparks*3,3).setUsage(T.DynamicDrawUsage);
  const sparkGeometry=new T.BufferGeometry();
  sparkGeometry.setAttribute('position',sparkPositions);
  sparkGeometry.setDrawRange(0,0);
  const sparks=new T.Points(sparkGeometry,new T.PointsMaterial({color:'#ffd268',size:.034,toneMapped:false,
    transparent:true,opacity:.77,depthWrite:false,blending:T.AdditiveBlending}));
  sparks.frustumCulled=false;sparks.visible=false;scene.add(sparks);
  // Les deux pools réutilisent leurs emplacements, même si la gâchette reste enfoncée.
  const shots=Array.from({length:maxShots},()=>({p:new T.Vector3(),d:new T.Vector3(),distance:0,active:false,authoritative:false}));
  const particles=Array.from({length:maxSparks},()=>({p:new T.Vector3(),v:new T.Vector3(),life:0}));
  const muzzle=new T.Vector3(),scratch=new T.Vector3(),side=new T.Vector3();
  let nextShot=0,nextSpark=0,total=0,delay=0,glow=0,wasFiring=false;

  function burst(position,direction,count,power){
    for(let i=0;i<count;i++){
      const spark=particles[nextSpark++%maxSparks];
      spark.p.copy(position);
      spark.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(power).addScaledVector(direction,.55);
      spark.life=.12+Math.random()*.21;
    }
  }
  function startShot(position,quaternion,authoritative){
    const shot=shots[nextShot++%maxShots];
    shot.p.copy(position);shot.d.copy(axis).applyQuaternion(quaternion);
    shot.distance=0;shot.active=true;shot.authoritative=authoritative;
    return shot;
  }
  function fire(aim){
    const shot=startShot(aim.position,aim.quaternion,true);
    muzzle.set(.035,.028,-.208).applyQuaternion(mesh.quaternion).add(mesh.position);
    burst(muzzle,shot.d,4,2.2);
    glow=.055;total++;
    onShot?.(aim.position,aim.quaternion);
  }
  function replay(position,quaternion,authoritative){
    const shot=startShot(position,quaternion,authoritative);
    burst(shot.p,shot.d,4,2.2);
    traces.visible=true;
  }
  function update({dt,aim,firing}){
    if(!aim&&!mesh.visible&&!traces.visible&&!sparks.visible)return;
    dt=Math.max(0,Math.min(dt,.12));
    mesh.visible=Boolean(aim);
    if(aim){
      mesh.position.copy(aim.modelPosition??aim.position);mesh.quaternion.copy(aim.quaternion);
    }
    if(aim&&firing){
      if(wasFiring){
        delay-=dt;
        while(delay<=0){fire(aim);delay+=shotInterval;}
      }else{
        fire(aim);delay=shotInterval;
      }
      wasFiring=true;
    }else{delay=0;wasFiring=false;}
    glow=Math.max(0,glow-dt);
    flash.visible=Boolean(aim)&&glow>0;flash.material.opacity=glow/.055;
    let draw=0;
    for(const shot of shots){
      if(!shot.active)continue;
      const maxDistance=Math.min(speed*dt,range-shot.distance);
      const hit=maxDistance>0?impact?.(shot.p,shot.d,maxDistance,shot.authoritative):null;
      const travel=hit==null?maxDistance:Math.max(0,Math.min(maxDistance,hit));
      shot.p.addScaledVector(shot.d,travel);shot.distance+=travel;
      if(hit!=null){side.copy(shot.d).negate();burst(shot.p,side,8,4.2);}
      shot.active=hit==null&&shot.distance<range;
      const streak=Math.min(.82,shot.distance);
      for(let segment=0;segment<3;segment++){
        for(let i=0;i<2;i++){
          const fraction=(segment+i)/3;
          scratch.copy(shot.p).addScaledVector(shot.d,-streak*fraction);
          positions.setXYZ(draw++,scratch.x,scratch.y,scratch.z);
        }
      }
    }
    // Three.js renvoie les attributs modifiés au GPU. Une géométrie vide reste masquée et propre.
    traces.visible=draw>0;
    if(draw>0)positions.needsUpdate=true;
    geometry.setDrawRange(0,draw);
    let points=0;
    for(const spark of particles){
      if(spark.life<=0)continue;
      spark.life-=dt;spark.v.y-=5*dt;spark.p.addScaledVector(spark.v,dt);
      if(spark.life>0)sparkPositions.setXYZ(points++,spark.p.x,spark.p.y,spark.p.z);
    }
    sparks.visible=points>0;
    if(points>0)sparkPositions.needsUpdate=true;
    sparkGeometry.setDrawRange(0,points);
  }
  function reset(){
    for(const shot of shots)shot.active=false;
    for(const spark of particles)spark.life=0;
    delay=glow=0;wasFiring=false;mesh.visible=flash.visible=traces.visible=sparks.visible=false;
    geometry.setDrawRange(0,0);sparkGeometry.setDrawRange(0,0);
  }
  return {update,reset,replay,get shotsFired(){return total;}};
}

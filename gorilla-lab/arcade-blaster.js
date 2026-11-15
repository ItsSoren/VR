import * as T from 'three';

const shotInterval=.1, speed=45, range=55, maxShots=24, maxSparks=96;
const tracerPalette=[new T.Color('#ffdc4d'),new T.Color('#ff5d35'),new T.Color('#bfc4c8')];
const axis=new T.Vector3(0,0,-1);

export function createArcadeBlaster(scene,{impact}){
  const mesh=new T.Group(), bore=new T.MeshStandardMaterial({color:'#596974',roughness:.38,metalness:.60});
  const shell=new T.MeshStandardMaterial({color:'#29323e',roughness:.68});
  const accent=new T.MeshBasicMaterial({color:'#ffd563',toneMapped:false});
  function part(geo,material,x,y,z,pitch=0){
    const item=new T.Mesh(geo,material);
    item.position.set(x,y,z);item.rotation.x=pitch;mesh.add(item);
  }
  part(new T.BoxGeometry(.075,.064,.18),shell,.035,.024,-.065);
  part(new T.BoxGeometry(.042,.080,.055),bore,.035,-.025,-.022,-.22);
  part(new T.CylinderGeometry(.020,.024,.071,8).rotateX(Math.PI/2),bore,.035,.028,-.161);
  part(new T.BoxGeometry(.024,.010,.025),accent,.035,.061,-.133);
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
  traces.frustumCulled=false;scene.add(traces);
  const sparkPositions=new T.Float32BufferAttribute(maxSparks*3,3).setUsage(T.DynamicDrawUsage);
  const sparkGeometry=new T.BufferGeometry();
  sparkGeometry.setAttribute('position',sparkPositions);
  sparkGeometry.setDrawRange(0,0);
  const sparks=new T.Points(sparkGeometry,new T.PointsMaterial({color:'#ffd268',size:.034,toneMapped:false,
    transparent:true,opacity:.77,depthWrite:false,blending:T.AdditiveBlending}));
  sparks.frustumCulled=false;scene.add(sparks);
  const shots=Array.from({length:maxShots},()=>({p:new T.Vector3(),d:new T.Vector3(),distance:0,active:false}));
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
  function fire(aim){
    const shot=shots[nextShot++%maxShots];
    // Keep the trajectory on the sightline even though the gun model sits to one side.
    muzzle.copy(aim.position);
    shot.p.copy(muzzle);shot.d.copy(aim.direction).normalize();
    if(shot.d.lengthSq()<.5)shot.d.copy(axis).applyQuaternion(aim.quaternion);
    shot.distance=0;shot.active=true;
    scratch.set(.035,.028,-.208).applyQuaternion(mesh.quaternion).add(mesh.position);
    burst(scratch,shot.d,4,2.2);
    glow=.055;total++;
  }
  function update({dt,aim,firing}){
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
      const hit=maxDistance>0?impact?.(shot.p,shot.d,maxDistance):null;
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
    positions.needsUpdate=true;geometry.setDrawRange(0,draw);
    let points=0;
    for(const spark of particles){
      if(spark.life<=0)continue;
      spark.life-=dt;spark.v.y-=5*dt;spark.p.addScaledVector(spark.v,dt);
      if(spark.life>0)sparkPositions.setXYZ(points++,spark.p.x,spark.p.y,spark.p.z);
    }
    sparkPositions.needsUpdate=true;sparkGeometry.setDrawRange(0,points);
  }
  function reset(){
    for(const shot of shots)shot.active=false;
    for(const spark of particles)spark.life=0;
    delay=glow=0;wasFiring=false;mesh.visible=flash.visible=false;
    geometry.setDrawRange(0,0);sparkGeometry.setDrawRange(0,0);
  }
  return {update,reset,get shotsFired(){return total;}};
}

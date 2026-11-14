
import * as T from 'three';

export function landscape({scene, ground, center, random, sun, camera, renderer}) {
  const sky = scene.background;
  const noon = new T.Color('#86c6ec'), dusk = new T.Color('#e9a477'), night = new T.Color('#101b39');
  const daylight = new T.Color('#fff2d6'), twilight = new T.Color('#ff9e68');
  const hemi = scene.children.find(child => child.isHemisphereLight);
  const clouds = new T.Group();
  scene.add(clouds);
  const cloudGeometry = new T.IcosahedronGeometry(1, 1);
  const cloudMaterial = new T.MeshLambertMaterial({ color:'#f3f4df',flatShading:true });
  const shadeGeometry = new T.CircleGeometry(1, 15).rotateX(-Math.PI/2);
  const shadeMaterial = new T.MeshBasicMaterial({ color:'#253746',transparent:true,opacity:.12,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2 });
  const shadows = [];
  for (let i=0; i<14; i++) {
    const cloud = new T.Group();
    cloud.position.set(center.x+(random()-.5)*420,40+random()*24,center.z+(random()-.5)*320);
    for (let j=0;j<5;j++) {
      const puff = new T.Mesh(cloudGeometry,cloudMaterial);
      puff.position.set(j*6-12,random()*3,random()*7);
      puff.scale.set(9+random()*6,2.5+random()*3,6+random()*4);
      cloud.add(puff);
    }
    clouds.add(cloud);
    const shadow = new T.Mesh(shadeGeometry.clone(),shadeMaterial);
    shadow.frustumCulled = false;
    scene.add(shadow);
    shadows.push(shadow);
  }
  const waterMaterial = new T.MeshLambertMaterial({ color:'#559eab', side:T.DoubleSide });
  const lakes = [{x:center.x+48,z:center.z-30,rx:21,rz:15},{x:center.x-51,z:center.z+26,rx:16,rz:12}];
  for (const lake of lakes) {
    const surface = new T.Mesh(new T.CircleGeometry(1,34).rotateX(-Math.PI/2),waterMaterial);
    surface.scale.set(lake.rx,1,lake.rz);
    surface.position.set(lake.x,ground(lake.x,lake.z)+2.3,lake.z);
    scene.add(surface);
    lake.surface = surface;
  }
  const stoneGeometry = new T.IcosahedronGeometry(1,0);
  const rockMaterial = new T.MeshLambertMaterial({ color:'#77796e', flatShading:true });
  const props = new T.InstancedMesh(stoneGeometry,rockMaterial,280);
  const dummy = new T.Object3D();
  for (let i=0;i<props.count;i++) {
    const x=center.x+(random()-.5)*210,z=center.z+(random()-.5)*210,s=.14+random()**3*1.2;
    dummy.position.set(x,ground(x,z)+s*.11,z);
    dummy.rotation.set(random(),random()*6,random()*.4);
    dummy.scale.set(s,s*.55,s*.8);
    dummy.updateMatrix();
    props.setMatrixAt(i,dummy.matrix);
    props.setColorAt(i,new T.Color().setHSL(.10+random()*.08,.08,.57+random()*.27));
  }
  scene.add(props);
  const cave = {x:center.x-32,z:center.z-34};
  const caveRock = new T.MeshLambertMaterial({ color:'#575c56',flatShading:true });
  for(let row=0;row<5;row++) {
    for(let j=0;j<=7;j++) {
      const angle=Math.PI*j/7;
      const x=cave.x+Math.cos(angle)*3.3,z=cave.z-row*2.4;
      const arch=new T.Mesh(stoneGeometry,caveRock);
      arch.position.set(x,ground(x,z)+Math.sin(angle)*3.25,z);
      arch.rotation.set(random(),random(),random());
      arch.scale.set(1.7,1.27,2.1);
      scene.add(arch);
    }
  }
  const dustData=new Float32Array(270*3);
  for(let i=0;i<dustData.length;i++) dustData[i]=(random()-.5)*32;
  const dustGeo=new T.BufferGeometry();
  dustGeo.setAttribute('position',new T.BufferAttribute(dustData,3));
  const dust=new T.Points(dustGeo,new T.PointsMaterial({color:'#f5df9a',size:.043,transparent:true,opacity:.56,depthWrite:false}));
  scene.add(dust);
  const orb = new T.Mesh(new T.IcosahedronGeometry(4,1),new T.MeshBasicMaterial({color:'#ffe0a0',fog:false}));
  scene.add(orb);
  const moon = new T.Mesh(new T.IcosahedronGeometry(2.8,1),new T.MeshBasicMaterial({color:'#c8dcff',fog:false}));
  scene.add(moon);
  let elapsed=0, shadowClock=0;
  return function update(dt, px, pz, settings) {
    elapsed+=dt;
    const phase=(elapsed/420+.20)*Math.PI*2;
    const elevation=Math.sin(phase);
    const day=T.MathUtils.smoothstep(elevation,-.18,.25);
    const edge=(1-T.MathUtils.smoothstep(Math.abs(elevation),.02,.33));
    sky.copy(night).lerp(noon,day).lerp(dusk,edge*.62);
    scene.fog.color.copy(sky);
    scene.fog.near=settings.distance*.12;
    scene.fog.far=settings.distance;
    camera.far=settings.distance+100;
    const sx=Math.cos(phase)*155, sy=elevation*155;
    orb.position.set(px+sx,sy,pz-80);
    moon.position.set(px-sx,-sy,pz+80);
    sun.position.set(sx,Math.max(4,sy),-80);
    sun.color.copy(daylight).lerp(twilight,edge*.85);
    sun.intensity=.06+Math.max(0,elevation)*1.55;
    hemi.intensity=.25+day*1.65;
    shadeMaterial.opacity=settings.quality==='low'?0:Math.max(0,elevation)*.15;
    cloudMaterial.color.copy(night).lerp(daylight,.2+day*.8);
    dust.position.set(px+Math.sin(elapsed*.22)*3,ground(px,pz)+3,pz+Math.cos(elapsed*.14)*3);
    dust.visible=settings.quality!=='low';
    waterMaterial.color.set('#375c7b').lerp(new T.Color('#67aeb2'),day*.85+.1*Math.sin(elapsed*.7));
    shadowClock+=dt;
    const updateShadows=shadowClock>.33;
    if(updateShadows) shadowClock=0;
    clouds.children.forEach((cloud,i)=>{
      cloud.position.x+=dt*(.7+i*.035);
      if(cloud.position.x>center.x+235) cloud.position.x=center.x-235;
      const shadow=shadows[i];
      shadow.visible=shadeMaterial.opacity>.01;
      if(!updateShadows || !shadow.visible) return;
      const position=shadow.geometry.attributes.position;
      const x=cloud.position.x-sx*.12,z=cloud.position.z+10;
      for(let j=0;j<position.count;j++) {
        const a=(j-1)*Math.PI*2/15;
        const xx=j?x+Math.cos(a)*24:x,zz=j?z+Math.sin(a)*10:z;
        position.setXYZ(j,xx,ground(xx,zz)+.07,zz);
      }
      position.needsUpdate=true;
    });
  };
}



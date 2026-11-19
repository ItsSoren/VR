
import * as T from 'three';
import {boxCollider} from './physics.js';
import {tiledBox} from './texture-geometry.js';
import {environmentPreset} from './map-environment.js';
import {createLabSky} from './sky-texture.js';
import {labBounds,labFloors,labMaterialSample,labProbe,labStructures,labZones,labHillSeed} from './lab-layout.js';

function canvasTexture(w,h,paint) {
  const c=document.createElement('canvas');c.width=w;c.height=h;
  paint(c.getContext('2d'),w,h);
  const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;
  return map;
}
// L’arène garde ensemble les maillages, les volumes de collision et les ressources de rendu.
export function buildArena(scene,renderer) {
  const {day:sky,sunset,night:nightSky}=createLabSky();
  const panoramas=[sky,sunset,nightSky],backgroundColor=new T.Color(),fog=new T.Fog('#a6d4ea',55,135);
  const haloTexture=canvasTexture(128,128,(ctx,w)=>{
    const g=ctx.createRadialGradient(w/2,w/2,0,w/2,w/2,w/2);
    g.addColorStop(0,'#fff8df');g.addColorStop(.12,'#fff3bd');g.addColorStop(.18,'rgba(255,225,144,.40)');g.addColorStop(1,'rgba(255,220,144,0)');
    ctx.fillStyle=g;ctx.fillRect(0,0,w,w);
  });
  const halo=new T.Sprite(new T.SpriteMaterial({map:haloTexture,blending:T.AdditiveBlending,depthWrite:false,fog:false,toneMapped:false}));
  halo.scale.setScalar(34);scene.add(halo);
  const skyEnvironment=sky.clone();
  skyEnvironment.mapping=T.EquirectangularReflectionMapping;
  skyEnvironment.needsUpdate=true;
  const pmrem=new T.PMREMGenerator(renderer);
  scene.environment=pmrem.fromEquirectangular(skyEnvironment).texture;
  pmrem.dispose();
  const ambient=new T.HemisphereLight('#daeaff','#88724c',2.25);
  const sun=new T.DirectionalLight('#fff0d0',3);
  sun.position.set(-14,25,-16);
  sun.castShadow=true;
  sun.shadow.mapSize.set(1024,1024);
  Object.assign(sun.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72});
  sun.shadow.bias=-.00025;
  sun.shadow.normalBias=.025;
  scene.add(ambient,sun,sun.target);
  const lightOffset=new T.Vector3();

  let mood=0,environment=null,skyQuality=true,source=null,importedSky=null,hasBloom=true;
  let baseReflection=0,skyRequest=0;
  const direction=new T.Vector3();
  function setTimeOfDay(index){
    mood=[0,1,2].includes(index)?index:0;
    const light=environment??environmentPreset(mood);
    const azimuth=T.MathUtils.degToRad(light.azimuth),elevation=T.MathUtils.degToRad(light.elevation);
    direction.set(Math.cos(azimuth)*Math.cos(elevation),Math.sin(elevation),Math.sin(azimuth)*Math.cos(elevation));
    lightOffset.copy(direction).multiplyScalar(33);
    ambient.color.set(light.ambientColor);
    ambient.groundColor.set(light.groundColor);
    ambient.intensity=light.ambientPower;
    sun.color.set(light.sunColor);
    sun.intensity=light.sunPower;
    sun.position.copy(sun.target.position).add(lightOffset);
    halo.material.color.set(light.sunColor);
    halo.material.opacity=[1,.93,.22][light.preset]*Math.min(1,light.sunPower);
    halo.visible=hasBloom&&light.sunPower>0;
    scene.background=light.sky==='color'||!skyQuality?backgroundColor.set(light.skyColor):
      (light.sky==='image'&&importedSky?importedSky:panoramas[light.preset]);
    scene.backgroundRotation.y=T.MathUtils.degToRad(light.rotation);
    fog.color.set(light.fogColor);
    fog.near=light.fogNear;
    fog.far=light.fogFar;
    scene.fog=light.fog?fog:null;
    scene.environmentIntensity=baseReflection*[1,.56,.09][light.preset];
  }
  function setEnvironment(value,onReady=()=>{}){
    environment=value;
    const image=value?.sky==='image'?value.skyImage:null;
    if(source!==image){
      source=image;
      const request=++skyRequest;
      importedSky?.dispose();importedSky=null;
      if(image)new T.TextureLoader().load(image,texture=>{
        if(skyRequest!==request){texture.dispose();return;}
        texture.colorSpace=T.SRGBColorSpace;texture.mapping=T.EquirectangularReflectionMapping;
        importedSky=texture;setTimeOfDay(mood);onReady();
      },undefined,()=>onReady());
    }
    setTimeOfDay(mood);
  }
  function centerSky(point){
    halo.position.copy(point).addScaledVector(direction,94);
  }
  // Centre la zone d’ombres près du joueur par pas de quatre mètres pour stabiliser la projection.
  function centerShadows(point){
    if(!sun.castShadow)return;
    const target=sun.target.position;
    const x=Math.round(point.x/4)*4,y=Math.round(point.y/4)*4,z=Math.round(point.z/4)*4;
    if(target.x===x&&target.y===y&&target.z===z)return;
    target.set(x,y,z);sun.position.copy(target).add(lightOffset);
  }
  setTimeOfDay(0);
  const palette=[
    ['Ardoise','#555e6a','#b8c8d2',.77,0,1],
    ['Nacre','#537586','#f5e9de',.22,.34,1],
    ['Brique','#855443','#e8a879',.92,0,1],
    ['Sable','#a28e61','#e3c58e',.96,0,1],
    ['Marbre','#bbb8b0','#676d95',.24,.03,1],
    ['Bois','#664527','#d9a864',.63,0,1],
    ['Cuivre','#794a36','#f4a461',.25,.83,1],
    ['Chrome','#758291','#eaf2fa',.10,.97,1],
    ['Carreaux','#293e4b','#a5d9cb',.19,.15,1],
    ['Béton','#626664','#acafa0',.96,0,1],
    ['Verre bleu','#94cfdd','#e3fcff',.12,.24,.39],
    ['Verre ambre','#d1a053','#f9e3a4',.18,.26,.46],
    ['Glace','#7cb0cf','#e4fcff',.16,.20,.64],
    ['Caoutchouc','#45404b','#a1a1b6',.98,0,1],
    ['Émail','#40468c','#f5e1a8',.30,.14,1],
    ['Mosaique','#455d62','#f4d2a4',.52,.16,1],
    ['Benchmark','#141414','#efefef',.86,0,1],
  ];
  function drawTile(ctx,index,detailSize){
      const [,color,accent]=palette[index],w=512;
      ctx.save();ctx.scale(detailSize/512,detailSize/512);
      ctx.fillStyle=color;ctx.fillRect(0,0,w,w);
      let seed=index+19;
      function rng(){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;}
      ctx.fillStyle=accent;
      if(index===16){
        for(let y=0;y<16;y++)for(let x=0;x<16;x++)if((x+y)%2===0)ctx.fillRect(x*32,y*32,32,32);
        ctx.fillStyle='#ff3957';ctx.fillRect(253,0,6,512);ctx.fillRect(0,253,512,6);
      }else if([0,2,8,15].includes(index)){
        const step=index===15?32:64;
        ctx.globalAlpha=.48;
        for(let y=0;y<w;y+=step) {
          ctx.fillRect(0,y,w,index===8?3:2);
          for(let x=-step;x<w;x+=step)ctx.fillRect(x+(y/step%2)*(index===2?step/2:0),y,2,step);
        }
      }else if([4,5,6,7,10,11,12].includes(index)){
        const lines=index===5?38:index===7?64:18;
        for(let j=0;j<lines;j++){
          ctx.strokeStyle=accent;ctx.globalAlpha=.08+rng()*.22;
          ctx.lineWidth=index===5?1+rng()*8:1+rng()*4;
          const y=rng()*w;
          const frequency=index===5?.018:.009;
          ctx.beginPath();
          for(let x=0;x<=w;x+=8){
            const v=y+Math.sin(x*frequency+j)*((index===6||index===7)?4:12+j%5*3)+(index===4?x*.28:0);
            if(x===0)ctx.moveTo(x,v);else ctx.lineTo(x,v);
          }
          ctx.stroke();
        }
      }else{
        ctx.globalAlpha=.27;
        for(let j=0;j<120;j++){
          const x=rng()*w,y=rng()*w,r=2+rng()*6;
          ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
        }
      }
      if(index!==16) for(let i=0;i<4400;i++){
        ctx.globalAlpha=.05+rng()*.10;
        ctx.fillStyle=rng()>.5?accent:'#222324';
        ctx.fillRect(rng()*w,rng()*w,1+rng()*4,1+rng()*3);
      }
      ctx.restore();
  }
  const detailedTiles=new Set([0,2,4,5,8,15,16]);
  const tiles=palette.map(([name,color,accent,roughness,metalness,opacity],index)=>{
    const size=detailedTiles.has(index)?512:256;
    const tex=canvasTexture(size,size,ctx=>drawTile(ctx,index,size));
    tex.wrapS=tex.wrapT=T.RepeatWrapping;
    const material=new T.MeshStandardMaterial({map:tex,roughness,metalness,flatShading:true,opacity,
      transparent:opacity<1,depthWrite:opacity===1});
    material.name=name;
    return material;
  });
  const originals=tiles.map(m=>m.map.image);
  let textureSize=512;
  const alt=tiles.map(m=>new T.MeshLambertMaterial({map:m.map,flatShading:true,opacity:m.opacity,transparent:m.transparent,depthWrite:m.depthWrite}));
  const focusAmount={value:0}, focusRadius={value:.24};
  const lightmap={value:null}, bakedStrength={value:0};
  // Cette texture d’occlusion approximative est réutilisée jusqu’à la prochaine modification de carte.
  function bakeLightmap(){
    lightmap.value?.dispose();
    lightmap.value=canvasTexture(512,512,(ctx,w)=>{
      ctx.fillStyle='#ffffff';ctx.fillRect(0,0,w,w);
      const sx=w/52,sz=w/64;
      for(const b of boxes){
        if(!b.position||!b.half||b.position.y+b.half.y<.22)continue;
        const x=(b.position.x+26)*sx,z=(b.position.z+54)*sz;
        const rx=Math.min(55,b.half.x*sx+5),rz=Math.min(72,b.half.z*sz+6);
        ctx.save();
        ctx.translate(x+b.half.y*sx*.20,z+b.half.y*sz*.24);ctx.scale(rx,rz);
        const g=ctx.createRadialGradient(0,0,.15,0,0,1);
        g.addColorStop(0,'rgba(22,37,65,.54)');g.addColorStop(.58,'rgba(36,54,76,.29)');g.addColorStop(1,'rgba(38,48,57,0)');
        ctx.fillStyle=g;ctx.fillRect(-1,-1,2,2);ctx.restore();
      }
    });
  }
  for(const material of [...tiles,...alt]) {
    material.onBeforeCompile=shader=>{
      shader.uniforms.uFocusAmount=focusAmount;
      shader.uniforms.uFocusRadius=focusRadius;
      shader.uniforms.uLabLightmap=lightmap;
      shader.uniforms.uLabBakedStrength=bakedStrength;
      shader.vertexShader='varying vec3 vLabPosition;\n'+shader.vertexShader;
      shader.vertexShader=shader.vertexShader.replace('#include <worldpos_vertex>','#include <worldpos_vertex>\nvLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;');
      shader.fragmentShader='uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;\n'+shader.fragmentShader;
      shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`
        #ifdef USE_MAP
          float eccentricity=length(vViewPosition.xy)/max(.01,vViewPosition.z);
          float fade=smoothstep(uFocusRadius,uFocusRadius+.42,eccentricity);
          diffuseColor *= texture2D(map,vMapUv,fade*uFocusAmount);
        #endif
        if(uLabBakedStrength>.001){
          vec2 bakedUV=vec2((vLabPosition.x+26.)/52.,1.-(vLabPosition.z+54.)/64.);
          float floorWeight=1.-smoothstep(.03,2.8,max(vLabPosition.y,0.));
          diffuseColor.rgb*=mix(vec3(1.),texture2D(uLabLightmap,bakedUV).rgb,uLabBakedStrength*floorWeight);
        }
      `);
    };
    material.customProgramCacheKey=()=> 'gorilla-lab-focus-lightmap-v2';
  }
  const boxes=[], props=[];
  function box(name,x,y,z,w,h,d,type=0,angle=0,friction=1,gravity=1,showTexture=false) {
    const mesh=new T.Mesh(showTexture?new T.BoxGeometry(w,h,d):tiledBox(w,h,d),tiles[type]);
    mesh.position.set(x,y,z);
    mesh.rotation.x=angle;
    mesh.receiveShadow=true;mesh.castShadow=true;
    scene.add(mesh);
    const half=new T.Vector3(w/2,h/2,d/2);
    const b={mesh,position:mesh.position,quaternion:mesh.quaternion,half,min:half.clone().negate(),friction,gravity,name,type,shape:boxCollider(half)};
    boxes.push(b);return b;
  }
  const floors=labFloors.map(({name,bounds,type=0,friction=.78,gravity=1})=>{
    const {xMin,xMax,zMin,zMax}=bounds;
    return box(name,(xMin+xMax)/2,-.33,(zMin+zMax)/2,xMax-xMin,.66,zMax-zMin,type,0,friction,gravity);
  });
  for(const pieces of Object.values(labStructures))for(const piece of pieces)box(...piece);
  const {xMin,xMax,zMin,zMax}=labBounds;
  box('Butée arrière',0,1.35,zMin+.4,xMax-xMin,2.7,.6,2);
  box('Butée ouest',xMin+.3,1.05,(zMin+zMax)/2,.6,2.1,zMax-zMin,2);
  box('Butée est',xMax-.3,1.05,(zMin+zMax)/2,.6,2.1,zMax-zMin,2);

  const {xMin:hillX,xMax:hillRight,zMin:hillZ,zMax:hillBack}=labZones.hills.bounds;
  const hillWidth=hillRight-hillX,hillDepth=hillBack-hillZ,hillCols=16,hillRows=64;
  const hillGeometry=new T.PlaneGeometry(hillWidth,hillDepth,hillCols,hillRows).rotateX(-Math.PI/2)
    .translate(hillX+hillWidth/2,0,hillZ+hillDepth/2);
  const hillUV=hillGeometry.attributes.uv;
  for(let i=0;i<hillUV.count;i++)hillUV.setXY(i,hillUV.getX(i)*hillWidth/2.6,hillUV.getY(i)*hillDepth/2.6);
  const hillPositions=hillGeometry.attributes.position;
  let hillSeed;
  function setHillSeed(seed){
    if(hillSeed===seed)return;
    hillSeed=seed;
    const phase=hillSeed*.017;
    for(let i=0;i<hillPositions.count;i++){
      const x=hillPositions.getX(i),z=hillPositions.getZ(i);
      const edge=Math.sin(Math.PI*T.MathUtils.clamp((x-hillX)/hillWidth,0,1));
      const ends=Math.min(1,(z-hillZ)*.48,(hillBack-z)*.48);
      const rolling=.93+.56*Math.sin(z*.36+phase)+.32*Math.cos(x*.67+z*.26+phase*1.4)+.19*Math.sin(z*.81+phase*.67);
      hillPositions.setY(i,Math.max(0,edge*ends*rolling));
    }
    hillPositions.needsUpdate=true;
    hillGeometry.computeVertexNormals();hillGeometry.computeBoundingSphere();
  }
  setHillSeed(labHillSeed);
  const hill=new T.Mesh(hillGeometry,tiles[3]);
  hill.userData.editorAssetId='lab-hill';
  hill.receiveShadow=hill.castShadow=true;scene.add(hill);
  const height=(x,z)=>{
    const gx=T.MathUtils.clamp((x-hillX)/hillWidth*hillCols,0,hillCols-1e-6);
    const gz=T.MathUtils.clamp((z-hillZ)/hillDepth*hillRows,0,hillRows-1e-6);
    const i=Math.floor(gx),j=Math.floor(gz),u=gx-i,v=gz-j;
    const row=hillCols+1,idx=j*row+i;
    const a=hillPositions.getY(idx),b=hillPositions.getY(idx+1),c=hillPositions.getY(idx+row),d=hillPositions.getY(idx+row+1);
    return u+v<=1?a+(b-a)*u+(c-a)*v:d+(c-d)*(1-u)+(b-d)*(1-v);
  };
  boxes.push({heightfield:true,mesh:hill,editorAssetId:'lab-hill',height,...labZones.hills.bounds,friction:.81,gravity:1});

  function sign(text,x,z,color,y=1.45) {
    const texture=canvasTexture(384,72,(c,w,h)=>{
      c.fillStyle='#202a32';c.fillRect(0,0,w,h);c.fillStyle=color;
      c.font='bold 31px system-ui';c.textAlign='center';c.fillText(text,w/2,48,w-20);
    });
    const mesh=new T.Mesh(new T.PlaneGeometry(3.2,.6),new T.MeshBasicMaterial({map:texture,side:T.DoubleSide}));
    mesh.position.set(x,y,z);scene.add(mesh);props.push(mesh);
  }
  for(const zone of Object.values(labZones)){
    sign(zone.name.toLocaleUpperCase('fr'),...zone.sign,zone.color);
    const {xMin,xMax,zMin,zMax}=zone.bounds;
    const outline=new T.LineLoop(new T.BufferGeometry().setFromPoints([
      new T.Vector3(xMin,.025,zMin),new T.Vector3(xMax,.025,zMin),
      new T.Vector3(xMax,.025,zMax),new T.Vector3(xMin,.025,zMax),
    ]),new T.LineBasicMaterial({color:zone.color,transparent:true,opacity:.72}));
    scene.add(outline);props.push(outline);
  }
  sign('PALIERS ET RAMPE',-3.75,-28.4,'#e8d2ff');
  sign('MURS HAUTS',3,-31,'#e8d2ff');
  sign('ARRIVÉE',1.02,-48.15,'#e8d2ff',3.4);
  const chrome=new T.MeshStandardMaterial({color:'#c8e6ed',metalness:1,roughness:.16});
  const probe=new T.Mesh(new T.IcosahedronGeometry(.54,2),chrome);
  probe.userData.editorAssetId='chrome-sphere';
  probe.position.set(labProbe.x,labProbe.y,labProbe.z);probe.castShadow=true;scene.add(probe);
  const display=palette.map((_,i)=>{
    const {x,z}=labMaterialSample(i);
    return box('Échantillon '+palette[i][0],x,.325,z,.65,.65,.65,i,0,1,1,true).mesh;
  });
  const shadowGeo=new T.CircleGeometry(1,12).rotateX(-Math.PI/2);
  const shadowMaterial=new T.MeshBasicMaterial({color:0x564b38,transparent:true,opacity:.13,depthWrite:false});
  function shadow(r) {const mesh=new T.Mesh(shadowGeo,shadowMaterial);mesh.scale.setScalar(r);scene.add(mesh);return mesh;}
  function visual(level,shadows,lighting,reflections,bloom,textures,size,baked) {
    const expensive=shadows>=3;
    renderer.shadowMap.enabled=expensive;
    sun.castShadow=expensive;
    shadowMaterial.opacity=shadows===2?.17:.11;
    bakedStrength.value=baked?.38+lighting*.04:0;
    const shadowSize=shadows>=9?2048:shadows>=6?1024:shadows>=4?512:256;
    sun.shadow.intensity=.45+shadows*.055;
    sun.shadow.radius=.65+shadows*.12;
    const shadowExtent=13+shadows*1.2;
    Object.assign(sun.shadow.camera,{left:-shadowExtent,right:shadowExtent,top:shadowExtent,bottom:-shadowExtent});
    sun.shadow.camera.updateProjectionMatrix();
    if(sun.shadow.mapSize.x!==shadowSize){sun.shadow.map?.dispose();sun.shadow.map=null;sun.shadow.mapSize.set(shadowSize,shadowSize);}
    hasBloom=bloom;
    if(size!==textureSize){
      textureSize=size;
      tiles.forEach((m,i)=>{
        const tex=m.userData.texture??m.map;
        const targetSize=detailedTiles.has(i)?size:Math.min(256,size);
        if(tex.image.width===targetSize)return;
        const image=document.createElement('canvas');
        image.width=image.height=targetSize;
        const ctx=image.getContext('2d');
        if(targetSize>512)drawTile(ctx,i,targetSize);
        else ctx.drawImage(originals[i],0,0,targetSize,targetSize);
        const resized=new T.CanvasTexture(image);
        resized.colorSpace=tex.colorSpace;resized.wrapS=tex.wrapS;resized.wrapT=tex.wrapT;resized.repeat.copy(tex.repeat);
        for(const material of [m,alt[i]]){material.userData.texture=resized;material.map=resized;material.needsUpdate=true;}
        tex.dispose();
      });
    }
    const standard=level>=4;
    for(const b of boxes) if(b.mesh?.isMesh&&!b.zone) b.mesh.material=standard?tiles[b.type]:alt[b.type];
    hill.material=standard?tiles[3]:alt[3];
    for(let i=0;i<display.length;i++)display[i].material=standard?tiles[i]:alt[i];
    tiles.forEach((m,i)=>{for(const material of [m,alt[i]]) {
      if(!material.userData.texture) material.userData.texture=material.map;
      material.map=textures?material.userData.texture:null;
      material.color.set(textures?'#ffffff':palette[i][1]);
      material.needsUpdate=true;
    }});
    baseReflection=reflections?(.21+lighting*.067):0;
    chrome.metalness=reflections?.95:.1;
    chrome.roughness=reflections?.13:.46;
    skyQuality=level>=2;
    setTimeOfDay(mood);
  }
  return {boxes,floors,probe,display,visual,shadow,setTimeOfDay,setEnvironment,centerSky,centerShadows,lighting:[ambient,sun,sun.target,halo],get hillSeed(){return hillSeed;},setHillSeed,bakeLightmap,mapMaterial:(i,level)=>level>=4?tiles[i]:alt[i],builtObjects:[...boxes.map(b=>b.mesh).filter(m=>m?.isObject3D),probe,...props],materials:[...tiles,...alt],focus(enabled,intensity,radius){focusAmount.value=enabled?intensity*.75:0;focusRadius.value=.07+radius*.058;}};
}









import * as T from 'three';
import {boxCollider} from './physics.js';

function canvasTexture(w,h,paint) {
  const c=document.createElement('canvas');c.width=w;c.height=h;
  paint(c.getContext('2d'),w,h);
  const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;
  return map;
}
export function buildArena(scene,renderer) {
  const sky=canvasTexture(512,256,(ctx,w,h)=>{
    const gradient=ctx.createLinearGradient(0,20,0,h*.57);
    gradient.addColorStop(0,'#2376bf');gradient.addColorStop(.65,'#72bff1');gradient.addColorStop(1,'#f4e5c8');
    ctx.fillStyle=gradient;ctx.fillRect(0,0,w,h);
    for(let i=0;i<58;i++){
      const x=(i*173.833)%w,y=73+(i*23.45)%48;
      ctx.fillStyle='rgba(255,254,235,'+(.014+(i%6)*.014)+')';
      for(const dx of [-w,0,w]){
        ctx.beginPath();ctx.ellipse(x+dx,y,14+(i%8)*7,3+(i%4)*2,0,0,Math.PI*2);ctx.fill();
      }
    }
  });
  const dome=new T.Mesh(new T.SphereGeometry(180,40,20),new T.MeshBasicMaterial({map:sky,side:T.BackSide,fog:false,toneMapped:false}));
  scene.add(dome);
  const haloTexture=canvasTexture(128,128,(ctx,w)=>{
    const g=ctx.createRadialGradient(w/2,w/2,0,w/2,w/2,w/2);
    g.addColorStop(0,'#fff8df');g.addColorStop(.12,'#fff3bd');g.addColorStop(.18,'rgba(255,225,144,.40)');g.addColorStop(1,'rgba(255,220,144,0)');
    ctx.fillStyle=g;ctx.fillRect(0,0,w,w);
  });
  const halo=new T.Sprite(new T.SpriteMaterial({map:haloTexture,blending:T.AdditiveBlending,depthWrite:false,fog:false,toneMapped:false}));
  halo.position.set(-50,38,-64);halo.scale.setScalar(34);scene.add(halo);
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
  scene.add(ambient,sun);

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
  const tiles=palette.map(([name,color,accent,roughness,metalness,opacity],index)=>{
    const tex=canvasTexture(512,512,(ctx,w)=>{
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
    });
    tex.wrapS=tex.wrapT=T.RepeatWrapping;
    if(index<4)tex.repeat.set(index===1?2:4,index===1?2:4);
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
  function box(name,x,y,z,w,h,d,type=0,angle=0,friction=1,gravity=1) {
    const mesh=new T.Mesh(new T.BoxGeometry(w,h,d),tiles[type]);
    mesh.position.set(x,y,z);
    mesh.rotation.x=angle;
    mesh.receiveShadow=true;mesh.castShadow=true;
    scene.add(mesh);
    const half=new T.Vector3(w/2,h/2,d/2);
    const b={mesh,position:mesh.position,quaternion:mesh.quaternion,half,min:half.clone().negate(),friction,gravity,name,type,shape:boxCollider(half)};
    boxes.push(b);return b;
  }
  box('Normal',0,-.33,-22,12,.66,58,0,0,.78);
  box('Glace',-9,-.33,-22,6,.66,58,1,0,.035);
  box('Faible gravité',9,-.33,-22,6,.66,58,3,0,.75,.28);
  box('Pente',0,.47,-10,5,.43,5,2,.28,.88);
  box('Mur gauche',-3.4,2.2,-14.8,.38,4.4,5.7,2);
  box('Mur droit',3.4,2.2,-14.8,.38,4.4,5.7,2);
  box('Palier',0,1.55,-16,2.7,.38,1.4,3);
  box('Portique haut',0,3.15,-18,7,.45,.58,2);
  box('Tapis de départ',0,-.060,3.45,6.7,.13,4.2,13);
  box('Allée centrale',0,-.101,-7.3,3,.21,12.2,8);
  box('Pas de tir',16,-.096,-6.3,4.2,.20,4.7,16);
  box('Point de montée',-7.7,-.092,-19.7,4.6,.19,2.25,5);
  const hillGeometry=new T.PlaneGeometry(12,58,16,64).rotateX(-Math.PI/2).translate(-18,0,-22);
  const hillPositions=hillGeometry.attributes.position;
  const hillSeed=Math.floor(Math.random()*1000000),phase=hillSeed*.017;
  for(let i=0;i<hillPositions.count;i++){
    const x=hillPositions.getX(i),z=hillPositions.getZ(i);
    const edge=Math.sin(Math.PI*T.MathUtils.clamp((x+24)/12,0,1));
    const ends=Math.min(1,(z+51)*.48,(7-z)*.48);
    const rolling=.93+.56*Math.sin(z*.36+phase)+.32*Math.cos(x*.67+z*.26+phase*1.4)+.19*Math.sin(z*.81+phase*.67);
    hillPositions.setY(i,Math.max(0,edge*ends*rolling));
  }
  hillGeometry.computeVertexNormals();
  const hill=new T.Mesh(hillGeometry,tiles[3]);
  hill.receiveShadow=hill.castShadow=true;scene.add(hill);
  const height=(x,z)=>{
    const gx=T.MathUtils.clamp((x+24)/12*16,0,15.999999),gz=T.MathUtils.clamp((z+51)/58*64,0,63.999999);
    const i=Math.floor(gx),j=Math.floor(gz),u=gx-i,v=gz-j;
    const idx=j*17+i;
    const a=hillPositions.getY(idx),b=hillPositions.getY(idx+1),c=hillPositions.getY(idx+17),d=hillPositions.getY(idx+18);
    return u+v<=1?a+(b-a)*u+(c-a)*v:d+(c-d)*(1-u)+(b-d)*(1-v);
  };
  boxes.push({heightfield:true,height,xMin:-24,xMax:-12,zMin:-51,zMax:7,friction:.81,gravity:1});
  box('Aile droite',18,-.33,-22,12,.66,58,0);
  for(let i=0;i<5;i++){
    const y=.30+i*.29;
    box('Paliers '+(i+1),-8.3+(i%2)*1.38,y*.5,-21-i*2.05,1.8,y,1.42,i%2?2:3);
  }
  box('Rampe longue',-5.8,1.32,-32.6,3.25,.40,8.8,2,.34);
  box('Balcon',-5.8,2.60,-38.2,7.4,.48,3.65,3);
  box('Passerelle',-.8,2.60,-38.2,2.75,.40,1.40,0);
  box('Arrivée',3.6,2.57,-39.5,4.8,.44,4.8,1);
  for(let i=0;i<3;i++){
    box('Paroi ouest '+i,5.7,2.15+i*.32,-22.8-i*4.6,.48,4.30+i*.64,3.3,2);
    box('Paroi est '+i,9.15,2.36+i*.30,-24.1-i*4.6,.48,4.72+i*.60,3.25,3);
  }
  box('Plateforme haute',7.4,3.4,-36.0,3.5,.45,3.0,0);
  box('Butée arrière',0,1.35,-50.6,48,2.7,.6,2);
  box('Butée ouest',-23.7,1.05,-22,.6,2.1,58,2);
  box('Butée est',23.7,1.05,-22,.6,2.1,58,2);
  box('Appui haut',5.5,.48,-6,1.1,.96,2,0);
  box('Marche',5.5,.21,-4,1.1,.42,2,3);
  function sign(text,x,z,color) {
    const texture=canvasTexture(256,64,(c,w,h)=>{
      c.fillStyle='#202a32';c.fillRect(0,0,w,h);c.fillStyle=color;
      c.font='bold 23px system-ui';c.textAlign='center';c.fillText(text,w/2,40);
    });
    const mesh=new T.Mesh(new T.PlaneGeometry(2.5,.625),new T.MeshBasicMaterial({map:texture,side:T.DoubleSide}));
    mesh.position.set(x,1.45,z);scene.add(mesh);props.push(mesh);
  }
  sign('GLACE',-9,-11,'#b4eaff');sign('WALL JUMP',0,-17,'#ffddb0');sign('GRAVITÉ BASSE',9,-11,'#e3f9b4');
  const chrome=new T.MeshStandardMaterial({color:'#c8e6ed',metalness:1,roughness:.16});
  const probe=new T.Mesh(new T.IcosahedronGeometry(.54,2),chrome);
  probe.position.set(2.6,.68,-3.6);probe.castShadow=true;scene.add(probe);
  sign('02 · MATÉRIAUX / BENCHMARK',0,-8,'#ffddb0');
  sign('01 · DÉPART',0,5.4,'#f6dca6');
  sign('03 · LANCERS / CIBLE',16,-9,'#e6f2b7');
  sign('PALIERS / RAMPE',-7.6,-20,'#f4dca5');
  sign('04 · TERRAIN VALLONNÉ',-16.8,1.0,'#deefb4');
  sign('05 · PARCOURS',0,-18.4,'#f6dca6');
  sign('PARCOURS MURAL',7.4,-20,'#f4dca5');
  sign('ARRIVÉE',3.6,-41,'#f4dca5');
  const display=palette.map((_,i)=>{
    const displayBox=box('Échantillon '+palette[i][0],-4.7+(i%8)*1.31,.325,-2.7-Math.floor(i/8)*1.52,.65,.65,.65,i);
    return displayBox.mesh;
  });
  const shadowGeo=new T.CircleGeometry(1,12).rotateX(-Math.PI/2);
  const shadowMaterial=new T.MeshBasicMaterial({color:0x564b38,transparent:true,opacity:.13,depthWrite:false});
  function shadow(r) {const mesh=new T.Mesh(shadowGeo,shadowMaterial);mesh.scale.setScalar(r);scene.add(mesh);return mesh;}
  function visual(level,shadows,reflections,bloom,textures,size,baked) {
    const expensive=level>=7&&shadows;
    renderer.shadowMap.enabled=expensive;
    sun.castShadow=expensive;
    bakedStrength.value=baked?.66:0;
    const shadowSize=level===10?2048:1024;
    if(sun.shadow.mapSize.x!==shadowSize){sun.shadow.map?.dispose();sun.shadow.map=null;sun.shadow.mapSize.set(shadowSize,shadowSize);}
    halo.visible=bloom;
    if(size!==textureSize){
      textureSize=size;
      tiles.forEach((m,i)=>{
        const tex=m.userData.texture??m.map;
        const image=document.createElement('canvas');
        image.width=image.height=size;
        const ctx=image.getContext('2d');
        ctx.drawImage(originals[i],0,0,size,size);
        if(size>512){
          let seed=i+188;
          for(let p=0;p<size*13;p++){
            seed=(Math.imul(seed,1664525)+1013904223)>>>0;
            const x=seed%size;
            seed=(Math.imul(seed,1664525)+1013904223)>>>0;
            const y=seed%size;
            ctx.fillStyle=(seed&256)?'rgba(255,249,225,.085)':'rgba(25,33,40,.08)';
            ctx.fillRect(x,y,1+(seed>>>20)%3,1);
          }
        }
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
    scene.environmentIntensity=reflections?(level>=4?.8:.22):0;
    chrome.metalness=reflections?.95:.1;
    chrome.roughness=reflections?.13:.46;
    dome.visible=level>=2;
    scene.background=new T.Color('#83c7ed');
  }
  return {boxes,probe,display,visual,shadow,hillSeed,bakeLightmap,mapMaterial:(i,level)=>level>=4?tiles[i]:alt[i],builtObjects:[...boxes.map(b=>b.mesh).filter(m=>m?.isObject3D),hill,probe,...props],materials:[...tiles,...alt],focus(enabled,intensity,radius){focusAmount.value=enabled?intensity*.75:0;focusRadius.value=.07+radius*.058;}};
}







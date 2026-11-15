
import * as T from 'three';

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
  const tiles=['#a9a586','#7099a6','#a58572','#9a936e'].map((color,index)=>{
    const tex=canvasTexture(512,512,(ctx,w)=>{
      ctx.scale(w/128,w/128);w=128;
      ctx.fillStyle=color;ctx.fillRect(0,0,w,w);
      let seed=index+19;
      function rng(){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;}
      for(let i=0;i<3500;i++) {
        ctx.fillStyle=rng()>.5?'rgba(255,245,217,.13)':'rgba(44,38,31,.12)';
        ctx.fillRect(rng()*w,rng()*w,1+rng()*3,1+rng()*2);
      }
      ctx.strokeStyle='rgba(28,35,31,.19)';
      ctx.lineWidth=1.5;
      for(let y=0;y<=128;y+=32){
        ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();
        for(let x=(y%64?16:0);x<128;x+=32) {ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x,y+32);ctx.stroke();}
      }
    });
    tex.wrapS=tex.wrapT=T.RepeatWrapping;tex.repeat.set(index===1?2:4,index===1?2:4);
    return new T.MeshStandardMaterial({map:tex,roughness:[.87,.20,.72,.95][index],metalness:index===1?.28:0,flatShading:true});
  });
  const originals=tiles.map(m=>m.map.image);
  let textureSize=512;
  const alt=tiles.map(m=>new T.MeshLambertMaterial({map:m.map,flatShading:true}));
  const focusAmount={value:0}, focusRadius={value:.24};
  for(const material of [...tiles,...alt]) {
    material.onBeforeCompile=shader=>{
      shader.uniforms.uFocusAmount=focusAmount;
      shader.uniforms.uFocusRadius=focusRadius;
      shader.fragmentShader='uniform float uFocusAmount; uniform float uFocusRadius;\n'+shader.fragmentShader;
      shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`
        #ifdef USE_MAP
          float eccentricity=length(vViewPosition.xy)/max(.01,vViewPosition.z);
          float fade=smoothstep(uFocusRadius,uFocusRadius+.42,eccentricity);
          diffuseColor *= texture2D(map,vMapUv,fade*uFocusAmount);
        #endif
      `);
    };
    material.customProgramCacheKey=()=> 'gorilla-lab-focus-v1';
  }
  const boxes=[], props=[];
  function box(name,x,y,z,w,h,d,type=0,angle=0,friction=1,gravity=1) {
    const mesh=new T.Mesh(new T.BoxGeometry(w,h,d),tiles[type]);
    mesh.position.set(x,y,z);
    mesh.rotation.x=angle;
    mesh.receiveShadow=true;mesh.castShadow=true;
    scene.add(mesh);
    const half=new T.Vector3(w/2,h/2,d/2);
    const b={mesh,position:mesh.position,quaternion:mesh.quaternion,half,min:half.clone().negate(),friction,gravity,name,type};
    boxes.push(b);return b;
  }
  box('Normal',0,-.33,-5,12,.66,24,0,0,.78);
  box('Glace',-9,-.33,-5,6,.66,24,1,0,.035);
  box('Faible gravité',9,-.33,-5,6,.66,24,3,0,.75,.28);
  box('Pente',0,.47,-10,5,.43,5,2,.28,.88);
  box('Mur gauche',-3.4,2.2,-14.8,.38,4.4,5.7,2);
  box('Mur droit',3.4,2.2,-14.8,.38,4.4,5.7,2);
  box('Palier',0,1.55,-16,2.7,.38,1.4,3);
  box('Mur fond',0,1.7,-17.2,24,3.4,.38,2);
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
  const display=[0,1,2,3].map((i)=>{
    const m=new T.Mesh(new T.BoxGeometry(.65,.65,.65),tiles[i]);
    m.position.set(-1.35+i*.9,.4,-3.6);m.castShadow=true;scene.add(m);return m;
  });
  const shadowGeo=new T.CircleGeometry(1,12).rotateX(-Math.PI/2);
  const shadowMaterial=new T.MeshBasicMaterial({color:0x564b38,transparent:true,opacity:.13,depthWrite:false});
  function shadow(r) {const mesh=new T.Mesh(shadowGeo,shadowMaterial);mesh.scale.setScalar(r);scene.add(mesh);return mesh;}
  function visual(level,shadows,reflections,bloom,textures,size) {
    const expensive=level>=7&&shadows;
    renderer.shadowMap.enabled=expensive;
    sun.castShadow=expensive;
    halo.visible=bloom;
    if(size!==textureSize){
      textureSize=size;
      tiles.forEach((m,i)=>{
        const tex=m.userData.texture??m.map;
        const image=document.createElement('canvas');
        image.width=image.height=size;
        image.getContext('2d').drawImage(originals[i],0,0,size,size);
        tex.image=image;tex.needsUpdate=true;
      });
    }
    const standard=level>=4;
    for(const b of boxes) b.mesh.material=standard?tiles[b.type]:alt[b.type];
    tiles.forEach((m,i)=>{for(const material of [m,alt[i]]) {
      const map=textures?m.userData.texture??m.map:null;
      if(!material.userData.texture) material.userData.texture=material.map;
      material.map=textures?material.userData.texture:null;
      material.color.set(textures?'#ffffff':['#a9a586','#7099a6','#a58572','#9a936e'][i]);
      material.needsUpdate=true;
    }});
    scene.environmentIntensity=reflections?(level>=4?.8:.22):0;
    chrome.metalness=reflections?.95:.1;
    chrome.roughness=reflections?.13:.46;
    dome.visible=level>=2;
    scene.background=new T.Color('#83c7ed');
  }
  return {boxes,probe,display,visual,shadow,materials:[...tiles,...alt],focus(enabled,intensity,radius){focusAmount.value=enabled?intensity*.75:0;focusRadius.value=.07+radius*.058;}};
}







import {locations} from './level.mjs';
import {createExpedition,headUnderwater} from './expedition.mjs';
import {createSoundscape} from './sound.mjs';
import {createEncounter} from './rencontre.mjs';
import {createWaterEffects} from './bassin.mjs';

export function createExperience({T,scene,audioContext,announce,goHome}) {
  const mission = createExpedition();
  const sound = createSoundscape(audioContext);
  const markerGroup = new T.Group();
  scene.add(markerGroup);
  scene.add(new T.HemisphereLight('#d0d5da','#796f57',.71));
  const surface = (color,roughness=.82) => new T.MeshStandardMaterial({color,roughness});
  const flat = color => new T.MeshBasicMaterial({color});
  const box = (parent,material,x,y,z,w,h,d) => {
    const part = new T.Mesh(new T.BoxGeometry(w,h,d),material);
    part.position.set(x,y,z);
    parent.add(part);
    return part;
  };
  const amber = flat('#e4a457');
  const white = flat('#b5c4bc');
  const red = flat('#a84335');
  const green = flat('#82a67a');
  const frame = surface('#363a3b');
  function lightStrip(x,y,z,color,width=.72) {
    box(markerGroup,frame,x,y,z,width+.1,.16,.14);
    box(markerGroup,color,x,y,z+.075,width,.085,.028);
    box(markerGroup,color,x,y,z-.075,width,.085,.028);
  }
  lightStrip(0,2.19,-4.74,amber);
  lightStrip(0,2.14,-12.72,amber);
  lightStrip(0,2.34,-25.50,amber);
  lightStrip(.96,2.16,-6.72,amber,.39);
  lightStrip(-.96,2.16,-8.97,amber,.39);
  const depthLightGeometry=new T.BoxGeometry(.06,.14,.36);
  const lightTransform=new T.Matrix4();
  for(const [material,heights] of [[white,[-4.48,-10.38]],[red,[-16.28]]]){
    const lights=new T.InstancedMesh(depthLightGeometry,material,heights.length*6);
    let index=0;
    for(const x of [-10.7,10.7])for(const y of heights)for(const z of [-17.5,-25,-32.5]){
      lights.setMatrixAt(index++,lightTransform.makeTranslation(x,y,z));
    }
    markerGroup.add(lights);
  }
  lightStrip(-8.4,-.72,-20.44,red,.28);
  lightStrip(8.4,-.72,-20.44,red,.28);
  for(const z of [-35.0,-40.5,-46.1]) lightStrip(0,2.84,z,white,1.04);
  lightStrip(0,2.43,-48.20,white,.58);
  lightStrip(-1.25,2.39,-57.1,red,.24);

  function label(lines,width,x,y,z,rotation=0) {
    const canvas = document.createElement('canvas');
    canvas.width=512;
    canvas.height=lines.length*52+40;
    const ctx=canvas.getContext('2d');
    ctx.fillStyle='#292d2a';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.strokeStyle='#a48a52';
    ctx.lineWidth=7;
    ctx.strokeRect(8,8,496,canvas.height-16);
    ctx.font='bold 34px monospace';
    ctx.fillStyle='#d3c8a5';
    lines.forEach((line,i)=>ctx.fillText(line,25,53+i*52,462));
    const texture=new T.CanvasTexture(canvas);
    texture.colorSpace=T.SRGBColorSpace;
    const sign=new T.Mesh(new T.PlaneGeometry(width,width*canvas.height/canvas.width),
      new T.MeshBasicMaterial({map:texture}));
    sign.position.set(x,y,z);
    sign.rotation.y=rotation;
    markerGroup.add(sign);
  }
  label(['POSTE 01 / REFUGE','LAMPE SUR L’ÉTABLI'],1.24,-.94,1.26,-4.78);
  label(['PUITS 03   >'],.96,-.60,1.03,-6.73);
  label(['<   PUITS 03'],.96,.60,1.03,-8.98);
  label(['PUITS DE SERVICE'],1.07,-.88,1.71,-12.66);
  label(['POMPES / ARCHIVES'],1.10,0,2.08,-34.07);
  label(['02 / PURGE','GRIP OU E'],.89,3.86,1.23,-41.45,-Math.PI/2);
  label(['RÉCEPTION / RETOUR'],1.15,0,2.03,-13.22,Math.PI);
  label(['REFUGE  >'],.92,.60,1.03,-9.42,Math.PI);
  label(['<  REFUGE'],.92,-.60,1.03,-7.17,Math.PI);

  const practicals = [new T.PointLight('#ffb666',12,6,1.7),new T.PointLight('#ffb666',9,5,1.8)];
  scene.add(...practicals);
  const lightZones = [
    [[-1.50,1.62,-.32,'#ffc076',12],[.1,1.75,-4.65,'#f0a251',9]],
    [[0,1.79,-12.52,'#ffac50',11],[0,1.78,-25.52,'#ffc47b',8]],
    [[0,1.84,-25.42,'#ffae65',10],[.10,2.15,-33.94,'#b4d1c9',13]],
    [[-1.6,2.16,-39.2,'#c1d5b8',15],[.3,2.03,-46.4,'#9cc3c7',11]],
    [[.4,2.19,-49.02,'#a9ced3',13],[-1.2,2.11,-56.3,'#f0774d',8]],
  ];
  let lightingZone=-1;
  function placeLights(z){
    const zone = z> -7 ? 0 : z> -23.5 ? 1 : z> -34 ? 2 : z> -47.1 ? 3 : 4;
    if(zone===lightingZone)return;
    lightingZone=zone;
    lightZones[zone].forEach(([x,y,at,color,intensity],i)=>{
      const light=practicals[i];
      light.position.set(x,y,at);
      light.color.set(color);
      light.intensity=intensity;
    });
  }

  const valvePosition = new T.Vector3(...locations.valve);
  const valve = new T.Mesh(new T.TorusGeometry(.145,.025,6,12),surface('#b4503d'));
  valve.position.copy(valvePosition);
  valve.rotation.y=Math.PI/2;
  markerGroup.add(valve);
  for (let i=0;i<3;i++){
    const spoke=box(valve,frame,0,0,.005,.245,.025,.028);
    spoke.rotation.z=i*Math.PI/3;
  }
  const valveLamp=box(markerGroup,red,3.833,1.0,-41.11,.06,.095,.14);

  const lamp = new T.Group();
  const lampHome=new T.Vector3(...locations.lamp);
  const lampShell=surface('#bb782d');
  box(lamp,lampShell,0,0,.045,.12,.105,.21);
  box(lamp,frame,0,0,-.092,.167,.154,.085);
  const lens=box(lamp,amber,0,0,-.139,.12,.11,.015);
  markerGroup.add(lamp);
  const spot=new T.SpotLight('#ffdc9e',34,13,.48,.62,1.65);
  scene.add(spot,spot.target);
  let held=null,lampOn=false,dropping=false,dropSpeed=0;
  const turn=new T.Quaternion();
  const aim=new T.Vector3();
  const sideAxis=new T.Vector3();
  const targetPoint=new T.Vector3();
  const offset=new T.Vector3();
  const down=new T.Vector3(0,0,-1);
  const lampDark=flat('#514f42');

  const {left,right,near,far,bed}=locations.water;
  const waterEffects=createWaterEffects(T,scene,locations.water);
  const underwaterFog=new T.Fog('#284d46',.10,5.3);
  let aboveWaterFog=null, submerged=false;

  const film=new T.Mesh(new T.SphereGeometry(12,18,12),new T.ShaderMaterial({
    side:T.BackSide,transparent:true,depthTest:false,depthWrite:false,
    uniforms:{strength:{value:.19},age:{value:0}},
    vertexShader:'varying vec3 vRay; void main(){vRay=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:[
      'uniform float strength; uniform float age; varying vec3 vRay;',
      'float grain(vec3 p){ return fract(sin(dot(p,vec3(21.17,57.11,13.77)))*43758.54); }',
      'void main(){vec3 p=floor(normalize(vRay)*530.);',
      'float t=floor(age*5.); float f=smoothstep(0.,1.,fract(age*5.));',
      'float n=mix(grain(p+t*.91),grain(p+(t+1.)*.91),f)-.5;',
      'gl_FragColor=vec4(vec3(step(0.,n)),abs(n)*strength*.155);}',
    ].join('\n'),
  }));
  film.renderOrder=60;
  film.frustumCulled=false;
  scene.add(film);

  const creature=new T.Group();
  const skin=surface('#25292b');
  const body=box(creature,skin,0,.63,.018,.27,.57,.21);
  body.rotation.x=.25;
  const skull=box(creature,skin,.035,1.05,-.045,.23,.29,.23);
  skull.rotation.z=-.22;
  const shoulder=box(creature,skin,0,.82,0,.40,.15,.20);
  shoulder.rotation.z=.11;
  const limbs=[];
  for(const side of [-1,1]){
    const arm=new T.Group();
    arm.position.set(side*.21,.8,-.033);
    box(arm,skin,0,-.367,0,.095,.78,.114);
    box(arm,skin,.014,-.76,.013,.14,.13,.16);
    creature.add(arm);
    const leg=box(creature,skin,side*.078,.23,.046,.099,.45,.13);
    limbs.push({arm,leg,side});
  }
  const encounter=createEncounter();
  const creatureCenter=new T.Vector3();
  const face=new T.Vector3();
  markerGroup.add(creature);
  let stepsSinceCue=0, stridePhase=0;
  const progress=document.querySelector('#demo-objective');
  const grainControl=document.querySelector('#demo-grain');
  let lastMessage='';

  function updateObjective() {
    const message=mission.objective();
    if(message!==lastMessage) progress.textContent=lastMessage=message;
  }
  function readableDirection(source,pos,direction,range,threshold) {
    targetPoint.subVectors(pos,source);
    const distance=targetPoint.length();
    return distance<=range && (distance<.001||targetPoint.dot(direction)/distance>=threshold);
  }
  function purge() {
    if(!mission.activatePurge()) return;
    valveLamp.material=green;
    sound.cue('valve');
    announce('Purge lancée. Continue vers les archives.');
  }
  function pick(owner) {
    held=owner;
    if(held!=='desktop')held.demoHeld=true;
    dropping=false;
    if(!mission.foundLamp)lampOn=true;
    mission.pickLamp();
    announce('Lampe prise. Gâchette ou F pour l’allumer et l’éteindre.');
  }
  function drop() {
    if(held && held!=='desktop')held.demoHeld=false;
    held=null;
    dropping=true;
    dropSpeed=0;
  }
  function toggleLamp(owner) {
    if(held!==owner)return false;
    lampOn=!lampOn;
    return true;
  }
  function desktopInteract(origin,direction) {
    if(readableDirection(origin,valvePosition,direction,2.03,.78)){purge();return true;}
    if(held==='desktop'){drop();return true;}
    if(!held&&readableDirection(origin,lamp.position,direction,2.12,.71)){pick('desktop');return true;}
    announce('Vise la lampe ou la vanne puis appuie sur E.');
    return false;
  }
  function grip(hand,pressed,menu) {
    if(held===hand){if(!pressed)drop();return true;}
    if(!pressed||hand.grip||menu)return false;
    if(hand.target.distanceToSquared(valvePosition)<.33**2){purge();return true;}
    if(!held&&hand.target.distanceToSquared(lamp.position)<.32**2){pick(hand);return true;}
    return false;
  }
  function updateLamp(camera,dt) {
    if(held==='desktop'){
      camera.getWorldQuaternion(turn);
      camera.getWorldPosition(lamp.position);
      offset.set(.22,-.16,-.43).applyQuaternion(turn);
      lamp.position.add(offset);
      lamp.quaternion.copy(turn);
    }else if(held){
      if(!held.valid)drop();
      else {
        lamp.quaternion.copy(held.controllerRotation);
        offset.set(0,.037,-.088).applyQuaternion(lamp.quaternion);
        lamp.position.copy(held.mesh.position).add(offset);
      }
    }
    if(dropping){
      const {x,y,z}=lamp.position;
      const overTable=Math.abs(x+2.21)<.69&&Math.abs(z-.9)<.825;
      const inPool=x>left&&x<right&&z<near&&z>far;
      const rest=(overTable?.73:inPool?bed:0)+.073;
      dropSpeed+=dt*4.5;
      lamp.position.y=Math.max(rest,y-dropSpeed*dt);
      if(lamp.position.y<=rest)dropping=false;
    }
    lens.material=lampOn?amber:lampDark;
    spot.visible=lampOn;
    spot.position.copy(lamp.position);
    aim.copy(down).applyQuaternion(lamp.quaternion);
    spot.position.addScaledVector(aim,.15);
    spot.target.position.copy(spot.position).add(aim);
  }
  function pannedCue(name,position,head,camera) {
    camera.getWorldDirection(aim);
    sideAxis.set(-aim.z,0,aim.x).normalize();
    targetPoint.subVectors(position,head);
    const pan=targetPoint.dot(sideAxis)/Math.max(1,targetPoint.length());
    sound.cue(name,pan);
  }
  function updateEncounter(dt,head,camera) {
    if(encounter.phase==='hidden'||encounter.phase==='gone')return false;
    creatureCenter.copy(creature.position).y+=.76;
    face.copy(down).applyQuaternion(lamp.quaternion);
    const lit=lampOn&&readableDirection(spot.position,creatureCenter,face,6.5,.92);
    const {event,distance:travel}=encounter.update(dt,head,lit);
    creatureCenter.set(encounter.position.x,0,encounter.position.z);
    face.copy(creatureCenter).sub(creature.position);
    if(face.lengthSq()>1e-8)creature.rotation.y=Math.atan2(-face.x,-face.z);
    creature.position.copy(creatureCenter);
    creature.visible=encounter.phase!=='gone';
    stridePhase+=travel*8.4;
    const stride=travel>1e-5?Math.sin(stridePhase):0;
    for(const {arm,leg,side} of limbs){
      arm.rotation.x=stride*.19*side-.07;
      leg.rotation.x=-stride*.17*side;
    }
    skull.rotation.z=-.14+Math.sin(stridePhase*.3)*.095;
    if(event==='pursuit'){
      pannedCue('creature',creature.position,head,camera);
      announce('Elle te suit. Regagne la sortie.');
    }
    stepsSinceCue+=travel;
    if(stepsSinceCue>.56&&encounter.phase==='pursuing'){
      stepsSinceCue=0;
      pannedCue('step',creature.position,head,camera);
    }
    if(event==='escaped')announce('Les pas s’arrêtent derrière le seuil. Regagne le refuge.');
    if(event!=='caught')return false;
    sound.cue('creature');
    reset();
    goHome();
    announce('Rattrapé dans les archives. Retour au refuge.');
    return true;
  }
  function reset() {
    mission.reset();
    if(held&&held!=='desktop')held.demoHeld=false;
    held=null;
    lampOn=false;
    dropping=false;
    lamp.position.copy(lampHome);
    lamp.rotation.set(0,-.28,0);
    valveLamp.material=red;
    valve.rotation.x=0;
    encounter.reset();
    waterEffects.reset();
    if(scene.fog===underwaterFog)scene.fog=aboveWaterFog;
    submerged=false;
    stepsSinceCue=stridePhase=0;
    creature.visible=false;
    creature.position.set(encounter.position.x,0,encounter.position.z);
    updateObjective();
  }
  function toggleGrain() {
    grainControl.value=Number(grainControl.value)>0?'0':'19';
    announce(Number(grainControl.value)>0?'Grain léger activé.':'Grain désactivé.');
  }
  function update({head,camera,dt,time}) {
    if(head.y< -2){
      reset();
      goHome();
      announce('Retour au refuge après la chute.');
      return;
    }
    placeLights(head.z);
    updateLamp(camera,dt);
    const wet=headUnderwater(head,submerged);
    const changed=wet!==submerged;
    if(changed){
      submerged=wet;
      sound.cue('splash');
    }
    if(scene.fog!==underwaterFog)aboveWaterFog=scene.fog;
    scene.fog=submerged?underwaterFog:aboveWaterFog;
    waterEffects.update({head,time,submerged,changed});
    sound.update(submerged,head.x<right+.8&&head.x>left-.5&&head.z<near+.5&&head.z>far-.55);
    film.position.copy(head);
    film.material.uniforms.age.value=time;
    film.material.uniforms.strength.value=Number(grainControl.value)/100;
    film.visible=Number(grainControl.value)>0;
    const event=mission.advance(head);
    if(event==='shaft')pannedCue('shaft',new T.Vector3(-8.4,-5.3,-20.9),head,camera);
    if(event==='sighting'){
      encounter.start();
      pannedCue('metal',creature.position,head,camera);
      announce('Quelque chose bouge entre les rayonnages.');
    }
    if(event==='returned'){sound.cue('refuge');announce('Sortie terminée. Tu es revenu au refuge.');}
    if(mission.purge)valve.rotation.x=Math.min(Math.PI/2,valve.rotation.x+dt*2.2);
    if(updateEncounter(dt,head,camera))return;
    updateObjective();
  }
  reset();
  return {reset,grip,toggleLamp,desktopInteract,update,toggleGrain,
    mute:muted=>sound.setEnabled(!muted),objective:()=>mission.objective(),state:()=>({
      purge:mission.purge,sighting:mission.sighting,complete:mission.complete,submerged,encounter:encounter.phase,
      holding:held==='desktop'?'desktop':held?.side??null, lampOn,grain:Number(grainControl.value),
    })};
}

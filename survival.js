
import * as T from 'three';

const slots=['Pelle','Pioche','Hache','Bois','Verre','Torche','Atelier'];
const recipes=[
  {name:'Bois',cost:{bûche:1},count:4},
  {name:'Verre',cost:{terre:2,pierre:1},count:2},
  {name:'Torche',cost:{bûche:1,pierre:1},count:3},
];

export function survival({scene,rig,camera,renderer,ground,terrain,center,trunk,canopy,limbs,settings}) {
  let selected=0, menu=false, active=false, health=100, message='';
  const stock={terre:0,pierre:0,bûche:0,Bois:2,Verre:1,Torche:2};
  const saves='vallon-vr-v2';
  const blocks=new Map(), felled=new Map();
  const wood=new T.MeshLambertMaterial({color:'#98704c'});
  const glass=new T.MeshLambertMaterial({color:'#96d9de',transparent:true,opacity:.56,depthWrite:false});
  const flame=new T.MeshBasicMaterial({color:'#ffd275'});
  const cube=new T.BoxGeometry(.8,.8,.8);
  const taper=new T.CylinderGeometry(.032,.049,.57,6);
  const ember=new T.OctahedronGeometry(.12);
  const treeMatrix=new T.Matrix4(), fallenMatrix=new T.Matrix4();
  const treePositions=Array.from({length:trunk.count},(_,i)=>{
    trunk.getMatrixAt(i,treeMatrix);
    return new T.Vector3().setFromMatrixPosition(treeMatrix);
  });
  const targets=[terrain,trunk,canopy];
  const direction=new T.Vector3(), origin=new T.Vector3(), rotation=new T.Quaternion();
  const ray=new T.Raycaster();
  ray.far=7;
  const guide=new T.Line(new T.BufferGeometry().setFromPoints([new T.Vector3(),new T.Vector3(0,0,-5)]),
    new T.LineBasicMaterial({color:'#ffdb80',transparent:true,opacity:.58}));
  guide.visible=false;
  scene.add(guide);
  const placed=new T.Group();
  scene.add(placed);
  const edits=new Map();
  const verts=terrain.geometry.attributes.position;
  const burstCount=70;
  const particles=new Float32Array(burstCount*3);
  const velocities=Array.from({length:burstCount},()=>new T.Vector3());
  const life=new Float32Array(burstCount);
  particles.fill(-1000);
  const particleGeometry=new T.BufferGeometry();
  particleGeometry.setAttribute('position',new T.BufferAttribute(particles,3));
  const sparks=new T.Points(particleGeometry,new T.PointsMaterial({color:'#e0b57a',size:.09}));
  sparks.frustumCulled=false;
  scene.add(sparks);
  let particle=0;
  function burst(point) {
    if(settings.quality==='low') return;
    for(let i=0;i<12;i++) {
      const n=particle++%burstCount;
      point.toArray(particles,n*3);
      velocities[n].set((Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*3);
      life[n]=.25+Math.random()*.36;
    }
  }
  function applyEdit(i,y) {
    verts.setY(i,y);
    edits.set(i,y);
  }
  function rebuildTerrain() {
    verts.needsUpdate=true;
    terrain.geometry.computeVertexNormals();
    terrain.geometry.computeBoundingSphere();
  }
  function sculpt(point,raise) {
    if(raise && stock.terre<1) return notice('Il te faut de la terre.');
    const radius=4.25;
    for(let i=0;i<verts.count;i++) {
      const d=Math.hypot(verts.getX(i)-point.x,verts.getZ(i)-point.z);
      if(d>=radius) continue;
      applyEdit(i,verts.getY(i)+(raise?.85:-.8)*(1-d/radius));
    }
    rebuildTerrain();
    stock.terre+=raise?-1:1;
    burst(point);
  }
  function treeEdit(id,hits) {
    felled.set(id,hits);
    const factor=hits>=3?0:1-hits*.18;
    const p=treePositions[id];
    for(const [mesh,indices] of [[trunk,[id]],[canopy,[id*2,id*2+1]]]) {
      for(const index of indices) {
        mesh.getMatrixAt(index,treeMatrix);
        const previous=hits<=1?1:1-(hits-1)*.18;
        fallenMatrix.copy(treeMatrix);
        const scale=factor/Math.max(.1,previous);
        for(let i=0;i<12;i++) if(i%4!==3) fallenMatrix.elements[i]*=scale;
        fallenMatrix.elements[13]=p.y+(treeMatrix.elements[13]-p.y)*scale;
        mesh.setMatrixAt(index,fallenMatrix);
      }
      mesh.instanceMatrix.needsUpdate=true;
    }
  }
  const lampSlots=Array.from({length:4},()=>{
    const light=new T.PointLight('#ffae59',0,7,1.75);
    scene.add(light);
    return light;
  });
  const torches=[];
  function place(key, name, point) {
    const m=new T.Mesh(name==='Torche'?taper:cube,name==='Verre'?glass:wood);
    m.position.copy(point);
    m.userData.slot=key;
    if(name==='Torche') {
      const fire=new T.Mesh(ember,flame);
      fire.position.y=.31;
      m.add(fire);
      torches.push(m);
    }
    placed.add(m);
    blocks.set(key,{m,name});
  }
  function craft(index) {
    const recipe=recipes[index];
    if(!recipe) return;
    if(Object.entries(recipe.cost).some(([name,count])=>stock[name]<count)) return notice('Ressources manquantes.');
    for(const [name,count] of Object.entries(recipe.cost)) stock[name]-=count;
    stock[recipe.name]+=recipe.count;
    notice('Fabriqué : '+recipe.name+' ×'+recipe.count);
    save();
  }
  function save() {
    try {
      localStorage.setItem(saves,JSON.stringify({stock,health,edits:[...edits],felled:[...felled],blocks:[...blocks].map(([key,b])=>[key,b.name,b.m.position.toArray()])}));
    } catch {}
  }
  try {
    const data=JSON.parse(localStorage.getItem(saves));
    if(data) {
      Object.assign(stock,data.stock);
      health=data.health??100;
      for(const [i,y] of data.edits) applyEdit(i,y);
      if(edits.size) rebuildTerrain();
      for(const [id,hits] of data.felled) for(let j=1;j<=hits;j++) treeEdit(id,j);
      for(const [key,name,p] of data.blocks) place(key,name,new T.Vector3(...p));
    }
  } catch {}

  function screen(w,h,width,height,parent) {
    const surface=document.createElement('canvas');
    surface.width=w; surface.height=h;
    const ctx=surface.getContext('2d');
    const map=new T.CanvasTexture(surface);
    map.colorSpace=T.SRGBColorSpace;
    const mesh=new T.Mesh(new T.PlaneGeometry(width,height),new T.MeshBasicMaterial({map,transparent:true,depthWrite:false,side:T.DoubleSide,toneMapped:false}));
    parent.add(mesh);
    return {mesh,ctx,map,w,h};
  }
  const wrist=screen(512,144,.32,.09,limbs[0].hand);
  wrist.mesh.position.set(0,.07,.02);
  wrist.mesh.rotateX(-Math.PI/2);
  const hud=screen(256,64,.24,.06,camera);
  hud.mesh.position.set(-.26,-.21,-.7);
  const panel=screen(512,540,.88,.928,scene);
  panel.mesh.visible=false;
  panel.mesh.renderOrder=3;
  const label=document.querySelector('#inventory');
  const banner=document.querySelector('#feedback');
  function notice(text) {
    message=text;
    banner.textContent=text;
  }
  function bg(display) {
    const {ctx,w,h}=display;
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle='#21362ef2'; ctx.fillRect(0,0,w,h);
    ctx.strokeStyle='#dfc789'; ctx.lineWidth=3; ctx.strokeRect(2,2,w-4,h-4);
    ctx.fillStyle='#fff3ce'; ctx.font='26px system-ui';
  }
  let panelRows=[], oldText='';
  function draw() {
    const text=[selected,menu,active,message,health,...Object.values(stock),settings.distance,settings.quality,settings.pixel].join('|');
    if(text===oldText) return;
    oldText=text;
    const name=slots[selected];
    label.textContent=name+' · Terre '+stock.terre+' · Pierre '+stock.pierre+' · Bûches '+stock.bûche+' · Bois '+stock.Bois+' · Verre '+stock.Verre+' · Torches '+stock.Torche+' · PV '+health;
    bg(wrist);
    wrist.ctx.fillText(slots.map((s,i)=>i===selected?'['+(i+1)+']':i+1).join('     '),22,44);
    wrist.ctx.font='bold 31px system-ui';
    wrist.ctx.fillText(name+(stock[name]!==undefined?' ×'+stock[name]:''),22,104);
    wrist.map.needsUpdate=true;
    bg(hud);
    hud.ctx.fillStyle='#d9bd78'; hud.ctx.fillRect(12,38,232*health/100,14);
    hud.ctx.fillStyle='#fff3ce'; hud.ctx.font='24px system-ui'; hud.ctx.fillText('PV '+health,12,29);
    hud.map.needsUpdate=true;
    bg(panel);
    panel.ctx.font='bold 35px Georgia'; panel.ctx.fillText(active?'Atelier de terrain':'VALLON • Les terres tranquilles',22,52);
    panelRows=active?[
      ['1 bûche → 4 bois',()=>craft(0)],['2 terre + 1 pierre → 2 verre',()=>craft(1)],
      ['1 bûche + 1 pierre → 3 torches',()=>craft(2)],
      ['Visibilité : '+settings.distance+' m',()=>{settings.distance=settings.distance>=500?100:settings.distance+100;}],
      ['Qualité : '+(settings.quality==='low'?'Légère':'Équilibrée'),()=>{settings.quality=settings.quality==='low'?'high':'low';}],
      ['Pixels : ×'+settings.pixel+' (prochaine session)',()=>{settings.pixel=settings.pixel>=4?1:settings.pixel*2;}],
      ['Reprendre',()=>{menu=false;}],
    ]:[['Démarrer / reprendre',()=>{active=true;menu=false;}]];
    panelRows.forEach(([title],i)=>{
      panel.ctx.fillStyle='#435447'; panel.ctx.fillRect(22,82+i*61,468,49);
      panel.ctx.fillStyle='#fff3ce'; panel.ctx.font='25px system-ui'; panel.ctx.fillText(title,35,114+i*61);
    });
    panel.ctx.font='19px system-ui'; panel.ctx.fillText((message || 'Gâchette : choisir   •   A : objet   •   B : atelier').slice(0,52),22,528);
    panel.map.needsUpdate=true;
  }
  function toggleMenu() {
    menu=!menu;
    if(!menu) return;
    camera.getWorldPosition(origin);
    camera.getWorldDirection(direction);
    direction.y=0; direction.normalize();
    panel.mesh.position.copy(origin).addScaledVector(direction,1.45);
    panel.mesh.lookAt(origin);
  }
  function perform(raise=false) {
    if(menu) {
      const hit=ray.intersectObject(panel.mesh)[0];
      if(hit) {
        const y=(1-hit.uv.y)*540-82;
        if(y>=0 && y%61<49) panelRows[Math.floor(y/61)]?.[1]();
      }
      return;
    }
    if(!active) return;
    if(selected===6) { if(immersive) toggleMenu(); else document.querySelector(".recipes").open=true; return; }
    const hit=ray.intersectObjects([...targets,...placed.children],false)[0];
    if(!hit) return;
    const name=slots[selected];
    const object=hit.object;
    if(object===trunk || object===canopy) {
      if(name!=='Hache') return notice('Équipe la hache pour récolter du bois.');
      const id=object===trunk?hit.instanceId:Math.floor(hit.instanceId/2);
      const hits=felled.get(id)||0;
      if(hits<3) {treeEdit(id,hits+1);stock.bûche+=hits===2?2:1;burst(hit.point);}
    } else if(name==='Pelle' && object===terrain) {
      sculpt(hit.point,raise);
    } else if(name==='Pioche') {
      const block=blocks.get(object.userData.slot);
      if(block) {
        stock[block.name]++;
        placed.remove(block.m);
        blocks.delete(object.userData.slot);
        const index=torches.indexOf(block.m);
        if(index>=0) torches.splice(index,1);
        burst(hit.point);
      } else if(object===terrain && !raise) {
        sculpt(hit.point,false);
        stock.terre--;
        stock.pierre++;
      } else if(object===terrain && stock.pierre>0) {
        stock.terre++;
        sculpt(hit.point,true);
        stock.pierre--;
      }
    } else if(selected>=3 && selected<=5) {
      if(!stock[name]) return notice('Objet épuisé. Ouvre l’atelier pour fabriquer.');
      const point=hit.point.clone();
      if(object!==terrain && hit.face) point.addScaledVector(hit.face.normal,.43);
      point.x=Math.round(point.x/.8)*.8;
      point.z=Math.round(point.z/.8)*.8;
      point.y=object===terrain ? ground(point.x,point.z)+.4 : Math.round(point.y/.8)*.8;
      const key=[point.x,point.y,point.z].map(n=>n.toFixed(2)).join(':');
      if(blocks.has(key)) return;
      place(key,name,point);
      stock[name]--;
      burst(point);
    }
    save();
  }
  document.querySelector('#start').onclick=()=>{active=true;menu=false;};
  document.querySelectorAll('[data-recipe]').forEach(button=>button.onclick=()=>craft(Number(button.dataset.recipe)));
  addEventListener('keydown',e=>{
    if(renderer.xr.isPresenting || e.repeat || /INPUT|SELECT/.test(e.target.tagName)) return;
    if(/^[1-7]$/.test(e.key)) selected=Number(e.key)-1;
    if(e.code==='KeyE' || e.code==='KeyF') {
      camera.getWorldPosition(origin); camera.getWorldDirection(direction);
      ray.set(origin,direction);
      perform(e.code==='KeyF');
    }
  });
  let exposure=0;
  let oldTrigger=false,oldGrip=false,oldNext=false,oldMenu=false, immersive=false;
  return {
    get frozen(){return !active||menu;}, blocked(x,y,z){return [...blocks.values()].some(({m,name})=>name!=="Torche"&&Math.abs(x-m.position.x)<.58&&Math.abs(z-m.position.z)<.58&&y<m.position.y+.39&&y+1.2>m.position.y-.4);},
    update(dt,frame,space,session,px,pz) {
      const deep=[[48,-30,21,15],[-51,26,16,12]].some(([x,z,rx,rz])=>Math.hypot((px-center.x-x)/rx,(pz-center.z-z)/rz)<.53);
      exposure+=active && !menu ? dt : 0;
      if(exposure>2) {
        exposure=0;
        health=T.MathUtils.clamp(health+(deep?-8:3),0,100);
        if(health===0) {
          health=100;
          rig.position.set(center.x,ground(center.x,center.z),center.z);
          notice('Retour au camp.');
          save();
        }
      }
      if(Boolean(session)!==immersive) {
        immersive=Boolean(session);
        menu=false;
        if(immersive&&!active) toggleMenu();
        document.body.classList.toggle('immersive',immersive);
        oldTrigger=oldGrip=oldNext=oldMenu=false;
      }
      panel.mesh.visible=immersive&&menu;
      wrist.mesh.visible=immersive;
      hud.mesh.visible=immersive&&active;
      guide.visible=false;
      draw();
      if(session&&frame) {
        const inputs=[...session.inputSources];
        const input=inputs.find(s=>s.handedness==='right'&&s.gamepad)||inputs.find(s=>s.gamepad);
        const pointing=input&&frame.getPose(input.targetRaySpace,space);
        if(pointing) {
          const {position,orientation}=pointing.transform;
          origin.set(position.x+rig.position.x,position.y+rig.position.y,position.z+rig.position.z);
          rotation.set(orientation.x,orientation.y,orientation.z,orientation.w);
          direction.set(0,0,-1).applyQuaternion(rotation);
          ray.set(origin,direction);
          guide.position.copy(origin);guide.quaternion.copy(rotation);
          guide.visible=true;
          const buttons=input.gamepad.buttons;
          const trigger=Boolean(buttons[0]?.pressed), grip=Boolean(buttons[1]?.pressed);
          const next=Boolean(buttons[4]?.pressed||buttons[3]?.pressed), open=Boolean(buttons[5]?.pressed);
          if(open&&!oldMenu || next&&!oldNext&&!active) toggleMenu();
          if(next&&!oldNext&&active&&!menu) selected=(selected+1)%slots.length;
          if(trigger&&!oldTrigger) perform(false);
          if(grip&&!oldGrip&&!menu&&selected<2) perform(true);
          oldTrigger=trigger;oldGrip=grip;oldNext=next;oldMenu=open;
        }
      }
      for(let n=0;n<burstCount;n++) {
        if(life[n]<=0) continue;
        life[n]-=dt;
        const offset=n*3;
        for(let i=0;i<3;i++) particles[offset+i]+=velocities[n].getComponent(i)*dt;
        velocities[n].y-=4*dt;
        if(life[n]<=0) particles[offset+1]=-1000;
      }
      particleGeometry.attributes.position.needsUpdate=true;
      const nearby=torches.filter(t=>Math.hypot(t.position.x-px,t.position.z-pz)<16).slice(0,lampSlots.length);
      lampSlots.forEach((light,index)=>{
        const torch=nearby[index];
        light.intensity=torch&&settings.quality==='high'?12+Math.sin(performance.now()*.01+index)*2:0;
        if(torch) light.position.copy(torch.position).y+=.45;
      });
    },
  };
}




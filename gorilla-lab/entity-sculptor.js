import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {readSculpts,normalizeSculpt,sculptStorage,sculptJoints,sculptStates,sculptPose} from './sculpt-format.js';
import {sculptGeometry,sculptVertices,sculptRig,applySculptPose,playSculptClip} from './sculpt-rig.js';

export function openEntitySculptor(){
  const models=readSculpts(localStorage);
  const dialog=document.createElement('dialog');
  dialog.className='entity-sculptor';
  dialog.setAttribute('aria-label','Atelier des entités');
  dialog.innerHTML=`
    <div class="entity-sculptor-toolbar">
      <select data-ui="library" aria-label="Entit&eacute; enregistr&eacute;e"></select>
      <input data-ui="name" aria-label="Nom" maxlength="36">
      <button data-ui="sphere">Nouvelle sph&egrave;re</button><button data-ui="cube">Nouveau cube</button>
      <button data-ui="save">Enregistrer l&rsquo;entit&eacute;</button>
      <a href="./editor.html?tab=entities" target="_blank" rel="noopener" style="color:#bddfee">Placer sur une carte</a>
      <button data-ui="close" style="margin-left:auto">Fermer</button>
    </div>
    <div class="entity-sculptor-layout">
      <div data-ui="canvas" style="min-height:0;min-width:0;position:relative"></div>
      <section>
        <label>Mode <select data-ui="mode"><option value="sculpt">Sculpture</option><option value="motion">Squelette et animations</option></select></label>
        <div data-ui="sculpt">
          <label>Brosse <select data-ui="brush"><option value="grab">Tirer</option><option value="inflate">Gonfler / creuser</option><option value="smooth">Lisser</option></select></label>
          <label>Rayon <input data-ui="radius" type="range" min=".025" max=".58" step=".005" value=".23"></label>
          <label><input data-ui="mirror" type="checkbox" checked> Sym&eacute;trie gauche / droite</label>
          <label><input data-ui="wire" type="checkbox"> Afficher les polygones</label>
          <label>Couleur <input data-ui="color" type="color"></label>
          <button data-ui="undo">Annuler le trait</button>
          <p>Glisse sur le mod&egrave;le. Maj creuse avec la brosse Gonfler. Clic droit pour tourner, molette pour zoomer.</p>
        </div>
        <div data-ui="motion" hidden>
          <label>Articulation <select data-ui="joint"></select></label>
          <p>Clique une articulation pour la choisir. Glisse-la pour d&eacute;placer son pivot en pose de repos.</p>
          <fieldset><legend>Pivot XYZ (m)</legend><div data-ui="pivot" style="display:flex;gap:4px"></div></fieldset>
          <fieldset><legend>Rotation XYZ (&deg;)</legend><div data-ui="rotation" style="display:flex;gap:4px"></div></fieldset>
          <label>Animation <select data-ui="clip"></select></label>
          <label>Pose <select data-ui="frame"></select></label>
          <label>Dur&eacute;e de la pose <input data-ui="duration" type="number" min=".08" max="2" step=".05" value=".35"> s</label>
          <div><button data-ui="add">Ajouter une pose</button><button data-ui="replace">Mettre &agrave; jour</button><button data-ui="delete">Supprimer</button></div>
          <div><button data-ui="rest">Remettre la pose &agrave; z&eacute;ro</button><button data-ui="play">Lire</button></div>
          <label>Au contact <select data-ui="contact"><option value="kill">Animation + &eacute;limination</option><option value="animate">Animation seule</option></select></label>
        </div>
        <output data-ui="status" role="status"></output>
      </section>
    </div>`;
  document.body.append(dialog);
  const $=key=>dialog.querySelector('[data-ui="'+key+'"]');
  dialog.showModal();
  const scene=new T.Scene();scene.background=new T.Color('#182029');
  const camera=new T.PerspectiveCamera(44,1,.03,100);camera.position.set(2,1.55,-2.7);
  let renderer;
  try{renderer=new T.WebGLRenderer({antialias:true});}
  catch{dialog.remove();throw Error('WebGL indisponible pour la sculpture.');}
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));$('canvas').append(renderer.domElement);
  const canvas=renderer.domElement;canvas.style.cssText='display:block;width:100%;height:100%;touch-action:none';
  const controls=new OrbitControls(camera,canvas);controls.target.set(0,.65,0);
  controls.mouseButtons={LEFT:null,MIDDLE:T.MOUSE.PAN,RIGHT:T.MOUSE.ROTATE};
  const sky=new T.HemisphereLight('#e5f0ff','#5c3d46',2.1),light=new T.DirectionalLight('#fff0e0',2.7);
  light.position.set(-2,4,-3);scene.add(sky,light,new T.GridHelper(6,24,'#758698','#344250'));
  const material=new T.MeshStandardMaterial({color:'#62566b',roughness:.84,side:T.DoubleSide});
  const brushMesh=new T.Mesh(new T.SphereGeometry(1,16,12),new T.MeshBasicMaterial({color:'#b8e9ff',wireframe:true,depthWrite:false,opacity:.42,transparent:true}));
  scene.add(brushMesh);brushMesh.visible=false;
  const guides=new T.Group();scene.add(guides);
  const dotGeo=new T.SphereGeometry(.027,9,6),jointMaterial=new T.MeshBasicMaterial({color:'#92b9db',depthTest:false});
  const activeMaterial=new T.MeshBasicMaterial({color:'#ffc35e',depthTest:false});
  const guideLine=new T.LineSegments(new T.BufferGeometry(),new T.LineBasicMaterial({color:'#96a9bb',depthTest:false}));
  guides.add(guideLine);
  const dots=sculptJoints.map(()=>{const dot=new T.Mesh(dotGeo,jointMaterial);dot.renderOrder=3;guides.add(dot);return dot;});
  const ray=new T.Raycaster(),pointer=new T.Vector2(),plane=new T.Plane(),axis=new T.Vector3(),relative=new T.Vector3();
  const undo=[];
  let id,mesh,rig,data,pose,dirty=false,stroke,pivotDrag,frame=0,started=null,raf,adjacency=[];
  const option=(value,label)=>new Option(label,value);
  $('joint').replaceChildren(...sculptJoints.map(([name],i)=>option(i,name)));
  $('clip').replaceChildren(...sculptStates.map((name,i)=>option(i,name)));
  const fields=(key,step,min,max)=>{
    const inputs=['X','Y','Z'].map(axis=>{
      const input=document.createElement('input');
      Object.assign(input,{type:'number',min,max,step});
      input.style.width='33%';input.setAttribute('aria-label',key+' '+axis);$(key).append(input);
      return input;
    });
    return inputs;
  };
  const pivots=fields('pivot',.02,-3,3),rotations=fields('rotation',1,-180,180);
  const status=message=>{$('status').textContent=message;};
  const edit=()=>{dirty=true;status('Modifications en cours');};
  const joint=()=>Number($('joint').value);
  const clip=()=>data.clips[Number($('clip').value)];
  function library(){
    $('library').replaceChildren(option('','Brouillon'),...models.map(model=>option(model.id,model.name)));
    $('library').value=id??'';
  }
  function stop(){
    started=null;$('play').textContent='Lire';
    if(rig)applySculptPose(rig,pose);
  }
  function updateControls(){
    pivots.forEach((input,i)=>{input.value=data.pivots[joint()][i];});
    rotations.forEach((input,i)=>{input.value=pose[joint()][i];});
    frame=Math.min(frame,Math.max(0,clip().length-1));
    $('frame').replaceChildren(...clip().map((_,i)=>option(i,'Pose '+(i+1))));
    $('frame').value=String(frame);
    $('duration').value=clip()[frame]?.duration??.35;
    $('replace').disabled=$('delete').disabled=!clip().length;
    $('add').disabled=clip().length>=12;
  }
  function updateMode(){
    stop();rig?.dispose();rig=null;
    mesh.visible=$('mode').value==='sculpt';guides.visible=!mesh.visible;brushMesh.visible=false;
    if(!mesh.visible){
      data.vertices=sculptVertices(mesh.geometry);
      rig=sculptRig(data);scene.add(rig.mesh);applySculptPose(rig,pose);
    }
    updateControls();
  }
  function load(shape,model){
    mesh?.removeFromParent();mesh?.geometry.dispose();
    id=model?.id;
    const geometry=sculptGeometry(shape,model?.sculpt.vertices);
    mesh=new T.Mesh(geometry,material);scene.add(mesh);
    const indices=geometry.index.array;
    const links=Array.from({length:geometry.attributes.position.count},()=>new Set());
    for(let i=0;i<indices.length;i+=3){
      for(let j=0;j<3;j++){
        const a=indices[i+j],b=indices[i+(j+1)%3];links[a].add(b);links[b].add(a);
      }
    }
    adjacency=links.map(link=>Array.from(link));
    data=normalizeSculpt(model?.sculpt??{base:shape,vertices:sculptVertices(geometry)});
    pose=sculptPose();frame=0;undo.length=0;dirty=false;
    $('name').value=model?.name??'Ma créature';$('contact').value=data.contact;
    $('color').value=data.color;material.color.set(data.color);
    $('mode').value='sculpt';status('');library();updateMode();
  }
  function canLeave(){return !dirty||confirm('Quitter ce brouillon sans enregistrer les modifications ?');}
  $('sphere').onclick=()=>{if(canLeave())load('sphere');};
  $('cube').onclick=()=>{if(canLeave())load('cube');};
  $('library').onchange=()=>{
    const model=models.find(item=>item.id===$('library').value);
    if(model&&canLeave())load(model.sculpt.base,model);
    else library();
  };
  $('mode').onchange=updateMode;
  $('wire').onchange=()=>{material.wireframe=$('wire').checked;};
  $('color').oninput=()=>{data.color=$('color').value;material.color.set(data.color);edit();};
  $('name').oninput=edit;
  $('contact').onchange=()=>{data.contact=$('contact').value;edit();};
  $('save').onclick=()=>{
    if(!id&&models.length>=20){status('La bibliothèque contient déjà 20 créatures.');return;}
    const sculpt=normalizeSculpt({...data,vertices:sculptVertices(mesh.geometry)});
    const entry={id:id??crypto.randomUUID(),name:$('name').value.trim()||'Ma créature',sculpt};
    const next=[...models.filter(model=>model.id!==id),entry];
    try{localStorage.setItem(sculptStorage,JSON.stringify(next));}
    catch{status('Sauvegarde impossible. Le stockage du navigateur est plein ou bloqué.');return;}
    models.splice(0,models.length,...next);id=entry.id;dirty=false;library();status('Enregistrée. Choisis-la dans Entités, sur ta carte.');
  };
  $('joint').onchange=updateControls;
  pivots.forEach((input,i)=>{input.onchange=()=>{
    if(!Number.isFinite(input.valueAsNumber)){updateControls();return;}
    data.pivots[joint()][i]=T.MathUtils.clamp(input.valueAsNumber,-3,3);edit();updateMode();
  };});
  rotations.forEach((input,i)=>{input.oninput=()=>{
    if(!Number.isFinite(input.valueAsNumber))return;
    pose[joint()][i]=T.MathUtils.clamp(input.valueAsNumber,-180,180);stop();
  };});
  function selectFrame(){
    if(clip().length)pose=structuredClone(clip()[frame].pose);
    else pose=sculptPose();
    stop();updateControls();
  }
  $('clip').onchange=()=>{frame=0;selectFrame();};
  $('frame').onchange=()=>{frame=Number($('frame').value);selectFrame();};
  const makeFrame=()=>({duration:T.MathUtils.clamp($('duration').valueAsNumber||.35,.08,2),pose:structuredClone(pose)});
  $('add').onclick=()=>{clip().push(makeFrame());frame=clip().length-1;edit();updateControls();};
  $('replace').onclick=()=>{clip()[frame]=makeFrame();edit();updateControls();};
  $('delete').onclick=()=>{clip().splice(frame,1);frame=Math.max(0,frame-1);edit();selectFrame();};
  $('rest').onclick=()=>{pose=sculptPose();stop();updateControls();};
  $('play').onclick=()=>{
    if(started!==null){stop();return;}
    if(!clip().length){status('Ajoute une pose avant de lire l’animation.');return;}
    started=performance.now();$('play').textContent='Arrêter';
  };
  const buffer=()=>mesh.geometry.attributes.position;
  function changed(){
    buffer().needsUpdate=true;mesh.geometry.computeVertexNormals();mesh.geometry.computeBoundingSphere();edit();
  }
  $('undo').onclick=()=>{if(!undo.length)return;buffer().array.set(undo.pop());changed();};
  function setRay(event){
    const rect=canvas.getBoundingClientRect();
    pointer.set(2*(event.clientX-rect.left)/rect.width-1,1-2*(event.clientY-rect.top)/rect.height);
    ray.setFromCamera(pointer,camera);
  }
  function hit(event){
    setRay(event);return ray.intersectObject(mesh,false)[0];
  }
  canvas.addEventListener('contextmenu',event=>event.preventDefault());
  canvas.addEventListener('pointerdown',event=>{
    if(event.button!==0)return;
    if(!mesh.visible){
      setRay(event);
      const found=ray.intersectObjects(dots,false)[0];
      if(!found)return;
      const index=dots.indexOf(found.object);
      $('joint').value=String(index);
      stop();applySculptPose(rig,sculptPose());
      const point=new T.Vector3(...data.pivots[index]);
      plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(new T.Vector3()),point);
      const origin=ray.ray.intersectPlane(plane,new T.Vector3());
      if(!origin)return;
      pivotDrag={id:event.pointerId,index,offset:point.sub(origin)};
      updateControls();canvas.setPointerCapture(event.pointerId);controls.enabled=false;
      return;
    }
    const found=hit(event);if(!found)return;
    const original=buffer().array.slice(),center=found.point;
    const mirrored=center.clone().setX(-center.x);
    const radius=Number($('radius').value);
    const normal=camera.getWorldDirection(new T.Vector3());
    plane.setFromNormalAndCoplanarPoint(normal,center);
    stroke={id:event.pointerId,center,mirrored,original,radius,tool:$('brush').value,
      mirror:$('mirror').checked,x:event.clientX,y:event.clientY,
      normals:mesh.geometry.attributes.normal.array.slice()};
    undo.push(original);if(undo.length>16)undo.shift();
    canvas.setPointerCapture(event.pointerId);controls.enabled=false;
  });
  canvas.addEventListener('pointermove',event=>{
    if(pivotDrag?.id===event.pointerId){
      setRay(event);
      if(!ray.ray.intersectPlane(plane,axis))return;
      const values=axis.add(pivotDrag.offset).clampScalar(-3,3).toArray().map(n=>Math.round(n*1000)/1000);
      data.pivots[pivotDrag.index]=values;
      pivots.forEach((input,i)=>{input.value=values[i];});
      edit();return;
    }
    if(!mesh.visible)return;
    if(!stroke){
      const found=hit(event);brushMesh.visible=Boolean(found);
      if(found){brushMesh.position.copy(found.point);brushMesh.scale.setScalar(Number($('radius').value));}
      return;
    }
    if(stroke.id!==event.pointerId)return;
    setRay(event);
    if(!ray.ray.intersectPlane(plane,axis))return;
    axis.sub(stroke.center);
    const {original,center,mirrored,radius,tool,mirror,x,y,normals}=stroke;
    const positions=buffer().array;
    const amount=T.MathUtils.clamp(Math.hypot(event.clientX-x,event.clientY-y)*.005,0,.65);
    const average=new T.Vector3(),normal=new T.Vector3();
    for(let i=0;i<buffer().count;i++){
      const j=i*3;
      relative.fromArray(original,j);
      const direct=relative.distanceTo(center),opposite=mirror?relative.distanceTo(mirrored):Infinity;
      const weight=1-T.MathUtils.smoothstep(Math.min(direct,opposite),0,radius);
      if(!weight)continue;
      if(tool==='grab'){
        relative.x+=axis.x*weight*(opposite<direct?-1:1);
        relative.y+=axis.y*weight;relative.z+=axis.z*weight;
      }else if(tool==='smooth'){
        average.set(0,0,0);
        for(const neighbor of adjacency[i]){
          average.x+=original[neighbor*3];average.y+=original[neighbor*3+1];average.z+=original[neighbor*3+2];
        }
        relative.lerp(average.multiplyScalar(1/adjacency[i].length),Math.min(1,amount*2)*weight);
      }else{
        normal.fromArray(normals,j);
        relative.addScaledVector(normal,amount*weight*(event.shiftKey?-1:1));
      }
      relative.clampScalar(-3,3).toArray(positions,j);
    }
    changed();
  });
  const endStroke=event=>{
    if(pivotDrag?.id===event.pointerId){
      pivotDrag=null;controls.enabled=true;updateMode();
    }
    if(stroke?.id===event.pointerId){stroke=null;controls.enabled=true;}
  };
  canvas.addEventListener('lostpointercapture',endStroke);
  canvas.addEventListener('pointerleave',()=>{brushMesh.visible=false;});
  function close(){if(canLeave())dialog.close();}
  $('close').onclick=close;
  const protectDraft=event=>{if(dirty)event.preventDefault();};
  window.addEventListener('beforeunload',protectDraft);
  dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
  dialog.addEventListener('close',()=>{
    window.removeEventListener('beforeunload',protectDraft);
    cancelAnimationFrame(raf);controls.dispose();rig?.dispose();scene.traverse(node=>{
      node.geometry?.dispose();
      node.material?.dispose();
    });
    activeMaterial.dispose();jointMaterial.dispose();
    renderer.dispose();dialog.remove();
  },{once:true});
  function render(now){
    raf=requestAnimationFrame(render);
    const {clientWidth:w,clientHeight:h}=$('canvas');
    if(w&&h&&(canvas.width!==Math.round(w*renderer.getPixelRatio())||canvas.height!==Math.round(h*renderer.getPixelRatio()))){
      renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();
    }
    controls.update();
    if(rig){
      if(started!==null)playSculptClip(rig,clip(),(now-started)/1000,Number($('clip').value)!==3);
      rig.mesh.updateMatrixWorld(true);
      const lines=[];
      for(const [i,[,parent]] of sculptJoints.entries()){
        const point=dots[i].position;
        if(pivotDrag)point.fromArray(data.pivots[i]);
        else rig.bones[i].getWorldPosition(point);
        dots[i].material=i===joint()?activeMaterial:jointMaterial;
        if(parent>=0)lines.push(...dots[parent].position,...point);
      }
      const prior=guideLine.geometry.getAttribute('position');
      if(prior){prior.array.set(lines);prior.needsUpdate=true;}
      else guideLine.geometry.setAttribute('position',new T.Float32BufferAttribute(lines,3));
      guideLine.frustumCulled=false;
    }
    renderer.render(scene,camera);
  }
  const last=models.at(-1);load(last?.sculpt.base??'sphere',last);raf=requestAnimationFrame(render);
}

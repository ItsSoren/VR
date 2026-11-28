import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {readSculpts,normalizeSculpt,sculptStorage,sculptJoints,sculptStates,sculptPose,maxSculptVertices} from './sculpt-format.js';
import {sculptNeighbors,refineSculpt,simplifySculpt,sculptInfluence,shapeSculpt} from './sculpt-brush.js';
import {sculptGeometry,sculptVertices,sculptRig,applySculptPose,playSculptClip} from './sculpt-rig.js';

export function openEntitySculptor({canvas,renderer,onClose}){
  const models=readSculpts(localStorage);
  const make=(tag,className,markup)=>{
    const element=document.createElement(tag);element.className=className;element.innerHTML=markup;return element;
  };
  const toolbar=make('div','sculpt-toolbar',`
    <select data-ui="library" aria-label="Entit&eacute; enregistr&eacute;e"></select>
    <input data-ui="name" aria-label="Nom" maxlength="36">
    <button data-ui="sphere">Nouvelle sph&egrave;re</button><button data-ui="cube">Nouveau cube</button>
    <button class="strong" data-ui="save">Enregistrer l&rsquo;entit&eacute;</button>
    <a href="./editor.html?tab=entities" target="_blank" rel="noopener">Placer sur une carte</a>`);
  const brushes=[
    ['hook','K','Allonger','Prolonge une forme dans la direction du trait'],
    ['grab','G','Déplacer','Déplace le volume sous la brosse'],
    ['draw','D','Relief','Ajoute du volume le long de la surface'],
    ['carve','C','Creuser','Repousse la surface vers l’intérieur'],
    ['smooth','S','Lisser','Estompe les bosses et les raccords'],
    ['pinch','P','Pincer','Resserre les sommets pour marquer un pli'],
    ['refine','B','Densifier','Subdivise les grandes arêtes sous la brosse'],
    ['simplify','N','Simplifier','Fusionne les arêtes courtes sous la brosse'],
  ];
  const rail=make('nav','tool-rail sculpt-rail',brushes.map(([key,letter,label,title])=>
    `<button class="rail-btn" data-brush="${key}" title="${title} (${letter})"><span>${letter}</span><span>${label}</span></button>`).join(''));
  rail.setAttribute('aria-label','Brosses de sculpture');
  const inspector=make('aside','side sculpt-inspector',`
        <h2>Entité</h2>
        <label>Mode <select data-ui="mode"><option value="sculpt">Sculpture</option><option value="motion">Squelette et animations</option></select></label>
        <div data-ui="sculpt">
          <label>Rayon <input data-ui="radius" type="range" min="8" max="160" step="1" value="52"></label>
          <label data-ui="spacing-label" hidden>Taille des ar&ecirc;tes <input data-ui="spacing" type="range" min="3" max="34" step="1" value="11"><span data-ui="spacing-value">11 px</span></label>
          <label data-ui="strength-label">Intensit&eacute; <input data-ui="strength" type="range" min=".15" max="1" step=".05" value=".65"></label>
          <label><input data-ui="mirror" type="checkbox" checked> Sym&eacute;trie gauche / droite</label>
          <label><input data-ui="adaptive" type="checkbox" checked> Ajouter des polygones sous la brosse</label>
          <p data-ui="mesh-count"></p>
          <label><input data-ui="wire" type="checkbox"> Afficher les polygones</label>
          <label>Couleur <input data-ui="color" type="color"></label>
          <button data-ui="undo">Annuler</button> <button data-ui="redo">R&eacute;tablir</button>
          <p data-ui="hint"></p>
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
  `);
  const views=make('div','sculpt-views','<button data-view="front">Avant</button><button data-view="side">Côté</button><button data-view="top">Dessus</button><button data-view="fit">Tout voir</button>');
  const layout=document.querySelector('main.layout'),head=layout.querySelector('.viewport-head');
  const title=head.querySelector('strong'),footer=layout.querySelector('.preview-footer');
  const previousTitle=title.textContent,previousFooter=footer.textContent;
  const $=key=>inspector.querySelector('[data-ui="'+key+'"]')??toolbar.querySelector('[data-ui="'+key+'"]');
  document.querySelector('.top-actions').append(toolbar);
  layout.prepend(rail);layout.append(inspector);head.append(views);
  const wasFullscreen=document.body.classList.contains('preview-fullscreen');
  document.body.classList.remove('preview-fullscreen');
  document.body.dataset.workspace='sculpt';
  title.textContent='Entité / Sculpture';footer.textContent='Clic droit : tourner · Molette : zoomer · Clic molette : déplacer la vue';
  const scene=new T.Scene();scene.background=new T.Color('#182029');
  const camera=new T.PerspectiveCamera(44,1,.03,100);camera.position.set(2,1.55,-2.7);
  const events=new AbortController();
  const listen=(target,event,handler)=>target.addEventListener(event,handler,{signal:events.signal});
  const controls=new OrbitControls(camera,canvas);controls.target.set(0,.65,0);
  controls.mouseButtons={LEFT:null,MIDDLE:T.MOUSE.PAN,RIGHT:T.MOUSE.ROTATE};
  const sky=new T.HemisphereLight('#e5f0ff','#5c3d46',2.1),light=new T.DirectionalLight('#fff0e0',2.7);
  light.position.set(-2,4,-3);scene.add(sky,light,new T.GridHelper(6,24,'#758698','#344250'));
  const material=new T.MeshStandardMaterial({color:'#62566b',roughness:.84,side:T.DoubleSide});
  const brushMesh=new T.Mesh(new T.RingGeometry(.978,1,44),new T.MeshBasicMaterial({color:'#d0f1ff',side:T.DoubleSide,depthTest:false,depthWrite:false,transparent:true,opacity:.8}));
  brushMesh.renderOrder=4;
  scene.add(brushMesh);brushMesh.visible=false;
  const guides=new T.Group();scene.add(guides);
  const dotGeo=new T.SphereGeometry(.027,9,6),jointMaterial=new T.MeshBasicMaterial({color:'#92b9db',depthTest:false});
  const activeMaterial=new T.MeshBasicMaterial({color:'#ffc35e',depthTest:false});
  const guideLine=new T.LineSegments(new T.BufferGeometry(),new T.LineBasicMaterial({color:'#96a9bb',depthTest:false}));
  guides.add(guideLine);
  const dots=sculptJoints.map(()=>{const dot=new T.Mesh(dotGeo,jointMaterial);dot.renderOrder=3;guides.add(dot);return dot;});
  const ray=new T.Raycaster(),pointer=new T.Vector2(),plane=new T.Plane(),axis=new T.Vector3();
  const undo=[],redo=[];
  let activeBrush='hook',adaptiveMesh=false;
  let id,mesh,rig,data,pose,dirty=false,stroke,pivotDrag,frame=0,started=null,raf=0,adjacency=[];
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
  const requestRender=()=>{if(!raf)raf=requestAnimationFrame(render);};
  controls.addEventListener('change',requestRender);
  const observer=new ResizeObserver(requestRender);observer.observe(canvas);
  const topologyBrush=key=>key==='refine'||key==='simplify';
  const selectBrush=key=>{
    activeBrush=key;
    for(const button of rail.querySelectorAll('[data-brush]'))button.setAttribute('aria-pressed',String(button.dataset.brush===key));
    const info=brushes.find(([name])=>name===key);
    const topology=topologyBrush(key);
    $('spacing-label').hidden=!topology;$('strength-label').hidden=topology;
    $('hint').textContent=info[3]+(topology?'. Réduis la taille pour des détails plus fins.':'. Maj pour lisser, Ctrl pour inverser Relief ou Creuser.');

  };
  selectBrush(activeBrush);
  $('spacing').oninput=()=>{$('spacing-value').textContent=$('spacing').value+' px';};
  for(const button of rail.querySelectorAll('[data-brush]'))button.onclick=()=>selectBrush(button.dataset.brush);
  views.onclick=event=>{
    const view=event.target.dataset.view;if(!view)return;
    mesh.geometry.computeBoundingSphere();
    const bounds=mesh.geometry.boundingSphere,distance=Math.max(.60,bounds.radius*3.6);
    controls.target.copy(bounds.center);
    const offset=view==='front'?[0,0,-1]:view==='side'?[1,0,0]:view==='top'?[0,1,-.001]:[.55,.22,-1];
    camera.position.fromArray(offset).normalize().multiplyScalar(distance).add(controls.target);
    controls.update();requestRender();
  };
  const status=message=>{$('status').textContent=message;};
  const countText=new Intl.NumberFormat('fr-FR');
  function updateCount(){
    const {geometry}=mesh;
    $('mesh-count').textContent=countText.format(geometry.index.count/3)+' triangles · '+countText.format(geometry.attributes.position.count)+' sommets';
  }
  const edit=()=>{dirty=true;status('Modifications en cours');requestRender();};
  const joint=()=>Number($('joint').value);
  const clip=()=>data.clips[Number($('clip').value)];
  function library(){
    $('library').replaceChildren(option('','Brouillon'),...models.map(model=>option(model.id,model.name)));
    $('library').value=id??'';
  }
  function stop(){
    started=null;$('play').textContent='Lire';
    if(rig)applySculptPose(rig,pose);
    requestRender();
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
    for(const button of rail.querySelectorAll('[data-brush]'))button.disabled=!mesh.visible;
    title.textContent=mesh.visible?'Entité / Sculpture':'Entité / Squelette et animations';
    if(!mesh.visible){
      rig=sculptRig({...data,...snapshot()});scene.add(rig.mesh);applySculptPose(rig,pose);
    }
    updateControls();
  }
  function load(shape,model){
    mesh?.removeFromParent();mesh?.geometry.dispose();
    id=model?.id;
    const geometry=sculptGeometry(shape,model?.sculpt.vertices,model?.sculpt.indices);
    mesh=new T.Mesh(geometry,material);scene.add(mesh);
    adjacency=sculptNeighbors(geometry);adaptiveMesh=Boolean(model?.sculpt.indices);updateCount();
    data=normalizeSculpt(model?.sculpt??{base:shape,vertices:sculptVertices(geometry)});
    pose=sculptPose();frame=0;undo.length=redo.length=0;dirty=false;
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
  $('wire').onchange=()=>{material.wireframe=$('wire').checked;requestRender();};
  $('color').oninput=()=>{data.color=$('color').value;material.color.set(data.color);edit();};
  $('name').oninput=edit;
  $('contact').onchange=()=>{data.contact=$('contact').value;edit();};
  $('save').onclick=()=>{
    if(!id&&models.length>=20){status('La bibliothèque contient déjà 20 créatures.');return;}
    const sculpt=normalizeSculpt({...data,...snapshot()});
    if(!sculpt){status('Le maillage de cette entité est invalide.');return;}
    const entry={id:id??crypto.randomUUID(),name:$('name').value.trim()||'Ma créature',sculpt};
    const next=[...models.filter(model=>model.id!==id),entry];
    try{localStorage.setItem(sculptStorage,JSON.stringify(next));}
    catch{status('Sauvegarde impossible. Le stockage du navigateur est plein ou bloqué.');return;}
    models.splice(0,models.length,...next);id=entry.id;dirty=false;library();status('Enregistrée. Choisis-la dans Entités, sur ta carte.');
  };
  $('joint').onchange=()=>{updateControls();requestRender();};
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
    started=performance.now();$('play').textContent='Arrêter';requestRender();
  };
  const buffer=()=>mesh.geometry.attributes.position;
  const snapshot=()=>({base:data.base,vertices:sculptVertices(mesh.geometry),
    indices:adaptiveMesh?Array.from(mesh.geometry.index.array):undefined});
  function changed(){
    buffer().needsUpdate=true;mesh.geometry.computeVertexNormals();mesh.geometry.computeBoundingSphere();edit();
  }
  function history(from,to){
    if(!from.length||stroke||!mesh.visible)return;
    to.push(snapshot());
    const prior=from.pop();
    mesh.geometry.dispose();
    mesh.geometry=sculptGeometry(prior.base,prior.vertices,prior.indices);
    adaptiveMesh=Boolean(prior.indices);adjacency=sculptNeighbors(mesh.geometry);updateCount();
    edit();
  }
  $('undo').onclick=()=>history(undo,redo);
  $('redo').onclick=()=>history(redo,undo);
  const brushNormal=new T.Vector3(),ringNormal=new T.Vector3(0,0,1),cameraPoint=new T.Vector3();
  function radiusAt(point){
    cameraPoint.copy(point).applyMatrix4(camera.matrixWorldInverse);
    return Math.max(.004,Number($('radius').value)*2*Math.abs(cameraPoint.z)*Math.tan(T.MathUtils.degToRad(camera.fov/2))/Math.max(canvas.clientHeight,1));
  }
  function setRay(x,y){
    camera.updateMatrixWorld();
    const rect=canvas.getBoundingClientRect();
    pointer.set(2*(x-rect.left)/rect.width-1,1-2*(y-rect.top)/rect.height);
    ray.setFromCamera(pointer,camera);
  }
  const hit=()=>ray.intersectObject(mesh,false)[0];
  function cursor(found){
    brushMesh.visible=Boolean(found);
    if(found){
      brushNormal.copy(found.face.normal);
      brushMesh.position.copy(found.point).addScaledVector(brushNormal,.002);
      brushMesh.quaternion.setFromUnitVectors(ringNormal,brushNormal);
      brushMesh.scale.setScalar(radiusAt(found.point));
    }
    requestRender();
  }
  const reflected=center=>center.clone().setX(-center.x);
  function addDetail(center,radius,mirror,passes){
    if(!$('adaptive').checked)return false;
    const centers=mirror?[center,reflected(center)]:[center];
    let changedTopology=false;
    for(let i=0;i<passes;i++){
      if(!refineSculpt(mesh.geometry,centers,radius*1.16,radius*.56))break;
      changedTopology=true;
    }
    if(changedTopology){adaptiveMesh=true;adjacency=sculptNeighbors(mesh.geometry);updateCount();}
    return changedTopology;
  }
  function influence(center,radius,mirror,face){
    const seeds=face?[face.a,face.b,face.c]:undefined;
    const direct=sculptInfluence(buffer().array,adjacency,center,radius,seeds);
    const other=mirror&&Math.abs(center.x)>radius*.035?
      sculptInfluence(buffer().array,adjacency,reflected(center),radius):[];
    if(!other.length)return {direct,other};
    const strongest=new Map(direct);
    const mirrored=new Map(other);
    return {direct:direct.filter(([id,w])=>w>=(mirrored.get(id)??0)),
      other:other.filter(([id,w])=>w>(strongest.get(id)??0))};
  }
  function apply(center,weights,tool,delta,power,original=buffer().array.slice()){
    const pos=buffer().array,normals=mesh.geometry.attributes.normal.array;
    shapeSculpt(pos,original,normals,adjacency,weights.direct,center,tool,delta,power);
    shapeSculpt(pos,original,normals,adjacency,weights.other,reflected(center),tool,delta,power,true);
  }
  function remember(prior=snapshot()){
    undo.push(prior);if(undo.length>16)undo.shift();redo.length=0;
  }
  function topologyStamp(point,radius){
    const centers=stroke.mirror?[point,reflected(point)]:[point];
    const spacing=Number($('spacing').value)*radius/Number($('radius').value);
    const geometry=mesh.geometry,refining=stroke.tool==='refine';
    const changedTopology=refining?refineSculpt(geometry,centers,radius,spacing):
      simplifySculpt(geometry,centers,radius,spacing*1.4);
    if(!changedTopology){
      if(stroke.prior){
        if(refining&&buffer().count>=maxSculptVertices)status('Limite de sommets atteinte. Simplifie une zone pour continuer.');
        else status(refining?'Aucune arête à subdiviser ici. Réduis la taille des arêtes.':
          'Aucune arête à fusionner ici. Augmente la taille des arêtes ou le rayon.');
      }
      return;
    }
    if(stroke.prior){remember(stroke.prior);stroke.prior=null;}
    adaptiveMesh=true;adjacency=sculptNeighbors(geometry);updateCount();edit();
  }
  function stamp(found,event,power){
    const {point}=found,rad=radiusAt(point);
    if(topologyBrush(stroke.tool)){topologyStamp(point,rad);return;}
    const tool=event.shiftKey?'smooth':stroke.tool;
    if(!stroke.detailAt||stroke.detailAt.distanceToSquared(point)>rad*rad*.30){
      if(addDetail(point,rad,stroke.mirror,2))found=hit()??found;
      stroke.detailAt=point.clone();
    }
    const weights=influence(found.point,rad,stroke.mirror,found.face);
    if(!weights.direct.length&&!weights.other.length)return;
    const intensity=Number($('strength').value);
    const sign=(tool==='carve'?-1:1)*(event.ctrlKey||event.metaKey?-1:1);
    const strength=tool==='smooth'?.55:tool==='pinch'?.16:sign*rad*.19;
    apply(found.point,weights,tool,axis,power*intensity*strength);
    changed();
  }
  listen(canvas,'pointerdown',event=>{
    if(event.button!==0||stroke||pivotDrag)return;
    setRay(event.clientX,event.clientY);
    if(!mesh.visible){
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
      updateControls();
    }else{
      let found=hit();if(!found)return;
      const center=found.point,radius=radiusAt(center),mirror=$('mirror').checked;
      if(topologyBrush(activeBrush)&&!event.shiftKey){
        stroke={id:event.pointerId,tool:activeBrush,mirror,x:event.clientX,y:event.clientY,prior:snapshot()};
        topologyStamp(center,radius);
      }else{
        const tool=event.shiftKey?'smooth':activeBrush;
        remember();
        if(addDetail(center,radius,mirror,4)){found=hit()??found;edit();}
        const weights=influence(found.point,radius,mirror,found.face);
        if(!weights.direct.length){
          status(buffer().count>=maxSculptVertices?'Limite de polygones atteinte. Agrandis la brosse.':'Agrandis la brosse pour atteindre les sommets de cette zone.');
          return;
        }
        plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(new T.Vector3()),found.point);
        stroke={id:event.pointerId,tool,center:found.point,mirror,radius,weights,
          anchor:weights.direct.reduce((best,w)=>w[1]>best[1]?w:best)[0],
          original:tool==='grab'?buffer().array.slice():null,
          projected:found.point.clone(),x:event.clientX,y:event.clientY,detailAt:found.point.clone()};
        if(tool!=='hook'&&tool!=='grab')stamp(found,event,1);
      }
      cursor(null);
    }
    canvas.setPointerCapture(event.pointerId);controls.enabled=false;
  });
  const delta=new T.Vector3(),tip=new T.Vector3();
  listen(canvas,'pointermove',event=>{
    if(pivotDrag?.id===event.pointerId){
      setRay(event.clientX,event.clientY);
      if(!ray.ray.intersectPlane(plane,axis))return;
      const values=axis.add(pivotDrag.offset).clampScalar(-3,3).toArray().map(n=>Math.round(n*1000)/1000);
      data.pivots[pivotDrag.index]=values;
      pivots.forEach((input,i)=>{input.value=values[i];});
      edit();return;
    }
    if(!mesh.visible)return;
    setRay(event.clientX,event.clientY);
    if(!stroke){cursor(hit());return;}
    if(stroke.id!==event.pointerId)return;
    const intensity=Number($('strength').value);
    if(stroke.tool==='grab'||stroke.tool==='hook'){
      if(!ray.ray.intersectPlane(plane,axis))return;
      if(stroke.tool==='grab'){
        delta.subVectors(axis,stroke.center);
        apply(stroke.center,stroke.weights,'grab',delta,intensity,stroke.original);
      }else{
        delta.subVectors(axis,stroke.projected);
        const steps=Math.min(24,Math.max(1,Math.ceil(delta.length()/(stroke.radius*.20))));
        delta.multiplyScalar(1/steps);
        for(let i=0;i<steps;i++){
          tip.fromBufferAttribute(buffer(),stroke.anchor);
          if(stroke.detailAt.distanceToSquared(tip)>stroke.radius**2*.42){
            addDetail(tip,stroke.radius,stroke.mirror,1);stroke.detailAt.copy(tip);
          }
          apply(tip,influence(tip,stroke.radius,stroke.mirror),'hook',delta,.75+intensity*.35);
        }
        stroke.projected.copy(axis);
      }
      changed();return;
    }
    const distance=Math.hypot(event.clientX-stroke.x,event.clientY-stroke.y);
    const spacing=Math.max(2,Number($('radius').value)*.17);
    if(distance<spacing)return;
    const steps=Math.min(topologyBrush(stroke.tool)?3:12,Math.floor(distance/spacing));
    for(let i=1;i<=steps;i++){
      setRay(T.MathUtils.lerp(stroke.x,event.clientX,i/steps),T.MathUtils.lerp(stroke.y,event.clientY,i/steps));
      const found=hit();
      if(found)stamp(found,event,.75);
    }
    stroke.x=event.clientX;stroke.y=event.clientY;
  });
  listen(canvas,'lostpointercapture',event=>{
    if(pivotDrag?.id===event.pointerId){
      pivotDrag=null;controls.enabled=true;updateMode();
    }
    if(stroke?.id!==event.pointerId)return;
    const {tool,center,radius,mirror}=stroke;
    if(tool==='grab'||tool==='hook'){
      tip.fromBufferAttribute(buffer(),stroke.anchor);
      if(tip.distanceToSquared(center)>1e-6&&addDetail(tip,radius,mirror,2))edit();
    }
    stroke=null;controls.enabled=true;
    setRay(event.clientX,event.clientY);cursor(hit());
  });
  listen(canvas,'pointerleave',()=>{cursor(null);});
  function close(){
    if(!canLeave())return;
    events.abort();observer.disconnect();cancelAnimationFrame(raf);controls.dispose();rig?.dispose();
    const resources=new Set();
    scene.traverse(node=>{if(node.geometry)resources.add(node.geometry);if(node.material)resources.add(node.material);});
    resources.add(activeMaterial);resources.add(jointMaterial);
    for(const resource of resources)resource.dispose();
    delete document.body.dataset.workspace;
    if(wasFullscreen)document.body.classList.add('preview-fullscreen');
    title.textContent=previousTitle;footer.textContent=previousFooter;
    toolbar.remove();rail.remove();inspector.remove();views.remove();
    // OrbitControls disposal clears the shared canvas's touch-action style.
    canvas.style.touchAction='none';onClose();
  }
  listen(window,'beforeunload',event=>{if(dirty)event.preventDefault();});
  listen(window,'keydown',event=>{
    const editing=event.target.closest?.('input,select,textarea');
    if(editing||stroke||pivotDrag)return;
    const key=event.key.toLowerCase(),modifier=event.ctrlKey||event.metaKey;
    if(modifier&&key==='s'){event.preventDefault();$('save').click();return;}
    if(modifier&&(key==='z'||key==='y')){
      event.preventDefault();$(event.shiftKey||key==='y'?'redo':'undo').click();return;
    }
    if(modifier||!mesh.visible)return;
    const tool=brushes.find(([,shortcut])=>shortcut.toLowerCase()===key);
    if(tool){event.preventDefault();selectBrush(tool[0]);}
  });
  function render(now){
    raf=0;
    const w=Math.max(1,canvas.clientWidth),h=Math.max(1,canvas.clientHeight);
    if(canvas.width!==Math.floor(w*renderer.getPixelRatio())||canvas.height!==Math.floor(h*renderer.getPixelRatio()))renderer.setSize(w,h,false);
    if(camera.aspect!==w/h){camera.aspect=w/h;camera.updateProjectionMatrix();}
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
    if(started!==null)requestRender();
  }
  const last=models.at(-1);load(last?.sculpt.base??'sphere',last);requestRender();
  return {requestRender,close};
}

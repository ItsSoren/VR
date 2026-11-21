import * as T from 'three';
import {normalizeTraffic,maxTrafficRoutes,maxTrafficCount,maxTrafficWaypoints} from './traffic-format.js';
import {createTraffic,trafficPath} from './traffic.js';

function node(tag,text){
  const element=document.createElement(tag);
  if(text)element.textContent=text;
  return element;
}
function label(text,input){
  const result=node('label',text);result.append(input);return result;
}
function action(text,fn){
  const button=node('button',text);button.type='button';button.onclick=fn;return button;
}
export function createTrafficEditor({container,scene,getMap,getPiece,getCenter,remember,save,render}){
  const guides=new T.Group();scene.add(guides);
  const previewScene=new T.Group();scene.add(previewScene);
  const traffic=createTraffic(previewScene);
  const material=new T.LineBasicMaterial({color:0x65f4d9});
  let index=0,visible=false,playing=false;
  const note=node('p');note.setAttribute('role','status');
  const current=()=>getMap().traffic?.[index];
  function showGuide(){
    for(const line of [...guides.children]){guides.remove(line);line.geometry.dispose();}
    const route=current();
    if(visible&&route){
      const path=trafficPath(route);
      const vertices=path.getSpacedPoints(Math.max(48,route.points.length*7));
      guides.add(new T.Line(new T.BufferGeometry().setFromPoints(vertices),material));
    }
    render();
  }
  function stop(){
    playing=false;traffic.set();render();
  }
  function commit(raw){
    const [route]=normalizeTraffic([raw]);
    if(!route){note.textContent='Indique au moins trois points distincts et un modèle.';return false;}
    const map=getMap();
    remember();map.traffic??=[];map.traffic[index]=route;save();stop();showGuide();
    note.textContent='';
    return true;
  }
  function refresh(){
    if(!visible)return;
    const map=getMap(),routes=map.traffic??[];
    index=Math.min(index,Math.max(0,routes.length-1));
    const route=current();
    container.replaceChildren(node('h3','Flux de circulation'));
    const add=action('Nouveau flux depuis la pièce sélectionnée',()=>{
      const piece=getPiece();
      if(!piece?.model){note.textContent='Sélectionne un modèle dans la hiérarchie.';return;}
      if(routes.length>=maxTrafficRoutes){note.textContent='Limite de flux atteinte.';return;}
      index=routes.length;
      const {x,y,z,w,h,d,model}=piece;
      commit({name:piece.name,points:[[x,y-h/2,z],[x,y-h/2,z-20],[x+12,y-h/2,z-14],[x+12,y-h/2,z]],
        models:[{w,h,d,model}],count:4,speed:8});
      refresh();
    });
    container.append(add,note);
    if(!route){showGuide();return;}
    const select=node('select');
    routes.forEach((r,i)=>select.add(new Option(r.name,i)));
    select.value=index;
    select.onchange=()=>{index=Number(select.value);stop();refresh();};
    const name=node('input');name.value=route.name;name.maxLength=42;
    name.onchange=()=>{commit({...current(),name:name.value});refresh();};
    const points=node('textarea');points.rows=6;points.spellcheck=false;
    points.value=route.points.map(p=>p.join(' ')).join('\n');
    const parse=()=>points.value.trim().split(/\n+/).filter(line=>line.trim()).map(line=>line.trim().split(/[\s,;]+/).map(Number));
    const update=()=>{const path=parse();if(path.length>maxTrafficWaypoints||path.some(p=>p.length!==3||!p.every(Number.isFinite))){
      note.textContent='Entre un point X Y Z par ligne (en mètres).';return false;
    }return commit({...current(),points:path});};
    points.onchange=update;
    const addPoint=action('Ajouter le point visé',()=>{
      const [x,y,z]=getCenter();points.value+='\n'+[x,y,z].map(value=>Math.round(value*100)/100).join(' ');
      if(update())refresh();
    });
    const grid=node('div');grid.className='fields';
    for(const [key,title,min,max,step] of [
      ['count','Véhicules',1,maxTrafficCount,1],['speed','Vitesse (m/s)',.5,160,.1],
      ['brightness','Émission lumineuse',.25,6,.05],
      ['pause','Arrêt (s)',0,25,.1],['interval','Entre les arrêts (s)',3,180,.1],
      ['phase','Décalage du convoi (°)',0,359,1],['spread','Répartition sur le circuit',.25,1,.01],
    ]){
      const input=node('input');Object.assign(input,{type:'number',min,max,step,value:route[key]});
      input.onchange=()=>{commit({...current(),[key]:input.valueAsNumber});input.value=current()[key];};
      grid.append(label(title,input));
    }
    for(const [key,title] of [['smooth','Courbe lissée'],['visible','Actif en jeu']]){
      const input=node('input');input.type='checkbox';input.checked=route[key];
      input.onchange=()=>commit({...current(),[key]:input.checked});
      grid.append(label(title,input));
    }
    const slots=node('p',route.models.map(e=>e.model.name).join(' / '));
    function setModel(slot){
      const p=getPiece();
      if(!p?.model){note.textContent='Sélectionne une pièce qui contient un modèle.';return;}
      const models=current().models.slice(),{model,w,h,d}=p;
      if(slot===null)models.splice(1);
      else models[slot]={model,w,h,d};
      commit({...current(),models});refresh();
    }
    const remove=action('Supprimer ce flux',()=>{
      remember();map.traffic=routes.filter((_,i)=>i!==index);save();stop();refresh();
    });
    container.append(label('Flux sélectionné',select),label('Nom',name),label('Points X Y Z · boucle fermée',points),addPoint,
      grid,slots,action('Utiliser la pièce sélectionnée comme modèle 1',()=>setModel(0)),
      action('Utiliser la pièce sélectionnée comme modèle 2',()=>setModel(1)),
      action('Retirer le modèle 2',()=>{if(current().models.length>1){commit({...current(),models:[current().models[0]]});refresh();}}),
      action('Animer dans l’atelier',()=>{
        playing=true;traffic.set([{...current(),visible:true}]);render();
      }),action('Arrêter l’aperçu',stop),remove);
    container.append(note);
    showGuide();
  }
  return {refresh,setVisible(value){if(visible===value)return;visible=value;if(value)refresh();else{stop();showGuide();}},
    update(time){if(!playing)return false;traffic.update(time*.001);return true;}};
}

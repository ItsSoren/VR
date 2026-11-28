import * as T from 'three';
import {createEntityVisuals} from './creature-visuals.js';
import {creatureLooks,creaturePalette,maxMapEntities,maxPatrolPoints,normalizeEntities} from './entity-format.js';

export function createEntityEditor({container,scene,getMap,getPoint,remember,save,render}){
  const group=new T.Group();
  group.visible=false;scene.add(group);
  const previewGroup=new T.Group();scene.add(previewGroup);
  const preview=createEntityVisuals(previewGroup);
  let previewKey;
  const markerGeometry=new T.ConeGeometry(.30,.58,5);
  const nodeMaterial=new T.MeshBasicMaterial({color:'#74dadb',depthTest:false});
  const routeMaterial=new T.LineBasicMaterial({color:'#74dadb',depthTest:false});
  let selected=0,visible=false,placement=null;
  const make=(type,text)=>{
    const element=document.createElement(type);if(text)element.textContent=text;return element;
  };
  const button=(label,action)=>{
    const element=make('button',label);element.type='button';element.onclick=action;return element;
  };
  const list=make('select'),form=make('div'),route=make('ol'),message=make('p');
  const desc=make('p','Place la créature et ses points sur un sol. Elle patrouille, poursuit un joueur visible et le cherche derrière les obstacles.');
  const actions=make('div');actions.className='piece-actions';
  const add=button('Ajouter une créature',()=>{
    const map=getMap();
    if(!map||definitions().length>=maxMapEntities)return;
    commit(()=>{(map.entities??=[]).push({name:'Sentinelle',...getPoint()});selected=map.entities.length-1;});
  });
  const drop=button('Supprimer',()=>commit(()=>getMap().entities.splice(selected,1)));
  const resetColors=button('Couleurs du mod\u00e8le',()=>commit(()=>{
    delete current().fur;
    delete current().face;
  }));
  function setPlacement(value){
    placement=placement===value?null:value;
    refresh();render();
  }
  const place=button('Placer au clic',()=>setPlacement('spawn'));
  const waypoint=button('Tracer la patrouille',()=>setPlacement('route'));
  actions.append(add,drop,place,waypoint);
  container.append(make('h3','Créatures de la carte'),desc,list,actions,form,route,message);
  const definitions=()=>getMap()?.entities??[];
  const current=()=>definitions()[selected];
  function commit(change){
    remember();change();
    const map=getMap();
    map.entities=normalizeEntities(map.entities);
    if(!map.entities.length)delete map.entities;
    void save();refresh();render();
  }
  const fields={};
  function input(key,label,type,min,max,step){
    const row=make('label',label+' '),element=make(type==='look'?'select':'input');
    if(type==='look')for(const value of creatureLooks)element.add(new Option(value==='vigie'?'Vigie':'Sentinelle',value));
    else{
      element.type=type;
      if(type==='number')Object.assign(element,{min,max,step});
      else element.maxLength=36;
    }
    element.onchange=()=>{
      const value=type==='number'?element.valueAsNumber:element.value;
      if(type==='number'&&!Number.isFinite(value)){refresh();return;}
      commit(()=>{current()[key]=value;});
    };
    row.append(element);form.append(row);fields[key]=element;
  }
  form.className='fields';
  input('name','Nom','text');input('look','Modèle','look');
  input('fur','Pelage','color');input('face','Visage','color');form.append(resetColors);
  input('x','X','number',-1024,1024,.05);input('y','Sol Y','number',-2999,2999,.05);
  input('z','Z','number',-1024,1024,.05);input('yaw','Orientation (°)','number',-360,360,1);
  input('speed','Vitesse (m/s)','number',.5,4,.05);input('sight','Vue (m)','number',2,20,.25);
  list.onchange=()=>{selected=Number(list.value);placement=null;refresh();render();};
  function draw(d){
    for(const child of [...group.children]){
      group.remove(child);
      if(child.isLine)child.geometry.dispose();
    }
    const style=d&&visible?JSON.stringify([d.id,d.look,d.fur,d.face]):null;
    if(style!==previewKey){
      previewKey=style;
      preview.set(style?[d]:[]);
    }
    if(!visible||!d)return;
    preview.draw([{...d,yaw:T.MathUtils.degToRad(d.yaw),state:0}],0,[],[],false);
    const points=[d,...d.route];
    for(const p of d.route){
      const marker=new T.Mesh(markerGeometry,nodeMaterial);
      marker.position.set(p.x,p.y+.34,p.z);marker.rotation.z=Math.PI;
      marker.renderOrder=20;group.add(marker);
    }
    if(d.route.length){
      const path=d.route.length>1?[...points,d.route[0]]:points;
      const line=new T.Line(new T.BufferGeometry().setFromPoints(path.map(p=>new T.Vector3(p.x,p.y+.055,p.z))),routeMaterial);
      line.renderOrder=20;group.add(line);
    }
  }
  function refresh(){
    if(!visible)return;
    const data=definitions();
    selected=Math.min(selected,Math.max(0,data.length-1));
    list.replaceChildren(...(data.length?data.map((d,i)=>new Option(d.name,String(i))):[new Option('Aucune créature','')]));
    list.value=data.length?String(selected):'';
    const d=current();
    add.disabled=data.length>=maxMapEntities;drop.disabled=place.disabled=!d;
    if(!d||placement==='route'&&d.route.length>=maxPatrolPoints)placement=null;
    waypoint.disabled=!d||d.route.length>=maxPatrolPoints;
    place.setAttribute('aria-pressed',String(placement==='spawn'));
    waypoint.setAttribute('aria-pressed',String(placement==='route'));
    form.hidden=!d;route.replaceChildren();
    if(d){
      const palette=creaturePalette(d);
      for(const [key,element] of Object.entries(fields))element.value=palette[key]??d[key];
      for(const [i,p] of d.route.entries()){
        const row=make('li',p.x.toFixed(2)+' / '+p.y.toFixed(2)+' / '+p.z.toFixed(2)+' ');
        row.append(button('Replacer',()=>commit(()=>Object.assign(p,getPoint()))),
          button('Retirer',()=>commit(()=>d.route.splice(i,1))));
        route.append(row);
      }
    }
    message.textContent=placement==='spawn'?'Clique au sol pour placer la créature.':
      placement==='route'?'Clique au sol pour ajouter des points. Reclique sur Tracer la patrouille pour terminer.':
      d?d.route.length+' / '+maxPatrolPoints+' points':'';
    draw(d);
  }
  return {refresh,get placing(){return visible&&Boolean(placement)&&Boolean(current());},
    place(point){
      if(!point)return;
      if(placement==='spawn'){placement=null;commit(()=>Object.assign(current(),point));}
      else if(placement==='route')commit(()=>current().route.push(point));
    },
    setVisible(value){visible=value;if(!value){placement=null;draw(null);}
      group.visible=value;previewGroup.visible=value;refresh();render();}};
}

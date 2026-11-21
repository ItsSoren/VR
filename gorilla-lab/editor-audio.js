import * as T from 'three';
import {surfaceSounds,ambientSounds,maxSoundAssets,maxSoundAssetLength,normalizeSurfaceSound,normalizeSoundZones,normalizeSoundAssets} from './map-audio-format.js';
import {createMapAudio} from './map-audio.js';

const profileFields=[
  ['volume','Volume',0,1,.01],['volumeVariation','Variation de volume',0,.8,.01],
  ['rate','Vitesse',.4,2.5,.01],['rateVariation','Variation de vitesse',0,.7,.01],
  ['pitch','Hauteur (cents)',-1200,1200,10],['pitchVariation','Variation de hauteur (cents)',0,800,10],
];
const impactFields=[...profileFields,
  ['cooldown','Délai entre impacts (s)',.03,2,.01],['minImpact','Impact minimal (m/s)',.1,12,.1],
  ['range','Portée (m)',2,80,.1],
];
const zoneFields=[
  ['x','Centre X (m)',null,null,.1],['y','Centre Y (m)',null,null,.1],['z','Centre Z (m)',null,null,.1],
  ['w','Largeur X (m)',.1,null,.1],['h','Hauteur Y (m)',.1,null,.1],['d','Profondeur Z (m)',.1,null,.1],
  ...profileFields,['fadeDistance','Fondu au bord (m)',.05,100,.05],
  ['fadeIn','Fondu d’entrée (s)',.02,12,.01],['fadeOut','Fondu de sortie (s)',.02,12,.01],
];
const zoneSounds={...ambientSounds,...surfaceSounds};
const make=(tag,text)=>Object.assign(document.createElement(tag),text?{textContent:text}:{});
function control(label,input){
  const wrapper=make('label');
  input.setAttribute('aria-label',label);
  wrapper.append(make('span',label),input);
  return wrapper;
}
function button(label,fn){
  return Object.assign(make('button',label),{type:'button',onclick:fn});
}
function actions(...buttons){
  const row=make('div');row.className='piece-actions';row.append(...buttons);
  return row;
}
function fields(profile,specs,save){
  const grid=make('div');grid.className='fields';
  for(const [key,label,min,max,step] of specs){
    const input=Object.assign(make('input'),{type:'number',step,value:profile[key]??''});
    if(min!==null)input.min=min;
    if(max!==null)input.max=max;
    input.onchange=()=>{
      if(Number.isFinite(input.valueAsNumber))input.value=save(key,input.valueAsNumber)??profile[key];
      else input.value=profile[key];
    };
    grid.append(control(label,input));
  }
  return grid;
}
function audioOptions(sounds){return sounds instanceof Map?[...sounds]:Object.entries(sounds);}

export function createAudioEditor({container,scene,getMap,getPiece,getCenter,remember,save,render}){
  const surface=make('section'),zones=make('section'),assets=make('section');
  const status=make('p');status.setAttribute('role','status');
  container.append(surface,zones,assets,status);
  const zoneGroup=new T.Group();
  zoneGroup.name='audio-zone-preview';
  zoneGroup.visible=false;
  scene.add(zoneGroup);
  const box=new T.BoxGeometry(),edges=new T.EdgesGeometry(box);
  const fill=[.09,.23].map(opacity=>new T.MeshBasicMaterial({color:0x40cfcf,opacity,transparent:true,depthWrite:false}));
  const lines=[0x40cfcf,0xf4dc92].map(color=>new T.LineBasicMaterial({color,transparent:true,opacity:.85}));
  let activeZone=0,activeAsset='',shown=false,context=null,previewRequest=0;
  const engine=createMapAudio(()=>context);
  const setStatus=message=>{status.textContent=message;};
  function stopPreview(){
    previewRequest++;
    engine.stopPreview();
    setStatus('');
  }
  function drawZones(){
    zoneGroup.clear();
    if(shown){
      for(const [index,zone] of (getMap()?.soundZones??[]).entries()){
        const state=Number(index===activeZone),mesh=new T.Mesh(box,fill[state]);
        mesh.add(new T.LineSegments(edges,lines[state]));
        mesh.position.set(zone.x,zone.y,zone.z);
        mesh.scale.set(zone.w,zone.h,zone.d);
        zoneGroup.add(mesh);
      }
    }
    render();
  }
  async function preview(profile){
    if(!profile?.clip)return;
    stopPreview();
    const request=previewRequest;
    try{
      const AudioContextClass=globalThis.AudioContext??globalThis.webkitAudioContext;
      context??=new AudioContextClass();
      await context.resume();
      if(request!==previewRequest)return;
      engine.setAssets(getMap().soundAssets??[]);
      if(!(await engine.preview(profile))&&request===previewRequest)setStatus('Impossible de lire ce son.');
    }catch{if(request===previewRequest)setStatus('Impossible de lire ce son.');}
  }
  function previewActions(profile){
    return actions(button('Écouter',()=>preview(profile())),button('Arrêter',stopPreview));
  }
  function clipSelector(sounds,value,change,emptyLabel){
    const select=make('select');
    if(emptyLabel)select.add(new Option(emptyLabel,''));
    const embedded=(getMap().soundAssets??[]).map(asset=>[asset.id,asset.name]);
    for(const [id,label] of [...audioOptions(sounds),...embedded])select.add(new Option(label,id));
    select.value=value??'';
    select.onchange=()=>change(select.value);
    return control('Son',select);
  }
  function drawSurface(){
    const piece=getPiece();
    surface.replaceChildren(make('h3','Sons de surface'));
    if(!piece){surface.append(make('p','Sélectionnez une pièce pour lui attribuer un son d’impact.'));return;}
    const update=(key,value)=>{
      const next=normalizeSurfaceSound({...piece.surfaceSound,[key]:value});
      remember();
      if(next)piece.surfaceSound=next;
      else delete piece.surfaceSound;
      save();
      return next?.[key];
    };
    surface.append(make('p',piece.name),clipSelector(surfaceSounds,piece.surfaceSound?.clip,value=>{
      stopPreview();update('clip',value);drawSurface();drawAssets();
    },'Son de surface du jeu'));
    if(!piece.surfaceSound)return;
    surface.append(fields(piece.surfaceSound,impactFields,update),previewActions(()=>piece.surfaceSound));
  }
  function drawZoneForm(){
    const map=getMap(),list=map.soundZones??[];
    activeZone=Math.min(activeZone,Math.max(0,list.length-1));
    const zone=list[activeZone];
    zones.replaceChildren(make('h3','Zones d’ambiance'));
    const add=button('Ajouter une zone',()=>{
      const [x,y,z]=getCenter();
      const next=normalizeSoundZones([...list,{name:`Zone ${list.length+1}`,x,y,z,w:8,h:5,d:8,
        clip:audioOptions(ambientSounds)[0]?.[0],mode:'loop'}]);
      if(next.length===list.length){setStatus('Limite de zones atteinte.');return;}
      remember();map.soundZones=next;activeZone=next.length-1;drawZoneForm();drawZones();save();
    });
    if(!zone){zones.append(actions(add));return;}
    const remove=button('Supprimer la zone',()=>{
      remember();map.soundZones=list.filter((_,index)=>index!==activeZone);
      stopPreview();drawZoneForm();drawZones();drawAssets();save();
    });
    const selection=make('select');
    list.forEach((item,index)=>selection.add(new Option(item.name,index)));
    selection.value=activeZone;
    selection.onchange=()=>{activeZone=Number(selection.value);stopPreview();drawZoneForm();drawZones();};
    function update(key,value){
      const [next]=normalizeSoundZones([{...zone,[key]:value}]);
      if(!next)return zone[key];
      remember();Object.assign(zone,next);drawZones();save();
      return zone[key];
    }
    const name=Object.assign(make('input'),{value:zone.name,maxLength:42});
    name.onchange=()=>{name.value=update('name',name.value);selection.options[activeZone].text=zone.name;};
    const mode=make('select');
    mode.add(new Option('En boucle','loop'));mode.add(new Option('À l’entrée','enter'));
    mode.value=zone.mode;
    mode.onchange=()=>{mode.value=update('mode',mode.value);};
    zones.append(actions(add,remove),control('Zone sélectionnée',selection),control('Nom',name),
      clipSelector(zoneSounds,zone.clip,value=>{stopPreview();update('clip',value);drawAssets();}),
      control('Déclenchement',mode),fields(zone,zoneFields,update),previewActions(()=>zone));
  }
  function drawAssets(){
    const map=getMap();
    assets.replaceChildren(make('h3','Sons importés'));
    const audioFiles=map.soundAssets??[];
    const input=Object.assign(make('input'),{type:'file',accept:'audio/*'});
    input.disabled=audioFiles.length>=maxSoundAssets;
    input.onchange=()=>{
      const file=input.files[0];
      if(!file)return;
      if(!file.type.startsWith('audio/')||file.size>450_000){setStatus('Choisissez un fichier audio de moins de 450 ko.');return;}
      const reader=new FileReader();
      reader.onload=()=>{
        if(getMap()!==map)return;
        const data=reader.result;
        const name=file.name.replace(/\.[^.]+$/,'');
        const asset={id:`audio-${crypto.randomUUID()}`,name,data};
        const current=map.soundAssets??[];
        const next=normalizeSoundAssets([...current,asset]);
        if(data.length>maxSoundAssetLength||!next.some(item=>item.id===asset.id)){
          setStatus(`Import impossible. Vérifiez la taille, le format ou la limite de ${maxSoundAssets} sons.`);return;
        }
        remember();map.soundAssets=next;activeAsset=asset.id;save();refresh();setStatus('Son ajouté aux menus de sélection.');
      };
      reader.onerror=()=>setStatus('Impossible de lire ce fichier.');
      reader.readAsDataURL(file);
    };
    assets.append(control('Importer un fichier audio (450 ko maximum)',input));
    if(!audioFiles.length)return;
    const selection=make('select');
    for(const {id,name} of audioFiles)selection.add(new Option(name,id));
    if(audioFiles.some(item=>item.id===activeAsset))selection.value=activeAsset;
    const remove=button('Supprimer le son',()=>{
      remember();map.soundAssets=audioFiles.filter(item=>item.id!==selection.value);
      stopPreview();save();refresh();
    });
    const usage=make('p');
    function updateUsage(){
      activeAsset=selection.value;
      const pieces=map.pieces.filter(piece=>piece.surfaceSound?.clip===activeAsset).length;
      const zones=(map.soundZones??[]).filter(zone=>zone.clip===activeAsset).length;
      remove.disabled=Boolean(pieces||zones);
      const locations=[pieces&&`${pieces} ${pieces===1?'pièce':'pièces'}`,zones&&`${zones} ${zones===1?'zone':'zones'}`];
      usage.textContent=remove.disabled?`Son utilisé par ${locations.filter(Boolean).join(' et ')}. Changez leur son avant de le supprimer.`:'';
      usage.hidden=!remove.disabled;
    }
    selection.onchange=updateUsage;
    updateUsage();
    const buttons=previewActions(()=>normalizeSurfaceSound({clip:selection.value,volume:.8,
      volumeVariation:0,rateVariation:0,pitchVariation:0}));
    buttons.append(remove);
    assets.append(control('Son importé',selection),buttons,usage);
  }
  function refresh(){
    if(!shown||!getMap())return;
    drawSurface();drawZoneForm();drawAssets();drawZones();
  }
  function setVisible(visible){
    if(shown===visible)return;
    shown=visible;zoneGroup.visible=visible;
    if(shown)refresh();
    else{stopPreview();drawZones();}
  }
  return {refresh,setVisible};
}

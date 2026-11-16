import {Euler,Vector3} from 'three';
import {labSpawn} from './lab-layout.js';
import {normalizeTerrain} from './terrain-edit.js';


export const mapMaterials=['Ardoise','Nacre','Brique','Sable','Marbre','Bois','Cuivre','Chrome','Carreaux','Béton','Verre bleu','Verre ambre','Glace','Caoutchouc','Émail','Mosaïque','Benchmark'];
export const materialColors=['#555e6a','#537586','#855443','#a28e61','#bbb8b0','#664527','#794a36','#758291','#293e4b','#626664','#94cfdd','#d1a053','#7cb0cf','#45404b','#40468c','#455d62','#141414'];
export const surfacePresets={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}};
export const maxMapBytes=3_000_000;
export const maxPieces=240;
const number=(value,min,max,fallback)=>typeof value==='number'&&Number.isFinite(value)?Math.max(min,Math.min(max,value)):fallback;
const text=(value,length,fallback)=>typeof value==='string'&&value.trim()?value.trim().slice(0,length):fallback;
export function parseMap(input){
  if(typeof input==='string'){
    if(input.length>maxMapBytes)throw Error('Cette map dépasse 3 Mo.');
    input=JSON.parse(input);
  }
  if(input?.format!=='gorilla-lab-map'||input.version!==1||!Array.isArray(input.pieces)||input.pieces.length<1||input.pieces.length>maxPieces) {
    throw Error('Choisis une map Gorilla Lab v1 avec 1 à '+maxPieces+' pièces.');
  }
  const s=input.spawn??{};
  return {
    format:'gorilla-lab-map',version:1,...(input.arenaBase===true?{arenaBase:true}:{}),name:text(input.name,56,'Ma map'),
    spawn:{x:number(s.x,-120,120,0),y:number(s.y,-10,30,.06),z:number(s.z,-120,120,3),yaw:number(s.yaw,-360,360,0)},
    pieces:input.pieces.map((p,i)=>{
      if(!p||typeof p!=='object')throw Error('Pièce invalide : '+(i+1));
      const terrain=p.terrain&&typeof p.terrain==='object'?normalizeTerrain(p.terrain):null;
      return {
        name:text(p.name,36,'Pièce '+(i+1)),x:number(p.x,-120,120,0),y:number(p.y,-12,33,0),z:number(p.z,-120,120,0),
        w:number(p.w,.2,64,3),h:number(p.h,.12,36,.5),d:number(p.d,.2,64,3),
        pitch:terrain?0:number(p.pitch,-180,180,0),yaw:terrain?0:number(p.yaw,-360,360,0),roll:terrain?0:number(p.roll,-180,180,0),
        ...(terrain?{terrain}:{}),
        material:Math.round(number(p.material,0,16,0)),
        color:typeof p.color==='string'&&/^#[a-f0-9]{6}$/i.test(p.color)?p.color:'#ffffff',
        grip:number(p.grip,0,1.5,.8),gravity:number(p.gravity,.05,2.5,1),bounce:number(p.bounce,0,1.65,1),
        solid:p.solid!==false,
        texture:typeof p.texture==='string'&&p.texture.length<=1_000_000&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(p.texture)?p.texture:null,
      };
    }),
  };
}
// arena.js builds all actual surfaces. The editor serializes its boxes in metres
// and degrees, while arenaBase preserves the built-in hills, fixtures and props.
export function arenaMap(boxes){
  return parseMap({
    format:'gorilla-lab-map',version:1,name:'Gorilla Lab — arène de départ',arenaBase:true,
    spawn:{...labSpawn,yaw:0},
    pieces:boxes.filter(box=>box.half&&box.mesh?.isObject3D).map(box=>({
      name:box.name,x:box.position.x,y:box.position.y,z:box.position.z,
      w:box.half.x*2,h:box.half.y*2,d:box.half.z*2,
      pitch:box.mesh.rotation.x*180/Math.PI,material:box.type,grip:box.friction,gravity:box.gravity,
    })),
  });
}
export function exampleMap(){
  const p=(name,x,y,z,w,h,d,material,extra={})=>({name,x,y,z,w,h,d,material,...extra});
  return parseMap({
    format:'gorilla-lab-map',version:1,name:'Parcours exemple',spawn:{x:0,y:.025,z:4,yaw:0},
    pieces:[
      p('Placette',0,-.24,1,13,.48,12,0),
      p('Piste de glace',-5,-.24,-10,5,.48,11,12,surfacePresets.ice),
      p('Piste gravité basse',5,-.24,-10,5,.48,11,3,surfacePresets.moon),
      p('Couloir central',0,-.24,-12,5,.48,14,9),
      p('Rampe',0,.60,-8,3,.32,5,5,{pitch:16}),
      p('Mur gauche',-1.8,1.65,-15, .42,3.3,4.4,2),
      p('Mur droit',1.8,1.65,-16.1,.42,3.3,4.4,2),
      p('Palier caoutchouc',0,1.16,-18,3.6,.35,2,13,surfacePresets.rubber),
    ],
  });
}


export function makePiece(fields={}){
  return {name:'Bloc',x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:'#ffffff',
    grip:.8,gravity:1,bounce:1,solid:true,texture:null,...fields};
}
export function snapPlacement(hit,normal,shape,step=.25){
  if(!hit||!normal||!Number.isFinite(step)||step<=0)return null;
  const n=normal;
  const inverse=new Euler(-shape.pitch*Math.PI/180,-shape.yaw*Math.PI/180,-(shape.roll??0)*Math.PI/180,'ZXY');
  const local=new Vector3(n.x,n.y,n.z).applyEuler(inverse);
  const extent=(Math.abs(local.x)*shape.w+Math.abs(local.y)*shape.h+Math.abs(local.z)*shape.d)*.5;
  const snap=v=>Math.round(v/step)*step;
  let x=snap(hit.x+n.x*extent), y=snap(hit.y+n.y*extent), z=snap(hit.z+n.z*extent);
  // Snap along the surface and preserve the exact face-to-face separation.
  const correction=extent-(x-hit.x)*n.x-(y-hit.y)*n.y-(z-hit.z)*n.z;
  x+=n.x*correction;y+=n.y*correction;z+=n.z*correction;
  if(![x,y,z].every(Number.isFinite)||Math.abs(x)>120||Math.abs(z)>120||y<-12||y>33)return null;
  return {...shape,x,y,z};
}
export const storageKey='gorilla-lab-custom-map-v1';
export function downloadMap(map){
  const blob=new Blob([JSON.stringify(parseMap(map),null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download=map.name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'.gorilla.json';
  a.click();
  setTimeout(()=>URL.revokeObjectURL(url),1200);
}


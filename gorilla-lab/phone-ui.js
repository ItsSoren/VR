import * as T from 'three';

const WIDTH=240, HEIGHT=150;
const glass=new T.PlaneGeometry(.097,.181);
const buttons=[{id:'camera',label:'Appareil photo',x:64,y:110,color:'#28636e'},{id:'photos',label:'Photos',x:176,y:110,color:'#604580'},
  {id:'dial',label:'Clavier',x:64,y:222,color:'#3a664f'},{id:'clock',label:'Horloge',x:176,y:222,color:'#5a4d3a'}];
const dark=new T.MeshBasicMaterial({color:0x080d13,toneMapped:false});
const touchedDepth=.019, releasedDepth=.032;

export function phoneTap(view,x,y){
  if(view==='home')return buttons.find(b=>Math.abs(x-b.x)<50&&Math.abs(y-b.y)<42)?.id??null;
  if(y>360)return 'home';
  if(view==='camera'&&y>278&&Math.abs(x-120)<56)return 'shutter';
  if(view==='dial'&&x>=16&&x<224&&y>=96&&y<334){
    const col=Math.floor((x-16)/70),row=Math.floor((y-96)/60);
    return '123456789*0#'[row*3+col]??null;
  }
  return null;
}

export function createPhoneUI(scene,renderer,notify,feedback,sendPhoto,togglePower){
  const phones=new WeakMap(),camera=new T.PerspectiveCamera(59,WIDTH/HEIGHT,.04,130);
  const origin=new T.Vector3(),offset=new T.Vector3(),rotation=new T.Quaternion();
  const tip=new T.Vector3(),local=new T.Vector3();
  let target, photoCanvas;
  const captureQueue=new Map();
  function get(mesh){
    let state=phones.get(mesh);
    if(state)return state;
    const canvas=document.createElement('canvas');
    canvas.width=240;canvas.height=408;
    const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;
    const material=new T.MeshBasicMaterial({map:texture,toneMapped:false});
    const screen=new T.Mesh(glass,material);screen.position.set(0,-.001,.0122);
    mesh.add(screen);
    state={screen,material,canvas,ctx:canvas.getContext('2d'),texture,view:'home',on:true,dial:'',photo:null,source:null,
      touches:new WeakMap(),dirty:true,clock:''};
    phones.set(mesh,state);
    return state;
  }
  function render(s){
    if(!s.on){s.screen.material=dark;s.dirty=false;return;}
    s.screen.material=s.material;
    const g=s.ctx;
    g.fillStyle='#142231';g.fillRect(0,0,240,408);
    const text=(str,x,y,size=17,color='#edf5ff')=>{
      g.fillStyle=color;g.font='600 '+size+'px system-ui';g.textAlign='center';g.textBaseline='middle';g.fillText(str,x,y,220);
    };
    const tile=(x,y,w,h,color)=>{g.fillStyle=color;g.beginPath();g.roundRect(x,y,w,h,13);g.fill();};
    text(s.view==='home'?'Gorilla':({camera:'Appareil photo',photos:'Photos',dial:'Clavier',clock:'Horloge'})[s.view],120,32,20);
    if(s.view==='home')for(const b of buttons){
      tile(b.x-49,b.y-40,98,80,b.color);
      text(({camera:'▣',photos:'▧',dial:'⁙',clock:'◷'})[b.id],b.x,b.y-10,31);
      text(b.label,b.x,b.y+21,13);
    }
    if(s.view==='camera'||s.view==='photos'){
      if(s.photo)g.drawImage(s.photo,8,81,224,140);
      else {tile(8,81,224,140,'#202d3a');text(s.view==='camera'?'Vise avec le dos du téléphone':'Aucune photo',120,150,15);}
      if(s.view==='camera'){
        g.fillStyle='#f5f9fc';g.beginPath();g.arc(120,315,27,0,Math.PI*2);g.fill();
        text('●',120,313,18,'#38526a');
      }
    }
    if(s.view==='dial'){
      text(s.dial||'Compose un numéro',120,69);
      for(let i=0;i<12;i++){
        const x=16+i%3*70,y=96+Math.floor(i/3)*60;
        tile(x,y,66,53,'#2b4054');text('123456789*0#'[i],x+33,y+26,22);
      }
    }
    if(s.view==='clock')text(s.clock,120,183,46);
    g.fillStyle='#a3bfd5';g.fillRect(84,385,72,4);
    s.texture.needsUpdate=true;s.dirty=false;
  }
  function refresh(mesh,power){
    const s=get(mesh);
    if(power!==undefined&&s.netPower!==power){
      s.netPower=power;s.on=power;s.dirty=true;
    }
    if(s.view==='clock'){
      const time=new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
      if(time!==s.clock){s.clock=time;s.dirty=true;}
    }
    if(s.dirty)render(s);
  }
  function press(mesh,s,key,hand){
    if(!key)return;
    if(key==='shutter')captureQueue.set(mesh,s);
    else if(s.view==='dial'&&key.length===1)s.dial=(s.dial+key).slice(-17);
    else s.view=key;
    s.dirty=true;feedback(hand);
  }
  function touch(mesh,hand){
    const s=get(mesh);
    refresh(mesh);
    if(!hand?.valid)return;
    hand.skin.indexTip(tip);
    local.copy(tip).sub(mesh.position).applyQuaternion(rotation.copy(mesh.quaternion).invert());
    const x=(local.x/.097+.5)*240,y=(.5-(local.y+.001)/.181)*408;
    const zone=local.x>.048&&local.x<.068&&local.y>.012&&local.y<.046&&Math.abs(local.z)<.022?'side':
      x>=0&&x<240&&y>=0&&y<408&&local.z>-.006&&local.z<=touchedDepth?'screen':null;
    let tracking=s.touches.get(hand);
    if(!tracking){tracking={kind:null,x:0,y:0,swiped:false,front:false};s.touches.set(hand,tracking);}
    if(local.z>releasedDepth)tracking.front=true;
    else if(local.z<-.006)tracking.front=false;
    if(tracking.kind==='side'&&zone!=='side')tracking.kind=null;
    if(tracking.kind==='screen'&&(local.z>releasedDepth||x<0||x>=240||y<0||y>=408)){
      if(!tracking.swiped&&s.on&&local.z>releasedDepth)press(mesh,s,phoneTap(s.view,tracking.x,tracking.y),hand);
      tracking.kind=null;
    }
    if(tracking.kind==='screen'&&s.on&&(Math.abs(y-tracking.y)>67||Math.abs(x-tracking.x)>82)){
      if(!tracking.swiped){s.view=s.view==='home'?(x<tracking.x?'photos':'camera'):'home';s.dirty=true;feedback(hand);}
      tracking.swiped=true;
    }
    if(!tracking.kind&&(zone==='side'||zone==='screen'&&tracking.front)){
      Object.assign(tracking,{kind:zone,x,y,swiped:false});
      if(zone==='side'){
        s.on=!s.on;s.on&&(s.view='home');s.dirty=true;feedback(hand);togglePower(mesh);
      }
    }
  }
  function setPhoto(mesh,source){
    const s=get(mesh);
    if(s.source===source)return;
    s.source=source;
    const img=new Image();
    img.onload=()=>{
      if(s.source!==source)return;
      s.photo=img;s.view='photos';s.dirty=true;
    };
    img.src='data:image/webp;base64,'+source;
  }
  function capture(mesh,s){
    target??=new T.WebGLRenderTarget(WIDTH,HEIGHT,{colorSpace:T.SRGBColorSpace});
    if(!photoCanvas){
      photoCanvas=document.createElement('canvas');photoCanvas.width=WIDTH;photoCanvas.height=HEIGHT;
    }
    const viewport=renderer.getViewport(new T.Vector4());
    const previous=renderer.getRenderTarget(), xr=renderer.xr.enabled, shadow=renderer.shadowMap.autoUpdate;
    const visible=mesh.visible;
    const pixels=new Uint8Array(WIDTH*HEIGHT*4);
    mesh.getWorldPosition(origin);mesh.getWorldQuaternion(camera.quaternion);
    camera.position.copy(origin).add(offset.set(-.034,.08,-.042).applyQuaternion(camera.quaternion));
    try{
      mesh.visible=false;renderer.xr.enabled=false;renderer.shadowMap.autoUpdate=false;
      renderer.setRenderTarget(target);renderer.clear();renderer.render(scene,camera);
      renderer.readRenderTargetPixels(target,0,0,WIDTH,HEIGHT,pixels);
    }finally{
      renderer.setRenderTarget(previous);renderer.setViewport(viewport);
      renderer.xr.enabled=xr;renderer.shadowMap.autoUpdate=shadow;mesh.visible=visible;
    }
    const g=photoCanvas.getContext('2d'), flipped=g.createImageData(WIDTH,HEIGHT);
    for(let row=0;row<HEIGHT;row++)flipped.data.set(pixels.subarray(row*WIDTH*4,(row+1)*WIDTH*4),(HEIGHT-1-row)*WIDTH*4);
    for(let i=3;i<flipped.data.length;i+=4)flipped.data[i]=255;
    g.putImageData(flipped,0,0);
    for(const quality of [.66,.48,.30,.16,.07]){
      const url=photoCanvas.toDataURL('image/webp',quality);
      if(!url.startsWith('data:image/webp;base64,'))break;
      const source=url.slice(23);
      if(source.length>12000)continue;
      setPhoto(mesh,source);sendPhoto(mesh,source);return;
    }
    notify('Photo trop volumineuse');
  }
  return {touch,refresh,setPhoto,flush(){
    const next=captureQueue.entries().next().value;
    if(!next)return;
    captureQueue.delete(next[0]);
    if(!next[0].parent)return;
    try{capture(...next);}catch(error){notify('Capture indisponible');console.warn(error);}
  },remove(mesh){
    const s=phones.get(mesh);
    if(!s)return;
    captureQueue.delete(mesh);s.screen.removeFromParent();s.texture.dispose();
    s.material.dispose();phones.delete(mesh);
  }};
}

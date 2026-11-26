import * as T from 'three';

const WIDTH=240, HEIGHT=150;
const glass=new T.PlaneGeometry(.097,.181);
const buttons=[{id:'camera',label:'Appareil photo',x:64,y:110,color:'#28636e'},{id:'photos',label:'Photos',x:176,y:110,color:'#604580'},
  {id:'dial',label:'Clavier',x:64,y:222,color:'#3a664f'},{id:'clock',label:'Horloge',x:176,y:222,color:'#5a4d3a'}];
const dark=new T.MeshBasicMaterial({color:0x080d13,toneMapped:false});
const touchedDepth=.018, releasedDepth=.028;
const clockFormat=new Intl.DateTimeFormat('fr-FR',{hour:'2-digit',minute:'2-digit'});

export function phoneTap(view,x,y){
  if(view==='home')return buttons.find(b=>Math.abs(x-b.x)<50&&Math.abs(y-b.y)<42)?.id??null;
  if(x>=78&&x<=162&&y>=374&&y<=400)return 'home';
  if(view==='camera'&&y>=287&&y<=343){
    if(Math.abs(x-120)<=34)return 'shutter';
    if(x>=177&&x<=228)return 'flip';
  }
  if(view==='dial'&&x>=16&&x<224&&y>=96&&y<334){
    const col=Math.floor((x-16)/70),row=Math.floor((y-96)/60);
    return '123456789*0#'[row*3+col]??null;
  }
  return null;
}

export function createPhoneUI(scene,renderer,notify,feedback,sendPhoto,togglePower,selfieHead){
  const phones=new WeakMap(),camera=new T.PerspectiveCamera(59,WIDTH/HEIGHT,.04,130);
  const origin=new T.Vector3(),offset=new T.Vector3(),rotation=new T.Quaternion();
  const tip=new T.Vector3(),local=new T.Vector3(),cameraDirection=new T.Vector3();
  const selfieRotation=new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),Math.PI);
  const cameraAim=new T.Vector3(),viewport=new T.Vector4();
  const pixels=new Uint8Array(WIDTH*HEIGHT*4);
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
      touches:new WeakMap(),dirty:true,clock:'',clockAt:0,selfie:false};
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
    if(s.view==='photos'&&s.photo){
      g.save();g.translate(120,209);g.rotate(Math.PI/2);
      g.drawImage(s.photo,-156,-97.5,312,195);
      g.restore();
    }else if(s.view==='camera'||s.view==='photos'){
      if(s.photo)g.drawImage(s.photo,8,81,224,140);
      else {tile(8,81,224,140,'#202d3a');text(s.view==='camera'?(s.selfie?'Caméra avant':'Caméra arrière'):'Aucune photo',120,150,15);}
      if(s.view==='camera'){
        g.fillStyle='#f5f9fc';g.beginPath();g.arc(120,315,27,0,Math.PI*2);g.fill();
        text('●',120,313,18,'#38526a');
        tile(177,287,51,56,'#30465b');text('↻',202,307,23);text(s.selfie?'Avant':'Arrière',202,329,10);
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
    if(s.view==='clock'&&Date.now()>=s.clockAt){
      s.clockAt=Date.now()+1000;
      const time=clockFormat.format(new Date());
      if(time!==s.clock){s.clock=time;s.dirty=true;}
    }
    if(s.dirty)render(s);
  }
  function press(mesh,s,key,hand){
    if(!key)return;
    if(key==='shutter')captureQueue.set(mesh,{selfie:s.selfie});
    else if(key==='flip')s.selfie=!s.selfie;
    else if(s.view==='dial'&&key.length===1)s.dial=(s.dial+key).slice(-17);
    else s.view=key;
    s.dirty=true;feedback(hand);
  }
  function touch(mesh,hand){
    const s=get(mesh);
    refresh(mesh);
    if(!hand?.valid){if(hand)s.touches.delete(hand);return;}
    hand.skin.indexTip(tip);
    local.copy(tip).sub(mesh.position).applyQuaternion(rotation.copy(mesh.quaternion).invert());
    const x=(local.x/.097+.5)*240,y=(.5-(local.y+.001)/.181)*408;
    const time=performance.now();
    const side=local.x>.049&&local.x<.067&&local.y>.017&&local.y<.042&&Math.abs(local.z)<.014;
    const inScreen=x>=0&&x<240&&y>=0&&y<408;
    let t=s.touches.get(hand);
    if(!t){t={depth:local.z,contact:false,side:false,started:time};s.touches.set(hand,t);}
    if(side&&!t.side){
      s.on=!s.on;if(s.on)s.view='home';
      s.dirty=true;feedback(hand);togglePower(mesh);
    }
    t.side=side;
    if(t.contact&&(local.z>releasedDepth||local.z<-.02||!inScreen))t.contact=false;
    if(!side&&s.on&&inScreen&&!t.contact&&t.depth>touchedDepth&&local.z<=touchedDepth&&local.z>-.012){
      Object.assign(t,{contact:true,started:time,x,y,key:phoneTap(s.view,x,y),handled:false});
      if(t.key&&t.key!=='home'){press(mesh,s,t.key,hand);t.handled=true;}
    }
    if(t.contact&&!t.handled&&s.on){
      const dx=x-t.x,dy=y-t.y;
      if(t.key==='home'){
        if((time-t.started>=125&&Math.hypot(dx,dy)<23)||dy< -45){
          press(mesh,s,'home',hand);t.handled=true;
        }
      }else if(Math.abs(dx)>61||Math.abs(dy)>62){
        press(mesh,s,s.view==='home'?(dx<0?'photos':'camera'):'home',hand);t.handled=true;
      }
    }
    t.depth=local.z;
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
  function capture(mesh,{selfie}){
    target??=new T.WebGLRenderTarget(WIDTH,HEIGHT,{colorSpace:T.SRGBColorSpace});
    if(!photoCanvas){
      photoCanvas=document.createElement('canvas');photoCanvas.width=WIDTH;photoCanvas.height=HEIGHT;
    }
    renderer.getViewport(viewport);
    const previous=renderer.getRenderTarget(), xr=renderer.xr.enabled, shadow=renderer.shadowMap.autoUpdate;
    const visible=mesh.visible;
    mesh.getWorldPosition(origin);mesh.getWorldQuaternion(camera.quaternion);
    camera.position.copy(origin).add(offset.set(selfie?0:-.034,.072,selfie?.029:-.042).applyQuaternion(camera.quaternion));
    if(selfie)camera.quaternion.multiply(selfieRotation);
    cameraDirection.set(0,0,-1).applyQuaternion(camera.quaternion);
    if(Math.abs(cameraDirection.y)<.97)camera.lookAt(cameraAim.copy(camera.position).add(cameraDirection));
    const head=selfie?selfieHead?.():null,previousHead=head?.visible;
    if(head)head.visible=true;
    try{
      mesh.visible=false;renderer.xr.enabled=false;renderer.shadowMap.autoUpdate=false;
      renderer.setRenderTarget(target);renderer.clear();renderer.render(scene,camera);
      renderer.readRenderTargetPixels(target,0,0,WIDTH,HEIGHT,pixels);
    }finally{
      renderer.setRenderTarget(previous);renderer.setViewport(viewport);
      renderer.xr.enabled=xr;renderer.shadowMap.autoUpdate=shadow;mesh.visible=visible;
      if(head)head.visible=previousHead;
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

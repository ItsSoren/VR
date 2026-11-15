// Les gestes de déplacement et de visée utilisent deux contacts indépendants sur écran tactile.
export function createFlatControls({canvas,enabled,onLook,onAction,onMenu}){
  const movement={x:0,z:0};
  let left=null,right=null,mouse=false,jump=false;
  const cap=v=>Math.min(1,Math.max(-1,v));
  function clear(){
    left=right=null;mouse=jump=false;movement.x=movement.z=0;
  }
  canvas.onpointerdown=e=>{
    if(!enabled())return;
    if(e.pointerType==='touch'){
      const bounds=canvas.getBoundingClientRect();
      if(e.clientX-bounds.left<bounds.width*.46){
        if(left)return;
        left={id:e.pointerId,x:e.clientX,y:e.clientY};
      }else{
        if(right)return;
        right={id:e.pointerId,x:e.clientX,y:e.clientY,total:0};
      }
      e.preventDefault();
    }else{
      if(e.button!==0&&e.button!==2)return;
      mouse=true;
    }
    canvas.setPointerCapture(e.pointerId);
  };
  canvas.onpointermove=e=>{
    if(!enabled())return;
    if(e.pointerId===left?.id){
      movement.x=cap((e.clientX-left.x)/48);movement.z=cap((e.clientY-left.y)/48);
    }else if(e.pointerId===right?.id){
      const x=e.clientX-right.x,y=e.clientY-right.y;
      right.x=e.clientX;right.y=e.clientY;right.total+=Math.abs(x)+Math.abs(y);
      onLook(x,y,.007);
    }else if(mouse&&e.pointerType!=='touch')onLook(e.movementX,e.movementY,.004);
  };
  function end(e,activate){
    if(e.pointerId===left?.id){movement.x=movement.z=0;left=null;}
    if(e.pointerId===right?.id){
      if(activate&&right.total<12&&enabled())onAction('interact');
      right=null;
    }
    if(e.pointerType!=='touch')mouse=false;
  }
  canvas.onpointerup=e=>end(e,true);
  canvas.onpointercancel=canvas.onlostpointercapture=e=>end(e,false);
  canvas.oncontextmenu=e=>e.preventDefault();
  document.querySelectorAll('[data-flat-action]').forEach(button=>{
    button.onclick=()=>{
      if(!enabled())return;
      const action=button.dataset?.flatAction;
      if(action==='jump')jump=true;
      else if(action==='menu')onMenu();
      else if(action)onAction(action);
    };
  });
  return {movement,clear,consumeJump(){const value=jump;jump=false;return value;}};
}

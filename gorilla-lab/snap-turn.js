export function readTurnAxis(gamepad){
  const axes=gamepad?.axes;
  const value=axes?.length>=4?axes[2]:axes?.[0];
  return Number.isFinite(value)?Math.max(-1,Math.min(1,value)):0;
}
export function consumeSnap(state,axis,{menu=false,allowMenu=true}={}){
  if(menu&&!allowMenu){state.armed=false;return 0;}
  if(Math.abs(axis)<.25){state.armed=true;return 0;}
  if(Math.abs(axis)<.6||state.armed===false)return 0;
  state.armed=false;return Math.sign(axis);
}


function stats(hand){
  return hand.hapticStats??={attempts:0,accepted:0,failed:0,unsupported:0,last:'idle'};
}
export function pulseHand(hand,power=.16,duration=26){
  const s=stats(hand),pad=hand.gamepad;
  const actuator=Array.from(pad?.hapticActuators??[]).find(a=>typeof a?.pulse==='function');
  if(!actuator&&typeof pad?.vibrationActuator?.playEffect!=='function'){
    s.unsupported++;s.last='unsupported';return false;
  }
  s.attempts++;s.last='pending';
  const done=result=>{if(result===false){s.failed++;s.last='refused';}else{s.accepted++;s.last='accepted';}};
  const fail=()=>{s.failed++;s.last='error';};
  try{
    const pending=actuator?actuator.pulse(power,duration):pad.vibrationActuator.playEffect('dual-rumble',{
      duration,strongMagnitude:power,weakMagnitude:power,
    });
    Promise.resolve(pending).then(done,fail);
    return true;
  }catch{fail();return false;}
}
export function updateGroundHaptics(hand,enabled,dt,power=.16,duration=26){
  hand.hapticCooldown=Math.max(0,(hand.hapticCooldown??0)-Math.max(0,dt));
  const onGround=Boolean(hand.valid&&hand.groundContact);
  if(!enabled){hand.hapticGrounded=false;hand.hapticPending=false;return;}
  if(!onGround){hand.hapticGrounded=false;hand.hapticPending=false;return;}
  if(!hand.hapticGrounded)hand.hapticPending=true;
  hand.hapticGrounded=true;
  if(!hand.hapticPending||hand.hapticCooldown>0)return;
  hand.hapticPending=false;
  if(pulseHand(hand,power,duration))hand.hapticCooldown=.08;
}


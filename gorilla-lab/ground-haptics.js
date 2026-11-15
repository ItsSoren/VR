export function updateGroundHaptics(hand,enabled,dt){
  hand.hapticCooldown=Math.max(0,(hand.hapticCooldown??0)-dt);
  const onGround=Boolean(hand.valid&&hand.groundContact);
  const fresh=onGround&&!hand.hapticGrounded;
  hand.hapticGrounded=onGround;
  if(!enabled||!fresh||hand.hapticCooldown>0)return;
  const pad=hand.gamepad;
  const actuator=pad?.hapticActuators?.[0];
  try{
    let pending;
    if(typeof actuator?.pulse==='function')pending=actuator.pulse(.16,26);
    else if(typeof pad?.vibrationActuator?.playEffect==='function')pending=pad.vibrationActuator.playEffect('dual-rumble',{
      duration:26,strongMagnitude:0,weakMagnitude:.16,
    });
    else return;
    hand.hapticCooldown=.08;
    pending?.catch?.(()=>{});
  }catch{
    // A controller can disconnect between tracking and the pulse.
  }
}

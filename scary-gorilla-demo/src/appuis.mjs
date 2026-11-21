const MAX_ASSISTED_CROUCH = .22;
const MIN_EYE_HEIGHT = .34;
const RETURN_SPEED = .48;
const MIN_PUSH_TIME = .024;

export function createCeilingAssist() {
  let depth=0, planted=false;
  return {
    get depth() {return depth;},
    reset() {depth=0;planted=false;},
    rise(dt) {return planted ? 0 : Math.min(depth, dt*RETURN_SPEED);},
    recover(rise) {depth=Math.max(0,depth-rise);},
    press({underside,grounded,plannedY,appliedY,intentY,eyeHeight}) {
      planted=underside;
      if(!planted||!grounded||plannedY>=0||intentY>=0)return 0;
      const blocked=Math.max(0,appliedY-plannedY);
      const headroom=Math.max(0,eyeHeight-MIN_EYE_HEIGHT);
      const change=Math.max(0,Math.min(blocked,-intentY,MAX_ASSISTED_CROUCH-depth,headroom));
      depth+=change;
      return change;
    },
  };
}

function pushTime(history, index, window) {
  const direction=history[index].distance;
  let time=0;
  for(let offset=0;offset<history.length&&time<window;offset++){
    const {distance,duration}=history[(index-offset+history.length)%history.length];
    if(duration<=0||distance.dot(direction)<=0)break;
    time+=duration;
  }
  return Math.min(time,window);
}

export function waitForPush(history,index,window,moving,grounded,released) {
  const {x,y,z}=history[index].distance;
  const diagonal=y>.002&&Math.hypot(x,z)>.002;
  return Boolean(moving&&grounded&&diagonal&&!released&&pushTime(history,index,window)<MIN_PUSH_TIME);
}

export function creditVerticalPush(average, sampleY, inputDt) {
  if(average.y<=0||Math.hypot(average.x,average.z)>=average.y*.22)return;
  const speed=sampleY/Math.max(inputDt,.001);
  average.y+=Math.max(0,speed-Math.max(3,average.y))*.38;
}

export function patchDemoLocomotion(source, edit) {
  source=edit(source,"import {palmCenter} from './hand-skin.js';",
    "import {palmCenter} from './hand-skin.js';\nimport {waitForPush,creditVerticalPush} from 'demo:appuis';");
  source=edit(source,'!hand.held&&!hand.remoteHeld','!hand.held&&!hand.remoteHeld&&!hand.demoHeld');
  source=edit(source,'    this.historyIndex = (this.historyIndex + 1) % history.length;',
    '    const collecting = waitForPush(history,this.historyIndex,HISTORY_SECONDS,moving,this.hands.some(({hand})=>hand.groundContact),this.released);\n    this.historyIndex = (this.historyIndex + 1) % history.length;');
  source=edit(source,'if (this.settings.movement === false || (!moving && (hasContact || !this.released))) return result;',
    'if (collecting || this.settings.movement === false || (!moving && (hasContact || !this.released))) return result;');
  return edit(source,
    '      const appliedUpSpeed=sample.distance.y / Math.max(this.inputDt, .001);\n      this.average.y+=Math.max(0, appliedUpSpeed - Math.max(3, this.average.y)) * .38;',
    '      creditVerticalPush(this.average,sample.distance.y,this.inputDt);');
}

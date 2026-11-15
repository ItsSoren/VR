// Ce budget ne touche qu’au canvas PC/mobile. Les casques ont leur propre framebuffer XR.
export function screenPixelRatio(level,dpr,mobile){
  if(mobile)return Math.min(dpr,1)*(.46+level*.054);
  return Math.min(dpr,1.75)*(.53+level*.047);
}

// Chaque instance reçoit ses propres valeurs pour que les préférences restent modifiables.
export function createSettings(mobileScreen){
  return {
    // Locomotion et collisions
    stepHaptics:true, stepHapticStrength:5, snapWithMenu:true, grip:6, slide:3,
    gravity:5, jump:5, weight:5,
    size:5, arms:5, bounce:4,
    throw:5, preciseHitboxes:true, movement:true,
    collisions:true, objects:true, body:true,
    hands:true, stepAudio:true, stepVolume:5,
    // Diagnostic overlays are off in normal play.
    debugScene:true, debugObjects:true, debugMesh:false, debugRange:6, debugBudget:5,
    debugPalm:false, debugHitboxes:false, debugInvisible:false, debugForces:false, debugBody:false, debugSpeed:1,
    // Rendu
    timeOfDay:1, viewFov:70, vrFov:100, shaderMode:1,
    shadowQuality:10, lightQuality:10, contrast:5,
    saturation:5, exposure:5, warmth:5,
    quality:mobileScreen?2:7, auto:true, resolution:7,
    texturePower:7, preset:2, lightmap:true,
    post:true, rayTrace:false, focus:true,
    focusStrength:5, focusSize:5, textures:true,
    reflections:true, mirrorQuality:2, shadows:true, bloom:true,
    // Outils et carte
    blasterActive:false, toolMode:1, toolActive:false,
    mapEdit:false, mapMode:1, mapShape:1,
    mapMaterial:1, mapSurface:1, mapTurn:1,
    mapTexture:1, modelGrab:true, modelFrozen:false,
    modelCollidable:true, modelSupport:false, terrainResolution:2,
    terrainAmplitude:2, terrainFrequency:3, terrainGrass:4,
    terrainShrub:1, terrainSeed:1, brushRadius:4,
    brushStrength:4,
  };
}

export const toolModes=['Saisir','Figer','Supprimer','Dupliquer','Couleur','Matière +','Matière −'];
export const shaderNames=['Naturel','Cellulo','Affiche','Rétro'];
export const visualPresets={
  'Fluide':{shadowQuality:2,lightQuality:2,post:false,rayTrace:false,quality:3,auto:false,texturePower:6,resolution:5,shadows:false,reflections:false,bloom:false,focus:true,focusStrength:6,focusSize:4},
  'Équilibré':{shadowQuality:10,lightQuality:10,post:true,rayTrace:false,quality:7,auto:true,texturePower:8,resolution:7,shadows:true,reflections:true,bloom:true,focus:true,focusStrength:5,focusSize:5},
  'Vitrine':{shadowQuality:10,lightQuality:10,post:true,rayTrace:true,quality:10,auto:false,texturePower:12,resolution:10,shadows:true,reflections:true,bloom:true,focus:false},
  'Benchmark':{shadowQuality:10,lightQuality:10,post:true,rayTrace:true,quality:10,auto:false,texturePower:10,resolution:7,shadows:true,reflections:true,bloom:false,focus:false},
};


// Screen render preferences are local to the player and never part of a map or room.
const screenRenderSettings={
  shaderMode:[1,shaderNames.length],viewFov:[50,105],exposure:[1,10],contrast:[1,10],
  saturation:[1,10],warmth:[1,10],shadowQuality:[1,10],lightQuality:[1,10],
  mirrorQuality:[1,3],quality:[1,10],texturePower:[1,12],preset:[1,Object.keys(visualPresets).length],
  auto:null,lightmap:null,textures:null,reflections:null,shadows:null,bloom:null,
};
const screenRenderKey=mobile=>'gorilla-lab-screen-render-v1-'+(mobile?'mobile':'pc');
function screenPreferenceValues(source){
  const values={};
  for(const [key,range] of Object.entries(screenRenderSettings)){
    const value=source?.[key];
    if(range?Number.isInteger(value)&&value>=range[0]&&value<=range[1]:typeof value==='boolean')values[key]=value;
  }
  return values;
}
export function readScreenRenderSettings(storage,mobile){
  try{return screenPreferenceValues(JSON.parse(storage.getItem(screenRenderKey(mobile))));}
  catch{return {};}
}
export function saveScreenRenderSettings(storage,mobile,settings){
  try{storage.setItem(screenRenderKey(mobile),JSON.stringify(screenPreferenceValues(settings)));}
  catch{}
}

export const environmentPresets=['Jour','Coucher de soleil','Nuit'];
export const defaultEnvironment={
  preset:0,sky:'preset',rotation:0,skyTint:'#ffffff',skyColor:'#a6d4ea',skyImage:null,
  fog:true,fogColor:'#a6d4ea',fogNear:55,fogFar:135,
  azimuth:-131,elevation:50,sunColor:'#fff0d0',sunPower:3,
  ambientColor:'#daeaff',groundColor:'#88724c',ambientPower:2.25,
};
const presets=[
  defaultEnvironment,
  {...defaultEnvironment,preset:1,skyColor:'#ec986e',fogColor:'#ec986e',azimuth:-144,elevation:13,
    sunColor:'#ff9c51',sunPower:3.25,ambientColor:'#d8b6dc',groundColor:'#b37762',ambientPower:1.15},
  {...defaultEnvironment,preset:2,skyColor:'#0b1020',fogColor:'#0b1020',azimuth:-39,elevation:35,
    sunColor:'#879eff',sunPower:.35,ambientColor:'#708edc',groundColor:'#292e44',ambientPower:.35},
];
export function environmentPreset(index){return {...(presets[index]??defaultEnvironment)};}
export const maxSkyImageBytes=1_200_000;
const color=(value,fallback)=>typeof value==='string'&&/^#[0-9a-f]{6}$/i.test(value)?value:fallback;
const number=(value,min,max,fallback)=>Number.isFinite(value)?Math.min(max,Math.max(min,value)):fallback;
export function normalizeEnvironment(value){
  if(!value||typeof value!=='object'||Array.isArray(value))return null;
  const preset=Math.round(number(value.preset,0,2,0)),defaults=environmentPreset(preset);
  const skyImage=typeof value.skyImage==='string'&&value.skyImage.length<=maxSkyImageBytes&&
    /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(value.skyImage)?value.skyImage:null;
  const fogNear=number(value.fogNear,0,4095,defaults.fogNear);
  return {
    preset,sky:value.sky==='color'||value.sky==='image'&&skyImage?value.sky:'preset',
    rotation:number(value.rotation,-360,360,0),skyTint:color(value.skyTint,'#ffffff'),skyColor:color(value.skyColor,defaults.skyColor),skyImage,
    fog:value.fog!==false,fogColor:color(value.fogColor,defaults.fogColor),fogNear,
    fogFar:Math.max(fogNear+1,number(value.fogFar,1,4096,defaults.fogFar)),
    azimuth:number(value.azimuth,-360,360,defaults.azimuth),elevation:number(value.elevation,-89,89,defaults.elevation),
    sunColor:color(value.sunColor,defaults.sunColor),sunPower:number(value.sunPower,0,12,defaults.sunPower),
    ambientColor:color(value.ambientColor,defaults.ambientColor),groundColor:color(value.groundColor,defaults.groundColor),
    ambientPower:number(value.ambientPower,0,12,defaults.ambientPower),
  };
}

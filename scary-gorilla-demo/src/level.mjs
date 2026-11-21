const concrete = 9;
const steel = 7;
const enamel = 14;
const tile = 8;
const gray = '#686b66';
const dark = '#424b50';
const yellow = '#b59849';
const dryStep = {surfaceSound:{clip:'concrete',volume:.34}};
const metalStep = {surfaceSound:{clip:'grating',volume:.42}};

export const locations = {
  lamp: [-1.86, .79, .90],
  valve: [3.86, .76, -41.45],
  water: {left:-4.05, right:1.5, near:-35.2, far:-45.8, surface:-.065, bed:-.62},
  refugeEnd: -4.78,
  archiveEntrance: -47.45,
};

export function createLevel(calibration) {
  const openings = new Set(['Garde-corps du belvédère','Mur lointain du puits','Repère du mur lointain','Établi du refuge','Plan de travail']);
  const pieces = calibration.pieces.filter(piece => !openings.has(piece.name));
  const add = (name,x,y,z,w,h,d,material=concrete,color=gray,extra={}) => {
    if (![x,y,z,w,h,d].every(Number.isFinite) || Math.min(w,h,d)<.05) throw new Error(name);
    pieces.push({name,x,y,z,w,h,d,material,color,...extra});
  };
  const beam = (name,x,y,z,w,h,d,extra) => add(name,x,y,z,w,h,d,steel,dark,extra);
  const floor = (name,x,z,w,d,y=0,material=concrete) =>
    add(name,x,y-.18,z,w,.36,d,material,material===steel?dark:gray,material===steel?metalStep:dryStep);

  add('Casier du refuge',2.88,1.0,2.65,1.45,2,.57,steel,'#51564a');
  beam('Établi du refuge',-2.21,.34,.90,1.30,.68,1.52);
  add('Plan de travail',-2.21,.68,.90,1.38,.10,1.65,5,'#88735d');
  add('Banc du refuge',2.23,.26,-1.62,1.9,.52,.58,5,'#615845');
  for (const side of [-1,1]) {
    beam('Cadre de porte',side*1.60,1.24,-12.95,.22,2.48,.32);
    beam('Conduite de la galerie',side*1.34,2.42,-9,.17,.17,7.9,{primitive:'cylinder',pitch:90});
    add('Garde-corps du seuil aval',side*1.60,.97,-25.22,.95,.14,.12,enamel,yellow);
    add('Plinthe de seuil aval',side*1.60,.15,-25.22,.95,.10,.12,enamel,yellow);
  }
  beam('Linteau de la galerie',0,2.53,-12.95,3.58,.35,.40);
  add('Fond nord de la galerie',0,2.6,-25.5,3.5,.2,.5,concrete,gray);
  floor('Galerie aval',0,-29.65,3.45,8.7);
  for (const side of [-1,1]) {
    add('Mur de galerie aval',side*1.64,1.38,-29.65,.18,2.76,8.7);
    beam('Conduite de service',side*1.36,2.40,-29.5,.16,.16,8.25,{primitive:'cylinder',pitch:90});
  }
  add('Plafond de galerie aval',0,2.80,-29.65,3.45,.24,8.7);

  floor('Palier des pompes',0,-34.6,8.4,1.2);
  floor('Allée au sec',2.86,-40.5,2.72,10.6,0,steel);
  floor('Palier de sortie des pompes',0,-46.4,8.4,1.2);
  floor('Fond du bassin',-1.28,-40.5,5.56,10.62,-.62,tile);
  add('Rampe d’entrée du bassin',-1.17,-.367,-36.19,2.89,.12,2.096,concrete,gray,{pitch:-17.2,...dryStep});
  add('Rampe de sortie du bassin',-1.17,-.367,-44.81,2.89,.12,2.096,concrete,gray,{pitch:17.2,...dryStep});
  for (const side of [-1,1]) {
    add('Mur longitudinal des pompes',side*4.16,1.06,-40.50,.24,4.0,13.02,concrete,gray);
    add('Retour de façade des pompes',side*2.95,1.36,-34.04,2.45,2.72,.20,concrete,gray);
    add('Retour de porte des archives',side*2.99,1.40,-46.99,2.43,2.8,.22,concrete,gray);
  }
  add('Plafond des pompes',0,3.02,-40.5,8.4,.28,13.1);
  for (const z of [-37.3,-40.4,-43.5]) {
    add('Socle de pompe',-2.89,-.22,z,1.48,.80,1.56,concrete,gray);
    add('Corps de pompe',-2.89,.34,z,1.04,.82,1.23,enamel,'#4b6b69',{primitive:'cylinder',pitch:90});
    beam('Moteur de pompe',-2.89,.33,z+.66,.68,.66,.46);
    beam('Colonne de refoulement',-3.01,1.60,z,.38,2.08,.38,{primitive:'cylinder'});
  }
  beam('Collecteur des pompes',-3.0,2.55,-40.44,.48,.48,8.6,{primitive:'cylinder',pitch:90});
  add('Garde-corps des pompes',1.53,.81,-40.5,.10,.12,6.7,enamel,yellow);
  add('Lisse basse des pompes',1.53,.39,-40.5,.09,.09,6.7,enamel,yellow);
  for (const z of [-43.8,-40.5,-37.2]) add('Montant des pompes',1.53,.43,z,.09,.86,.09,enamel,yellow);
  beam('Armoire de purge',4.03,.83,-41.45,.27,1.33,1.57);

  floor('Dalle des archives',0,-53.35,8.4,12.7);
  for (const side of [-1,1]) {
    add('Mur des archives',side*4.13,1.40,-53.38,.24,2.8,12.75);
    for (const z of [-50.7,-54.1,-57.15]) {
      beam('Dos de rayonnage',side*3.45,1.0,z,.13,2.0,2.28);
      for(const y of [.32,.77,1.22,1.67]){
        beam('Tablette d’archives',side*3.18,y,z,.67,.08,2.25);
        for(const offset of [-.58,.42]){
          add('Dossiers d’archives',side*3.17,y+.18,z+offset,.48,.28,.59,5,'#847965');
        }
      }
    }
  }
  add('Mur du fond des archives',0,1.40,-59.63,8.4,2.8,.22);
  add('Plafond des archives',0,2.90,-53.35,8.4,.22,12.8);
  beam('Grille de ventilation',-2.87,.80,-59.48,1.32,1.0,.15,{solid:false});
  for (let i=0;i<7;i++) beam('Lame de grille',-2.87,.42+i*.12,-59.37,1.18,.05,.08,{solid:false});
  return {
    ...calibration,
    name:'Scary Gorilla — Station Écho',
    worldSize:148,
    environment:{...calibration.environment,ambientPower:.58,groundColor:'#685844',sunPower:.11,fogNear:7,fogFar:33},
    pieces,
    soundZones:[
      {name:'Ventilation de la galerie',clip:'district',x:0,y:1.1,z:-8.9,w:3.2,h:2.5,d:7.6,volume:.17},
      {name:'Machines au loin',clip:'reactor',x:0,y:1.2,z:-27,w:15,h:8,d:28,volume:.12},
    ],
  };
}

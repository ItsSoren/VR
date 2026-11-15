const bounds=(xMin,xMax,zMin,zMax)=>({xMin,xMax,zMin,zMax});

export const labBounds=bounds(-24,24,-51,7);
export const labSpawn={x:0,y:0,z:3};
export const labMirror={x:.05,y:1.16,z:5.9};

export const labZones={
  materials:{name:'Matériaux et rendu',color:'#d9bb90',bounds:bounds(-23,-9,-5,6),sign:[-16,-4.7]},
  start:{name:'Départ et miroir',color:'#b1c5c6',bounds:bounds(-6,6,-5,7),sign:[-3.9,4.9]},
  objects:{name:'Bac à objets',color:'#d6a990',bounds:bounds(9,23,-5,6),sign:[16,-3.9]},
  ice:{name:'Glace',color:'#a0d4e0',bounds:bounds(-23,-9,-23,-8),sign:[-16,-9.2]},
  jumping:{name:'Sauts muraux',color:'#d7ac84',bounds:bounds(-6,6,-23,-8),sign:[-4.55,-9.5]},
  throwing:{name:'Lancers et cible',color:'#dfc78a',bounds:bounds(9,23,-23,-8),sign:[12,-9.25]},
  hills:{name:'Terrain vallonné',color:'#b5cb99',bounds:bounds(-23,-9,-49,-27),sign:[-16,-28.5]},
  course:{name:'Parcours en hauteur',color:'#c5b4da',bounds:bounds(-6,6,-49,-27),sign:[0,-28.4]},
  coconuts:{name:'Cocotier',color:'#a4c99c',bounds:bounds(9,23,-34,-27),sign:[12,-28.25]},
  gravity:{name:'Gravité faible',color:'#dfd3a1',bounds:bounds(9,23,-48,-37),sign:[16,-38.2]},
};

export const labAisles=[
  bounds(-9,-6,-51,7),bounds(6,9,-51,7),
  bounds(-24,24,-8,-5),bounds(-24,24,-27,-23),bounds(9,23,-37,-34),
];

export const labFloors=[
  {name:'Glace',bounds:labZones.ice.bounds,type:12,friction:.035},
  {name:'Gravité faible',bounds:labZones.gravity.bounds,type:3,friction:.75,gravity:.28},
  {name:'Sol central',bounds:bounds(-9,9,-51,7)},
  {name:'Sol ouest',bounds:bounds(-23,-9,-51,-23)},
  {name:'Sol ouest',bounds:bounds(-23,-9,-8,7)},
  {name:'Bordure ouest',bounds:bounds(-24,-23,-51,7)},
  {name:'Sol est',bounds:bounds(9,23,-51,-48)},
  {name:'Sol est',bounds:bounds(9,23,-37,7)},
  {name:'Bordure est',bounds:bounds(23,24,-51,7)},
];

export const labStations={
  objects:[13,-2.5],
  largeObjects:[18.8,-2.5],
  rendering:[-15.5,-3.5],
  course:[4.7,-29],
  coconuts:[19.4,-32.5],
};
export const labObjectSpawns=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}];
export const labObjectSlots=[1.75,4.75].flatMap(z=>[11.5,14,16.5,19,21.5].map(x=>({x,z})));
export const labTree={x:16,z:-31};
export const labTarget={x:16,y:1.52,z:-21};
export const labProbe={x:-19.4,y:.68,z:-3.25};
export const labMaterialSample=i=>({x:-20+(i%6)*1.52,z:.5-Math.floor(i/6)*1.25});

// Entries match the arena box builder: name, x/y/z, width/height/depth, material, pitch, grip.
export const labStructures={
  start:[['Tapis de départ',0,-.06,3.45,6.7,.13,4.2,13]],
  jumping:[
    ['Pente',0,.47,-11.35,3.75,.43,4.7,2,.28,.88],
    ['Mur gauche',-2.55,2.2,-16.55,.38,4.4,6.2,2],
    ['Mur droit',2.55,2.2,-16.55,.38,4.4,6.2,2],
    ['Palier',0,1.55,-19.2,2.7,.38,1.4,3],
    ['Portique haut',0,3.15,-20.8,5.5,.45,.58,2],
    ['Marche',4.65,.21,-11,1.1,.42,1.6,3],
    ['Appui haut',4.65,.48,-13.3,1.1,.96,1.8,0],
  ],
  throwing:[['Pas de tir',labTarget.x,-.096,-14,4.2,.2,4.7,16]],
  course:[
    ...Array.from({length:5},(_,i)=>{
      const height=.3+i*.265;
      return ['Palier '+(i+1),-3.75,height*.5,-29.65-i*1.7,2.1,height,1.35,i%2?2:3];
    }),
    ['Rampe longue',-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],
    ['Balcon',-3.75,2.52,-45.93,3.8,.44,3.3,3],
    ['Passerelle',-1.12,2.54,-45.93,1.5,.4,1.4,0],
    ['Arrivée',1.02,2.52,-46.42,2.8,.44,2.8,1],
    ...Array.from({length:3},(_,i)=>[
      ['Paroi ouest '+(i+1),1.35,2.15+i*.32,-33.4-i*3.55,.45,4.3+i*.64,2.7,2],
      ['Paroi est '+(i+1),4.78,2.36+i*.3,-34.2-i*3.55,.45,4.72+i*.6,2.7,3],
    ]).flat(),
    ['Plateforme haute',3.06,3.4,-43.15,3.8,.45,2.1,0],
  ],
};

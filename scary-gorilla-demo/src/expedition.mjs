import {locations} from './level.mjs';

export function createExpedition() {
  let purge = false;
  let sighting = false;
  let complete = false;
  let foundLamp = false;
  let enteredShaft = false;
  return {
    get purge() {return purge;},
    get sighting() {return sighting;},
    get complete() {return complete;},
    get foundLamp() {return foundLamp;},
    get enteredShaft() {return enteredShaft;},
    pickLamp() {foundLamp = true;},
    activatePurge() {
      if (purge) return false;
      return purge = true;
    },
    advance(head) {
      if (complete) return null;
      if (!enteredShaft&&head.z < -13.32) {enteredShaft=true;return 'shaft';}
      if (purge&&!sighting&&head.z<locations.archiveEntrance) {sighting=true;return 'sighting';}
      if (sighting&&head.z>locations.refugeEnd&&Math.abs(head.x)<3.7&&head.y>0&&head.y<2.8) {
        complete=true;
        return 'returned';
      }
      return null;
    },
    objective() {
      if (complete) return 'Retour au refuge. Sortie terminée.';
      if (sighting) return 'Reviens au refuge. Suis les repères ambre.';
      if (purge) return 'Purge lancée. Va voir dans les archives.';
      if (enteredShaft) return 'Trouve la vanne dans la salle des pompes.';
      return foundLamp ? 'Traverse la galerie et rejoins la passerelle.' : 'Lampe à gauche sur l’établi. Suis la galerie.';
    },
    reset() {purge=sighting=complete=foundLamp=enteredShaft=false;},
  };
}

export function headUnderwater(head, wasUnderwater) {
  const {left,right,near,far,surface,bed} = locations.water;
  const hysteresis = wasUnderwater ? .018 : -.018;
  return head.x>left && head.x<right && head.z<near && head.z>far &&
    head.y>bed-.06 && head.y<surface+hysteresis;
}

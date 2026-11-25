import {locations} from './level.mjs';

export function createExpedition() {
  let purge = false;
  let sighting = false;
  let complete = false;
  let hasRecorder = false;
  let foundLamp = false;
  let enteredShaft = false;
  return {
    get purge() {return purge;},
    get sighting() {return sighting;},
    get complete() {return complete;},
    get hasRecorder() {return hasRecorder;},
    get foundLamp() {return foundLamp;},
    get enteredShaft() {return enteredShaft;},
    pickLamp() {foundLamp = true;},
    activatePurge() {
      if (purge) return false;
      return purge = true;
    },
    collectRecorder() {
      if(!purge||hasRecorder||complete)return false;
      return hasRecorder=true;
    },
    deliverRecorder() {
      if(!hasRecorder||complete)return false;
      hasRecorder=false;
      return complete=true;
    },
    advance(head) {
      if (complete) return null;
      if (!enteredShaft&&head.z < -13.32) {enteredShaft=true;return 'shaft';}
      if (purge&&!sighting&&head.z<locations.archiveEncounter&&head.z>-59.6&&Math.abs(head.x)<3.9) {sighting=true;return 'sighting';}
      return null;
    },
    objective() {
      if (complete) return 'Enregistrement transmis. Sortie terminée.';
      if (hasRecorder) return 'Rapporte l’enregistreur au récepteur du refuge.';
      if (purge) return 'Récupère l’enregistreur au fond des archives.';
      if (enteredShaft) return 'Trouve la vanne dans la salle des pompes.';
      return foundLamp ? 'Traverse la galerie et rejoins la passerelle.' : 'Lampe à gauche sur l’établi. Suis la galerie.';
    },
    retryArchives() {sighting=hasRecorder=false;},
    reset() {purge=sighting=complete=foundLamp=enteredShaft=hasRecorder=false;},
  };
}

export function headUnderwater(head, wasUnderwater) {
  const {left,right,near,far,surface,bed} = locations.water;
  const hysteresis = wasUnderwater ? .018 : -.018;
  return head.x>left && head.x<right && head.z<near && head.z>far &&
    head.y>bed-.06 && head.y<surface+hysteresis;
}

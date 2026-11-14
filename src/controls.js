export const HOTBAR = [
  { tool: 'hand', label: 'Main' },
  { tool: 'shovel', label: 'Pelle' },
  { tool: 'pick', label: 'Pioche' },
  { material: 0, label: 'Bois' },
  { material: 1, label: 'Pierre' },
  { material: 2, label: 'Terre' },
];
export const ACTIONS = {
  primary: 'Miner / casser / frapper',
  build: 'Poser une pièce',
  mode: 'Action du terrain',
  cave: 'Descendre / remonter près de l’entrée',
  upgrade: 'Améliorer la pioche',
  undo: 'Annuler le terrain',
  catalog: 'Catalogue de construction',
  rotate: 'Pivoter la pièce',
  interact: 'Interagir / nourrir / baie',
  journal: 'Carnet de progression',
  combat: 'Sortir / ranger l’épée',
  dodge: 'Esquiver',
  guard: 'Maintenir la garde',
  achievements: 'Succès, bestiaire et équipement',
};
export const DEFAULT_BINDINGS = {
  primary: 'KeyE',
  build: 'KeyF',
  mode: 'KeyR',
  cave: 'KeyG',
  upgrade: 'KeyC',
  undo: 'KeyU',
  catalog: 'KeyB',
  rotate: 'KeyX',
  interact: 'KeyV',
  journal: 'KeyN',
  combat: 'KeyT',
  dodge: 'KeyI',
  guard: 'KeyO',
  achievements: 'KeyL',
};
const RESERVED = new Set([
  'KeyW',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyZ',
  'KeyQ',
  'KeyH',
  'KeyP',
  'Digit7',
  'Space',
  'Tab',
  'Escape',
  'Home',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'Minus',
  'Equal',
  'BracketLeft',
  'BracketRight',
]);
const valid = (code) =>
  typeof code === 'string' &&
  /^(Key[A-Z]|Digit[0-9]|Numpad[0-9]|Enter|Backspace|Insert|Delete|End|PageUp|PageDown)$/.test(
    code
  ) &&
  !RESERVED.has(code) &&
  !/^Digit[1-6]$/.test(code);
export function keyLabel(code) {
  return code
    .replace(/^Key|^Digit/, '')
    .replace('Numpad', 'Pav. ')
    .replace('Backspace', 'Retour')
    .replace('Enter', 'Entrée')
    .replace('Delete', 'Suppr.')
    .replace('Insert', 'Inser.')
    .replace('PageUp', 'Page ↑')
    .replace('PageDown', 'Page ↓')
    .replace('End', 'Fin');
}
export function createControls(saved) {
  let bindings = { ...DEFAULT_BINDINGS };
  // Apply a saved map atomically: partial/conflicting data cannot steal a key.
  if (saved && typeof saved === 'object') {
    const candidate = Object.fromEntries(
        Object.keys(ACTIONS)
          .filter((a) => saved[a])
          .map((a) => [a, saved[a]])
      ),
      used = new Set(Object.values(candidate));
    if (Object.values(candidate).every(valid) && used.size === Object.keys(candidate).length) {
      for (const a of Object.keys(ACTIONS))
        if (!candidate[a]) {
          const code = [
            DEFAULT_BINDINGS[a],
            ...[
              'K',
              'O',
              'M',
              'T',
              'L',
              'Y',
              'I',
              'J',
              'N',
              'B',
              'X',
              'V',
              'E',
              'F',
              'R',
              'G',
              'C',
              'U',
            ].map((k) => 'Key' + k),
            'Digit7',
            'Digit8',
            'Digit9',
            'Digit0',
          ].find((k) => valid(k) && !used.has(k));
          candidate[a] = code;
          used.add(code);
        }
      bindings = candidate;
    }
  }
  return {
    get bindings() {
      return { ...bindings };
    },
    code: (action) => bindings[action],
    label: (action) => keyLabel(bindings[action]),
    action: (code) => Object.keys(ACTIONS).find((a) => bindings[a] === code),
    bind(action, code) {
      if (!Object.hasOwn(ACTIONS, action) || !valid(code))
        return { ok: false, error: 'Cette touche est réservée au déplacement ou à l’interface.' };
      const other = Object.keys(ACTIONS).find((a) => a !== action && bindings[a] === code);
      if (other) return { ok: false, error: `Cette touche sert déjà à « ${ACTIONS[other]} ».` };
      bindings[action] = code;
      return { ok: true };
    },
    reset() {
      bindings = { ...DEFAULT_BINDINGS };
    },
  };
}
export function wrapSlot(slot) {
  return ((slot % HOTBAR.length) + HOTBAR.length) % HOTBAR.length;
}

import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {
  createModelMaterial, createModelPartGeometry, defaultModelProperties,
  modelLimits, modelShapes, modelStorageKey, modelSurfaces, normalizeModelPack, readModelPack,
} from './model-pack.js';

const elements = Object.fromEntries([...document.querySelectorAll('[id]')].map(node => [node.id, node]));
const canvas = elements['preview-canvas'];
const axes = ['X', 'Y', 'Z'];
const vectors = {
  position: { label: 'Position (m)', min: -3, max: 3, step: .01 },
  rotation: { label: 'Rotation (°)', min: -360, max: 360, step: 1 },
  scale: { label: 'Échelle', min: .02, max: 4, step: .01 },
};
const pack = readModelPack();
let modelId = pack.models[0]?.id ?? null;
let partIndex = 0;
let dirty = false;

function currentModel() {
  return pack.models.find(model => model.id === modelId);
}

function currentPart() {
  return currentModel()?.parts[partIndex];
}

function status(message, error = false) {
  elements.status.textContent = message;
  elements.status.dataset.error = String(error);
}

function markDirty() {
  if (!dirty) status('Modifications en attente d’enregistrement.');
  dirty = true;
}

function setOptions(select, entries, value) {
  select.replaceChildren(...entries.map(([key, caption]) => new Option(caption, key)));
  select.value = value ?? '';
}

function updateModelLists() {
  const entries = pack.models.map(model => [model.id, model.name || 'Modèle sans nom']);
  setOptions(elements.models, entries.length ? entries : [['', 'Aucun modèle']], modelId);
  elements.models.disabled = !entries.length;
  setOptions(elements.avatar, [['', 'Singe d’origine'], ...entries.filter(([id]) =>
    pack.models.find(model => model.id === id).parts.length)], pack.avatarId);
}

function updateParts() {
  const parts = currentModel()?.parts ?? [];
  const atLimit = parts.length >= modelLimits.parts;
  elements['add-part'].disabled = atLimit;
  elements['duplicate-part'].disabled = atLimit;
  elements['part-list'].replaceChildren(...parts.map((part, index) => {
    const button = document.createElement('button');
    button.className = 'part-entry';
    button.setAttribute('aria-pressed', String(index === partIndex));
    const name = document.createElement('span');
    name.textContent = part.name || `Pièce ${index + 1}`;
    const swatch = document.createElement('span');
    swatch.className = 'swatch';
    swatch.style.setProperty('--swatch', part.color);
    swatch.setAttribute('aria-hidden', 'true');
    button.append(name, swatch);
    button.addEventListener('click', () => selectPart(index, true));
    return button;
  }));
}

function updateInspector() {
  const part = currentPart();
  elements['part-empty'].hidden = Boolean(part);
  elements['part-inspector'].hidden = !part;
  if (!part) return;
  for (const key of ['name', 'shape', 'color', 'surface']) elements[`part-${key}`].value = part[key];
  for (const key of Object.keys(vectors)) vectorInputs[key].forEach((input, index) => { input.value = part[key][index]; });
}

const previews = new T.Group();
const scene = new T.Scene();
const camera = new T.PerspectiveCamera(45, 1, .005, 90);
const material = createModelMaterial();
const guide = new T.GridHelper(12, 48, '#566a78', '#283b48');
const selection = new T.Box3Helper(new T.Box3(), '#e1ef8d');
guide.position.y = -.004;
selection.visible = false;
scene.background = new T.Color('#101820');
scene.add(previews, guide, selection, new T.HemisphereLight('#e4f3ff', '#52606a', 2.3));
const keyLight = new T.DirectionalLight('#f9efcf', 2.1);
keyLight.position.set(2, 4, -3);
scene.add(keyLight);
camera.position.set(1.55, 1.2, -2.05);
camera.lookAt(0, 0, 0);

let renderer, orbit;
try {
  renderer = new T.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping = T.ACESFilmicToneMapping;
  orbit = new OrbitControls(camera, canvas);
  orbit.enablePan = false;
  orbit.minDistance = .04;
  orbit.maxDistance = 34;
  orbit.addEventListener('change', render);
  new ResizeObserver(() => {
    camera.aspect = Math.max(1, canvas.clientWidth) / Math.max(1, canvas.clientHeight);
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    render();
  }).observe(canvas);
} catch {
  // The form can still author and transfer models when graphics are unavailable.
}

function render() {
  renderer?.render(scene, camera);
}

function frameModel() {
  if (!orbit) return;
  const bounds = new T.Box3().setFromObject(previews);
  const center = new T.Vector3();
  const size = new T.Vector3();
  if (!bounds.isEmpty()) { bounds.getCenter(center); bounds.getSize(size); }
  const halfHeightAngle = T.MathUtils.degToRad(camera.fov / 2);
  const halfWidthAngle = Math.atan(Math.tan(halfHeightAngle) * camera.aspect);
  const distance = Math.max(.65, size.length() * .58 / Math.sin(Math.min(halfHeightAngle, halfWidthAngle)));
  const direction = camera.position.clone().sub(orbit.target).normalize();
  orbit.target.copy(center);
  camera.position.copy(center).addScaledVector(direction, distance);
  orbit.update();
  render();
}

function showSelection() {
  const selected = previews.children[partIndex];
  selection.visible = Boolean(selected);
  if (selected) selection.box.setFromObject(selected);
}

// La prévisualisation réutilise les mêmes définitions géométriques que le jeu.
function updatePreview(frame = false) {
  const model = currentModel();
  const parts = model?.parts ?? [];
  previews.children.forEach(mesh => mesh.geometry.dispose());
  previews.clear();
  if (renderer && parts.length) previews.add(...parts.map(part => new T.Mesh(createModelPartGeometry(part), material)));
  showSelection();
  elements['preview-empty'].hidden = Boolean(renderer && parts.length);
  elements['preview-empty'].textContent = !renderer
    ? 'Aperçu 3D indisponible. Les commandes de création restent utilisables.'
    : model ? 'Ajoute une première pièce à ce modèle.' : 'Crée un modèle et ajoute une pièce pour commencer.';
  elements['preview-tag'].textContent = model ? `${parts.length} pièce${parts.length === 1 ? '' : 's'}` : 'Modèle 3D';
  elements.frame.disabled = !renderer || !parts.length;
  if (frame) frameModel();
  else render();
}

function showModel() {
  const model = currentModel();
  updateModelLists();
  elements['model-details'].hidden = !model;
  elements['new-model'].disabled = elements.example.disabled = pack.models.length >= modelLimits.models;
  if (model) {
    elements['model-name'].value = model.name;
    elements['model-kind'].value = model.kind || 'prop';
    elements['send-to-map'].href = './editor.html?model=' + encodeURIComponent(model.id);
    elements['in-game'].checked = model.inGame;
    for (const key of Object.keys(defaultModelProperties)) elements[key].checked = model.properties[key];
  }
  updateParts();
  updateInspector();
  updatePreview(true);
}

function selectPart(index, focus = false) {
  partIndex = index;
  updateParts();
  updateInspector();
  showSelection();
  render();
  if (focus) elements['part-list'].children[index]?.focus();
}

let pointerStart;
const picking = new T.Raycaster();
const ndc = new T.Vector2();
canvas.addEventListener('pointerdown', event => {
  pointerStart = event.isPrimary && event.button === 0 ? { id: event.pointerId, x: event.clientX, y: event.clientY } : null;
});
canvas.addEventListener('pointercancel', () => { pointerStart = null; });
canvas.addEventListener('pointerup', event => {
  const start = pointerStart;
  pointerStart = null;
  if (start?.id !== event.pointerId || Math.hypot(event.clientX - start.x, event.clientY - start.y) > 5) return;
  const rect = canvas.getBoundingClientRect();
  ndc.set((event.clientX - rect.left) / rect.width * 2 - 1, 1 - (event.clientY - rect.top) / rect.height * 2);
  picking.setFromCamera(ndc, camera);
  const hit = picking.intersectObjects(previews.children, false)[0];
  if (hit) selectPart(previews.children.indexOf(hit.object));
});

function makePart(shape, name = modelShapes[shape], position = [0, 0, 0], scale = [.35, .35, .35],
    color = '#51bdd2', surface = 'plain', rotation = [0, 0, 0]) {
  return { name, shape, position, scale, rotation, surface, color };
}

function makeExample() {
  const blue = '#6a89aa', light = '#c1d7de', dark = '#203142';
  return [
    makePart('sphere', 'Crâne', [0, 0, .02], [.31, .32, .29], blue, 'speckle'),
    makePart('sphere', 'Museau', [0, -.048, -.11], [.20, .13, .15], light),
    makePart('sphere', 'Oreille gauche', [-.149, .003, .01], [.08, .10, .06], blue),
    makePart('sphere', 'Oreille droite', [.149, .003, .01], [.08, .10, .06], blue),
    makePart('sphere', 'Œil gauche', [-.056, .037, -.118], [.049, .042, .036], dark),
    makePart('sphere', 'Œil droit', [.056, .037, -.118], [.049, .042, .036], dark),
    makePart('sphere', 'Nez', [0, -.025, -.181], [.071, .039, .033], dark),
  ];
}

function addModel(example = false) {
  if (pack.models.length >= modelLimits.models) return;
  const name = example ? 'Singe de pierre' : `Modèle ${pack.models.length + 1}`;
  const id = `custom-model-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  pack.models.push({ id, name, kind: 'prop', inGame: false, properties: { ...defaultModelProperties }, parts: example ? makeExample() : [] });
  modelId = id;
  partIndex = 0;
  markDirty();
  showModel();
  elements['model-name'].focus();
  elements['model-name'].select();
}

function changeParts(frame = false) {
  const model = currentModel();
  if (!model.parts.length && pack.avatarId === model.id) pack.avatarId = null;
  markDirty();
  updateModelLists();
  updateParts();
  updateInspector();
  updatePreview(frame);
}

function listen(id, event, handler) {
  elements[id].addEventListener(event, handler);
}

listen('new-model', 'click', () => addModel());
listen('example', 'click', () => addModel(true));
listen('models', 'change', event => { modelId = event.target.value; partIndex = 0; showModel(); });
listen('model-name', 'input', event => { currentModel().name = event.target.value; markDirty(); updateModelLists(); });
listen('in-game', 'change', event => { currentModel().inGame = event.target.checked; markDirty(); });
listen('model-kind', 'change', event => { currentModel().kind = event.target.value; markDirty(); });
listen('send-to-map', 'click', event => {
  try {
    localStorage.setItem(modelStorageKey, JSON.stringify(normalizeModelPack(pack)));
    dirty = false;
  } catch (error) {
    event.preventDefault();
    status('Impossible de transférer le modèle. Exporte le JSON pour le conserver.', true);
  }
});
for (const key of Object.keys(defaultModelProperties)) {
  listen(key, 'change', event => { currentModel().properties[key] = event.target.checked; markDirty(); });
}
listen('avatar', 'change', event => { pack.avatarId = event.target.value || null; markDirty(); });
listen('delete-model', 'click', () => {
  const model = currentModel();
  if (!model || !window.confirm(`Supprimer « ${model.name} » de l’atelier ?`)) return;
  const index = pack.models.indexOf(model);
  pack.models.splice(index, 1);
  if (pack.avatarId === model.id) pack.avatarId = null;
  modelId = (pack.models[index] ?? pack.models[index - 1])?.id ?? null;
  partIndex = 0;
  markDirty();
  showModel();
});

setOptions(elements['new-shape'], Object.entries(modelShapes), 'box');
setOptions(elements['part-shape'], Object.entries(modelShapes), 'box');
setOptions(elements['part-surface'], Object.entries(modelSurfaces), 'plain');
listen('add-part', 'click', () => {
  const model = currentModel();
  if (!model || model.parts.length >= modelLimits.parts) return;
  const previous = currentPart();
  const position = previous ? [T.MathUtils.clamp(previous.position[0] + .24, -3, 3), ...previous.position.slice(1)] : undefined;
  model.parts.push(makePart(elements['new-shape'].value, undefined, position));
  partIndex = model.parts.length - 1;
  changeParts(model.parts.length === 1);
});
listen('duplicate-part', 'click', () => {
  const model = currentModel();
  if (!currentPart() || model.parts.length >= modelLimits.parts) return;
  const copy = structuredClone(currentPart());
  copy.name = `${copy.name.slice(0, 42)} copie`;
  copy.position[0] = Math.min(3, copy.position[0] + .12);
  model.parts.splice(++partIndex, 0, copy);
  changeParts();
});
listen('delete-part', 'click', () => {
  const parts = currentModel().parts;
  parts.splice(partIndex, 1);
  partIndex = Math.max(0, Math.min(partIndex, parts.length - 1));
  changeParts();
});
listen('frame', 'click', frameModel);

for (const key of ['name', 'shape', 'color', 'surface']) {
  listen(`part-${key}`, key === 'name' || key === 'color' ? 'input' : 'change', event => {
    const part = currentPart();
    if (!part) return;
    part[key] = event.target.value;
    markDirty();
    updateParts();
    if (key !== 'name') updatePreview();
  });
}

const vectorInputs = {};
for (const [key, settings] of Object.entries(vectors)) {
  const fieldset = document.createElement('fieldset');
  fieldset.className = 'vectors';
  const legend = document.createElement('legend');
  legend.textContent = settings.label;
  fieldset.append(legend);
  const row = document.createElement('div');
  row.className = 'axes';
  vectorInputs[key] = axes.map((axis, index) => {
    const caption = document.createElement('label');
    caption.textContent = axis;
    const input = document.createElement('input');
    input.id = `${key}-${axis.toLowerCase()}`;
    input.type = 'number';
    input.min = settings.min;
    input.max = settings.max;
    input.step = settings.step;
    input.setAttribute('aria-label', `${settings.label} ${axis}`);
    input.addEventListener('input', () => {
      const part = currentPart();
      if (!part || !Number.isFinite(input.valueAsNumber)) return;
      part[key][index] = T.MathUtils.clamp(input.valueAsNumber, settings.min, settings.max);
      markDirty();
      updatePreview();
    });
    input.addEventListener('change', () => { if (currentPart()) input.value = currentPart()[key][index]; });
    caption.append(input);
    row.append(caption);
    return input;
  });
  fieldset.append(row);
  elements['part-fields'].append(fieldset);
}

listen('save', 'click', () => {
  try {
    const clean = normalizeModelPack(pack);
    localStorage.setItem(modelStorageKey, JSON.stringify(clean));
    Object.assign(pack, clean);
    dirty = false;
    showModel();
    status('Enregistré. Ouvre ou recharge Gorilla Lab sur ce navigateur pour appliquer les modèles.');
  } catch {
    status('Enregistrement indisponible. Exporte le JSON pour conserver ton travail.', true);
  }
});
listen('export', 'click', () => {
  const data = JSON.stringify(normalizeModelPack(pack), null, 2);
  const url = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
  const download = document.createElement('a');
  download.href = url;
  download.download = 'atelier.gorilla-models.json';
  download.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  status('Atelier exporté en JSON.');
});
listen('import', 'click', () => elements.file.click());
listen('file', 'change', async event => {
  const file = event.target.files[0];
  event.target.value = '';
  if (!file) return;
  try {
    if (file.size > modelLimits.fileBytes) throw new Error('Ce fichier dépasse la taille maximale de l’atelier.');
    const incoming = normalizeModelPack(JSON.parse(await file.text()));
    const merged = new Map(pack.models.map(model => [model.id, model]));
    for (const model of incoming.models) merged.set(model.id, model);
    if (merged.size > modelLimits.models) throw new Error(`L’atelier peut contenir ${modelLimits.models} modèles au maximum.`);
    const clash = incoming.models.some(model => pack.models.some(existing => existing.id === model.id));
    if (clash && !window.confirm('Remplacer les modèles existants qui figurent dans ce fichier ?')) return;
    const models = [...merged.values()];
    const avatarId = incoming.avatarId ?? pack.avatarId;
    Object.assign(pack, { models, avatarId: models.some(model => model.id === avatarId && model.parts.length) ? avatarId : null });
    modelId = incoming.models[0]?.id ?? modelId;
    partIndex = 0;
    markDirty();
    showModel();
    status('Modèles importés. Enregistre l’atelier pour les appliquer au jeu.');
  } catch (error) {
    status(error instanceof SyntaxError ? 'Le fichier JSON est illisible.' : error.message, true);
  }
});

window.addEventListener('beforeunload', event => {
  if (dirty) event.preventDefault();
});
showModel();

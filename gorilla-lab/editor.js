import * as T from 'three';
import {tiledBox} from './texture-geometry.js';
import {normalizeTerrain,resizeTerrain,sculptTerrain,terrainGeometry,terrainVegetation,disposeVegetation} from './terrain-edit.js';
import {texturePresets,seamlessTexture} from './seamless-texture.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {
  parseMap, exampleMap, makePiece, mapMaterials, materialColors, surfacePresets,
  maxPieces, snapPlacement, downloadMap, storageKey,
} from './map-format.js';

const $ = id => document.getElementById(id);
const fields = ['name', 'x', 'y', 'z', 'w', 'h', 'd', 'pitch', 'yaw', 'material', 'color', 'grip', 'gravity', 'bounce', 'solid'];
const toolButtons = [...document.querySelectorAll('.tool')];
const draftKey = 'gorilla-lab-editor-draft';
const shapes = {
  block: makePiece(),
  ramp: makePiece({ name: 'Rampe', w: 3, h: .30, d: 4, pitch: 16, material: 5 }),
  terrain: makePiece({name:'Terrain',w:18,h:.12,d:18,y:0,material:3,terrain:normalizeTerrain({amplitude:.7,grass:.34})}),
  wall: makePiece({ name: 'Mur', w: .45, h: 2.5, d: 3.5, material: 2 }),
};
const toolHelp = {
  move: 'Clique une pièce pour la sélectionner. Glisse-la pour la déplacer au sol.',
  block: 'Clique dans la vue 3D ou sur le plan pour poser un bloc. Échap revient à la sélection.',
  ramp: 'Clique dans la vue 3D ou sur le plan pour poser une rampe. Échap revient à la sélection.',
  wall: 'Clique dans la vue 3D ou sur le plan pour poser un mur. Échap revient à la sélection.',
  terrain:'Clique pour poser un terrain. Sélectionne-le pour régler le bruit ou la végétation.',
  sculpt:'Clique ou glisse sur un terrain. Le pinceau est réglable dans Relief et végétation.',
  spawn: 'Clique sur une surface pour placer le départ du joueur.',
};
let map = exampleMap(), selected = -1, tool = 'move', gesture = null, ghost = null;
const undoStack = [];
const screen = $('preview'), plan = $('plan'), context = plan.getContext('2d');
let planRange = { scale: 10, cx: 0, cz: -6, width: 30, height: 40 };

const renderer = new T.WebGLRenderer({ canvas: screen, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
const camera = new T.PerspectiveCamera(52, 1, .1, 640);
camera.position.set(16, 15, 19);
const controls = new OrbitControls(camera, screen);
controls.target.set(0, 0, -5);
controls.mouseButtons.LEFT = null;
controls.mouseButtons.RIGHT = T.MOUSE.ROTATE;
controls.mouseButtons.MIDDLE = T.MOUSE.PAN;
controls.maxDistance = 580;
controls.maxPolarAngle = Math.PI / 2 - .035;

const scene = new T.Scene();
scene.background = new T.Color('#8fb6c6');
scene.add(new T.HemisphereLight('#f0f5ff', '#8e775c', 2.6));
const sun = new T.DirectionalLight('#fff1d2', 1.8);
sun.position.set(-9, 18, 6);
scene.add(sun);
const grid = new T.GridHelper(60, 60, '#d7e2e5', '#5e7b8a');
grid.material.transparent = true;
grid.material.opacity = .35;
scene.add(grid);
const group = new T.Group();
scene.add(group);
const sharedBox = new T.BoxGeometry(1, 1, 1);
const loader = new T.TextureLoader();
const spawn = new T.Mesh(new T.ConeGeometry(.32, .75, 5), new T.MeshBasicMaterial({ color: '#ffcd63' }));
scene.add(spawn);
const ghostBox = new T.Mesh(sharedBox, new T.MeshBasicMaterial({
  color: '#8ee7fc', opacity: .44, transparent: true, depthWrite: false,
}));
const ghostMarker = new T.Mesh(spawn.geometry, new T.MeshBasicMaterial({
  color: '#ffe084', opacity: .65, transparent: true, depthWrite: false,
}));
ghostBox.visible = ghostMarker.visible = false;
scene.add(ghostBox, ghostMarker);

const raycaster = new T.Raycaster();
const worldUp = new T.Vector3(0, 1, 0);
const horizontalPlane = new T.Plane(worldUp, 0);
const normalMatrix = new T.Matrix3();
let selectionBox = null, renderRequested = false;

function queueRender() {
  if (renderRequested) return;
  renderRequested = true;
  requestAnimationFrame(() => {
    renderRequested = false;
    renderer.render(scene, camera);
  });
}

function resizeRenderer() {
  const width = screen.clientWidth || 1, height = screen.clientHeight || 1;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  queueRender();
}

function resizePlan() {
  const width = Math.max(1, plan.clientWidth), height = Math.max(1, plan.clientHeight);
  if (width === plan.width && height === plan.height) return;
  plan.width = width;
  plan.height = height;
  scalePlan();
  paintPlan();
}

new ResizeObserver(resizeRenderer).observe(screen);
new ResizeObserver(resizePlan).observe(plan);
controls.addEventListener('change', queueRender);
controls.addEventListener('start', () => showGhost(null));

function scalePlan() {
  planRange.scale = Math.min(plan.width / planRange.width, plan.height / planRange.height);
}

function transform(x, z) {
  return [
    plan.width / 2 + (x - planRange.cx) * planRange.scale,
    plan.height / 2 + (z - planRange.cz) * planRange.scale,
  ];
}

function toWorld(event) {
  const rect = plan.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) * plan.width / rect.width - plan.width / 2) / planRange.scale + planRange.cx,
    z: ((event.clientY - rect.top) * plan.height / rect.height - plan.height / 2) / planRange.scale + planRange.cz,
  };
}

function drawFootprint(piece, fill, stroke, lineWidth, opacity) {
  const [x, z] = transform(piece.x, piece.z);
  const w = piece.w * planRange.scale;
  const angle = T.MathUtils.degToRad(piece.pitch);
  const d = (Math.abs(Math.cos(angle)) * piece.d + Math.abs(Math.sin(angle)) * piece.h) * planRange.scale;
  context.save();
  context.translate(x, z);
  context.rotate(-T.MathUtils.degToRad(piece.yaw));
  context.globalAlpha = opacity;
  context.fillStyle = fill;
  context.fillRect(-w / 2, -d / 2, w, d);
  context.globalAlpha = 1;
  context.strokeStyle = stroke;
  context.lineWidth = lineWidth;
  context.strokeRect(-w / 2, -d / 2, w, d);
  context.restore();
}

function drawMarker(point, isGhost) {
  const [x, z] = transform(point.x, point.z);
  context.save();
  context.translate(x, z);
  context.rotate(T.MathUtils.degToRad(-point.yaw));
  context.fillStyle = isGhost ? '#fff0bb' : '#ffd16e';
  context.strokeStyle = '#263740';
  context.lineWidth = 1.5;
  context.beginPath();
  context.moveTo(0, -8);
  context.lineTo(6, 5);
  context.lineTo(0, 3);
  context.lineTo(-6, 5);
  context.closePath();
  context.fill();
  context.stroke();
  context.restore();
}

function paintPlan() {
  context.fillStyle = '#192e3a';
  context.fillRect(0, 0, plan.width, plan.height);
  context.strokeStyle = '#37505f';
  context.lineWidth = 1;
  const gridStep = planRange.scale < 4 ? 5 : 1;
  for (let i = -120; i <= 120; i += gridStep) {
    const [x, z] = transform(i, i);
    if (x >= 0 && x <= plan.width) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, plan.height);
      context.stroke();
    }
    if (z >= 0 && z <= plan.height) {
      context.beginPath();
      context.moveTo(0, z);
      context.lineTo(plan.width, z);
      context.stroke();
    }
  }

  const layers = map.pieces.map((piece, index) => ({ piece, index })).sort((a, b) => a.piece.y - b.piece.y);
  for (const { piece, index } of layers) {
    const color = piece.color === '#ffffff' ? materialColors[piece.material] : piece.color;
    drawFootprint(piece, color, index === selected ? '#ffe095' : '#a4bac7', index === selected ? 2 : 1, piece.solid ? .86 : .38);
  }
  drawMarker(map.spawn, false);
  if (ghost) {
    if (tool === 'spawn') drawMarker(ghost, true);
    else drawFootprint(ghost, '#8ee7fc', '#afefff', 2, .45);
  }
}

function placeMesh(mesh, piece) {
  mesh.position.set(piece.x, piece.y, piece.z);
  if(piece.terrain&&mesh!==ghostBox)mesh.scale.setScalar(1);
  else mesh.scale.set(piece.w, piece.h, piece.d);
  mesh.rotation.set(T.MathUtils.degToRad(piece.pitch), T.MathUtils.degToRad(piece.yaw), 0, 'YXZ');
  mesh.updateMatrixWorld();
}

function updateSceneSelection() {
  if (selectionBox) {
    scene.remove(selectionBox);
    selectionBox.geometry.dispose();
    selectionBox.material.dispose();
  }
  const mesh = group.children[selected];
  selectionBox = mesh ? new T.BoxHelper(mesh, '#ffdf88') : null;
  if (selectionBox) scene.add(selectionBox);
}

function rebuildScene() {
  for (const mesh of [...group.children]) {
    group.remove(mesh);
    if(mesh.geometry!==sharedBox)mesh.geometry.dispose();
    if(mesh.userData.vegetation)disposeVegetation(mesh.userData.vegetation);
    mesh.material.map?.dispose();
    mesh.material.dispose();
  }
  for (const piece of map.pieces) {
    const glass = [10, 11, 12].includes(piece.material);
    const material = new T.MeshLambertMaterial({
      color: new T.Color(materialColors[piece.material]).multiply(new T.Color(piece.color)),
      transparent: !piece.solid || glass,
      opacity: piece.solid ? (glass ? .55 : 1) : .40,
    });
    if (piece.texture) {
      material.map = loader.load(piece.texture, queueRender);
      material.map.colorSpace = T.SRGBColorSpace;
      material.map.wrapS = material.map.wrapT = T.RepeatWrapping;
      material.color.set(piece.color);
    }
    const geometry=piece.terrain?terrainGeometry(piece):piece.texture?tiledBox(piece.w,piece.h,piece.d).scale(1/piece.w,1/piece.h,1/piece.d):sharedBox;
    const mesh = new T.Mesh(geometry, material);
    if(piece.terrain){
      const vegetation=terrainVegetation(piece);
      if(vegetation){mesh.add(vegetation);mesh.userData.vegetation=vegetation;}
    }
    group.add(mesh);
    placeMesh(mesh, piece);
  }
  spawn.position.set(map.spawn.x, map.spawn.y + .38, map.spawn.z);
  updateSceneSelection();
}

function current() { return map.pieces[selected]; }

function notice(message) { $('editor-note').textContent = message; }

function remember() {
  if (undoStack.length >= 35) undoStack.shift();
  undoStack.push({ map: structuredClone(map), selected });
  $('undo').disabled = false;
}

function pendingSave() {
  try { localStorage.setItem(draftKey, JSON.stringify(map)); } catch {}
}

function updateInspector() {
  $('pieces').replaceChildren(...map.pieces.map((p, i) => new Option(p.name, i, false, i === selected)));
  $('pieces').selectedIndex = selected;
  $('count').textContent = map.pieces.length + ' / ' + maxPieces;
  const piece = current();
  $('selection-title').textContent = piece ? piece.name : 'Aucune pièce sélectionnée';
  for (const key of fields) {
    const input = $('p-' + key);
    input.disabled = !piece;
    if (key === 'solid') input.checked = piece?.solid ?? false;
    else input.value = piece?.[key] ?? (key === 'color' ? '#ffffff' : '');
  }
  for (const id of ['rotate', 'duplicate', 'texture-file', 'surface', 'spawn-here']) $(id).disabled = !piece;
  $('delete').disabled = !piece || map.pieces.length === 1;
  $('texture-clear').disabled = !piece?.texture;
  const terrain=piece?.terrain;
  $('terrain-controls').hidden=!terrain;
  if(terrain){
    for(const key of terrainFields)$('terrain-'+key).value=terrain[key];
    $('p-pitch').disabled=$('p-yaw').disabled=true;
  }
  $('texture-create').disabled=!piece;
  $('surface').value = '';
  $('undo').disabled = undoStack.length === 0;
}

function sync() {
  $('map-name').value = map.name;
  updateInspector();
  for (const key of ['x', 'y', 'z', 'yaw']) $('spawn-' + key).value = map.spawn[key];
  rebuildScene();
  paintPlan();
  queueRender();
  pendingSave();
}

function choose(index) {
  if (selected === index) return;
  selected = index;
  updateInspector();
  updateSceneSelection();
  paintPlan();
  queueRender();
}

function addPiece(piece) {
  if (map.pieces.length >= maxPieces) return notice('Limite de pièces atteinte.');
  remember();
  map.pieces.push(piece);
  selected = map.pieces.length - 1;
  sync();
  notice(piece.name + ' ajouté à la map.');
}

function removePiece() {
  if (!current() || map.pieces.length === 1) return;
  const name = current().name;
  remember();
  map.pieces.splice(selected, 1);
  selected = Math.min(selected, map.pieces.length - 1);
  sync();
  notice(name + ' retiré de la map.');
}

function duplicatePiece() {
  const piece = current();
  if (!piece) return;
  const x = T.MathUtils.clamp(piece.x + piece.w + snapStep(), -120, 120);
  addPiece({ ...piece, name: (piece.name + ' bis').slice(0, 36), x });
}

function rotatePiece() {
  const piece = current();
  if (!piece) return;
  remember();
  piece.yaw = (piece.yaw + 45) % 360;
  sync();
}

function undo() {
  const last = undoStack.pop();
  if (!last) return;
  map = last.map;
  selected = last.selected;
  showGhost(null);
  sync();
  notice('Dernière modification annulée.');
}

function setTool(next) {
  tool = next;
  for (const button of toolButtons) button.setAttribute('aria-pressed', String(button.dataset.tool === tool));
  for (const canvas of [screen, plan]) {
    canvas.dataset.tool = tool;
    canvas.removeAttribute('data-hit');
  }
  $('tool-help').textContent = toolHelp[tool];
  showGhost(null);
}

function fitViews() {
  const bounds = new T.Box3().setFromObject(group);
  bounds.expandByPoint(spawn.position);
  const center = bounds.getCenter(new T.Vector3());
  const size = bounds.getSize(new T.Vector3());
  planRange = {
    cx: center.x,
    cz: center.z,
    width: size.x + 5,
    height: size.z + 5,
  };
  scalePlan();
  const gridScale = Math.max(1, Math.ceil(Math.max(size.x, size.z) / 40));
  grid.scale.setScalar(gridScale);
  grid.position.set(Math.round(center.x / gridScale) * gridScale, -.035, Math.round(center.z / gridScale) * gridScale);

  const direction = camera.position.clone().sub(controls.target).normalize();
  const right = new T.Vector3().crossVectors(worldUp, direction).normalize();
  const up = new T.Vector3().crossVectors(direction, right);
  const slopeY = Math.tan(T.MathUtils.degToRad(camera.fov / 2)) * .87;
  const slopeX = slopeY * camera.aspect;
  let distance = 6;
  for (const x of [bounds.min.x, bounds.max.x]) {
    for (const y of [bounds.min.y, bounds.max.y]) {
      for (const z of [bounds.min.z, bounds.max.z]) {
        const corner = new T.Vector3(x, y, z).sub(center);
        const framing = Math.max(Math.abs(corner.dot(right)) / slopeX, Math.abs(corner.dot(up)) / slopeY);
        distance = Math.max(distance, framing + corner.dot(direction));
      }
    }
  }
  distance = Math.min(distance, controls.maxDistance);
  controls.target.copy(center);
  camera.position.copy(center).addScaledVector(direction, distance);
  controls.update();
  camera.updateMatrixWorld();
  paintPlan();
  queueRender();
}

function loadMap(next, message) {
  remember();
  map = next;
  selected = -1;
  setTool('move');
  sync();
  fitViews();
  notice(message);
}

function snapStep() { return Number($('snap').value); }

function snapCoordinate(value) {
  const step = snapStep();
  return T.MathUtils.clamp(Math.round(value / step) * step, -120, 120);
}

function setEventRay(canvas, event) {
  if (canvas === plan) {
    const point = toWorld(event);
    raycaster.set(new T.Vector3(point.x, 80, point.z), new T.Vector3(0, -1, 0));
  } else {
    const rect = screen.getBoundingClientRect();
    camera.updateMatrixWorld();
    raycaster.setFromCamera({
      x: (event.clientX - rect.left) / rect.width * 2 - 1,
      y: 1 - (event.clientY - rect.top) / rect.height * 2,
    }, camera);
  }
}

function rayPlane(height) {
  horizontalPlane.constant = -height;
  return raycaster.ray.intersectPlane(horizontalPlane, new T.Vector3());
}

function pointUnderPointer(canvas, event) {
  setEventRay(canvas, event);
  return raycaster.intersectObjects(group.children, false)[0];
}

function spawnOnTop(x, z, yaw, selectedMesh = null) {
  raycaster.set(new T.Vector3(x, 80, z), new T.Vector3(0, -1, 0));
  const ground = selectedMesh ? raycaster.intersectObject(selectedMesh, false)[0]
    : raycaster.intersectObjects(group.children, false).find(hit => map.pieces[group.children.indexOf(hit.object)].solid);
  if (!ground || ground.point.y > 29.9) return null;
  return { x, y: Math.max(-10, ground.point.y + .08), z, yaw };
}

function placementAt(canvas, event) {
  const hit = pointUnderPointer(canvas, event);
  if (tool === 'spawn') {
    if (!hit) return null;
    const x = snapCoordinate(hit.point.x), z = snapCoordinate(hit.point.z);
    return spawnOnTop(x, z, map.spawn.yaw);
  }
  if(tool==='terrain'){
    const point=hit?.point??rayPlane(0);
    if(!point)return null;
    return {...shapes.terrain,terrain:normalizeTerrain(shapes.terrain.terrain),x:snapCoordinate(point.x),y:point.y,z:snapCoordinate(point.z)};
  }
  if(tool==='sculpt')return null;
  const point = hit?.point ?? rayPlane(0);
  if (!point) return null;
  const normal = hit ? hit.face.normal.clone().applyNormalMatrix(normalMatrix.getNormalMatrix(hit.object.matrixWorld)) : worldUp;
  return snapPlacement(point, normal, shapes[tool], snapStep());
}

function showGhost(preview) {
  if (!preview && !ghost) return;
  ghost = preview;
  ghostMarker.visible = Boolean(ghost && tool === 'spawn');
  ghostBox.visible = Boolean(ghost && tool !== 'spawn');
  if (ghostMarker.visible) ghostMarker.position.set(ghost.x, ghost.y + .38, ghost.z);
  if (ghostBox.visible) placeMesh(ghostBox, ghost);
  paintPlan();
  queueRender();
}

function commitPlacement(canvas, event) {
  const placement = placementAt(canvas, event);
  if (!placement) {
    notice(tool === 'spawn' ? 'Choisis une surface solide pour placer le départ.' : 'Choisis un point dans la zone de construction.');
    return;
  }
  if (tool === 'spawn') {
    remember();
    map.spawn = placement;
    setTool('move');
    sync();
    notice('Point de départ déplacé.');
  } else {
    showGhost(null);
    addPiece(placement);
  }
}

function beginGesture(canvas, event) {
  if (event.button !== 0 || !event.isPrimary || gesture) return;
  event.stopImmediatePropagation();
  canvas.focus({ preventScroll: true });
  canvas.setPointerCapture(event.pointerId);
  const start = { canvas, id: event.pointerId, clientX: event.clientX, clientY: event.clientY, tool };
  gesture = start;
  if(tool==='sculpt'){applyBrush(canvas,event);return;}
  if (tool !== 'move') return;

  const hit = pointUnderPointer(canvas, event);
  choose(hit ? group.children.indexOf(hit.object) : -1);
  if (!hit) return;
  const piece = current();
  start.height = hit.point.y;
  start.dx = hit.point.x - piece.x;
  start.dz = hit.point.z - piece.z;
}

function moveGesture(canvas, event) {
  if (!gesture) {
    if (tool === 'move') canvas.toggleAttribute('data-hit', Boolean(pointUnderPointer(canvas, event)));
    else showGhost(placementAt(canvas, event));
    return;
  }
  if(tool==='sculpt'&&gesture.id===event.pointerId&&gesture.canvas===canvas){
    const distance=Math.hypot(event.clientX-gesture.clientX,event.clientY-gesture.clientY);
    if(distance>=7){applyBrush(canvas,event);gesture.clientX=event.clientX;gesture.clientY=event.clientY;}
    return;
  }
  if (gesture.id !== event.pointerId || gesture.canvas !== canvas || gesture.height === undefined || !current()) return;
  const moved = Math.hypot(event.clientX - gesture.clientX, event.clientY - gesture.clientY);
  if (moved < 4 && !gesture.recorded) return;
  setEventRay(canvas, event);
  const point = rayPlane(gesture.height);
  if (!point) return;
  const piece = current();
  const x = snapCoordinate(point.x - gesture.dx);
  const z = snapCoordinate(point.z - gesture.dz);
  if (x === piece.x && z === piece.z) return;
  if (!gesture.recorded) {
    remember();
    gesture.recorded = true;
    canvas.toggleAttribute('data-dragging', true);
  }
  piece.x = x;
  piece.z = z;
  placeMesh(group.children[selected], piece);
  selectionBox?.update();
  $('p-x').value = x;
  $('p-z').value = z;
  paintPlan();
  queueRender();
}

function endGesture(canvas, event, commit) {
  if (!gesture || gesture.canvas !== canvas || gesture.id !== event.pointerId) return;
  const finished = gesture;
  gesture = null;
  if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
  canvas.removeAttribute('data-dragging');
  if(finished.tool==='sculpt'){
    if(finished.recorded){sync();notice('Relief modifié.');}
    return;
  }
  if (finished.recorded) {
    pendingSave();
    notice(current().name + ' déplacé.');
  }
  if (commit && tool === finished.tool && tool !== 'move') {
    const moved = Math.hypot(event.clientX - finished.clientX, event.clientY - finished.clientY);
    if (moved < 6) commitPlacement(canvas, event);
  }
}

for (const canvas of [screen, plan]) {
  canvas.addEventListener('pointerdown', event => beginGesture(canvas, event), { capture: true });
  canvas.addEventListener('pointermove', event => moveGesture(canvas, event));
  canvas.addEventListener('pointerup', event => endGesture(canvas, event, true));
  canvas.addEventListener('pointercancel', event => endGesture(canvas, event, false));
  canvas.addEventListener('lostpointercapture', event => {
    if (!canvas.hasPointerCapture(event.pointerId)) endGesture(canvas, event, false);
  });
  canvas.addEventListener('pointerleave', () => { if (!gesture) showGhost(null); });
}

$('p-material').append(...mapMaterials.map((name, index) => new Option(name, index)));
for (const key of fields) {
  $('p-' + key).addEventListener('change', event => {
    const piece = current();
    if (!piece) return;
    remember();
    const input = event.target;
    if (key === 'solid') piece[key] = input.checked;
    else piece[key] = ['name', 'color'].includes(key) ? input.value : Number(input.value);
    map = parseMap(map);
    sync();
  });
}

$('map-name').onchange = event => {
  remember();
  map.name = event.target.value;
  map = parseMap(map);
  sync();
};
$('pieces').onchange = event => choose(Number(event.target.value));
for (const key of ['x', 'y', 'z', 'yaw']) {
  $('spawn-' + key).onchange = event => {
    remember();
    map.spawn[key] = Number(event.target.value);
    map = parseMap(map);
    sync();
  };
}
$('spawn-here').onclick = () => {
  const piece = current();
  if (!piece) return;
  const point = piece.solid && spawnOnTop(piece.x, piece.z, piece.yaw, group.children[selected]);
  if (!point) return notice('Choisis une pièce solide pour placer le départ.');
  remember();
  map.spawn = point;
  sync();
  notice('Départ placé au-dessus de la pièce.');
};

for (const button of toolButtons) button.onclick = () => setTool(button.dataset.tool);
$('duplicate').onclick = duplicatePiece;
$('delete').onclick = removePiece;
$('rotate').onclick = rotatePiece;
$('undo').onclick = undo;
$('zoom-fit').onclick = fitViews;
$('snap').onchange = () => showGhost(null);
$('new-example').onclick = () => loadMap(exampleMap(), 'Map exemple ouverte.');
$('blank-map').onclick = () => loadMap({
  ...exampleMap(), name: 'Ma nouvelle map', spawn: { x: 0, y: .025, z: 3, yaw: 0 },
  pieces: [makePiece({ name: 'Sol', y: -.25, w: 24, d: 24 })],
}, 'Nouvelle map créée. Sélectionne Bloc, Rampe ou Mur, puis clique où le poser.');
$('surface').onchange = event => {
  const preset = surfacePresets[event.target.value];
  const piece = current();
  if (!preset || !piece) return;
  remember();
  Object.assign(piece, preset);
  sync();
};
$('texture-file').onchange = async event => {
  const file = event.target.files[0], piece = current();
  if (!file || !piece) return;
  try {
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) throw Error('Choisis un PNG, JPG ou WebP.');
    const bitmap = await createImageBitmap(file), canvas = document.createElement('canvas');
    const factor = Math.min(1, 768 / Math.max(bitmap.width, bitmap.height));
    canvas.width = Math.max(1, Math.round(bitmap.width * factor));
    canvas.height = Math.max(1, Math.round(bitmap.height * factor));
    canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    const texture = canvas.toDataURL('image/webp', .82);
    if (texture.length > 1_000_000) throw Error('Texture trop lourde pour une map.');
    if (!map.pieces.includes(piece)) return notice('Sélectionne à nouveau la pièce et son image.');
    remember();
    piece.texture = texture;
    sync();
    notice('Texture intégrée à ' + canvas.width + ' × ' + canvas.height + '.');
  } catch (error) {
    notice(error.message);
  } finally {
    event.target.value = '';
  }
};
$('texture-clear').onclick = () => {
  if (!current()?.texture) return;
  remember();
  current().texture = null;
  sync();
};
$('import-map').onchange = async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    loadMap(parseMap(await file.text()), 'Map chargée.');
  } catch (error) {
    notice(error.message);
  } finally {
    event.target.value = '';
  }
};
$('export-map').onclick = () => {
  try {
    downloadMap(map);
    notice('Map JSON exportée.');
  } catch (error) {
    notice(error.message);
  }
};
$('test-map').onclick = () => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(parseMap(map)));
    location.href = './?custom=1';
  } catch {
    notice('Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.');
  }
};

const terrainFields=['detail','seed','amplitude','frequency','grass','shrub'];
for(const key of terrainFields)$('terrain-'+key).onchange=event=>{
  const piece=current();if(!piece?.terrain)return;
  remember();
  piece.terrain=key==='detail'?resizeTerrain(piece.terrain,Number(event.target.value)):
    normalizeTerrain({...piece.terrain,[key]:Number(event.target.value)});
  sync();
};
$('terrain-reset').onclick=()=>{
  if(!current()?.terrain)return;
  remember();current().terrain.heights=null;sync();
};
function applyBrush(canvas,event){
  setEventRay(canvas,event);
  const hit=raycaster.intersectObjects(group.children,false).find(item=>map.pieces[group.children.indexOf(item.object)]?.terrain);
  const index=hit?group.children.indexOf(hit.object):-1;
  const piece=map.pieces[index];
  if(!piece?.terrain)return;
  if(!gesture.recorded){
    remember();gesture.recorded=true;gesture.flattenY=hit.point.y;
    choose(index);$('terrain-controls').open=true;
  }
  if(index!==selected)return;
  const brush={mode:$('terrain-brush').value,radius:Number($('brush-radius').value),strength:Number($('brush-strength').value),target:gesture.flattenY};
  if(!sculptTerrain(piece,hit.point.x,hit.point.z,brush))return;
  const mesh=group.children[index];
  mesh.geometry.dispose();mesh.geometry=terrainGeometry(piece);
  selectionBox?.update();paintPlan();queueRender();
}
$('texture-style').replaceChildren(...texturePresets.map((label,index)=>new Option(label,index)));
$('texture-create').onclick=()=>{
  const piece=current();if(!piece)return;
  const canvas=seamlessTexture(Number($('texture-style').value),$('texture-tint').value);
  remember();piece.texture=canvas.toDataURL('image/webp',.85);sync();
  notice('Texture répétable 512 × 512 intégrée.');
};

$('view-top').onclick=()=>{
  const target=controls.target;
  const distance=Math.max(10,camera.position.distanceTo(target));
  camera.position.copy(target).add(new T.Vector3(0,distance,.001));
  controls.update();queueRender();
};
$('view-perspective').onclick=fitViews;
const toolKeys = { v: 'move', '1': 'block', '2': 'ramp', '3': 'wall', '4': 'spawn', escape: 'move' };
document.addEventListener('keydown', event => {
  if (event.target.closest?.('input, select, textarea, [contenteditable]') || gesture) return;
  const key = event.key.toLowerCase();
  if (event.ctrlKey || event.metaKey) {
    if (key === 'z') undo();
    else if (key === 'd') duplicatePiece();
    else return;
  } else if (event.altKey) return;
  else if (toolKeys[key]) setTool(toolKeys[key]);
  else if (key === 'r') rotatePiece();
  else if (key === 'f') fitViews();
  else if (key === 'delete') removePiece();
  else return;
  event.preventDefault();
});

try {
  const draft = localStorage.getItem(draftKey);
  if (draft) map = parseMap(draft);
} catch {}
setTool('move');
sync();
resizeRenderer();
resizePlan();
fitViews();

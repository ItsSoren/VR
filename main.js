import * as T from 'three';
import { createWorld, biomeTint } from './terrain.js';

const canvas = document.querySelector('canvas');
const button = document.querySelector('#vr');
const info = document.querySelector('#info');
const score = document.querySelector('#score');
const renderer = new T.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
renderer.xr.enabled = true;
renderer.xr.setReferenceSpaceType('local-floor');
renderer.xr.setFramebufferScaleFactor(.9);

const scene = new T.Scene();
scene.background = new T.Color('#91c9e8');
scene.fog = new T.FogExp2('#b5d5e1', .011);
scene.add(new T.HemisphereLight('#e5f5ff', '#8d835b', 2.1));
const sun = new T.DirectionalLight('#fff0d4', 1.65);
sun.position.set(-20, 38, 12);
scene.add(sun);

const world = createWorld('vallon-2026');
const center = world.spawn;
const rig = new T.Group();
const camera = new T.PerspectiveCamera(68, 1, .07, 185);
const viewer = new T.Vector3();
const heading = new T.Vector3(0, 0, -1);
const direction = new T.Vector3();
const right = new T.Vector3();
const rotation = new T.Quaternion();
rig.add(camera);
scene.add(rig);
rig.position.set(center.x, world.height(center.x, center.z), center.z);
camera.position.y = 1.66;

const size = 256;
const half = size / 2;
const segments = 160;
const terrain = new T.PlaneGeometry(size, size, segments, segments).rotateX(-Math.PI / 2);
terrain.translate(center.x, 0, center.z);
const positions = terrain.attributes.position;
const colors = new Float32Array(positions.count * 3);
const tint = new T.Color();
for (let i = 0; i < positions.count; i++) {
  const x = positions.getX(i), z = positions.getZ(i);
  positions.setY(i, world.height(x, z));
  biomeTint(world.sample(x, z), .5 + .45 * Math.sin(x * .11) * Math.cos(z * .09), tint);
  tint.toArray(colors, i * 3);
}
terrain.setAttribute('color', new T.BufferAttribute(colors, 3));
terrain.computeVertexNormals();
scene.add(new T.Mesh(terrain, new T.MeshLambertMaterial({ vertexColors: true, flatShading: true })));

function ground(x, z) {
  const step = size / segments;
  const gx = (x - center.x + half) / step, gz = (z - center.z + half) / step;
  const i = Math.floor(gx), j = Math.floor(gz), u = gx - i, v = gz - j;
  const row = segments + 1, a = i + j * row;
  const h00 = positions.getY(a), h10 = positions.getY(a + 1);
  const h01 = positions.getY(a + row), h11 = positions.getY(a + row + 1);
  return u + v <= 1
    ? h00 + (h10 - h00) * u + (h01 - h00) * v
    : h11 + (h01 - h11) * (1 - u) + (h10 - h11) * (1 - v);
}

let seed = 3105;
function random() {
  seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
  return seed / 4294967296;
}
const grass = new T.BufferGeometry();
grass.setAttribute('position', new T.Float32BufferAttribute([
  -.15,0,0,.05,0,0,-.1,.32,.03, -.03,0,0,.13,0,0,.19,.26,.08,
  0,0,-.14,0,0,.1,.05,.39,0,
], 3));
grass.computeVertexNormals();
const grassMaterial = new T.MeshLambertMaterial({ side: T.DoubleSide });
const marker = new T.Object3D();
for (let iz = -4; iz < 4; iz++) {
  for (let ix = -4; ix < 4; ix++) {
    const patch = new T.InstancedMesh(grass, grassMaterial, 115);
    for (let i = 0; i < patch.count; i++) {
      const x = center.x + (ix + random()) * 24;
      const z = center.z + (iz + random()) * 24;
      marker.position.set(x, ground(x, z) - .02, z);
      marker.rotation.y = random() * Math.PI * 2;
      marker.scale.setScalar(.64 + random() * .84);
      marker.updateMatrix();
      patch.setMatrixAt(i, marker.matrix);
      biomeTint(world.sample(x, z), random(), tint).multiplyScalar(.78 + random() * .42);
      patch.setColorAt(i, tint);
    }
    patch.computeBoundingSphere();
    scene.add(patch);
  }
}

const trunkMaterial = new T.MeshLambertMaterial({ color: '#746044' });
const canopyMaterial = new T.MeshLambertMaterial({ flatShading: true });
const trunk = new T.InstancedMesh(new T.CylinderGeometry(.15, .26, 1, 5), trunkMaterial, 52);
const canopy = new T.InstancedMesh(new T.IcosahedronGeometry(1, 0), canopyMaterial, 104);
for (let i = 0; i < trunk.count; i++) {
  const angle = random() * Math.PI * 2, radius = 29 + random() * 65;
  const x = center.x + Math.cos(angle) * radius, z = center.z + Math.sin(angle) * radius;
  const y = ground(x, z), height = 2.1 + random() * 2.4;
  marker.position.set(x, y + height / 2, z);
  marker.rotation.y = angle;
  marker.scale.set(1, height, 1);
  marker.updateMatrix();
  trunk.setMatrixAt(i, marker.matrix);
  for (let j = 0; j < 2; j++) {
    marker.position.set(x + j * .35, y + height + j * .72, z);
    marker.scale.set(height * .48, height * .55, height * .49);
    marker.updateMatrix();
    canopy.setMatrixAt(i * 2 + j, marker.matrix);
    canopy.setColorAt(i * 2 + j, tint.setHSL(.24 + random() * .07, .35, .23 + random() * .11));
  }
}
scene.add(trunk, canopy);

const mount = new T.CylinderGeometry(.25, .4, .8, 6);
const crystal = new T.OctahedronGeometry(.44);
const stone = new T.MeshLambertMaterial({ color: '#798273' });
const gold = new T.MeshBasicMaterial({ color: '#ffca65' });
const visited = new T.MeshBasicMaterial({ color: '#a7efae' });
const beacons = [[3,-12],[-13,-26],[19,-33]].map(([dx,dz]) => {
  const group = new T.Group();
  const x = center.x + dx, z = center.z + dz;
  group.position.set(x, ground(x,z),z);
  const base = new T.Mesh(mount,stone);
  base.position.y = .35;
  const gem = new T.Mesh(crystal,gold);
  gem.position.y = 1.22;
  group.add(base,gem);
  scene.add(group);
  return { group, gem, found:false };
});
let found = 0;

const avatar = new T.Group();
avatar.visible = false;
rig.add(avatar);
const cloth = new T.MeshLambertMaterial({ color: '#62734a', flatShading:true });
const leather = new T.MeshLambertMaterial({ color: '#4d3d32', flatShading:true });
const trousers = new T.MeshLambertMaterial({ color: '#777467', flatShading:true });
const skin = new T.MeshLambertMaterial({ color: '#cc9670', flatShading:true });
function mesh(geometry, material, parent = avatar) {
  const part = new T.Mesh(geometry,material);
  parent.add(part);
  return part;
}
const chest = mesh(new T.BoxGeometry(.35,.40,.23), cloth);
chest.position.set(0,1.16,.07);
const belt = mesh(new T.BoxGeometry(.34,.10,.23), leather);
belt.position.set(0,.91,.07);
const limb = new T.CylinderGeometry(.047,.060,1,6);
const leg = new T.CylinderGeometry(.057,.077,1,6);
const up = new T.Vector3(0,1,0), along = new T.Vector3();
function connect(part, a, b) {
  along.subVectors(b,a);
  part.position.copy(a).addScaledVector(along,.5);
  part.scale.y = Math.max(.001,along.length());
  part.quaternion.setFromUnitVectors(up,along.normalize());
}
const limbs = [-1,1].map(side => ({
  side,
  upper: mesh(limb,cloth), lower: mesh(limb,cloth),
  hand: mesh(new T.BoxGeometry(.08,.06,.125),skin),
  thigh: mesh(leg,trousers), shin: mesh(leg,trousers),
  boot: mesh(new T.BoxGeometry(.125,.13,.24),leather),
  target:new T.Vector3(),
}));
const shoulder = new T.Vector3(), elbow = new T.Vector3(), hip = new T.Vector3();
const knee = new T.Vector3(), foot = new T.Vector3(), bend = new T.Vector3();
let stride = 0, gait = 0;
function updateAvatar(pose, frame, space, travel, dt) {
  const head = pose.transform.position;
  avatar.position.set(head.x,0,head.z);
  avatar.rotation.y = Math.atan2(-heading.x,-heading.z);
  rig.updateMatrixWorld(true);
  const scale = T.MathUtils.clamp(head.y / 1.66,.55,1.35);
  chest.position.y = 1.18 * scale;
  chest.scale.y = scale;
  belt.position.y = .91 * scale;
  gait = T.MathUtils.lerp(gait,travel > .001 ? 1 : 0,Math.min(dt * 12,1));
  stride += travel * 5;
  for (const part of limbs) {
    const side = part.side;
    const source = [...renderer.xr.getSession().inputSources].find(input => input.handedness === (side < 0 ? 'left' : 'right') && input.gripSpace);
    const grip = source && frame.getPose(source.gripSpace,space);
    part.upper.visible = part.lower.visible = part.hand.visible = Boolean(grip);
    if (grip) {
      const point = grip.transform.position;
      part.target.set(point.x + rig.position.x, point.y + rig.position.y, point.z + rig.position.z);
      avatar.worldToLocal(part.target);
      shoulder.set(side * .19,1.33 * scale,.06);
      along.subVectors(part.target,shoulder);
      const distance = Math.max(.03,along.length());
      bend.set(side * .22,-1,.35);
      along.multiplyScalar(1 / distance);
      bend.addScaledVector(along,-bend.dot(along)).normalize();
      elbow.copy(shoulder).lerp(part.target,.5).addScaledVector(bend,.25 * Math.sqrt(Math.max(0,1-(distance/.69)**2)));
      connect(part.upper,shoulder,elbow);
      connect(part.lower,elbow,part.target);
      part.hand.position.copy(part.target);
      const q = grip.transform.orientation;
      part.hand.quaternion.set(q.x,q.y,q.z,q.w);
      part.hand.quaternion.premultiply(rotation.setFromAxisAngle(up,-avatar.rotation.y));
    }
    const swing = Math.sin(stride + (side < 0 ? Math.PI : 0));
    const lift = Math.max(0,Math.cos(stride + (side < 0 ? Math.PI : 0))) * gait * .11;
    hip.set(side * .10,.87 * scale,.07);
    foot.set(side * .13,.10 + lift,.06 + swing * .21 * gait);
    knee.copy(hip).lerp(foot,.49);
    knee.z -= .10 + lift;
    connect(part.thigh,hip,knee);
    connect(part.shin,knee,foot);
    part.boot.position.copy(foot);
    part.boot.position.z -= .045;
  }
}

const keys = new Set();
addEventListener('keydown', event => {
  const key = event.key.toLowerCase();
  if (['arrowup','arrowdown','arrowleft','arrowright','z','q','s','d','w','a'].includes(key)) {
    event.preventDefault();
    keys.add(key);
  }
});
addEventListener('keyup', event => keys.delete(event.key.toLowerCase()));
addEventListener('blur', () => keys.clear());
let yaw = 0, pitch = 0, pointer = null;
canvas.addEventListener('pointerdown', event => {
  pointer = event.pointerId;
  canvas.setPointerCapture(pointer);
});
canvas.addEventListener('lostpointercapture', () => { pointer = null; });
canvas.addEventListener('pointermove', event => {
  if (event.pointerId !== pointer || renderer.xr.isPresenting) return;
  yaw -= event.movementX * .004;
  pitch = T.MathUtils.clamp(pitch - event.movementY * .004,-1.35,1.35);
});
function resize() {
  if (renderer.xr.isPresenting) return;
  renderer.setSize(innerWidth,innerHeight,false);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
}
addEventListener('resize',resize);
resize();

if (navigator.xr) {
  navigator.xr.isSessionSupported('immersive-vr').then(supported => {
    button.disabled = !supported;
    if (supported) info.textContent = 'Joystick gauche : avancer et se décaler. Tourne la tête pour choisir ta direction.';
  }).catch(() => {});
}
button.addEventListener('click', async () => {
  button.disabled = true;
  let session;
  try {
    session = await navigator.xr.requestSession('immersive-vr',{ requiredFeatures:['local-floor'] });
    await renderer.xr.setSession(session);
    renderer.xr.setFoveation(.65);
  } catch (error) {
    if (session) await session.end().catch(() => {});
    info.textContent = 'La VR ne démarre pas : ' + error.message;
    button.disabled = false;
  }
});
renderer.xr.addEventListener('sessionend', () => {
  rig.position.add(new T.Vector3(viewer.x,0,viewer.z));
  viewer.set(0,0,0);
  avatar.visible = false;
  gait = 0;
  button.disabled = false;
  resize();
});

let lastTime = 0;
renderer.setAnimationLoop((time,frame) => {
  const dt = Math.min(.045,(time - lastTime) / 1000);
  lastTime = time;
  const session = renderer.xr.getSession();
  const space = renderer.xr.getReferenceSpace();
  const pose = frame && space && frame.getViewerPose(space);
  if (session && !pose) return;
  let x = 0, z = 0;
  if (session) {
    const orientation = pose.transform.orientation;
    rotation.set(orientation.x,orientation.y,orientation.z,orientation.w);
    direction.set(0,0,-1).applyQuaternion(rotation);
    const sticks = [...session.inputSources].filter(input => input.gamepad?.mapping === 'xr-standard' && input.gamepad.axes.length >= 4);
    const stick = sticks.find(input => input.handedness === 'left') || sticks[0];
    if (stick) {
      x = stick.gamepad.axes[2];
      z = -stick.gamepad.axes[3];
    }
    const p = pose.transform.position;
    viewer.set(p.x,p.y,p.z);
  } else {
    camera.position.set(0,1.66,0);
    camera.rotation.set(pitch,yaw,0,'YXZ');
    direction.set(0,0,-1).applyQuaternion(camera.quaternion);
    x = Number(keys.has('arrowright') || keys.has('d')) - Number(keys.has('arrowleft') || keys.has('q') || keys.has('a'));
    z = Number(keys.has('arrowup') || keys.has('z') || keys.has('w')) - Number(keys.has('arrowdown') || keys.has('s'));
  }
  direction.y = 0;
  if (direction.lengthSq() > .02) heading.copy(direction.normalize());
  right.set(-heading.z,0,heading.x);
  const magnitude = Math.hypot(x,z);
  const travel = magnitude > .18 ? 1.65 * dt * Math.min(1,(magnitude-.18)/.82) : 0;
  if (travel) {
    rig.position.addScaledVector(right,x * travel / magnitude);
    rig.position.addScaledVector(heading,z * travel / magnitude);
  }
  const px = T.MathUtils.clamp(rig.position.x + viewer.x,center.x-96,center.x+96);
  const pz = T.MathUtils.clamp(rig.position.z + viewer.z,center.z-96,center.z+96);
  rig.position.x = px - viewer.x;
  rig.position.z = pz - viewer.z;
  rig.position.y = T.MathUtils.lerp(rig.position.y,ground(px,pz),Math.min(dt * 13,1));
  avatar.visible = Boolean(session);
  if (session) updateAvatar(pose,frame,space,travel,dt);
  for (const beacon of beacons) {
    beacon.gem.rotation.y = time * .001;
    if (!beacon.found && Math.hypot(px-beacon.group.position.x,pz-beacon.group.position.z) < 1.65) {
      beacon.found = true;
      beacon.gem.material = visited;
      found++;
      score.textContent = found === 3 ? 'Les trois balises ont été retrouvées.' : found + ' / 3 balises';
    }
  }
  renderer.render(scene,camera);
});

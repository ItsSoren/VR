import * as T from 'three';

// Clockwise palm outline, with a separate height for the back and underside.
// Three edges are shared with the fingers and the last edge is the arm seam.
const palmContour = [
  [.026, .021, .015, -.015], [.041, .003, .013, -.018],
  [.048, -.023, .017, -.018], [.046, -.058, .016, -.014],
  [.014, -.059, .013, -.013], [.001, -.068, .014, -.013],
  [-.034, -.069, .017, -.014], [-.045, -.046, .012, -.017],
  [-.051, -.017, .011, -.021], [-.035, .001, .012, -.018],
  [-.026, .021, .015, -.015],
];
// Interior contour heights sculpt the knuckles, hollow and pads of the palm.
const dorsalHeights = [.020, .023, .026, .031, .022, .025, .032, .025, .021, .022, .019];
const palmarHeights = [-.020, -.023, -.026, -.022, -.015, -.018, -.022, -.029, -.031, -.027, -.020];
const fingerSpecs = [
  { edge: 5, length: .082, splay: .05 },
  { edge: 3, length: .068, splay: -.14 },
  { edge: 7, length: .051, splay: -.66 },
];
const wristEdge = palmContour.length - 1;
const palmFront = Math.min(...palmContour.map(point => point[1]));
const palmBack = Math.max(...palmContour.map(point => point[1]));
// Same local frame as the skin. The eight-face hull covers the palm through the wrist seam.
export const palmCenter = new T.Vector3(0, 0, (palmFront + palmBack) / 2);
export const palmHalfExtent = new T.Vector3(.047, .027, (palmBack - palmFront) / 2);
// Each section describes distance, width, then thickness relative to the finger root.
const fingerSections = [
  [.11, .94, .94], [.31, 1.10, 1.13], [.47, 1.02, 1.07], [.65, .95, 1.01], [.80, .82, .87], [.94, .56, .60],
];
// Each ring runs around the dorsal surface, outer side, then the palm.
const ringWidth = [-.5, .5, 1, .5, -.5, -1];
const ringHeight = [.866, .866, 0, -.866, -.866, 0];

export function createHandSkin(side, material, { openWrist = false } = {}) {
  const reflected = side === 'left' || side === -1;
  const mirror = reflected ? -1 : 1;
  const vertices = [];
  const triangles = [];
  const fingers = [];

  function vertex(x = 0, y = 0, z = 0) {
    const index = vertices.length / 3;
    vertices.push(x * mirror, y, z);
    return index;
  }

  function triangle(a, b, c) {
    if (reflected) triangles.push(a, c, b);
    else triangles.push(a, b, c);
  }

  function quad(a, b, c, d) {
    triangle(a, b, c);
    triangle(a, c, d);
  }

  function connect(from, to) {
    for (let i = 0; i < from.length; i++) {
      const next = (i + 1) % from.length;
      quad(from[next], from[i], to[i], to[next]);
    }
  }

  function cap(rim, center) {
    for (let i = 0; i < rim.length; i++) {
      triangle(center, rim[(i + 1) % rim.length], rim[i]);
    }
  }

  const top = vertex(-.003, .027, -.021);
  const bottom = vertex(-.005, -.019, -.026);
  const palm = palmContour.map(([x, z, dorsal, palmar], i) => {
    const atWrist = i === 0 || i === wristEdge;
    const innerX = x * .67;
    const innerZ = -.024 + (z + .024) * .69;
    return {
      top: vertex(x, dorsal, z),
      middle: vertex(x * 1.08, (dorsal + palmar) / 2, atWrist ? z : -.025 + (z + .025) * 1.04),
      bottom: vertex(x, palmar, z),
      innerTop: vertex(innerX, dorsalHeights[i], innerZ),
      innerBottom: vertex(innerX, palmarHeights[i], innerZ),
    };
  });

  function rimAt(edge) {
    const a = palm[edge];
    const b = palm[(edge + 1) % palm.length];
    return [a.top, b.top, b.middle, b.bottom, a.bottom, a.middle];
  }

  const ports = new Set(fingerSpecs.map(({ edge }) => edge));
  ports.add(wristEdge);
  for (let i = 0; i < palm.length; i++) {
    const a = palm[i];
    const b = palm[(i + 1) % palm.length];
    triangle(top, a.innerTop, b.innerTop);
    triangle(bottom, b.innerBottom, a.innerBottom);
    quad(a.innerTop, a.top, b.top, b.innerTop);
    quad(b.innerBottom, b.bottom, a.bottom, a.innerBottom);
    if (!ports.has(i)) {
      quad(b.top, a.top, a.middle, b.middle);
      quad(b.middle, a.middle, a.bottom, b.bottom);
    }
  }

  const wrist = rimAt(wristEdge);
  if (!openWrist) cap(wrist, vertex(0, 0, palmContour[wristEdge][1]));
  // Viewed from +Z, start at the upper left and follow the rim clockwise.
  const wristIndices = reflected ? [wrist[1], wrist[0], wrist[5], wrist[4], wrist[3], wrist[2]] : wrist;

  for (const { edge, length:baseLength, splay } of fingerSpecs) {
    const length=baseLength*1.30;
    const [ax, az, ad, ap] = palmContour[edge];
    const [bx, bz, bd, bp] = palmContour[edge + 1];
    const dx = bx - ax;
    const dz = bz - az;
    const directionX = -dz + dx * splay;
    const directionZ = dx + dz * splay;
    const magnitude = Math.hypot(directionX, directionZ);
    const rootWidth = Math.hypot(dx, dz) / 2;
    const rootHeight = (ad + bd - ap - bp) / 4;
    const rows = [];
    let previous = rimAt(edge);
    for (const [distance, width, height] of fingerSections) {
      const ring = [vertex(), vertex(), vertex(), vertex(), vertex(), vertex()];
      connect(previous, ring);
      rows.push({ ring, distance: distance * length, width: width * rootWidth, height: height * rootHeight });
      previous = ring;
    }
    const tip = vertex();
    cap(previous, tip);
    fingers.push({
      x: (ax + bx) / 2, y: (ad + bd + ap + bp) / 4, z: (az + bz) / 2,
      forwardX: directionX / magnitude, forwardZ: directionZ / magnitude,
      rows, tip, length, pressure: -1,
    });
  }

  const geometry = new T.BufferGeometry();
  const position = new T.Float32BufferAttribute(vertices, 3).setUsage(T.DynamicDrawUsage);
  geometry.setAttribute('position', position);
  geometry.setIndex(triangles);
  // Reserve room for the most curled pose without recalculating bounds each frame.
  geometry.boundingSphere = new T.Sphere(new T.Vector3(0, -.025, -.062), .16);
  geometry.boundingBox = new T.Box3(new T.Vector3(-.13, -.138, -.215), new T.Vector3(.13, .038, .026));

  let normalsDirty=true;
  function pose(pressures,updateNormals=true) {
    let changed = false;
    for (let fingerIndex = 0; fingerIndex < fingers.length; fingerIndex++) {
      const finger = fingers[fingerIndex];
      const raw = pressures?.[fingerIndex];
      const pressure = Number.isFinite(raw) ? T.MathUtils.clamp(raw, 0, 1) : 0;
      if (pressure === finger.pressure) continue;
      finger.pressure = pressure;
      changed = true;
      const { forwardX, forwardZ, length, rows, tip } = finger;
      let x = finger.x;
      let z = finger.z;
      let y = finger.y;
      let previousDistance=0, direction=0, joint=0;
      const joints=[.08,.44,.73];
      const angles=[.09+pressure*1.035,.06+pressure*.84,.045+pressure*.548];
      const advance=distance=>{
        while(joint<joints.length&&joints[joint]*length<=distance){
          const at=joints[joint]*length,travel=at-previousDistance;
          const forward=Math.cos(direction)*travel;
          x+=forwardX*forward;y-=Math.sin(direction)*travel;z+=forwardZ*forward;
          previousDistance=at;direction+=angles[joint++];
        }
        const travel=distance-previousDistance,forward=Math.cos(direction)*travel;
        x+=forwardX*forward;y-=Math.sin(direction)*travel;z+=forwardZ*forward;
        previousDistance=distance;
      };
      for (const { ring, distance, width, height } of rows) {
        advance(distance);
        const angle=direction;
        for (let i = 0; i < ring.length; i++) {
          const lateral = ringWidth[i] * width;
          const vertical = ringHeight[i] * height;
          const bend = vertical * Math.sin(angle);
          position.setXYZ(ring[i],
            mirror * (x + forwardZ * lateral + forwardX * bend),
            y + vertical * Math.cos(angle),
            z - forwardX * lateral + forwardZ * bend);
        }
      }
      advance(length);
      position.setXYZ(tip,mirror*x,y,z);
    }
    if (changed) {
      position.needsUpdate = true;
      normalsDirty=true;
    }
    if(updateNormals&&normalsDirty){geometry.computeVertexNormals();normalsDirty=false;}
  }

  pose();
  geometry.getAttribute('normal').setUsage(T.DynamicDrawUsage);
  const mesh = new T.Mesh(geometry, material);
  mesh.castShadow = true;
  function indexTip(out){
    return out.fromBufferAttribute(position,fingers[0].tip).applyQuaternion(mesh.quaternion).add(mesh.position);
  }
  return { mesh, pose, wristIndices, indexTip };
}

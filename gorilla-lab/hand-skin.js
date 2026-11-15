import * as T from 'three';

// Contour runs clockwise in the XZ plane. Three of its edges connect to digits.
const palmContour = [
  [.026, .021, .015], [.044, -.004, .018], [.052, -.032, .017],
  [.043, -.063, .014], [.011, -.071, .012], [-.005, -.073, .012],
  [-.039, -.068, .013], [-.049, -.046, .014], [-.048, -.016, .015],
  [-.039, .003, .017], [-.026, .021, .015],
];
const fingerSpecs = [
  { edge: 5, length: .080, splay: .04 },
  { edge: 3, length: .060, splay: -.04 },
  { edge: 7, length: .053, splay: -.64 },
];
const wristEdge = palmContour.length - 1;
// Each section describes distance, width, then thickness relative to the finger root.
const fingerSections = [
  [.23, .98, .91], [.48, .86, .82], [.73, .78, .75], [.93, .66, .67],
];
// Each ring runs around the dorsal surface, outer side, then the palm.
const ringWidth = [-.78, .78, 1, .78, -.78, -1];
const ringHeight = [1, 1, 0, -1, -1, 0];

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

  const top = vertex(0, .028, -.025);
  const bottom = vertex(-.003, -.024, -.025);
  const palm = palmContour.map(([x, z, thickness], i) => ({
    top: vertex(x, thickness, z),
    middle: vertex(x * 1.08, 0, i === 0 || i === wristEdge ? z : -.025 + (z + .025) * 1.05),
    bottom: vertex(x, -thickness, z),
  }));

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
    triangle(top, a.top, b.top);
    triangle(bottom, b.bottom, a.bottom);
    if (!ports.has(i)) {
      quad(b.top, a.top, a.middle, b.middle);
      quad(b.middle, a.middle, a.bottom, b.bottom);
    }
  }

  const wrist = rimAt(wristEdge);
  if (!openWrist) cap(wrist, vertex(0, 0, palmContour[wristEdge][1]));
  // Viewed from +Z, start at the upper left and follow the rim clockwise.
  const wristIndices = reflected ? [wrist[1], wrist[0], wrist[5], wrist[4], wrist[3], wrist[2]] : wrist;

  for (const { edge, length, splay } of fingerSpecs) {
    const [ax, az, at] = palmContour[edge];
    const [bx, bz, bt] = palmContour[edge + 1];
    const dx = bx - ax;
    const dz = bz - az;
    const directionX = -dz + dx * splay;
    const directionZ = dx + dz * splay;
    const magnitude = Math.hypot(directionX, directionZ);
    const rows = [];
    let previous = rimAt(edge);
    for (const [distance, width, height] of fingerSections) {
      const ring = [vertex(), vertex(), vertex(), vertex(), vertex(), vertex()];
      connect(previous, ring);
      rows.push({ ring, distance: distance * length, width: width * Math.hypot(dx, dz) / 2, height: height * (at + bt) / 2 });
      previous = ring;
    }
    const tip = vertex();
    cap(previous, tip);
    fingers.push({
      x: (ax + bx) / 2, z: (az + bz) / 2,
      forwardX: directionX / magnitude, forwardZ: directionZ / magnitude,
      rows, tip, length, pressure: -1,
    });
  }

  const geometry = new T.BufferGeometry();
  const position = new T.Float32BufferAttribute(vertices, 3).setUsage(T.DynamicDrawUsage);
  geometry.setAttribute('position', position);
  geometry.setIndex(triangles);
  // Reserve room for the most curled pose without recalculating bounds each frame.
  geometry.boundingSphere = new T.Sphere(new T.Vector3(0, -.018, -.052), .12);
  geometry.boundingBox = new T.Box3(new T.Vector3(-.10, -.082, -.17), new T.Vector3(.10, .038, .025));

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
      let y = 0;
      let previousAngle = 0;
      let previousDistance = 0;
      for (const { ring, distance, width, height } of rows) {
        const fraction = distance / length;
        const baseBend = T.MathUtils.smoothstep(fraction, 0, .57);
        const endBend = T.MathUtils.smoothstep(fraction, .38, 1);
        const angle = (.17 + pressure * .83) * baseBend + (.14 + pressure * .76) * endBend;
        const segmentAngle = (angle + previousAngle) / 2;
        const travel = distance - previousDistance;
        const forward = Math.cos(segmentAngle) * travel;
        x += forwardX * forward;
        y -= Math.sin(segmentAngle) * travel;
        z += forwardZ * forward;
        for (let i = 0; i < ring.length; i++) {
          const lateral = ringWidth[i] * width;
          const vertical = ringHeight[i] * height;
          const bend = vertical * Math.sin(angle);
          position.setXYZ(ring[i],
            mirror * (x + forwardZ * lateral + forwardX * bend),
            y + vertical * Math.cos(angle),
            z - forwardX * lateral + forwardZ * bend);
        }
        previousAngle = angle;
        previousDistance = distance;
      }
      const travel = length - previousDistance;
      const forward = travel * Math.cos(previousAngle);
      position.setXYZ(tip,
        mirror * (x + forwardX * forward),
        y - travel * Math.sin(previousAngle),
        z + forwardZ * forward);
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
  return { mesh, pose, wristIndices };
}

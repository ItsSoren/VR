import * as T from 'three';

// Preserve palette order because spectators receive the index.
export const avatarPalettes = Object.freeze([
  { fur: '#648392', hand: '#7d98a2', shade: '#405b65', skin: '#a8b3a9', skinShade: '#707f7b' },
  { fur: '#c16141', hand: '#d78254', shade: '#793e36', skin: '#ebac81', skinShade: '#ac705b' },
  { fur: '#468c63', hand: '#65a776', shade: '#2a5e4d', skin: '#bbca93', skinShade: '#778d68' },
  { fur: '#7765b7', hand: '#9a85cd', shade: '#503c8c', skin: '#c8b2d8', skinShade: '#897ca2' },
  { fur: '#428fae', hand: '#66b0c3', shade: '#315b83', skin: '#a8ced6', skinShade: '#648eaa' },
  { fur: '#ad5274', hand: '#cd728b', shade: '#763550', skin: '#e2a4a4', skinShade: '#a96c82' },
  { fur: '#ae8a45', hand: '#caa162', shade: '#735a38', skin: '#e5c794', skinShade: '#a78b63' },
  { fur: '#525993', hand: '#727bb8', shade: '#363c69', skin: '#a5acc3', skinShade: '#676f9a' },
].map(palette => Object.freeze(palette)));

function placeDetail(tone, geometry, position, scale, roll) {
  geometry.scale(...scale);
  geometry.rotateZ(roll);
  geometry.translate(...position);
  return { tone, geometry };
}

function ellipsoid(tone, position, scale, detail = 0, roll = 0) {
  return placeDetail(tone, new T.IcosahedronGeometry(1, detail), position, scale, roll);
}

function smallDetail(tone, position, scale, roll = 0) {
  return placeDetail(tone, new T.OctahedronGeometry(1), position, scale, roll);
}

function triangles(tone, vertices) {
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(vertices.flat(), 3));
  return { tone, geometry };
}

// Contours are ordered clockwise in XY to face the avatar's forward direction (-Z).
function plate(tone, center, contour) {
  const vertices = [];
  for (const [i, point] of contour.entries()) {
    vertices.push(center, point, contour[(i + 1) % contour.length]);
  }
  return triangles(tone, vertices);
}

function headParts() {
  const parts = [
    ellipsoid('fur', [0, .012, .011], [.154, .161, .132], 1),
    ellipsoid('fur', [0, -.065, .008], [.128, .079, .108]),
    ellipsoid('fur', [-.044, .133, .008], [.053, .039, .079], 0, -.18),
    ellipsoid('hand', [.023, .139, .009], [.066, .043, .082], 0, .24),
    plate('skinShade', [0, .021, -.149], [
      [0, .111, -.084], [.072, .098, -.081], [.118, .055, -.068], [.129, -.018, -.053],
      [.101, -.090, -.067], [0, -.128, -.085], [-.101, -.090, -.067], [-.129, -.018, -.053],
      [-.118, .055, -.068], [-.072, .098, -.081],
    ]),
    ellipsoid('skin', [0, -.061, -.133], [.102, .066, .065], 1),
    ellipsoid('skinShade', [0, -.097, -.140], [.076, .031, .047]),
    ellipsoid('skin', [0, .015, -.150], [.041, .056, .038]),
    ellipsoid('skinShade', [0, -.018, -.174], [.053, .029, .036]),
  ];

  for (const side of [-1, 1]) {
    parts.push(
      ellipsoid('shade', [side * .144, -.006, .014], [.043, .058, .035], 0, side * .20),
      ellipsoid('skin', [side * .158, -.004, -.009], [.027, .039, .017], 0, side * .20),
      smallDetail('skinShade', [side * .159, -.007, -.021], [.014, .023, .008]),
      ellipsoid('fur', [side * .117, -.049, -.015], [.031, .068, .071], 0, -side * .20),
      ellipsoid('skin', [side * .075, -.017, -.125], [.045, .040, .037], 0, -side * .25),
      ellipsoid('shade', [side * .052, .069, -.126], [.068, .028, .049], 0, side * .14),
      ellipsoid('ink', [side * .048, .033, -.155], [.033, .026, .025], 0, side * .10),
      ellipsoid('ivory', [side * .048, .032, -.172], [.023, .016, .012], 0, side * .10),
      ellipsoid('ink', [side * .047, .031, -.183], [.011, .012, .006]),
      smallDetail('ivory', [side * .047 - .004, .036, -.188], [.0035, .0035, .002]),
      smallDetail('ink', [side * .029, -.026, -.199], [.015, .007, .007], side * .20),
    );
  }

  parts.push(plate('ink', [0, -.080, -.197], [
    [0, -.078, -.197], [.033, -.077, -.194], [.063, -.070, -.182],
    [.035, -.084, -.193], [0, -.085, -.196], [-.035, -.084, -.193],
    [-.063, -.070, -.182], [-.033, -.077, -.194],
  ]));
  return parts;
}

// Bake each piece into one draw call and retain color ranges for spectator updates.
function packSurface(parts) {
  const ranges = [];
  let count = 0;
  for (const { tone, geometry } of parts) {
    const end = count + geometry.getAttribute('position').count;
    ranges.push({ tone, start: count, end });
    count = end;
  }
  const positions = new Float32Array(count * 3);
  parts.forEach(({ geometry }, i) => positions.set(geometry.getAttribute('position').array, ranges[i].start * 3));
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return { geometry, ranges };
}

const headSurface = packSurface(headParts());

export function createAvatarStyle(initialColor = 0) {
  const fur = new T.MeshLambertMaterial({ flatShading: true });
  const hand = new T.MeshLambertMaterial({ flatShading: true });
  const surface = new T.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const surfaces = [];
  const tones = { ink: new T.Color('#212128'), ivory: new T.Color('#fff1ce') };
  let colorIndex = -1;

  function applyTones({ colors, ranges }) {
    for (const { tone, start, end } of ranges) {
      const { r, g, b } = tones[tone];
      for (let i = start; i < end; i++) colors.setXYZ(i, r, g, b);
    }
    colors.needsUpdate = true;
  }

  function setColor(index) {
    const nextIndex = Number.isInteger(index) && index >= 0 && index < avatarPalettes.length ? index : 0;
    if (nextIndex === colorIndex) return;
    colorIndex = nextIndex;
    const palette = avatarPalettes[colorIndex];
    for (const [tone, hex] of Object.entries(palette)) {
      (tones[tone] ??= new T.Color()).set(hex);
    }
    fur.color.copy(tones.fur);
    hand.color.copy(tones.hand);
    surfaces.forEach(applyTones);
  }

  function createSurface(template) {
    const geometry = template.geometry.clone();
    const colors = new T.BufferAttribute(new Float32Array(geometry.getAttribute('position').count * 3), 3);
    geometry.setAttribute('color', colors);
    const record = { colors, ranges: template.ranges };
    surfaces.push(record);
    applyTones(record);
    return new T.Mesh(geometry, surface);
  }

  setColor(initialColor);
  return {
    fur,
    hand,
    setColor,
    createHead() {
      const head = new T.Group();
      head.add(createSurface(headSurface));
      return head;
    },
  };
}

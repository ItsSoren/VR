import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { ConvexGeometry } from 'three/addons/geometries/ConvexGeometry.js';

const TAU = Math.PI * 2;
// Leave a white atlas tile for parts that use vertex color alone.
const textureScale = .84;
const textureSize = 128;

function makeTexture(sample) {
  const pixels = new Uint8Array(textureSize * textureSize * 4);
  for (let y = 0; y < textureSize; y++) {
    for (let x = 0; x < textureSize; x++) {
      const u = (x + .5) / textureSize;
      const v = (y + .5) / textureSize;
      const rgb = u > .88 && v > .88 ? [255, 255, 255] : sample(
        Math.min(u / textureScale, 1), Math.min(v / textureScale, 1), x, y
      );
      const offset = (x + y * textureSize) * 4;
      for (let i = 0; i < 3; i++) pixels[offset + i] = T.MathUtils.clamp(Math.round(rgb[i]), 0, 255);
      pixels[offset + 3] = 255;
    }
  }
  const map = new T.DataTexture(pixels, textureSize, textureSize);
  map.colorSpace = T.SRGBColorSpace;
  map.generateMipmaps = true;
  map.minFilter = T.LinearMipmapLinearFilter;
  map.magFilter = T.LinearFilter;
  map.needsUpdate = true;
  return map;
}

function grain(x, y) {
  const hash = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return hash - Math.floor(hash);
}

function part(geometry, tint, textured = false) {
  const source = geometry.index ? geometry.toNonIndexed() : geometry;
  const color = new T.Color(tint);
  const uvs = source.attributes.uv;
  const vertices = source.attributes.position.count;
  const colors = new Float32Array(vertices * 3);
  for (let i = 0; i < vertices; i++) {
    color.toArray(colors, i * 3);
    if (textured) {
      uvs.setXY(i, uvs.getX(i) * textureScale, uvs.getY(i) * textureScale);
    } else {
      uvs.setXY(i, .95, .95);
    }
  }
  source.setAttribute('color', new T.BufferAttribute(colors, 3));
  return source;
}

function prop(id, name, mass, collisionGeo, parts, map, roughness, metalness = 0) {
  return {
    id, name, collisionGeo, mass,
    geo: mergeGeometries(parts),
    material: new T.MeshStandardMaterial({ vertexColors: true, map, roughness, metalness }),
  };
}

function roundedRectangle(width, height, r) {
  const x = width / 2;
  const y = height / 2;
  const shape = new T.Shape();
  shape.moveTo(-x + r, -y);
  shape.lineTo(x - r, -y);
  shape.quadraticCurveTo(x, -y, x, -y + r);
  shape.lineTo(x, y - r);
  shape.quadraticCurveTo(x, y, x - r, y);
  shape.lineTo(-x + r, y);
  shape.quadraticCurveTo(-x, y, -x, y - r);
  shape.lineTo(-x, -y + r);
  shape.quadraticCurveTo(-x, -y, -x + r, -y);
  return shape;
}

function roundedBlock(w, h, d, r, bevel) {
  return new T.ExtrudeGeometry(roundedRectangle(w, h, r), {
    depth: d, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 1, curveSegments: 2,
  }).translate(0, 0, -d / 2);
}

// Rings run along Y. Blend the normals across the texture seam.
function revolve(profile, segments, radiusAt = radius => radius) {
  const positions = [];
  const uvs = [];
  const indices = [];
  for (let row = 0; row < profile.length; row++) {
    const [radius, y] = profile[row];
    for (let i = 0; i <= segments; i++) {
      const theta = TAU * i / segments;
      const r = radiusAt(radius, y, theta, row);
      positions.push(r * Math.sin(theta), y, r * Math.cos(theta));
      uvs.push(i / segments, row / (profile.length - 1));
      if (row === profile.length - 1 || i === segments) continue;
      const a = row * (segments + 1) + i;
      const c = a + segments + 1;
      if (radius > 0) indices.push(a, a + 1, c);
      if (profile[row + 1][0] > 0) indices.push(a + 1, c + 1, c);
    }
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new T.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const { normal } = geometry.attributes;
  const first = new T.Vector3();
  const last = new T.Vector3();
  for (let row = 0; row < profile.length; row++) {
    const a = row * (segments + 1);
    const b = a + segments;
    first.fromBufferAttribute(normal, a).add(last.fromBufferAttribute(normal, b)).normalize();
    normal.setXYZ(a, first.x, first.y, first.z);
    normal.setXYZ(b, first.x, first.y, first.z);
  }
  return geometry;
}

function convexRings(profile, sides) {
  const points = [];
  for (const [radius, y] of profile) {
    if (radius === 0) {
      points.push(new T.Vector3(0, y, 0));
      continue;
    }
    for (let i = 0; i < sides; i++) {
      const angle = TAU * i / sides;
      points.push(new T.Vector3(radius * Math.sin(angle), y, radius * Math.cos(angle)));
    }
  }
  return new ConvexGeometry(points);
}

function phone() {
  const w = .098;
  const h = .185;
  const display = new T.ShapeGeometry(roundedRectangle(w, h, .008), 3).translate(0, -.001, .0116);
  const positions = display.attributes.position;
  for (let i = 0; i < positions.count; i++) {
    const u = T.MathUtils.clamp(positions.getX(i) / w + .5, 0, 1);
    const v = T.MathUtils.clamp((positions.getY(i) + .001) / h + .5, 0, 1);
    display.attributes.uv.setXY(i, u, v);
  }
  const wallpaper = makeTexture((u, v) => {
    const glow = Math.exp(-((u - .68) ** 2 * 7 + (v - .24) ** 2 * 5));
    const curve = .5 + .5 * Math.sin((v * 1.5 + u * .6) * TAU);
    const swipe = v > .033 && v < .05 && u > .30 && u < .70;
    const earpiece = v > .955 && v < .982 && u > .39 && u < .61;
    const status = v > .926 && v < .938 && u > .78 && u < .9;
    if (earpiece) return [18, 27, 42];
    if (swipe || status) return [222, 239, 247];
    return [15 + 58 * glow + 27 * curve, 27 + 98 * glow + 54 * curve, 59 + 108 * glow + 47 * curve];
  });
  const models = [
    part(roundedBlock(.106, .207, .013, .011, .0019), 0x8091a2),
    part(roundedBlock(.104, .205, .001, .011, .0014).translate(0, 0, .0093), 0x111821),
    part(roundedBlock(.102, .203, .001, .011, .0011).translate(0, 0, -.0085), 0x354553),
    part(display, 0xffffff, true),
    part(roundedBlock(.042, .054, .002, .009, .0012).translate(-.025, .067, -.0109), 0x617585),
    part(new T.BoxGeometry(.0036, .024, .004).translate(.055, .029, 0), 0xb2beca),
    part(new T.BoxGeometry(.0036, .015, .004).translate(-.055, .032, 0), 0xadb9c5),
    part(new T.BoxGeometry(.0036, .012, .004).translate(-.055, .011, 0), 0xadb9c5),
  ];
  for (const [x, y] of [[-.034, .080], [-.022, .059]]) {
    models.push(part(new T.CylinderGeometry(.009, .009, .0026, 10).rotateX(Math.PI / 2)
      .translate(x, y, -.0138), 0x181f29));
    models.push(part(new T.CircleGeometry(.0055, 10).rotateY(Math.PI)
      .translate(x, y, -.01515), 0x42637f));
  }
  models.push(part(new T.CircleGeometry(.0037, 8).rotateY(Math.PI).translate(-.014, .078, -.01312), 0xffe8ba));
  const outline = [[-.057, -.106], [.047, -.106], [.057, -.096],
    [.057, .106], [-.047, .106], [-.057, .096]];
  const collision = new ConvexGeometry([-.0152, .0117].flatMap(z =>
    outline.map(([x, y]) => new T.Vector3(x, y, z))
  ));
  return prop('phone', 'Téléphone', .23, collision, models, wallpaper, .35, .21);
}

function baguette() {
  const halfLength = .275;
  const scores = [-.165, -.055, .055, .165];
  const profile = Array.from({ length: 21 }, (_, row) => {
    const t = row / 20;
    return [row === 0 || row === 20 ? 0 : .062 * Math.sin(Math.PI * t) ** .31, (t * 2 - 1) * halfLength];
  });
  const scoredRadius = (radius, x, theta) => {
    const top = Math.max(0, -Math.sin(theta));
    const offset = .035 * Math.cos(theta);
    const cut = Math.max(...scores.map(center => Math.exp(-(((x - center + offset) / .014) ** 2))));
    return radius * (1 - .14 * top ** 6 * cut + .025 * Math.cos(theta * 3 + 7 * x));
  };
  const loaf = revolve(profile, 18, scoredRadius).rotateZ(-Math.PI / 2).scale(1, .85, 1);
  const crust = makeTexture((u, v, x, y) => {
    const theta = TAU * u;
    const lengthwise = (v * 2 - 1) * halfLength;
    const top = Math.max(0, -Math.sin(theta));
    const pattern = Math.max(...scores.map(center => Math.exp(-(((lengthwise - center + .035 * Math.cos(theta)) / .009) ** 2))));
    const flour = top ** 3 * pattern;
    const pores = grain(x, y) - .5;
    const bake = 9 * Math.sin(u * 180 + v * 43) * Math.cos(v * 29) + 20 * pores;
    return [150 + 29 * top + 58 * flour + bake, 76 + 24 * top + 70 * flour + bake, 24 + 11 * top + 52 * flour + bake * .8];
  });
  const collision = convexRings([[0, -.275], [.059, -.207], [.059, .207], [0, .275]], 5)
    .rotateZ(-Math.PI / 2).scale(1, .88, 1);
  return prop('bread', 'Baguette de pain', .27, collision, [part(loaf, 0xffffff, true)], crust, .9);
}

function wheel() {
  const rubber = makeTexture((u, v, x, y) => {
    const centerTread = v > .34 && v < .67;
    const diagonal = Math.abs(v - .5) * 7;
    const groove = ((u * 28 + diagonal) % 1) < .17;
    const channel = Math.abs(v - .5) < .013;
    const noise = 12 * grain(x, y);
    const shade = 46 + noise - (centerTread && (groove || channel) ? 35 : 0);
    return [shade * .94, shade, shade * 1.04];
  });
  const tire = revolve([
    [.145, -.061], [.188, -.077], [.224, -.074], [.250, -.052], [.257, -.030],
    [.257, .030], [.250, .052], [.224, .074], [.188, .077], [.145, .061],
  ], 22).rotateX(Math.PI / 2);
  const rim = revolve([
    [.126, -.055], [.167, -.063], [.177, -.054], [.166, -.046],
    [.166, .046], [.177, .054], [.167, .063], [.126, .055],
  ], 16).rotateX(Math.PI / 2);
  const models = [
    part(tire, 0xffffff, true),
    part(rim, 0xa8b3bb),
    part(new T.CylinderGeometry(.067, .067, .124, 10).rotateX(Math.PI / 2), 0x8e9ca6),
    part(new T.CylinderGeometry(.039, .039, .133, 8).rotateX(Math.PI / 2), 0x46535f),
  ];
  for (let i = 0; i < 5; i++) {
    const angle = TAU * i / 5;
    models.push(part(new T.BoxGeometry(.108, .029, .088).translate(.101, 0, 0).rotateZ(angle), 0x8d9ba8));
  }
  const collision = convexRings([[.257, -.071], [.257, .071]], 6).rotateX(Math.PI / 2);
  return prop('wheel', 'Roue', 1.8, collision, models, rubber, .64, .23);
}

function cup() {
  const glaze = makeTexture((u, v, x, y) => {
    const speckle = grain(x, y);
    const blueBand = v > .26 && v < .34 || v > .455 && v < .475;
    const shade = speckle > .98 ? -44 : 19 * (speckle - .5) + 5 * Math.cos(TAU * u * 4);
    return blueBand ? [46 + shade, 94 + shade, 117 + shade] : [240 + shade, 223 + shade, 194 + shade];
  });
  const ceramic = revolve([
    [0, -.091], [.063, -.091], [.071, -.087], [.076, -.075], [.084, -.032],
    [.091, .052], [.095, .089], [.091, .094], [.083, .091], [.081, .055],
    [.074, -.032], [.068, -.064], [.056, -.074], [0, -.075],
  ], 20);
  const handle = new T.TorusGeometry(.056, .013, 6, 14).scale(.91, 1.07, 1).translate(.109, .013, 0);
  const hullPoints = [[.080, -.091], [.103, .094]].flatMap(([radius, y]) =>
    Array.from({ length: 5 }, (_, i) => {
      const angle = Math.PI + TAU * i / 5;
      return new T.Vector3(radius * Math.cos(angle), y, radius * Math.sin(angle));
    })
  );
  hullPoints.push(new T.Vector3(.166, -.027, .010), new T.Vector3(.166, .053, -.010));
  const collision = new ConvexGeometry(hullPoints);
  return prop('cup', 'Tasse', .39, collision, [part(ceramic, 0xffffff, true), part(handle, 0xf0dfc2)], glaze, .37);
}

export function makeLabProps() {
  return [phone(), baguette(), wheel(), cup()];
}


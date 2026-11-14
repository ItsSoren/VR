import * as THREE from 'three';
import { WEATHER } from './environment.js';
import { itemIcon } from './item-icons.js';

/** Debug powers are opt-in, visible, reversible and never award survival achievements. */
export class DebugTools {
  constructor(hooks, scene) {
    this.hooks = hooks;
    this.fly = false;
    this.noclip = false;
    this.god = false;
    this.xray = false;
    this.markers = new THREE.InstancedMesh(
      new THREE.OctahedronGeometry(0.22, 0),
      new THREE.MeshBasicMaterial({
        depthTest: false,
        depthWrite: false,
        transparent: true,
        opacity: 0.8,
      }),
      640
    );
    this.markers.renderOrder = 90;
    this.markers.frustumCulled = false;
    this.markers.visible = false;
    scene.add(this.markers);
    this.dummy = new THREE.Object3D();
    this.lastScan = '';
    const root = document.createElement('section');
    root.id = 'debug';
    root.className = 'dialog debug-dialog';
    root.hidden = true;
    root.innerHTML = `<div class="eyebrow">ATELIER DE TEST · F3</div><h2>Explorer les systèmes</h2><p>Les commandes de triche désactivent les nouveaux succès dans cette sauvegarde.</p>
      <div class="debug-switches">${[
        ['fly', 'Vol · Espace / Maj descendre'],
        ['noclip', 'Traverser les obstacles'],
        ['god', 'Invincibilité'],
        ['xray', 'Voir les minerais à travers les murs'],
        ['creative', 'Construction sans coût'],
      ]
        .map(([id, label]) => `<label><input type="checkbox" data-debug="${id}"> ${label}</label>`)
        .join('')}</div>
      <div class="debug-row"><button id="debug-items">Tout l’équipement + 64 ressources</button><button id="debug-reset">Désactiver les pouvoirs</button></div>
      <div id="debug-item-list"></div><label>Heure <input id="debug-hour" type="range" min="0" max="23.99" step=".1"></label>
      <label>Météo <select id="debug-weather"><option value="automatic">Automatique</option>${Object.entries(
        WEATHER
      )
        .map(([id, w]) => `<option value="${id}">${w.label}</option>`)
        .join('')}</select></label>
      <div class="debug-row"><button data-teleport="panorama">Panorama</button><button data-teleport="cave">Grotte</button><button data-teleport="clouds">Dans les nuages</button></div>
      <output id="debug-metrics"></output><button class="primary" id="debug-close">Reprendre <span>↗</span></button>`;
    document.body.append(root);
    this.root = root;
    this.badge = document.createElement('div');
    this.badge.className = 'debug-badge';
    document.body.append(this.badge);
    for (const b of root.querySelectorAll('[data-debug]'))
      b.onchange = () => {
        const key = b.dataset.debug;
        if (b.checked) hooks.cheat();
        if (key === 'creative') hooks.creative(b.checked);
        else this[key] = b.checked;
        if (key === 'fly' && !this.fly) {
          this.noclip = false;
          hooks.land();
          root.querySelector('[data-debug="noclip"]').checked = false;
        }
        if (key === 'noclip' && this.noclip) {
          this.fly = true;
          root.querySelector('[data-debug="fly"]').checked = true;
        }
      };
    root.querySelector('#debug-items').onclick = () => {
      hooks.cheat();
      hooks.all();
      this.refresh();
    };
    for (const key of hooks.items) {
      const b = document.createElement('button');
      b.innerHTML = itemIcon(key) + `<span>${hooks.label(key)}</span>`;
      b.onclick = () => {
        hooks.cheat();
        hooks.grant(key);
        this.refresh();
      };
      root.querySelector('#debug-item-list').append(b);
    }
    root.querySelector('#debug-hour').oninput = (e) => {
      hooks.cheat();
      hooks.hour(Number(e.target.value));
    };
    root.querySelector('#debug-weather').onchange = (e) => hooks.weather(e.target.value);
    for (const b of root.querySelectorAll('[data-teleport]'))
      b.onclick = () => {
        hooks.cheat();
        const target = b.dataset.teleport;
        if (target === 'clouds') {
          this.fly = true;
          root.querySelector('[data-debug="fly"]').checked = true;
        }
        hooks.teleport(target);
        hooks.close();
      };
    root.querySelector('#debug-close').onclick = hooks.close;
    root.querySelector('#debug-reset').onclick = () => this.reset();
  }
  reset() {
    const moved = this.fly;
    this.fly = this.noclip = this.god = this.xray = false;
    this.hooks.creative(false);
    this.root.querySelectorAll('[data-debug]').forEach((b) => (b.checked = false));
    this.markers.visible = false;
    if (moved) this.hooks.land();
    this.refresh();
  }
  refresh() {
    const s = this.hooks.state();
    this.root.querySelector('#debug-hour').value = s.hour;
    this.root.querySelector('#debug-weather').value = s.weather;
    this.root.querySelector('#debug-metrics').textContent =
      `${s.fps} FPS · ${s.calls} appels · ${Math.round(s.triangles / 1000)} k triangles\n${s.position.map((v) => v.toFixed(1)).join(' / ')} m`;
    const powers = [
      this.fly && 'VOL',
      this.noclip && 'NOCLIP',
      this.god && 'INVINCIBLE',
      this.xray && 'X-RAY',
    ].filter(Boolean);
    this.badge.textContent = powers.length
      ? `F3 · ${powers.join(' · ')}`
      : s.debugged
        ? 'F3 · PARTIE TEST'
        : '';
  }
  move(player, dt, keys, world, caveField = null) {
    const local = new THREE.Vector3(
      (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') || keys.has('KeyQ') ? 1 : 0),
      (keys.has('Space') ? 1 : 0) - (keys.has('ShiftLeft') || keys.has('ShiftRight') ? 1 : 0),
      (keys.has('KeyS') ? 1 : 0) - (keys.has('KeyW') || keys.has('KeyZ') ? 1 : 0)
    );
    local.normalize().applyAxisAngle(new THREE.Vector3(0, 1, 0), player.yaw);
    const next = player.position.clone().addScaledVector(local, dt * 18);
    next.x = THREE.MathUtils.clamp(next.x, -1449, 1449);
    next.z = THREE.MathUtils.clamp(next.z, -1449, 1449);
    next.y = THREE.MathUtils.clamp(next.y, -20, 1200);
    let fits = this.noclip;
    if (!fits) {
      fits = caveField
        ? caveField.fits(next.x, next.y, next.z, player.radius, player.bodyHeight)
        : next.y >= world.height(next.x, next.z);
      for (const b of player.colliderProvider(next.x, next.z, player.radius + 0.3) || []) {
        const base = b.y ?? b.baseY ?? world.height(b.x, b.z);
        if (next.y + player.bodyHeight <= base || next.y >= base + b.height) continue;
        if (
          b.radius
            ? Math.hypot(next.x - b.x, next.z - b.z) < b.radius + player.radius
            : Math.abs(next.x - b.x) < b.width / 2 + player.radius &&
              Math.abs(next.z - b.z) < b.depth / 2 + player.radius
        )
          fits = false;
      }
    }
    if (fits) player.position.copy(next);
    player.velocity.set(0, 0, 0);
    player.grounded = false;
    player.syncCamera(dt);
  }
  scan(player, caves, inCave) {
    this.markers.visible = this.xray && inCave;
    if (!this.markers.visible) return;
    const key = `${Math.floor(player.position.x / 8)}:${Math.floor(player.position.z / 8)}:${caves.field.revision}:${caves.removed.size}`;
    if (key === this.lastScan) return;
    this.lastScan = key;
    let n = 0;
    const colors = {
      coal: '#929daa',
      copper: '#e39856',
      iron: '#c5e3ed',
      crystal: '#c8a0ff',
      diamond: '#65ffe2',
    };
    const put = (x, y, z, material) => {
      if (n >= 640) return;
      this.dummy.position.set(x, y, z);
      this.dummy.updateMatrix();
      this.markers.setMatrixAt(n, this.dummy.matrix);
      this.markers.setColorAt(n++, new THREE.Color(colors[material]));
    };
    for (const crystal of caves.crystals)
      if (!caves.removed.has(crystal.userData.id)) {
        const p = crystal.userData;
        put(p.x, p.y + 0.7, p.z, 'crystal');
      }
    const f = caves.field;
    for (let x = Math.floor(player.position.x / 3) * 3 - 30; x < player.position.x + 30; x += 3)
      for (let z = Math.floor(player.position.z / 3) * 3 - 30; z < player.position.z + 30; z += 3)
        for (let y = 0; y < 14; y += 3) {
          const material = f.materialAt(x, y, z);
          if (colors[material] && f.density(x, y, z) <= 0) put(x, y, z, material);
        }
    this.markers.count = n;
    this.markers.instanceMatrix.needsUpdate = true;
    if (this.markers.instanceColor) this.markers.instanceColor.needsUpdate = true;
  }
}

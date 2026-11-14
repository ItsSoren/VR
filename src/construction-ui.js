import { itemIcon } from './item-icons.js';
import * as THREE from 'three';
import {
  SURFACES,
  SHAPES,
  TINTS,
  FINISHES,
  normalizePlan,
  recipe,
  costText,
  lockedReason,
} from './building.js';
import { CHAPTERS, journeyStatus } from './journey.js';

export class ConstructionUI {
  constructor(library, hooks) {
    this.library = library;
    this.hooks = hooks;
    this.plan = normalizePlan(hooks.plan);
    this.inspect = null;
    const $ = (id) => document.getElementById(id);
    this.$ = $;
    const options = (root, items, key) => {
      for (const item of items) {
        const b = document.createElement('button');
        b.type = 'button';
        b.dataset.choice = key;
        b.dataset.value = item.id;
        b.title = item.label;
        if (key === 'tint') {
          b.style.backgroundColor = item.color;
          b.setAttribute('aria-label', item.label);
        } else
          b.innerHTML =
            itemIcon(key === 'shape' ? item.id : 'block', item.color) +
            `<span>${item.label}</span>`;
        b.addEventListener('click', () => {
          this.plan = normalizePlan({ ...this.plan, [key]: item.id });
          hooks.select(this.plan);
          this.refresh();
        });
        $(root).append(b);
      }
    };
    options('shape-list', SHAPES, 'shape');
    options('surface-list', SURFACES, 'material');
    options('tint-list', TINTS, 'tint');
    options('finish-list', FINISHES, 'finish');
    $('build-size').addEventListener('change', (e) => {
      this.plan = normalizePlan({ ...this.plan, size: Number(e.target.value) });
      hooks.select(this.plan);
      this.refresh();
    });
    $('rotate-piece').addEventListener('click', () => this.rotate());
    $('mirror-piece').addEventListener('click', () => {
      this.plan.mirror = !this.plan.mirror;
      hooks.select(this.plan);
      this.refresh();
    });
    $('copy-piece').addEventListener('click', () => {
      if (this.inspect) {
        this.plan = normalizePlan(this.inspect);
        hooks.select(this.plan);
        this.refresh();
      }
    });
    $('apply-piece').addEventListener('click', () => {
      if (this.inspect && hooks.edit(this.inspect, this.plan)) {
        this.inspect = hooks.target(this.inspect.key);
        this.refresh();
      }
    });
    $('eat-berries').addEventListener('click', () => hooks.eat());
    $('home-return').addEventListener('click', () => hooks.home());
    $('creative-build').addEventListener('change', (e) => {
      hooks.creative(e.target.checked);
      this.refresh();
    });
    for (const name of ['cabin', 'terrace', 'workshop'])
      $('blueprint-' + name).addEventListener('click', () => hooks.blueprint(name));
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#213a32');
    this.camera = new THREE.PerspectiveCamera(36, 1, 0.01, 20);
    this.camera.position.set(2, 1.8, 2.7);
    this.scene.add(new THREE.HemisphereLight('#f3ecd8', '#6c7d65', 3));
    const light = new THREE.DirectionalLight('#ffe2ba', 4);
    light.position.set(2, 4, 3);
    this.scene.add(light);
    this.renderer = new THREE.WebGLRenderer({
      canvas: $('piece-preview'),
      antialias: true,
      alpha: false,
    });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    this.renderer.setSize(260, 180, false);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.refresh();
  }
  rotate() {
    this.plan.rotation = (this.plan.rotation + 1) % 4;
    this.hooks.select(this.plan);
    this.refresh();
  }
  set(plan) {
    this.plan = normalizePlan(plan);
    this.refresh();
  }
  open(target) {
    this.inspect = target || null;
    this.refresh();
  }
  refresh() {
    const { $, plan } = this,
      state = this.hooks.state(),
      reason = state.journey.creative ? '' : lockedReason(plan, state.journey);
    document.querySelectorAll('[data-choice]').forEach((b) => {
      const key = b.dataset.choice;
      b.classList.toggle('selected', plan[key] === b.dataset.value);
      if (['material', 'shape'].includes(key)) {
        const p = normalizePlan({ ...plan, [key]: b.dataset.value });
        const locked = !!lockedReason(p, state.journey) && !state.journey.creative;
        b.classList.toggle('locked', locked);
        b.setAttribute('aria-pressed', String(plan[key] === b.dataset.value));
      }
    });
    $('piece-name').textContent =
      `${SHAPES.find((s) => s.id === plan.shape).label} · ${SURFACES.find((s) => s.id === plan.material).label}`;
    $('favorite-label').textContent =
      `Palette mémorisée dans la case ${Math.max(3, state.hotbarSlot) + 1}.`;
    $('piece-cost').textContent = state.journey.creative
      ? 'Construction libre'
      : costText(recipe(plan));
    $('piece-lock').textContent = reason || 'Disponible · clic droit pour poser en jeu';
    $('build-size').value = plan.size;
    $('rotation-label').textContent = `${plan.rotation * 90}°${plan.mirror ? ' · inversée' : ''}`;
    $('mirror-piece').classList.toggle('selected', plan.mirror);
    $('copy-piece').disabled = !this.inspect;
    $('apply-piece').disabled = !this.inspect;
    $('edit-name').textContent = this.inspect
      ? 'Cible : ' + SHAPES.find((s) => s.id === this.inspect.shape).label
      : 'Visez une pièce avant d’ouvrir le catalogue pour la modifier.';
    $('build-resources').textContent =
      `Bois ${state.inventory.wood} · Pierre ${state.inventory.stone} · Terre ${state.inventory.clay} · Charbon ${state.inventory.coal} · Cuivre ${state.inventory.copper} · Fer ${state.inventory.iron} · Cristaux ${state.inventory.crystal} · Diamants ${state.inventory.diamond}`;
    $('creative-build').checked = !!state.journey.creative;
    $('creative-build').disabled = state.journey.chapter < CHAPTERS.length;
    this.model && this.scene.remove(this.model);
    this.model = new THREE.Mesh(this.library.geometry(plan), this.library.material(plan));
    const accent = this.library.accent(plan);
    if (accent) this.model.add(new THREE.Mesh(accent.geometry, accent.material));
    this.model.rotation.y = (plan.rotation * Math.PI) / 2 + 0.3;
    this.model.scale.setScalar(Math.min(plan.size, 1.2));
    this.scene.add(this.model);
    const box = new THREE.Box3().setFromObject(this.model),
      center = box.getCenter(new THREE.Vector3());
    this.camera.lookAt(center);
    this.renderer.render(this.scene, this.camera);
  }
  journal() {
    const s = this.hooks.state(),
      status = journeyStatus(s.journey, s.blocks, s.pickTier),
      $ = this.$;
    $('chapter-title').textContent = status.title;
    $('chapter-detail').textContent = status.detail;
    $('chapter-number').textContent = `${Math.min(5, s.journey.chapter + 1)} / 5`;
    const list = $('chapter-checks');
    list.replaceChildren();
    for (const [label, n, goal] of status.conditions) {
      const li = document.createElement('li');
      li.className = n >= goal ? 'done' : '';
      li.textContent = `${n >= goal ? '✓' : '○'} ${label} · ${Math.min(goal, Math.max(0, n || 0))} / ${goal}`;
      list.append(li);
    }
    $('chapter-reward').textContent = CHAPTERS[s.journey.chapter]
      ? 'Récompense : ' + CHAPTERS[s.journey.chapter].rewardText
      : 'Toutes les étapes sont terminées. La construction libre est disponible dans le catalogue.';
    $('journal-resources').textContent =
      `${status.pieces} pièces · ${status.materials} matériaux · ${status.roof ? 'refuge construit' : 'refuge à bâtir'}`;
    $('home-return').disabled = !s.journey.home;
    $('eat-berries').disabled = s.inventory.berries < 1 || s.journey.energy >= 100;
    $('journal-energy').textContent =
      `Énergie ${Math.round(s.journey.energy)} / 100 · Baies ${s.inventory.berries}`;
  }
}

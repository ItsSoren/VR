import { equipmentRecipe, weapon } from './adventure.js';
import { upgradeCost } from './mining.js';

import { ITEMS } from './items.js';
export { ITEMS } from './items.js';
import { itemIcon as icon } from './item-icons.js';
import { TORCH_RECIPE } from './torches.js';
export function inventoryStacks(inventory, order = Object.keys(ITEMS)) {
  const result = [];
  for (const key of [...new Set([...order, ...Object.keys(ITEMS)])]) {
    if (!ITEMS[key]) continue;
    let n = Math.min(10000, Math.max(0, Math.floor(Number(inventory[key]) || 0)));
    while (n > 0) {
      const count = Math.min(64, n);
      result.push({ key, count });
      n -= count;
    }
  }
  return result;
}
export function craftInfo(state, type) {
  const cost =
    type === 'torch'
      ? TORCH_RECIPE
      : type === 'pick'
        ? upgradeCost(state.pickTier)
        : equipmentRecipe(state.v, type);
  const station = ['pick', 'torch'].includes(type)
    ? null
    : type === 'armor' && state.v.armor === 0
      ? 'workbench'
      : 'forge';
  const missing = cost
    ? Object.entries(cost).filter(([k, n]) => (state.inventory[k] || 0) < n)
    : [];
  return {
    cost,
    station,
    missing,
    ready: !!cost && (!station || !!state.j.stations[station]) && missing.length === 0,
  };
}
export class InventoryUI {
  constructor(hooks) {
    this.hooks = hooks;
    this.type = 'pick';
    this.selected = 'wood';
    this.page = 0;
    this.order = Object.keys(ITEMS);
    try {
      const order = JSON.parse(localStorage.getItem('vallon-bag-order'));
      if (Array.isArray(order)) this.order = order.filter((k) => ITEMS[k]);
    } catch {}
    this.root = document.getElementById('inventory-workspace');
    this.root.innerHTML = `<div class="bag-layout"><section><div class="bag-heading"><h3>Votre sac</h3><button id="bag-sort">Trier</button></div><div id="bag-grid" class="bag-grid" aria-label="Ressources, piles de 64"></div><div class="bag-pager"><button id="bag-prev" aria-label="Page précédente">←</button><span id="bag-page"></span><button id="bag-next" aria-label="Page suivante">→</button></div><div id="bag-detail" class="bag-detail" aria-live="polite"></div><button id="bag-eat">Manger</button><p class="bag-hint">Piles de 64 · Glissez une ressource sur une autre pour les ranger.</p><h3>Équipement</h3><div id="bag-equipment"></div></section><section class="craft-panel"><div class="eyebrow">LIVRE DE RECETTES</div><h3>Fabriquer</h3><div class="craft-tabs"><button data-craft="pick">Pioche</button><button data-craft="sword">Épée</button><button data-craft="armor">Armure</button><button data-craft="meal">Cuisine</button><button data-craft="torch">Torches</button></div><strong id="craft-title"></strong><p id="craft-station"></p><div id="craft-ingredients" class="craft-ingredients" aria-label="Ingrédients de la recette"></div><div id="craft-status" role="status"></div><button id="bag-craft" class="primary">Fabriquer <span>→</span></button><button id="bag-build">Blocs, mobilier & établi <span>↗</span></button><p class="bag-hint">Le catalogue permet de choisir forme, matière et couleur. Les matériaux sont consommés à la pose.</p></section></div>`;
    const $ = (id) => this.root.querySelector('#' + id);
    this.$ = $;
    this.root.querySelectorAll('[data-craft]').forEach(
      (b) =>
        (b.onclick = () => {
          this.type = b.dataset.craft;
          this.refresh();
        })
    );
    $('bag-craft').onclick = () => {
      if (!craftInfo(hooks.state(), this.type).ready) return;
      this.type === 'pick' ? hooks.upgrade() : hooks.craft(this.type);
      this.refresh();
    };
    $('bag-eat').onclick = () => {
      hooks.eat(this.selected);
      this.refresh();
    };
    $('bag-build').onclick = hooks.build;
    $('bag-prev').onclick = () => {
      this.page--;
      this.refresh();
    };
    $('bag-next').onclick = () => {
      this.page++;
      this.refresh();
    };
    $('bag-sort').onclick = () => {
      this.order = Object.keys(ITEMS);
      this.page = 0;
      this.store();
      this.refresh();
    };
  }
  store() {
    try {
      localStorage.setItem('vallon-bag-order', JSON.stringify(this.order));
    } catch {}
  }
  refresh() {
    const s = this.hooks.state(),
      $ = this.$,
      stacks = inventoryStacks(s.inventory, this.order),
      pages = Math.max(1, Math.ceil(stacks.length / 27));
    this.page = Math.max(0, Math.min(pages - 1, this.page));
    $('bag-grid').replaceChildren();
    for (let i = 0; i < 27; i++) {
      const stack = stacks[this.page * 27 + i],
        b = document.createElement('button');
      b.className = 'bag-slot';
      if (stack) {
        const { key, count } = stack;
        b.dataset.item = key;
        b.draggable = true;
        b.title = ITEMS[key][0] + ' × ' + count;
        b.setAttribute('aria-label', b.title);
        b.innerHTML = icon(key) + `<small>${ITEMS[key][0]}</small><b>${count}</b>`;
        b.classList.toggle('selected', key === this.selected);
        b.onclick = () => {
          this.selected = key;
          this.refresh();
        };
        b.ondragstart = (e) => e.dataTransfer.setData('text/plain', key);
        b.ondragover = (e) => e.preventDefault();
        b.ondrop = (e) => {
          e.preventDefault();
          const source = e.dataTransfer.getData('text/plain');
          if (!ITEMS[source]) return;
          this.order = [...new Set([...this.order, ...Object.keys(ITEMS)])];
          const a = this.order.indexOf(source),
            c = this.order.indexOf(key);
          [this.order[a], this.order[c]] = [this.order[c], this.order[a]];
          this.store();
          this.refresh();
        };
      } else {
        b.disabled = true;
        b.setAttribute('aria-label', 'Case vide');
      }
      $('bag-grid').append(b);
    }
    $('bag-page').textContent = `${this.page + 1} / ${pages} · ${stacks.length} piles`;
    $('bag-prev').disabled = this.page === 0;
    $('bag-next').disabled = this.page === pages - 1;
    const item = ITEMS[this.selected];
    $('bag-detail').textContent =
      `${item[0]} · ${s.inventory[this.selected] || 0} au total. ${item[2]}`;
    $('bag-eat').hidden = !['berries', 'meal'].includes(this.selected);
    $('bag-eat').disabled = !s.inventory[this.selected] || (s.v.health >= 100 && s.j.energy >= 100);
    $('bag-equipment').innerHTML =
      icon('shovel') +
      icon('pick', undefined, s.pickTier) +
      icon('sword') +
      icon('armor') +
      `Pelle · Pioche ${s.pickTier} · ${weapon(s.v).label} · ${['Sans armure', 'Veste de laine', 'Armure de fer'][s.v.armor]}`;
    const info = craftInfo(s, this.type);
    this.root
      .querySelectorAll('[data-craft]')
      .forEach((b) => b.classList.toggle('selected', b.dataset.craft === this.type));
    $('craft-title').textContent = {
      pick: `Pioche niveau ${Math.min(4, s.pickTier + 1)}`,
      sword: s.v.sword === 1 ? 'Épée de fer' : 'Épée de cristal',
      armor: s.v.armor === 0 ? 'Veste de laine' : 'Armure de fer',
      meal: '2 rations cuites',
      torch: '4 torches',
    }[this.type];
    $('craft-station').textContent = info.station
      ? (info.station === 'workbench' ? 'Établi' : 'Forge allumée') +
        (s.j.stations[info.station] ? ' · disponible' : ' · à débloquer avec V')
      : 'Fabrication dans le sac';
    $('craft-ingredients').replaceChildren();
    for (const [key, n] of Object.entries(info.cost || {})) {
      const cell = document.createElement('div');
      cell.className = 'ingredient' + ((s.inventory[key] || 0) < n ? ' missing' : '');
      cell.innerHTML =
        icon(key) + `<strong>${ITEMS[key][0]}</strong><span>${s.inventory[key] || 0} / ${n}</span>`;
      $('craft-ingredients').append(cell);
    }
    $('craft-status').textContent = !info.cost
      ? 'Niveau maximal atteint.'
      : info.station && !s.j.stations[info.station]
        ? 'Construisez puis utilisez la station requise.'
        : info.missing.length
          ? 'Récoltez les ingrédients manquants.'
          : 'Tous les ingrédients sont prêts.';
    $('bag-craft').disabled = !info.ready;
  }
}

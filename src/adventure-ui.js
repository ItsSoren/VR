import { ACHIEVEMENTS, SPECIES, weapon, equipmentRecipe } from './adventure.js';

const labels = {
  wood: 'bois',
  stone: 'pierre',
  wool: 'laine',
  meat: 'viande',
  meal: 'rations',
  iron: 'fer',
  coal: 'charbon',
  crystal: 'cristaux',
  berries: 'baies',
  copper: 'cuivre',
  clay: 'terre',
  diamond: 'diamants',
};
export const adventureCost = (cost) =>
  cost
    ? Object.entries(cost)
        .map(([k, n]) => `${n} ${labels[k] || k}`)
        .join(' + ')
    : 'Maximum atteint';
export class AdventureUI {
  constructor(hooks) {
    this.hooks = hooks;
    this.$ = (id) => document.getElementById(id);
    this.rows = new Map();
    for (const a of ACHIEVEMENTS) {
      const li = document.createElement('li'),
        icon = document.createElement('span'),
        text = document.createElement('div'),
        title = document.createElement('strong'),
        detail = document.createElement('small'),
        reward = document.createElement('em');
      icon.textContent = '◇';
      title.textContent = a.title;
      detail.textContent = a.detail;
      reward.textContent = 'Récompense : ' + adventureCost(a.reward);
      text.append(title, detail, reward);
      li.append(icon, text);
      this.$('achievement-list').append(li);
      this.rows.set(a.id, { li, icon });
    }
    for (const [id, s] of Object.entries(SPECIES)) {
      const row = document.createElement('article'),
        h = document.createElement('h3'),
        p = document.createElement('p');
      h.textContent = s.label;
      p.textContent =
        s.description ||
        {
          sheep:
            'Paisible. Une baie donne 2 laines toutes les 3 minutes. Trois repas espacés de 30 s établissent sa confiance.',
          deer: 'Timide. La course le fait fuir ; marchez et offrez trois baies, à 30 s d’intervalle. Il vous accompagne ensuite.',
          rabbit:
            'Vif et farouche. Approchez doucement et nourrissez-le avec V. Un animal apprivoisé suit son ami à proximité.',
          boar: 'Territorial. Il avertit, prépare sa charge pendant 1,05 s, puis fonce tout droit. Esquivez sur le côté et frappez pendant sa récupération.',
          wolf: 'Sort la nuit. Il poursuit, annonce sa morsure pendant 0,8 s, puis récupère 1,8 s. Les lanternes et les phares actifs le repoussent.',
          sentinel:
            'Garde les grottes. Son attaque de zone est annoncée pendant 1,3 s. Sortez du cercle de 3 m ou parez, puis profitez des 2,7 s de récupération.',
        }[id];
      row.append(h, p);
      row.dataset.species = id;
      this.$('bestiary-list').append(row);
    }
    for (const type of ['sword', 'armor', 'meal'])
      this.$('craft-' + type).addEventListener('click', () => hooks.craft(type));
    this.$('eat-meal').addEventListener('click', () => hooks.eat());
    for (const b of document.querySelectorAll('[data-adventure-tab]'))
      b.addEventListener('click', () => {
        for (const pane of document.querySelectorAll('[data-adventure-pane]'))
          pane.hidden = pane.dataset.adventurePane !== b.dataset.adventureTab;
        for (const button of document.querySelectorAll('[data-adventure-tab]'))
          button.classList.toggle('selected', button === b);
      });
  }
  refresh() {
    const { v, inventory, j } = this.hooks.state(),
      $ = this.$;
    let count = 0;
    for (const [id, { li, icon }] of this.rows) {
      const done = Object.hasOwn(v.achieved, id);
      li.classList.toggle('done', done);
      icon.textContent = done ? '✓' : '◇';
      if (done) count++;
    }
    $('achievement-count').textContent =
      `${count} / ${ACHIEVEMENTS.length} succès · récompenses reçues automatiquement`;
    $('equipment-state').textContent =
      `${weapon(v).label} · ${['Sans protection', 'Veste de laine · −20 % dégâts', 'Armure de fer · −35 % dégâts'][v.armor]}`;
    $('adventure-resources').textContent =
      `Laine ${inventory.wool || 0} · Viande ${inventory.meat || 0} · Rations ${inventory.meal || 0} · Fer ${inventory.iron} · Cristaux ${inventory.crystal}`;
    for (const type of ['sword', 'armor', 'meal']) {
      const cost = equipmentRecipe(v, type),
        button = $('craft-' + type),
        station = type === 'armor' && v.armor === 0 ? j.stations.workbench : j.stations.forge;
      button.textContent =
        { sword: 'Améliorer la lame', armor: 'Fabriquer la protection', meal: 'Cuire 2 rations' }[
          type
        ] +
        ' · ' +
        adventureCost(cost);
      button.disabled =
        !cost || !station || Object.entries(cost).some(([k, n]) => (inventory[k] || 0) < n);
    }
    $('eat-meal').disabled = !inventory.meal || (v.health >= 100 && j.energy >= 100);
    for (const row of document.querySelectorAll('[data-species]'))
      row.classList.toggle('observed', v.stats.seen.includes(row.dataset.species));
  }
  hud(combat) {
    const { v, inventory } = this.hooks.state(),
      $ = this.$;
    $('health-value').textContent = `${Math.ceil(v.health)} / 100`;
    $('health-fill').style.width = v.health + '%';
    $('health-bar').classList.toggle('low', v.health < 30);
    $('combat-toggle').classList.toggle('selected', combat);
    $('weapon-label').textContent = combat ? weapon(v).label : 'Outils';
    $('dodge-ready').textContent = v.dodgeCd > 0 ? `${v.dodgeCd.toFixed(1)} s` : 'Prête';
    $('meal-count').textContent = inventory.meal || 0;
  }
}

// Hand-drawn polygon silhouettes share a grain pattern; no remote asset requests.
const cache = new Map();
const colors = {
  wood: '#aa8257',
  stone: '#9ba6a1',
  clay: '#af7959',
  berries: '#c34f60',
  wool: '#e4dfca',
  meat: '#a96856',
  meal: '#c19b55',
  coal: '#48505a',
  copper: '#c18452',
  iron: '#b9c9d2',
  crystal: '#af91df',
  diamond: '#91d9d0',
};
const paths = {
  hand: 'M15 51 7 31 13 27 20 35 20 13 26 11 27 32 28 8 34 9 34 32 36 14 42 16 40 35 44 23 49 25 47 46 39 54Z',
  shovel: 'M14 50 21 54 40 24 47 21 52 9 35 7 29 17 35 22Z',
  pick: 'M16 54 23 55 40 25 35 20Z M8 19 19 10 32 8 46 12 56 29 42 20 30 17 15 21Z',
  sword: 'M9 51 17 57 27 44 34 48 39 42 32 36 54 10 51 3 43 6 24 29 18 24 12 30 19 37Z',
  armor: 'M20 7 28 14 36 14 44 7 58 21 49 32 44 28 45 54 19 54 20 28 15 32 6 21Z',
  wood: 'M12 20 25 9 53 17 52 45 39 55 11 47Z',
  stone: 'M7 39 16 15 38 9 56 28 49 50 25 55Z',
  clay: 'M8 43 13 22 32 12 52 25 56 45 32 53Z',
  berries:
    'M9 28 19 21 28 29 24 43 13 44Z M28 34 39 27 51 35 47 49 33 51Z M23 17 34 9 44 18 40 31 28 32Z',
  wool: 'M10 22 19 13 27 17 37 10 48 19 46 27 55 34 47 46 35 47 27 54 16 45 9 43 7 32Z',
  meat: 'M7 36 13 17 30 9 49 17 54 34 44 49 25 51 13 44Z',
  meal: 'M8 31 13 18 34 10 50 17 55 33 48 49 16 49Z',
  coal: 'M8 41 12 24 28 10 48 16 56 36 46 51 23 54Z',
  copper: 'M9 27 39 15 55 25 55 42 26 53 9 43Z',
  iron: 'M9 27 39 15 55 25 55 42 26 53 9 43Z',
  crystal: 'M11 41 18 20 24 19 27 6 36 9 41 26 48 18 55 41 36 56Z',
  diamond: 'M6 25 19 11 45 11 58 25 32 55Z',
  torch: 'M24 58 32 59 38 25 29 23Z M24 29 20 18 27 7 30 14 35 3 43 18 39 31Z',
  block: 'M8 20 32 7 56 20 56 47 32 60 8 47Z',
  slab: 'M8 35 32 23 56 35 56 46 32 58 8 46Z',
  stairs: 'M8 45 8 32 25 32 25 20 42 20 42 8 55 8 55 50 31 59Z',
  roof: 'M5 41 30 10 59 41 55 48 30 24 9 48Z',
  door: 'M18 7 48 12 48 56 18 51Z',
  arch: 'M9 55 9 27 20 11 44 11 55 27 55 55 44 55 44 30 37 21 27 21 20 30 20 55Z',
  fence:
    'M10 12 16 7 23 12 23 54 10 54Z M41 12 48 7 55 12 55 54 41 54Z M8 20 57 20 57 27 8 27Z M8 37 57 37 57 44 8 44Z',
  bench: 'M8 27 54 27 56 36 51 39 51 54 44 54 44 40 20 40 20 54 13 54 13 38 8 36Z',
  table: 'M5 21 32 8 58 21 58 30 50 32 50 54 44 54 44 35 20 35 20 54 14 54 14 32 5 30Z',
  lantern: 'M21 8 43 8 43 15 49 20 47 51 17 51 15 20 21 15Z',
  forge: 'M7 25 17 12 49 12 57 25 57 53 7 53Z',
  beacon: 'M12 55 19 45 27 45 27 29 21 18 32 4 43 18 37 29 37 45 45 45 53 55Z',
};
const details = {
  wood: 'M25 11v34l14 8M13 23l10 4m-10 9 10 3m21-14 6 2',
  stone: 'm16 15 12 18-3 22m3-22 28-5m-28 5 10-24',
  berries: 'm18 21 7-7 7 6m-8 12 7-8',
  meat: 'M18 36c-9-18 17-27 24-12s-13 27-24 12Z',
  diamond: 'm6 25 26 30 26-30H6m13-14 13 44 13-44',
  crystal: 'm27 6 6 37 3 13m-18-36 15 23 15-25',
  block: 'M8 20 32 34 56 20M32 34v26',
  torch: 'm29 23 9 2m-10 6 9 2m-9 11 7 1',
};
export function itemIcon(key, color = colors[key], tier = 2) {
  color = /^#[0-9a-f]{6}$/i.test(color || '') ? color : '#bbbdaf';
  if (key === 'pick') color = { 2: '#929f9c', 3: '#b6c9d3', 4: '#b396de' }[tier] || color;
  const id = `${key}:${color}:${tier}`;
  if (!cache.has(id)) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><pattern id="grain" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M1 2h3m1 4h2" stroke="#fff" stroke-opacity=".18"/><path d="M0 7h3m2-5h2" stroke="#000" stroke-opacity=".17"/></pattern><linearGradient id="shade" x2=".7" y2="1"><stop stop-color="#fff" stop-opacity=".3"/><stop offset="1" stop-color="#000" stop-opacity=".35"/></linearGradient></defs><path d="${paths[key] || paths.block}" fill="${color}" stroke="#1d2927" stroke-width="1.5" stroke-linejoin="round"/><path d="${paths[key] || paths.block}" fill="url(#shade)"/><path d="${paths[key] || paths.block}" fill="url(#grain)"/><path d="${details[key] || 'M16 24l12 7 16-8m-16 8 2 16'}" fill="none" stroke="#e7e8d0" stroke-opacity=".4" stroke-width="1.5"/></svg>`;
    cache.set(id, `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`);
  }
  return `<img class="item-icon" src="${cache.get(id)}" alt="" aria-hidden="true" draggable="false">`;
}

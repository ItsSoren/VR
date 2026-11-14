const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const smooth = (a, b, x) => {
  const t = clamp((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const blend = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);

/** Continuous values, including across midnight; mornings are cool, evenings warm. */
export function solarEnvironment(hour) {
  const h = ((hour % 24) + 24) % 24;
  const day = smooth(4.7, 7.5, h) * (1 - smooth(16.7, 19.8, h));
  const dawn = Math.exp(-(((h - 6.1) / 1.2) ** 2));
  const dusk = Math.exp(-(((h - 18.1) / 1.45) ** 2));
  let sun = blend([0.48, 0.63, 1], [1, 0.97, 0.9], day);
  sun = blend(sun, [0.64, 0.8, 1], dawn * 0.6);
  sun = blend(sun, [1, 0.4, 0.12], dusk * 0.85);
  let fog = blend([0.035, 0.065, 0.115], [0.43, 0.6, 0.76], day);
  fog = blend(fog, [0.35, 0.49, 0.65], dawn * 0.55);
  fog = blend(fog, [0.6, 0.32, 0.18], dusk * 0.48);
  return {
    hour: h,
    day,
    dawn,
    dusk,
    sun,
    fog,
    fogDensity: 0.00053 + (1 - day) * 0.00065 + dawn * 0.00022,
  };
}

export const WEATHER = {
  clear: { label: 'Ciel clair', cover: 0.25, rain: 0, fog: 0, wind: 0.18 },
  overcast: { label: 'Ciel couvert', cover: 0.84, rain: 0, fog: 0.22, wind: 0.45 },
  rain: { label: 'Pluie', cover: 0.94, rain: 0.65, fog: 0.5, wind: 0.65 },
  storm: { label: 'Orage', cover: 1, rain: 1, fog: 0.72, wind: 1 },
  mist: { label: 'Brume', cover: 0.38, rain: 0, fog: 1, wind: 0.08 },
};

/** Active-play time only. Targets blend for 20 s; RNG and in-flight transitions persist. */
export class WeatherController {
  constructor(seed, saved = {}) {
    this.seed = (Number(saved.seed) || Number(seed) || 1427) >>> 0;
    this.clock = Math.max(0, Number(saved.clock) || 0);
    this.type = WEATHER[saved.type] ? saved.type : 'clear';
    this.age = Math.max(0, Number(saved.age) || 0);
    this.duration = Math.max(90, Number(saved.duration) || 210);
    this.values = { ...WEATHER[this.type] };
    for (const key of ['cover', 'rain', 'fog', 'wind'])
      if (Number.isFinite(saved.values?.[key])) this.values[key] = clamp(saved.values[key]);
    this.flash = 0;
    this.lightningIn = Math.max(1, Number(saved.lightningIn) || 9);
    this.automatic = saved.automatic !== false;
  }
  random() {
    this.seed = (Math.imul(this.seed, 1664525) + 1013904223) >>> 0;
    return this.seed / 4294967296;
  }
  set(type) {
    if (!WEATHER[type]) return false;
    this.type = type;
    this.values.label = WEATHER[type].label;
    this.age = 0;
    this.duration = 150 + this.random() * 210;
    return true;
  }
  update(dt, playing = true) {
    if (!playing || !Number.isFinite(dt) || dt <= 0) return this.values;
    dt = Math.min(dt, 0.12);
    this.clock += dt;
    this.age += dt;
    if (this.automatic && this.age >= this.duration) {
      const options =
        this.type === 'clear'
          ? ['overcast', 'mist']
          : this.type === 'overcast'
            ? ['clear', 'rain', 'storm']
            : this.type === 'storm'
              ? ['rain', 'overcast']
              : ['clear', 'overcast'];
      this.set(options[Math.floor(this.random() * options.length)]);
    }
    const target = WEATHER[this.type],
      alpha = 1 - Math.exp(-dt / 6);
    for (const key of ['cover', 'rain', 'fog', 'wind'])
      this.values[key] += (target[key] - this.values[key]) * alpha;
    this.flash = Math.max(0, this.flash - dt * 4);
    if (this.type === 'storm' && this.values.rain > 0.5) {
      this.lightningIn -= dt;
      if (this.lightningIn <= 0) {
        this.flash = 1;
        this.lightningIn = 8 + this.random() * 14;
      }
    }
    return this.values;
  }
  serialize() {
    return {
      seed: this.seed,
      clock: this.clock,
      type: this.type,
      age: this.age,
      duration: this.duration,
      values: { ...this.values },
      lightningIn: this.lightningIn,
      automatic: this.automatic,
    };
  }
}

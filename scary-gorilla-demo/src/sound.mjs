export function createSoundscape(getContext) {
  let context;
  let output;
  let waterGain;
  let lowpass;
  let lastFrequency;
  let lastWater;
  let enabled = true;
  let paused = false;
  const applyVolume=()=>output?.gain.setTargetAtTime(enabled&&!paused?.72:0,context.currentTime,.07);

  function prepare() {
    const current = getContext();
    if (!current || current.state !== 'running') return false;
    if (current === context) return true;
    context = current;
    output = context.createGain();
    output.gain.value = enabled&&!paused ? .72 : 0;
    output.connect(context.destination);
    lowpass = context.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 7000;
    lowpass.connect(output);
    waterGain = context.createGain();
    waterGain.gain.value = 0;
    const filter = context.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 320;
    filter.Q.value = .7;
    filter.connect(waterGain).connect(lowpass);
    const water = context.createBufferSource();
    water.buffer = noise(2.2);
    water.loop = true;
    water.connect(filter);
    water.start();
    lastFrequency = lastWater = undefined;
    return true;
  }

  function noise(seconds) {
    const length = Math.ceil(seconds * context.sampleRate);
    const buffer = context.createBuffer(1, length, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i=0;i<length;i++) data[i] = Math.random()*2-1;
    return buffer;
  }

  function cue(kind, pan=0, distance=0) {
    if (!prepare() || !enabled || paused) return;
    const config = {
      valve: [.36, .17, 260, 94, 'triangle'],
      metal: [1.05, .23, 414, 109, 'sine'],
      shaft: [2.8, .185, 72, 39, 'triangle'],
      creature: [1.35, .26, 104, 39, 'sawtooth'],
      catch: [.62, .24, 390, 66, 'sawtooth'],
      step: [.19, .14, 94, 39, 'triangle'],
      splash: [.37, .11, 223, 80, 'sine'],
      refuge: [.60, .11, 190, 260, 'sine'],
    }[kind];
    const [duration, peak, high, low, type] = config;
    const volume=peak/Math.max(1,.73+distance*.21);
    const t = context.currentTime;
    const oscillator = context.createOscillator();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(high, t);
    oscillator.frequency.exponentialRampToValueAtTime(low, t+duration*.74);
    const envelope = context.createGain();
    envelope.gain.setValueAtTime(.0001, t);
    envelope.gain.exponentialRampToValueAtTime(volume, t+.033);
    envelope.gain.exponentialRampToValueAtTime(.0001, t+duration);
    const stereo = context.createStereoPanner();
    stereo.pan.value = Math.max(-1, Math.min(1, pan));
    oscillator.connect(envelope).connect(stereo).connect(lowpass);
    oscillator.start(t);
    oscillator.stop(t+duration+.02);
    if (kind==='splash'||kind==='creature'||kind==='catch'||kind==='metal'||kind==='shaft') {
      const grit = context.createBufferSource();
      grit.buffer = noise(duration);
      const resonance = context.createBiquadFilter();
      resonance.type = 'bandpass';
      resonance.frequency.value = kind==='shaft'?230:kind==='splash'?760:kind==='metal'?1900:kind==='catch'?980:510;
      const trim = context.createGain();
      trim.gain.setValueAtTime(volume*.7,t);
      trim.gain.exponentialRampToValueAtTime(.0001,t+duration);
      grit.connect(resonance).connect(trim).connect(stereo);
      grit.start(t);
    }
  }

  return {
    cue,
    setEnabled(value) {
      enabled = value;
      applyVolume();
    },
    setPaused(value) {
      if(paused===value)return;
      paused=value;
      applyVolume();
    },
    update(submerged, fraction, draining) {
      if (!prepare()) return;
      const frequency = submerged ? 370 : 7000;
      const water = (submerged?.15:.075)*fraction+(draining?.085:0);
      const t = context.currentTime;
      if (lastFrequency!==frequency) lowpass.frequency.setTargetAtTime(frequency,t,.15);
      if (lastWater===undefined||Math.abs(lastWater-water)>.003||water===0&&lastWater!==0) {
        waterGain.gain.setTargetAtTime(water,t,.16);
        lastWater = water;
      }
      lastFrequency = frequency;
    },
  };
}

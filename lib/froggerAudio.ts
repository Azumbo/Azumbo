export type OscType = OscillatorType;

let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioCtx;
}

export function initAudioSystem() {
  getCtx();
}

export function playSound(freq: number, type: OscType, duration = 0.2, volume = 0.2) {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + duration);
}

export function createExplosionNoise(duration = 0.3) {
  const ctx = getCtx();
  const bufferSize = ctx.sampleRate * duration;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const source = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();

  filter.type = 'highpass';
  filter.frequency.value = 500;
  source.buffer = buffer;
  source.connect(filter).connect(ctx.destination);
  source.start();
}

export function playJumpSound() {
  playSound(523.25, 'square', 0.1, 0.3);
}

export function playCarSound() {
  playSound(110, 'sawtooth', 0.2, 0.2);
}

export function playWaterSplash() {
  createExplosionNoise(0.2);
}
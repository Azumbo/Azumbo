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

export function playFinishSound() {
  playSound(880, 'triangle', 0.5, 0.25);
}

export interface Note {
  freq: number;
  dur?: number;
}

let musicOsc: OscillatorNode | null = null;
let musicPlaying = false;

export function playBackgroundMusic(notes: Note[], tempo = 180) {
  const ctx = getCtx();
  musicPlaying = true;

  const schedule = () => {
    if (!musicPlaying) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    gain.gain.value = 0.05;

    let time = ctx.currentTime;
    notes.forEach((n) => {
      osc.frequency.setValueAtTime(n.freq, time);
      time += (60 / tempo) * (n.dur || 1);
    });

    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(time);
    musicOsc = osc;
    osc.onended = schedule;
  };

  schedule();
}

export function stopBackgroundMusic() {
  musicPlaying = false;
  if (musicOsc) {
    musicOsc.stop();
    musicOsc.disconnect();
    musicOsc = null;
  }
}

export const froggerTheme: Note[] = [
  { freq: 440, dur: 0.5 },
  { freq: 660, dur: 0.5 },
  { freq: 880, dur: 0.5 },
  { freq: 660, dur: 0.5 },
];


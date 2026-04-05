export type OscType = OscillatorType;

const MUTE_STORAGE_KEY = 'azumbo:audio-muted';

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;

function isMuted() {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(MUTE_STORAGE_KEY) === '1';
}

function getCtx(): AudioContext {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)();
  }
  return audioCtx;
}

function getMasterGain() {
  const ctx = getCtx();
  if (!masterGain) {
    masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
  }
  masterGain.gain.value = isMuted() ? 0 : 1;
  return masterGain;
}

export function initAudioSystem() {
  getCtx();
  getMasterGain();
}

export function playSound(freq: number, type: OscType, duration = 0.2, volume = 0.2) {
  if (isMuted()) return;

  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

  osc.connect(gain);
  gain.connect(getMasterGain());

  osc.start();
  osc.stop(ctx.currentTime + duration);
}

export function createExplosionNoise(duration = 0.3) {
  if (isMuted()) return;

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
  source.connect(filter).connect(getMasterGain());
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
  if (isMuted()) return;

  const ctx = getCtx();
  musicPlaying = true;

  const schedule = () => {
    if (!musicPlaying || isMuted()) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    gain.gain.value = 0.05;

    let time = ctx.currentTime;
    notes.forEach((n) => {
      osc.frequency.setValueAtTime(n.freq, time);
      time += (60 / tempo) * (n.dur || 1);
    });

    osc.connect(gain).connect(getMasterGain());
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

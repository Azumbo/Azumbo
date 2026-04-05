const MUTE_STORAGE_KEY = 'azumbo:audio-muted';

let ambient: HTMLAudioElement | null = null;
let jumpSound: HTMLAudioElement | null = null;
let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let isMuted = false;

const mediaVolumeCache = new WeakMap<HTMLMediaElement, number>();

function readMuteState() {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(MUTE_STORAGE_KEY) === '1';
}

function persistMuteState(value: boolean) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(MUTE_STORAGE_KEY, value ? '1' : '0');
}

function ensureMasterGain(ctx: AudioContext) {
  if (!masterGain) {
    masterGain = ctx.createGain();
    masterGain.gain.value = isMuted ? 0 : 1;
    masterGain.connect(ctx.destination);
  }
  return masterGain;
}

function syncMediaElements() {
  if (typeof document === 'undefined') return;
  document.querySelectorAll('audio, video').forEach((media) => {
    const element = media as HTMLMediaElement;
    if (!mediaVolumeCache.has(element)) {
      mediaVolumeCache.set(element, element.volume || 1);
    }

    if (isMuted) {
      element.muted = true;
      element.volume = 0;
    } else {
      element.muted = false;
      element.volume = mediaVolumeCache.get(element) ?? 1;
    }
  });
}

export function initAudioPreferences() {
  isMuted = readMuteState();
  syncMediaElements();
}

export function playAmbientLoop() {
  if (isMuted) return;
  if (!ambient) {
    ambient = new Audio('/assets/ambient.mp3');
    ambient.loop = true;
  }
  ambient.currentTime = 0;
  ambient.play();
}

export function stopAmbientLoop() {
  ambient?.pause();
}

export function playJumpSound() {
  if (isMuted) return;
  if (!jumpSound) {
    jumpSound = new Audio('/assets/jump.mp3');
  }
  jumpSound.currentTime = 0;
  jumpSound.play();
}

function getCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)();
  }
  return audioCtx;
}

function beep(freq: number, duration = 0.1) {
  if (isMuted) return;
  const ctx = getCtx();
  const output = ensureMasterGain(ctx);
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'square';
  osc.frequency.value = freq;
  osc.connect(gain);
  gain.connect(output);

  osc.start();
  gain.gain.setValueAtTime(0.1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.stop(ctx.currentTime + duration);
}

export function playClickSound() {
  beep(220, 0.07);
}

export function playHoverSound() {
  beep(440, 0.05);
}

export function mute() {
  isMuted = true;
  if (masterGain) {
    masterGain.gain.setValueAtTime(0, getCtx().currentTime);
  }
  ambient?.pause();
  syncMediaElements();
  persistMuteState(true);
}

export function unmute() {
  isMuted = false;
  if (masterGain) {
    masterGain.gain.setValueAtTime(1, getCtx().currentTime);
  }
  syncMediaElements();
  persistMuteState(false);
}

export function toggleMute() {
  if (isMuted) {
    unmute();
  } else {
    mute();
  }
  return isMuted;
}

export function isAudioMuted() {
  return isMuted;
}

initAudioPreferences();

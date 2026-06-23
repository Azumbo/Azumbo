const MUTE_STORAGE_KEY = 'azumbo:audio-muted';
const LEGACY_MUTE_STORAGE_KEY = 'muted';

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let isMuted = true;
let isUnlocked = false;

const mediaVolumeCache = new WeakMap<HTMLMediaElement, number>();
const muteListeners = new Set<(muted: boolean) => void>();

function migrateLegacyMuteKey() {
  if (typeof window === 'undefined') return;
  const legacy = window.localStorage.getItem(LEGACY_MUTE_STORAGE_KEY);
  if (legacy === null) return;
  window.localStorage.setItem(MUTE_STORAGE_KEY, legacy === 'true' ? '1' : '0');
  window.localStorage.removeItem(LEGACY_MUTE_STORAGE_KEY);
}

function readMuteState() {
  if (typeof window === 'undefined') return true;
  migrateLegacyMuteKey();
  const stored = window.localStorage.getItem(MUTE_STORAGE_KEY);
  if (stored === null) return true;
  return stored === '1';
}

function persistMuteState(value: boolean) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(MUTE_STORAGE_KEY, value ? '1' : '0');
}

function notifyMuteListeners() {
  muteListeners.forEach((listener) => listener(isMuted));
}

export function subscribeMuteState(listener: (muted: boolean) => void) {
  muteListeners.add(listener);
  listener(isMuted);
  return () => muteListeners.delete(listener);
}

export function getSharedAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const Ctx = window.AudioContext || (window as Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return null;
    audioCtx = new Ctx();
  }
  return audioCtx;
}

export function getSharedMasterGain(): GainNode | null {
  const ctx = getSharedAudioContext();
  if (!ctx) return null;
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
      element.muted = element.hasAttribute('data-force-muted');
      element.volume = mediaVolumeCache.get(element) ?? 1;
    }
  });
}

export function initAudioPreferences() {
  isMuted = readMuteState();
  getSharedMasterGain();
  syncMediaElements();
}

export function isAudioUnlocked() {
  return isUnlocked;
}

export async function unlockAudio() {
  if (typeof window === 'undefined') return;
  const ctx = getSharedAudioContext();
  if (!ctx) return;
  if (ctx.state === 'suspended') {
    await ctx.resume();
  }
  isUnlocked = true;
}

export function canPlayAudio() {
  return isUnlocked && !isMuted;
}

function beep(freq: number, duration = 0.1, volume = 0.08) {
  if (!canPlayAudio()) return;
  const ctx = getSharedAudioContext();
  const output = getSharedMasterGain();
  if (!ctx || !output) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'square';
  osc.frequency.value = freq;
  osc.connect(gain);
  gain.connect(output);
  osc.start();
  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.stop(ctx.currentTime + duration);
}

export function playJumpSound() {
  beep(523.25, 0.1, 0.12);
}

export function playClickSound() {
  beep(220, 0.07, 0.06);
}

export function mute() {
  isMuted = true;
  const gain = getSharedMasterGain();
  const ctx = getSharedAudioContext();
  if (gain && ctx) {
    gain.gain.setValueAtTime(0, ctx.currentTime);
  }
  syncMediaElements();
  persistMuteState(true);
  notifyMuteListeners();
}

export function unmute() {
  isMuted = false;
  const gain = getSharedMasterGain();
  const ctx = getSharedAudioContext();
  if (gain && ctx) {
    gain.gain.setValueAtTime(1, ctx.currentTime);
  }
  syncMediaElements();
  persistMuteState(false);
  notifyMuteListeners();
}

export async function toggleMute() {
  if (isMuted) {
    await unlockAudio();
    unmute();
  } else {
    mute();
  }
  return isMuted;
}

export function isAudioMuted() {
  return isMuted;
}

if (typeof window !== 'undefined') {
  initAudioPreferences();
}

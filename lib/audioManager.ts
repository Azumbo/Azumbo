let ambient: HTMLAudioElement | null = null;
let jumpSound: HTMLAudioElement | null = null;
let audioCtx: AudioContext | null = null;
let isMuted = false;

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
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioCtx;
}

function beep(freq: number, duration = 0.1) {
  if (isMuted) return;
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'square';
  osc.frequency.value = freq;
  osc.connect(gain);
  gain.connect(ctx.destination);
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
  ambient?.pause();
}

export function unmute() {
  isMuted = false;
}

export function toggleMute() {
  isMuted ? mute() : unmute();
}

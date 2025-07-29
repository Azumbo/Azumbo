let ambient: HTMLAudioElement | null = null;
let jumpSound: HTMLAudioElement | null = null;
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

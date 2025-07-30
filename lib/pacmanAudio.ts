import { playSound } from './froggerAudio';

let wakaInterval: ReturnType<typeof setInterval> | null = null;

export const pacmanAudio = {
  waka: () => {
    if (!wakaInterval) {
      wakaInterval = setInterval(() => {
        playSound(800, 'square', 0.05, 0.2);
      }, 150);
    }
  },
  stopWaka: () => {
    if (wakaInterval) {
      clearInterval(wakaInterval);
      wakaInterval = null;
    }
  },
  powerPellet: () => playSound(523.25, 'sine', 0.5, 0.4),
  ghostEaten: () => {
    [1046.5, 1318.51].forEach((freq) => {
      playSound(freq, 'triangle', 0.2, 0.3);
    });
  },
};

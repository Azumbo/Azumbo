export const sounds = {
  music: new Audio('sounds/music.mp3'),
  collect: new Audio('sounds/collect.mp3'),
  fire: new Audio('sounds/fire.mp3')
};
sounds.music.loop = true;
sounds.music.volume = 0.4;

export function startMusic() {
  sounds.music.play().catch(() => {});
}
export function stopMusic() {
  sounds.music.pause();
  sounds.music.currentTime = 0;
}
export function playSound(name) {
  const s = sounds[name];
  if (s) {
    s.currentTime = 0;
    s.play().catch(() => {});
  }
}

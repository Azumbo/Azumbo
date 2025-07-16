let sounds;

function initSounds() {
  if (!sounds) {
    sounds = {
      music: new Audio('./sounds/music.mp3'),
      collect: new Audio('./sounds/collect.mp3'),
      fire: new Audio('./sounds/fire.mp3')
    };
    sounds.music.loop = true;
    sounds.music.volume = 0.4;
    Object.values(sounds).forEach(a => {
      if (a.setAttribute) a.setAttribute('playsinline', '');
    });
  }
}

function startMusic() {
  initSounds();
  sounds.music.play().catch(() => {});
}
function stopMusic() {
  if (!sounds) return;
  sounds.music.pause();
  sounds.music.currentTime = 0;
}
function playSound(name) {
  initSounds();
  const s = sounds[name];
  if (s) {
    s.currentTime = 0;
    s.play().catch(() => {});
  }
}

window.soundManager = {
  startMusic,
  stopMusic,
  playSound
};

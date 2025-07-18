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
      a.playsInline = a.playsInline ?? true;
    });
  }
}

function startMusic() {
  initSounds();
  console.log('startMusic');
  sounds.music.play().catch(() => {});
}
function stopMusic() {
  if (!sounds) return;
  console.log('stopMusic');
  sounds.music.pause();
  sounds.music.currentTime = 0;
}
function playSound(name) {
  initSounds();
  console.log('playSound', name);
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

function autoStart() {
  window.soundManager.startMusic();
  ['pointerdown','touchstart','click'].forEach(t =>
    document.body.removeEventListener(t, autoStart)
  );
}
['pointerdown','touchstart','click'].forEach(evt => {
  document.body.addEventListener(evt, autoStart, { passive: false });
});

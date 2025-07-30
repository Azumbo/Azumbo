// Simple Cornetto Clicker rewritten with emoji graphics and Web Audio API
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const sounds = {};
let musicSource = null;

// Load audio buffers and fall back to a short beep if files are missing
async function loadSound(name, url) {
  try {
    const res = await fetch(url);
    const buf = await res.arrayBuffer();
    sounds[name] = await audioCtx.decodeAudioData(buf);
  } catch (e) {
    console.warn('Sound load failed for', name, e);
    // Create a very short beep as fallback so the game still has sound
    const dur = 0.2;
    const buffer = audioCtx.createBuffer(1, dur * audioCtx.sampleRate, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = Math.sin(2 * Math.PI * 440 * (i / audioCtx.sampleRate)) * Math.exp(-5 * i / data.length);
    }
    sounds[name] = buffer;
  }
}

function playSound(name, opts = {}) {
  if (!sounds[name]) return null;
  const { loop = false, volume = 1 } = opts;
  const src = audioCtx.createBufferSource();
  src.buffer = sounds[name];
  src.loop = loop;
  const gain = audioCtx.createGain();
  gain.gain.value = volume;
  src.connect(gain).connect(audioCtx.destination);
  src.start();
  return src;
}

function resumeAudio() {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function startMusic() {
  if (!musicSource) {
    resumeAudio();
    musicSource = playSound('music', { loop: true, volume: 0.5 });
  }
}

['pickup', 'fire', 'gameover', 'music'].forEach(n => loadSound(n, `sfx/${n}.mp3`));

const player = document.getElementById('player');
const scoreEl = document.getElementById('score');
const missEl = document.getElementById('misses');
const big = document.getElementById('big');
const over = document.getElementById('gameover');
const overText = document.getElementById('gameover-text');
const restartBtn = document.getElementById('restart');

let score = 0, miss = 0, items = [], running = true;

// Spawn croissants and fire
function spawn() {
  if (!running) return;
  const type = Math.random() < 0.8 ? 'croissant' : 'fire';
  const el = document.createElement('div');
  el.className = 'item';
  el.innerText = type === 'croissant' ? '🥐' : '🔥';
  el.style.left = Math.random() * 90 + '%';
  el.style.top = '-40px';
  document.getElementById('game').appendChild(el);
  items.push({ el, type, y: -40 });
}

// Update loop
function update() {
  items.forEach(it => {
    it.y += 2;
    it.el.style.top = it.y + 'px';
    const rect = it.el.getBoundingClientRect();
    const pRect = player.getBoundingClientRect();
    if (rect.bottom >= pRect.top && rect.left < pRect.right && rect.right > pRect.left) {
      if (it.type === 'croissant') {
        score++;
        playSound('pickup');
        big.style.fontSize = 32 + score / 5 + 'px';
      } else {
        playSound('fire');
        gameOver('Caught fire!');
      }
      remove(it);
    } else if (it.y > window.innerHeight) {
      if (it.type === 'croissant') {
        miss++;
        missEl.innerText = miss;
        if (miss >= 10) gameOver('Too many missed!');
      }
      remove(it);
    }
  });

  scoreEl.innerText = score;
  if (score >= 500) {
    gameOver('Ждём вас в Pucci Pane за самыми свежими круассанами и не только :)');
  }

  if (running) requestAnimationFrame(update);
}

function remove(it) {
  it.el.remove();
  items = items.filter(i => i !== it);
}

function gameOver(msg) {
  if (!running) return;
  running = false;
  if (musicSource) {
    try {
      musicSource.stop();
    } catch (e) {}
    musicSource = null;
  }
  playSound('gameover');
  overText.innerText = msg;
  over.classList.remove('hidden');
}

restartBtn.onclick = () => {
  resumeAudio();
  location.reload();
};

function move(dir) {
  const rect = player.getBoundingClientRect();
  let x = rect.left + dir * 20;
  player.style.left = Math.min(window.innerWidth - 40, Math.max(0, x)) + 'px';
}

// Controls for keyboard and touch
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') move(-1);
  if (e.key === 'ArrowRight') move(1);
  resumeAudio();
  if (!musicSource) startMusic();
});

document.addEventListener('touchstart', e => {
  const x = e.touches[0].clientX;
  move(x < window.innerWidth / 2 ? -1 : 1);
  resumeAudio();
  if (!musicSource) startMusic();
});

setInterval(spawn, 1000);
requestAnimationFrame(update);

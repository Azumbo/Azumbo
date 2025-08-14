// Simple Cornetto Clicker rewritten with emoji graphics and Web Audio API
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const sounds = {};

// Load all required sounds
function loadSound(name, url) {
  fetch(url)
    .then(r => r.arrayBuffer())
    .then(d => audioCtx.decodeAudioData(d))
    .then(b => sounds[name] = b);
}

function playSound(name, loop = false) {
  const src = audioCtx.createBufferSource();
  src.buffer = sounds[name];
  src.loop = loop;
  src.connect(audioCtx.destination);
  src.start(0);
  return src;
}

['pickup','fire','gameover','music'].forEach(n => loadSound(n, `sfx/${n}.mp3`));
let musicSource = null;

const playerEl = document.getElementById('player');
const player = { el: playerEl, x: window.innerWidth / 2, vx: 0, moveSpeed: 600 };
player.x -= playerEl.offsetWidth / 2;
playerEl.style.left = player.x + 'px';
const scoreEl = document.getElementById('score');
const missEl = document.getElementById('misses');
const big = document.getElementById('big');
const over = document.getElementById('gameover');
const overText = document.getElementById('gameover-text');
const restartBtn = document.getElementById('restart');

let score = 0, miss = 0, items = [], running = true;
let lastTime = performance.now();

function startMusic() {
  if (!musicSource) {
    musicSource = playSound('music', true);
  }
}

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
function update(time) {
  const dt = (time - lastTime) / 1000;
  lastTime = time;

  items.forEach(it => {
    it.y += 2;
    it.el.style.top = it.y + 'px';
    const rect = it.el.getBoundingClientRect();
    const pRect = player.el.getBoundingClientRect();
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

  // Unified input axis
  const axis = (window.__input && window.__input.getAxisX) ? window.__input.getAxisX() : 0;
  if (!musicSource && axis !== 0) startMusic();
  const speed = player.moveSpeed || 600; // pixels per second
  player.vx = axis * speed;
  player.x += player.vx * dt;
  player.x = Math.min(window.innerWidth - 40, Math.max(0, player.x));
  player.el.style.left = player.x + 'px';

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
  playSound('gameover');
  overText.innerText = msg;
  over.classList.remove('hidden');
}

restartBtn.onclick = () => location.reload();

setInterval(spawn, 1000);
requestAnimationFrame(update);

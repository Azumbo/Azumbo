console.log("Build: 18.07.2025");

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const gameArea = document.getElementById('game-area');
const player = document.getElementById('player');
const scoreEl = document.getElementById('score');
const missedEl = document.getElementById('missed');
const timerEl = document.getElementById('timer');
const endMessage = document.getElementById('end-message');
const finalCroissant = document.getElementById('final-croissant');

let score = 0;
let missed = 0;
let timer = 0;
let intervalId;
let timerId;
let audioStarted = false;
let objects = [];
let running = false;

const AudioCtx = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioCtx();
let bgGain = audioCtx.createGain();
let bgOsc;
let percussionInterval;

function playWhoosh() {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(800, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.3);
  gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.3);
}

function playVictoryMelody() {
  const notes = [261.63, 392.0, 440.0];
  notes.forEach((f, i) => {
    setTimeout(() => playBeep(f, 200), i * 250);
  });
}

function startBackgroundMusic() {
  if (audioStarted) return;
  audioStarted = true;
  audioCtx.resume();
  bgOsc = audioCtx.createOscillator();
  bgOsc.type = 'sine';
  bgOsc.frequency.value = 110;
  bgOsc.connect(bgGain);
  bgGain.connect(audioCtx.destination);
  bgGain.gain.value = 0.02;
  bgOsc.start();
  percussionInterval = setInterval(() => playBeep(220, 60), 600);
}

function playBeep(freq, duration) {
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.value = freq;
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    gain.gain.value = 0.1;
    osc.start();
    setTimeout(() => {
      osc.stop();
      osc.disconnect();
    }, duration);
  } catch (e) {
    console.error(e);
  }
}

function movePlayer(delta) {
  const areaRect = gameArea.getBoundingClientRect();
  let left = (player.offsetLeft || 0) + delta;
  left = Math.max(0, Math.min(left, gameArea.clientWidth - player.offsetWidth));
  player.style.left = left + 'px';
}

function pointerMove(e) {
  const rect = gameArea.getBoundingClientRect();
  let x = e.clientX - rect.left - player.offsetWidth / 2;
  x = Math.max(0, Math.min(x, gameArea.clientWidth - player.offsetWidth));
  player.style.left = x + 'px';
}

function keyMove(e) {
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    movePlayer(-20);
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    movePlayer(20);
  }
}

function checkCollisions() {
  if (!running) return;
  const playerRect = player.getBoundingClientRect();
  for (let i = objects.length - 1; i >= 0; i--) {
    const obj = objects[i];
    const rect = obj.getBoundingClientRect();
    if (!(rect.right < playerRect.left || rect.left > playerRect.right ||
          rect.bottom < playerRect.top || rect.top > playerRect.bottom)) {
      obj.caught = true;
      if (obj.textContent === '🥐') {
        playBeep(440, 100);
        score++;
        scoreEl.textContent = score;
        obj.remove();
        objects.splice(i, 1);
        if (score >= 500) win();
      } else {
        playBeep(110, 500);
        gameOver();
        return;
      }
    }
  }
  requestAnimationFrame(checkCollisions);
}

function createObject() {
  const span = document.createElement('span');
  span.className = 'object';
  const isFire = Math.random() < 0.1; // 10% fire
  span.textContent = isFire ? '🔥' : '🥐';
  span.style.left = Math.random() * (gameArea.clientWidth - 40) + 'px';
  span.style.animation = 'fall 5s linear forwards';
  gameArea.appendChild(span);

  objects.push(span);
  span.caught = false;

  span.addEventListener('animationend', () => {
    if (!span.caught && span.textContent === '🥐') {
      missed++;
      missedEl.textContent = missed;
      if (missed >= 10) {
        console.log('Missed 10 croissants');
        gameOver();
      }
    }
    span.remove();
    objects = objects.filter(o => o !== span);
  });
}

function gameLoop() {
  createObject();
}

function startTimer() {
  timerId = setInterval(() => {
    timer++;
    timerEl.textContent = timer;
  }, 1000);
}

function startGame() {
  try {
    startBackgroundMusic();
    playWhoosh();
    score = 0;
    missed = 0;
    timer = 0;
    objects = [];
    scoreEl.textContent = score;
    missedEl.textContent = missed;
    timerEl.textContent = timer;
    startScreen.classList.remove('active');
    endScreen.classList.remove('active');
    gameScreen.classList.add('active');
    intervalId = setInterval(gameLoop, 800);
    startTimer();
    running = true;
    player.style.left = (gameArea.clientWidth / 2 - player.offsetWidth / 2) + 'px';
    gameArea.addEventListener('pointermove', pointerMove);
    document.addEventListener('keydown', keyMove);
    requestAnimationFrame(checkCollisions);
  } catch (e) {
    console.error(e);
  }
}

function stopGame() {
  clearInterval(intervalId);
  clearInterval(timerId);
  clearInterval(percussionInterval);
  document.querySelectorAll('.object').forEach(o => o.remove());
  gameArea.removeEventListener('pointermove', pointerMove);
  document.removeEventListener('keydown', keyMove);
  objects = [];
  running = false;
}

function gameOver() {
  console.log('Death');
  stopGame();
  endMessage.textContent = 'Game Over';
  finalCroissant.textContent = '🔥';
  showEnd();
  playBeep(110, 500);
}

function win() {
  console.log('Victory');
  stopGame();
  finalCroissant.textContent = '🥐';
  endMessage.textContent = 'Ждём вас в Pucci Pane за самыми свежими круассанами и не только :)';
  finalCroissant.style.animation = 'grow 3s forwards';
  showEnd();
  playVictoryMelody();
}

function showEnd() {
  gameScreen.classList.remove('active');
  endScreen.classList.add('active');
}

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', () => {
  console.log('Restart');
  startGame();
});
shareBtn.addEventListener('click', () => {
  const url = encodeURIComponent(location.href);
  const text = encodeURIComponent('Я набрал ' + score + ' круассанов в Cornetto Clicker!');
  const shareUrl = 'https://tiktok.com/share?url=' + url + '&text=' + text;
  window.open(shareUrl, '_blank');
});

document.addEventListener('pointerdown', startBackgroundMusic, {once:true});

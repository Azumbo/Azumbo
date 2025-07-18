console.log("Build: 18.07.2025");

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const gameArea = document.getElementById('game-area');
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

const AudioCtx = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioCtx();
let bgGain = audioCtx.createGain();
let bgOsc;

function startBackgroundMusic() {
  if (audioStarted) return;
  audioStarted = true;
  bgOsc = audioCtx.createOscillator();
  bgOsc.type = 'sine';
  bgOsc.frequency.value = 220;
  bgOsc.connect(bgGain);
  bgGain.connect(audioCtx.destination);
  bgGain.gain.value = 0.05;
  bgOsc.start();
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

function createObject() {
  const span = document.createElement('span');
  span.className = 'object';
  const isFire = Math.random() < 0.1; // 10% fire
  span.textContent = isFire ? '🔥' : '🥐';
  span.style.left = Math.random() * (gameArea.clientWidth - 40) + 'px';
  span.style.animation = 'fall 5s linear forwards';
  gameArea.appendChild(span);

  span.addEventListener('pointerdown', e => {
    e.preventDefault();
    if (span.clicked) return;
    span.clicked = true;
    if (span.textContent === '🥐') {
      console.log('Croissant clicked');
      playBeep(440, 100);
      score++;
      scoreEl.textContent = score;
      span.remove();
      if (score >= 500) win();
    } else {
      console.log('Fire clicked');
      playBeep(110, 500);
      gameOver();
    }
  });

  span.addEventListener('animationend', () => {
    if (!span.clicked && span.textContent === '🥐') {
      missed++;
      missedEl.textContent = missed;
      if (missed >= 10) {
        console.log('Missed 10 croissants');
        gameOver();
      }
    }
    span.remove();
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
    score = 0;
    missed = 0;
    timer = 0;
    scoreEl.textContent = score;
    missedEl.textContent = missed;
    timerEl.textContent = timer;
    startScreen.classList.remove('active');
    endScreen.classList.remove('active');
    gameScreen.classList.add('active');
    intervalId = setInterval(gameLoop, 800);
    startTimer();
  } catch (e) {
    console.error(e);
  }
}

function stopGame() {
  clearInterval(intervalId);
  clearInterval(timerId);
  gameArea.innerHTML = '';
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
  playBeep(660, 300);
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

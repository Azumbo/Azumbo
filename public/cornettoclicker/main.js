const playArea = document.getElementById('play-area');
const scoreEl = document.getElementById('score');
const missedEl = document.getElementById('missed');
const timerEl = document.getElementById('timer');
const cup = document.getElementById('cup');

let cupPosition = 50; // percentage
let items = [];
let score = 0;
let missed = 0;
let time = 60;
let spawnInterval;
let timerInterval;

function startGame() {
  spawnInterval = setInterval(generateItem, 800);
  timerInterval = setInterval(() => {
    time--;
    timerEl.textContent = time;
    if (time <= 0) endGame();
  }, 1000);
  requestAnimationFrame(moveItems);
}

document.addEventListener('DOMContentLoaded', startGame);

playArea.addEventListener('mousemove', e => {
  const rect = playArea.getBoundingClientRect();
  cupPosition = ((e.clientX - rect.left) / rect.width) * 100;
  cup.style.left = `${cupPosition}%`;
});

playArea.addEventListener('touchmove', e => {
  e.preventDefault();
  const rect = playArea.getBoundingClientRect();
  const touch = e.touches[0];
  cupPosition = ((touch.clientX - rect.left) / rect.width) * 100;
  cup.style.left = `${cupPosition}%`;
}, { passive: false });

function generateItem() {
  const element = document.createElement('div');
  const isCroissant = Math.random() > 0.3;
  element.className = 'falling-item';
  element.textContent = isCroissant ? '🥐' : '🔥';
  element.style.left = Math.random() * 90 + '%';
  playArea.appendChild(element);
  items.push({ element, y: 0, speed: 2 + Math.random() * 3, isCroissant });
}

function moveItems() {
  items.forEach(item => {
    item.y += item.speed;
    item.element.style.transform = `translateY(${item.y}px)`;

    if (isColliding(cup, item.element)) {
      item.element.remove();
      items = items.filter(i => i !== item);

      if (item.isCroissant) {
        score++;
        scoreEl.textContent = score;
      } else {
        missed++;
        missedEl.textContent = missed;
        time = Math.max(5, time - 3);
        timerEl.textContent = time;
      }
    } else if (item.y > playArea.clientHeight) {
      item.element.remove();
      items = items.filter(i => i !== item);
      missed++;
      missedEl.textContent = missed;
    }
  });

  requestAnimationFrame(moveItems);
}

function isColliding(el1, el2) {
  const rect1 = el1.getBoundingClientRect();
  const rect2 = el2.getBoundingClientRect();
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

function endGame() {
  clearInterval(spawnInterval);
  clearInterval(timerInterval);
  alert('Game over!');
}

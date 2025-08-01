'use client';
import { useEffect, useRef, useState } from 'react';

const audioCtx = typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;

function playSound(freq: number, type: OscillatorType, attack = 0.05, release = 0.1) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  gain.gain.setValueAtTime(0, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + attack);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + attack + release);
  osc.start();
  osc.stop(audioCtx.currentTime + attack + release);
}

function createNoise(ctx: AudioContext) {
  const bufferSize = ctx.sampleRate * 0.2;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  noise.loop = true;
  noise.start();
  return noise;
}

function playLaser(freq: number, dur: number) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.value = freq;
  osc.frequency.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + dur);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + dur);
  osc.start();
  osc.stop(audioCtx.currentTime + dur);
}

const invadersAudio = {
  playerShot: () => playLaser(600, 0.1),
  invaderShot: () => playLaser(300, 0.1),
  explosion: () => {
    if (!audioCtx) return;
    const noise = createNoise(audioCtx);
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 800;
    noise.connect(filter).connect(audioCtx.destination);
    setTimeout(() => noise.stop(), 200);
  },
  move: (step: number) => playSound(100 + step * 50, 'square', 0.05, 0.1),
};

export default function SpaceInvaders() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<'play' | 'win' | 'lose'>('play');
  const [gameKey, setGameKey] = useState(0);

  const resetGame = () => {
    // Incrementing key forces useEffect to recreate game variables
    setGameKey((k) => k + 1);
    setStatus('play');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = Math.min(window.innerWidth * 0.9, 400);
    const height = width * 0.75;
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const player = { x: width / 2 - 15, y: height - 20, w: 30, h: 10 };
    const bullets: { x: number; y: number }[] = [];
    const enemyBullets: { x: number; y: number }[] = [];
    const invaders: { x: number; y: number; w: number; h: number; alive: boolean }[] = [];
    const barriers: { x: number; y: number; w: number; h: number; hp: number }[] = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 8; col++) {
        invaders.push({ x: 40 + col * 30, y: 40 + row * 20, w: 20, h: 10, alive: true });
      }
    }
    for (let i = 0; i < 4; i++) {
      barriers.push({ x: 40 + i * 80, y: height - 60, w: 40, h: 20, hp: 3 });
    }
    let dir = 1;
    let moveTick = 0;
    let lastShot = 0;
    let lastInvShot = 0;
    const keys: Record<string, boolean> = {};

    const keydown = (e: KeyboardEvent) => {
      keys[e.key] = true;
    };
    const keyup = (e: KeyboardEvent) => {
      keys[e.key] = false;
    };
    document.addEventListener('keydown', keydown);
    document.addEventListener('keyup', keyup);

    const update = (dt: number) => {
      if (status !== 'play') return;
      if (keys['ArrowLeft']) player.x -= 150 * dt;
      if (keys['ArrowRight']) player.x += 150 * dt;
      player.x = Math.max(0, Math.min(width - player.w, player.x));

      if (keys['ArrowUp'] && performance.now() - lastShot > 500) {
        bullets.push({ x: player.x + player.w / 2 - 1, y: player.y });
        invadersAudio.playerShot();
        lastShot = performance.now();
      }

      bullets.forEach((b) => (b.y -= 250 * dt));
      for (let i = bullets.length - 1; i >= 0; i--) {
        if (bullets[i].y < 0) bullets.splice(i, 1);
      }

      enemyBullets.forEach((b) => (b.y += 150 * dt));
      for (let i = enemyBullets.length - 1; i >= 0; i--) {
        if (enemyBullets[i].y > height) enemyBullets.splice(i, 1);
      }

      moveTick += dt;
      if (moveTick > 0.5) {
        let edge = false;
        invaders.forEach((inv) => {
          if (!inv.alive) return;
          inv.x += dir * 10;
          if (inv.x < 10 || inv.x + inv.w > width - 10) edge = true;
        });
        invadersAudio.move((Math.random() * 4) | 0);
        if (edge) {
          dir *= -1;
          invaders.forEach((inv) => {
            inv.y += 10;
            if (inv.y + inv.h >= player.y) setStatus('lose');
          });
        }
        moveTick = 0;
      }

      if (performance.now() - lastInvShot > 1000) {
        const shooters = invaders.filter((v) => v.alive);
        if (shooters.length) {
          const inv = shooters[Math.floor(Math.random() * shooters.length)];
          enemyBullets.push({ x: inv.x + inv.w / 2, y: inv.y + inv.h });
          invadersAudio.invaderShot();
        }
        lastInvShot = performance.now();
      }

      // collisions
      bullets.forEach((b, bi) => {
        invaders.forEach((inv) => {
          if (!inv.alive) return;
          if (b.x < inv.x + inv.w && b.x + 2 > inv.x && b.y < inv.y + inv.h && b.y + 6 > inv.y) {
            inv.alive = false;
            bullets.splice(bi, 1);
            invadersAudio.explosion();
          }
        });
        barriers.forEach((bar) => {
          if (b.x < bar.x + bar.w && b.x + 2 > bar.x && b.y < bar.y + bar.h && b.y + 6 > bar.y) {
            bullets.splice(bi, 1);
            bar.hp -= 1;
          }
        });
      });

      enemyBullets.forEach((b, bi) => {
        if (b.x > player.x && b.x < player.x + player.w && b.y > player.y && b.y < player.y + player.h) {
          setStatus('lose');
          enemyBullets.splice(bi, 1);
          invadersAudio.explosion();
        }
        barriers.forEach((bar) => {
          if (b.x < bar.x + bar.w && b.x > bar.x && b.y < bar.y + bar.h && b.y > bar.y) {
            enemyBullets.splice(bi, 1);
            bar.hp -= 1;
          }
        });
      });

      barriers.forEach((bar) => {
        if (bar.hp <= 0) bar.w = 0;
      });

      if (invaders.every((inv) => !inv.alive)) {
        setStatus('win');
      }
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // player
      ctx.fillStyle = '#fff';
      ctx.fillRect(player.x, player.y, player.w, player.h);
      // bullets
      ctx.fillStyle = '#0ff';
      bullets.forEach((b) => ctx.fillRect(b.x, b.y, 2, 6));
      ctx.fillStyle = '#f00';
      enemyBullets.forEach((b) => ctx.fillRect(b.x, b.y, 2, 6));
      // invaders
      ctx.fillStyle = '#0f0';
      invaders.forEach((inv) => {
        if (inv.alive) ctx.fillRect(inv.x, inv.y, inv.w, inv.h);
      });
      // barriers
      ctx.fillStyle = '#999';
      barriers.forEach((bar) => {
        if (bar.w > 0) ctx.fillRect(bar.x, bar.y, bar.w, bar.h);
      });
    };

    let last = performance.now();
    const loop = () => {
      const now = performance.now();
      const dt = (now - last) / 1000;
      last = now;
      update(dt);
      draw();
      if (status === 'play') requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('keydown', keydown);
      document.removeEventListener('keyup', keyup);
    };
  }, [status, gameKey]);

  return (
    <div className="pixel-container">
      <h1>👾 Space Invaders</h1>
      {status === 'play' && (
        <canvas
          ref={canvasRef}
          style={{ background: 'black', imageRendering: 'pixelated' }}
        />
      )}
      {status === 'win' && <p>You win!</p>}
      {status === 'lose' && (
        <>
          <p>Game Over</p>
          <button onClick={resetGame}>Restart</button>
        </>
      )}
    </div>
  );
}

'use client';
import { useEffect, useRef, useState } from 'react';
import {
  initAudioSystem,
  playJumpSound,
  playCarSound,
  playWaterSplash,
  playFinishSound,
  playBackgroundMusic,
  stopBackgroundMusic,
  froggerTheme,
} from '../../lib/froggerAudio';

export default function FroggerPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<'play' | 'win'>('play');
  const [homes, setHomes] = useState([false, false, false]);

  useEffect(() => {
    if (status === 'play') {
      playBackgroundMusic(froggerTheme);
    } else {
      stopBackgroundMusic();
    }
    return () => {
      stopBackgroundMusic();
    };
  }, [status]);

  useEffect(() => {
    initAudioSystem();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const tile = 40;
    const cols = 10;
    const rows = 8;
    canvas.width = cols * tile;
    canvas.height = rows * tile;

    const frog = { x: 4, y: rows - 1 };
    const cars = [
      { x: 0, y: rows - 2, speed: 2 },
      { x: 200, y: rows - 3, speed: -2 },
    ];
    const logs = [
      { x: 0, y: 3, speed: 1.5 },
      { x: 200, y: 2, speed: -1.5 },
    ];
    const houses = [1, 4, 7];

    const keys: Record<string, boolean> = {};
    const keydown = (e: KeyboardEvent) => {
      keys[e.key] = true;
    };
    const keyup = (e: KeyboardEvent) => {
      keys[e.key] = false;
    };
    document.addEventListener('keydown', keydown);
    document.addEventListener('keyup', keyup);

    const reset = () => {
      frog.x = 4;
      frog.y = rows - 1;
    };

    const update = (dt: number) => {
      if (status !== 'play') return;
      if (keys['ArrowLeft'] && frog.x > 0) {
        frog.x -= 1;
        playJumpSound();
        keys['ArrowLeft'] = false;
      }
      if (keys['ArrowRight'] && frog.x < cols - 1) {
        frog.x += 1;
        playJumpSound();
        keys['ArrowRight'] = false;
      }
      if (keys['ArrowUp'] && frog.y > 0) {
        frog.y -= 1;
        playJumpSound();
        keys['ArrowUp'] = false;
      }
      if (keys['ArrowDown'] && frog.y < rows - 1) {
        frog.y += 1;
        playJumpSound();
        keys['ArrowDown'] = false;
      }

      cars.forEach((c) => {
        c.x += c.speed * dt * tile;
        if (c.speed > 0 && c.x > cols * tile) c.x = -tile;
        if (c.speed < 0 && c.x < -tile) c.x = cols * tile;
      });
      logs.forEach((l) => {
        l.x += l.speed * dt * tile;
        if (l.speed > 0 && l.x > cols * tile) l.x = -tile * 2;
        if (l.speed < 0 && l.x < -tile * 2) l.x = cols * tile;
      });

      // car collision
      cars.forEach((c) => {
        if (
          frog.y === c.y &&
          frog.x * tile < c.x + tile &&
          frog.x * tile + tile > c.x
        ) {
          playCarSound();
          reset();
        }
      });

      // water check
      if (frog.y === 3 || frog.y === 2) {
        let onLog = false;
        logs.forEach((l) => {
          if (
            frog.y === l.y &&
            frog.x * tile < l.x + tile * 2 &&
            frog.x * tile + tile > l.x
          ) {
            onLog = true;
            frog.x += l.speed * dt;
          }
        });
        if (!onLog) {
          playWaterSplash();
          reset();
        }
      }

      // reach home
      if (frog.y === 0) {
        let reached = -1;
        houses.forEach((h, i) => {
          if (!homes[i] && Math.abs(frog.x - h) < 1) reached = i;
        });
        if (reached >= 0) {
          const newHomes = [...homes];
          newHomes[reached] = true;
          setHomes(newHomes);
          playFinishSound();
          reset();
          if (newHomes.every((v) => v)) setStatus('win');
        } else {
          reset();
        }
      }

      frog.x = Math.max(0, Math.min(cols - 1, frog.x));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw areas
      ctx.fillStyle = '#222';
      ctx.fillRect(0, tile * (rows - 3), canvas.width, tile * 2); // road
      ctx.fillStyle = '#0060a0';
      ctx.fillRect(0, tile * 1, canvas.width, tile * 2); // water
      ctx.fillStyle = '#0a0';
      ctx.fillRect(0, 0, canvas.width, tile); // home

      // houses
      ctx.fillStyle = '#fff';
      houses.forEach((h, i) => {
        ctx.fillText(homes[i] ? '🏡' : '🏠', h * tile + 5, tile - 5);
      });

      // logs
      ctx.fillStyle = '#964B00';
      logs.forEach((l) => {
        ctx.fillRect(l.x, l.y * tile, tile * 2, tile);
      });

      // cars
      ctx.fillStyle = '#f00';
      cars.forEach((c) => {
        ctx.fillRect(c.x, c.y * tile + 10, tile, tile - 20);
      });

      // frog
      ctx.fillText('🐸', frog.x * tile + 5, frog.y * tile + tile - 5);
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
  }, [status, homes]);

  return (
    <div className="pixel-container">
      <h1>🐸 Frogger</h1>
      <canvas ref={canvasRef} style={{ background: '#000', imageRendering: 'pixelated' }} />
      {status === 'win' && <p>🏆 You win!</p>}
    </div>
  );
}
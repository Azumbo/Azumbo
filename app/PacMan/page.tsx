'use client';
import { useEffect, useRef, useState } from 'react';
import { pacmanAudio } from '../../lib/pacmanAudio';

export default function PacManPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<'play' | 'win'>('play');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const tile = 32;
    const map = [
      [1,1,1,1,1,1,1,1,1,1,1],
      [1,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,1,1,1,1,1,0,1],
      [1,0,1,2,0,0,0,2,1,0,1],
      [1,0,1,1,1,1,1,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1],
    ];
    const rows = map.length;
    const cols = map[0].length;
    canvas.width = cols * tile;
    canvas.height = rows * tile;

    const pacman = { x: 1, y: 1, startX: 1, startY: 1, dir: { x: 0, y: 0 } };
    const ghostStarts = [
      { x: 5, y: 3 },
      { x: 5, y: 2 },
      { x: 5, y: 4 },
      { x: 6, y: 3 },
    ];
    const ghosts = ghostStarts.map((g) => ({ ...g, dir: { x: 0, y: 0 }, frightened: false }));
    let frightenedTimer = 0;

    const keys: Record<string, boolean> = {};
    const keydown = (e: KeyboardEvent) => {
      keys[e.key] = true;
      switch (e.key) {
        case 'ArrowLeft':
          pacman.dir = { x: -1, y: 0 };
          break;
        case 'ArrowRight':
          pacman.dir = { x: 1, y: 0 };
          break;
        case 'ArrowUp':
          pacman.dir = { x: 0, y: -1 };
          break;
        case 'ArrowDown':
          pacman.dir = { x: 0, y: 1 };
          break;
      }
      if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) {
        pacmanAudio.waka();
      }
    };
    const keyup = (e: KeyboardEvent) => {
      keys[e.key] = false;
      if (!keys['ArrowLeft'] && !keys['ArrowRight'] && !keys['ArrowUp'] && !keys['ArrowDown']) {
        pacmanAudio.stopWaka();
      }
    };
    document.addEventListener('keydown', keydown);
    document.addEventListener('keyup', keyup);

    const moveEntity = (ent: { x: number; y: number; dir: { x: number; y: number } }) => {
      const nx = ent.x + ent.dir.x;
      const ny = ent.y + ent.dir.y;
      if (map[ny][nx] !== 1) {
        ent.x = nx;
        ent.y = ny;
      }
    };

    const randomDir = (gx: number, gy: number) => {
      const dirs = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 },
      ];
      const valid = dirs.filter((d) => map[gy + d.y][gx + d.x] !== 1);
      return valid[Math.floor(Math.random() * valid.length)];
    };

    let moveTimer = 0;
    const update = (dt: number) => {
      moveTimer += dt;
      if (moveTimer > 0.2) {
        moveEntity(pacman);
        ghosts.forEach((g) => {
          if (Math.random() < 0.3) g.dir = randomDir(g.x, g.y);
          moveEntity(g);
        });
        moveTimer = 0;
        if (map[pacman.y][pacman.x] === 0) {
          map[pacman.y][pacman.x] = 3;
        }
        if (map[pacman.y][pacman.x] === 2) {
          map[pacman.y][pacman.x] = 3;
          pacmanAudio.powerPellet();
          ghosts.forEach((g) => (g.frightened = true));
          frightenedTimer = 5;
        }
        ghosts.forEach((g, i) => {
          if (g.x === pacman.x && g.y === pacman.y) {
            if (g.frightened) {
              pacmanAudio.ghostEaten();
              g.x = ghostStarts[i].x;
              g.y = ghostStarts[i].y;
              g.frightened = false;
            } else {
              pacman.x = pacman.startX;
              pacman.y = pacman.startY;
            }
          }
        });
        const remaining = map.flat().some((c) => c === 0 || c === 2);
        if (!remaining) setStatus('win');
      }
      if (frightenedTimer > 0) {
        frightenedTimer -= dt;
        if (frightenedTimer <= 0) ghosts.forEach((g) => (g.frightened = false));
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '24px serif';
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const cell = map[y][x];
          if (cell === 1) ctx.fillText('🟦', x * tile + 4, y * tile + 28);
          if (cell === 0) ctx.fillText('⚪', x * tile + 8, y * tile + 28);
          if (cell === 2) ctx.fillText('🌟', x * tile + 8, y * tile + 28);
        }
      }
      ghosts.forEach((g) => {
        ctx.fillText(g.frightened ? '😵' : '👻', g.x * tile + 4, g.y * tile + 28);
      });
      ctx.fillText('🟡', pacman.x * tile + 4, pacman.y * tile + 28);
    };

    let last = performance.now();
    const loop = () => {
      const now = performance.now();
      const dt = (now - last) / 1000;
      last = now;
      if (status === 'play') {
        update(dt);
        draw();
        requestAnimationFrame(loop);
      }
    };
    requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('keydown', keydown);
      document.removeEventListener('keyup', keyup);
    };
  }, [status]);

  return (
    <div className="pixel-container">
      <h1>🟡 Pac-Man</h1>
      {status === 'play' && (
        <canvas ref={canvasRef} style={{ background: 'black', imageRendering: 'pixelated' }} />
      )}
      {status === 'win' && <p>🎉 You win!</p>}
    </div>
  );
}

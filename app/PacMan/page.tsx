'use client';
import { useEffect, useRef, useState } from 'react';
import { pacmanAudio } from '../../lib/pacmanAudio';

export default function PacManPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [level, setLevel] = useState(1);
  const [status, setStatus] = useState<'play' | 'level' | 'win'>('play');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const tile = 32;
    const levels = [
      [
        [1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,0,1,1,1,0,1],
        [1,0,1,2,0,0,0,2,1,0,1],
        [1,0,1,1,1,0,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1],
      ],
      [
        [1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,1,0,1],
        [1,0,1,2,0,1,0,2,1,0,1],
        [1,0,1,1,1,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1],
      ],
      [
        [1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,1,0,1],
        [1,0,1,2,0,1,0,2,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1],
      ],
      [
        [1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,1,0,1],
        [1,0,1,2,0,1,0,2,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,0,0,0,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1],
      ],
      [
        [1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,1,0,1],
        [1,0,1,2,0,1,0,2,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,0,0,0,0,1,0,1],
        [1,0,1,1,1,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1],
      ],
    ];

    const map = levels[level - 1].map((row) => [...row]);
    const rows = map.length;
    const cols = map[0].length;
    const scale = window.devicePixelRatio || 1;
    canvas.width = cols * tile * scale;
    canvas.height = rows * tile * scale;
    ctx.scale(scale, scale);

    const pacman = { x: 1, y: 1, startX: 1, startY: 1, dir: { x: 0, y: 0 } };
    const ghostStarts = [
      { x: 5, y: 3 },
      { x: 5, y: 2 },
      { x: 5, y: 4 },
      { x: 6, y: 3 },
    ];
    const ghosts = ghostStarts
      .slice(0, Math.min(ghostStarts.length, level + 1))
      .map((g) => ({ ...g, dir: { x: 0, y: 0 }, frightened: false }));
    let frightenedTimer = 0;

    const keys: Record<string, boolean> = {};

    const startMove = (dir: 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowDown') => {
      keys[dir] = true;
      switch (dir) {
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
      pacmanAudio.waka();
    };

    const stopMove = (dir: 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowDown') => {
      keys[dir] = false;
      if (!keys['ArrowLeft'] && !keys['ArrowRight'] && !keys['ArrowUp'] && !keys['ArrowDown']) {
        pacmanAudio.stopWaka();
      }
    };

    const keydown = (e: KeyboardEvent) => {
      if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) {
        startMove(e.key as any);
      }
    };

    const keyup = (e: KeyboardEvent) => {
      if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) {
        stopMove(e.key as any);
      }
    };
    document.addEventListener('keydown', keydown);
    document.addEventListener('keyup', keyup);

    const touchMappings: [string, 'ArrowLeft'|'ArrowRight'|'ArrowUp'|'ArrowDown'][] = [
      ['up','ArrowUp'],
      ['left','ArrowLeft'],
      ['down','ArrowDown'],
      ['right','ArrowRight'],
    ];
    const touchHandlers: Array<() => void> = [];
    touchMappings.forEach(([dir,dataDir]) => {
      const el = document.querySelector<HTMLButtonElement>(`button[data-dir="${dir}"]`);
      if (el) {
        const start = (e: TouchEvent) => { e.preventDefault(); startMove(dataDir); };
        const end = () => stopMove(dataDir);
        el.addEventListener('touchstart', start);
        el.addEventListener('touchend', end);
        touchHandlers.push(() => {
          el.removeEventListener('touchstart', start);
          el.removeEventListener('touchend', end);
        });
      }
    });

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
      const valid = dirs.filter((d) => {
        const nx = gx + d.x;
        const ny = gy + d.y;
        return (
          nx >= 0 &&
          nx < cols &&
          ny >= 0 &&
          ny < rows &&
          map[ny][nx] !== 1
        );
      });
      if (valid.length === 0) return { x: 0, y: 0 };
      return valid[Math.floor(Math.random() * valid.length)];
    };

    const speed = Math.max(0.2 - (level - 1) * 0.02, 0.1);
    let moveTimer = 0;
    let nextTimeout: ReturnType<typeof setTimeout> | null = null;
    const update = (dt: number) => {
      moveTimer += dt;
      if (moveTimer > speed) {
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
        if (!remaining) {
          pacmanAudio.stopWaka();
          if (level < levels.length) {
            pacmanAudio.levelComplete();
            setStatus('level');
            nextTimeout = setTimeout(() => {
              setLevel((l) => l + 1);
              setStatus('play');
            }, 1000);
          } else {
            pacmanAudio.gameWin();
            setStatus('win');
          }
        }
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

    let fps = 60;
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) fps = 30;
    let last = performance.now();

    const loop = () => {
      const now = performance.now();
      const dt = (now - last) / 1000;
      last = now;
      if (status === 'play') {
        update(dt);
        draw();
        setTimeout(() => requestAnimationFrame(loop), 1000 / fps);
      }
    };
    requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('keydown', keydown);
      document.removeEventListener('keyup', keyup);
      if (nextTimeout) clearTimeout(nextTimeout);
      touchHandlers.forEach((fn) => fn());
    };
  }, [status, level]);

  return (
    <div className="pixel-container">
      <h1>🟡 Pac-Man</h1>
      {status === 'play' && (
        <>
          <p>Level {level}</p>
          <canvas
            ref={canvasRef}
            style={{ background: 'black', imageRendering: 'pixelated', width: '100%', height: 'auto' }}
          />
          <div className="mobile-controls">
            <div className="d-pad">
              <button data-dir="up">↑</button>
              <button data-dir="left">←</button>
              <button data-dir="down">↓</button>
              <button data-dir="right">→</button>
            </div>
          </div>
        </>
      )}
      {status === 'level' && <p>Level {level} complete!</p>}
      {status === 'win' && <p>🏆 You win!</p>}
    </div>
  );
}
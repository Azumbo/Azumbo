"use client";

import { useEffect, useRef } from 'react';

const MiniGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let score = 0;
    let timeLeft = 30;
    const croissants: { x: number; y: number; type: 'GOLDEN' | 'NORMAL' }[] = [];
    let animationFrameId: number;

    const gameLoop = () => {
      update();
      render();
      if (timeLeft > 0) {
        animationFrameId = requestAnimationFrame(gameLoop);
      } else {
        endGame();
      }
    };

    const update = () => {
      if (Math.random() < 0.05) {
        croissants.push({
          x: Math.random() * canvas.width,
          y: 0,
          type: Math.random() > 0.8 ? 'GOLDEN' : 'NORMAL',
        });
      }

      croissants.forEach((obj) => (obj.y += 2));
    };

    const render = () => {
      ctx.fillStyle = '#0d1b2a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      croissants.forEach((obj) => {
        ctx.fillStyle = obj.type === 'GOLDEN' ? '#ff9e00' : '#f8f8f8';
        ctx.beginPath();
        ctx.arc(obj.x, obj.y, 10, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.font = '16px "Press Start 2P"';
      ctx.fillStyle = '#41ead4';
      ctx.fillText(`SCORE: ${score}`, 20, 30);
      ctx.fillText(`TIME: ${timeLeft}`, canvas.width - 150, 30);
    };

    const endGame = () => {
      ctx.font = '16px "Press Start 2P"';
      ctx.fillStyle = '#41ead4';
      ctx.fillText('GAME OVER!', canvas.width / 2 - 100, canvas.height / 2);
      ctx.fillText(`YOUR SCORE: ${score}`, canvas.width / 2 - 120, canvas.height / 2 + 40);
      if (typeof window !== 'undefined') {
        localStorage.setItem('unlockedBadge', 'BAKER');
      }
    };

    gameLoop();

    const timer = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      for (let i = croissants.length - 1; i >= 0; i--) {
        const obj = croissants[i];
        const distance = Math.sqrt((x - obj.x) ** 2 + (y - obj.y) ** 2);
        if (distance <= 10) {
          score += obj.type === 'GOLDEN' ? 5 : 1;
          croissants.splice(i, 1);
          break;
        }
      }
    };

    canvas.addEventListener('click', handleClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(timer);
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={640}
      height={360}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        backgroundColor: '#0d1b2a',
      }}
    />
  );
};

export default MiniGame;

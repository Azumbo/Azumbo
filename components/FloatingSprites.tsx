'use client';
import { useEffect, useRef } from 'react';

export default function FloatingSprites() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const sprites = Array.from(container.querySelectorAll<HTMLDivElement>('div'));
    sprites.forEach((sprite, i) => {
      const delay = Math.random() * 10;
      sprite.style.animationDelay = `${delay}s`;
      sprite.style.left = `${Math.random() * 100}%`;
      sprite.style.top = `${Math.random() * 100}%`;
    });
  }, []);
  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="sprite w-4 h-4 bg-pink-500 dark:bg-pink-400" />
      ))}
    </div>
  );
}

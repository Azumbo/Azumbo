'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { playJumpSound, playAmbientLoop, stopAmbientLoop } from '../../lib/audioManager';

export default function GamePage() {
  const router = useRouter();
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (level > 10) {
      stopAmbientLoop();
      const code = localStorage.getItem('playerCode') || '';
      fetch('/api/submit-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, score }),
      }).finally(() => {
        router.push('/finish');
      });
    }
  }, [level, router, score]);

  useEffect(() => {
    playAmbientLoop();
    return () => {
      stopAmbientLoop();
    };
  }, []);

  const nextLevel = () => {
    playJumpSound();
    setScore((s) => s + 10);
    setLevel((l) => l + 1);
  };

  const enemy = level === 10 ? '🐙👑' : '👾';
  const hero = '🐠';

    return (
      <div className="pixel-container">
        <h2>Level {level}</h2>
        <p>Score: {score}</p>
        <div style={{ fontSize: '48px', margin: '20px' }}>
          <span className="emoji-sprite">{hero}</span> vs{' '}
          <span className="emoji-sprite">{enemy}</span>
        </div>
        <button className="pixel-button" onClick={nextLevel}>
          {level === 10 ? 'Finish' : 'Next'}
        </button>
      </div>
    );
}

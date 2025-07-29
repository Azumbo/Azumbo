'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { playJumpSound, playAmbientLoop, stopAmbientLoop } from '../../lib/audioManager';

export default function GamePage() {
  const router = useRouter();
  const [level, setLevel] = useState(1);

  useEffect(() => {
    if (level > 10) {
      stopAmbientLoop();
      router.push('/finish');
    }
  }, [level, router]);

  useEffect(() => {
    playAmbientLoop();
    return () => {
      stopAmbientLoop();
    };
  }, []);

  const nextLevel = () => {
    playJumpSound();
    setLevel((l) => l + 1);
  };

  const enemy = level === 10 ? '🐙👑' : '👾';
  const hero = '🐠';

  return (
    <div className="pixel-container">
      <h2>Level {level}</h2>
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

'use client';
import { useState, useEffect } from 'react';
import { toggleMute } from '../lib/audioManager';

export default function SoundToggle() {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMuted(localStorage.getItem('muted') === 'true');
  }, []);

  const handleClick = () => {
    toggleMute();
    const newMuted = !muted;
    setMuted(newMuted);
    localStorage.setItem('muted', newMuted ? 'true' : 'false');
  };

  return (
    <button
      className="pixel-button pressable"
      onClick={handleClick}
      style={{ position: 'fixed', top: 10, right: 10 }}
    >
      {muted ? '🔇' : '🔊'}
    </button>
  );
}

'use client';

import { useEffect } from 'react';
import SoundToggle from './SoundToggle';
import { initAudioPreferences, unlockAudio } from '../lib/audioManager';

export default function GameFX() {
  useEffect(() => {
    initAudioPreferences();

    const handlePointerDown = () => {
      void unlockAudio();
    };

    document.addEventListener('pointerdown', handlePointerDown, { passive: true });

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  return <SoundToggle />;
}

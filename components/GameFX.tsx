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

    const handleDown = () => document.body.classList.add('cursor-click');
    const handleUp = () => document.body.classList.remove('cursor-click');

    document.addEventListener('pointerdown', handlePointerDown, { passive: true });
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mouseup', handleUp);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mouseup', handleUp);
    };
  }, []);

  return <SoundToggle />;
}

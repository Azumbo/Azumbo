'use client';
import { useEffect } from 'react';
import SoundToggle from './SoundToggle';
import { playAmbientLoop, playClickSound, playHoverSound, mute, unmute } from '../lib/audioManager';

export default function GameFX() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const muted = localStorage.getItem('muted') === 'true';
      muted ? mute() : unmute();
    }
    playAmbientLoop();
    const handleClick = (e: MouseEvent) => {
      playClickSound();
    };
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .clickable')) {
        playHoverSound();
      }
    };
    const handleDown = () => document.body.classList.add('cursor-click');
    const handleUp = () => document.body.classList.remove('cursor-click');
    document.addEventListener('click', handleClick);
    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mouseup', handleUp);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mouseup', handleUp);
    };
  }, []);
  return <SoundToggle />;
}

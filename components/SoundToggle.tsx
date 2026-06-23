'use client';

import { useEffect, useState } from 'react';
import { isAudioMuted, subscribeMuteState, toggleMute } from '../lib/audioManager';

export default function SoundToggle() {
  const [muted, setMuted] = useState(true);

  useEffect(() => subscribeMuteState(setMuted), []);

  const handleClick = () => {
    void toggleMute();
  };

  return (
    <button
      type="button"
      className="pixel-button pressable"
      onClick={handleClick}
      aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
      aria-pressed={!muted}
      title={muted ? 'Sound off' : 'Sound on'}
      style={{ position: 'fixed', top: 10, right: 10, zIndex: 50 }}
    >
      {muted ? '🔇' : '🔊'}
    </button>
  );
}

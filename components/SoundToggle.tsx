'use client';

import { useEffect, useState } from 'react';
import { subscribeMuteState, toggleMute } from '../lib/audioManager';

export default function SoundToggle() {
  const [muted, setMuted] = useState(true);

  useEffect(() => subscribeMuteState(setMuted), []);

  return (
    <button
      type="button"
      className="glass-surface gpu-layer interactive-lift fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full text-sm text-ink-primary"
      onClick={() => void toggleMute()}
      aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
      aria-pressed={!muted}
      title={muted ? 'Sound off' : 'Sound on'}
    >
      {muted ? '🔇' : '🔊'}
    </button>
  );
}

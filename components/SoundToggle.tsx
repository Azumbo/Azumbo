'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { subscribeMuteState, toggleMute } from '../lib/audioManager';

export default function SoundToggle() {
  const pathname = usePathname();
  const [muted, setMuted] = useState(true);

  useEffect(() => subscribeMuteState(setMuted), []);

  if (pathname?.startsWith('/ciromap')) {
    return null;
  }

  return (
    <button
      type="button"
      className="glass-panel gpu-layer fixed top-5 right-5 z-[60] flex h-11 w-11 items-center justify-center rounded-full text-sm transition-all duration-500 ease-out hover:scale-105"
      onClick={() => void toggleMute()}
      aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
      aria-pressed={!muted}
      title={muted ? 'Sound off' : 'Sound on'}
    >
      {muted ? '🔇' : '🔊'}
    </button>
  );
}

'use client';
import { useEffect, useState } from 'react';
import { localization } from '../../lib/config';

interface Entry { nickname: string; score: number; }

export default function StatsPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const lang = (typeof window !== 'undefined' && localStorage.getItem('lang')) || 'en';
  const t = localization[lang as keyof typeof localization];

  useEffect(() => {
    fetch('/api/stats')
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, []);

  return (
    <div className="pixel-container">
      <h1>{t.stats.title}</h1>
      <ol style={{ textAlign: 'left', margin: '0 auto', maxWidth: '300px' }}>
        {entries.map((e, idx) => (
          <li key={idx} style={{ marginBottom: '8px' }}>
            #{idx + 1} {e.nickname} - {e.score}
          </li>
        ))}
      </ol>
    </div>
  );
}

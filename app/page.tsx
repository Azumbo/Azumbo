'use client';
import { useRouter } from 'next/navigation';
import { gameConfig, localization } from '../lib/config';
import { useState } from 'react';

export default function LanguageSelect() {
  const router = useRouter();
  const [lang] = useState(gameConfig.defaultLanguage);
  const t = localization;

  const selectLang = (l: string) => {
    localStorage.setItem('lang', l);
    router.push('/register');
  };

  return (
    <div className="pixel-container">
      <h1>{t[lang].languageSelect}</h1>
      <div style={{ marginTop: '20px' }}>
        {gameConfig.languages.map((l) => (
          <button
            key={l}
            className="pixel-button m-2"
            onClick={() => selectLang(l)}
          >
            {l === 'en' && '🇬🇧 English'}
            {l === 'it' && '🇮🇹 Italiano'}
            {l === 'ru' && '🇷🇺 Русский'}
          </button>
        ))}
      </div>
    </div>
  );
}

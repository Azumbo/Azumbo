'use client';
import { useEffect, useState } from 'react';
import { localization, gameConfig } from '../../lib/config';

export default function FinishPage() {
  const [lang, setLang] = useState('en');
  const [code, setCode] = useState('');

  useEffect(() => {
    const l = localStorage.getItem('lang') || 'en';
    setLang(l);
    setCode(localStorage.getItem('playerCode') || '');
  }, []);

  const t = localization[lang as keyof typeof localization];

  const copy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="pixel-container">
      <h1>{t.finishScreen.title}</h1>
      <p>{t.finishScreen.message}</p>
      <p>{t.finishScreen.action} {gameConfig.adminEmail}</p>
      <p>{t.finishScreen.social}</p>
      <a href={gameConfig.socialLinks.youtube}>{gameConfig.socialLinks.youtube}</a>
      <br />
      <a href={gameConfig.socialLinks.tiktok}>{gameConfig.socialLinks.tiktok}</a>
      <p>{t.finishScreen.comment}</p>
      <img src="/mola-coin.png" alt="Mola Coin" className="pixel-coin" />
      <p>{code}</p>
      <button className="pixel-button" onClick={copy}>{t.finishScreen.copy}</button>
    </div>
  );
}

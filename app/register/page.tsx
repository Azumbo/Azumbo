'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { localization, gameConfig } from '../../lib/config';

export default function RegisterPage() {
  const router = useRouter();
  const lang = (typeof window !== 'undefined' && localStorage.getItem('lang')) || 'en';
  const t = localization[lang as keyof typeof localization];
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const submit = async () => {
    const res = await fetch(`${gameConfig.apiEndpoint}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nickname, email, language: lang }),
    });
    const data = await res.json();
    localStorage.setItem('playerCode', data.code);
    router.push('/game');
  };

  return (
    <div className="pixel-container">
      <h1>{t.startScreen.title}</h1>
      <p>{t.startScreen.instruction}</p>
      <input
        className="pixel-button m-2"
        placeholder={t.startScreen.nickname}
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        className="pixel-button m-2"
        placeholder={t.startScreen.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="pixel-button" onClick={submit}>
        {t.startScreen.submit}
      </button>
    </div>
  );
}

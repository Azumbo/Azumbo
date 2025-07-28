import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Cornetto Clicker - AZUMBO',
};

export default function CornettoLanding() {
  return (
    <main className="bg-black text-primary">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-between px-4 py-8">
        <header className="flex items-center justify-between">
          <Image src="/assets/logo/azumbo-logo.png" alt="AZUMBO" width={160} height={40} />
          <a href="#" className="text-secondary hover:opacity-80 transition text-2xl">TikTok</a>
        </header>
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-6">
          <h1 className="text-4xl md:text-6xl font-pixel">Cornetto Clicker</h1>
          <p className="text-secondary max-w-md">Собери 500 круассанов и стань Легендой булочек!</p>
          <a
            href="https://azumbo.vercel.app/cornettoclicker"
            className="bg-secondary text-black px-6 py-3 rounded hover:opacity-80 transition"
          >
            Играть сейчас
          </a>
        </div>
      </section>

      {/* Screenshots */}
      <section className="px-4 py-16 max-w-5xl mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="bg-gray-200 h-64 rounded" />
        <div className="bg-gray-200 h-64 rounded" />
        <div className="bg-gray-200 h-64 rounded" />
        <div className="bg-gray-200 h-64 rounded" />
      </section>

      {/* Features */}
      <section className="px-4 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-6">Особенности</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="flex gap-2"><span>🥐</span> Падающие круассаны с физикой</li>
          <li className="flex gap-2"><span>🔥</span> Сгоревшие булки — смерть</li>
          <li className="flex gap-2"><span>⏱️</span> Таймер и рекорд времени</li>
          <li className="flex gap-2"><span>📱</span> Адаптация под телефон и ПК</li>
          <li className="flex gap-2"><span>🧠</span> Простой и залипательный геймплей</li>
        </ul>
      </section>

      {/* About */}
      <section className="px-4 py-16 max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl md:text-3xl">Разработано инди-студией AZUMBO</h2>
        <p className="text-secondary">Один разработчик, один круассан и безумная идея</p>
        <p>Хочешь такую игру? — Напиши нам!</p>
        <a
          href="https://t.me/+393446935576"
          className="inline-block bg-secondary text-black px-4 py-2 rounded hover:opacity-80 transition"
        >
          Telegram
        </a>
      </section>

      {/* Footer */}
      <footer className="px-4 py-10 text-center text-sm bg-black border-t border-secondary space-y-4">
        <a
          href="https://azumbo.vercel.app/cornettoclicker"
          className="inline-block bg-secondary text-black px-4 py-2 rounded hover:opacity-80 transition"
        >
          Играть сейчас
        </a>
        <p>Подпишись на нас в TikTok и не пропусти новые игры</p>
        <p>🄯 2025 AZUMBO ∞</p>
      </footer>
    </main>
  );
}

import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Cornetto Clicker - AZUMBO',
};

export default function CornettoLanding() {
  return (
    <main className="min-h-screen bg-[#7B2FF7] px-4 font-sans text-white">
      <section className="flex flex-col justify-center min-h-screen">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-screen-sm w-full mx-auto mt-10 space-y-4 text-center">
          <Image
            src="/assets/logo/azumbo-logo.png"
            alt="AZUMBO"
            width={160}
            height={160}
            className="w-40 object-contain mx-auto"
          />
          <h1 className="text-xl md:text-2xl font-semibold text-black">Cornetto Clicker</h1>
          <p className="text-gray-700">Собери 500 круассанов и стань Легендой булочек!</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://azumbo.vercel.app/cornettoclicker"
              className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800"
            >
              Играть сейчас
            </a>
            <a
              href="https://t.me/+393446935576"
              className="border border-purple-700 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-50"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl text-center mb-6">Особенности</h2>
        <ul className="grid gap-4 sm:grid-cols-2 text-white text-lg">
          <li className="flex gap-2"><span>🥐</span> Падающие круассаны с физикой</li>
          <li className="flex gap-2"><span>🔥</span> Сгоревшие булки — смерть</li>
          <li className="flex gap-2"><span>⏱️</span> Таймер и рекорд времени</li>
          <li className="flex gap-2"><span>📱</span> Адаптация под телефон и ПК</li>
          <li className="flex gap-2"><span>🧠</span> Простой и залипательный геймплей</li>
        </ul>
      </section>

      <section className="px-4 py-16 max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-xl md:text-2xl">Разработано инди-студией AZUMBO</h2>
        <p className="text-white">Один разработчик, один круассан и безумная идея</p>
        <p className="text-white">Хочешь такую игру? — Напиши нам!</p>
        <a
          href="https://t.me/+393446935576"
          className="border border-purple-700 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-50"
        >
          Telegram
        </a>
      </section>

      <footer className="text-white text-sm text-center mt-10">
        <p>🄯 2025 AZUMBO ∞</p>
      </footer>
    </main>
  );
}

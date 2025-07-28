import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Cornetto Clicker - AZUMBO',
};

export default function CornettoLanding() {
  return (
    <div className="min-h-screen bg-[#7B2FF7] py-10 px-4">
      <main className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 px-4 py-10 font-sans">
      <div className="max-w-screen-sm mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-6">
        <Image
          src="/assets/logo/azumbo-logo.png"
          alt="AZUMBO"
          width={160}
          height={160}
          className="w-40 object-contain mx-auto"
        />

        <h1 className="text-3xl font-bold text-gray-800 text-center">Cornetto Clicker</h1>
        <p className="text-xl text-gray-700 text-center">Собери 500 круассанов и стань Легендой булочек!</p>

        <div className="flex justify-center gap-4">
          <a
            href="https://azumbo.vercel.app/cornettoclicker/game.html"
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

        <div className="bg-gray-100 p-4 rounded-xl space-y-2">
          <h2 className="text-xl text-gray-700 text-center">Особенности</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-base text-gray-600"><span>🥐</span><span>Падающие круассаны с физикой</span></li>
            <li className="flex items-center gap-2 text-base text-gray-600"><span>🔥</span><span>Сгоревшие булки — смерть</span></li>
            <li className="flex items-center gap-2 text-base text-gray-600"><span>⏱️</span><span>Таймер и рекорд времени</span></li>
            <li className="flex items-center gap-2 text-base text-gray-600"><span>📱</span><span>Адаптация под телефон и ПК</span></li>
            <li className="flex items-center gap-2 text-base text-gray-600"><span>🧠</span><span>Простой и залипательный геймплей</span></li>
          </ul>
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-xl text-gray-700">Разработано инди-студией AZUMBO</h2>
          <p className="text-base text-gray-600">Один разработчик, один круассан и безумная идея</p>
          <p className="text-base text-gray-600">Хочешь такую игру? — Напиши нам!</p>
          <a
            href="https://t.me/+393446935576"
            className="border border-purple-700 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-50 inline-block"
          >
            Telegram
          </a>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>AZUMBO — мы создаём ретро-игры с юмором и поддержкой 10 языков.</p>
        </div>

        <footer className="text-sm text-center text-gray-500">
          <p>🄯 2025 AZUMBO ∞</p>
        </footer>
      </div>
    </main>
    </div>
  );
}

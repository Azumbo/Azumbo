import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-yellow-300 flex flex-col items-center justify-center px-4 py-10 font-mono">
      <h1 className="text-4xl font-bold text-center">AZUMBO</h1>
      <p className="mt-2 text-center text-lg text-cyan-300">Weird, viral pixel games from Italy 🇮🇹</p>

      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-2">🎮 Our Game</h2>
        <p className="mb-4">Perdonauta Afozio: a fart-powered Flappy Grandpa flying through Southern Italy.</p>
        {/* Image removed per deployment guidelines */}
      </section>

      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-2">📬 Contact</h2>
        <p>Want your own pixel game?<br />Email us: <a href="mailto:AzumboGames@gmail.com" className="text-cyan-300 underline">AzumboGames@gmail.com</a></p>
      </section>
    </main>
  );
}

import React from 'react';
import { t } from './lib/translate';

export default function Home() {
  return (
    <main className="text-primary bg-black">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 gap-4 cursor-crosshair">
        <h1 className="text-3xl md:text-5xl leading-tight font-pixel">{t('hero.title')}</h1>
        <p className="max-w-xl text-secondary whitespace-pre-line">{t('hero.subtitle')}</p>
        <p className="text-secondary">{t('hero.line1')}</p>
        <p className="text-secondary">{t('hero.line2')}</p>
        <div className="flex gap-4 mt-6">
          <a href="#games" className="bg-secondary text-black px-4 py-2 rounded hover:opacity-80 transition">{t('hero.play')}</a>
          <a href="#games" className="underline hover:text-secondary transition">{t('hero.scroll')}</a>
        </div>
      </section>

      {/* Games */}
      <section id="games" className="px-4 py-16 max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-3xl">{t('games.title')}</h2>
        <p className="text-secondary whitespace-pre-line">{t('games.subtitle')}</p>
        <div className="border border-secondary p-6 rounded-lg hover:scale-105 transition">
          <h3 className="text-xl mb-2">{t('games.molaTitle')}</h3>
          <p>{t('games.molaDesc')}</p>
          <p className="whitespace-pre-line mt-2 text-sm">{t('games.molaFeatures')}</p>
          <p className="font-bold mt-2">{t('games.molaStats')}</p>
          <a href="/cornettoclicker/" className="inline-block mt-4 bg-secondary text-black px-4 py-2 rounded hover:opacity-80 transition">{t('games.playNow')}</a>
        </div>
        <p>{t('games.coming')}</p>
      </section>

      {/* About */}
      <section id="about" className="px-4 py-16 max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl md:text-3xl text-center">{t('about.title')}</h2>
        <p className="whitespace-pre-line">{t('about.desc')}</p>
        <p className="whitespace-pre-line">{t('about.loves')}</p>
        <p className="whitespace-pre-line">{t('about.tech')}</p>
        <a href="https://github.com" className="text-secondary underline hover:text-white transition">{t('about.github')}</a>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 py-16 max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl md:text-3xl">{t('contact.title')}</h2>
        <p>{t('contact.desc')}</p>
        <p>{t('contact.email')}</p>
        <a className="block" href="mailto:AzumboGames@gmail.com">{t('contact.address')}</a>
        <a className="block" href="tel:+393791815588">{t('contact.phone')}</a>
        <a href="mailto:AzumboGames@gmail.com" className="inline-block mt-2 bg-secondary text-black px-4 py-2 rounded hover:opacity-80 transition">{t('contact.send')}</a>
      </section>

      {/* Subscribe */}
      <section className="px-4 py-16 max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl md:text-3xl">{t('subscribe.title')}</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#" className="hover:text-secondary transition">{t('subscribe.links.twitter')}</a>
          <a href="#" className="hover:text-secondary transition">{t('subscribe.links.discord')}</a>
          <a href="#" className="hover:text-secondary transition">{t('subscribe.links.youtube')}</a>
          <a href="#" className="hover:text-secondary transition">{t('subscribe.links.tiktok')}</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-10 text-center text-sm bg-black text-primary border-t border-secondary">
        <p className="whitespace-pre-line">{t('footer.text')}</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:text-secondary transition">{t('footer.policy')}</a>
          <a href="#" className="hover:text-secondary transition">{t('footer.terms')}</a>
          <a href="#" className="hover:text-secondary transition">{t('footer.support')}</a>
        </div>
      </footer>
    </main>
  );
}

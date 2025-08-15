'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type Lang = 'en' | 'it' | 'ru';

const STRINGS: Record<Lang, any> = {
  en: {
    title: 'AZUMBO — Indie Game Studio',
    kicker: 'Mobile-first games with humor & heart.',
    subtitle: 'We craft fast, funny and viral-ready casual games for Android, iOS and Nintendo Switch.',
    ctaPlay: 'Play in browser',
    ctaContact: 'Contact',
    platforms: 'Platforms',
    android: 'Android',
    ios: 'iOS',
    switch: 'Nintendo Switch',
    featured: 'Featured games',
    ccDesc: 'Catch croissants, dodge hazards. Snacky arcade fun.',
    frDesc: 'Classic frog-style hops with modern UX.',
    aboutTitle: 'About AZUMBO',
    aboutText:
      'AZUMBO is a tiny indie studio focused on snackable, high-polish games, lean tech and rapid publishing.',
    contactTitle: 'Get in touch',
    email: 'Email',
    footer: '© 2025 AZUMBO. All rights reserved.',
  },
  it: {
    title: 'AZUMBO — Studio Indie',
    kicker: 'Giochi mobile-first con umorismo e cuore.',
    subtitle:
      'Creiamo giochi casual veloci e divertenti per Android, iOS e Nintendo Switch.',
    ctaPlay: 'Gioca nel browser',
    ctaContact: 'Contatto',
    platforms: 'Piattaforme',
    android: 'Android',
    ios: 'iOS',
    switch: 'Nintendo Switch',
    featured: 'Giochi in evidenza',
    ccDesc: 'Prendi cornetti, evita pericoli. Arcade “gustoso”.',
    frDesc: 'Salti in stile frogger con UX moderna.',
    aboutTitle: 'Chi è AZUMBO',
    aboutText:
      'AZUMBO è un piccolo studio indie: giochi veloci, tech snello, pubblicazione rapida.',
    contactTitle: 'Contattaci',
    email: 'E-mail',
    footer: '© 2025 AZUMBO. Tutti i diritti riservati.',
  },
  ru: {
    title: 'AZUMBO — инди-студия игр',
    kicker: 'Мобильные игры с юмором и сердцем.',
    subtitle:
      'Делаем быстрые, весёлые, вирусные казуалки для Android, iOS и Nintendo Switch.',
    ctaPlay: 'Играть в браузере',
    ctaContact: 'Связаться',
    platforms: 'Платформы',
    android: 'Android',
    ios: 'iOS',
    switch: 'Nintendo Switch',
    featured: 'Избранные игры',
    ccDesc: 'Лови круассаны, избегай опасностей. Вкусный аркадный ран.',
    frDesc: 'Классические «лягушачьи» ходы с современным UX.',
    aboutTitle: 'О студии AZUMBO',
    aboutText:
      'Маленькая инди-студия: быстрые игры, лёгкая техничка, быстрый релиз.',
    contactTitle: 'Контакты',
    email: 'Почта',
    footer: '© 2025 AZUMBO. Все права защищены.',
  },
};

export default function AzumboLanding() {
  const [lang, setLang] = useState<Lang>('en');
  const t = useMemo(() => STRINGS[lang], [lang]);

  // JSON-LD
  const orgJson = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AZUMBO',
    url: 'https://azumbo.vercel.app/',
    email: 'azumbogames@gmail.com',
    sameAs: [],
  };
  const siteJson = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AZUMBO',
    url: 'https://azumbo.vercel.app/',
    inLanguage: lang,
  };

  return (
    <main className="min-h-[100dvh] bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Head-like tags */}
      <link rel="canonical" href="https://azumbo.vercel.app/" />
      <meta name="robots" content="index,follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJson) }}
      />

      {/* Language Switcher */}
      <div className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur dark:bg-neutral-950/70">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2">
          <div className="font-black tracking-wider">AZUMBO</div>
          <div className="flex gap-3 text-sm">
            {(['en', 'it', 'ru'] as Lang[]).map((k) => (
              <button
                key={k}
                onClick={() => setLang(k)}
                className={`rounded px-2 py-1 ${
                  lang === k
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-neutral-200 dark:bg-neutral-800'
                }`}
                aria-pressed={lang === k}
              >
                {k === 'en' ? 'EN' : k === 'it' ? 'IT' : 'RU'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-sm uppercase tracking-widest opacity-70">{t.kicker}</p>
        <h1 className="mt-2 text-4xl font-black leading-tight sm:text-6xl">
          {t.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
          {t.subtitle}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/cornettoclicker"
            className="rounded-2xl bg-black px-5 py-3 text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-black"
          >
            {t.ctaPlay}
          </Link>
          <a
            href="mailto:azumbogames@gmail.com"
            className="rounded-2xl border border-neutral-300 px-5 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700"
          >
            {t.ctaContact}
          </a>
        </div>

        {/* Platforms */}
        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-widest opacity-70">
            {t.platforms}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-neutral-200 px-3 py-1 text-sm dark:bg-neutral-800">
              {t.android}
            </span>
            <span className="rounded-full bg-neutral-200 px-3 py-1 text-sm dark:bg-neutral-800">
              {t.ios}
            </span>
            <span className="rounded-full bg-neutral-200 px-3 py-1 text-sm dark:bg-neutral-800">
              {t.switch}
            </span>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="mb-6 text-2xl font-bold">{t.featured}</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Cornetto Clicker */}
          <Link
            href="/cornettoclicker"
            className="group rounded-2xl border border-neutral-200 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800"
          >
            <div className="mb-2 text-lg font-semibold">Cornetto Clicker</div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{t.ccDesc}</p>
            <div className="mt-4 text-xs opacity-70">Web • Android • iOS (soon)</div>
          </Link>

          {/* Frogger */}
          <Link
            href="/frogger"
            className="group rounded-2xl border border-neutral-200 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800"
          >
            <div className="mb-2 text-lg font-semibold">Frogger</div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{t.frDesc}</p>
            <div className="mt-4 text-xs opacity-70">Web • Android • iOS (soon)</div>
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-5xl px-4 pb-12">
        <h2 className="mb-2 text-2xl font-bold">{t.aboutTitle}</h2>
        <p className="max-w-3xl text-neutral-700 dark:text-neutral-300">{t.aboutText}</p>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <h2 className="mb-2 text-2xl font-bold">{t.contactTitle}</h2>
        <a
          href="mailto:azumbogames@gmail.com"
          className="inline-block rounded-xl border border-neutral-300 px-4 py-2 text-sm shadow-sm dark:border-neutral-700"
        >
          {t.email}: azumbogames@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t bg-neutral-50 py-6 text-center text-sm dark:border-neutral-800 dark:bg-neutral-950">
        {t.footer}
      </footer>
    </main>
  );
}

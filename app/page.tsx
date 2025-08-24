// page.tsx
'use client';

import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';

type Lang = 'en' | 'it' | 'ru';

const STRINGS: Record<Lang, Record<string, string>> = {
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
    siDesc: 'Defend Earth from alien invasion in this classic arcade shooter.',
    pmDesc: 'Navigate the maze, eat dots and avoid ghosts in this timeless classic.',
    aboutTitle: 'About AZUMBO',
    aboutText: 'AZUMBO is a tiny indie studio focused on snackable, high-polish games, lean tech and rapid publishing.',
    contactTitle: 'Get in touch',
    email: 'Email',
    footer: '© 2025 AZUMBO. All rights reserved.',
    // nav
    navGames: 'Games',
    navServices: 'Services',
    navContact: 'Contact',
    // services
    servicesTitle: 'Services',
    servicesSubtitle: 'From prototype sprints to publishing and platform ports.',
    srvProtoTitle: 'Prototype Sprint (5–10 days)',
    srvProtoDesc: 'Fast vertical slice: core loop, basic art/sfx, deployable build for tests.',
    srvProtoPrice: 'from €499',
    srvPublishTitle: 'Publishing & UA',
    srvPublishDesc: 'Store assets, QA, soft launch, UA creatives, analytics. Rev-share friendly.',
    srvPublishPrice: 'from €0 + rev-share',
    srvPortTitle: 'Porting to Nintendo Switch',
    srvPortDesc: 'Technical port, input/UI adaption, performance pass, submission support.',
    srvPortPrice: 'custom quote',
    srvCTA: 'Request a quote'
  },
  it: {
    title: 'AZUMBO — Studio Indie',
    kicker: 'Giochi mobile-first con umorismo e cuore.',
    subtitle: 'Creiamo giochi casual veloci e divertenti per Android, iOS e Nintendo Switch.',
    ctaPlay: 'Gioca nel browser',
    ctaContact: 'Contatto',
    platforms: 'Piattaforme',
    android: 'Android',
    ios: 'iOS',
    switch: 'Nintendo Switch',
    featured: 'Giochi in evidenza',
    ccDesc: 'Prendi cornetti, evita pericoli. Arcade "gustoso".',
    frDesc: 'Salti in stile frog con UX moderna.',
    siDesc: 'Difendi la Terra dall\'invasione aliena in questo sparatutto arcade classico.',
    pmDesc: 'Naviga nel labirinto, mangia i puntini ed evita i fantasmi in questo intramontabile classico.',
    aboutTitle: 'Chi è AZUMBO',
    aboutText: 'Piccolo studio indie: giochi rapidi, tech snello, pubblicazione veloce.',
    contactTitle: 'Contattaci',
    email: 'E-mail',
    footer: '© 2025 AZUMBO. Tutti i diritti riservati.',
    navGames: 'Giochi',
    navServices: 'Servizi',
    navContact: 'Contatto',
    servicesTitle: 'Servizi',
    servicesSubtitle: 'Dallo sprint di prototipo al publishing e porting su console.',
    srvProtoTitle: 'Sprint di Prototipo (5–10 giorni)',
    srvProtoDesc: 'Vertical slice veloce: core loop, grafica/sfx base, build per test.',
    srvProtoPrice: 'da €499',
    srvPublishTitle: 'Publishing & UA',
    srvPublishDesc: 'Asset store, QA, soft launch, creatività UA, analytics. Rev-share possibile.',
    srvPublishPrice: 'da €0 + rev-share',
    srvPortTitle: 'Porting su Nintendo Switch',
    srvPortDesc: 'Porting tecnico, input/UI, performance, supporto submission.',
    srvPortPrice: 'preventivo su misura',
    srvCTA: 'Richiedi un preventivo'
  },
  ru: {
    title: 'AZUMBO — инди-студия игр',
    kicker: 'Мобильные игры с юмором и сердцем.',
    subtitle: 'Делаем быстрые, весёлые, вирусные казуалки для Android, iOS и Nintendo Switch.',
    ctaPlay: 'Играть в браузере',
    ctaContact: 'Связаться',
    platforms: 'Платформы',
    android: 'Android',
    ios: 'iOS',
    switch: 'Nintendo Switch',
    featured: 'Избранные игры',
    ccDesc: 'Лови круассаны, избегай опасностей. Вкусный аркадный ран.',
    frDesc: 'Классические "лягушачьи" ходы с современным UX.',
    siDesc: 'Защитите Землю от инопланетного вторжения в этом классическом аркадном шутере.',
    pmDesc: 'Пройдите лабиринт, собирайте точки и избегайте призраков в этой вечной классике.',
    aboutTitle: 'О студии AZUMBO',
    aboutText: 'Маленькая инди-студия: быстрые игры, лёгкая техничка, быстрый релиз.',
    contactTitle: 'Контакты',
    email: 'Почта',
    footer: '© 2025 AZUMBO. Все права защищены.',
    navGames: 'Игры',
    navServices: 'Услуги',
    navContact: 'Контакты',
    servicesTitle: 'Услуги',
    servicesSubtitle: 'От прототипов до паблишинга и портирования на консоли.',
    srvProtoTitle: 'Прототип-спринт (5–10 дней)',
    srvProtoDesc: 'Быстрый vertical slice: кор-луп, базовая графика/звук, билд для тестов.',
    srvProtoPrice: 'от €499',
    srvPublishTitle: 'Паблишинг и UA',
    srvPublishDesc: 'Оформление стор, QA, софт-лонч, креативы, аналитика. Возможен rev-share.',
    srvPublishPrice: 'от €0 + rev-share',
    srvPortTitle: 'Портирование на Nintendo Switch',
    srvPortDesc: 'Технический порт, адаптация ввода/UI, оптимизация, помощь с сабмитом.',
    srvPortPrice: 'по запросу',
    srvCTA: 'Запросить смету'
  }
};

export default function AzumboLanding() {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const saved = window.localStorage.getItem('azumbo-lang') as Lang | null;
    if (saved && ['en', 'it', 'ru'].includes(saved)) {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('azumbo-lang', lang);
  }, [lang]);

  const t = useMemo(() => STRINGS[lang], [lang]);

  // JSON-LD (Org + simple OfferCatalog)
  const orgJson = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AZUMBO',
    url: 'https://azumbo.vercel.app/',
    email: 'azumbogames@gmail.com'
  };
  const catalogJson = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'AZUMBO Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Prototype Sprint' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'EUR', price: '499', minPrice: '499' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Publishing & UA' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'EUR', price: '0' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Porting to Nintendo Switch' } }
    ]
  };

  return (
    <main className="min-h-[100dvh] bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Head-like tags */}
      <link rel="canonical" href="https://azumbo.vercel.app/" />
      <meta name="robots" content="index,follow" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJson) }} />

      {/* COMPACT DARK HEADER */}
      <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 px-[max(env(safe-area-inset-left),0px)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2">
          <nav className="hidden gap-5 text-sm md:flex">
            <a
              href="#games"
              className="rounded-md text-neutral-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white"
            >
              {t.navGames}
            </a>
            <a
              href="#services"
              className="rounded-md text-neutral-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white"
            >
              {t.navServices}
            </a>
            <a
              href="#contact"
              className="rounded-md text-neutral-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white"
            >
              {t.navContact}
            </a>
          </nav>
          <div className="font-black tracking-wider">AZUMBO</div>
          <div className="flex gap-2 text-xs">
            {(['en','it','ru'] as Lang[]).map(k => (
              <button
                key={k}
                onClick={() => setLang(k)}
                className={`rounded-md px-2.5 py-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white ${
                  lang===k ? 'bg-white text-black' : 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700'
                }`}
                aria-pressed={lang===k}
              >
                {k.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">{t.kicker}</p>
        <h1 className="mt-2 text-4xl font-black leading-[1.05] sm:text-6xl">{t.title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300">{t.subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/cornettoclicker"
            className="rounded-xl bg-black px-5 py-3 text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-white dark:text-black dark:focus-visible:outline-white"
          >
            {t.ctaPlay}
          </Link>
          <a
            href="mailto:azumbogames@gmail.com"
            className="rounded-xl border border-neutral-300 px-5 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:border-neutral-700 dark:focus-visible:outline-white"
          >
            {t.ctaContact}
          </a>
        </div>

        {/* Platforms */}
        <div className="mt-10">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{t.platforms}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <Chip>
              <span className="platform-icon">
                <AndroidIcon preserveAspectRatio="xMidYMid meet" fill="currentColor" />
              </span>
              {t.android}
            </Chip>
            <Chip>
              <span className="platform-icon">
                <AppleIcon preserveAspectRatio="xMidYMid meet" fill="currentColor" />
              </span>
              {t.ios}
            </Chip>
            <Chip>
              <span className="platform-icon">
                <SwitchIcon preserveAspectRatio="xMidYMid meet" fill="currentColor" />
              </span>
              {t.switch}
            </Chip>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-2xl font-bold md:text-3xl">{t.servicesTitle}</h2>
        <p className="mt-1 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">{t.servicesSubtitle}</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <ServiceCard title={t.srvProtoTitle} desc={t.srvProtoDesc} price={t.srvProtoPrice}>
            <span className="service-icon">
              <RocketIcon preserveAspectRatio="xMidYMid meet" fill="currentColor" />
            </span>
          </ServiceCard>
          <ServiceCard title={t.srvPublishTitle} desc={t.srvPublishDesc} price={t.srvPublishPrice}>
            <span className="service-icon">
              <MegaphoneIcon preserveAspectRatio="xMidYMid meet" fill="currentColor" />
            </span>
          </ServiceCard>
          <ServiceCard title={t.srvPortTitle} desc={t.srvPortDesc} price={t.srvPortPrice}>
            <span className="service-icon">
              <SwitchIcon preserveAspectRatio="xMidYMid meet" fill="currentColor" />
            </span>
          </ServiceCard>
        </div>
        <div className="mt-5">
          <a
            href="mailto:azumbogames@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-white dark:text-black dark:focus-visible:outline-white"
          >
            {t.srvCTA}
          </a>
        </div>
      </section>

      {/* GAMES */}
      <section id="games" className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">{t.featured}</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <GameCard
            href="/cornettoclicker"
            title="Cornetto Clicker"
            desc={t.ccDesc}
            variant="cornetto"
          />
          <GameCard
            href="/frogger"
            title="Frogger"
            desc={t.frDesc}
            variant="frogger"
          />
          <GameCard
            href="/Spaceinvaders"
            title="Space Invaders"
            desc={t.siDesc}
            variant="space"
          />
          <GameCard
            href="/PacMan"
            title="Pac-Man"
            desc={t.pmDesc}
            variant="pacman"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-5xl px-4 pb-12">
        <h2 className="mb-2 text-2xl font-bold md:text-3xl">{t.aboutTitle}</h2>
        <p className="max-w-3xl leading-relaxed text-neutral-700 dark:text-neutral-300">{t.aboutText}</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-5xl px-4 pb-20">
        <h2 className="mb-2 text-2xl font-bold md:text-3xl">{t.contactTitle}</h2>
        <a
          href="mailto:azumbogames@gmail.com"
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:border-neutral-700 dark:focus-visible:outline-white"
        >
          {t.email}: azumbogames@gmail.com
        </a>
      </section>

      <footer className="border-t py-6 text-center text-sm dark:border-neutral-800">
        {t.footer}
      </footer>
    </main>
  );
}

/* ---------- Small UI helpers (no extra deps) ---------- */
function Chip({ children }: any) {
  return <span className="inline-flex items-center gap-2 rounded-full bg-neutral-200 px-3 py-1 text-sm dark:bg-neutral-800">{children}</span>;
}
function ServiceCard({ title, desc, price, children }: any) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800">
      <div className="flex items-center gap-2 text-lg font-semibold">
        {children} <span>{title}</span>
      </div>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
      <div className="mt-3 inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs font-semibold dark:border-neutral-700">
        {price}
      </div>
    </div>
  );
}
function GameCard({ href, title, desc, variant }: any) {
  const getGradient = () => {
    switch (variant) {
      case 'cornetto': return 'from-amber-500 to-orange-600';
      case 'frogger': return 'from-emerald-500 to-green-600';
      case 'space': return 'from-blue-500 to-purple-600';
      case 'pacman': return 'from-yellow-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'cornetto': return <CroissantIcon className="relative z-10 m-auto h-16 w-16 text-white opacity-90" />;
      case 'frogger': return <FrogIcon className="relative z-10 m-auto h-16 w-16 text-white opacity-90" />;
      case 'space': return <RocketIcon className="relative z-10 m-auto h-16 w-16 text-white opacity-90" />;
      case 'pacman': return <GhostIcon className="relative z-10 m-auto h-16 w-16 text-white opacity-90" />;
      default: return <div className="relative z-10 m-auto h-16 w-16 text-white opacity-90">?</div>;
    }
  };

  const gradient = getGradient();
  const pattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-neutral-200 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:border-neutral-800 dark:focus-visible:outline-white"
    >
      <div
        className={`relative mb-3 aspect-[16/9] w-full overflow-hidden rounded-lg bg-gradient-to-br ${gradient}`}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${pattern})` }}
        />
        {getIcon()}
      </div>
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
      <div className="mt-3 text-xs opacity-70">Web • Android • iOS (soon)</div>
    </Link>
  );
}

/* Icons */
function AndroidIcon(props:any){return(<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M17.6 9.48l1.43-2.49a.5.5 0 10-.87-.5l-1.46 2.54A7.06 7.06 0 0012 8c-1.6 0-3.09.52-4.3 1.03L6.24 6.5a.5.5 0 10-.87.5l1.44 2.5A6.5 6.5 0 005.5 13v5a1.5 1.5 0 001.5 1.5h.5V13h1v6.5h2V13h2v6.5h2V13h1v6.5h.5A1.5 1.5 0 0018.5 18v-5c0-1.41-.39-2.71-.9-3.52z"/></svg>);} 
function AppleIcon(props:any){return(<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M17.64 13.34c-.03-2.32 1.9-3.43 1.99-3.49-1.09-1.6-2.78-1.82-3.38-1.84-1.44-.15-2.81.85-3.54.85-.74 0-1.86-.83-3.06-.8-1.58.02-3.03.92-3.84 2.33-1.64 2.83-.42 7 1.18 9.29.78 1.12 1.71 2.39 2.93 2.34 1.17-.05 1.6-.76 3-.76 1.4 0 1.79.76 3.02.74 1.25-.02 2.04-1.14 2.8-2.27.88-1.29 1.24-2.54 1.26-2.6-.03-.01-2.42-.93-2.36-3.79zM14.87 5.22c.64-.78 1.08-1.87.96-2.95-.93.04-2.06.62-2.73 1.39-.6.69-1.12 1.8-.98 2.87 1.03.08 2.09-.53 2.75-1.31z"/></svg>);} 
function SwitchIcon(props:any){return(<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M9 2H7a3 3 0 00-3 3v14a3 3 0 003 3h2V2zm8 0h-2v20h2a3 3 0 003-3V5a3 3 0 00-3-3zM7.5 7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/></svg>);} 
function RocketIcon(props:any){return(<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14 3l7 7-4 1-2 2-1 4-7-7 4-1 2-2 1-4zM5 19l4-1-3-3-1 4z"/></svg>);} 
function MegaphoneIcon(props:any){return(<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M21 8l-6 3v5l6 3V8zM3 10h9v6H3l2 4H3l-2-4V10h2z"/></svg>);} 
function CroissantIcon(props:any){return(<svg viewBox="0 0 32 32" fill="currentColor" {...props}><path d="M4 16c4-8 20-8 24 0-8-4-16-4-24 0z" stroke="currentColor" strokeWidth="2"/></svg>);} 
function FrogIcon(props:any){return(<svg viewBox="0 0 576 512" fill="currentColor" {...props}><path d="M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416l50.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416l90.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 480c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>);} 
function GhostIcon(props:any){return(<svg viewBox="0 0 384 512" fill="currentColor" {...props}><path d="M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9.6-44.5 2.5L269.3 506c-3.3 3.3-7.7 5.1-12.2 5.1H127c-4.5 0-8.9-1.8-12.2-5.1l-49.1-36.4c-11.7-12.1-31.1-13.2-44.5-2.5zM160 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>);} 

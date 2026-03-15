// page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FloatingSprites from '../../components/FloatingSprites';

type Lang = 'en' | 'it' | 'ru';

const SITE_URL = 'https://azumbo.vercel.app';

const isLang = (value: string): value is Lang => ['en', 'it', 'ru'].includes(value);

const STRINGS: Record<Lang, Record<string, string>> = {
  en: {
    title: 'AZUMBO — Indie Game Studio',
    seoDesc: 'Crafting snackable, high-polish games for mobile and Switch. Explore Bird Lines and our prototype services.',
    kicker: 'Mobile-first games with humor & heart.',
    subtitle: 'We craft fast, funny and viral-ready casual games for Android, iOS and Nintendo Switch.',
    ctaContact: 'Contact',
    platforms: 'Platforms',
    android: 'Android',
    ios: 'iOS',
    switch: 'Nintendo Switch',
    featured: 'Featured games',
    frDesc: 'Classic frog-style hops with modern UX.',
    siDesc: 'Defend Earth from alien invasion in this classic arcade shooter.',
    pmDesc: 'Navigate the maze, eat dots and avoid ghosts in this timeless classic.',
    aboutTitle: 'About AZUMBO',
    aboutText: 'AZUMBO is a tiny indie studio focused on snackable, high-polish games, lean tech and rapid publishing.',
    contactTitle: 'Get in touch',
    email: 'Email',
    footer: '© 2026 AZUMBO. All rights reserved.',
    navGames: 'Games',
    navServices: 'Services',
    navContact: 'Contact',
    servicesTitle: 'Services',
    servicesSubtitle: 'From prototype sprints to publishing and platform ports.',
    srvProtoTitle: 'Prototype Sprint',
    srvProtoDesc: 'Fast vertical slice: core loop, basic art/sfx, deployable build for tests.',
    srvProtoPrice: 'from €499',
    srvPublishTitle: 'Publishing & UA',
    srvPublishDesc: 'Store assets, QA, soft launch, UA creatives, analytics. Rev-share friendly.',
    srvPublishPrice: 'from €0 + rev-share',
    srvPortTitle: 'Porting to Nintendo Switch',
    srvPortDesc: 'Technical port, input/UI adaption, performance pass, submission support.',
    srvPortPrice: 'custom quote',
    srvCTA: 'Request a quote',
    birdTitle: 'Current Project: Bird Lines',
    birdSubtitle: 'From Pages to Pixels',
    birdDescription: `Bird Lines is more than a game; it is a match-3 journey inspired by the story 'Paris in the Plain.' Experience a meditative trip through Paris with Ellie, where puzzles meet storytelling.`,
    birdStatus: 'Status: In Development (Calabria, Italy)',
    waitlistCTA: 'Join the Waitlist',
    valuesTitle: 'Studio Roadmap',
    valuesItems: 'Minimalism · Mental Resilience · Intelligent Humor',
    pressLine: 'For publishers & press: azumbogames@gmail.com'
  },
  it: {
    title: 'AZUMBO — Studio Giochi Indie',
    seoDesc: 'Sviluppo giochi mobile e Switch in Calabria. Scopri Bird Lines e i nostri servizi di prototipazione.',
    kicker: 'Giochi mobile-first con umorismo e cuore.',
    subtitle: 'Creiamo giochi casual veloci e divertenti per Android, iOS e Nintendo Switch.',
    ctaContact: 'Contatto',
    platforms: 'Piattaforme',
    android: 'Android',
    ios: 'iOS',
    switch: 'Nintendo Switch',
    featured: 'Giochi in evidenza',
    frDesc: 'Salti in stile frog con UX moderna.',
    siDesc: 'Difendi la Terra dall\'invasione aliena.',
    pmDesc: 'Naviga nel labirinto, mangia i puntini ed evita i fantasmi.',
    aboutTitle: 'Chi è AZUMBO',
    aboutText: 'Piccolo studio indie: giochi rapidi, tech snello, pubblicazione veloce.',
    contactTitle: 'Contattaci',
    email: 'E-mail',
    footer: '© 2026 AZUMBO. Tutti i diritti riservati.',
    navGames: 'Giochi',
    navServices: 'Servizi',
    navContact: 'Contatto',
    servicesTitle: 'Servizi',
    servicesSubtitle: 'Dallo sprint di prototipo al publishing e porting su console.',
    srvProtoTitle: 'Sprint di Prototipo',
    srvProtoDesc: 'Vertical slice veloce: core loop, grafica/sfx base, build per test.',
    srvProtoPrice: 'da €499',
    srvPublishTitle: 'Publishing & UA',
    srvPublishDesc: 'Asset store, QA, soft launch, creatività UA, analytics.',
    srvPublishPrice: 'da €0 + rev-share',
    srvPortTitle: 'Porting su Nintendo Switch',
    srvPortDesc: 'Porting tecnico, input/UI, performance, supporto submission.',
    srvPortPrice: 'preventivo su misura',
    srvCTA: 'Richiedi un preventivo',
    birdTitle: 'Progetto attuale: Bird Lines',
    birdSubtitle: 'Dalle pagine ai pixel',
    birdDescription: `Bird Lines è un match-3 ispirato alla storia 'Paris in the Plain.' Un viaggio attraverso Parigi insieme ad Ellie, la protagonista del libro, dove il puzzle incontra la narrazione.`,
    birdStatus: 'Stato: In sviluppo (Calabria, Italia)',
    waitlistCTA: 'Unisciti alla Waitlist',
    valuesTitle: 'Studio Roadmap',
    valuesItems: 'Minimalism · Mental Resilience · Intelligent Humor',
    pressLine: 'Per editori e stampa: azumbogames@gmail.com'
  },
  ru: {
    title: 'AZUMBO — инди-студия игр',
    seoDesc: 'Разработка мобильных игр и портов на Switch. Bird Lines — match-3 по книге в атмосфере Парижа.',
    kicker: 'Мобильные игры с юмором и душой',
    subtitle: 'Делаем быстрые, весёлые, вирусные казуалки для Android, iOS и Nintendo Switch.',
    ctaContact: 'Связаться',
    platforms: 'Платформы',
    android: 'Android',
    ios: 'iOS',
    switch: 'Nintendo Switch',
    featured: 'Избранные игры',
    frDesc: 'Классические ходы лягушки с современным UX.',
    siDesc: 'Защитите Землю от инопланетного вторжения.',
    pmDesc: 'Пройдите лабиринт, собирайте точки и избегайте призраков.',
    aboutTitle: 'О студии AZUMBO',
    aboutText: 'Маленькая инди-студия: быстрые игры, лёгкая техничка, быстрый релиз.',
    contactTitle: 'Контакты',
    email: 'Почта',
    footer: '© 2026 AZUMBO. Все права защищены.',
    navGames: 'Игры',
    navServices: 'Услуги',
    navContact: 'Контакты',
    servicesTitle: 'Услуги',
    servicesSubtitle: 'От прототипов до паблишинга и портирования на консоли.',
    srvProtoTitle: 'Прототип-спринт',
    srvProtoDesc: 'Быстрый vertical slice: кор-луп, базовая графика/звук, билд для тестов.',
    srvProtoPrice: 'от €499',
    srvPublishTitle: 'Паблишинг и UA',
    srvPublishDesc: 'Оформление сторов, QA, софт-лонч, креативы, аналитика.',
    srvPublishPrice: 'от €0 + rev-share',
    srvPortTitle: 'Портирование на Nintendo Switch',
    srvPortDesc: 'Технический порт, адаптация ввода/UI, оптимизация, помощь с сабмитом.',
    srvPortPrice: 'по запросу',
    srvCTA: 'Запросить смету',
    birdTitle: 'Текущий проект: Bird Lines',
    birdSubtitle: 'От страниц к пикселям',
    birdDescription: `Bird Lines — это match-3 по мотивам истории 'Paris in the Plain.' Путешествие по Парижу вместе с Элли, где механика пазла переплетается с сюжетом книги.`,
    birdStatus: 'Статус: В разработке (Калабрия, Италия)',
    waitlistCTA: 'В лист ожидания',
    valuesTitle: 'Studio Roadmap',
    valuesItems: 'Minimalism · Mental Resilience · Intelligent Humor',
    pressLine: 'Для издателей и прессы: azumbogames@gmail.com'
  }
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang: Lang = isLang(locale) ? locale : 'en';
  const t = STRINGS[lang];
  const canonicalPath = lang === 'en' ? '/' : `/${lang}`;

  return {
    title: t.title,
    description: t.seoDesc,
    alternates: {
      canonical: `${SITE_URL}${canonicalPath}`,
      languages: {
        'en': `${SITE_URL}/en`,
        'it': `${SITE_URL}/it`,
        'ru': `${SITE_URL}/ru`,
        'x-default': `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title: t.title,
      description: t.seoDesc,
      url: `${SITE_URL}${canonicalPath}`,
      siteName: 'AZUMBO',
      locale: lang,
      type: 'website',
      images: [{ url: `${SITE_URL}/logo/Azumbo Logo no background small size.jpeg` }],
    },
  };
}

export default async function AzumboLanding({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const routeLang: Lang = isLang(locale) ? locale : 'en';
  const t = STRINGS[routeLang];

  const renderBirdDescription = (description: string) => {
    const bookTitle = 'Paris in the Plain';
    const parts = description.split(bookTitle);
    if (parts.length === 1) return description;
    return (
      <>
        {parts[0]}<em>{bookTitle}</em>{parts.slice(1).join(bookTitle)}
      </>
    );
  };

  const orgJson = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AZUMBO',
    url: SITE_URL,
    logo: `${SITE_URL}/logo/Azumbo Logo no background small size.jpeg`,
    email: 'azumbogames@gmail.com'
  };

  return (
    <main className="landing-shell min-h-[100dvh] overflow-x-hidden bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }} />

      {/* FIXED HEADER */}
      <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/90 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          
          {/* Desktop Nav */}
          <nav className="hidden shrink-0 items-center gap-6 text-sm md:flex">
            <a href="#games" className="text-neutral-300 hover:text-white transition">{t.navGames}</a>
            <a href="#services" className="text-neutral-300 hover:text-white transition">{t.navServices}</a>
            <a href="#contact" className="text-neutral-300 hover:text-white transition">{t.navContact}</a>
          </nav>

          {/* Centered Logo */}
          <div className="flex flex-1 items-center justify-center px-4">
             <div className="hidden h-[1px] flex-1 bg-neutral-800 md:block"></div>
             <Link href={`/${routeLang}`} className="mx-4">
               <Image
                  src="/assets/logo/azumbo-logo.png"
                  alt="AZUMBO Logo"
                  width={180}
                  height={44}
                  priority
                  className="h-[32px] w-auto object-contain md:h-[40px]"
                />
             </Link>
             <div className="hidden h-[1px] flex-1 bg-neutral-800 md:block"></div>
          </div>

          {/* Lang Switcher */}
          <div className="flex gap-2">
            {(['en', 'it', 'ru'] as Lang[]).map((k) => (
              <Link
                key={k}
                href={k === 'en' ? '/en' : `/${k}`}
                className={`rounded px-2 py-1 text-xs transition ${
                  routeLang === k ? 'bg-white text-black' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                {k.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Nav (Simplified horizontal) */}
        <nav className="mt-3 flex items-center justify-center gap-6 text-xs md:hidden">
          <a href="#games" className="text-neutral-400">{t.navGames}</a>
          <a href="#services" className="text-neutral-400">{t.navServices}</a>
          <a href="#contact" className="text-neutral-400">{t.navContact}</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-5xl px-4 py-16 md:py-24">
        <FloatingSprites />
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{t.kicker}</p>
        <Image
          src="/assets/logo/azumbo-logo.png"
          alt="AZUMBO Emblem"
          width={320}
          height={80}
          priority
          className="mt-6 h-auto w-[180px] sm:w-[220px]"
        />
        <h1 className="mt-5 text-5xl font-black leading-tight sm:text-7xl">{t.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">{t.subtitle}</p>
        <div className="mt-8">
          <a href="mailto:azumbogames@gmail.com" className="inline-block rounded-xl border border-neutral-300 px-6 py-3 font-medium transition hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900">
            {t.ctaContact}
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold">{t.servicesTitle}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <ServiceCard title={t.srvProtoTitle} desc={t.srvProtoDesc} price={t.srvProtoPrice} />
          <ServiceCard title={t.srvPublishTitle} desc={t.srvPublishDesc} price={t.srvPublishPrice} />
          <ServiceCard title={t.srvPortTitle} desc={t.srvPortDesc} price={t.srvPortPrice} />
        </div>
      </section>

      {/* GAMES SECTION & BIRD LINES */}
      <section id="games" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">{t.featured}</h2>
        <div className="grid gap-6 md:grid-cols-3">
           <GameCard title="Frogger" href="/frogger" desc={t.frDesc} gradient="from-emerald-500 to-green-600" />
           <GameCard title="Invaders" href="/Spaceinvaders" desc={t.siDesc} gradient="from-blue-500 to-indigo-600" />
           <GameCard title="Pac-Man" href="/PacMan" desc={t.pmDesc} gradient="from-yellow-400 to-orange-500" />
        </div>

        {/* BIRD LINES SPOTLIGHT */}
        <article className="mt-16 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex flex-col md:flex-row">
            <div className="bg-neutral-100 p-8 md:w-1/3 dark:bg-neutral-800">
              <video className="mx-auto h-72 rounded-2xl shadow-lg" controls preload="metadata">
                <source src="/WhoopsBirdLines.mp4#t=2" type="video/mp4" />
              </video>
            </div>
            <div className="p-8 md:w-2/3">
              <h3 className="text-2xl font-bold uppercase tracking-wider">{t.birdTitle}</h3>
              <p className="mt-2 italic text-neutral-500">{t.birdSubtitle}</p>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                {renderBirdDescription(t.birdDescription)}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-sm font-semibold text-neutral-500">{t.birdStatus}</span>
                <a href="mailto:azumbogames@gmail.com?subject=Waitlist" className="rounded-full bg-black px-6 py-2 text-sm text-white dark:bg-white dark:text-black">
                  {t.waitlistCTA}
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="mt-6 rounded-3xl border border-neutral-200 bg-white/80 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/70">
          <p className="text-xs uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">{t.valuesTitle}</p>
          <p className="mt-2 text-base font-medium text-neutral-800 dark:text-neutral-100">{t.valuesItems}</p>
        </article>
      </section>

      <footer className="border-t border-neutral-200 py-10 text-center dark:border-neutral-800">
        <p className="text-sm text-neutral-500">{t.footer}</p>
        <p className="mt-2 text-xs text-neutral-400">{t.pressLine}</p>
      </footer>
    </main>
  );
}

/* UI COMPONENTS */
function ServiceCard({ title, desc, price }: any) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6 transition hover:shadow-lg dark:border-neutral-800">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-500">{desc}</p>
      <div className="mt-4 inline-block rounded-lg bg-neutral-100 px-3 py-1 text-xs font-bold dark:bg-neutral-800">
        {price}
      </div>
    </div>
  );
}

function GameCard({ title, href, desc, gradient }: any) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-neutral-200 transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:border-neutral-800"
    >
      <div className={`h-32 bg-gradient-to-br ${gradient}`}></div>
      <div className="p-5">
        <h4 className="font-bold">{title}</h4>
        <p className="mt-1 text-sm text-neutral-500">{desc}</p>
      </div>
    </Link>
  );
}

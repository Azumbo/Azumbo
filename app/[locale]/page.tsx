// page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FloatingSprites from '../../components/FloatingSprites';
import { ProjectSpotlight } from '../../components/ProjectSpotlight';
import { JsonLd } from '../../components/seo/JsonLd';
import { birdLinesWatchPath } from '../../lib/birdLinesVideo';
import { getAppBySlug } from '../../lib/apps';
import { HOME_BLUF, HOME_FAQ } from '../../lib/homeFaq';
import { SITE_URL, baseMetadata, buildHomeGraph, buildLanguageAlternates, isSupportedLocale, LOCALE_OG } from '../../lib/seo';

const CIRO_MAP_APP_STORE_URL = getAppBySlug('ciromap')!.appStoreUrl;

type Lang = 'en' | 'it' | 'ru';

const WAITLIST_MAILTO =
  'mailto:azumbogames@gmail.com?subject=BirdLines%20Beta%20Waitlist&body=EN%3A%20Please%20send%20me%20updates%20when%20the%20BirdLines%20beta%20is%20ready.%0AIT%3A%20Per%20favore%2C%20inviatemi%20aggiornamenti%20quando%20la%20beta%20di%20BirdLines%20%C3%A8%20pronta.';

const isLang = (value: string): value is Lang => isSupportedLocale(value);

const STRINGS: Record<Lang, Record<string, string>> = {
  en: {
    title: 'AZUMBO | Indie Mobile Game Studio',
    seoDesc:
      'US indie studio building mobile and Nintendo Switch games. Prototype sprints, publishing, UA support, and platform ports for Android and iOS.',
    kicker: 'Mobile-first games with humor & heart.',
    subtitle: 'We craft fast, funny and viral-ready casual games for Android, iOS and Nintendo Switch.',
    ctaContact: 'Contact',
    platforms: 'Platforms',
    android: 'Android',
    ios: 'iOS',
    switch: 'Nintendo Switch',
    featured: 'Featured games',
    projectsTitle: 'Studio projects',
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
    navLaPasta: 'La Pasta',
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
    birdDescription: `Bird Lines is more than a game; it is a match-3 journey inspired by the story 'City In The Plane' Experience a meditative trip through Paris with Ellie, where puzzles meet storytelling.`,
    birdStatus: 'Status: In Development (Calabria, Italy)',
    waitlistCTA: 'Join the Waitlist',
    videoLinkLabel: 'Watch trailer',
    valuesTitle: 'Studio Roadmap',
    valuesItems: 'Minimalism · Mental Resilience · Intelligent Humor',
    faqTitle: 'FAQ',
    pressLine: 'For publishers & press: azumbogames@gmail.com',
    ciroPrivacy: 'Ciro.Map Privacy',
    lapastaTitle: 'La Pasta: 60s Challenge',
    lapastaSubtitle: 'Italian pasta shape quiz',
    lapastaDescription:
      'A warm iOS quiz for iPhone and iPad: glass jars shuffle, you name the pasta family, and collect shapes in quick 60-second rounds.',
    lapastaStatus: 'Status: Live on the App Store',
    lapastaCTA: 'View app',
    azumboxTitle: 'Azumbox',
    azumboxSubtitle: 'Curated spontaneity, pocket-sized',
    azumboxDescription:
      'A polished mobile game concept with calm pacing, elegant visuals, and smart casual mechanics — designed as a small daily ritual.',
    azumboxStatus: 'Status: In development',
    azumboxCTA: 'Explore Azumbox',
    ciromapTitle: 'Ciro.Map',
    ciromapSubtitle: 'Cirò Marina travel guide',
    ciromapDescription:
      'An iOS travel guide for Cirò Marina, Calabria: discover nearby places, routes, categories, and a private loyalty wallet.',
    ciromapStatus: 'Status: Live on the App Store',
    ciromapCTA: 'Download on App Store',
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
    projectsTitle: 'Progetti dello studio',
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
    navLaPasta: 'La Pasta',
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
    birdDescription: `Bird Lines è un match-3 ispirato alla storia 'City In The Plane' Un viaggio attraverso Parigi insieme ad Ellie, la protagonista del libro, dove il puzzle incontra la narrazione.`,
    birdStatus: 'Stato: In sviluppo (Calabria, Italia)',
    waitlistCTA: 'Unisciti alla Waitlist',
    videoLinkLabel: 'Guarda il trailer',
    valuesTitle: 'Studio Roadmap',
    valuesItems: 'Minimalism · Mental Resilience · Intelligent Humor',
    faqTitle: 'Domande frequenti',
    pressLine: 'Per editori e stampa: azumbogames@gmail.com',
    ciroPrivacy: 'Privacy Ciro.Map',
    lapastaTitle: 'La Pasta: 60s Challenge',
    lapastaSubtitle: 'Quiz sulle forme di pasta',
    lapastaDescription:
      'Quiz iOS per iPhone e iPad: barattoli di vetro si mescolano, indovini la famiglia di pasta e collezioni forme in round da 60 secondi.',
    lapastaStatus: 'Stato: Live su App Store',
    lapastaCTA: 'Vedi app',
    azumboxTitle: 'Azumbox',
    azumboxSubtitle: 'Spontaneità curata, tascabile',
    azumboxDescription:
      'Concept di gioco mobile con ritmo calmo, estetica elegante e meccaniche casual intelligenti — un piccolo rituale quotidiano.',
    azumboxStatus: 'Stato: In sviluppo',
    azumboxCTA: 'Scopri Azumbox',
    ciromapTitle: 'Ciro.Map',
    ciromapSubtitle: 'Guida di viaggio a Cirò Marina',
    ciromapDescription:
      'Guida iOS per Cirò Marina, Calabria: scopri luoghi vicini, percorsi, categorie e un wallet fedeltà privato.',
    ciromapStatus: 'Stato: Live su App Store',
    ciromapCTA: 'Scarica su App Store',
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
    projectsTitle: 'Проекты студии',
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
    navLaPasta: 'La Pasta',
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
    birdDescription: `Bird Lines — это match-3 по мотивам истории 'City In The Plane' Путешествие по Парижу вместе с Элли, где механика пазла переплетается с сюжетом книги.`,
    birdStatus: 'Статус: В разработке (Калабрия, Италия)',
    waitlistCTA: 'В лист ожидания',
    videoLinkLabel: 'Смотреть трейлер',
    valuesTitle: 'Studio Roadmap',
    valuesItems: 'Minimalism · Mental Resilience · Intelligent Humor',
    faqTitle: 'Частые вопросы',
    pressLine: 'Для издателей и прессы: azumbogames@gmail.com',
    ciroPrivacy: 'Конфиденциальность Ciro.Map',
    lapastaTitle: 'La Pasta: 60s Challenge',
    lapastaSubtitle: 'Итальянская викторина о пасте',
    lapastaDescription:
      'iOS-викторина для iPhone и iPad: стеклянные банки перемешиваются, вы угадываете семейство пасты и собираете коллекцию за 60 секунд.',
    lapastaStatus: 'Статус: В App Store',
    lapastaCTA: 'Смотреть приложение',
    azumboxTitle: 'Azumbox',
    azumboxSubtitle: 'Продуманная спонтанность в кармане',
    azumboxDescription:
      'Мобильная игра с спокойным ритмом, элегантной эстетикой и умной casual-механикой — небольшой ежедневный ритуал.',
    azumboxStatus: 'Статус: В разработке',
    azumboxCTA: 'Об Azumbox',
    ciromapTitle: 'Ciro.Map',
    ciromapSubtitle: 'Путеводитель по Cirò Marina',
    ciromapDescription:
      'iOS-гид по Cirò Marina, Калабрия: места рядом, маршруты, категории и приватный wallet для карт лояльности.',
    ciromapStatus: 'Статус: В App Store',
    ciromapCTA: 'Скачать в App Store',
  }
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang: Lang = isLang(locale) ? locale : 'en';
  const t = STRINGS[lang];
  const canonicalPath = `/${lang}`;

  return {
    ...baseMetadata(canonicalPath),
    title: t.title,
    description: t.seoDesc,
    alternates: {
      canonical: `${SITE_URL}${canonicalPath}`,
      languages: buildLanguageAlternates(canonicalPath)
    },
    openGraph: {
      title: t.title,
      description: t.seoDesc,
      url: `${SITE_URL}${canonicalPath}`,
      siteName: 'AZUMBO',
      locale: LOCALE_OG[lang],
      alternateLocale: (['en', 'it', 'ru'] as const).filter((l) => l !== lang).map((l) => LOCALE_OG[l]),
      type: 'website',
      images: [{ url: `${SITE_URL}/logo/Azumbo Logo no background small size.jpeg`, alt: 'AZUMBO logo' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.seoDesc,
      images: [`${SITE_URL}/logo/Azumbo Logo no background small size.jpeg`],
    },
    robots: { index: true, follow: true },
  };
}

export default async function AzumboLanding({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const routeLang: Lang = isLang(locale) ? locale : 'en';
  const t = STRINGS[routeLang];

  const renderBirdDescription = (description: string) => {
    const bookTitle = 'City In The Plane';
    const parts = description.split(bookTitle);
    if (parts.length === 1) return description;
    return (
      <>
        {parts[0]}<em>{bookTitle}</em>{parts.slice(1).join(bookTitle)}
      </>
    );
  };

  const structuredData = buildHomeGraph(routeLang);

  return (
    <main className="landing-shell min-h-[100dvh] overflow-x-hidden bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <JsonLd data={structuredData} />

      {/* FIXED HEADER */}
      <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/90 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          
          {/* Desktop Nav */}
          <nav className="flex shrink-0 items-center gap-4 text-xs sm:gap-6 sm:text-sm">
            <a href="#games" className="text-neutral-300 hover:text-white transition">{t.navGames}</a>
            <a href="#services" className="text-neutral-300 hover:text-white transition">{t.navServices}</a>
            <a href="#contact" className="text-neutral-300 hover:text-white transition">{t.navContact}</a>
            <Link href="/lapasta" className="text-neutral-300 hover:text-white transition">{t.navLaPasta}</Link>
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

      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-5xl px-4 py-16 md:py-24">
        <FloatingSprites />
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{t.kicker}</p>
        <h1 className="mt-5 text-5xl font-black leading-tight sm:text-7xl">{t.title}</h1>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-neutral-800 dark:text-neutral-200">
          {HOME_BLUF[routeLang]}
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">{t.subtitle}</p>
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
           <GameCard
             title="Frogger"
             href="/frogger"
             desc={t.frDesc}
             gradient="from-emerald-500 via-green-500 to-lime-500"
             icon="🐸"
             deco="float"
           />
           <GameCard
             title="Space Invaders"
             href="/spaceinvaders"
             desc={t.siDesc}
             gradient="from-indigo-500 via-blue-500 to-cyan-400"
             icon="👾"
             deco="stars"
           />
           <GameCard
             title="Pac-Man"
             href="/pacman"
             desc={t.pmDesc}
             gradient="from-yellow-400 via-amber-400 to-orange-500"
             icon="🟡"
             deco="dots"
           />
        </div>

        <h3 className="mb-6 mt-16 text-2xl font-bold sm:text-3xl">{t.projectsTitle}</h3>
        <div className="space-y-6">
          <ProjectSpotlight
            title={t.birdTitle}
            subtitle={t.birdSubtitle}
            description={renderBirdDescription(t.birdDescription)}
            status={t.birdStatus}
            ctaLabel={t.videoLinkLabel}
            ctaHref={birdLinesWatchPath(routeLang)}
            visual={
              <Link
                href={birdLinesWatchPath(routeLang)}
                className="group relative mx-auto block h-64 w-full max-w-xs overflow-hidden rounded-2xl shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-700 sm:h-72"
                aria-label={t.videoLinkLabel}
              >
                <Image
                  src="/assets/logo/azumbo-logo.png"
                  alt="Bird Lines trailer preview"
                  width={320}
                  height={288}
                  className="h-full w-full object-contain bg-neutral-900/5 p-6 dark:bg-neutral-950"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/35">
                  <span className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-black shadow">
                    ▶ {t.videoLinkLabel}
                  </span>
                </span>
              </Link>
            }
          />

          <ProjectSpotlight
            title={t.lapastaTitle}
            subtitle={t.lapastaSubtitle}
            description={t.lapastaDescription}
            status={t.lapastaStatus}
            ctaLabel={t.lapastaCTA}
            ctaHref="/lapasta"
            visual={
              <Link
                href="/lapasta"
                className="mx-auto block h-64 w-full max-w-xs overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-6 shadow-lg ring-1 ring-amber-200/80 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-rose-950/40 dark:ring-amber-900/50 sm:h-72"
                aria-label={t.lapastaTitle}
              >
                <div className="flex h-full flex-col justify-between rounded-xl border border-white/70 bg-white/70 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/60">
                  <div className="flex items-center justify-between text-xs font-medium text-amber-900/70 dark:text-amber-100/80">
                    <span>La Pasta</span>
                    <span>00:42</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-3xl">
                    <span className="rounded-xl bg-white/80 p-3 text-center shadow-sm dark:bg-neutral-800/80">🍝</span>
                    <span className="rounded-xl bg-white/80 p-3 text-center shadow-sm dark:bg-neutral-800/80">〰️</span>
                    <span className="rounded-xl bg-white/80 p-3 text-center shadow-sm dark:bg-neutral-800/80">🥟</span>
                    <span className="rounded-xl bg-white/80 p-3 text-center shadow-sm dark:bg-neutral-800/80">✦</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold uppercase tracking-wide text-amber-900/80 dark:text-amber-100/80">
                    <span className="rounded-full bg-amber-100/90 px-2 py-1 text-center dark:bg-amber-900/50">corta</span>
                    <span className="rounded-full bg-amber-100/90 px-2 py-1 text-center dark:bg-amber-900/50">lunga</span>
                  </div>
                </div>
              </Link>
            }
          />

          <ProjectSpotlight
            title={t.azumboxTitle}
            subtitle={t.azumboxSubtitle}
            description={t.azumboxDescription}
            status={t.azumboxStatus}
            ctaLabel={t.azumboxCTA}
            ctaHref="/azumbox"
            visual={
              <Link
                href="/azumbox"
                className="mx-auto block h-64 w-full max-w-xs overflow-hidden rounded-[2rem] border border-neutral-800/60 bg-neutral-900 p-1.5 shadow-lg sm:h-72"
                aria-label={t.azumboxTitle}
              >
                <div className="flex h-full flex-col items-center justify-center rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-950">
                  <span className="text-5xl">◻︎</span>
                  <span className="mt-4 text-xs uppercase tracking-[0.2em] text-neutral-500">Demo preview</span>
                </div>
              </Link>
            }
          />

          <ProjectSpotlight
            title={t.ciromapTitle}
            subtitle={t.ciromapSubtitle}
            description={t.ciromapDescription}
            status={t.ciromapStatus}
            ctaLabel={t.ciromapCTA}
            ctaHref={CIRO_MAP_APP_STORE_URL}
            external
            visual={
              <Link
                href="/ciromap"
                className="mx-auto flex h-64 w-full max-w-xs items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#f6efe3] via-[#efe4d4] to-[#e7d8c3] p-8 shadow-lg ring-1 ring-[#dcc9aa] sm:h-72 dark:from-[#2a241c] dark:via-[#1f1a14] dark:to-[#15120e] dark:ring-[#4a3f31]"
                aria-label={t.ciromapTitle}
              >
                <Image
                  src="/ciromap/app-icon-192.png"
                  alt="Ciro.Map app icon"
                  width={160}
                  height={160}
                  className="rounded-[2rem] shadow-xl ring-1 ring-black/5"
                />
              </Link>
            }
          />
        </div>

        <article className="mt-6 rounded-3xl border border-neutral-200 bg-white/80 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/70">
          <p className="text-xs uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">{t.valuesTitle}</p>
          <p className="mt-2 text-base font-medium text-neutral-800 dark:text-neutral-100">{t.valuesItems}</p>
        </article>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold">{t.faqTitle}</h2>
        <dl className="mt-8 space-y-4">
          {HOME_FAQ[routeLang].map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
              <dt className="font-semibold">{faq.question}</dt>
              <dd className="mt-2 text-neutral-600 dark:text-neutral-300">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer id="contact" className="border-t border-neutral-200 py-10 text-center dark:border-neutral-800">
        <p className="text-sm text-neutral-500">{t.footer}</p>
        <p className="mt-2 text-xs text-neutral-400">{t.pressLine}</p>
        <p className="mt-3 text-xs"><Link href="/lapasta" className="text-neutral-500 underline-offset-4 transition hover:text-neutral-900 hover:underline dark:hover:text-white">La Pasta</Link><span className="mx-2 text-neutral-300">·</span><Link href="/ciromap/privacy" className="text-neutral-500 underline-offset-4 transition hover:text-neutral-900 hover:underline dark:hover:text-white">{t.ciroPrivacy}</Link></p>
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

function GameCard({ title, href, desc, gradient, icon, deco }: any) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-neutral-200 transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:border-neutral-800"
    >
      <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        <div className="absolute left-4 top-4 text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">{icon}</div>
        {deco === 'float' && (
          <>
            <span className="absolute bottom-4 right-6 h-4 w-4 animate-bounce rounded-full bg-white/70"></span>
            <span className="absolute right-12 top-10 h-2 w-2 animate-pulse rounded-full bg-lime-100"></span>
          </>
        )}
        {deco === 'stars' && (
          <div className="absolute inset-0">
            <span className="absolute left-14 top-7 h-1.5 w-1.5 animate-pulse rounded-full bg-white"></span>
            <span className="absolute right-10 top-5 h-1 w-1 animate-ping rounded-full bg-cyan-100"></span>
            <span className="absolute bottom-7 right-16 h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-100"></span>
          </div>
        )}
        {deco === 'dots' && (
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-100"></span>
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-amber-100 [animation-delay:220ms]"></span>
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-100 [animation-delay:420ms]"></span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h4 className="font-bold tracking-wide">{title}</h4>
        <p className="mt-1 text-sm text-neutral-500">{desc}</p>
      </div>
    </Link>
  );
}

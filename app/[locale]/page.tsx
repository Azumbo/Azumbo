// page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CinematicAmbient from '../../components/CinematicAmbient';
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
    <main className="landing-shell relative min-h-[100dvh] overflow-x-hidden bg-obsidian text-ink-primary">
      <JsonLd data={structuredData} />

      <header className="glass-header gpu-layer sticky top-0 z-40 px-4 py-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <nav className="flex shrink-0 items-center gap-4 text-xs sm:gap-6 sm:text-sm">
            <a href="#games" className="text-ink-secondary transition-colors duration-300 ease-fluid hover:text-ink-primary">
              {t.navGames}
            </a>
            <a href="#services" className="text-ink-secondary transition-colors duration-300 ease-fluid hover:text-ink-primary">
              {t.navServices}
            </a>
            <a href="#contact" className="text-ink-secondary transition-colors duration-300 ease-fluid hover:text-ink-primary">
              {t.navContact}
            </a>
            <Link href="/lapasta" className="text-ink-secondary transition-colors duration-300 ease-fluid hover:text-ink-primary">
              {t.navLaPasta}
            </Link>
          </nav>

          <div className="flex flex-1 items-center justify-center px-4">
            <div className="section-divider hidden h-px flex-1 md:block" />
            <Link href={`/${routeLang}`} className="mx-4 gpu-layer transition-transform duration-300 ease-fluid hover:scale-[1.02]">
              <Image
                src="/assets/logo/azumbo-logo.png"
                alt="AZUMBO Logo"
                width={180}
                height={44}
                priority
                className="h-[30px] w-auto object-contain opacity-95 md:h-[38px]"
              />
            </Link>
            <div className="section-divider hidden h-px flex-1 md:block" />
          </div>

          <div className="flex gap-1.5">
            {(['en', 'it', 'ru'] as Lang[]).map((k) => (
              <Link
                key={k}
                href={k === 'en' ? '/en' : `/${k}`}
                className={`rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-all duration-300 ease-fluid ${
                  routeLang === k
                    ? 'bg-champagne/90 text-obsidian shadow-glow'
                    : 'glass-surface text-ink-secondary hover:bg-white/8 hover:text-ink-primary'
                }`}
              >
                {k.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-5xl px-4 py-16 md:py-24">
        <CinematicAmbient />
        <p className="chic-kicker relative">{t.kicker}</p>
        <h1 className="chic-heading relative mt-5 text-4xl sm:text-6xl md:text-7xl">{t.title}</h1>
        <p className="relative mt-6 max-w-2xl text-lg font-normal leading-relaxed tracking-wide text-ink-primary/90">
          {HOME_BLUF[routeLang]}
        </p>
        <p className="chic-body relative mt-4 max-w-2xl text-lg">{t.subtitle}</p>
        <div className="relative mt-8">
          <a href="mailto:azumbogames@gmail.com" className="btn-accent gpu-layer">
            {t.ctaContact}
          </a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="chic-heading text-3xl">{t.servicesTitle}</h2>
        <p className="chic-body mt-3 max-w-2xl">{t.servicesSubtitle}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <ServiceCard title={t.srvProtoTitle} desc={t.srvProtoDesc} price={t.srvProtoPrice} />
          <ServiceCard title={t.srvPublishTitle} desc={t.srvPublishDesc} price={t.srvPublishPrice} />
          <ServiceCard title={t.srvPortTitle} desc={t.srvPortDesc} price={t.srvPortPrice} />
        </div>
      </section>

      <section id="games" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="chic-heading mb-2 text-3xl">{t.featured}</h2>
        <div className="featured-games-grid mt-8">
          <GameCard title="Frogger" href="/frogger" desc={t.frDesc} tone="forest" label="FR" />
          <GameCard title="Space Invaders" href="/spaceinvaders" desc={t.siDesc} tone="midnight" label="SI" />
          <GameCard title="Pac-Man" href="/pacman" desc={t.pmDesc} tone="amber" label="PM" />
        </div>

        <h3 className="chic-heading mb-6 mt-16 text-2xl sm:text-3xl">{t.projectsTitle}</h3>
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
                className="group gpu-layer relative mx-auto block h-64 w-full max-w-xs overflow-hidden rounded-squircle-lg shadow-glass-sm ring-1 ring-white/10 sm:h-72"
                aria-label={t.videoLinkLabel}
              >
                <Image
                  src="/assets/logo/azumbo-logo.png"
                  alt="Bird Lines trailer preview"
                  width={320}
                  height={288}
                  className="h-full w-full bg-charcoal/60 object-contain p-8"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 ease-fluid group-hover:bg-black/40">
                  <span className="glass-surface rounded-full px-4 py-2 text-sm font-medium text-ink-primary">
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
                className="gpu-layer mx-auto block h-64 w-full max-w-xs overflow-hidden rounded-squircle-lg bg-gradient-to-br from-white/10 via-white/5 to-champagne/10 p-5 shadow-glass-sm ring-1 ring-white/10 sm:h-72"
                aria-label={t.lapastaTitle}
              >
                <div className="glass-surface flex h-full flex-col justify-between rounded-squircle p-4">
                  <div className="flex items-center justify-between text-xs font-medium tracking-wide text-ink-secondary">
                    <span>La Pasta</span>
                    <span>00:42</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-2xl">
                    <span className="glass-surface rounded-squircle p-3 text-center">🍝</span>
                    <span className="glass-surface rounded-squircle p-3 text-center">〰️</span>
                    <span className="glass-surface rounded-squircle p-3 text-center">🥟</span>
                    <span className="glass-surface rounded-squircle p-3 text-center">✦</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-medium uppercase tracking-chic text-champagne-light/80">
                    <span className="rounded-full bg-champagne/15 px-2 py-1 text-center">corta</span>
                    <span className="rounded-full bg-champagne/15 px-2 py-1 text-center">lunga</span>
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
                className="gpu-layer mx-auto block h-64 w-full max-w-xs overflow-hidden rounded-squircle-xl border border-white/10 bg-charcoal p-1.5 shadow-glass-sm sm:h-72"
                aria-label={t.azumboxTitle}
              >
                <div className="flex h-full flex-col items-center justify-center rounded-squircle-lg border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.02]">
                  <span className="text-4xl text-platinum/80">◻︎</span>
                  <span className="chic-kicker mt-4">Demo preview</span>
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
                className="gpu-layer mx-auto flex h-64 w-full max-w-xs items-center justify-center overflow-hidden rounded-squircle-lg bg-gradient-to-br from-champagne/15 via-white/5 to-platinum/10 p-8 shadow-glass-sm ring-1 ring-white/10 sm:h-72"
                aria-label={t.ciromapTitle}
              >
                <Image
                  src="/ciromap/app-icon-192.png"
                  alt="Ciro.Map app icon"
                  width={160}
                  height={160}
                  className="rounded-squircle-xl shadow-glass ring-1 ring-white/10"
                />
              </Link>
            }
          />
        </div>

        <article className="glass-card gpu-layer mt-6 p-5">
          <p className="chic-kicker">{t.valuesTitle}</p>
          <p className="mt-2 text-base font-medium tracking-wide text-ink-primary">{t.valuesItems}</p>
        </article>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="chic-heading text-3xl">{t.faqTitle}</h2>
        <dl className="mt-8 space-y-4">
          {HOME_FAQ[routeLang].map((faq) => (
            <div key={faq.question} className="glass-card gpu-layer p-5">
              <dt className="font-medium tracking-wide text-ink-primary">{faq.question}</dt>
              <dd className="chic-body mt-2">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer id="contact" className="border-t border-white/10 py-10 text-center">
        <p className="text-sm text-ink-secondary">{t.footer}</p>
        <p className="mt-2 text-xs text-ink-muted">{t.pressLine}</p>
        <p className="mt-3 text-xs">
          <Link href="/lapasta" className="text-ink-secondary underline-offset-4 transition-colors duration-300 ease-fluid hover:text-champagne-light hover:underline">
            La Pasta
          </Link>
          <span className="mx-2 text-white/20">·</span>
          <Link href="/ciromap/privacy" className="text-ink-secondary underline-offset-4 transition-colors duration-300 ease-fluid hover:text-champagne-light hover:underline">
            {t.ciroPrivacy}
          </Link>
        </p>
      </footer>
    </main>
  );
}

/* UI COMPONENTS */
function ServiceCard({ title, desc, price }: { title: string; desc: string; price: string }) {
  return (
    <div className="glass-card gpu-layer interactive-lift p-6">
      <h3 className="text-lg font-medium tracking-wide text-ink-primary">{title}</h3>
      <p className="chic-body mt-2 text-sm">{desc}</p>
      <div className="mt-4 inline-block rounded-full bg-champagne/15 px-3 py-1 text-xs font-medium tracking-wide text-champagne-light">
        {price}
      </div>
    </div>
  );
}

const GAME_TONES = {
  forest: 'from-emerald-950/80 via-emerald-900/40 to-obsidian',
  midnight: 'from-indigo-950/80 via-slate-900/40 to-obsidian',
  amber: 'from-amber-950/70 via-stone-900/40 to-obsidian',
} as const;

function GameCard({
  title,
  href,
  desc,
  tone,
  label,
}: {
  title: string;
  href: string;
  desc: string;
  tone: keyof typeof GAME_TONES;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="glass-card gpu-layer interactive-lift group block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne/40"
    >
      <div className={`relative h-28 overflow-hidden bg-gradient-to-br ${GAME_TONES[tone]}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(196,165,116,0.1),transparent_50%)]" />
        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-squircle glass-surface text-xs font-medium tracking-chic text-champagne-light transition-transform duration-500 ease-fluid group-hover:scale-105">
          {label}
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-medium tracking-wide text-ink-primary">{title}</h4>
        <p className="chic-body mt-1 text-sm">{desc}</p>
      </div>
    </Link>
  );
}

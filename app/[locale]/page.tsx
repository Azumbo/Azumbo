// page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectSpotlight } from '../../components/ProjectSpotlight';
import { SiteHeader } from '../../components/site/SiteHeader';
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
    <main className="landing-shell site-page relative min-h-[100dvh] overflow-x-hidden">
      <JsonLd data={structuredData} />

      <SiteHeader
        homeHref={`/${routeLang}`}
        navLinks={[
          { href: '#games', label: t.navGames },
          { href: '#services', label: t.navServices },
          { href: '#contact', label: t.navContact },
          { href: '/lapasta', label: t.navLaPasta },
        ]}
        localeLinks={(['en', 'it', 'ru'] as Lang[]).map((k) => ({
          href: k === 'en' ? '/en' : `/${k}`,
          code: k,
          active: routeLang === k,
        }))}
      />

      <section className="site-container section-gap relative">
        <p className="type-kicker">{t.kicker}</p>
        <h1 className="type-display mt-6 text-4xl sm:text-6xl md:text-7xl">{t.title}</h1>
        <p className="type-body-strong mt-8 max-w-2xl text-lg">{HOME_BLUF[routeLang]}</p>
        <p className="type-body mt-5 max-w-2xl text-lg">{t.subtitle}</p>
        <div className="mt-10">
          <a href="mailto:azumbogames@gmail.com" className="btn-accent gpu-layer">
            {t.ctaContact}
          </a>
        </div>
      </section>

      <section id="services" className="site-container section-gap">
        <h2 className="type-display text-3xl">{t.servicesTitle}</h2>
        <p className="type-body mt-4 max-w-2xl">{t.servicesSubtitle}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <ServiceCard title={t.srvProtoTitle} desc={t.srvProtoDesc} price={t.srvProtoPrice} />
          <ServiceCard title={t.srvPublishTitle} desc={t.srvPublishDesc} price={t.srvPublishPrice} />
          <ServiceCard title={t.srvPortTitle} desc={t.srvPortDesc} price={t.srvPortPrice} />
        </div>
      </section>

      <section id="games" className="site-container section-gap">
        <h2 className="type-display text-3xl">{t.featured}</h2>
        <div className="featured-games-grid mt-10">
          <GameCard title="Frogger" href="/frogger" desc={t.frDesc} tone="forest" label="FR" />
          <GameCard title="Space Invaders" href="/spaceinvaders" desc={t.siDesc} tone="midnight" label="SI" />
          <GameCard title="Pac-Man" href="/pacman" desc={t.pmDesc} tone="amber" label="PM" />
        </div>

        <h3 className="type-display mb-8 mt-20 text-2xl sm:text-3xl">{t.projectsTitle}</h3>
        <div className="space-y-8">
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
                className="group glass-panel gpu-layer relative mx-auto block h-64 w-full max-w-xs overflow-hidden sm:h-72"
                aria-label={t.videoLinkLabel}
              >
                <Image
                  src="/assets/logo/azumbo-logo.png"
                  alt="Bird Lines trailer preview"
                  width={320}
                  height={288}
                  className="h-full w-full object-contain p-10 opacity-90"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-all duration-500 ease-out group-hover:bg-black/35">
                  <span className="glass-panel rounded-full px-5 py-2.5 text-sm font-light text-ink-primary shadow-none">
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
                className="glass-panel gpu-layer mx-auto block h-64 w-full max-w-xs overflow-hidden p-6 sm:h-72"
                aria-label={t.lapastaTitle}
              >
                <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-xs font-light tracking-wide text-ink-secondary">
                    <span>La Pasta</span>
                    <span>00:42</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-2xl">
                    <span className="rounded-[1rem] border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">🍝</span>
                    <span className="rounded-[1rem] border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">〰️</span>
                    <span className="rounded-[1rem] border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">🥟</span>
                    <span className="rounded-[1rem] border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">✦</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-light uppercase tracking-chic text-champagne-light/80">
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
                className="glass-panel gpu-layer mx-auto block h-64 w-full max-w-xs overflow-hidden p-2 sm:h-72"
                aria-label={t.azumboxTitle}
              >
                <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                  <span className="text-4xl text-platinum/70">◻︎</span>
                  <span className="type-kicker mt-5">Demo preview</span>
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
                className="glass-panel gpu-layer mx-auto flex h-64 w-full max-w-xs items-center justify-center overflow-hidden p-8 sm:h-72"
                aria-label={t.ciromapTitle}
              >
                <Image
                  src="/ciromap/app-icon-192.png"
                  alt="Ciro.Map app icon"
                  width={160}
                  height={160}
                  className="rounded-[1.75rem] border border-white/10 shadow-2xl shadow-black/50"
                />
              </Link>
            }
          />
        </div>

        <article className="glass-panel gpu-layer mt-8 p-8 sm:p-10">
          <p className="type-kicker">{t.valuesTitle}</p>
          <p className="type-body-strong mt-3 text-base">{t.valuesItems}</p>
        </article>
      </section>

      <section id="faq" className="site-container section-gap">
        <h2 className="type-display text-3xl">{t.faqTitle}</h2>
        <dl className="mt-10 space-y-5">
          {HOME_FAQ[routeLang].map((faq) => (
            <div key={faq.question} className="glass-panel gpu-layer p-8 sm:p-10">
              <dt className="type-title text-base">{faq.question}</dt>
              <dd className="type-body mt-3">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer id="contact" className="site-container border-t border-white/10 py-12 text-center">
        <p className="type-body text-sm">{t.footer}</p>
        <p className="type-body mt-3 text-xs">{t.pressLine}</p>
        <p className="mt-4 text-xs">
          <Link href="/lapasta" className="text-ink-secondary transition-all duration-500 ease-out hover:text-champagne-light hover:underline">
            La Pasta
          </Link>
          <span className="mx-2 text-white/15">·</span>
          <Link href="/ciromap/privacy" className="text-ink-secondary transition-all duration-500 ease-out hover:text-champagne-light hover:underline">
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
    <div className="glass-panel gpu-layer glass-panel--interactive p-8 sm:p-10">
      <h3 className="type-title text-lg">{title}</h3>
      <p className="type-body mt-4 text-sm">{desc}</p>
      <div className="mt-6 inline-block rounded-full border border-champagne/20 bg-champagne/10 px-4 py-1.5 text-xs font-light tracking-wide text-champagne-light">
        {price}
      </div>
    </div>
  );
}

const GAME_TONES = {
  forest: 'from-emerald-950/60 via-emerald-900/20 to-transparent',
  midnight: 'from-indigo-950/60 via-slate-900/20 to-transparent',
  amber: 'from-amber-950/50 via-stone-900/20 to-transparent',
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
      className="glass-panel gpu-layer glass-panel--interactive group block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne/30"
    >
      <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${GAME_TONES[tone]}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_45%)]" />
        <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-[1rem] border border-white/10 bg-white/5 text-xs font-light tracking-chic text-champagne-light backdrop-blur-xl transition-all duration-500 ease-out group-hover:scale-105">
          {label}
        </div>
      </div>
      <div className="p-8">
        <h4 className="type-title text-base">{title}</h4>
        <p className="type-body mt-2 text-sm">{desc}</p>
      </div>
    </Link>
  );
}

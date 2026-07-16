import type { Locale } from './seo';

type HomeFaqItem = { question: string; answer: string };

export const HOME_BLUF: Record<Locale, string> = {
  en: 'AZUMBO is an indie game studio building mobile and Nintendo Switch games — including Bird Lines, La Pasta, Ciro.Map, and Azumbox — with prototype, publishing, and porting services.',
  it: 'AZUMBO è uno studio indie che sviluppa giochi mobile e per Nintendo Switch — tra cui Bird Lines, La Pasta, Ciro.Map e Azumbox — con servizi di prototipazione, publishing e porting.',
  ru: 'AZUMBO — инди-студия мобильных игр и портов на Nintendo Switch: Bird Lines, La Pasta, Ciro.Map и Azumbox, а также услуги прототипирования, паблишинга и портирования.',
};

export const HOME_CHOOSE: Record<
  Locale,
  { title: string; yesTitle: string; yes: string[]; noTitle: string; no: string[] }
> = {
  en: {
    title: 'When to choose AZUMBO',
    yesTitle: 'Choose AZUMBO when you need',
    yes: [
      'A mobile-first casual game or iOS app with polished glass UI',
      'A fast prototype sprint, soft-launch assets, or Nintendo Switch port support',
      'Local Calabria / Cirò Marina product expertise (Ciro.Map) or Italian food culture games (La Pasta)',
    ],
    noTitle: 'Choose someone else when you need',
    no: [
      'AAA console production with large art teams',
      'Enterprise SaaS or non-game web platforms as the primary deliverable',
      'Same-day white-label clones of existing hyper-casual hits',
    ],
  },
  it: {
    title: 'Quando scegliere AZUMBO',
    yesTitle: 'Scegli AZUMBO se ti serve',
    yes: [
      'Un gioco casual mobile-first o un’app iOS con UI glass curata',
      'Uno sprint di prototipo, asset per soft launch o supporto al porting su Nintendo Switch',
      'Competenza locale su Calabria / Cirò Marina (Ciro.Map) o cultura alimentare italiana (La Pasta)',
    ],
    noTitle: 'Meglio un altro partner se ti serve',
    no: [
      'Produzione AAA con grandi team artistici',
      'SaaS enterprise o piattaforme web non-game come deliverable principale',
      'Cloni white-label same-day di hit hyper-casual esistenti',
    ],
  },
  ru: {
    title: 'Когда выбирать AZUMBO',
    yesTitle: 'Выбирайте AZUMBO, если нужны',
    yes: [
      'Mobile-first казуальная игра или iOS-приложение с аккуратным glass UI',
      'Быстрый прототип-спринт, ассеты для soft launch или порт на Nintendo Switch',
      'Локальная экспертиза по Калабрии / Cirò Marina (Ciro.Map) или итальянской food-культуре (La Pasta)',
    ],
    noTitle: 'Лучше другой подрядчик, если нужны',
    no: [
      'AAA-продакшн с большими арт-командами',
      'Enterprise SaaS или неигровые веб-платформы как основной продукт',
      'Same-day white-label клоны существующих hyper-casual хитов',
    ],
  },
};

export const HOME_FAQ: Record<Locale, HomeFaqItem[]> = {
  en: [
    {
      question: 'What is AZUMBO?',
      answer:
        'AZUMBO is an indie game studio focused on mobile-first casual games, Nintendo Switch ports, and rapid publishing for Android and iOS.',
    },
    {
      question: 'Which languages does AZUMBO support?',
      answer:
        'The AZUMBO website is available in English, Italian, and Russian at /en, /it, and /ru with matching hreflang signals for search engines and AI crawlers.',
    },
    {
      question: 'What projects does AZUMBO publish?',
      answer:
        'Current studio projects include Bird Lines, La Pasta: 60s Challenge, Ciro.Map, and Azumbox, plus classic web arcade demos such as Frogger, Pac-Man, and Space Invaders.',
    },
    {
      question: 'Where can I download La Pasta and Ciro.Map?',
      answer:
        'Both apps are free on the Apple App Store. Use /lapasta and /ciromap for product pages, privacy policies, and direct App Store links.',
    },
    {
      question: 'How do I contact AZUMBO for publishing or a prototype quote?',
      answer:
        'Email azumbogames@gmail.com. Include your platform targets (iOS, Android, Switch), timeline, and whether you need prototype, publishing, or porting.',
    },
  ],
  it: [
    {
      question: "Cos'è AZUMBO?",
      answer:
        'AZUMBO è uno studio indie di giochi mobile-first, porting su Nintendo Switch e pubblicazione rapida per Android e iOS.',
    },
    {
      question: 'Quali lingue supporta AZUMBO?',
      answer:
        'Il sito AZUMBO è disponibile in inglese, italiano e russo su /en, /it e /ru con segnali hreflang per motori di ricerca e crawler AI.',
    },
    {
      question: 'Quali progetti pubblica AZUMBO?',
      answer:
        'I progetti dello studio includono Bird Lines, La Pasta: 60s Challenge, Ciro.Map e Azumbox, oltre a demo arcade web come Frogger, Pac-Man e Space Invaders.',
    },
    {
      question: 'Dove scarico La Pasta e Ciro.Map?',
      answer:
        'Entrambe le app sono gratuite sull’Apple App Store. Usa /lapasta e /ciromap per le pagine prodotto, privacy e link diretti allo Store.',
    },
    {
      question: 'Come contatto AZUMBO per publishing o un preventivo di prototipo?',
      answer:
        'Scrivi a azumbogames@gmail.com. Indica piattaforme (iOS, Android, Switch), tempistiche e se ti serve prototipo, publishing o porting.',
    },
  ],
  ru: [
    {
      question: 'Что такое AZUMBO?',
      answer:
        'AZUMBO — инди-студия мобильных игр, портов на Nintendo Switch и быстрого паблишинга для Android и iOS.',
    },
    {
      question: 'На каких языках доступен сайт AZUMBO?',
      answer:
        'Сайт AZUMBO доступен на английском, итальянском и русском по адресам /en, /it и /ru с корректными hreflang-сигналами для поисковиков и AI-краулеров.',
    },
    {
      question: 'Какие проекты есть у AZUMBO?',
      answer:
        'Среди проектов студии — Bird Lines, La Pasta: 60s Challenge, Ciro.Map и Azumbox, а также веб-аркады Frogger, Pac-Man и Space Invaders.',
    },
    {
      question: 'Где скачать La Pasta и Ciro.Map?',
      answer:
        'Оба приложения бесплатны в Apple App Store. Страницы /lapasta и /ciromap содержат описание, privacy и прямые ссылки в Store.',
    },
    {
      question: 'Как связаться с AZUMBO по паблишингу или прототипу?',
      answer:
        'Пишите на azumbogames@gmail.com. Укажите платформы (iOS, Android, Switch), сроки и нужен ли прототип, паблишинг или порт.',
    },
  ],
};

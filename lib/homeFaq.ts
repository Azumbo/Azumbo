import type { Locale } from './seo';

type HomeFaqItem = { question: string; answer: string };

export const HOME_BLUF: Record<Locale, string> = {
  en: 'AZUMBO is an indie studio building mobile and Nintendo Switch games — and Education software like AInclusive — including Bird Lines, La Pasta, Ciro.Map, and Azumbox, with prototype, publishing, and porting services.',
  it: 'AZUMBO è uno studio indie di giochi mobile e Nintendo Switch — e software Education come AInclusive — tra cui Bird Lines, La Pasta, Ciro.Map e Azumbox, con servizi di prototipazione, publishing e porting.',
  ru: 'AZUMBO — инди-студия мобильных игр и портов на Nintendo Switch, а также Education-приложений вроде AInclusive: Bird Lines, La Pasta, Ciro.Map и Azumbox, плюс прототипирование, паблишинг и портирование.',
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
      'Education / inclusive-learning products such as AInclusive (EN · HE · IT)',
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
      'Prodotti Education / apprendimento inclusivo come AInclusive (EN · HE · IT)',
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
      'Education / инклюзивное обучение — например AInclusive (EN · HE · IT)',
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
        'AZUMBO is an indie studio focused on mobile-first casual games, Nintendo Switch ports, rapid publishing for Android and iOS, and Education software such as AInclusive.',
    },
    {
      question: 'Which languages does AZUMBO support?',
      answer:
        'The AZUMBO website is available in English, Italian, and Russian at /en, /it, and /ru. AInclusive product pages also support Hebrew (EN · HE · IT).',
    },
    {
      question: 'What projects does AZUMBO publish?',
      answer:
        'Current studio projects include AInclusive (Education), Bird Lines, La Pasta: 60s Challenge, Ciro.Map, and Azumbox, plus classic web arcade demos such as Frogger, Pac-Man, and Space Invaders.',
    },
    {
      question: 'Where can I learn about AInclusive, La Pasta, and Ciro.Map?',
      answer:
        'Use /ainclusive (product, privacy, support in English, Hebrew, and Italian), /lapasta, and /ciromap for product pages, privacy policies, and App Store or beta links.',
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
        'AZUMBO è uno studio indie di giochi mobile-first, porting su Nintendo Switch e pubblicazione rapida per Android e iOS, oltre a software Education come AInclusive.',
    },
    {
      question: 'Quali lingue supporta AZUMBO?',
      answer:
        'Il sito AZUMBO è disponibile in inglese, italiano e russo su /en, /it e /ru. Le pagine prodotto di AInclusive aggiungono anche l’ebraico (EN · HE · IT).',
    },
    {
      question: 'Quali progetti pubblica AZUMBO?',
      answer:
        'I progetti dello studio includono AInclusive (Education), Bird Lines, La Pasta: 60s Challenge, Ciro.Map e Azumbox, oltre a demo arcade web come Frogger, Pac-Man e Space Invaders.',
    },
    {
      question: 'Dove trovo AInclusive, La Pasta e Ciro.Map?',
      answer:
        'Usa /ainclusive (prodotto, privacy e supporto in inglese, ebraico e italiano), /lapasta e /ciromap per pagine prodotto, privacy e link allo Store o alla beta.',
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
        'AZUMBO — инди-студия мобильных игр, портов на Nintendo Switch и быстрого паблишинга для Android и iOS, а также Education-приложений вроде AInclusive.',
    },
    {
      question: 'На каких языках доступен сайт AZUMBO?',
      answer:
        'Сайт AZUMBO доступен на английском, итальянском и русском (/en, /it, /ru). Страницы AInclusive также поддерживают иврит (EN · HE · IT).',
    },
    {
      question: 'Какие проекты есть у AZUMBO?',
      answer:
        'Среди проектов студии — AInclusive (Education), Bird Lines, La Pasta: 60s Challenge, Ciro.Map и Azumbox, а также веб-аркады Frogger, Pac-Man и Space Invaders.',
    },
    {
      question: 'Где узнать об AInclusive, La Pasta и Ciro.Map?',
      answer:
        'Смотрите /ainclusive (продукт, privacy и support на английском, иврите и итальянском), /lapasta и /ciromap — там описания, privacy и ссылки в Store или на бету.',
    },
    {
      question: 'Как связаться с AZUMBO по паблишингу или прототипу?',
      answer:
        'Пишите на azumbogames@gmail.com. Укажите платформы (iOS, Android, Switch), сроки и нужен ли прототип, паблишинг или порт.',
    },
  ],
};

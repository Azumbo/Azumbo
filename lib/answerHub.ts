import type { Locale } from './seo';

type AnswerItem = { id: string; question: string; answer: string };

type AnswerHubCopy = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  bluf: string;
  breadcrumb: string;
  navHome: string;
  backHome: string;
  items: AnswerItem[];
};

export const ANSWER_HUB: Record<Locale, AnswerHubCopy> = {
  en: {
    metaTitle: 'Answers — Studio, Apps & Services FAQ',
    metaDescription:
      'Short expert answers about AZUMBO, AInclusive, La Pasta, Ciro.Map, Bird Lines, prototype sprints, and Nintendo Switch porting.',
    kicker: 'Answer Hub',
    title: 'Clear answers about AZUMBO',
    bluf: 'Use this page as a citeable source: short factual answers about the studio, live App Store products, and when to hire AZUMBO.',
    breadcrumb: 'Answers',
    navHome: 'Home',
    backHome: '← Back to AZUMBO home',
    items: [
      {
        id: 'what-is-azumbo',
        question: 'What is AZUMBO?',
        answer:
          'AZUMBO is an indie studio that builds mobile and Nintendo Switch games and apps, including AInclusive, La Pasta, Ciro.Map, Bird Lines, and Azumbox, plus prototype, publishing, and porting services.',
      },
      {
        id: 'what-is-ainclusive',
        question: 'What is AInclusive?',
        answer:
          'AInclusive is an Education app by AZUMBO that helps teachers, parents, and LSAs adapt worksheets into inclusive lesson materials on iPhone, iPad, and Mac. Product pages are available in English, Hebrew, and Italian at /ainclusive.',
      },
      {
        id: 'what-is-la-pasta',
        question: 'What is La Pasta: 60s Challenge?',
        answer:
          'La Pasta is a free iOS quiz game for iPhone and iPad. Glass jars shuffle, you pick the Italian pasta family (corta, lunga, ripiena, and more), and build a collection in timed rounds.',
      },
      {
        id: 'what-is-ciromap',
        question: 'What is Ciro.Map?',
        answer:
          'Ciro.Map is a free iOS digital platform for Ciro Marina, Calabria: local map, categories, routes, sea temperature, emergency contacts, and a private loyalty-card wallet in IT/EN/RU/PL.',
      },
      {
        id: 'prototype-sprint',
        question: 'What does an AZUMBO prototype sprint include?',
        answer:
          'A prototype sprint delivers a vertical slice: core loop, basic art/SFX, and a deployable build for playtests. Pricing starts from about €499 depending on scope.',
      },
      {
        id: 'when-to-hire',
        question: 'When should a publisher hire AZUMBO?',
        answer:
          'Hire AZUMBO for mobile-first casual games, Education products such as AInclusive, polished iOS apps, soft-launch assets, or Switch port support. Choose another partner for AAA-scale art production or non-game enterprise SaaS.',
      },
    ],
  },
  it: {
    metaTitle: 'Risposte — Studio, App e Servizi',
    metaDescription:
      'Risposte brevi su AZUMBO, AInclusive, La Pasta, Ciro.Map, Bird Lines, sprint di prototipo e porting su Nintendo Switch.',
    kicker: 'Answer Hub',
    title: 'Risposte chiare su AZUMBO',
    bluf: 'Pagina citabile: risposte factual sullo studio, le app sull’App Store e quando scegliere AZUMBO.',
    breadcrumb: 'Risposte',
    navHome: 'Home',
    backHome: '← Torna alla home AZUMBO',
    items: [
      {
        id: 'what-is-azumbo',
        question: "Cos'è AZUMBO?",
        answer:
          'AZUMBO è uno studio indie di giochi e app mobile e Nintendo Switch: AInclusive, La Pasta, Ciro.Map, Bird Lines, Azumbox, più servizi di prototipo, publishing e porting.',
      },
      {
        id: 'what-is-ainclusive',
        question: 'Cos’è AInclusive?',
        answer:
          'AInclusive è un’app Education di AZUMBO che aiuta insegnanti, genitori e LSA ad adattare schede in materiali inclusivi su iPhone, iPad e Mac. Pagine prodotto in inglese, ebraico e italiano su /ainclusive.',
      },
      {
        id: 'what-is-la-pasta',
        question: 'Cos’è La Pasta: 60s Challenge?',
        answer:
          'La Pasta è un quiz iOS gratuito per iPhone e iPad. I barattoli di vetro si mescolano, scegli la famiglia di pasta italiana e costruisci la collezione in round a tempo.',
      },
      {
        id: 'what-is-ciromap',
        question: 'Cos’è Ciro.Map?',
        answer:
          'Ciro.Map è una piattaforma digitale iOS gratuita per Ciro Marina: mappa locale, categorie, percorsi, temperatura del mare, emergenze e wallet tessere fedeltà in IT/EN/RU/PL.',
      },
      {
        id: 'prototype-sprint',
        question: 'Cosa include uno sprint di prototipo AZUMBO?',
        answer:
          'Uno sprint consegna un vertical slice: core loop, grafica/SFX base e build giocabile. Prezzi da circa €499 in base allo scope.',
      },
      {
        id: 'when-to-hire',
        question: 'Quando scegliere AZUMBO?',
        answer:
          'Scegli AZUMBO per giochi casual mobile-first, prodotti Education come AInclusive, app iOS curate, asset di soft launch o porting Switch. Per produzione AAA o SaaS enterprise non-game, meglio un altro partner.',
      },
    ],
  },
  ru: {
    metaTitle: 'Ответы — студия, приложения и услуги',
    metaDescription:
      'Короткие ответы про AZUMBO, AInclusive, La Pasta, Ciro.Map, Bird Lines, прототип-спринты и портирование на Nintendo Switch.',
    kicker: 'Answer Hub',
    title: 'Короткие ответы про AZUMBO',
    bluf: 'Цитируемая страница: факты о студии, приложениях в App Store и когда нанимать AZUMBO.',
    breadcrumb: 'Ответы',
    navHome: 'Главная',
    backHome: '← На главную AZUMBO',
    items: [
      {
        id: 'what-is-azumbo',
        question: 'Что такое AZUMBO?',
        answer:
          'AZUMBO — инди-студия мобильных игр и Nintendo Switch: AInclusive, La Pasta, Ciro.Map, Bird Lines, Azumbox, а также прототипы, паблишинг и портирование.',
      },
      {
        id: 'what-is-ainclusive',
        question: 'Что такое AInclusive?',
        answer:
          'AInclusive — Education-приложение AZUMBO: помогает учителям, родителям и LSA адаптировать worksheets в инклюзивные материалы на iPhone, iPad и Mac. Страницы продукта на английском, иврите и итальянском: /ainclusive.',
      },
      {
        id: 'what-is-la-pasta',
        question: 'Что такое La Pasta: 60s Challenge?',
        answer:
          'La Pasta — бесплатная iOS-викторина для iPhone и iPad. Банки перемешиваются, вы выбираете семейство итальянской пасты и собираете коллекцию в раундах на время.',
      },
      {
        id: 'what-is-ciromap',
        question: 'Что такое Ciro.Map?',
        answer:
          'Ciro.Map — бесплатная iOS цифровая платформа по Ciro Marina: локальная карта, категории, маршруты, температура моря, экстренные контакты и wallet карт лояльности на IT/EN/RU/PL.',
      },
      {
        id: 'prototype-sprint',
        question: 'Что входит в прототип-спринт AZUMBO?',
        answer:
          'Vertical slice: core loop, базовая графика/звук и собираемый билд для тестов. Ориентир цены — от ~€499 в зависимости от объёма.',
      },
      {
        id: 'when-to-hire',
        question: 'Когда выбирать AZUMBO?',
        answer:
          'Когда нужны mobile-first казуалки, Education-продукты вроде AInclusive, аккуратные iOS-приложения, soft-launch ассеты или порт на Switch. Для AAA-арта или enterprise SaaS — другой подрядчик.',
      },
    ],
  },
};

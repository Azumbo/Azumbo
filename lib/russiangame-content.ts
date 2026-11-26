import type { Locale } from './seo';

export const RUSSIANGAME_PATH = '/russiangame';
/** ASC-approved legal URLs from app-store-listing.md */
export const RUSSIANGAME_PRIVACY_URL =
  'https://gist.github.com/Azumbo/6847ec27112e03c2a21e40ae6ef63fc1';
export const RUSSIANGAME_SUPPORT_URL =
  'https://gist.github.com/Azumbo/ae899e089396d99de80cdea7e3d3039d';
export const RUSSIANGAME_APP_ID = '6835057638';
export const RUSSIANGAME_BUNDLE_ID = 'com.russiangame.watch';
/** Placeholder until App Store goes live — swap to apps.apple.com URL after approval. */
export const RUSSIANGAME_APP_STORE_URL: string | null = null;
export const RUSSIANGAME_HERO_IMAGE = '/russiangame/hero-menu.png';
export const RUSSIANGAME_OG_IMAGE = '/russiangame/hero-menu.png';

export type RussianGameCopy = {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  brand: string;
  headline: string;
  bluf: string;
  status: string;
  ctaPrimary: string;
  ctaSecondary: string;
  navHome: string;
  navProduct: string;
  breadcrumb: string;
  aboutTitle: string;
  aboutBody: string[];
  featuresTitle: string;
  features: { title: string; body: string }[];
  howTitle: string;
  howSteps: string[];
  pricingTitle: string;
  pricingBody: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  legalPrivacy: string;
  legalSupport: string;
  footerNote: string;
  screenshotAlt: string;
};

export const RUSSIANGAME_COPY: Record<Locale, RussianGameCopy> = {
  en: {
    metaTitle: 'Russian game: Ring Maze — Tilt Watch Labyrinth Puzzle',
    metaDescription:
      'Tilt your Apple Watch. Roll the chrome ball through concentric rings into the center well. 3 free mazes — unlock the full set anytime. watchOS only.',
    keywords:
      'apple watch maze, tilt maze, labyrinth watch, marble maze, watch puzzle, ring maze, chrome ball, watchOS game',
    brand: 'Russian game',
    headline: 'Tilt Watch Labyrinth Puzzle',
    bluf: 'Tilt your wrist. Roll the chrome ball. Drop it into the center well — a premium Apple Watch puzzle with real tilt physics. Made for Watch, not a phone port.',
    status: 'Coming soon on the App Store',
    ctaPrimary: 'Coming soon on App Store',
    ctaSecondary: 'Privacy & support',
    navHome: 'Home',
    navProduct: 'Russian game',
    breadcrumb: 'Russian game: Ring Maze',
    aboutTitle: 'What you get',
    aboutBody: [
      'Russian game is a premium Apple Watch puzzle: concentric metal rings, real tilt physics, and short skill runs you can play anywhere.',
      'Ten handcrafted concentric-ring mazes. Levels 1–3 free. One-time unlock for the full set — no subscription. Adjustable tilt sensitivity and haptics. English & Russian. Game Center best times and achievements. Daily reminder to keep your streak alive.',
    ],
    featuresTitle: 'Built for the wrist',
    features: [
      {
        title: 'Real tilt physics',
        body: 'CoreMotion wrist tilt rolls the chrome ball — designed for Ultra and Series players who want a real wrist challenge.',
      },
      {
        title: 'Concentric ring mazes',
        body: 'Guide the ball through gaps in each metal ring and reach the center well to clear the level.',
      },
      {
        title: 'Haptics & Game Center',
        body: 'Feel wall hits and clears on Ultra. Beat your best time and climb the Game Center board.',
      },
      {
        title: 'One-time unlock',
        body: 'Start free with levels 1–3. Full Unlock opens mazes 4–10 once — Restore Purchases in Settings. No account required.',
      },
    ],
    howTitle: 'How to play',
    howSteps: [
      'Tilt your Watch to roll the ball',
      'Guide it through gaps in each ring',
      'Reach the center well to clear the level',
      'Beat your best time — climb the Game Center board',
    ],
    pricingTitle: 'Price',
    pricingBody:
      'Levels 1–3 free to start. One-time In-App Purchase unlocks the full set (levels 4–10) — no subscription.',
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Is Russian game only for Apple Watch?',
        answer:
          'Yes. It is a watchOS-only app (WKWatchOnly). Install from the Watch App Store or via the iPhone Watch app. An iOS stub is for App Store delivery only.',
      },
      {
        question: 'How does tilt control work?',
        answer:
          'CoreMotion reads wrist tilt so the chrome ball rolls through ring gaps. Motion usage is explained in the system permission string.',
      },
      {
        question: 'What is free vs paid?',
        answer:
          'Levels 1–3 are free. “Full Unlock” opens levels 4–10. Restore Purchases is in Settings.',
      },
      {
        question: 'Which languages are supported?',
        answer: 'In-app English and Russian. This site also offers an Italian marketing page for Europe.',
      },
    ],
    legalPrivacy: 'Privacy Policy',
    legalSupport: 'Support',
    footerNote: '© 2026 Kostiantyn Kravchenko / AzumboGames. Watch-first puzzle by AZUMBO.',
    screenshotAlt: 'Russian game: Ring Maze on Apple Watch Ultra',
  },
  it: {
    metaTitle: 'Russian game: Ring Maze — Labirinto tilt per Apple Watch',
    metaDescription:
      'Inclina l’Apple Watch. Fai rotolare la biglia cromata attraverso gli anelli concentrici fino al pozzo. 3 labirinti gratis — sblocca il set completo quando vuoi.',
    keywords:
      'labirinto apple watch, gioco inclinazione orologio, puzzle tilt watch, marble maze, maze watch, biglia cromata, watchOS',
    brand: 'Russian game',
    headline: 'Inclina l’Watch — fai rotolare la biglia',
    bluf: 'Inclina il polso. Fai rotolare la biglia cromata. Fallala cadere nel pozzo centrale — puzzle premium per Apple Watch con fisica reale. Fatto per il Watch, non un porting da iPhone.',
    status: 'In arrivo sull’App Store',
    ctaPrimary: 'In arrivo sull’App Store',
    ctaSecondary: 'Privacy e supporto',
    navHome: 'Home',
    navProduct: 'Russian game',
    breadcrumb: 'Russian game: Ring Maze',
    aboutTitle: 'Cosa include',
    aboutBody: [
      'Russian game è un puzzle premium per Apple Watch: anelli metallici concentrici, fisica di inclinazione reale e sessioni brevi da giocare ovunque.',
      'Dieci labirinti ad anelli. Livelli 1–3 gratis. Sblocco una tantum del set completo — senza abbonamento. Sensibilità inclinazione e haptic regolabili. Inglese e russo in-app. Tempi e achievement su Game Center. Promemoria giornaliero per lo streak.',
    ],
    featuresTitle: 'Pensato per il polso',
    features: [
      {
        title: 'Fisica di inclinazione reale',
        body: 'CoreMotion legge l’inclinazione del polso — per chi vuole una sfida vera su Ultra e Series.',
      },
      {
        title: 'Labirinti ad anelli concentrici',
        body: 'Passa la biglia nelle aperture di ogni anello e raggiungi il pozzo centrale per completare il livello.',
      },
      {
        title: 'Haptic e Game Center',
        body: 'Senti urti e completamenti sull’Ultra. Migliora il tuo tempo nella classifica Game Center.',
      },
      {
        title: 'Sblocco una tantum',
        body: 'Inizi gratis con i livelli 1–3. Full Unlock apre i labirinti 4–10. Ripristina acquisti nelle Impostazioni. Nessun account.',
      },
    ],
    howTitle: 'Come si gioca',
    howSteps: [
      'Inclina l’Watch per far rotolare la biglia',
      'Passala nelle aperture di ogni anello',
      'Raggiungi il pozzo centrale per completare il livello',
      'Migliora il tuo tempo nella classifica Game Center',
    ],
    pricingTitle: 'Prezzo',
    pricingBody:
      'Livelli 1–3 gratis. Un acquisto in-app una tantum sblocca il set completo (livelli 4–10) — senza abbonamento.',
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Russian game è solo per Apple Watch?',
        answer:
          'Sì. È un’app solo watchOS (WKWatchOnly). Installala dall’App Store dell’Watch o dall’app Watch su iPhone. Lo stub iOS serve solo alla distribuzione.',
      },
      {
        question: 'Come funziona il controllo a inclinazione?',
        answer:
          'CoreMotion legge l’inclinazione del polso e muove la biglia attraverso le aperture degli anelli.',
      },
      {
        question: 'Cosa è gratis e cosa è a pagamento?',
        answer:
          'I livelli 1–3 sono gratis. “Full Unlock” apre i livelli 4–10. Ripristina acquisti è nelle Impostazioni.',
      },
      {
        question: 'Quali lingue sono supportate?',
        answer:
          'Nell’app: inglese e russo. Questa pagina marketing è anche in italiano per l’Europa.',
      },
    ],
    legalPrivacy: 'Privacy Policy',
    legalSupport: 'Supporto',
    footerNote: '© 2026 Kostiantyn Kravchenko / AzumboGames. Puzzle Watch-first di AZUMBO.',
    screenshotAlt: 'Russian game: Ring Maze su Apple Watch Ultra',
  },
  ru: {
    metaTitle: 'Русская игра: Лабиринт — Наклоняй Watch, кати шар',
    metaDescription:
      'Наклоняй Apple Watch и кати хромированный шар сквозь кольца в центр. 3 бесплатных лабиринта — полный набор открывается разовой покупкой.',
    keywords:
      'лабиринт,часы,наклон,шарик,головоломка,физика,ultra,gyro,watch,maze,tilt,puzzle,игра,аркада,скилл',
    brand: 'Русская игра',
    headline: 'Наклоняй Watch — кати шар',
    bluf: 'Наклоняй запястье. Кати шар. Попади в центр — премиум-головоломка для Apple Watch с физикой наклона. Сделано для Watch, это не порт с телефона.',
    status: 'Скоро в App Store',
    ctaPrimary: 'Скоро в App Store',
    ctaSecondary: 'Конфиденциальность и поддержка',
    navHome: 'Главная',
    navProduct: 'Русская игра',
    breadcrumb: 'Русская игра: Лабиринт',
    aboutTitle: 'Что внутри',
    aboutBody: [
      'Премиум-головоломка для Apple Watch: металлические кольца, физика наклона и короткие партии, в которые можно играть где угодно.',
      '10 авторских лабиринтов. Уровни 1–3 бесплатно. Разовая покупка полного набора — без подписки. Чувствительность наклона и хаптика. Русский и английский. Достижения и таблица рекордов в Game Center. Ежедневное напоминание.',
    ],
    featuresTitle: 'Сделано для запястья',
    features: [
      {
        title: 'Настоящая физика наклона',
        body: 'CoreMotion считывает наклон запястья — для тех, кто хочет настоящий вызов на Ultra и Series.',
      },
      {
        title: 'Лабиринты из колец',
        body: 'Проводи шар в прорези каждого кольца и доберись до центрального колодца, чтобы пройти уровень.',
      },
      {
        title: 'Хаптика и Game Center',
        body: 'Ощущай удары и финиш на Ultra. Бей личный рекорд в таблице Game Center.',
      },
      {
        title: 'Разовая разблокировка',
        body: 'Старт бесплатный: уровни 1–3. Full Unlock открывает 4–10. Восстановление покупок — в Настройках. Аккаунт не нужен.',
      },
    ],
    howTitle: 'Как играть',
    howSteps: [
      'Наклоняй часы, чтобы катить шар',
      'Проводи его в прорези колец',
      'Доберись до центрального колодца',
      'Бей личный рекорд в Game Center',
    ],
    pricingTitle: 'Цена',
    pricingBody:
      'Уровни 1–3 бесплатно. Разовая покупка в приложении открывает полный набор (уровни 4–10) — без подписки.',
    faqTitle: 'FAQ',
    faqs: [
      {
        question: '«Русская игра» только для Apple Watch?',
        answer:
          'Да. Это приложение только для watchOS (WKWatchOnly). Установка из Watch App Store или через приложение Watch на iPhone. iOS-stub нужен только для доставки через Store.',
      },
      {
        question: 'Как работает управление наклоном?',
        answer:
          'CoreMotion считывает наклон запястья, и шар катится сквозь прорези колец. Системный текст разрешения объясняет доступ к движению.',
      },
      {
        question: 'Что бесплатно, а что платно?',
        answer:
          'Уровни 1–3 бесплатны. «Full Unlock» открывает уровни 4–10. Восстановление покупок — в Настройках.',
      },
      {
        question: 'Какие языки поддерживаются?',
        answer:
          'В приложении — русский и английский. На сайте также есть итальянская маркетинговая страница.',
      },
    ],
    legalPrivacy: 'Конфиденциальность',
    legalSupport: 'Поддержка',
    footerNote: '© 2026 Kostiantyn Kravchenko / AzumboGames. Watch-first головоломка AZUMBO.',
    screenshotAlt: 'Русская игра: Лабиринт на Apple Watch Ultra',
  },
};

export function russiangamePath(locale: Locale) {
  return `/${locale}${RUSSIANGAME_PATH}`;
}

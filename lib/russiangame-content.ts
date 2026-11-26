import type { Locale } from './seo';

export const RUSSIANGAME_PATH = '/russiangame';
export const RUSSIANGAME_PRIVACY_URL =
  'https://azumbo.github.io/russian-game-legal/privacy.html';
export const RUSSIANGAME_SUPPORT_URL =
  'https://azumbo.github.io/russian-game-legal/support.html';
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
    metaTitle: 'Russian game: Ring Maze — Apple Watch Tilt Labyrinth',
    metaDescription:
      'Premium watchOS-only tilt maze for Apple Watch Ultra & Series. Roll a chrome ball through concentric metal rings into the center well. Levels 1–3 free.',
    keywords:
      'apple watch maze, tilt maze, watch labyrinth, chrome ball puzzle, ring maze, watchOS game, apple watch puzzle',
    brand: 'Russian game',
    headline: 'Ring Maze for Apple Watch',
    bluf: 'Tilt your wrist. Roll the chrome ball through gaps in concentric metal rings into the center well — a watchOS-only premium toy, not a phone port.',
    status: 'Coming soon on the App Store',
    ctaPrimary: 'Coming soon on App Store',
    ctaSecondary: 'Privacy & support',
    navHome: 'Home',
    navProduct: 'Russian game',
    breadcrumb: 'Russian game',
    aboutTitle: 'What it is',
    aboutBody: [
      'Russian game: Ring Maze is a short-session Apple Watch puzzle. You tilt the Watch; CoreMotion rolls a chrome ball across a glass plate through slits in concentric metal rings toward the center well.',
      'Built as an independent watchOS app with SwiftUI chrome and a SpriteKit maze. Ultra haptics sell the feel of metal on glass. English and Russian in-app. Game Center best times and achievements.',
    ],
    featuresTitle: 'Why it feels different',
    features: [
      {
        title: 'Watch-only physics',
        body: 'Real wrist tilt via CoreMotion — designed for Ultra and Series, not a phone port squeezed onto the watch.',
      },
      {
        title: 'Chrome on glass',
        body: 'Navy plate, glass sheen, concentric metal rings, and a chrome ball — premium toy tone, not cartoon clutter.',
      },
      {
        title: 'Haptics that matter',
        body: 'Wall hits and clears use Watch haptics so the maze feels tactile, especially on Apple Watch Ultra.',
      },
      {
        title: 'Freemium, no subscription',
        body: 'Levels 1–3 free. One-time IAP unlocks mazes 4–10. Restore Purchases in Settings. No account required.',
      },
    ],
    howTitle: 'How to play',
    howSteps: [
      'Tilt your Apple Watch to roll the chrome ball.',
      'Guide it through gaps in each concentric ring.',
      'Drop it into the center well to clear the level.',
      'Beat your best time on the Game Center board.',
    ],
    pricingTitle: 'Price',
    pricingBody:
      'Free to start (levels 1–3). Full Unlock is a one-time In-App Purchase (about $1.99) for levels 4–10 — no subscription.',
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Is Russian game only for Apple Watch?',
        answer:
          'Yes. It is a watchOS-only app (WKWatchOnly). An iOS stub exists only for App Store delivery — gameplay is on the Watch.',
      },
      {
        question: 'How does tilt control work?',
        answer:
          'CoreMotion reads wrist tilt so the chrome ball rolls on the glass plate. On Simulator you can drag to set the slope.',
      },
      {
        question: 'What is free vs paid?',
        answer:
          'Levels 1–3 are free. A one-time Full Unlock (com.russiangame.watch.full_unlock) opens levels 4–10. Restore Purchases is in Settings.',
      },
      {
        question: 'Which languages are supported?',
        answer:
          'In-app English and Russian. This marketing site also has Italian pages for European discovery.',
      },
    ],
    legalPrivacy: 'Privacy Policy',
    legalSupport: 'Support',
    footerNote: '© 2026 AzumboGames / Kostiantyn Kravchenko. Watch-first puzzle by AZUMBO.',
    screenshotAlt: 'Russian game on Apple Watch Ultra — main menu and ring maze',
  },
  it: {
    metaTitle: 'Russian game: Ring Maze — Labirinto tilt per Apple Watch',
    metaDescription:
      'Puzzle watchOS-only per Apple Watch Ultra e Series. Inclina il polso: la biglia cromata attraversa gli anelli metallici fino al pozzo centrale. Livelli 1–3 gratis.',
    keywords:
      'labirinto apple watch, gioco inclinazione orologio, puzzle tilt watch, maze watch, biglia cromata, gioco watchOS',
    brand: 'Russian game',
    headline: 'Labirinto ad anelli per Apple Watch',
    bluf: 'Inclina il polso. La biglia cromata scorre sul vetro attraverso le fessure degli anelli concentrici fino al pozzo — toy premium solo per Watch, non un porting da iPhone.',
    status: 'In arrivo sull’App Store',
    ctaPrimary: 'In arrivo sull’App Store',
    ctaSecondary: 'Privacy e supporto',
    navHome: 'Home',
    navProduct: 'Russian game',
    breadcrumb: 'Russian game',
    aboutTitle: 'Cos’è',
    aboutBody: [
      'Russian game: Ring Maze è un puzzle breve per Apple Watch. Inclini l’orologio; CoreMotion fa rotolare una biglia cromata su una lastra di vetro attraverso gli anelli metallici concentrici fino al centro.',
      'App watchOS indipendente: interfaccia SwiftUI e maze SpriteKit. Sull’Ultra gli haptic trasmettono il contatto metallo-su-vetro. Lingue in-app: inglese e russo. Game Center per tempi e achievement.',
    ],
    featuresTitle: 'Perché è diverso',
    features: [
      {
        title: 'Fisica solo su Watch',
        body: 'Inclinazione reale del polso con CoreMotion — pensato per Ultra e Series, non un gioco iPhone rimpicciolito.',
      },
      {
        title: 'Cromo e vetro',
        body: 'Piatto navy, riflessi glass, anelli metallici e biglia cromata: tono premium da giocattolo di precisione.',
      },
      {
        title: 'Haptic utili',
        body: 'Collisioni e completamenti usano gli haptic del Watch, specialmente sull’Apple Watch Ultra.',
      },
      {
        title: 'Freemium senza abbonamento',
        body: 'Livelli 1–3 gratis. Un unico IAP sblocca i livelli 4–10. Ripristina acquisti nelle Impostazioni. Nessun account.',
      },
    ],
    howTitle: 'Come si gioca',
    howSteps: [
      'Inclina l’Apple Watch per far rotolare la biglia.',
      'Passala nelle aperture di ogni anello concentrico.',
      'Falla cadere nel pozzo centrale per completare il livello.',
      'Migliora il tuo tempo nella classifica Game Center.',
    ],
    pricingTitle: 'Prezzo',
    pricingBody:
      'Inizi gratis (livelli 1–3). Full Unlock è un acquisto in-app una tantum (circa $1.99) per i livelli 4–10 — senza abbonamento.',
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Russian game è solo per Apple Watch?',
        answer:
          'Sì. È un’app solo watchOS (WKWatchOnly). Lo stub iOS serve alla distribuzione sullo Store; il gameplay è sul Watch.',
      },
      {
        question: 'Come funziona il controllo a inclinazione?',
        answer:
          'CoreMotion legge l’inclinazione del polso e muove la biglia sul vetro. Nel Simulator puoi trascinare per impostare la pendenza.',
      },
      {
        question: 'Cosa è gratis e cosa è a pagamento?',
        answer:
          'I livelli 1–3 sono gratis. Full Unlock (com.russiangame.watch.full_unlock) apre i livelli 4–10 con un pagamento unico. Ripristina acquisti nelle Impostazioni.',
      },
      {
        question: 'Quali lingue sono supportate?',
        answer:
          'Nell’app: inglese e russo. Queste pagine marketing sono anche in italiano per la scoperta in Europa.',
      },
    ],
    legalPrivacy: 'Privacy Policy',
    legalSupport: 'Supporto',
    footerNote: '© 2026 AzumboGames / Kostiantyn Kravchenko. Puzzle Watch-first di AZUMBO.',
    screenshotAlt: 'Russian game su Apple Watch Ultra — menu e labirinto ad anelli',
  },
  ru: {
    metaTitle: 'Русская игра: Лабиринт — головоломка с наклоном для Apple Watch',
    metaDescription:
      'Премиум watchOS-only лабиринт для Apple Watch Ultra и Series. Наклоняй запястье — хромированный шар катится сквозь кольца в центр. Уровни 1–3 бесплатно.',
    keywords:
      'лабиринт apple watch, игра наклон часов, русская игра кольца, maze watch, головоломка watchOS, tilt maze',
    brand: 'Русская игра',
    headline: 'Кольцевой лабиринт для Apple Watch',
    bluf: 'Наклоняй запястье. Хромированный шар катится по стеклу через щели в концентрических металлических кольцах в центр — премиум-игрушка только для Watch, не порт с телефона.',
    status: 'Скоро в App Store',
    ctaPrimary: 'Скоро в App Store',
    ctaSecondary: 'Конфиденциальность и поддержка',
    navHome: 'Главная',
    navProduct: 'Русская игра',
    breadcrumb: 'Русская игра',
    aboutTitle: 'Что это',
    aboutBody: [
      '«Русская игра: Лабиринт» — короткая головоломка для Apple Watch. Наклоняешь часы; CoreMotion катит хромированный шар по стеклянной пластине сквозь щели в концентрических металлических кольцах к центральному колодцу.',
      'Независимое watchOS-приложение: SwiftUI-оболочка и SpriteKit-лабиринт. На Ultra хаптика передаёт ощущение металла по стеклу. Языки в приложении: английский и русский. Game Center — рекорды и достижения.',
    ],
    featuresTitle: 'Чем отличается',
    features: [
      {
        title: 'Физика только на Watch',
        body: 'Настоящий наклон запястья через CoreMotion — сделано для Ultra и Series, а не сжатый порт с iPhone.',
      },
      {
        title: 'Хром и стекло',
        body: 'Тёмно-синяя пластина, стеклянный блик, металлические кольца и хромированный шар — премиальный toy-тон, не мультяшный шум.',
      },
      {
        title: 'Хаптика имеет смысл',
        body: 'Удары о стенки и финиш отдают хаптикой Watch, особенно на Apple Watch Ultra.',
      },
      {
        title: 'Freemium без подписки',
        body: 'Уровни 1–3 бесплатно. Разовая покупка открывает 4–10. Восстановление покупок в Настройках. Аккаунт не нужен.',
      },
    ],
    howTitle: 'Как играть',
    howSteps: [
      'Наклоняй Apple Watch, чтобы катить шар.',
      'Проводи его в прорези каждого кольца.',
      'Попади в центральный колодец, чтобы пройти уровень.',
      'Бей личный рекорд в Game Center.',
    ],
    pricingTitle: 'Цена',
    pricingBody:
      'Старт бесплатный (уровни 1–3). Full Unlock — разовая покупка в приложении (около $1.99) для уровней 4–10, без подписки.',
    faqTitle: 'FAQ',
    faqs: [
      {
        question: '«Русская игра» только для Apple Watch?',
        answer:
          'Да. Это приложение только для watchOS (WKWatchOnly). iOS-stub нужен для доставки через App Store; геймплей — на часах.',
      },
      {
        question: 'Как работает управление наклоном?',
        answer:
          'CoreMotion считывает наклон запястья и двигает шар по стеклу. В Simulator можно тянуть пальцем, чтобы задать уклон.',
      },
      {
        question: 'Что бесплатно, а что платно?',
        answer:
          'Уровни 1–3 бесплатны. Full Unlock (com.russiangame.watch.full_unlock) открывает уровни 4–10 одной покупкой. Восстановление — в Настройках.',
      },
      {
        question: 'Какие языки поддерживаются?',
        answer:
          'В приложении — английский и русский. Эти маркетинговые страницы также есть на итальянском для Европы.',
      },
    ],
    legalPrivacy: 'Конфиденциальность',
    legalSupport: 'Поддержка',
    footerNote: '© 2026 AzumboGames / Kostiantyn Kravchenko. Watch-first головоломка AZUMBO.',
    screenshotAlt: 'Русская игра на Apple Watch Ultra — меню и кольцевой лабиринт',
  },
};

export function russiangamePath(locale: Locale) {
  return `/${locale}${RUSSIANGAME_PATH}`;
}

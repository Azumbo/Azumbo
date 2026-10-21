export const ZUMI_LOCALES = [
  { id: 'en', short: 'EN' },
  { id: 'it', short: 'IT' },
  { id: 'ru', short: 'RU' },
] as const;

export type ZumiLocale = (typeof ZUMI_LOCALES)[number]['id'];

export const ZUMI_LANG_STORAGE_KEY = 'zumi.lang';
export const ZUMI_COOKIE = 'azumbo_locale';

/** App Store ID TBD until Connect listing is live — keep marketing URL stable. */
export const ZUMI_APP_STORE_URL = 'https://apps.apple.com/app/zumi';
export const ZUMI_SUPPORT_EMAIL = 'azumbogames@gmail.com';

export type ZumiFaq = { question: string; answer: string };

export type ZumiLandingCopy = {
  brandHomeAria: string;
  langSwitcherAria: string;
  navAria: string;
  navApp: string;
  navPrivacy: string;
  navSupport: string;
  navContact: string;
  footerAria: string;
  footerCredit: string;
  kicker: string;
  title: string;
  subtitleLead: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  storeNote: string;
  heroPreviewAria: string;
  artistsLabel: string;
  artists: string;
  featuresKicker: string;
  featuresTitle: string;
  featuresLead: string;
  features: { title: string; text: string }[];
  honestyKicker: string;
  honestyTitle: string;
  honestyText: string;
  faqKicker: string;
  faqTitle: string;
  faqs: ZumiFaq[];
  downloadTitle: string;
  downloadText: string;
  platforms: string;
};

export const ZUMI_LANDING: Record<ZumiLocale, ZumiLandingCopy> = {
  en: {
    brandHomeAria: 'Zumi home',
    langSwitcherAria: 'Language',
    navAria: 'Zumi',
    navApp: 'App',
    navPrivacy: 'Privacy',
    navSupport: 'Support',
    navContact: 'Contact',
    footerAria: 'Zumi footer',
    footerCredit: '© 2026 Azumbo · Zumi',
    kicker: 'Learn Italian through music',
    title: 'Learn Italian with real songs, not flashcards',
    subtitleLead: 'Karaoke. Translations. Practice. Offline.',
    subtitle:
      'Follow timed lyrics, read EN or RU under each line, drill what you heard, and download song packs for the commute.',
    primaryCta: 'Get launch updates',
    secondaryCta: 'Read support',
    storeNote: 'Free on the App Store & Google Play · iOS 14+ · Android 24+',
    heroPreviewAria: 'Zumi product preview',
    artistsLabel: 'Focused v1 catalog',
    artists: 'Pupo · Antonello Venditti · Francesco De Gregori · Gino Paoli',
    featuresKicker: 'How it works',
    featuresTitle: 'Sing the line. Learn the Italian.',
    featuresLead: 'Built for depth per song — not a fake library of thousands of tracks.',
    features: [
      {
        title: 'Karaoke',
        text: 'Synced Italian lyrics with line seek. Playback only — Zumi never uses the microphone.',
      },
      {
        title: 'Translations',
        text: 'English or Russian under every lyric line. App UI: System, English, or Russian.',
      },
      {
        title: 'Practice',
        text: 'Gap-fill, scramble, and flashcards after you listen — short drills that stick.',
      },
      {
        title: 'Offline',
        text: 'Download audio + lyrics packs and study on the train without Wi‑Fi.',
      },
    ],
    honestyKicker: 'Honest v1',
    honestyTitle: 'Four Italian songs. Real depth.',
    honestyText:
      'Zumi ships a focused set of Italian tracks so you can learn with real music — not filler. Spanish and French catalogs are roadmap only; do not expect them in v1.',
    faqKicker: 'FAQ',
    faqTitle: 'Before you download',
    faqs: [
      {
        question: 'Is Zumi free?',
        answer:
          'Yes. v1.0 is free with no in-app purchases. Any subscription UI in settings is a non-functional stub.',
      },
      {
        question: 'Can I use it offline?',
        answer: 'Yes. Download song packs (audio + lyrics) and open them in Airplane Mode.',
      },
      {
        question: 'Which languages does the app UI support?',
        answer:
          'App UI: System, English, or Russian. You learn Italian. The marketing site is available in English, Italian, and Russian.',
      },
      {
        question: 'Does Zumi record my voice?',
        answer: 'No. There is no microphone access. Zumi plays licensed/preview catalog audio for study only.',
      },
      {
        question: 'How many songs are included?',
        answer:
          'v1 focuses on four Italian artists (Pupo, Venditti, De Gregori, Paoli). We prioritize depth per song over a padded catalog.',
      },
    ],
    downloadTitle: 'Be first when Zumi goes live',
    downloadText: 'Email us for launch updates, TestFlight / Play testing, or press access.',
    platforms: 'iPhone, iPad · Android phones · Offline packs · No ads SDK in v1',
  },
  it: {
    brandHomeAria: 'Home di Zumi',
    langSwitcherAria: 'Lingua',
    navAria: 'Zumi',
    navApp: 'App',
    navPrivacy: 'Privacy',
    navSupport: 'Supporto',
    navContact: 'Contatti',
    footerAria: 'Footer Zumi',
    footerCredit: '© 2026 Azumbo · Zumi',
    kicker: 'Impara l’italiano con la musica',
    title: 'Impara l’italiano con canzoni vere, non con flashcard',
    subtitleLead: 'Karaoke. Traduzioni. Esercizi. Offline.',
    subtitle:
      'Segui i testi sincronizzati, leggi EN o RU sotto ogni verso, esercitati e scarica i pack per studiare in treno.',
    primaryCta: 'Ricevi aggiornamenti',
    secondaryCta: 'Supporto',
    storeNote: 'Gratis su App Store e Google Play · iOS 14+ · Android 24+',
    heroPreviewAria: 'Anteprima Zumi',
    artistsLabel: 'Catalogo v1 mirato',
    artists: 'Pupo · Antonello Venditti · Francesco De Gregori · Gino Paoli',
    featuresKicker: 'Come funziona',
    featuresTitle: 'Canta il verso. Impara l’italiano.',
    featuresLead: 'Pensato per la profondità di ogni brano — non per un catalogo gonfiato.',
    features: [
      {
        title: 'Karaoke',
        text: 'Testi italiani sincronizzati con seek sulla riga. Solo playback: Zumi non usa il microfono.',
      },
      {
        title: 'Traduzioni',
        text: 'Inglese o russo sotto ogni verso. UI app: Sistema, inglese o russo.',
      },
      {
        title: 'Esercizi',
        text: 'Gap-fill, scramble e flashcard dopo l’ascolto — esercizi brevi che restano.',
      },
      {
        title: 'Offline',
        text: 'Scarica audio + testi e studia senza Wi‑Fi.',
      },
    ],
    honestyKicker: 'Onestà v1',
    honestyTitle: 'Quattro canzoni italiane. Vera profondità.',
    honestyText:
      'Zumi propone un set mirato di brani italiani per imparare con musica vera. Cataloghi ES/FR sono solo roadmap: non sono in v1.',
    faqKicker: 'FAQ',
    faqTitle: 'Prima del download',
    faqs: [
      {
        question: 'Zumi è gratis?',
        answer:
          'Sì. La v1.0 è gratis, senza acquisti in-app. Eventuali UI di abbonamento sono stub non funzionanti.',
      },
      {
        question: 'Posso usarlo offline?',
        answer: 'Sì. Scarica i pack (audio + testi) e aprili in modalità aereo.',
      },
      {
        question: 'Quali lingue supporta l’interfaccia?',
        answer:
          'UI app: Sistema, inglese o russo. Si impara l’italiano. Il sito marketing è in EN, IT e RU.',
      },
      {
        question: 'Zumi registra la mia voce?',
        answer: 'No. Nessun accesso al microfono. Solo riproduzione audio del catalogo per lo studio.',
      },
      {
        question: 'Quante canzoni ci sono?',
        answer:
          'La v1 si concentra su quattro artisti italiani (Pupo, Venditti, De Gregori, Paoli). Meglio profondità che quantità finta.',
      },
    ],
    downloadTitle: 'Sii tra i primi al lancio',
    downloadText: 'Scrivici per aggiornamenti, TestFlight / test Play o accesso stampa.',
    platforms: 'iPhone, iPad · Android · Pack offline · Nessun SDK ads in v1',
  },
  ru: {
    brandHomeAria: 'Главная Zumi',
    langSwitcherAria: 'Язык',
    navAria: 'Zumi',
    navApp: 'Приложение',
    navPrivacy: 'Конфиденциальность',
    navSupport: 'Поддержка',
    navContact: 'Контакты',
    footerAria: 'Подвал Zumi',
    footerCredit: '© 2026 Azumbo · Zumi',
    kicker: 'Итальянский через музыку',
    title: 'Учите итальянский по настоящим песням, а не по карточкам',
    subtitleLead: 'Караоке. Переводы. Практика. Офлайн.',
    subtitle:
      'Синхронные тексты, EN или RU под строкой, короткие упражнения и скачивание пакетов для метро.',
    primaryCta: 'Сообщить о запуске',
    secondaryCta: 'Поддержка',
    storeNote: 'Бесплатно в App Store и Google Play · iOS 14+ · Android 24+',
    heroPreviewAria: 'Превью Zumi',
    artistsLabel: 'Сфокусированный каталог v1',
    artists: 'Pupo · Antonello Venditti · Francesco De Gregori · Gino Paoli',
    featuresKicker: 'Как это работает',
    featuresTitle: 'Спой строку. Выучи итальянский.',
    featuresLead: 'Глубина на трек — без фейковой библиотеки «тысяч песен».',
    features: [
      {
        title: 'Караоке',
        text: 'Синхронные итальянские тексты с переходом к строке. Только воспроизведение — микрофон не используется.',
      },
      {
        title: 'Переводы',
        text: 'Английский или русский под каждой строкой. Язык интерфейса: Система, EN или RU.',
      },
      {
        title: 'Практика',
        text: 'Gap-fill, scramble и карточки после прослушивания — короткие упражнения, которые остаются.',
      },
      {
        title: 'Офлайн',
        text: 'Скачайте аудио + тексты и занимайтесь без Wi‑Fi.',
      },
    ],
    honestyKicker: 'Честный v1',
    honestyTitle: 'Четыре итальянские песни. Настоящая глубина.',
    honestyText:
      'Zumi даёт сфокусированный набор итальянских треков для учёбы через музыку. Каталоги ES/FR — только в планах, не в v1.',
    faqKicker: 'FAQ',
    faqTitle: 'Перед установкой',
    faqs: [
      {
        question: 'Zumi бесплатен?',
        answer:
          'Да. v1.0 бесплатен, без покупок в приложении. Любой UI подписки — нерабочий stub.',
      },
      {
        question: 'Можно офлайн?',
        answer: 'Да. Скачайте пакеты (аудио + тексты) и откройте в авиарежиме.',
      },
      {
        question: 'Какие языки интерфейса?',
        answer:
          'Интерфейс приложения: Система, английский или русский. Учите итальянский. Сайт — EN, IT и RU.',
      },
      {
        question: 'Приложение записывает голос?',
        answer: 'Нет. Доступа к микрофону нет. Только воспроизведение каталога для учёбы.',
      },
      {
        question: 'Сколько песен?',
        answer:
          'В v1 — четыре итальянских артиста (Pupo, Venditti, De Gregori, Paoli). Важна глубина, а не «тысячи треков».',
      },
    ],
    downloadTitle: 'Узнайте о запуске первыми',
    downloadText: 'Напишите нам про запуск, TestFlight / Play-тест или прессу.',
    platforms: 'iPhone, iPad · Android · Офлайн-пакеты · Без ads SDK в v1',
  },
};

export const ZUMI_PRIVACY: Record<
  ZumiLocale,
  { title: string; updated: string; sections: { heading: string; body: string[] }[] }
> = {
  en: {
    title: 'Zumi Privacy Policy',
    updated: 'Last updated: 21 October 2026',
    sections: [
      {
        heading: 'Who we are',
        body: [
          'Zumi is published by Azumbo (“we”, “us”). Contact: azumbogames@gmail.com.',
          'This policy describes v1.0 of the Zumi mobile apps (iOS and Android) and related pages on azumbo.vercel.app.',
        ],
      },
      {
        heading: 'What Zumi does with data (Path A — current design)',
        body: [
          'Zumi is designed so that personal account data is not required to study. Vocabulary you save stays on device unless a future signed-in sync is enabled and disclosed.',
          'Catalog audio and lyrics may be downloaded to your device for offline study. That is caching of our content — not recording your voice.',
          'Zumi does not use the microphone and does not record you.',
          'App language preference (System / English / Russian) is stored locally on device.',
          'v1.0 does not include advertising SDKs or tracking (ATT) for ads.',
        ],
      },
      {
        heading: 'Network services',
        body: [
          'When online, Zumi may fetch catalog metadata and audio over HTTPS (including infrastructure such as Supabase Storage).',
          'If we later enable account sign-in or cloud sync, we will update this policy and store nutrition labels before that ships.',
        ],
      },
      {
        heading: 'Children',
        body: [
          'Zumi is a general language-learning product. We do not knowingly collect personal information from children under 13. Contact us to request deletion of any data you believe we hold.',
        ],
      },
      {
        heading: 'Your choices',
        body: [
          'You can delete the app to remove on-device caches and preferences.',
          'For privacy questions or deletion requests: azumbogames@gmail.com.',
        ],
      },
    ],
  },
  it: {
    title: 'Informativa sulla privacy di Zumi',
    updated: 'Ultimo aggiornamento: 21 ottobre 2026',
    sections: [
      {
        heading: 'Chi siamo',
        body: [
          'Zumi è pubblicato da Azumbo. Contatto: azumbogames@gmail.com.',
          'Questa informativa riguarda la v1.0 delle app Zumi (iOS e Android) e le pagine correlate su azumbo.vercel.app.',
        ],
      },
      {
        heading: 'Dati e Path A (design attuale)',
        body: [
          'Zumi è pensato per studiare senza account obbligatorio. Il vocabolario salvato resta sul dispositivo, salvo sync futuro dichiarato.',
          'Audio e testi del catalogo possono essere scaricati offline. Non registriamo la tua voce.',
          'Zumi non usa il microfono.',
          'La preferenza di lingua app (Sistema / EN / RU) è locale.',
          'La v1.0 non include SDK pubblicitari né tracking ATT.',
        ],
      },
      {
        heading: 'Servizi di rete',
        body: [
          'Online, Zumi può scaricare metadati e audio via HTTPS (es. Supabase Storage).',
          'Se attiveremo account o sync cloud, aggiorneremo questa policy prima del rilascio.',
        ],
      },
      {
        heading: 'Minori',
        body: [
          'Non raccogliamo consapevolmente dati di minori under 13. Scrivici per richieste di cancellazione.',
        ],
      },
      {
        heading: 'Scelte',
        body: [
          'Puoi eliminare l’app per rimuovere cache e preferenze sul dispositivo.',
          'Domande privacy: azumbogames@gmail.com.',
        ],
      },
    ],
  },
  ru: {
    title: 'Политика конфиденциальности Zumi',
    updated: 'Обновлено: 21 октября 2026',
    sections: [
      {
        heading: 'Кто мы',
        body: [
          'Zumi издаёт Azumbo. Контакт: azumbogames@gmail.com.',
          'Политика относится к v1.0 приложений Zumi (iOS и Android) и страницам на azumbo.vercel.app.',
        ],
      },
      {
        heading: 'Данные (Path A — текущий дизайн)',
        body: [
          'Для учёбы аккаунт не обязателен. Сохранённый словарь остаётся на устройстве, пока не будет явно включена облачная синхронизация.',
          'Аудио и тексты каталога можно скачать офлайн. Мы не записываем ваш голос.',
          'Микрофон не используется.',
          'Язык интерфейса (Система / EN / RU) хранится локально.',
          'В v1.0 нет рекламных SDK и ATT-трекинга.',
        ],
      },
      {
        heading: 'Сеть',
        body: [
          'Онлайн Zumi может загружать метаданные и аудио по HTTPS (в т.ч. Supabase Storage).',
          'Если появится вход или облачный sync — обновим политику до релиза.',
        ],
      },
      {
        heading: 'Дети',
        body: [
          'Мы сознательно не собираем данные детей младше 13 лет. Пишите для запросов на удаление.',
        ],
      },
      {
        heading: 'Ваш выбор',
        body: [
          'Удаление приложения очищает локальный кэш и настройки.',
          'Вопросы: azumbogames@gmail.com.',
        ],
      },
    ],
  },
};

export const ZUMI_SUPPORT: Record<
  ZumiLocale,
  { title: string; lead: string; topics: { heading: string; body: string }[]; contactCta: string }
> = {
  en: {
    title: 'Zumi Support',
    lead: 'Help for karaoke playback, offline packs, practice, and store listing questions.',
    topics: [
      {
        heading: 'Playback & karaoke',
        body: 'Open Home → a song → play. Scrub or tap a line to seek. Translations: EN or RU under lyrics (or off). Zumi does not use the mic.',
      },
      {
        heading: 'Offline',
        body: 'Use Download on a track, wait until Downloaded, then enable Airplane Mode and reopen the song.',
      },
      {
        heading: 'Practice',
        body: 'Near the end of a track, open Practice for gap-fill, scramble, and flashcards based on that song.',
      },
      {
        heading: 'Languages',
        body: 'App UI: System / English / Russian. You learn Italian. This website: EN / IT / RU.',
      },
    ],
    contactCta: 'Email support',
  },
  it: {
    title: 'Supporto Zumi',
    lead: 'Aiuto per karaoke, pack offline, esercizi e listing store.',
    topics: [
      {
        heading: 'Playback e karaoke',
        body: 'Home → brano → play. Scrub o tap sulla riga. Traduzioni EN/RU sotto i testi (o off). Niente microfono.',
      },
      {
        heading: 'Offline',
        body: 'Scarica il brano, attendi Downloaded, attiva Modalità aereo e riapri.',
      },
      {
        heading: 'Esercizi',
        body: 'Verso la fine del brano apri Practice: gap-fill, scramble e flashcard.',
      },
      {
        heading: 'Lingue',
        body: 'UI app: Sistema / EN / RU. Si impara l’italiano. Sito: EN / IT / RU.',
      },
    ],
    contactCta: 'Scrivi al supporto',
  },
  ru: {
    title: 'Поддержка Zumi',
    lead: 'Помощь по караоке, офлайн-пакетам, практике и магазинам.',
    topics: [
      {
        heading: 'Воспроизведение и караоке',
        body: 'Главная → трек → play. Перемотка или тап по строке. Переводы EN/RU под текстом (или выкл.). Микрофон не нужен.',
      },
      {
        heading: 'Офлайн',
        body: 'Скачайте трек, дождитесь Downloaded, включите авиарежим и откройте снова.',
      },
      {
        heading: 'Практика',
        body: 'Ближе к концу трека откройте Practice: gap-fill, scramble и карточки.',
      },
      {
        heading: 'Языки',
        body: 'Интерфейс: Система / EN / RU. Учите итальянский. Сайт: EN / IT / RU.',
      },
    ],
    contactCta: 'Написать в поддержку',
  },
};

export function detectZumiLocale(): ZumiLocale {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(ZUMI_LANG_STORAGE_KEY);
  if (stored === 'en' || stored === 'it' || stored === 'ru') return stored;
  const cookie = document.cookie
    .split(';')
    .map((p) => p.trim())
    .find((p) => p.startsWith(`${ZUMI_COOKIE}=`));
  const fromCookie = cookie?.split('=')[1];
  if (fromCookie === 'en' || fromCookie === 'it' || fromCookie === 'ru') return fromCookie;
  const nav = (navigator.language || 'en').toLowerCase();
  if (nav.startsWith('it')) return 'it';
  if (nav.startsWith('ru')) return 'ru';
  return 'en';
}

export function persistZumiLocale(locale: ZumiLocale) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(ZUMI_LANG_STORAGE_KEY, locale);
  document.cookie = `${ZUMI_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`;
}

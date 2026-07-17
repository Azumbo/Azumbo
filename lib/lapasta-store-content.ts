export type LaPastaLocale = 'en' | 'it' | 'ru' | 'pl';

export const LAPASTA_LOCALES: { id: LaPastaLocale; label: string; short: string }[] = [
  { id: 'en', label: 'English', short: 'EN' },
  { id: 'it', label: 'Italiano', short: 'IT' },
  { id: 'ru', label: 'Русский', short: 'RU' },
  { id: 'pl', label: 'Polski', short: 'PL' },
];

export const LAPASTA_LANG_STORAGE_KEY = 'lapasta.lang';

export function isLaPastaLocale(value: string | null | undefined): value is LaPastaLocale {
  return value === 'en' || value === 'it' || value === 'ru' || value === 'pl';
}

export function detectLaPastaLocale(): LaPastaLocale {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(LAPASTA_LANG_STORAGE_KEY);
  if (isLaPastaLocale(stored)) return stored;
  const browser = navigator.language.slice(0, 2).toLowerCase();
  return isLaPastaLocale(browser) ? browser : 'en';
}

export type FaqItem = { question: string; answer: string };

export type LandingCopy = {
  langSwitcherAria: string;
  navAria: string;
  navApp: string;
  navPrivacy: string;
  navSupport: string;
  navContact: string;
  brandHomeAria: string;
  footerAria: string;
  footerCredit: string;
  badgeAria: string;
  badgeAlt: string;
  kicker: string;
  title: string;
  subtitleLead: string;
  subtitle: string;
  readSupport: string;
  heroPreviewAria: string;
  heroAlt: string;
  featuresKicker: string;
  featuresTitle: string;
  featuresLead: string;
  features: { icon: string; title: string; text: string }[];
  museumKicker: string;
  museumTitle: string;
  museumLead: string;
  museumShots: { src: string; alt: string; name: string; note: string }[];
  faqKicker: string;
  faqTitle: string;
  faqLead: string;
  faqs: FaqItem[];
  faqCtaPrefix: string;
  faqCtaLink: string;
  downloadBadge: string;
  downloadTitle: string;
  downloadBody: string;
  metaIds: string;
};

export type SupportCopy = {
  kicker: string;
  title: string;
  subtitle: string;
  contactSupport: string;
  privacyPolicy: string;
  appStore: string;
  faqTitle: string;
  faqs: FaqItem[];
};

export type PrivacyCopy = {
  kicker: string;
  title: string;
  subtitle: string;
  tocAria: string;
  sections: { id: string; title: string; paragraphs: string[]; bullets?: string[] }[];
  toc: { id: string; label: string }[];
};

export const LAPASTA_LANDING: Record<LaPastaLocale, LandingCopy> = {
  en: {
    langSwitcherAria: 'Page language',
    navAria: 'La Pasta navigation',
    navApp: 'App',
    navPrivacy: 'Privacy',
    navSupport: 'Support',
    navContact: 'Contact',
    brandHomeAria: 'La Pasta home',
    footerAria: 'Footer navigation',
    footerCredit: '© 2026 Azumbo Games. La Pasta is crafted for iPhone and iPad.',
    badgeAria: 'Download La Pasta on the App Store',
    badgeAlt: 'Download on the App Store',
    kicker: 'For iPhone and iPad',
    title: 'La Pasta: 60s Challenge',
    subtitleLead: 'Bottom line:',
    subtitle:
      'La Pasta is a free Italian pasta-shape quiz for iPhone and iPad. Watch the glass jars shuffle, name the pasta family, and collect shapes in quick 60-second rounds.',
    readSupport: 'Read support',
    heroPreviewAria: 'La Pasta game preview',
    heroAlt: 'La Pasta gameplay — Tagliatelle round with glass jars and combo score',
    featuresKicker: '60s mode · collection · glass UI',
    featuresTitle: 'A small game with a proper Italian table setting.',
    featuresLead:
      'La Pasta keeps the interaction crisp and the mood calm: glass, warmth, restraint, and just enough tomato-red pressure from the timer.',
    features: [
      {
        icon: '🫙',
        title: 'Glass jars shuffle',
        text: 'Four translucent jars move with a gentle rhythm. Keep your eye on the pasta, then choose the category before the timer slips away.',
      },
      {
        icon: '🍝',
        title: 'Collection',
        text: 'Discover classic and curious shapes as you play. Build a tidy pasta shelf that feels more like a small museum than a score screen.',
      },
      {
        icon: '🇮🇹',
        title: 'Italian Levels',
        text: 'Learn families such as corta, lunga, ripiena, pastina, gnocchi, strascinati, and insolita through quick, repeatable rounds.',
      },
      {
        icon: '☀️',
        title: 'Daily Pasta',
        text: 'Return for a daily shape, a small ritual, and one more reason to notice the design language of Italian food.',
      },
      {
        icon: '👵',
        title: 'Nonna commentary',
        text: 'Warm, light remarks add personality without shouting. Pasta stays the hero; the joke is always served on the side.',
      },
    ],
    museumKicker: 'Museum of Pasta',
    museumTitle: 'The unusual shapes.',
    museumLead:
      'Collection is not only classics. Insolita brings rare regional forms — silk handkerchiefs from Liguria, baked disks from Sardinia — into a quiet full-screen browse.',
    museumShots: [
      {
        src: '/lapasta/museum-mandilli.jpg',
        alt: 'La Pasta Museum of Pasta — Mandilli de saea full-screen artwork',
        name: 'Mandilli de saea',
        note: 'Insolita · Liguria',
      },
      {
        src: '/lapasta/museum-collection.jpg',
        alt: 'La Pasta Collection — Orecchiette, Corzetti, Mandilli de saea, and Pillus',
        name: 'Collection',
        note: 'Insolita · Mandilli & Pillus',
      },
    ],
    faqKicker: 'FAQ',
    faqTitle: 'Quick answers.',
    faqLead: 'Short factual answers for search and AI overviews. Full support details live on the support page.',
    faqs: [
      {
        question: 'What is La Pasta: 60s Challenge?',
        answer:
          'La Pasta is a free iOS pasta-shape quiz for iPhone and iPad. Four glass jars shuffle, you name the Italian pasta family, and you build a collection in timed rounds.',
      },
      {
        question: 'Which pasta categories are in the game?',
        answer:
          'Rounds use Italian families such as corta, lunga, ripiena, pastina, gnocchi, strascinati, and insolita — including rare regional shapes in the Museum of Pasta collection.',
      },
      {
        question: 'Is La Pasta free?',
        answer:
          'Yes. The game is free to download on the App Store with optional ads. A one-time Remove Ads purchase is available for an uninterrupted experience.',
      },
      {
        question: 'Which devices and languages are supported?',
        answer:
          'La Pasta supports iPhone and iPad on iOS 18 or later, with English, Italian, Polish, and Russian localization.',
      },
      {
        question: 'When should you choose La Pasta?',
        answer:
          'Choose La Pasta if you want a calm, cultural micro-game about Italian pasta shapes. Skip it if you want multiplayer shooters, endless runners, or offline encyclopedia apps without gameplay.',
      },
    ],
    faqCtaPrefix: 'Need restore purchases or ad troubleshooting?',
    faqCtaLink: 'Open La Pasta Support',
    downloadBadge: 'Remove Ads · one-time purchase',
    downloadTitle: 'Get it on the App Store.',
    downloadBody:
      'Free to start with optional ads. A one-time Remove Ads purchase is available when you want an uninterrupted plate.',
    metaIds: 'App Store ID {id} · Bundle ID {bundle}',
  },

  it: {
    langSwitcherAria: 'Lingua della pagina',
    navAria: 'Navigazione La Pasta',
    navApp: 'App',
    navPrivacy: 'Privacy',
    navSupport: 'Supporto',
    navContact: 'Contatti',
    brandHomeAria: 'Home La Pasta',
    footerAria: 'Navigazione footer',
    footerCredit: '© 2026 Azumbo Games. La Pasta è pensata per iPhone e iPad.',
    badgeAria: 'Scarica La Pasta sull’App Store',
    badgeAlt: 'Download on the App Store',
    kicker: 'Per iPhone e iPad',
    title: 'La Pasta: 60s Challenge',
    subtitleLead: 'In breve:',
    subtitle:
      'La Pasta è un quiz gratuito sulle forme di pasta italiana per iPhone e iPad. Guarda i barattoli di vetro mescolarsi, indovina la famiglia e colleziona le forme in round da 60 secondi.',
    readSupport: 'Leggi il supporto',
    heroPreviewAria: 'Anteprima di gioco La Pasta',
    heroAlt: 'Gameplay La Pasta — round con Tagliatelle, barattoli di vetro e combo',
    featuresKicker: 'Modalità 60s · collezione · glass UI',
    featuresTitle: 'Un piccolo gioco con la tavola italiana a posto.',
    featuresLead:
      'La Pasta tiene il ritmo nitido e l’atmosfera calma: vetro, calore, misura, e solo un filo di pressione tomato-red dal timer.',
    features: [
      {
        icon: '🫙',
        title: 'Barattoli di vetro',
        text: 'Quattro barattoli traslucidi si muovono con ritmo gentile. Tieni d’occhio la pasta, poi scegli la categoria prima che scada il tempo.',
      },
      {
        icon: '🍝',
        title: 'Collezione',
        text: 'Scopri forme classiche e curiose mentre giochi. Costruisci uno scaffale di pasta che sembra più un piccolo museo che una schermata punteggio.',
      },
      {
        icon: '🇮🇹',
        title: 'Livelli italiani',
        text: 'Impara famiglie come corta, lunga, ripiena, pastina, gnocchi, strascinati e insolita in round rapidi e ripetibili.',
      },
      {
        icon: '☀️',
        title: 'Daily Pasta',
        text: 'Torna ogni giorno per una forma, un piccolo rituale e un altro motivo per notare il design del cibo italiano.',
      },
      {
        icon: '👵',
        title: 'Commenti della Nonna',
        text: 'Osservazioni calde e leggere, senza gridare. La pasta resta l’eroina; la battuta arriva sempre a lato.',
      },
    ],
    museumKicker: 'Museum of Pasta',
    museumTitle: 'Le forme insolite.',
    museumLead:
      'La collezione non è solo classici. Insolita porta forme regionali rare — fazzoletti di seta dalla Liguria, dischi al forno dalla Sardegna — in una quieta navigazione a schermo intero.',
    museumShots: [
      {
        src: '/lapasta/museum-mandilli.jpg',
        alt: 'Museum of Pasta — Mandilli de saea a schermo intero',
        name: 'Mandilli de saea',
        note: 'Insolita · Liguria',
      },
      {
        src: '/lapasta/museum-collection.jpg',
        alt: 'Collezione La Pasta — Orecchiette, Corzetti, Mandilli de saea e Pillus',
        name: 'Collezione',
        note: 'Insolita · Mandilli & Pillus',
      },
    ],
    faqKicker: 'FAQ',
    faqTitle: 'Risposte rapide.',
    faqLead: 'Risposte brevi e fattuali. I dettagli completi sono nella pagina di supporto.',
    faqs: [
      {
        question: 'Cos’è La Pasta: 60s Challenge?',
        answer:
          'La Pasta è un quiz gratuito sulle forme di pasta per iPhone e iPad. Quattro barattoli di vetro si mescolano, indovini la famiglia italiana e costruisci una collezione in round a tempo.',
      },
      {
        question: 'Quali categorie di pasta ci sono?',
        answer:
          'I round usano famiglie italiane come corta, lunga, ripiena, pastina, gnocchi, strascinati e insolita — incluse forme regionali rare nella collezione Museum of Pasta.',
      },
      {
        question: 'La Pasta è gratis?',
        answer:
          'Sì. Il gioco è gratuito sull’App Store con annunci opzionali. È disponibile un acquisto una tantum Remove Ads per un’esperienza senza interruzioni.',
      },
      {
        question: 'Quali dispositivi e lingue sono supportati?',
        answer:
          'La Pasta supporta iPhone e iPad su iOS 18 o successivo, con localizzazione in inglese, italiano, polacco e russo.',
      },
      {
        question: 'Quando scegliere La Pasta?',
        answer:
          'Scegli La Pasta se vuoi un micro-gioco culturale e calmo sulle forme di pasta italiane. Evitalo se cerchi sparatutto multiplayer, endless runner o enciclopedie offline senza gameplay.',
      },
    ],
    faqCtaPrefix: 'Serve ripristinare gli acquisti o risolvere gli annunci?',
    faqCtaLink: 'Apri il supporto La Pasta',
    downloadBadge: 'Remove Ads · acquisto una tantum',
    downloadTitle: 'Scaricala sull’App Store.',
    downloadBody:
      'Gratis per iniziare, con annunci opzionali. Un acquisto una tantum Remove Ads è disponibile quando vuoi un piatto senza interruzioni.',
    metaIds: 'App Store ID {id} · Bundle ID {bundle}',
  },

  ru: {
    langSwitcherAria: 'Язык страницы',
    navAria: 'Навигация La Pasta',
    navApp: 'Приложение',
    navPrivacy: 'Конфиденциальность',
    navSupport: 'Поддержка',
    navContact: 'Контакты',
    brandHomeAria: 'Главная La Pasta',
    footerAria: 'Навигация в подвале',
    footerCredit: '© 2026 Azumbo Games. La Pasta создана для iPhone и iPad.',
    badgeAria: 'Скачать La Pasta в App Store',
    badgeAlt: 'Download on the App Store',
    kicker: 'Для iPhone и iPad',
    title: 'La Pasta: 60s Challenge',
    subtitleLead: 'Коротко:',
    subtitle:
      'La Pasta — бесплатная викторина о формах итальянской пасты для iPhone и iPad. Смотрите, как мешаются стеклянные банки, называйте семейство пасты и собирайте коллекцию в раундах по 60 секунд.',
    readSupport: 'Поддержка',
    heroPreviewAria: 'Превью игры La Pasta',
    heroAlt: 'Геймплей La Pasta — раунд с Tagliatelle, банками и комбо',
    featuresKicker: 'Режим 60с · коллекция · glass UI',
    featuresTitle: 'Небольшая игра с настоящей итальянской сервировкой.',
    featuresLead:
      'В La Pasta чёткий ритм и спокойное настроение: стекло, тепло, сдержанность — и чуть tomato-red давления от таймера.',
    features: [
      {
        icon: '🫙',
        title: 'Стеклянные банки',
        text: 'Четыре полупрозрачные банки двигаются мягким ритмом. Следите за пастой и выберите категорию, пока не кончилось время.',
      },
      {
        icon: '🍝',
        title: 'Коллекция',
        text: 'Открывайте классические и редкие формы во время игры. Полка с пастой больше похожа на маленький музей, чем на экран очков.',
      },
      {
        icon: '🇮🇹',
        title: 'Italian Levels',
        text: 'Учите семейства corta, lunga, ripiena, pastina, gnocchi, strascinati и insolita в быстрых повторяемых раундах.',
      },
      {
        icon: '☀️',
        title: 'Daily Pasta',
        text: 'Возвращайтесь за формой дня — маленький ритуал и ещё один повод заметить дизайн итальянской кухни.',
      },
      {
        icon: '👵',
        title: 'Комментарии нонны',
        text: 'Тёплые лёгкие реплики без крика. Паста остаётся героем; шутка всегда подаётся сбоку.',
      },
    ],
    museumKicker: 'Museum of Pasta',
    museumTitle: 'Необычные формы.',
    museumLead:
      'В коллекции не только классика. Insolita — редкие региональные формы: шёлковые платочки из Лигурии, запечённые диски с Сардинии — в тихом полноэкранном просмотре.',
    museumShots: [
      {
        src: '/lapasta/museum-mandilli.jpg',
        alt: 'Museum of Pasta — Mandilli de saea на весь экран',
        name: 'Mandilli de saea',
        note: 'Insolita · Liguria',
      },
      {
        src: '/lapasta/museum-collection.jpg',
        alt: 'Коллекция La Pasta — Orecchiette, Corzetti, Mandilli de saea и Pillus',
        name: 'Коллекция',
        note: 'Insolita · Mandilli & Pillus',
      },
    ],
    faqKicker: 'FAQ',
    faqTitle: 'Короткие ответы.',
    faqLead: 'Краткие факты для поиска. Полная поддержка — на странице Support.',
    faqs: [
      {
        question: 'Что такое La Pasta: 60s Challenge?',
        answer:
          'La Pasta — бесплатная iOS-викторина о формах пасты для iPhone и iPad. Четыре стеклянные банки перемешиваются, вы называете итальянское семейство и собираете коллекцию в раундах на время.',
      },
      {
        question: 'Какие категории пасты в игре?',
        answer:
          'В раундах — семейства corta, lunga, ripiena, pastina, gnocchi, strascinati и insolita, включая редкие региональные формы в коллекции Museum of Pasta.',
      },
      {
        question: 'La Pasta бесплатна?',
        answer:
          'Да. Игра бесплатна в App Store с опциональной рекламой. Есть разовая покупка Remove Ads для игры без перерывов.',
      },
      {
        question: 'Какие устройства и языки поддерживаются?',
        answer:
          'La Pasta работает на iPhone и iPad с iOS 18 или новее, с локализацией на английский, итальянский, польский и русский.',
      },
      {
        question: 'Кому подойдёт La Pasta?',
        answer:
          'Выбирайте La Pasta, если хотите спокойную культурную мини-игру про итальянские формы пасты. Не для шутеров, endless runner и офлайн-энциклопедий без геймплея.',
      },
    ],
    faqCtaPrefix: 'Нужно восстановить покупки или разобраться с рекламой?',
    faqCtaLink: 'Открыть поддержку La Pasta',
    downloadBadge: 'Remove Ads · разовая покупка',
    downloadTitle: 'Скачайте в App Store.',
    downloadBody:
      'Бесплатный старт с опциональной рекламой. Разовая покупка Remove Ads — когда хотите тарелку без пауз.',
    metaIds: 'App Store ID {id} · Bundle ID {bundle}',
  },

  pl: {
    langSwitcherAria: 'Język strony',
    navAria: 'Nawigacja La Pasta',
    navApp: 'Aplikacja',
    navPrivacy: 'Prywatność',
    navSupport: 'Wsparcie',
    navContact: 'Kontakt',
    brandHomeAria: 'Strona główna La Pasta',
    footerAria: 'Nawigacja stopki',
    footerCredit: '© 2026 Azumbo Games. La Pasta powstała na iPhone’a i iPada.',
    badgeAria: 'Pobierz La Pasta z App Store',
    badgeAlt: 'Download on the App Store',
    kicker: 'Na iPhone’a i iPada',
    title: 'La Pasta: 60s Challenge',
    subtitleLead: 'W skrócie:',
    subtitle:
      'La Pasta to darmowy quiz o kształtach włoskiego makaronu na iPhone’a i iPada. Obserwuj mieszające się szklane słoiki, nazwij rodzinę pasty i zbieraj kształty w rundach po 60 sekund.',
    readSupport: 'Czytaj wsparcie',
    heroPreviewAria: 'Podgląd gry La Pasta',
    heroAlt: 'Rozgrywka La Pasta — runda z Tagliatelle, słoikami i combo',
    featuresKicker: 'Tryb 60s · kolekcja · glass UI',
    featuresTitle: 'Mała gra z włoskim nakryciem stołu.',
    featuresLead:
      'La Pasta łączy wyraźny rytm i spokojny nastrój: szkło, ciepło, powściągliwość i odrobinę tomato-red napięcia od timera.',
    features: [
      {
        icon: '🫙',
        title: 'Szklane słoiki',
        text: 'Cztery półprzezroczyste słoiki poruszają się spokojnym rytmem. Pilnuj pasty, potem wybierz kategorię, zanim skończy się czas.',
      },
      {
        icon: '🍝',
        title: 'Kolekcja',
        text: 'Odkrywaj klasyczne i ciekawe kształty podczas gry. Półka z pastą bardziej przypomina małe muzeum niż ekran wyniku.',
      },
      {
        icon: '🇮🇹',
        title: 'Italian Levels',
        text: 'Poznawaj rodziny corta, lunga, ripiena, pastina, gnocchi, strascinati i insolita w szybkich, powtarzalnych rundach.',
      },
      {
        icon: '☀️',
        title: 'Daily Pasta',
        text: 'Wracaj po dzienny kształt — mały rytuał i kolejny powód, by zauważyć design włoskiej kuchni.',
      },
      {
        icon: '👵',
        title: 'Komentarze Nonny',
        text: 'Ciepłe, lekkie uwagi bez krzyku. Pasta zostaje bohaterką; żart zawsze podawany jest z boku.',
      },
    ],
    museumKicker: 'Museum of Pasta',
    museumTitle: 'Nietypowe kształty.',
    museumLead:
      'Kolekcja to nie tylko klasyka. Insolita wnosi rzadkie formy regionalne — jedwabne chusteczki z Ligurii, pieczone dyski z Sardynii — w spokojne pełnoekranowe przeglądanie.',
    museumShots: [
      {
        src: '/lapasta/museum-mandilli.jpg',
        alt: 'Museum of Pasta — Mandilli de saea na pełnym ekranie',
        name: 'Mandilli de saea',
        note: 'Insolita · Liguria',
      },
      {
        src: '/lapasta/museum-collection.jpg',
        alt: 'Kolekcja La Pasta — Orecchiette, Corzetti, Mandilli de saea i Pillus',
        name: 'Kolekcja',
        note: 'Insolita · Mandilli & Pillus',
      },
    ],
    faqKicker: 'FAQ',
    faqTitle: 'Szybkie odpowiedzi.',
    faqLead: 'Krótkie, rzeczowe odpowiedzi. Pełne szczegóły są na stronie wsparcia.',
    faqs: [
      {
        question: 'Czym jest La Pasta: 60s Challenge?',
        answer:
          'La Pasta to darmowy quiz o kształtach makaronu na iPhone’a i iPada. Cztery szklane słoiki się mieszają, nazywasz włoską rodzinę pasty i budujesz kolekcję w rundach na czas.',
      },
      {
        question: 'Jakie kategorie pasty są w grze?',
        answer:
          'Rundy korzystają z rodzin corta, lunga, ripiena, pastina, gnocchi, strascinati i insolita — w tym rzadkich form regionalnych w kolekcji Museum of Pasta.',
      },
      {
        question: 'Czy La Pasta jest darmowa?',
        answer:
          'Tak. Gra jest darmowa w App Store z opcjonalnymi reklamami. Dostępny jest jednorazowy zakup Remove Ads dla gry bez przerw.',
      },
      {
        question: 'Jakie urządzenia i języki są obsługiwane?',
        answer:
          'La Pasta działa na iPhone’ie i iPadzie z iOS 18 lub nowszym, z lokalizacją angielską, włoską, polską i rosyjską.',
      },
      {
        question: 'Dla kogo jest La Pasta?',
        answer:
          'Wybierz La Pasta, jeśli chcesz spokojną, kulturową mini-grę o włoskich kształtach pasty. Pomiń, jeśli szukasz multiplayer shooters, endless runnerów lub offline encyklopedii bez rozgrywki.',
      },
    ],
    faqCtaPrefix: 'Trzeba przywrócić zakupy albo rozwiązać problem z reklamami?',
    faqCtaLink: 'Otwórz wsparcie La Pasta',
    downloadBadge: 'Remove Ads · zakup jednorazowy',
    downloadTitle: 'Pobierz z App Store.',
    downloadBody:
      'Darmowy start z opcjonalnymi reklamami. Jednorazowy zakup Remove Ads — gdy chcesz talerz bez przerw.',
    metaIds: 'App Store ID {id} · Bundle ID {bundle}',
  },
};

export const LAPASTA_SUPPORT: Record<LaPastaLocale, SupportCopy> = {
  en: {
    kicker: 'Support · FAQ',
    title: 'How can we help?',
    subtitle: 'Short answers for La Pasta: 60s Challenge. If something still feels al dente, contact us directly.',
    contactSupport: 'Contact support',
    privacyPolicy: 'Privacy Policy',
    appStore: 'App Store',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        question: 'How do I play La Pasta?',
        answer:
          'Each round lasts 60 seconds. Watch the four glass jars shuffle, identify the pasta shown, and choose the correct category: corta, lunga, ripiena, pastina, gnocchi, strascinati, or insolita.',
      },
      {
        question: 'How does the +20 seconds continue work?',
        answer:
          'When time ends, the app may offer a continue. Watching an interstitial ad can add 20 seconds to the current run, so you can keep building your score.',
      },
      {
        question: 'What does Remove Ads include?',
        answer:
          'Remove Ads is a one-time in-app purchase that removes interstitial advertising from La Pasta. The purchase is processed by Apple through the App Store.',
      },
      {
        question: 'How do I restore purchases?',
        answer:
          'Use the Restore Purchases option in the app settings or purchase screen. Make sure you are signed in with the same Apple ID used for the original purchase.',
      },
      {
        question: 'Why are ads not loading?',
        answer:
          'Ads can be unavailable because of network conditions, regional fill, consent settings, or temporary AdMob availability. Check your connection, reopen the app, and try again later. Remove Ads disables interstitial ads after the purchase is active.',
      },
      {
        question: 'Can I turn off haptics or sound?',
        answer:
          'Yes. La Pasta is designed with calm, tactile feedback. If available in your app version, use the in-app settings to adjust haptics and sound. You can also use iOS system volume and haptic settings.',
      },
      {
        question: 'Why did my progress disappear?',
        answer:
          'Progress is stored locally on your device. Deleting the app, clearing device data, changing devices without a backup, or restoring from an older backup may remove local progress.',
      },
      {
        question: 'Which devices are supported?',
        answer: 'La Pasta supports iPhone and iPad on iOS 18 or later.',
      },
    ],
  },
  it: {
    kicker: 'Supporto · FAQ',
    title: 'Come possiamo aiutarti?',
    subtitle: 'Risposte brevi per La Pasta: 60s Challenge. Se qualcosa è ancora al dente, scrivici.',
    contactSupport: 'Contatta il supporto',
    privacyPolicy: 'Informativa sulla privacy',
    appStore: 'App Store',
    faqTitle: 'Domande frequenti',
    faqs: [
      {
        question: 'Come si gioca a La Pasta?',
        answer:
          'Ogni round dura 60 secondi. Guarda i quattro barattoli di vetro mescolarsi, riconosci la pasta e scegli la categoria corretta: corta, lunga, ripiena, pastina, gnocchi, strascinati o insolita.',
      },
      {
        question: 'Come funziona il continue +20 secondi?',
        answer:
          'Quando finisce il tempo, l’app può offrire un continue. Guardare un interstitial può aggiungere 20 secondi alla partita corrente, così continui a costruire il punteggio.',
      },
      {
        question: 'Cosa include Remove Ads?',
        answer:
          'Remove Ads è un acquisto in-app una tantum che rimuove gli interstitial da La Pasta. L’acquisto è gestito da Apple tramite l’App Store.',
      },
      {
        question: 'Come ripristino gli acquisti?',
        answer:
          'Usa Ripristina acquisti nelle impostazioni o nella schermata di acquisto. Accedi con lo stesso Apple ID usato per l’acquisto originale.',
      },
      {
        question: 'Perché gli annunci non si caricano?',
        answer:
          'Gli annunci possono mancare per rete, fill regionale, consenso o disponibilità temporanea di AdMob. Controlla la connessione, riapri l’app e riprova più tardi. Remove Ads disattiva gli interstitial dopo l’acquisto.',
      },
      {
        question: 'Posso disattivare aptica o suoni?',
        answer:
          'Sì. La Pasta è pensata con feedback calmo e tattile. Se disponibile nella tua versione, usa le impostazioni in-app. Puoi anche usare volume e aptica di sistema iOS.',
      },
      {
        question: 'Perché è sparita la progressione?',
        answer:
          'La progressione è salvata in locale sul dispositivo. Eliminare l’app, cancellare i dati, cambiare dispositivo senza backup o ripristinare un backup più vecchio può rimuoverla.',
      },
      {
        question: 'Quali dispositivi sono supportati?',
        answer: 'La Pasta supporta iPhone e iPad su iOS 18 o successivo.',
      },
    ],
  },
  ru: {
    kicker: 'Поддержка · FAQ',
    title: 'Чем помочь?',
    subtitle: 'Короткие ответы по La Pasta: 60s Challenge. Если что-то ещё «al dente» — напишите нам.',
    contactSupport: 'Написать в поддержку',
    privacyPolicy: 'Политика конфиденциальности',
    appStore: 'App Store',
    faqTitle: 'Частые вопросы',
    faqs: [
      {
        question: 'Как играть в La Pasta?',
        answer:
          'Каждый раунд длится 60 секунд. Смотрите, как мешаются четыре стеклянные банки, определите пасту и выберите категорию: corta, lunga, ripiena, pastina, gnocchi, strascinati или insolita.',
      },
      {
        question: 'Как работает продолжение +20 секунд?',
        answer:
          'Когда время кончается, приложение может предложить продолжить. Просмотр interstitial добавляет 20 секунд к текущему забегу.',
      },
      {
        question: 'Что даёт Remove Ads?',
        answer:
          'Remove Ads — разовая покупка, которая убирает interstitial-рекламу из La Pasta. Покупка обрабатывается Apple через App Store.',
      },
      {
        question: 'Как восстановить покупки?',
        answer:
          'Используйте Restore Purchases в настройках или на экране покупки. Войдите с тем же Apple ID, что и при покупке.',
      },
      {
        question: 'Почему не загружается реклама?',
        answer:
          'Реклама может быть недоступна из‑за сети, региона, согласия или временной недоступности AdMob. Проверьте соединение, перезапустите приложение. Remove Ads отключает interstitial после покупки.',
      },
      {
        question: 'Можно отключить вибрацию или звук?',
        answer:
          'Да. В настройках приложения (если доступны) можно настроить тактильную отдачу и звук. Также работают системные настройки iOS.',
      },
      {
        question: 'Почему пропал прогресс?',
        answer:
          'Прогресс хранится локально на устройстве. Удаление приложения, очистка данных, смена устройства без бэкапа или восстановление старого бэкапа могут его стереть.',
      },
      {
        question: 'Какие устройства поддерживаются?',
        answer: 'La Pasta поддерживает iPhone и iPad на iOS 18 или новее.',
      },
    ],
  },
  pl: {
    kicker: 'Wsparcie · FAQ',
    title: 'Jak możemy pomóc?',
    subtitle: 'Krótkie odpowiedzi dla La Pasta: 60s Challenge. Jeśli coś nadal jest al dente — napisz do nas.',
    contactSupport: 'Kontakt ze wsparciem',
    privacyPolicy: 'Polityka prywatności',
    appStore: 'App Store',
    faqTitle: 'Najczęstsze pytania',
    faqs: [
      {
        question: 'Jak grać w La Pasta?',
        answer:
          'Każda runda trwa 60 sekund. Obserwuj mieszające się cztery szklane słoiki, rozpoznaj pastę i wybierz kategorię: corta, lunga, ripiena, pastina, gnocchi, strascinati lub insolita.',
      },
      {
        question: 'Jak działa kontynuacja +20 sekund?',
        answer:
          'Gdy skończy się czas, aplikacja może zaproponować kontynuację. Obejrzenie reklamy interstitial może dodać 20 sekund do bieżącej rundy.',
      },
      {
        question: 'Co obejmuje Remove Ads?',
        answer:
          'Remove Ads to jednorazowy zakup w aplikacji, który usuwa reklamy interstitial z La Pasta. Zakup obsługuje Apple przez App Store.',
      },
      {
        question: 'Jak przywrócić zakupy?',
        answer:
          'Użyj Restore Purchases w ustawieniach lub na ekranie zakupu. Zaloguj się tym samym Apple ID co przy zakupie.',
      },
      {
        question: 'Dlaczego reklamy się nie ładują?',
        answer:
          'Reklamy mogą być niedostępne przez sieć, region, zgodę lub chwilową niedostępność AdMob. Sprawdź połączenie, uruchom ponownie aplikację. Remove Ads wyłącza interstitial po zakupie.',
      },
      {
        question: 'Czy mogę wyłączyć haptykę lub dźwięk?',
        answer:
          'Tak. W ustawieniach aplikacji (jeśli dostępne) możesz dostosować haptykę i dźwięk. Działają też ustawienia systemowe iOS.',
      },
      {
        question: 'Dlaczego zniknął postęp?',
        answer:
          'Postęp jest przechowywany lokalnie. Usunięcie aplikacji, wyczyszczenie danych, zmiana urządzenia bez kopii zapasowej lub przywrócenie starej kopii może go usunąć.',
      },
      {
        question: 'Jakie urządzenia są obsługiwane?',
        answer: 'La Pasta obsługuje iPhone’a i iPada z iOS 18 lub nowszym.',
      },
    ],
  },
};

export const LAPASTA_PRIVACY: Record<LaPastaLocale, PrivacyCopy> = {
  en: {
    kicker: 'Legal · App Store requirement',
    title: 'Privacy Policy',
    subtitle: 'For La Pasta: 60s Challenge. Last updated: June 2026.',
    tocAria: 'Privacy policy sections',
    toc: [
      { id: 'collect', label: 'What we collect' },
      { id: 'advertising', label: 'Advertising and App Tracking Transparency' },
      { id: 'iap', label: 'In-App Purchases' },
      { id: 'children', label: 'Children’s privacy' },
      { id: 'retention', label: 'Data retention' },
      { id: 'contact', label: 'Contact' },
    ],
    sections: [
      {
        id: 'intro',
        title: 'About this policy',
        paragraphs: [
          'This Privacy Policy explains how AZUMBO handles information in La Pasta: 60s Challenge (“La Pasta”, “the app”, “we”, “our”, or “us”). The app is a premium-style pasta category challenge for iPhone and iPad.',
          'La Pasta does not require registration, login, or a user account. You can use the app without directly providing your name, email address, or other contact details to us.',
        ],
      },
      {
        id: 'collect',
        title: 'What we collect',
        paragraphs: ['La Pasta is designed to keep gameplay simple and local.'],
        bullets: [
          'Local game progress may be stored on your device, such as scores, discovered pasta items, settings, and purchase-related app state.',
          'We do not create user accounts and we do not ask you to submit profile information inside the app.',
          'We do not operate our own analytics or tracking system for La Pasta at this time.',
        ],
      },
      {
        id: 'advertising',
        title: 'Advertising and App Tracking Transparency',
        paragraphs: [
          'La Pasta may show interstitial ads through Google AdMob, including when time expires and a player chooses to continue with an additional 20 seconds. Google AdMob may process device identifiers, approximate device information, ad interaction data, diagnostics, and related advertising data to provide, measure, and improve ads.',
          'Where required, the app presents Apple’s App Tracking Transparency prompt before enabling tracking-related advertising features. You can change this choice later in iOS Settings.',
        ],
      },
      {
        id: 'iap',
        title: 'In-App Purchases',
        paragraphs: [
          'La Pasta offers a one-time Remove Ads purchase. In-app purchases are processed by Apple through the App Store. We receive purchase status needed to unlock Remove Ads on your device; we do not receive your full payment card details.',
        ],
      },
      {
        id: 'children',
        title: 'Children’s privacy',
        paragraphs: [
          'La Pasta is not directed at children under 13, and we do not knowingly collect personal information from children under 13.',
        ],
      },
      {
        id: 'retention',
        title: 'Data retention',
        paragraphs: [
          'Local progress remains on your device until you delete the app or clear related data. Advertising and App Store purchase records may be retained by Google or Apple according to their own policies.',
        ],
      },
      {
        id: 'contact',
        title: 'Contact',
        paragraphs: [
          'Questions about this Privacy Policy: azumbogames@gmail.com. For app help, visit La Pasta Support or La Pasta on the App Store.',
        ],
      },
    ],
  },
  it: {
    kicker: 'Legale · requisito App Store',
    title: 'Informativa sulla privacy',
    subtitle: 'Per La Pasta: 60s Challenge. Ultimo aggiornamento: giugno 2026.',
    tocAria: 'Sezioni dell’informativa',
    toc: [
      { id: 'collect', label: 'Cosa raccogliamo' },
      { id: 'advertising', label: 'Pubblicità e App Tracking Transparency' },
      { id: 'iap', label: 'Acquisti in-app' },
      { id: 'children', label: 'Privacy dei minori' },
      { id: 'retention', label: 'Conservazione dei dati' },
      { id: 'contact', label: 'Contatti' },
    ],
    sections: [
      {
        id: 'intro',
        title: 'Informazioni su questa policy',
        paragraphs: [
          'Questa Informativa spiega come AZUMBO gestisce le informazioni in La Pasta: 60s Challenge (“La Pasta”, “l’app”, “noi”). L’app è una sfida sulle categorie di pasta per iPhone e iPad.',
          'La Pasta non richiede registrazione, login o account. Puoi usarla senza comunicarci direttamente nome, email o altri dati di contatto.',
        ],
      },
      {
        id: 'collect',
        title: 'Cosa raccogliamo',
        paragraphs: ['La Pasta è pensata per un gameplay semplice e locale.'],
        bullets: [
          'La progressione di gioco può essere salvata sul dispositivo: punteggi, pasta scoperta, impostazioni e stato legato agli acquisti.',
          'Non creiamo account utente e non chiediamo dati di profilo nell’app.',
          'Al momento non gestiamo un nostro sistema di analytics o tracking per La Pasta.',
        ],
      },
      {
        id: 'advertising',
        title: 'Pubblicità e App Tracking Transparency',
        paragraphs: [
          'La Pasta può mostrare interstitial tramite Google AdMob, anche quando scade il tempo e il giocatore sceglie di continuare con +20 secondi. Google AdMob può elaborare identificatori del dispositivo, dati approssimativi del device, interazioni con gli annunci, diagnostica e dati pubblicitari correlati.',
          'Dove richiesto, l’app mostra il prompt App Tracking Transparency di Apple prima di abilitare funzioni pubblicitarie legate al tracking. Puoi cambiare scelta in Impostazioni iOS.',
        ],
      },
      {
        id: 'iap',
        title: 'Acquisti in-app',
        paragraphs: [
          'La Pasta offre un acquisto una tantum Remove Ads. Gli acquisti sono gestiti da Apple tramite l’App Store. Riceviamo lo stato necessario per sbloccare Remove Ads sul dispositivo; non riceviamo i dettagli completi della carta di pagamento.',
        ],
      },
      {
        id: 'children',
        title: 'Privacy dei minori',
        paragraphs: [
          'La Pasta non è rivolta a minori di 13 anni e non raccogliamo consapevolmente dati personali di minori di 13 anni.',
        ],
      },
      {
        id: 'retention',
        title: 'Conservazione dei dati',
        paragraphs: [
          'La progressione locale resta sul dispositivo finché non elimini l’app o i relativi dati. Record pubblicitari e di acquisto App Store possono essere conservati da Google o Apple secondo le loro policy.',
        ],
      },
      {
        id: 'contact',
        title: 'Contatti',
        paragraphs: [
          'Domande su questa Informativa: azumbogames@gmail.com. Per aiuto sull’app, visita il Supporto La Pasta o La Pasta sull’App Store.',
        ],
      },
    ],
  },
  ru: {
    kicker: 'Юридическое · требование App Store',
    title: 'Политика конфиденциальности',
    subtitle: 'Для La Pasta: 60s Challenge. Обновлено: июнь 2026.',
    tocAria: 'Разделы политики',
    toc: [
      { id: 'collect', label: 'Что мы собираем' },
      { id: 'advertising', label: 'Реклама и App Tracking Transparency' },
      { id: 'iap', label: 'Внутренние покупки' },
      { id: 'children', label: 'Конфиденциальность детей' },
      { id: 'retention', label: 'Хранение данных' },
      { id: 'contact', label: 'Контакты' },
    ],
    sections: [
      {
        id: 'intro',
        title: 'О этой политике',
        paragraphs: [
          'Эта Политика объясняет, как AZUMBO обрабатывает информацию в La Pasta: 60s Challenge («La Pasta», «приложение», «мы»). Это игра-викторина о категориях пасты для iPhone и iPad.',
          'La Pasta не требует регистрации, входа или аккаунта. Можно пользоваться приложением, не сообщая нам имя, email или другие контакты.',
        ],
      },
      {
        id: 'collect',
        title: 'Что мы собираем',
        paragraphs: ['La Pasta рассчитана на простой локальный геймплей.'],
        bullets: [
          'Прогресс может храниться на устройстве: очки, открытые виды пасты, настройки и состояние, связанное с покупками.',
          'Мы не создаём аккаунты и не запрашиваем профиль внутри приложения.',
          'Сейчас у La Pasta нет собственной системы аналитики или трекинга.',
        ],
      },
      {
        id: 'advertising',
        title: 'Реклама и App Tracking Transparency',
        paragraphs: [
          'La Pasta может показывать interstitial через Google AdMob, в том числе когда время закончилось и игрок выбирает продолжение на +20 секунд. Google AdMob может обрабатывать идентификаторы устройства, приблизительные данные об устройстве, взаимодействия с рекламой, диагностику и связанные рекламные данные.',
          'Где требуется, приложение показывает запрос App Tracking Transparency от Apple до включения связанной с трекингом рекламы. Выбор можно изменить в Настройках iOS.',
        ],
      },
      {
        id: 'iap',
        title: 'Внутренние покупки',
        paragraphs: [
          'В La Pasta есть разовая покупка Remove Ads. Покупки обрабатывает Apple через App Store. Мы получаем статус, нужный, чтобы разблокировать Remove Ads на устройстве; полные данные карты мы не получаем.',
        ],
      },
      {
        id: 'children',
        title: 'Конфиденциальность детей',
        paragraphs: [
          'La Pasta не предназначена для детей младше 13 лет, и мы сознательно не собираем персональные данные детей младше 13 лет.',
        ],
      },
      {
        id: 'retention',
        title: 'Хранение данных',
        paragraphs: [
          'Локальный прогресс остаётся на устройстве, пока вы не удалите приложение или связанные данные. Рекламные записи и покупки App Store могут храниться Google или Apple по их политикам.',
        ],
      },
      {
        id: 'contact',
        title: 'Контакты',
        paragraphs: [
          'Вопросы по этой Политике: azumbogames@gmail.com. По приложению — страница поддержки La Pasta или La Pasta в App Store.',
        ],
      },
    ],
  },
  pl: {
    kicker: 'Prawne · wymóg App Store',
    title: 'Polityka prywatności',
    subtitle: 'Dla La Pasta: 60s Challenge. Ostatnia aktualizacja: czerwiec 2026.',
    tocAria: 'Sekcje polityki prywatności',
    toc: [
      { id: 'collect', label: 'Co zbieramy' },
      { id: 'advertising', label: 'Reklamy i App Tracking Transparency' },
      { id: 'iap', label: 'Zakupy w aplikacji' },
      { id: 'children', label: 'Prywatność dzieci' },
      { id: 'retention', label: 'Przechowywanie danych' },
      { id: 'contact', label: 'Kontakt' },
    ],
    sections: [
      {
        id: 'intro',
        title: 'O tej polityce',
        paragraphs: [
          'Ta Polityka wyjaśnia, jak AZUMBO przetwarza informacje w La Pasta: 60s Challenge („La Pasta”, „aplikacja”, „my”). To wyzwanie o kategorie pasty na iPhone’a i iPada.',
          'La Pasta nie wymaga rejestracji, logowania ani konta. Możesz korzystać z aplikacji bez podawania nam imienia, e-maila ani innych danych kontaktowych.',
        ],
      },
      {
        id: 'collect',
        title: 'Co zbieramy',
        paragraphs: ['La Pasta jest zaprojektowana wokół prostej, lokalnej rozgrywki.'],
        bullets: [
          'Postęp gry może być przechowywany na urządzeniu: wyniki, odkryte pasty, ustawienia i stan związany z zakupami.',
          'Nie tworzymy kont użytkowników i nie prosimy o dane profilowe w aplikacji.',
          'Obecnie nie prowadzimy własnego systemu analityki ani trackingu dla La Pasta.',
        ],
      },
      {
        id: 'advertising',
        title: 'Reklamy i App Tracking Transparency',
        paragraphs: [
          'La Pasta może pokazywać reklamy interstitial przez Google AdMob, także gdy skończy się czas i gracz wybierze kontynuację o +20 sekund. Google AdMob może przetwarzać identyfikatory urządzenia, przybliżone dane urządzenia, interakcje z reklamami, diagnostykę i powiązane dane reklamowe.',
          'Gdzie wymagane, aplikacja pokazuje monit App Tracking Transparency Apple przed włączeniem funkcji reklam związanych z trackingiem. Wybór możesz zmienić później w Ustawieniach iOS.',
        ],
      },
      {
        id: 'iap',
        title: 'Zakupy w aplikacji',
        paragraphs: [
          'La Pasta oferuje jednorazowy zakup Remove Ads. Zakupy obsługuje Apple przez App Store. Otrzymujemy status potrzebny do odblokowania Remove Ads na urządzeniu; nie otrzymujemy pełnych danych karty płatniczej.',
        ],
      },
      {
        id: 'children',
        title: 'Prywatność dzieci',
        paragraphs: [
          'La Pasta nie jest skierowana do dzieci poniżej 13 lat i świadomie nie zbieramy danych osobowych dzieci poniżej 13 lat.',
        ],
      },
      {
        id: 'retention',
        title: 'Przechowywanie danych',
        paragraphs: [
          'Lokalny postęp pozostaje na urządzeniu, dopóki nie usuniesz aplikacji lub powiązanych danych. Zapisy reklamowe i zakupy App Store mogą być przechowywane przez Google lub Apple zgodnie z ich politykami.',
        ],
      },
      {
        id: 'contact',
        title: 'Kontakt',
        paragraphs: [
          'Pytania o tę Politykę: azumbogames@gmail.com. Pomoc dotycząca aplikacji: wsparcie La Pasta lub La Pasta w App Store.',
        ],
      },
    ],
  },
};

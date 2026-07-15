export type CiroMapLocale = 'en' | 'it' | 'ru' | 'pl';

export const CIROMAP_LOCALES: { id: CiroMapLocale; label: string }[] = [
  { id: 'en', label: 'English' },
  { id: 'it', label: 'Italiano' },
  { id: 'ru', label: 'Русский' },
  { id: 'pl', label: 'Polski' },
];

export const APP_STORE_SUBTITLE = 'Sea Temp, Helplines, Map';

export const APP_STORE_PROMO =
  'Wander Cirò Marina with confidence. Map routes, summer events, shops, pharmacies, and emergency contacts — in Italian, English, Russian & Polish.';

export const APP_STORE_INTRO = [
  'Benvenuti a Cirò Marina! Ciro.Map — your all-in-one local companion on the stunning Calabrian Ionian coast.',
  'No more switching between confusing maps, weather apps, and a pile of plastic loyalty cards. Whether you’re a tourist hunting for the best gelato and Instagram spots, an expat needing the nearest farmacia, or a local juggling discount cards — Ciro.Map puts everything at your fingertips, beautifully designed and lightning fast.',
];

export const WHY_CIROMAP =
  'Unlike generic map apps, we focus exclusively on Cirò Marina and its surroundings (up to 52 km). Every place is personally verified, clutter-free, and sorted into real-life categories: from Supermarkets and Pharmacies to Fishmongers and Emergency Services.';

export const FEATURES = [
  {
    title: 'Interactive Local Map',
    text: 'Clean, fast map with only relevant, handpicked places. Tap any pin to see hours, distance, and navigate by foot or car.',
  },
  {
    title: 'Smart Categories',
    text: 'Supermercati, Farmacie, Ristoranti, Pescheria, InstaPlaces, Emergenze, and more. Find exactly what you need, nothing random.',
  },
  {
    title: 'One-Tap Navigation',
    text: 'Walking or driving directions directly inside the app, sorted by distance.',
  },
  {
    title: 'Weather & Sea Temperature',
    text: 'Air and sea temperature in a single glance. Know if it’s a perfect beach day before you step outside.',
  },
  {
    title: 'Loyalty Wallet',
    text: 'Store all your Italian discount cards (Coop, Eurospin, Trony, and many others) in one digital space. Scan any barcode or QR code with your camera.',
  },
  {
    title: 'InstaSpots',
    text: 'A curated collection of photogenic locations for unforgettable shots. Explore hidden gems with confidence.',
  },
  {
    title: 'Multilingual',
    text: 'Switch seamlessly between English, Italiano, Polski, and Русский. Perfect for international visitors and residents.',
  },
  {
    title: 'Works Offline',
    text: 'Places are cached for browsing even without internet. Premium users will soon get full offline maps.',
  },
  {
    title: 'Ad-Free Premium',
    text: 'Remove ads, unlock instant QR access, and support the development of offline maps and new features.',
  },
];

export const WHATS_NEW = [
  'Redesigned home screen: events, services, exploration, and emergency services',
  'Events hub with MARE DiViNO calendar (July–August 2026) and activities',
  'New Culture, Stores, and Artigianali hubs',
  'Bilingual event programme with detail sheets (Madonna del Carmelo, Apollo Aleo play)',
  'In-app map routing to event venues',
  'New photo spot: Luigi Lilio Museum terrace',
  'WhatsApp actions for phone numbers',
  'Motto line on the launch screen',
];

export const APP_INFO = {
  version: '1.0.4',
  category: 'Travel',
  size: '25.9 MB',
  rating: '5.0',
  ratingCount: 1,
  minOS: 'iOS 17.0',
  languages: 'English, Italian, Polish, Russian',
  ageRating: '13+',
  iap: 'Remove Ads $1.99',
  seller: 'Kostiantyn Kravchenko',
  copyright: '© 2026 Azumbo',
};

export type ScreenshotSlide = {
  src: string;
  alt: string;
  caption: string;
};

export const SCREENSHOTS: Record<CiroMapLocale, ScreenshotSlide[]> = {
  en: [
    {
      src: '/ciromap/screenshots/en/01-home.png',
      alt: 'Ciro.Map home screen in English with categories for stay, food, events, and emergencies',
      caption: 'Home',
    },
    {
      src: '/ciromap/screenshots/en/02-wallet.png',
      alt: 'Loyalty wallet with supermarket and pharmacy cards in Ciro.Map',
      caption: 'Loyalty Wallet',
    },
    {
      src: '/ciromap/screenshots/en/03-events.png',
      alt: 'Events hub for Cirò Marina in Ciro.Map',
      caption: 'Events',
    },
    {
      src: '/ciromap/screenshots/en/04-programme.png',
      alt: 'MARE DiVINO summer programme details in Ciro.Map',
      caption: 'MARE DiVINO',
    },
    {
      src: '/ciromap/screenshots/en/05-instaplaces.png',
      alt: 'InstaPlaces scenic viewpoints near Cirò Marina in Ciro.Map',
      caption: 'InstaPlaces',
    },
  ],
  it: [
    {
      src: '/ciromap/screenshots/it/01-home.png',
      alt: 'Schermata principale di Ciro.Map in italiano con categorie per alloggio, cibo, eventi ed emergenze',
      caption: 'Home',
    },
    {
      src: '/ciromap/screenshots/it/02-wallet.png',
      alt: 'Portafoglio carte fedeltà in Ciro.Map',
      caption: 'Carte fedeltà',
    },
    {
      src: '/ciromap/screenshots/it/03-events.png',
      alt: 'Hub eventi di Cirò Marina in Ciro.Map',
      caption: 'Eventi',
    },
    {
      src: '/ciromap/screenshots/it/04-programme.png',
      alt: 'Programma estivo MARE DiVINO in Ciro.Map',
      caption: 'MARE DiVINO',
    },
    {
      src: '/ciromap/screenshots/it/05-instaplaces.png',
      alt: 'InstaPlaces — punti panoramici vicino a Cirò Marina',
      caption: 'InstaPlaces',
    },
  ],
  ru: [
    {
      src: '/ciromap/screenshots/ru/01-home.png',
      alt: 'Главный экран Ciro.Map на русском с категориями жилья, еды, событий и экстренных служб',
      caption: 'Главная',
    },
    {
      src: '/ciromap/screenshots/ru/02-wallet.png',
      alt: 'Кошелёк дисконтных карт в Ciro.Map',
      caption: 'Дисконтные карты',
    },
    {
      src: '/ciromap/screenshots/ru/03-events.png',
      alt: 'Раздел событий Cirò Marina в Ciro.Map',
      caption: 'События',
    },
    {
      src: '/ciromap/screenshots/ru/04-programme.png',
      alt: 'Программа MARE DiVINO в Ciro.Map',
      caption: 'MARE DiVINO',
    },
    {
      src: '/ciromap/screenshots/ru/05-instaplaces.png',
      alt: 'Фотоместа рядом с Cirò Marina в Ciro.Map',
      caption: 'Фотоместа',
    },
  ],
  pl: [
    {
      src: '/ciromap/screenshots/pl/01-home.png',
      alt: 'Ekran główny Ciro.Map po polsku z kategoriami noclegów, jedzenia, wydarzeń i służb ratunkowych',
      caption: 'Start',
    },
    {
      src: '/ciromap/screenshots/pl/02-wallet.png',
      alt: 'Portfel kart lojalnościowych w Ciro.Map',
      caption: 'Karty lojalnościowe',
    },
    {
      src: '/ciromap/screenshots/pl/03-events.png',
      alt: 'Centrum wydarzeń Cirò Marina w Ciro.Map',
      caption: 'Wydarzenia',
    },
    {
      src: '/ciromap/screenshots/pl/04-programme.png',
      alt: 'Program letni MARE DiVINO w Ciro.Map',
      caption: 'MARE DiVINO',
    },
    {
      src: '/ciromap/screenshots/pl/05-instaplaces.png',
      alt: 'InstaPlaces — punkty widokowe w pobliżu Cirò Marina',
      caption: 'InstaPlaces',
    },
  ],
};

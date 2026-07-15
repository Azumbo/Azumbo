export type CiroMapLocale = 'en' | 'it' | 'ru' | 'pl';

export const CIROMAP_LOCALES: { id: CiroMapLocale; label: string; short: string }[] = [
  { id: 'en', label: 'English', short: 'EN' },
  { id: 'it', label: 'Italiano', short: 'IT' },
  { id: 'ru', label: 'Русский', short: 'RU' },
  { id: 'pl', label: 'Polski', short: 'PL' },
];

export const CIROMAP_LANG_STORAGE_KEY = 'ciromap.lang';

export function isCiroMapLocale(value: string | null | undefined): value is CiroMapLocale {
  return value === 'en' || value === 'it' || value === 'ru' || value === 'pl';
}

export function detectCiroMapLocale(): CiroMapLocale {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(CIROMAP_LANG_STORAGE_KEY);
  if (isCiroMapLocale(stored)) return stored;
  const browser = navigator.language.slice(0, 2).toLowerCase();
  return isCiroMapLocale(browser) ? browser : 'en';
}

export const APP_INFO = {
  version: '1.0.4',
  size: '25.9 MB',
  rating: '5.0',
  ratingCount: 1,
  minOS: 'iOS 17.0',
  ageRating: '13+',
  iapPrice: '$1.99',
  seller: 'Kostiantyn Kravchenko',
  copyright: '© 2026 Azumbo',
};

export type LandingFeature = { title: string; text: string };

export type LandingCopy = {
  navAria: string;
  privacy: string;
  contact: string;
  langSwitcherAria: string;
  kicker: string;
  title: string;
  subtitle: string;
  promo: string;
  getAppKicker: string;
  getAppTitle: string;
  getAppLead: string;
  qrCaption: string;
  qrAria: string;
  badgeAria: string;
  flyer: string;
  storeMetaPrefix: string;
  screenshotsKicker: string;
  screenshotsTitle: string;
  screenshotsLead: string;
  thumbsAria: string;
  aboutKicker: string;
  aboutTitle: string;
  intro: string[];
  why: string;
  featuresKicker: string;
  featuresTitle: string;
  features: LandingFeature[];
  whatsNewKicker: string;
  versionLabel: string;
  whatsNewLatest: string;
  whatsNew: string[];
  infoAria: string;
  infoCategory: string;
  infoCompatibility: string;
  infoLanguages: string;
  infoSize: string;
  infoRating: string;
  infoIap: string;
  category: string;
  languages: string;
  iap: string;
  downloadKicker: string;
  downloadTitle: string;
  downloadBody: string;
  openFlyer: string;
  footerPrivacy: string;
  legalCredit: string;
};

export const LANDING_COPY: Record<CiroMapLocale, LandingCopy> = {
  en: {
    navAria: 'Ciro.Map navigation',
    privacy: 'Privacy Policy',
    contact: 'Contact',
    langSwitcherAria: 'Page language',
    kicker: 'Travel · Cirò Marina, Calabria · iOS 17+',
    title: 'Ciro.Map: Guide Cirò Marina',
    subtitle: 'Sea Temp, Helplines, Map',
    promo:
      'Wander Cirò Marina with confidence. Map routes, summer events, shops, pharmacies, and emergency contacts — in Italian, English, Russian & Polish.',
    getAppKicker: 'Get the app',
    getAppTitle: 'Get Ciro.Map',
    getAppLead: 'Tap the official badge on your iPhone or iPad, or scan the QR code with Camera.',
    qrCaption: 'Scan to download',
    qrAria: 'Open Ciro.Map on the App Store via QR destination',
    badgeAria: 'Download Ciro.Map on the App Store',
    flyer: 'Flyer (print & PDF)',
    storeMetaPrefix: 'Free on the App Store · Version',
    screenshotsKicker: 'Screenshots',
    screenshotsTitle: 'See the app in your language.',
    screenshotsLead: 'UI and screenshots match the language you selected above.',
    thumbsAria: 'Screenshot thumbnails',
    aboutKicker: 'Why Ciro.Map',
    aboutTitle: 'Your all-in-one local companion on the Ionian coast.',
    intro: [
      'Benvenuti a Cirò Marina! Ciro.Map — your all-in-one local companion on the stunning Calabrian Ionian coast.',
      'No more switching between confusing maps, weather apps, and a pile of plastic loyalty cards. Whether you’re a tourist hunting for the best gelato and Instagram spots, an expat needing the nearest farmacia, or a local juggling discount cards — Ciro.Map puts everything at your fingertips, beautifully designed and lightning fast.',
    ],
    why: 'Unlike generic map apps, we focus exclusively on Cirò Marina and its surroundings (up to 52 km). Every place is personally verified, clutter-free, and sorted into real-life categories: from Supermarkets and Pharmacies to Fishmongers and Emergency Services.',
    featuresKicker: "Here's what you can do",
    featuresTitle: 'Everything local, one tap away.',
    features: [
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
    ],
    whatsNewKicker: "What's New",
    versionLabel: 'Version',
    whatsNewLatest: 'Latest',
    whatsNew: [
      'Redesigned home screen: events, services, exploration, and emergency services',
      'Events hub with MARE DiViNO calendar (July–August 2026) and activities',
      'New Culture, Stores, and Artigianali hubs',
      'Bilingual event programme with detail sheets (Madonna del Carmelo, Apollo Aleo play)',
      'In-app map routing to event venues',
      'New photo spot: Luigi Lilio Museum terrace',
      'WhatsApp actions for phone numbers',
      'Motto line on the launch screen',
    ],
    infoAria: 'App information',
    infoCategory: 'Category',
    infoCompatibility: 'Compatibility',
    infoLanguages: 'Languages',
    infoSize: 'Size',
    infoRating: 'Rating',
    infoIap: 'In-App Purchase',
    category: 'Travel',
    languages: 'English, Italian, Polish, Russian',
    iap: 'Remove Ads $1.99',
    downloadKicker: 'Join the local community',
    downloadTitle: 'Download Ciro.Map now.',
    downloadBody:
      'Loved by travellers and residents who call Cirò Marina home. Experience the Ionian coast like never before — one tap, everything local.',
    openFlyer: 'Open flyer with QR code',
    footerPrivacy: 'Ciro.Map Privacy',
    legalCredit:
      'Apple, the Apple logo, App Store, and the App Store badge are trademarks of Apple Inc., registered in the U.S. and other countries and regions.',
  },
  it: {
    navAria: 'Navigazione Ciro.Map',
    privacy: 'Informativa privacy',
    contact: 'Contatti',
    langSwitcherAria: 'Lingua della pagina',
    kicker: 'Viaggi · Cirò Marina, Calabria · iOS 17+',
    title: 'Ciro.Map: Guida Cirò Marina',
    subtitle: 'Temp. mare, emergenze, mappa',
    promo:
      'Esplora Cirò Marina con sicurezza. Percorsi, eventi estivi, negozi, farmacie e contatti di emergenza — in italiano, inglese, russo e polacco.',
    getAppKicker: "Scarica l'app",
    getAppTitle: 'Scarica Ciro.Map',
    getAppLead: 'Tocca il badge ufficiale su iPhone o iPad, oppure inquadra il QR con Fotocamera.',
    qrCaption: 'Scansiona per scaricare',
    qrAria: 'Apri Ciro.Map sull’App Store tramite QR',
    badgeAria: 'Scarica Ciro.Map sull’App Store',
    flyer: 'Flyer (stampa e PDF)',
    storeMetaPrefix: 'Gratis sull’App Store · Versione',
    screenshotsKicker: 'Screenshot',
    screenshotsTitle: 'L’app nella tua lingua.',
    screenshotsLead: 'Testo e screenshot seguono la lingua selezionata sopra.',
    thumbsAria: 'Anteprime screenshot',
    aboutKicker: 'Perché Ciro.Map',
    aboutTitle: 'Il tuo compagno locale tutto-in-uno sulla costa ionica.',
    intro: [
      'Benvenuti a Cirò Marina! Ciro.Map — il tuo compagno locale tutto-in-uno sulla stupenda costa ionica calabrese.',
      'Niente più salti tra mappe confuse, meteo e un mucchio di tessere fedeltà di plastica. Che tu sia un turista in cerca del miglior gelato e degli spot Instagram, un expat che cerca la farmacia più vicina o un residente con tante carte sconto — Ciro.Map ti mette tutto a portata di tap, con un design curato e velocità al top.',
    ],
    why: 'A differenza delle mappe generiche, ci concentriamo esclusivamente su Cirò Marina e dintorni (fino a 52 km). Ogni luogo è verificato, senza confusione, e ordinato in categorie reali: da supermercati e farmacie a pescherie e servizi di emergenza.',
    featuresKicker: 'Cosa puoi fare',
    featuresTitle: 'Tutto il locale, a un tap.',
    features: [
      {
        title: 'Mappa locale interattiva',
        text: 'Mappa pulita e veloce solo con luoghi rilevanti e selezionati. Tocca un pin per orari, distanza e navigazione a piedi o in auto.',
      },
      {
        title: 'Categorie intelligenti',
        text: 'Supermercati, Farmacie, Ristoranti, Pescheria, InstaPlaces, Emergenze e altro. Trovi esattamente ciò che ti serve.',
      },
      {
        title: 'Navigazione in un tap',
        text: 'Indicazioni a piedi o in auto direttamente nell’app, ordinate per distanza.',
      },
      {
        title: 'Meteo e temperatura del mare',
        text: 'Aria e mare in un colpo d’occhio. Sai se è giornata da spiaggia prima di uscire.',
      },
      {
        title: 'Portafoglio fedeltà',
        text: 'Tutte le tue carte sconto italiane (Coop, Eurospin, Trony e molte altre) in uno spazio digitale. Scansiona barcode o QR con la fotocamera.',
      },
      {
        title: 'InstaSpots',
        text: 'Una selezione di luoghi fotografici per scatti indimenticabili. Scopri gemme nascoste con sicurezza.',
      },
      {
        title: 'Multilingue',
        text: 'Passa facilmente tra English, Italiano, Polski e Русский. Ideale per visitatori e residenti internazionali.',
      },
      {
        title: 'Funziona offline',
        text: 'I luoghi restano in cache anche senza internet. Presto mappe offline complete per gli utenti Premium.',
      },
      {
        title: 'Premium senza annunci',
        text: 'Rimuovi gli annunci, sblocca l’accesso QR istantaneo e supporta mappe offline e nuove funzioni.',
      },
    ],
    whatsNewKicker: 'Novità',
    versionLabel: 'Versione',
    whatsNewLatest: 'Ultima',
    whatsNew: [
      'Home ridisegnata: eventi, servizi, esplorazione ed emergenze',
      'Hub eventi con calendario MARE DiViNO (luglio–agosto 2026) e attività',
      'Nuovi hub Cultura, Negozi e Artigianali',
      'Programma eventi bilingue con schede dettaglio (Madonna del Carmelo, Apollo Aleo)',
      'Percorsi in-app verso le sedi degli eventi',
      'Nuovo photo spot: terrazza Museo Luigi Lilio',
      'Azioni WhatsApp per i numeri di telefono',
      'Motto sulla schermata di avvio',
    ],
    infoAria: 'Informazioni sull’app',
    infoCategory: 'Categoria',
    infoCompatibility: 'Compatibilità',
    infoLanguages: 'Lingue',
    infoSize: 'Dimensione',
    infoRating: 'Valutazione',
    infoIap: 'Acquisto in-app',
    category: 'Viaggi',
    languages: 'Inglese, italiano, polacco, russo',
    iap: 'Rimuovi annunci $1.99',
    downloadKicker: 'Unisciti alla community locale',
    downloadTitle: 'Scarica Ciro.Map ora.',
    downloadBody:
      'Amata da viaggiatori e residenti che chiamano Cirò Marina casa. Vivi la costa ionica come mai prima — un tap, tutto il locale.',
    openFlyer: 'Apri il flyer con QR',
    footerPrivacy: 'Privacy Ciro.Map',
    legalCredit:
      'Apple, il logo Apple, App Store e il badge App Store sono marchi di Apple Inc., registrati negli Stati Uniti e in altri paesi e regioni.',
  },
  ru: {
    navAria: 'Навигация Ciro.Map',
    privacy: 'Конфиденциальность',
    contact: 'Контакты',
    langSwitcherAria: 'Язык страницы',
    kicker: 'Путешествия · Cirò Marina, Калабрия · iOS 17+',
    title: 'Ciro.Map: путеводитель Cirò Marina',
    subtitle: 'Температура моря, службы, карта',
    promo:
      'Исследуйте Cirò Marina уверенно. Маршруты, летние события, магазины, аптеки и экстренные контакты — на итальянском, английском, русском и польском.',
    getAppKicker: 'Скачать приложение',
    getAppTitle: 'Скачать Ciro.Map',
    getAppLead: 'Нажмите официальный бейдж на iPhone или iPad либо отсканируйте QR-код камерой.',
    qrCaption: 'Сканируйте для скачивания',
    qrAria: 'Открыть Ciro.Map в App Store по QR-коду',
    badgeAria: 'Скачать Ciro.Map в App Store',
    flyer: 'Флаер (печать и PDF)',
    storeMetaPrefix: 'Бесплатно в App Store · Версия',
    screenshotsKicker: 'Скриншоты',
    screenshotsTitle: 'Приложение на вашем языке.',
    screenshotsLead: 'Текст страницы и скриншоты соответствуют выбранному выше языку.',
    thumbsAria: 'Миниатюры скриншотов',
    aboutKicker: 'Почему Ciro.Map',
    aboutTitle: 'Ваш локальный компаньон «всё в одном» на Ионическом побережье.',
    intro: [
      'Benvenuti a Cirò Marina! Ciro.Map — ваш локальный компаньон «всё в одном» на потрясающем Ионическом побережье Калабрии.',
      'Больше не нужно прыгать между запутанными картами, погодой и стопкой пластиковых карт лояльности. Турист в поисках лучшего джелато и Instagram-точек, экспат, которому нужна ближайшая farmacia, или местный житель с кучей скидочных карт — Ciro.Map даёт всё под рукой, красиво и быстро.',
    ],
    why: 'В отличие от обычных карт, мы фокусируемся только на Cirò Marina и окрестностях (до 52 км). Каждое место проверено лично, без лишнего шума и разложено по реальным категориям: от супермаркетов и аптек до рыбных лавок и экстренных служб.',
    featuresKicker: 'Что можно делать',
    featuresTitle: 'Всё местное — в один тап.',
    features: [
      {
        title: 'Интерактивная локальная карта',
        text: 'Чистая быстрая карта только с нужными отобранными местами. Тап по пину — часы, расстояние и маршрут пешком или на авто.',
      },
      {
        title: 'Умные категории',
        text: 'Supermercati, Farmacie, Ristoranti, Pescheria, InstaPlaces, Emergenze и другие. Именно то, что нужно — без случайного шума.',
      },
      {
        title: 'Навигация в один тап',
        text: 'Пешие и автомобильные маршруты прямо в приложении, отсортированные по расстоянию.',
      },
      {
        title: 'Погода и температура моря',
        text: 'Воздух и море одним взглядом. Поймёте, стоит ли ехать на пляж, ещё до выхода из дома.',
      },
      {
        title: 'Кошелёк лояльности',
        text: 'Все итальянские дисконтные карты (Coop, Eurospin, Trony и многие другие) в одном цифровом месте. Сканируйте штрихкод или QR камерой.',
      },
      {
        title: 'InstaSpots',
        text: 'Подборка фотогеничных локаций для незабываемых кадров. Исследуйте скрытые места уверенно.',
      },
      {
        title: 'Мультиязычность',
        text: 'Легко переключайтесь между English, Italiano, Polski и Русский. Удобно для гостей и жителей.',
      },
      {
        title: 'Работает офлайн',
        text: 'Места кэшируются для просмотра без интернета. Скоро полноценные офлайн-карты для Premium.',
      },
      {
        title: 'Premium без рекламы',
        text: 'Уберите рекламу, мгновенный доступ к QR и поддержка развития офлайн-карт и новых функций.',
      },
    ],
    whatsNewKicker: 'Что нового',
    versionLabel: 'Версия',
    whatsNewLatest: 'Актуально',
    whatsNew: [
      'Обновлённый главный экран: события, сервисы, исследование и экстренные службы',
      'Афиша с календарём MARE DiViNO (июль–август 2026) и активностями',
      'Новые разделы Culture, Stores и Artigianali',
      'Двуязычная программа событий с карточками (Madonna del Carmelo, спектакль Apollo Aleo)',
      'Маршруты в приложении до площадок событий',
      'Новое фотоместо: терраса музея Luigi Lilio',
      'Действия WhatsApp для телефонных номеров',
      'Девиз на экране запуска',
    ],
    infoAria: 'Информация о приложении',
    infoCategory: 'Категория',
    infoCompatibility: 'Совместимость',
    infoLanguages: 'Языки',
    infoSize: 'Размер',
    infoRating: 'Оценка',
    infoIap: 'Покупка в приложении',
    category: 'Путешествия',
    languages: 'Английский, итальянский, польский, русский',
    iap: 'Убрать рекламу $1.99',
    downloadKicker: 'Присоединяйтесь к локальному сообществу',
    downloadTitle: 'Скачайте Ciro.Map сейчас.',
    downloadBody:
      'Любимо путешественниками и жителями Cirò Marina. Откройте Ионическое побережье по-новому — один тап, всё местное.',
    openFlyer: 'Открыть флаер с QR-кодом',
    footerPrivacy: 'Конфиденциальность Ciro.Map',
    legalCredit:
      'Apple, логотип Apple, App Store и бейдж App Store являются товарными знаками Apple Inc., зарегистрированными в США и других странах и регионах.',
  },
  pl: {
    navAria: 'Nawigacja Ciro.Map',
    privacy: 'Polityka prywatności',
    contact: 'Kontakt',
    langSwitcherAria: 'Język strony',
    kicker: 'Podróże · Cirò Marina, Kalabria · iOS 17+',
    title: 'Ciro.Map: przewodnik Cirò Marina',
    subtitle: 'Temp. morza, pogotowie, mapa',
    promo:
      'Odkrywaj Cirò Marina ze spokojem. Trasy, letnie wydarzenia, sklepy, apteki i kontakty alarmowe — po włosku, angielsku, rosyjsku i polsku.',
    getAppKicker: 'Pobierz aplikację',
    getAppTitle: 'Pobierz Ciro.Map',
    getAppLead: 'Dotknij oficjalnej odznaki na iPhonie lub iPadzie albo zeskanuj kod QR aparatem.',
    qrCaption: 'Zeskanuj, aby pobrać',
    qrAria: 'Otwórz Ciro.Map w App Store przez QR',
    badgeAria: 'Pobierz Ciro.Map z App Store',
    flyer: 'Ulotka (druk i PDF)',
    storeMetaPrefix: 'Za darmo w App Store · Wersja',
    screenshotsKicker: 'Zrzuty ekranu',
    screenshotsTitle: 'Aplikacja w Twoim języku.',
    screenshotsLead: 'Tekst strony i zrzuty ekranu odpowiadają wybranemu powyżej językowi.',
    thumbsAria: 'Miniatury zrzutów ekranu',
    aboutKicker: 'Dlaczego Ciro.Map',
    aboutTitle: 'Twój lokalny kompaktowy przewodnik na wybrzeżu jońskim.',
    intro: [
      'Benvenuti a Cirò Marina! Ciro.Map — Twój lokalny kompaktowy przewodnik na pięknym jońskim wybrzeżu Kalabrii.',
      'Koniec skakania między mylącymi mapami, pogodą i stertą plastikowych kart lojalnościowych. Turysta szukający najlepszego gelato i miejsc na Instagram, ekspata potrzebująca najbliższej farmacii albo mieszkaniec z wieloma kartami rabatowymi — Ciro.Map daje wszystko pod ręką, ładnie i szybko.',
    ],
    why: 'W przeciwieństwie do ogólnych map skupiamy się wyłącznie na Cirò Marina i okolicach (do 52 km). Każde miejsce jest sprawdzone, bez bałaganu i ułożone w realne kategorie: od supermarketów i aptek po sklepy rybne i służby ratunkowe.',
    featuresKicker: 'Co możesz zrobić',
    featuresTitle: 'Wszystko lokalne — jednym tapnięciem.',
    features: [
      {
        title: 'Interaktywna mapa lokalna',
        text: 'Czysta, szybka mapa tylko z wybranymi miejscami. Dotknij pinezki, by zobaczyć godziny, dystans i nawigację pieszo lub samochodem.',
      },
      {
        title: 'Inteligentne kategorie',
        text: 'Supermercati, Farmacie, Ristoranti, Pescheria, InstaPlaces, Emergenze i więcej. Dokładnie to, czego potrzebujesz.',
      },
      {
        title: 'Nawigacja jednym tapnięciem',
        text: 'Trasy piesze i samochodowe bezpośrednio w aplikacji, posortowane według odległości.',
      },
      {
        title: 'Pogoda i temperatura morza',
        text: 'Powietrze i morze jednym spojrzeniem. Wiesz, czy to dzień na plażę, zanim wyjdziesz.',
      },
      {
        title: 'Portfel lojalnościowy',
        text: 'Wszystkie włoskie karty rabatowe (Coop, Eurospin, Trony i wiele innych) w jednym miejscu. Skanuj kod kreskowy lub QR aparatem.',
      },
      {
        title: 'InstaSpots',
        text: 'Wybrane miejsca fotograficzne na niezapomniane ujęcia. Odkrywaj ukryte perełki ze spokojem.',
      },
      {
        title: 'Wielojęzyczność',
        text: 'Płynnie przełączaj English, Italiano, Polski i Русский. Idealne dla gości i mieszkańców.',
      },
      {
        title: 'Działa offline',
        text: 'Miejsca są cache’owane nawet bez internetu. Wkrótce pełne mapy offline dla Premium.',
      },
      {
        title: 'Premium bez reklam',
        text: 'Usuń reklamy, odblokuj natychmiastowy QR i wspieraj mapy offline oraz nowe funkcje.',
      },
    ],
    whatsNewKicker: 'Nowości',
    versionLabel: 'Wersja',
    whatsNewLatest: 'Najnowsze',
    whatsNew: [
      'Przebudowany ekran główny: wydarzenia, usługi, odkrywanie i służby ratunkowe',
      'Centrum wydarzeń z kalendarzem MARE DiViNO (lipiec–sierpień 2026) i aktywnościami',
      'Nowe huby Culture, Stores i Artigianali',
      'Dwujęzyczny program wydarzeń z kartami szczegółów (Madonna del Carmelo, Apollo Aleo)',
      'Trasy w aplikacji do miejsc wydarzeń',
      'Nowe miejsce na zdjęcia: taras Museo Luigi Lilio',
      'Akcje WhatsApp dla numerów telefonu',
      'Motto na ekranie startowym',
    ],
    infoAria: 'Informacje o aplikacji',
    infoCategory: 'Kategoria',
    infoCompatibility: 'Zgodność',
    infoLanguages: 'Języki',
    infoSize: 'Rozmiar',
    infoRating: 'Ocena',
    infoIap: 'Zakup w aplikacji',
    category: 'Podróże',
    languages: 'Angielski, włoski, polski, rosyjski',
    iap: 'Usuń reklamy $1.99',
    downloadKicker: 'Dołącz do lokalnej społeczności',
    downloadTitle: 'Pobierz Ciro.Map teraz.',
    downloadBody:
      'Ulubiona przez podróżników i mieszkańców Cirò Marina. Poznaj wybrzeże jońskie jak nigdy — jedno tapnięcie, wszystko lokalne.',
    openFlyer: 'Otwórz ulotkę z kodem QR',
    footerPrivacy: 'Prywatność Ciro.Map',
    legalCredit:
      'Apple, logo Apple, App Store oraz odznaka App Store są znakami towarowymi Apple Inc., zarejestrowanymi w USA oraz innych krajach i regionach.',
  },
};

/** @deprecated Prefer LANDING_COPY[locale] — kept for any leftover imports. */
export const APP_STORE_SUBTITLE = LANDING_COPY.en.subtitle;
export const APP_STORE_PROMO = LANDING_COPY.en.promo;
export const APP_STORE_INTRO = LANDING_COPY.en.intro;
export const WHY_CIROMAP = LANDING_COPY.en.why;
export const FEATURES = LANDING_COPY.en.features;
export const WHATS_NEW = LANDING_COPY.en.whatsNew;

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
  ],
  ru: [
    {
      src: '/ciromap/screenshots/ru/01-home.png',
      alt: 'Главный экран Ciro.Map на русском с категориями жилья, еды, событий и экстренных служб',
      caption: 'Главная',
    },
  ],
  pl: [
    {
      src: '/ciromap/screenshots/pl/01-home.png',
      alt: 'Ekran główny Ciro.Map po polsku z kategoriami noclegów, jedzenia, wydarzeń i służb ratunkowych',
      caption: 'Start',
    },
  ],
};

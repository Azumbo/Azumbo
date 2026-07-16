import {
  SITE_URL,
  VIDEO_PUBLISH_DATE,
  type Locale,
  LOCALE_HTML_LANG,
  buildCanonical,
  buildLanguageAlternates,
} from './seo';

export const BIRD_LINES_VIDEO_PATH = '/videos/bird-lines';
export const BIRD_LINES_VIDEO_ID = 'bird-lines-player';
export const BIRD_LINES_CONTENT_URL = `${SITE_URL}/WhoopsBirdLines.mp4`;
export const BIRD_LINES_THUMBNAIL_URL = `${SITE_URL}/assets/logo/azumbo-logo.png`;
export const BIRD_LINES_DURATION = 'PT45S';
export const BIRD_LINES_WIDTH = 1280;
export const BIRD_LINES_HEIGHT = 720;

export function birdLinesWatchPath(locale: Locale) {
  return `/${locale}${BIRD_LINES_VIDEO_PATH}`;
}

export function birdLinesEmbedUrl(locale: Locale) {
  return `${buildCanonical(birdLinesWatchPath(locale))}#${BIRD_LINES_VIDEO_ID}`;
}

type BirdLinesCopy = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbVideo: string;
  bluf: string;
  aboutTitle: string;
  aboutBody: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  backHome: string;
  waitlistCTA: string;
  videoName: string;
  videoDescription: string;
};

export const BIRD_LINES_COPY: Record<Locale, BirdLinesCopy> = {
  en: {
    metaTitle: 'Bird Lines — From Pages to Pixels',
    metaDescription:
      'Watch the Bird Lines reveal trailer: a match-3 journey inspired by City In The Plane, set in Paris with Ellie.',
    breadcrumbHome: 'Home',
    breadcrumbVideo: 'Bird Lines video',
    bluf: 'Bird Lines is AZUMBO’s in-development match-3 game inspired by City In The Plane. This page is the official watch page for the reveal trailer.',
    aboutTitle: 'About this video',
    aboutBody:
      'The trailer introduces Bird Lines — a meditative puzzle journey through Paris with Ellie, where match-3 mechanics meet literary storytelling. AZUMBO is building the game for mobile platforms from Calabria, Italy.',
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'What is Bird Lines?',
        answer:
          'Bird Lines is a match-3 game by AZUMBO inspired by the story City In The Plane, blending puzzle play with narrative atmosphere in Paris.',
      },
      {
        question: 'Is Bird Lines available to play?',
        answer:
          'The game is in development. Join the waitlist on the AZUMBO homepage to receive beta updates.',
      },
      {
        question: 'Who made this video?',
        answer:
          'This reveal trailer was produced by AZUMBO, an indie game studio focused on mobile and Nintendo Switch titles.',
      },
    ],
    backHome: 'Back to AZUMBO',
    waitlistCTA: 'Join the waitlist',
    videoName: 'Bird Lines — From Pages to Pixels',
    videoDescription:
      'Official Bird Lines reveal trailer: a match-3 journey inspired by City In The Plane, featuring Ellie in Paris where puzzles meet storytelling.',
  },
  it: {
    metaTitle: 'Bird Lines — Dalle pagine ai pixel',
    metaDescription:
      'Guarda il trailer di Bird Lines: un match-3 ispirato a City In The Plane, ambientato a Parigi con Ellie.',
    breadcrumbHome: 'Home',
    breadcrumbVideo: 'Video Bird Lines',
    bluf: 'Bird Lines è il match-3 in sviluppo di AZUMBO, ispirato a City In The Plane. Questa pagina è la watch page ufficiale del trailer.',
    aboutTitle: 'Informazioni sul video',
    aboutBody:
      'Il trailer presenta Bird Lines — un viaggio puzzle meditativo a Parigi con Ellie, dove il match-3 incontra la narrazione letteraria. AZUMBO sviluppa il gioco per mobile dalla Calabria.',
    faqTitle: 'Domande frequenti',
    faqs: [
      {
        question: "Cos'è Bird Lines?",
        answer:
          'Bird Lines è un match-3 di AZUMBO ispirato a City In The Plane, che unisce puzzle e atmosfera narrativa a Parigi.',
      },
      {
        question: 'Bird Lines è già giocabile?',
        answer:
          'Il gioco è in sviluppo. Unisciti alla waitlist sulla homepage AZUMBO per ricevere aggiornamenti sulla beta.',
      },
      {
        question: 'Chi ha realizzato questo video?',
        answer:
          'Questo trailer è stato prodotto da AZUMBO, studio indie di giochi mobile e Nintendo Switch.',
      },
    ],
    backHome: 'Torna ad AZUMBO',
    waitlistCTA: 'Unisciti alla waitlist',
    videoName: 'Bird Lines — Dalle pagine ai pixel',
    videoDescription:
      'Trailer ufficiale di Bird Lines: un match-3 ispirato a City In The Plane con Ellie a Parigi, dove puzzle e storytelling si incontrano.',
  },
  ru: {
    metaTitle: 'Bird Lines — От страниц к пикселям',
    metaDescription:
      'Смотрите трейлер Bird Lines: match-3 по мотивам City In The Plane, действие в Париже с Элли.',
    breadcrumbHome: 'Главная',
    breadcrumbVideo: 'Видео Bird Lines',
    bluf: 'Bird Lines — match-3 от AZUMBO по мотивам City In The Plane. Эта страница — официальная watch page с трейлером.',
    aboutTitle: 'О видео',
    aboutBody:
      'Трейлер представляет Bird Lines — медитативное путешествие-головоломку по Парижу с Элли, где match-3 сочетается с литературным сюжетом. AZUMBO разрабатывает игру для мобильных платформ из Калабрии, Италия.',
    faqTitle: 'Частые вопросы',
    faqs: [
      {
        question: 'Что такое Bird Lines?',
        answer:
          'Bird Lines — match-3 от AZUMBO по мотивам City In The Plane, сочетающий головоломку и повествовательную атмосферу Парижа.',
      },
      {
        question: 'Можно ли уже играть в Bird Lines?',
        answer:
          'Игра в разработке. Запишитесь в лист ожидания на главной AZUMBO, чтобы получать новости о бета-версии.',
      },
      {
        question: 'Кто сделал это видео?',
        answer:
          'Трейлер создан студией AZUMBO — инди-разработчиком мобильных игр и портов на Nintendo Switch.',
      },
    ],
    backHome: 'На главную AZUMBO',
    waitlistCTA: 'В лист ожидания',
    videoName: 'Bird Lines — От страниц к пикселям',
    videoDescription:
      'Официальный трейлер Bird Lines: match-3 по мотивам City In The Plane с Элли в Париже, где головоломки встречаются с историей.',
  },
};

const WAITLIST_MAILTO =
  'mailto:azumbogames@gmail.com?subject=BirdLines%20Beta%20Waitlist&body=EN%3A%20Please%20send%20me%20updates%20when%20the%20BirdLines%20beta%20is%20ready.';

export { WAITLIST_MAILTO };

export function buildBirdLinesWatchGraph(locale: Locale) {
  const pageUrl = buildCanonical(birdLinesWatchPath(locale));
  const copy = BIRD_LINES_COPY[locale];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: copy.breadcrumbHome,
            item: buildCanonical(`/${locale}`),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: copy.breadcrumbVideo,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'VideoObject',
        '@id': `${pageUrl}#video`,
        name: copy.videoName,
        description: copy.videoDescription,
        contentUrl: BIRD_LINES_CONTENT_URL,
        embedUrl: birdLinesEmbedUrl(locale),
        thumbnailUrl: BIRD_LINES_THUMBNAIL_URL,
        uploadDate: VIDEO_PUBLISH_DATE,
        duration: BIRD_LINES_DURATION,
        width: BIRD_LINES_WIDTH,
        height: BIRD_LINES_HEIGHT,
        inLanguage: LOCALE_HTML_LANG[locale],
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
        publisher: { '@type': 'Organization', name: 'AZUMBO', url: SITE_URL },
        isFamilyFriendly: true,
        regionsAllowed: ['US', 'IT', 'RU', 'EU'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: copy.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function birdLinesWatchAlternates() {
  return buildLanguageAlternates(BIRD_LINES_VIDEO_PATH);
}

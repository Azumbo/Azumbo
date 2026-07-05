import type { Locale } from './seo';

type HomeFaqItem = { question: string; answer: string };

export const HOME_BLUF: Record<Locale, string> = {
  en: 'AZUMBO is an indie game studio building mobile and Nintendo Switch games — including Bird Lines, La Pasta, Ciro.Map, and Azumbox — with prototype, publishing, and porting services.',
  it: 'AZUMBO è uno studio indie che sviluppa giochi mobile e per Nintendo Switch — tra cui Bird Lines, La Pasta, Ciro.Map e Azumbox — con servizi di prototipazione, publishing e porting.',
  ru: 'AZUMBO — инди-студия мобильных игр и портов на Nintendo Switch: Bird Lines, La Pasta, Ciro.Map и Azumbox, а также услуги прототипирования, паблишинга и портирования.',
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
  ],
};

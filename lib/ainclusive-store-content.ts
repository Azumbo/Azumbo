export type AInclusiveLocale = 'en' | 'he' | 'it' | 'ru';

export const AINCLUSIVE_LOCALES: { id: AInclusiveLocale; label: string; short: string }[] = [
  { id: 'en', label: 'English', short: 'EN' },
  { id: 'he', label: 'עברית', short: 'HE' },
  { id: 'it', label: 'Italiano', short: 'IT' },
  { id: 'ru', label: 'Русский', short: 'RU' },
];

export const AINCLUSIVE_LANG_STORAGE_KEY = 'ainclusive.lang';

export function isAInclusiveLocale(value: string | null | undefined): value is AInclusiveLocale {
  return value === 'en' || value === 'he' || value === 'it' || value === 'ru';
}

export function detectAInclusiveLocale(): AInclusiveLocale {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(AINCLUSIVE_LANG_STORAGE_KEY);
  if (isAInclusiveLocale(stored)) return stored;
  const browser = navigator.language.slice(0, 2).toLowerCase();
  return isAInclusiveLocale(browser) ? browser : 'en';
}

export function localeDirection(locale: AInclusiveLocale): 'ltr' | 'rtl' {
  return locale === 'he' ? 'rtl' : 'ltr';
}

export type FaqItem = { question: string; answer: string };

export type LandingCopy = {
  langSwitcherAria: string;
  navAria: string;
  navApp: string;
  navPrivacy: string;
  navAccessibility: string;
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
  primaryCta: string;
  readSupport: string;
  heroPreviewAria: string;
  heroAlt: string;
  shotsKicker: string;
  shotsTitle: string;
  shotsLead: string;
  shots: { src: string; name: string; note: string; alt: string; hasDeviceFrame?: boolean }[];
  featuresKicker: string;
  featuresTitle: string;
  featuresLead: string;
  features: { icon: string; title: string; text: string }[];
  impactKicker: string;
  impactTitle: string;
  impactLead: string;
  impactPoints: { title: string; text: string }[];
  testimonialKicker: string;
  testimonialQuote: string;
  testimonialAttribution: string;
  testimonialAria: string;
  faqKicker: string;
  faqTitle: string;
  faqLead: string;
  faqs: FaqItem[];
  faqCtaPrefix: string;
  faqCtaLink: string;
  downloadBadge: string;
  downloadTitle: string;
  downloadBody: string;
};

export type SupportCopy = {
  kicker: string;
  title: string;
  subtitle: string;
  contactSupport: string;
  privacyPolicy: string;
  appHome: string;
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

export type AccessibilityCopy = PrivacyCopy;

export const AINCLUSIVE_LANDING: Record<AInclusiveLocale, LandingCopy> = {
  en: {
    langSwitcherAria: 'Page language',
    navAria: 'AInclusive navigation',
    navApp: 'App',
    navPrivacy: 'Privacy',
    navAccessibility: 'Accessibility',
    navSupport: 'Support',
    navContact: 'Contact',
    brandHomeAria: 'AInclusive home',
    footerAria: 'Footer navigation',
    footerCredit: '© 2026 AZUMBO. AInclusive helps educators adapt learning materials for every learner.',
    badgeAria: 'Download AInclusive on the App Store',
    badgeAlt: 'Download on the App Store',
    kicker: 'For teachers, parents & learning-support staff',
    title: 'AInclusive',
    subtitleLead:
      'Turn any worksheet into an accessible lesson in under an hour — no special training, no manual rewriting.',
    subtitle:
      'Photograph or paste your classroom materials and AInclusive adapts them for special needs and language-barrier learners, on iPhone, iPad, and Mac. Available in English, Hebrew, and Italian.',
    primaryCta: 'Download on the App Store',
    readSupport: 'Support & FAQ',
    heroPreviewAria: 'AInclusive app preview',
    heroAlt: 'AInclusive app home: Create learning materials',
    shotsKicker: 'Real product screens',
    shotsTitle: 'How app works',
    shotsLead: 'Fresh simulator captures of the live build — Home and the iOS app icon on the device springboard.',
    shots: [
      {
        src: '/ainclusive/app-preview.png',
        name: 'Home',
        note: 'Create adapted learning materials in one tap.',
        alt: 'AInclusive home screen with Create learning materials button',
      },
      {
        src: '/ainclusive/home-screen.png',
        name: 'On the Home Screen',
        note: 'The real AInclusive icon as it appears on iPhone.',
        alt: 'iPhone Home Screen showing the AInclusive app icon',
      },
    ],
    featuresKicker: 'Camera · languages · privacy-safe metrics',
    featuresTitle: 'Built for real classrooms, not demos.',
    featuresLead:
      'Adapting materials for a special needs pupil used to mean hours of manual rewriting and specialist expertise. AInclusive keeps the flow calm and practical: capture a worksheet, choose the learner context, and get adapted materials you can review and share in minutes.',
    features: [
      {
        icon: '📷',
        title: 'Worksheet capture',
        text: 'Use the camera or photo library to send worksheets and learning sheets for adaptation — with clear permission purposes for App Review.',
      },
      {
        icon: '🌍',
        title: 'EN · HE · IT',
        text: 'App UI and lesson language options cover English, Hebrew (RTL), and Italian — ready for local pilots and EU grant evidence.',
      },
      {
        icon: '♿',
        title: 'Inclusive by design',
        text: 'Large touch targets, Dynamic Type–friendly layout, and restrained HIG-aligned visuals for educators under time pressure.',
      },
      {
        icon: '📊',
        title: 'Privacy-safe analytics',
        text: 'Firebase Analytics & Crashlytics power product metrics without sending emails, names, topics, or photos to analytics events.',
      },
    ],
    impactKicker: 'Social impact',
    impactTitle: 'Why it works for a special kid in your class',
    impactLead:
      "Ten teachers and parents of children with special needs have already tested AInclusive — and Israel's Down Syndrome Society (Yated) has issued a letter of intent for commercial licensing once the MVP is complete. AInclusive is built to show classroom usefulness and responsible data practice, not just a pitch deck.",
    impactPoints: [
      {
        title: 'Learners who need adaptation',
        text: 'Supports teachers, parents, and LSAs who spend hours rewriting materials for children with special needs — and for children and young adults facing language barriers.',
      },
      {
        title: 'Multilingual Europe & Israel',
        text: 'Italian and Hebrew localize both UI and the path to regional pilots.',
      },
      {
        title: 'Transparent by default',
        text: 'Public privacy policy, support page, and App Store nutrition labels ready for Education review.',
      },
    ],
    testimonialKicker: 'Early pilot feedback',
    testimonialQuote:
      'Using the AInclusive app has been an inspiring experience. Its user-friendly interface and creative approach towards pupils with special needs are truly remarkable… I’m confident this app will empower teachers.',
    testimonialAttribution: 'A special needs teacher, early pilot feedback',
    testimonialAria: 'Pilot teacher testimonial',
    faqKicker: 'FAQ',
    faqTitle: 'Quick answers.',
    faqLead: 'Short answers for App Store, schools, and grant reviewers.',
    faqs: [
      {
        question: 'What is AInclusive?',
        answer:
          'AInclusive is an Education app that helps teachers, parents, and learning-support staff adapt worksheets into more accessible lesson materials on iPhone, iPad, and Mac.',
      },
      {
        question: 'Why does the app need the camera?',
        answer:
          'So you can photograph worksheets and learning materials to adapt them into accessible lessons. Photo library access is used when you choose an existing image instead of taking a new photo.',
      },
      {
        question: 'Which languages are supported?',
        answer: 'English, Hebrew (right-to-left), and Italian in the app UI, with lesson language chosen per task.',
      },
      {
        question: 'What analytics do you collect?',
        answer:
          'Privacy-safe product events via Firebase (for example funnel steps and crash diagnostics). We do not send email, student name, topic text, lesson body, or photos to Analytics.',
      },
    ],
    faqCtaPrefix: 'Need help for your school or classroom?',
    faqCtaLink: 'Open AInclusive Support',
    downloadBadge: 'Live on the App Store',
    downloadTitle: 'Get AInclusive today.',
    downloadBody:
      'AInclusive is free on the App Store for iPhone, iPad, and Mac. Download it for teachers, parents, and learning-support staff.',
  },

  he: {
    langSwitcherAria: 'שפת העמוד',
    navAria: 'ניווט AInclusive',
    navApp: 'אפליקציה',
    navPrivacy: 'פרטיות',
    navAccessibility: 'נגישות',
    navSupport: 'תמיכה',
    navContact: 'יצירת קשר',
    brandHomeAria: 'דף הבית של AInclusive',
    footerAria: 'ניווט תחתון',
    footerCredit: '© 2026 AZUMBO. AInclusive מסייעת למחנכים להתאים חומרי למידה לכל תלמיד.',
    badgeAria: 'הורדת AInclusive מ-App Store',
    badgeAlt: 'Download on the App Store',
    kicker: 'למורים, הורים ואנשי תמיכה בלמידה',
    title: 'AInclusive',
    subtitleLead:
      'הפכו כל דף עבודה לשיעור נגיש בפחות משעה — בלי הכשרה מיוחדת ובלי שכתוב ידני.',
    subtitle:
      'צלמו או הדביקו חומרי כיתה, ו-AInclusive מתאימה אותם ללומדים עם צרכים מיוחדים וללומדים עם מחסום שפה — באייפון, אייפד ומק. זמין באנגלית, עברית ואיטלקית.',
    primaryCta: 'הורדה מ-App Store',
    readSupport: 'תמיכה ושאלות נפוצות',
    heroPreviewAria: 'תצוגה מקדימה של האפליקציה',
    heroAlt: 'מסך הבית של AInclusive: יצירת חומרי למידה',
    shotsKicker: 'מסכים אמיתיים',
    shotsTitle: 'איך האפליקציה עובדת',
    shotsLead: 'צילומי סימולטור מהבילד החי — מסך הבית ואייקון האפליקציה על מסך הבית של האייפון.',
    shots: [
      {
        src: '/ainclusive/app-preview.png',
        name: 'Home',
        note: 'יצירת חומרי למידה מותאמים בלחיצה אחת.',
        alt: 'מסך הבית של AInclusive עם כפתור יצירת חומרי למידה',
      },
      {
        src: '/ainclusive/home-screen.png',
        name: 'על מסך הבית',
        note: 'האייקון האמיתי של AInclusive באייפון.',
        alt: 'מסך הבית של האייפון עם אייקון AInclusive',
      },
    ],
    featuresKicker: 'מצלמה · שפות · מדידה שומרת פרטיות',
    featuresTitle: 'בנוי לכיתות אמיתיות, לא לדמו.',
    featuresLead:
      'התאמת חומרים לתלמיד עם צרכים מיוחדים דרשה פעם שעות של שכתוב ידני ומומחיות. AInclusive שומרת על זרימה רגועה ומעשית: צילום דף עבודה, בחירת הקשר הלומד, וקבלת חומרים מותאמים לבדיקה ולשיתוף תוך דקות.',
    features: [
      {
        icon: '📷',
        title: 'צילום דפי עבודה',
        text: 'שימוש במצלמה או בספריית התמונות לשליחת דפי עבודה להתאמה — עם הסברי הרשאה ברורים לביקורת App Store.',
      },
      {
        icon: '🌍',
        title: 'EN · HE · IT',
        text: 'ממשק באנגלית, עברית (מימין לשמאל) ואיטלקית — מוכן לפיילוטים מקומיים ולדיווח לקרנות.',
      },
      {
        icon: '♿',
        title: 'נגישות בתכנון',
        text: 'יעדי מגע גדולים, תמיכה בגדלי טקסט, וממשק שקט לפי Apple HIG.',
      },
      {
        icon: '📊',
        title: 'אנליטיקה שומרת פרטיות',
        text: 'Firebase Analytics ו-Crashlytics למדדי מוצר בלי לשלוח אימייל, שמות, נושאים או תמונות לאירועי אנליטיקה.',
      },
    ],
    impactKicker: 'השפעה חברתית',
    impactTitle: 'למה זה עובד לתלמיד מיוחד בכיתה שלך',
    impactLead:
      'עשרה מורים והורים לילדים עם צרכים מיוחדים כבר בדקו את AInclusive — ואגודת תסמונת דאון בישראל (יָתֵד) הוציאה מכתב כוונות לרישוי מסחרי עם השלמת ה-MVP. AInclusive בנויה להראות שימושיות בכיתה וטיפול אחראי בנתונים — לא רק מצגת.',
    impactPoints: [
      {
        title: 'לומדים שזקוקים להתאמה',
        text: 'תומכת במורים, הורים ואנשי LSA שמשקיעים שעות בשכתוב חומרים לילדים עם צרכים מיוחדים — וגם לילדים ולצעירים עם מחסום שפה.',
      },
      {
        title: 'אירופה וישראל רב-לשוניות',
        text: 'איטלקית ועברית מכינות את הדרך לפיילוטים אזוריים.',
      },
      {
        title: 'שקיפות כברירת מחדל',
        text: 'מדיניות פרטיות, תמיכה ותוויות פרטיות ב-App Store מוכנים לקטגוריית Education.',
      },
    ],
    testimonialKicker: 'משוב מפיילוט מוקדם',
    testimonialQuote:
      'השימוש באפליקציית AInclusive היה חוויה מעוררת השראה. הממשק הידידותי והגישה היצירתית לתלמידים עם צרכים מיוחדים מרשימים באמת… אני בטוחה שהאפליקציה תעצים מורים.',
    testimonialAttribution: 'מורה לחינוך מיוחד, משוב מפיילוט מוקדם',
    testimonialAria: 'עדות ממורה בפיילוט',
    faqKicker: 'שאלות נפוצות',
    faqTitle: 'תשובות קצרות.',
    faqLead: 'לביקורת App Store, בתי ספר וגורמי מענקים.',
    faqs: [
      {
        question: 'מה זה AInclusive?',
        answer:
          'אפליקציית Education שעוזרת למורים, הורים ואנשי תמיכה להתאים דפי עבודה לחומרי שיעור נגישים יותר באייפון, אייפד ומק.',
      },
      {
        question: 'למה האפליקציה צריכה מצלמה?',
        answer:
          'כדי לצלם דפי עבודה וחומרי למידה ולהתאים אותם לשיעורים נגישים. גישה לספריית התמונות משמשת כשבוחרים תמונה קיימת במקום לצלם.',
      },
      {
        question: 'אילו שפות נתמכות?',
        answer: 'אנגלית, עברית (מימין לשמאל) ואיטלקית בממשק; שפת השיעור נבחרת לכל משימה.',
      },
      {
        question: 'אילו נתונים נאספים באנליטיקה?',
        answer:
          'אירועי מוצר שומרי פרטיות דרך Firebase. לא נשלחים אימייל, שם תלמיד, טקסט נושא, גוף השיעור או תמונות לאנליטיקה.',
      },
    ],
    faqCtaPrefix: 'צריכים עזרה לבית הספר או לכיתה?',
    faqCtaLink: 'לדף התמיכה של AInclusive',
    downloadBadge: 'זמין ב-App Store',
    downloadTitle: 'הורידו את AInclusive עכשיו.',
    downloadBody:
      'AInclusive בחינם ב-App Store לאייפון, אייפד ומק. מתאים למורים, הורים ואנשי תמיכה בלמידה.',
  },

  it: {
    langSwitcherAria: 'Lingua della pagina',
    navAria: 'Navigazione AInclusive',
    navApp: 'App',
    navPrivacy: 'Privacy',
    navAccessibility: 'Accessibilità',
    navSupport: 'Supporto',
    navContact: 'Contatti',
    brandHomeAria: 'Home di AInclusive',
    footerAria: 'Link a piè di pagina',
    footerCredit:
      '© 2026 AZUMBO. AInclusive aiuta gli educatori ad adattare i materiali didattici per ogni studente.',
    badgeAria: 'Scarica AInclusive sull’App Store',
    badgeAlt: 'Download on the App Store',
    kicker: 'Per insegnanti, genitori e personale di sostegno',
    title: 'AInclusive',
    subtitleLead:
      'Trasforma qualsiasi scheda in una lezione accessibile in meno di un’ora — senza formazione speciale e senza riscrivere tutto a mano.',
    subtitle:
      'Fotografa o incolla i materiali di classe: AInclusive li adatta per alunni con bisogni speciali e per chi ha barriere linguistiche, su iPhone, iPad e Mac. L’interfaccia è disponibile in inglese, ebraico e italiano.',
    primaryCta: 'Scarica sull’App Store',
    readSupport: 'Supporto e FAQ',
    heroPreviewAria: 'Anteprima dell’app AInclusive',
    heroAlt: 'Schermata iniziale di AInclusive: crea materiali didattici',
    shotsKicker: 'Schermate reali',
    shotsTitle: 'Come funziona l’app',
    shotsLead:
      'Screenshot dalla build attuale: la home dell’app e l’icona AInclusive sulla schermata Home dell’iPhone.',
    shots: [
      {
        src: '/ainclusive/app-preview.png',
        name: 'Home',
        note: 'Crea materiali adattati con un tocco.',
        alt: 'Schermata home di AInclusive con il pulsante Crea materiali',
      },
      {
        src: '/ainclusive/home-screen.png',
        name: 'Sulla schermata Home',
        note: 'Così appare l’icona AInclusive sull’iPhone.',
        alt: 'Schermata Home di iPhone con l’icona dell’app AInclusive',
      },
    ],
    featuresKicker: 'Fotocamera · lingue · analytics rispettosa della privacy',
    featuresTitle: 'Pensata per il lavoro in classe, non per le demo.',
    featuresLead:
      'Adattare i materiali per un alunno con bisogni speciali richiedeva ore di lavoro manuale e competenze specialistiche. Con AInclusive il percorso è più semplice: fotografa una scheda, indica il contesto dello studente e ricevi materiali pronti da rivedere e condividere.',
    features: [
      {
        icon: '📷',
        title: 'Scatta le schede',
        text: 'Usa la fotocamera o la libreria foto per inviare schede da adattare, con testi di permesso chiari per la revisione App Store.',
      },
      {
        icon: '🌍',
        title: 'EN · HE · IT',
        text: 'Interfaccia e lingua della lezione in inglese, ebraico (da destra a sinistra) e italiano — utile per i piloti locali e per la rendicontazione dei bandi.',
      },
      {
        icon: '♿',
        title: 'Design inclusivo',
        text: 'Pulsanti grandi, testo ingrandibile e interfaccia sobria secondo le linee guida Apple: comoda anche quando hai poco tempo.',
      },
      {
        icon: '📊',
        title: 'Analytics senza dati inutili',
        text: 'Firebase Analytics e Crashlytics aiutano a capire il prodotto, ma non inviano email, nomi, argomenti delle lezioni o foto agli eventi analytics.',
      },
    ],
    impactKicker: 'Impatto sociale',
    impactTitle: 'Perché funziona per un alunno con bisogni speciali nella tua classe',
    impactLead:
      'Dieci insegnanti e genitori di bambini con bisogni speciali hanno già provato AInclusive. La Società israeliana per la sindrome di Down (Yated) ha inviato una lettera di intenti per la licenza commerciale a MVP completato. Puntiamo sull’utilità reale in classe e su un uso responsabile dei dati — non solo su una bella presentazione.',
    impactPoints: [
      {
        title: 'Studenti che hanno bisogno di adattamento',
        text: 'Aiutiamo insegnanti, genitori e assistenti che passano ore a riscrivere materiali per bambini con bisogni speciali — e per chi affronta barriere linguistiche.',
      },
      {
        title: 'Europa e Israele multilingue',
        text: 'Italiano ed ebraico nell’interfaccia aprono la strada a piloti regionali.',
      },
      {
        title: 'Trasparenza fin dal primo giorno',
        text: 'Informativa privacy e pagina di supporto pubbliche, più le App Privacy labels — pronte per la revisione nella categoria Education.',
      },
    ],
    testimonialKicker: 'Feedback dal pilota iniziale',
    testimonialQuote:
      'L’uso dell’app AInclusive è stato un’esperienza davvero stimolante. L’interfaccia intuitiva e la flessibilità nell’adattare i materiali per gli alunni con bisogni speciali sono semplicemente straordinarie… Sono convinta che quest’app sarà un valido alleato per gli insegnanti.',
    testimonialAttribution: 'Insegnante di sostegno, partecipante al test pilota',
    testimonialAria: 'Testimonianza di un’insegnante del pilota',
    faqKicker: 'FAQ',
    faqTitle: 'Risposte rapide.',
    faqLead: 'Per App Store, scuole e chi valuta i bandi.',
    faqs: [
      {
        question: 'Cos’è AInclusive?',
        answer:
          'AInclusive è un’app educativa per insegnanti, genitori e personale di sostegno. Aiuta a trasformare schede e materiali in attività più accessibili su iPhone, iPad e Mac.',
      },
      {
        question: 'Perché serve la fotocamera?',
        answer:
          'Per fotografare schede e materiali da adattare. La libreria foto serve se scegli un’immagine già salvata invece di scattarne una nuova.',
      },
      {
        question: 'Quali lingue sono supportate?',
        answer:
          'Nell’interfaccia: inglese, ebraico (da destra a sinistra) e italiano. La lingua della lezione si può scegliere per ogni attività.',
      },
      {
        question: 'Quali dati analytics raccogliete?',
        answer:
          'Solo eventi di prodotto anonimizzati via Firebase — ad esempio i passaggi del flusso e le segnalazioni di crash. Non inviamo ad Analytics email, nome dello studente, testo dell’argomento, testo della lezione o foto.',
      },
    ],
    faqCtaPrefix: 'Serve aiuto per la scuola o la classe?',
    faqCtaLink: 'Vai al supporto AInclusive',
    downloadBadge: 'Disponibile sull’App Store',
    downloadTitle: 'Scarica AInclusive ora.',
    downloadBody:
      'AInclusive è gratis sull’App Store per iPhone, iPad e Mac. Pensata per insegnanti, genitori e personale di sostegno.',
  },

  ru: {
    langSwitcherAria: 'Язык страницы',
    navAria: 'Навигация AInclusive',
    navApp: 'Приложение',
    navPrivacy: 'Конфиденциальность',
    navAccessibility: 'Доступность',
    navSupport: 'Поддержка',
    navContact: 'Контакты',
    brandHomeAria: 'Главная страница AInclusive',
    footerAria: 'Ссылки внизу страницы',
    footerCredit:
      '© 2026 AZUMBO. AInclusive помогает педагогам адаптировать учебные материалы под каждого ученика.',
    badgeAria: 'Скачать AInclusive в App Store',
    badgeAlt: 'Download on the App Store',
    kicker: 'Для учителей, родителей и специалистов сопровождения',
    title: 'AInclusive',
    subtitleLead:
      'Превратите любой рабочий лист в доступный урок менее чем за час — без специального обучения и без ручной переделки материалов.',
    subtitle:
      'Сфотографируйте или вставьте материалы урока — и AInclusive адаптирует их для учеников с особыми образовательными потребностями и для тех, кому мешает языковой барьер. Работает на iPhone, iPad и Mac. Интерфейс на английском, иврите и итальянском.',
    primaryCta: 'Скачать в App Store',
    readSupport: 'Поддержка и FAQ',
    heroPreviewAria: 'Превью приложения AInclusive',
    heroAlt: 'Главный экран AInclusive: создание учебных материалов',
    shotsKicker: 'Реальные экраны',
    shotsTitle: 'Как работает приложение',
    shotsLead:
      'Скриншоты из актуальной сборки: главный экран приложения и иконка AInclusive на домашнем экране iPhone.',
    shots: [
      {
        src: '/ainclusive/app-preview.png',
        name: 'Home',
        note: 'Создавайте адаптированные материалы одним касанием.',
        alt: 'Главный экран AInclusive с кнопкой создания учебных материалов',
      },
      {
        src: '/ainclusive/home-screen.png',
        name: 'На домашнем экране',
        note: 'Так выглядит иконка AInclusive на iPhone.',
        alt: 'Домашний экран iPhone с иконкой приложения AInclusive',
      },
    ],
    featuresKicker: 'Камера · языки · аккуратная аналитика',
    featuresTitle: 'Для настоящей работы в классе, а не для демо.',
    featuresLead:
      'Раньше адаптация материалов для ученика с особыми потребностями занимала часы ручной работы и требовала узкой экспертизы. AInclusive делает процесс проще: сфотографируйте лист, укажите контекст ученика — и получите материалы, которые можно сразу проверить и отправить.',
    features: [
      {
        icon: '📷',
        title: 'Съёмка рабочих листов',
        text: 'Снимайте рабочие листы камерой или выбирайте фото из галереи — с понятными формулировками разрешений для проверки App Store.',
      },
      {
        icon: '🌍',
        title: 'EN · HE · IT',
        text: 'Интерфейс и язык урока: английский, иврит (справа налево) и итальянский — удобно для локальных пилотов и отчётности по грантам.',
      },
      {
        icon: '♿',
        title: 'Инклюзивный дизайн',
        text: 'Крупные кнопки, поддержка крупных шрифтов и спокойный интерфейс по рекомендациям Apple — чтобы педагогу было удобно работать даже в спешке.',
      },
      {
        icon: '📊',
        title: 'Аналитика без лишних данных',
        text: 'Firebase Analytics и Crashlytics помогают понимать продукт, но не отправляют email, имена, темы уроков или фото в события аналитики.',
      },
    ],
    impactKicker: 'Социальный эффект',
    impactTitle: 'Почему это работает для особенного ребёнка в вашем классе',
    impactLead:
      'AInclusive уже проверили десять учителей и родителей детей с особыми потребностями. Израильское общество синдрома Дауна (Yated) направило письмо о намерениях по коммерческой лицензии после завершения MVP. Мы делаем акцент на реальной пользе в классе и бережном отношении к данным — а не на красивой презентации.',
    impactPoints: [
      {
        title: 'Ученики, которым нужна адаптация',
        text: 'Помогаем учителям, родителям и ассистентам, которые часами переделывают материалы для детей с особыми потребностями — и для ребят, которым мешает языковой барьер.',
      },
      {
        title: 'Многоязычная Европа и Израиль',
        text: 'Итальянский и иврит в интерфейсе открывают дорогу к региональным пилотам.',
      },
      {
        title: 'Прозрачность с первого дня',
        text: 'Открытая политика конфиденциальности и страница поддержки, а также App Privacy labels — готовы к проверке в категории Education.',
      },
    ],
    testimonialKicker: 'Отзыв из раннего пилота',
    testimonialQuote:
      'Приложение AInclusive — это настоящее открытие. Интуитивно понятный интерфейс и возможность адаптировать задания под каждого ребёнка с особыми потребностями впечатляют. Уверена, что оно станет незаменимым помощником для учителей.',
    testimonialAttribution: 'Учитель коррекционного образования, участница раннего тестирования',
    testimonialAria: 'Отзыв учителя из пилота',
    faqKicker: 'FAQ',
    faqTitle: 'Коротко по делу.',
    faqLead: 'Ответы для App Store, школ и тех, кто оценивает гранты.',
    faqs: [
      {
        question: 'Что такое AInclusive?',
        answer:
          'AInclusive — образовательное приложение для учителей, родителей и специалистов сопровождения. Оно помогает превращать рабочие листы в более доступные учебные материалы на iPhone, iPad и Mac.',
      },
      {
        question: 'Зачем приложению нужна камера?',
        answer:
          'Чтобы сфотографировать рабочий лист или учебный материал и адаптировать его. Доступ к галерее нужен, если вы выбираете уже готовое фото, а не снимаете новое.',
      },
      {
        question: 'Какие языки поддерживаются?',
        answer:
          'В интерфейсе — английский, иврит (справа налево) и итальянский. Язык урока можно выбрать отдельно для каждой задачи.',
      },
      {
        question: 'Какие данные вы собираете в аналитике?',
        answer:
          'Только обезличенные продуктовые события через Firebase — например, шаги сценария и сведения о сбоях. Мы не отправляем в Analytics email, имя ученика, текст темы, текст урока или фото.',
      },
    ],
    faqCtaPrefix: 'Нужна помощь школе или классу?',
    faqCtaLink: 'Перейти в поддержку AInclusive',
    downloadBadge: 'Уже в App Store',
    downloadTitle: 'Скачайте AInclusive сейчас.',
    downloadBody:
      'AInclusive бесплатно в App Store для iPhone, iPad и Mac. Для учителей, родителей и специалистов сопровождения.',
  },
};

export const AINCLUSIVE_SUPPORT: Record<AInclusiveLocale, SupportCopy> = {
  en: {
    kicker: 'Help · App Store requirement',
    title: 'Support',
    subtitle: 'Questions about AInclusive, camera access, languages, or classroom use.',
    contactSupport: 'Email support',
    privacyPolicy: 'Privacy Policy',
    appHome: 'AInclusive home',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        question: 'How long does lesson generation take?',
        answer:
          'Usually a few minutes depending on server load. With notification permission on, you can leave the app and return when materials are ready.',
      },
      {
        question: 'Why ask for camera or photos?',
        answer:
          'Only to capture worksheets and learning materials so they can be adapted into accessible lessons. You can decline and paste text where supported.',
      },
      {
        question: 'Which devices work?',
        answer: 'iPhone and iPad (iOS 17+), with a Mac path in the same product family.',
      },
      {
        question: 'Where can I download AInclusive?',
        answer:
          'AInclusive is live on the App Store: https://apps.apple.com/us/app/ainclusive/id6798403080. For schools and classroom rollout questions, email azumbogames@gmail.com.',
      },
      {
        question: 'How do I request data deletion?',
        answer: 'Email azumbogames@gmail.com with the address used in the app. We will process deletion requests according to our Privacy Policy.',
      },
    ],
  },
  he: {
    kicker: 'עזרה · דרישת App Store',
    title: 'תמיכה',
    subtitle: 'שאלות על AInclusive, מצלמה, שפות או שימוש בכיתה.',
    contactSupport: 'אימייל לתמיכה',
    privacyPolicy: 'מדיניות פרטיות',
    appHome: 'דף הבית',
    faqTitle: 'שאלות נפוצות',
    faqs: [
      {
        question: 'כמה זמן לוקח לייצר שיעור?',
        answer:
          'בדרך כלל כמה דקות, בהתאם לעומס. עם הרשאת התראות אפשר לעזוב את האפליקציה ולחזור כשהחומרים מוכנים.',
      },
      {
        question: 'למה מתבקשת מצלמה או תמונות?',
        answer:
          'רק כדי לצלם דפי עבודה וחומרי למידה להתאמה לשיעורים נגישים. אפשר לסרב ולהדביק טקסט כשהאפשרות זמינה.',
      },
      {
        question: 'באילו מכשירים זה עובד?',
        answer: 'אייפון ואייפד (iOS 17 ומעלה), עם נתיב מק באותה משפחת מוצר.',
      },
      {
        question: 'איפה מורידים את AInclusive?',
        answer:
          'AInclusive זמינה ב-App Store: https://apps.apple.com/us/app/ainclusive/id6798403080. לשאלות על הטמעה בבתי ספר — azumbogames@gmail.com.',
      },
      {
        question: 'איך מבקשים מחיקת נתונים?',
        answer: 'שלחו אימייל ל-azumbogames@gmail.com עם הכתובת שבה השתמשתם באפליקציה, לפי מדיניות הפרטיות.',
      },
    ],
  },
  it: {
    kicker: 'Aiuto · requisito App Store',
    title: 'Supporto',
    subtitle: 'Domande su AInclusive, fotocamera, lingue e uso in classe.',
    contactSupport: 'Scrivi al supporto',
    privacyPolicy: 'Informativa privacy',
    appHome: 'Vai alla home di AInclusive',
    faqTitle: 'Domande frequenti',
    faqs: [
      {
        question: 'Quanto tempo ci vuole per generare una lezione?',
        answer:
          'Di solito pochi minuti, in base al carico del server. Con le notifiche attive puoi chiudere l’app e tornare quando i materiali sono pronti.',
      },
      {
        question: 'Perché chiedete l’accesso a fotocamera o foto?',
        answer:
          'Solo per fotografare o scegliere una scheda da adattare in una lezione più accessibile. Puoi rifiutare e, dove previsto, incollare il testo.',
      },
      {
        question: 'Su quali dispositivi funziona?',
        answer: 'Su iPhone e iPad (iOS 17 o successivo) e anche su Mac.',
      },
      {
        question: 'Dove scarico AInclusive?',
        answer:
          'AInclusive è disponibile sull’App Store: https://apps.apple.com/us/app/ainclusive/id6798403080. Per domande su scuole e adozione in classe: azumbogames@gmail.com.',
      },
      {
        question: 'Come richiedere la cancellazione dei dati?',
        answer:
          'Scrivi a azumbogames@gmail.com dall’indirizzo usato nell’app. Tratteremo la richiesta secondo l’Informativa privacy.',
      },
    ],
  },
  ru: {
    kicker: 'Помощь · требование App Store',
    title: 'Поддержка',
    subtitle: 'Вопросы про AInclusive, камеру, языки и использование в классе.',
    contactSupport: 'Написать в поддержку',
    privacyPolicy: 'Политика конфиденциальности',
    appHome: 'На главную AInclusive',
    faqTitle: 'Частые вопросы',
    faqs: [
      {
        question: 'Сколько занимает генерация урока?',
        answer:
          'Обычно несколько минут — зависит от нагрузки. Если разрешите уведомления, можно закрыть приложение и вернуться, когда материалы будут готовы.',
      },
      {
        question: 'Зачем нужен доступ к камере или фото?',
        answer:
          'Только чтобы снять или выбрать рабочий лист и адаптировать его в более доступный урок. Можно отказаться и вставить текст, если такой вариант доступен.',
      },
      {
        question: 'На каких устройствах работает?',
        answer: 'На iPhone и iPad (iOS 17 и новее), а также на Mac.',
      },
      {
        question: 'Где скачать AInclusive?',
        answer:
          'AInclusive уже в App Store: https://apps.apple.com/us/app/ainclusive/id6798403080. Вопросы по школьному внедрению — на azumbogames@gmail.com.',
      },
      {
        question: 'Как запросить удаление данных?',
        answer:
          'Напишите на azumbogames@gmail.com с того адреса, который использовали в приложении. Мы обработаем запрос по Политике конфиденциальности.',
      },
    ],
  },
};

const privacyTocEn = [
  { id: 'intro', label: 'About' },
  { id: 'collected', label: 'Data we collect' },
  { id: 'use', label: 'How we use data' },
  { id: 'third-parties', label: 'Third parties' },
  { id: 'permissions', label: 'Permissions' },
  { id: 'children', label: 'Children' },
  { id: 'gdpr', label: 'Your rights (GDPR)' },
  { id: 'retention', label: 'Retention' },
  { id: 'contact', label: 'Contact & deletion' },
];

export const AINCLUSIVE_PRIVACY: Record<AInclusiveLocale, PrivacyCopy> = {
  en: {
    kicker: 'Legal · App Store & Google Play',
    title: 'Privacy Policy',
    subtitle: 'For AInclusive by AZUMBO. Last updated: 25 September 2026.',
    tocAria: 'Privacy policy sections',
    toc: privacyTocEn,
    sections: [
      {
        id: 'intro',
        title: 'About this policy',
        paragraphs: [
          'This Privacy Policy explains how AZUMBO (“we”, “our”) handles information in the AInclusive mobile apps and related backend services used to generate adapted learning materials for learners with special educational needs (including BES contexts).',
          'Platforms covered: iOS via the Apple App Store (iPhone, iPad, and Mac where the App Store listing applies) and Android via Google Play. There is one shared privacy policy for both store builds.',
          'Product page: https://azumbo.vercel.app/ainclusive · Support: https://azumbo.vercel.app/ainclusive/support',
          'This page is public over HTTPS and does not require sign-in. It is intended to align with Apple App Privacy labels and Google Play Data Safety disclosures for the categories listed below.',
        ],
      },
      {
        id: 'collected',
        title: 'Data we collect',
        paragraphs: [
          'Depending on how you use the app, we may process the following categories of information.',
        ],
        bullets: [
          'Contact information: email address (to associate lesson jobs and deliver results)',
          'Identifiers you provide: student first name or nickname used as a workflow label',
          'User content: lesson topic, pasted text, photos or files of worksheets / learning materials, language and activity settings',
          'Device / installation identifiers used by Firebase for analytics, crash diagnostics, and push delivery (for example app instance identifiers)',
          'Diagnostic and product-interaction data: crash logs and privacy-safe product events (for example app open, lesson funnel steps, wait-time buckets, download/editor opens, notification outcomes, UI language)',
        ],
      },
      {
        id: 'use',
        title: 'How we use data',
        paragraphs: [
          'We use the information above to operate AInclusive and improve reliability—not to sell personal data or build advertising profiles of children.',
        ],
        bullets: [
          'Generate adapted lesson text and images from the materials you submit',
          'Email completed materials (for example PDF lessons) to the address you provide',
          'Send optional push notifications when a lesson is ready',
          'Measure product usage and diagnose crashes to keep the service stable',
          'Respond to support and data-rights requests',
        ],
      },
      {
        id: 'third-parties',
        title: 'Third-party processors and international transfers',
        paragraphs: [
          'To deliver the service we use specialized processors. Lesson content you submit (text and images) may be sent to these processors solely to provide the features you request. Analytics events do not include email, student name, topic text, lesson body, photos, or raw session tokens.',
        ],
        bullets: [
          'OpenAI — text and image generation for adapted lessons',
          'Google Firebase — Analytics, Crashlytics, and Cloud Messaging (push)',
          'SendGrid — transactional email delivery of lesson results',
          'Google Cloud — hosting and operation of our backend APIs',
          'Data may be processed in the European Economic Area and/or outside the EEA (including the United States). Where GDPR requires it, we rely on appropriate safeguards such as Standard Contractual Clauses and the processors’ published transfer mechanisms.',
          'Firebase processing also follows Google’s terms: https://firebase.google.com/support/privacy',
        ],
      },
      {
        id: 'permissions',
        title: 'App permissions',
        paragraphs: [
          'The apps may request the following system permissions. You can change or revoke them in iOS or Android Settings. Declining a permission may limit related features but does not block all use of the app where alternatives exist (for example pasting text instead of using the camera).',
        ],
        bullets: [
          'Camera / photo library — capture or select worksheets for adaptation',
          'Notifications — optional alerts when a lesson is ready (including Firebase Cloud Messaging)',
          'Files / storage access — save or share generated PDF lesson materials on your device',
        ],
      },
      {
        id: 'children',
        title: 'Children and education contexts',
        paragraphs: [
          'AInclusive is intended for adults—teachers, parents, and learning-support staff—not for direct use by children as account holders.',
          'If materials relate to learners (including children or people with special educational needs), use minimal identifiers, follow school and parental rules, and do not upload content you are not allowed to share.',
          'We do not knowingly use the app to create advertising profiles of children, and we do not sell personal information.',
        ],
      },
      {
        id: 'gdpr',
        title: 'Legal bases and your rights (GDPR / EEA / UK where applicable)',
        paragraphs: [
          'Where GDPR (or UK GDPR) applies, we may rely on: performance of a contract / service delivery for lesson inputs and result delivery; legitimate interests for privacy-safe analytics and crash diagnostics; and consent where required for optional notifications or similar permissions.',
          'You may have the right to access, rectify, erase, restrict, object to, or port your personal data, and to withdraw consent where processing is based on consent, without affecting the lawfulness of processing before withdrawal.',
          'You also have the right to lodge a complaint with a supervisory authority in your country of residence or work (for example the Garante per la protezione dei dati personali in Italy, or the ICO in the UK).',
        ],
      },
      {
        id: 'retention',
        title: 'Retention',
        paragraphs: [
          'Lesson job data (including submitted content and generated outputs needed to deliver results) is kept only as long as needed to provide the service and handle related support, then deleted or anonymised according to our operational schedule.',
          'Email delivery logs follow SendGrid’s retention practices for transactional mail. Analytics and crash logs follow Firebase project retention settings. Device-side copies of PDFs or photos remain under your control until you delete them.',
        ],
      },
      {
        id: 'contact',
        title: 'Contact and data deletion',
        paragraphs: [
          'Privacy and support email: azumbogames@gmail.com',
          'To request access, correction, or deletion of your data, email azumbogames@gmail.com from the address used in the app (subject line suggestion: “AInclusive data deletion request”), or start from the support page: https://azumbo.vercel.app/ainclusive/support',
          'We will verify the request and process it in line with applicable law. Product home: https://azumbo.vercel.app/ainclusive',
        ],
      },
    ],
  },
  he: {
    kicker: 'משפטי · App Store ו-Google Play',
    title: 'מדיניות פרטיות',
    subtitle: 'עבור AInclusive מאת AZUMBO. עודכן לאחרונה: 25 בספטמבר 2026.',
    tocAria: 'סעיפי מדיניות הפרטיות',
    toc: [
      { id: 'intro', label: 'אודות' },
      { id: 'collected', label: 'נתונים שנאספים' },
      { id: 'use', label: 'שימוש בנתונים' },
      { id: 'third-parties', label: 'צדדים שלישיים' },
      { id: 'permissions', label: 'הרשאות' },
      { id: 'children', label: 'ילדים' },
      { id: 'gdpr', label: 'זכויות GDPR' },
      { id: 'retention', label: 'שמירה' },
      { id: 'contact', label: 'יצירת קשר ומחיקה' },
    ],
    sections: [
      {
        id: 'intro',
        title: 'על מדיניות זו',
        paragraphs: [
          'מדיניות זו מסבירה כיצד AZUMBO מטפלת במידע באפליקציות AInclusive ובשירותי ה-backend ליצירת חומרי למידה מותאמים ללומדים עם צרכים חינוכיים מיוחדים (כולל הקשרי BES).',
          'פלטפורמות: iOS דרך Apple App Store (אייפון, אייפד ומק לפי הרישום בחנות) ו-Android דרך Google Play. מדיניות אחת משותפת לשתי הגרסאות.',
          'דף מוצר: https://azumbo.vercel.app/ainclusive · תמיכה: https://azumbo.vercel.app/ainclusive/support',
          'העמוד ציבורי ב-HTTPS ואינו דורש התחברות. הוא מיועד להתאים להצהרות App Privacy של Apple ול-Data Safety של Google Play.',
        ],
      },
      {
        id: 'collected',
        title: 'נתונים שאנו אוספים',
        paragraphs: ['בהתאם לשימוש באפליקציה, ייתכן שנעבד את סוגי המידע הבאים.'],
        bullets: [
          'פרטי קשר: כתובת אימייל (לשיוך משימות ולמשלוח תוצאות)',
          'מזהים שאתם מספקים: שם פרטי / כינוי של תלמיד כתווית תהליך',
          'תוכן משתמש: נושא השיעור, טקסט שהודבק, תמונות או קבצים של דפי עבודה, שפה ואפשרויות פעילות',
          'מזהי מכשיר / התקנה המשמשים את Firebase לאנליטיקה, אבחון קריסות ומשלוח התראות',
          'נתוני אבחון ואינטראקציה עם המוצר: לוגים של קריסות ואירועי מוצר שומרי פרטיות',
        ],
      },
      {
        id: 'use',
        title: 'כיצד אנו משתמשים בנתונים',
        paragraphs: [
          'אנו משתמשים במידע להפעלת AInclusive ולשיפור האמינות — לא למכירת מידע אישי ולא ליצירת פרופילי פרסום של ילדים.',
        ],
        bullets: [
          'יצירת טקסט ותמונות מותאמים מחומרים שאתם שולחים',
          'שליחת חומרים מוכנים (למשל PDF) לאימייל שסיפקתם',
          'התראות דחיפה אופציונליות כשהשיעור מוכן',
          'מדידת שימוש וזיהוי קריסות ליציבות השירות',
          'מענה לבקשות תמיכה וזכויות מידע',
        ],
      },
      {
        id: 'third-parties',
        title: 'מעבדים צד שלישי והעברות בינלאומיות',
        paragraphs: [
          'כדי לספק את השירות אנו משתמשים במעבדים מתמחים. תוכן השיעור שאתם שולחים עשוי להיות מועבר אליהם רק לצורך התכונות שביקשתם. אירועי אנליטיקה אינם כוללים אימייל, שם תלמיד, טקסט נושא, גוף שיעור, תמונות או אסימוני סשן גולמיים.',
        ],
        bullets: [
          'OpenAI — יצירת טקסט ותמונות לשיעורים מותאמים',
          'Google Firebase — Analytics, Crashlytics ו-Cloud Messaging (התראות)',
          'SendGrid — משלוח אימייל טרנזקציוני של תוצאות השיעור',
          'Google Cloud — אחסון והפעלת ממשקי ה-API שלנו',
          'ייתכן שהנתונים יעובדו ב-EEA ו/או מחוצה לה (כולל ארצות הברית). כאשר ה-GDPR דורש זאת, אנו מסתמכים על מנגנוני הגנה מתאימים כגון Standard Contractual Clauses.',
          'עיבוד Firebase כפוף גם לתנאי Google: https://firebase.google.com/support/privacy',
        ],
      },
      {
        id: 'permissions',
        title: 'הרשאות האפליקציה',
        paragraphs: [
          'האפליקציות עשויות לבקש את ההרשאות הבאות. ניתן לשנות או לבטל בהגדרות iOS או Android. סירוב להרשאה עלול להגביל תכונות קשורות, אך לא בהכרח חוסם שימוש חלופי (למשל הדבקת טקסט במקום מצלמה).',
        ],
        bullets: [
          'מצלמה / ספריית תמונות — צילום או בחירת דפי עבודה להתאמה',
          'התראות — התראות אופציונליות כשהשיעור מוכן (כולל Firebase Cloud Messaging)',
          'גישה לקבצים / אחסון — שמירה או שיתוף של קבצי PDF שנוצרו במכשיר',
        ],
      },
      {
        id: 'children',
        title: 'ילדים והקשר חינוכי',
        paragraphs: [
          'AInclusive מיועדת למבוגרים — מורים, הורים וצוות תמיכה בלמידה — ולא לשימוש ישיר של ילדים כבעלי חשבון.',
          'אם החומרים נוגעים ללומדים (כולל ילדים או צרכים מיוחדים), העדיפו מזהים מינימליים ופעלו לפי כללי בית הספר וההורים.',
          'איננו משתמשים באפליקציה ליצירת פרופילי פרסום של ילדים ואיננו מוכרים מידע אישי.',
        ],
      },
      {
        id: 'gdpr',
        title: 'בסיסים משפטיים וזכויות (GDPR / EEA / UK)',
        paragraphs: [
          'כאשר חל GDPR, ייתכן שנסתמך על ביצוע חוזה/שירות, אינטרס לגיטימי לאנליטיקה ואבחון קריסות, והסכמה להתראות אופציונליות.',
          'ייתכן שיש לכם זכויות עיון, תיקון, מחיקה, הגבלה, התנגדות, ניידות נתונים וביטול הסכמה.',
          'יש גם זכות להגיש תלונה לרשות פיקוח במדינת מגוריכם או עבודתכם.',
        ],
      },
      {
        id: 'retention',
        title: 'שמירה',
        paragraphs: [
          'נתוני משימות השיעור נשמרים ככל שנדרש למתן השירות ולטיפול בבקשות תמיכה, ואז נמחקים או מואנונימים לפי לוח הזמנים התפעולי שלנו.',
          'לוגי אימייל לפי SendGrid; לוגי אנליטיקה וקריסות לפי הגדרות Firebase. עותקים במכשיר נשארים בשליטתכם עד למחיקה.',
        ],
      },
      {
        id: 'contact',
        title: 'יצירת קשר ומחיקת נתונים',
        paragraphs: [
          'אימייל לפרטיות ותמיכה: azumbogames@gmail.com',
          'לבקשת עיון, תיקון או מחיקה — שלחו אימייל אל azumbogames@gmail.com מהכתובת שבה השתמשתם באפליקציה, או התחילו מדף התמיכה: https://azumbo.vercel.app/ainclusive/support',
          'דף המוצר: https://azumbo.vercel.app/ainclusive',
        ],
      },
    ],
  },
  it: {
    kicker: 'Legale · App Store e Google Play',
    title: 'Informativa sulla privacy',
    subtitle: 'Per AInclusive di AZUMBO. Ultimo aggiornamento: 25 settembre 2026.',
    tocAria: 'Sezioni dell’informativa',
    toc: [
      { id: 'intro', label: 'Informazioni' },
      { id: 'collected', label: 'Dati raccolti' },
      { id: 'use', label: 'Uso dei dati' },
      { id: 'third-parties', label: 'Terze parti' },
      { id: 'permissions', label: 'Autorizzazioni' },
      { id: 'children', label: 'Minori' },
      { id: 'gdpr', label: 'Diritti GDPR' },
      { id: 'retention', label: 'Conservazione' },
      { id: 'contact', label: 'Contatti e cancellazione' },
    ],
    sections: [
      {
        id: 'intro',
        title: 'Informazioni su questa policy',
        paragraphs: [
          'Questa Informativa spiega come AZUMBO (“noi”) tratta le informazioni nelle app mobili AInclusive e nei servizi backend usati per generare materiali didattici adattati per alunni con bisogni educativi speciali (incluso il contesto BES).',
          'Piattaforme: iOS tramite Apple App Store (iPhone, iPad e Mac dove previsto dalla scheda store) e Android tramite Google Play. Un’unica informativa per entrambe le versioni.',
          'Pagina prodotto: https://azumbo.vercel.app/ainclusive · Supporto: https://azumbo.vercel.app/ainclusive/support',
          'Questa pagina è pubblica via HTTPS e non richiede autenticazione. È pensata per allinearsi alle App Privacy labels di Apple e alle dichiarazioni Data Safety di Google Play.',
        ],
      },
      {
        id: 'collected',
        title: 'Dati che raccogliamo',
        paragraphs: [
          'A seconda di come usi l’app, possiamo trattare le seguenti categorie di informazioni.',
        ],
        bullets: [
          'Dati di contatto: indirizzo email (per associare i lavori e consegnare i risultati)',
          'Identificatori che fornisci: nome o soprannome dello studente come etichetta di flusso',
          'Contenuti dell’utente: argomento della lezione, testo incollato, foto o file di schede / materiali, lingua e opzioni di attività',
          'Identificatori di dispositivo / installazione usati da Firebase per analytics, diagnostica crash e push',
          'Dati diagnostici e di interazione col prodotto: log di crash ed eventi di prodotto privacy-safe',
        ],
      },
      {
        id: 'use',
        title: 'Come usiamo i dati',
        paragraphs: [
          'Usiamo queste informazioni per erogare AInclusive e migliorarne l’affidabilità — non per vendere dati personali né per profili pubblicitari di minori.',
        ],
        bullets: [
          'Generare testo e immagini adattati dai materiali che invii',
          'Inviare i materiali completati (ad esempio PDF) all’email indicata',
          'Inviare notifiche push opzionali quando la lezione è pronta',
          'Misurare l’uso del prodotto e diagnosticare i crash',
          'Rispondere a richieste di supporto e di diritti sui dati',
        ],
      },
      {
        id: 'third-parties',
        title: 'Responsabili del trattamento e trasferimenti internazionali',
        paragraphs: [
          'Per erogare il servizio usiamo fornitori specializzati. I contenuti della lezione che invii (testo e immagini) possono essere trasmessi a questi fornitori solo per le funzioni richieste. Gli eventi analytics non includono email, nome studente, testo del topic, corpo della lezione, foto o token di sessione grezzi.',
        ],
        bullets: [
          'OpenAI — generazione di testo e immagini per lezioni adattate',
          'Google Firebase — Analytics, Crashlytics e Cloud Messaging (push)',
          'SendGrid — invio email transazionale dei risultati',
          'Google Cloud — hosting e gestione delle nostre API backend',
          'I dati possono essere trattati nello Spazio economico europeo e/o fuori dal SEE (inclusi gli Stati Uniti). Dove il GDPR lo richiede, ci avvaliamo di garanzie appropriate quali le Clausole contrattuali standard.',
          'Il trattamento Firebase segue anche i termini Google: https://firebase.google.com/support/privacy',
        ],
      },
      {
        id: 'permissions',
        title: 'Autorizzazioni dell’app',
        paragraphs: [
          'Le app possono richiedere le seguenti autorizzazioni di sistema. Puoi modificarle o revocarle nelle Impostazioni di iOS o Android. Il rifiuto può limitare funzioni correlate, ma non blocca necessariamente alternative (ad esempio incollare testo al posto della fotocamera).',
        ],
        bullets: [
          'Fotocamera / libreria foto — acquisire o selezionare schede da adattare',
          'Notifiche — avvisi opzionali quando la lezione è pronta (incluso Firebase Cloud Messaging)',
          'Accesso a file / archiviazione — salvare o condividere i PDF generati sul dispositivo',
        ],
      },
      {
        id: 'children',
        title: 'Minori e contesti educativi',
        paragraphs: [
          'AInclusive è destinata ad adulti — insegnanti, genitori e personale di sostegno — non all’uso diretto da parte di minori come titolari di account.',
          'Se i materiali riguardano apprendenti (inclusi minori o bisogni educativi speciali), usa identificatori minimi e segui le regole di scuola e genitori.',
          'Non usiamo l’app per creare profili pubblicitari di minori e non vendiamo dati personali.',
        ],
      },
      {
        id: 'gdpr',
        title: 'Basi giuridiche e diritti (GDPR / SEE / UK)',
        paragraphs: [
          'Dove applica il GDPR, possiamo basarci su: esecuzione del contratto / erogazione del servizio; interesse legittimo per analytics e diagnostica crash privacy-safe; consenso dove richiesto per notifiche opzionali.',
          'Puoi avere diritti di accesso, rettifica, cancellazione, limitazione, opposizione, portabilità e di revoca del consenso.',
          'Hai anche il diritto di proporre reclamo a un’autorità di controllo (ad esempio il Garante per la protezione dei dati personali in Italia, o l’ICO nel Regno Unito).',
        ],
      },
      {
        id: 'retention',
        title: 'Conservazione',
        paragraphs: [
          'I dati dei lavori di lezione sono conservati solo per il tempo necessario a erogare il servizio e gestire il supporto correlato, poi cancellati o anonimizzati secondo il nostro piano operativo.',
          'I log di email seguono le pratiche di conservazione di SendGrid. Analytics e crash seguono le impostazioni Firebase. Copie di PDF o foto sul dispositivo restano sotto il tuo controllo finché non le elimini.',
        ],
      },
      {
        id: 'contact',
        title: 'Contatti e cancellazione dei dati',
        paragraphs: [
          'Email privacy e supporto: azumbogames@gmail.com',
          'Per richiedere accesso, rettifica o cancellazione, scrivi a azumbogames@gmail.com dall’indirizzo usato nell’app (oggetto consigliato: “AInclusive data deletion request”), oppure parti dalla pagina di supporto: https://azumbo.vercel.app/ainclusive/support',
          'Home prodotto: https://azumbo.vercel.app/ainclusive',
        ],
      },
    ],
  },
  ru: {
    kicker: 'Юридическое · App Store и Google Play',
    title: 'Политика конфиденциальности',
    subtitle: 'Для AInclusive от AZUMBO. Обновлено: 25 сентября 2026.',
    tocAria: 'Разделы политики конфиденциальности',
    toc: [
      { id: 'intro', label: 'О политике' },
      { id: 'collected', label: 'Какие данные собираем' },
      { id: 'use', label: 'Как используем' },
      { id: 'third-parties', label: 'Третьи стороны' },
      { id: 'permissions', label: 'Разрешения' },
      { id: 'children', label: 'Дети' },
      { id: 'gdpr', label: 'Права GDPR' },
      { id: 'retention', label: 'Хранение' },
      { id: 'contact', label: 'Контакты и удаление' },
    ],
    sections: [
      {
        id: 'intro',
        title: 'Об этой политике',
        paragraphs: [
          'Эта Политика конфиденциальности объясняет, как AZUMBO («мы») обрабатывает информацию в мобильных приложениях AInclusive и связанных backend-сервисах, используемых для генерации адаптированных учебных материалов для обучающихся с особыми образовательными потребностями (включая контекст BES).',
          'Платформы: iOS через Apple App Store (iPhone, iPad и Mac — если это указано в карточке приложения) и Android через Google Play. Одна общая политика для обеих сборок.',
          'Страница продукта: https://azumbo.vercel.app/ainclusive · Поддержка: https://azumbo.vercel.app/ainclusive/support',
          'Страница публична по HTTPS и не требует авторизации. Она рассчитана на соответствие App Privacy labels Apple и декларациям Data Safety Google Play по перечисленным ниже категориям.',
        ],
      },
      {
        id: 'collected',
        title: 'Какие данные мы собираем',
        paragraphs: [
          'В зависимости от использования приложения мы можем обрабатывать следующие категории сведений.',
        ],
        bullets: [
          'Контактные данные: адрес электронной почты (для связи заданий и доставки результатов)',
          'Идентификаторы, которые вы указываете: имя или прозвище ученика как метка в процессе',
          'Пользовательский контент: тема урока, вставленный текст, фото или файлы рабочих листов / материалов, языковые и иные настройки занятия',
          'Идентификаторы устройства / установки, используемые Firebase для аналитики, диагностики сбоев и доставки push',
          'Диагностика и взаимодействие с продуктом: логи сбоев и privacy-safe продуктовые события',
        ],
      },
      {
        id: 'use',
        title: 'Как мы используем данные',
        paragraphs: [
          'Мы используем эти сведения для работы AInclusive и повышения надёжности — не для продажи персональных данных и не для рекламных профилей детей.',
        ],
        bullets: [
          'Генерация адаптированного текста и изображений на основе отправленных материалов',
          'Отправка готовых материалов (например PDF) на указанный email',
          'Опциональные push-уведомления, когда урок готов',
          'Измерение использования продукта и диагностика сбоев',
          'Ответы на обращения в поддержку и запросы по правам субъекта данных',
        ],
      },
      {
        id: 'third-parties',
        title: 'Сторонние обработчики и трансграничная передача',
        paragraphs: [
          'Для оказания услуги мы привлекаем специализированных обработчиков. Содержимое урока, которое вы отправляете (текст и изображения), может передаваться им только для запрошенных функций. События Analytics не содержат email, имя ученика, текст темы, тело урока, фото или сырые session token.',
        ],
        bullets: [
          'OpenAI — генерация текста и изображений для адаптированных уроков',
          'Google Firebase — Analytics, Crashlytics и Cloud Messaging (push)',
          'SendGrid — транзакционная доставка email с результатами урока',
          'Google Cloud — хостинг и работа наших backend API',
          'Данные могут обрабатываться в ЕЭЗ и/или за его пределами (включая США). Там, где это требует GDPR, мы опираемся на надлежащие гарантии, например Standard Contractual Clauses.',
          'Обработка Firebase также подчиняется условиям Google: https://firebase.google.com/support/privacy',
        ],
      },
      {
        id: 'permissions',
        title: 'Разрешения приложения',
        paragraphs: [
          'Приложения могут запрашивать следующие системные разрешения. Их можно изменить или отозвать в настройках iOS или Android. Отказ может ограничить связанные функции, но не обязательно блокирует альтернативы (например вставку текста вместо камеры).',
        ],
        bullets: [
          'Камера / галерея — съёмка или выбор рабочих листов для адаптации',
          'Уведомления — опциональные оповещения о готовности урока (включая Firebase Cloud Messaging)',
          'Доступ к файлам / хранилищу — сохранение или обмен сгенерированными PDF на устройстве',
        ],
      },
      {
        id: 'children',
        title: 'Дети и образовательный контекст',
        paragraphs: [
          'AInclusive предназначено для взрослых — учителей, родителей и специалистов сопровождения — а не для прямого использования детьми как владельцами аккаунта.',
          'Если материалы относятся к ученикам (включая детей или людей с особыми образовательными потребностями), используйте минимальные идентификаторы и соблюдайте правила школы и родителей.',
          'Мы сознательно не используем приложение для создания рекламных профилей детей и не продаём персональные данные.',
        ],
      },
      {
        id: 'gdpr',
        title: 'Правовые основания и ваши права (GDPR / EEA / UK)',
        paragraphs: [
          'Там, где применяется GDPR, мы можем опираться на: исполнение договора / оказание услуги; законный интерес для privacy-safe аналитики и диагностики сбоев; согласие — где оно требуется для опциональных уведомлений.',
          'У вас могут быть права на доступ, исправление, удаление, ограничение, возражение, переносимость данных и отзыв согласия.',
          'Также есть право подать жалобу в надзорный орган страны проживания или работы (например Garante в Италии или ICO в Великобритании).',
        ],
      },
      {
        id: 'retention',
        title: 'Хранение',
        paragraphs: [
          'Данные заданий урока хранятся только столько, сколько нужно для оказания услуги и связанной поддержки, затем удаляются или обезличиваются по нашему операционному графику.',
          'Логи email следуют практике retention SendGrid. Аналитика и сбои — настройкам проекта Firebase. Копии PDF или фото на устройстве остаются под вашим контролем, пока вы их не удалите.',
        ],
      },
      {
        id: 'contact',
        title: 'Контакты и удаление данных',
        paragraphs: [
          'Email для конфиденциальности и поддержки: azumbogames@gmail.com',
          'Чтобы запросить доступ, исправление или удаление данных, напишите на azumbogames@gmail.com с адреса, использованного в приложении (тема письма: «AInclusive data deletion request»), либо начните со страницы поддержки: https://azumbo.vercel.app/ainclusive/support',
          'Главная продукта: https://azumbo.vercel.app/ainclusive',
        ],
      },
    ],
  },
};

const accessibilityTocEn = [
  { id: 'overview', label: 'Overview' },
  { id: 'supported', label: 'Features we declare' },
  { id: 'in-progress', label: 'In progress' },
  { id: 'devices', label: 'Devices' },
  { id: 'feedback', label: 'Feedback' },
];

export const AINCLUSIVE_ACCESSIBILITY: Record<AInclusiveLocale, AccessibilityCopy> = {
  en: {
    kicker: 'App Store · Accessibility',
    title: 'Accessibility',
    subtitle:
      'How AInclusive supports Apple accessibility features on iPhone and iPad. We only declare features that work for common tasks such as creating a lesson, reviewing History, and sharing or saving results.',
    tocAria: 'Accessibility table of contents',
    toc: accessibilityTocEn,
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        paragraphs: [
          'AInclusive is an Education app for teachers, parents, and learning-support staff. We design inclusive lesson workflows and follow Apple Human Interface Guidelines where practical.',
          'This page matches the accessibility features listed on our App Store product page. We update it as we audit and expand support.',
        ],
      },
      {
        id: 'supported',
        title: 'Features we declare on the App Store',
        paragraphs: [
          'Users can complete common tasks with these system features enabled:',
        ],
        bullets: [
          'Differentiate Without Color Alone — status and delivery badges use text and icons in addition to color (for example Ready and Given), so information is not color-only.',
          'Reduced Motion — when Reduce Motion is on in Settings, we minimize non-essential animation so vestibular-sensitive users can work more comfortably.',
        ],
      },
      {
        id: 'in-progress',
        title: 'In progress (not yet declared)',
        paragraphs: [
          'We are improving and testing these areas before claiming them on the App Store:',
        ],
        bullets: [
          'VoiceOver — many controls already have accessibility labels and hints; we continue auditing every common task end to end.',
          'Larger Text / Dynamic Type — layouts aim to respect larger text sizes; we verify at 200%+ before declaring support.',
          'Dark Interface and Sufficient Contrast — SwiftUI follows system appearance; we validate readability under Dark Mode and Increase Contrast.',
          'Voice Control — not fully audited yet.',
          'Captions and Audio Descriptions — not applicable today; the app does not play video or audio programs with dialogue.',
        ],
      },
      {
        id: 'devices',
        title: 'Devices',
        paragraphs: [
          'Declared App Store accessibility support currently covers iPhone and iPad. AInclusive also runs on Mac; we will extend this page when Mac accessibility declarations are published.',
        ],
      },
      {
        id: 'feedback',
        title: 'Feedback',
        paragraphs: [
          'Accessibility issues or requests: azumbogames@gmail.com (subject: AInclusive accessibility).',
          'Support: https://azumbo.vercel.app/ainclusive/support',
          'Privacy: https://azumbo.vercel.app/ainclusive/privacy',
        ],
      },
    ],
  },
  he: {
    kicker: 'App Store · נגישות',
    title: 'נגישות',
    subtitle:
      'כיצד AInclusive תומכת בתכונות נגישות של Apple ב-iPhone וב-iPad. אנו מצהירים רק על תכונות שעובדות במשימות נפוצות כמו יצירת שיעור, היסטוריה ושיתוף או שמירת תוצאה.',
    tocAria: 'תוכן עניינים — נגישות',
    toc: [
      { id: 'overview', label: 'סקירה' },
      { id: 'supported', label: 'תכונות שאנו מצהירים' },
      { id: 'in-progress', label: 'בפיתוח' },
      { id: 'devices', label: 'מכשירים' },
      { id: 'feedback', label: 'משוב' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'סקירה',
        paragraphs: [
          'AInclusive היא אפליקציית Education למורים, הורים ואנשי תמיכה בלמידה. אנו בונים תהליכי שיעור כוללניים ופועלים לפי הנחיות הממשק של Apple ככל האפשר.',
          'עמוד זה תואם את תכונות הנגישות בעמוד המוצר ב-App Store ומתעדכן ככל שאנו מרחיבים ובודקים תמיכה.',
        ],
      },
      {
        id: 'supported',
        title: 'תכונות שאנו מצהירים ב-App Store',
        paragraphs: ['ניתן להשלים משימות נפוצות עם התכונות הבאות:'],
        bullets: [
          'Differentiate Without Color Alone — תגי סטטוס ומסירה משתמשים גם בטקסט ובאייקונים, לא רק בצבע (למשל Ready ו-Given).',
          'Reduced Motion — כשמופעל Reduce Motion בהגדרות, אנו ממזערים אנימציות שאינן חיוניות.',
        ],
      },
      {
        id: 'in-progress',
        title: 'בפיתוח (עדיין לא מוצהר)',
        paragraphs: ['אנו משפרים ובודקים לפני הצהרה ב-App Store:'],
        bullets: [
          'VoiceOver — לפקדים רבים כבר יש תוויות ורמזים; ממשיכים לבדוק את כל המשימות מקצה לקצה.',
          'Larger Text / Dynamic Type — הפריסות מיועדות לכבד טקסט גדול; נצהיר לאחר בדיקה ב-200%+.',
          'Dark Interface ו-Sufficient Contrast — SwiftUI עוקב אחרי מראה המערכת; נאמת קריאות ב-Dark Mode ו-Increase Contrast.',
          'Voice Control — עדיין לא נבדק במלואו.',
          'Captions ו-Audio Descriptions — אינם רלוונטיים כיום; אין נגן וידאו/אודיו עם דיאלוג.',
        ],
      },
      {
        id: 'devices',
        title: 'מכשירים',
        paragraphs: [
          'הצהרת הנגישות ב-App Store מכסה כרגע iPhone ו-iPad. האפליקציה רצה גם ב-Mac; נרחיב עמוד זה כשנפרסם הצהרות ל-Mac.',
        ],
      },
      {
        id: 'feedback',
        title: 'משוב',
        paragraphs: [
          'בעיות או בקשות נגישות: azumbogames@gmail.com (נושא: AInclusive accessibility).',
          'תמיכה: https://azumbo.vercel.app/ainclusive/support',
          'פרטיות: https://azumbo.vercel.app/ainclusive/privacy',
        ],
      },
    ],
  },
  it: {
    kicker: 'App Store · Accessibilità',
    title: 'Accessibilità',
    subtitle:
      'Come AInclusive supporta le funzioni di accessibilità Apple su iPhone e iPad. Dichiariamo solo le funzioni che funzionano per attività comuni come creare una lezione, consultare la Cronologia e condividere o salvare il risultato.',
    tocAria: 'Indice accessibilità',
    toc: [
      { id: 'overview', label: 'Panoramica' },
      { id: 'supported', label: 'Funzioni dichiarate' },
      { id: 'in-progress', label: 'In corso' },
      { id: 'devices', label: 'Dispositivi' },
      { id: 'feedback', label: 'Feedback' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Panoramica',
        paragraphs: [
          'AInclusive è un’app Education per insegnanti, genitori e personale di supporto. Progettiamo flussi di lezione inclusivi e seguiamo le Human Interface Guidelines di Apple dove pratico.',
          'Questa pagina corrisponde alle funzioni di accessibilità sulla scheda App Store e viene aggiornata man mano che ampliamo e verifichiamo il supporto.',
        ],
      },
      {
        id: 'supported',
        title: 'Funzioni dichiarate sull’App Store',
        paragraphs: ['Gli utenti possono completare le attività comuni con:'],
        bullets: [
          'Differentiate Without Color Alone — badge di stato e consegna usano testo e icone oltre al colore (ad es. Ready e Given).',
          'Reduced Motion — con Riduci movimento attivo nelle Impostazioni, riduciamo le animazioni non essenziali.',
        ],
      },
      {
        id: 'in-progress',
        title: 'In corso (non ancora dichiarate)',
        paragraphs: ['Stiamo migliorando e testando prima di dichiararle sull’App Store:'],
        bullets: [
          'VoiceOver — molti controlli hanno già etichette e suggerimenti; continuiamo l’audit end-to-end.',
          'Larger Text / Dynamic Type — i layout mirano a rispettare testo più grande; dichiareremo dopo verifica a 200%+.',
          'Dark Interface e Sufficient Contrast — SwiftUI segue l’aspetto di sistema; validiamo leggibilità in Dark Mode e Aumenta contrasto.',
          'Voice Control — non ancora completamente auditato.',
          'Captions e Audio Descriptions — non applicabili oggi; l’app non riproduce video/audio con dialogo.',
        ],
      },
      {
        id: 'devices',
        title: 'Dispositivi',
        paragraphs: [
          'Il supporto di accessibilità dichiarato sull’App Store copre attualmente iPhone e iPad. AInclusive gira anche su Mac; estenderemo questa pagina quando pubblicheremo dichiarazioni per Mac.',
        ],
      },
      {
        id: 'feedback',
        title: 'Feedback',
        paragraphs: [
          'Problemi o richieste di accessibilità: azumbogames@gmail.com (oggetto: AInclusive accessibility).',
          'Supporto: https://azumbo.vercel.app/ainclusive/support',
          'Privacy: https://azumbo.vercel.app/ainclusive/privacy',
        ],
      },
    ],
  },
  ru: {
    kicker: 'App Store · Доступность',
    title: 'Доступность',
    subtitle:
      'Как AInclusive поддерживает функции доступности Apple на iPhone и iPad. Мы заявляем только те функции, которые работают для типовых задач: создание урока, просмотр History, отправка или сохранение результата.',
    tocAria: 'Оглавление раздела доступности',
    toc: [
      { id: 'overview', label: 'Обзор' },
      { id: 'supported', label: 'Заявленные функции' },
      { id: 'in-progress', label: 'В работе' },
      { id: 'devices', label: 'Устройства' },
      { id: 'feedback', label: 'Обратная связь' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Обзор',
        paragraphs: [
          'AInclusive — приложение Education для учителей, родителей и специалистов поддержки. Мы проектируем инклюзивные сценарии урока и следуем Apple Human Interface Guidelines там, где это практично.',
          'Эта страница соответствует функциям доступности на нашей странице продукта в App Store. Мы обновляем её по мере аудита и расширения поддержки.',
        ],
      },
      {
        id: 'supported',
        title: 'Функции, которые мы заявляем в App Store',
        paragraphs: ['Пользователи могут выполнять типовые задачи при включённых системных функциях:'],
        bullets: [
          'Differentiate Without Color Alone — бейджи статуса и доставки используют текст и иконки в дополнение к цвету (например Ready и Given), так что информация не передаётся только цветом.',
          'Reduced Motion — когда в Настройках включён Reduce Motion, мы минимизируем неосновную анимацию, чтобы пользователям с вестибулярной чувствительностью было комфортнее работать.',
        ],
      },
      {
        id: 'in-progress',
        title: 'В работе (ещё не заявлено)',
        paragraphs: ['Мы улучшаем и тестируем эти области перед заявлением в App Store:'],
        bullets: [
          'VoiceOver — у многих элементов уже есть accessibility labels и hints; продолжаем полный end-to-end аудит типовых задач.',
          'Larger Text / Dynamic Type — макеты рассчитаны на крупные размеры текста; заявим поддержку после проверки при 200%+.',
          'Dark Interface и Sufficient Contrast — SwiftUI следует системному оформлению; проверяем читаемость в Dark Mode и Increase Contrast.',
          'Voice Control — пока не полностью проаудировано.',
          'Captions и Audio Descriptions — сейчас не применимы; приложение не воспроизводит видео/аудио с диалогами.',
        ],
      },
      {
        id: 'devices',
        title: 'Устройства',
        paragraphs: [
          'Заявленная поддержка доступности в App Store сейчас охватывает iPhone и iPad. AInclusive также работает на Mac; мы расширим эту страницу, когда опубликуем заявления для Mac.',
        ],
      },
      {
        id: 'feedback',
        title: 'Обратная связь',
        paragraphs: [
          'Проблемы или запросы по доступности: azumbogames@gmail.com (тема: AInclusive accessibility).',
          'Поддержка: https://azumbo.vercel.app/ainclusive/support',
          'Конфиденциальность: https://azumbo.vercel.app/ainclusive/privacy',
        ],
      },
    ],
  },
};

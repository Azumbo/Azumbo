export type AInclusiveLocale = 'en' | 'he' | 'it';

export const AINCLUSIVE_LOCALES: { id: AInclusiveLocale; label: string; short: string }[] = [
  { id: 'en', label: 'English', short: 'EN' },
  { id: 'he', label: 'עברית', short: 'HE' },
  { id: 'it', label: 'Italiano', short: 'IT' },
];

export const AINCLUSIVE_LANG_STORAGE_KEY = 'ainclusive.lang';

export function isAInclusiveLocale(value: string | null | undefined): value is AInclusiveLocale {
  return value === 'en' || value === 'he' || value === 'it';
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
  shots: { src: string; name: string; note: string; alt: string }[];
  featuresKicker: string;
  featuresTitle: string;
  featuresLead: string;
  features: { icon: string; title: string; text: string }[];
  impactKicker: string;
  impactTitle: string;
  impactLead: string;
  impactPoints: { title: string; text: string }[];
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
    badgeAria: 'Contact us about AInclusive beta',
    badgeAlt: 'Request beta access',
    kicker: 'For teachers, parents & learning-support staff',
    title: 'AInclusive',
    subtitleLead: 'Accessible lessons from real worksheets.',
    subtitle:
      'Photograph or paste learning materials and turn them into clearer, more inclusive lesson activities — on iPhone, iPad, and Mac. Available in English, Hebrew, and Italian.',
    primaryCta: 'Request beta access',
    readSupport: 'Support & FAQ',
    heroPreviewAria: 'AInclusive app preview',
    heroAlt: 'AInclusive app home: Create learning materials',
    shotsKicker: 'Real product screens',
    shotsTitle: 'What educators open on the phone.',
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
      'AInclusive keeps the flow calm and practical: capture a worksheet, choose the learner context, and get adapted materials you can review and share.',
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
    impactTitle: 'Why this matters for grants and schools.',
    impactLead:
      'Funders and educators need proof of inclusion — not just a pitch deck. AInclusive is built to show classroom usefulness and responsible data practice.',
    impactPoints: [
      {
        title: 'Learners who need adaptation',
        text: 'Supports teachers and LSAs who spend hours rewriting materials for diverse needs.',
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
    faqCtaPrefix: 'Need help or a school pilot?',
    faqCtaLink: 'Open AInclusive Support',
    downloadBadge: 'TestFlight / school pilots',
    downloadTitle: 'Try the beta.',
    downloadBody:
      'Public App Store listing is in preparation. Email us for TestFlight access for educators and partner schools.',
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
    badgeAria: 'בקשת גישה לבטא של AInclusive',
    badgeAlt: 'בקשת בטא',
    kicker: 'למורים, הורים ואנשי תמיכה בלמידה',
    title: 'AInclusive',
    subtitleLead: 'שיעורים נגישים מדפי עבודה אמיתיים.',
    subtitle:
      'צלמו או הדביקו חומרי למידה והפכו אותם לפעילויות שיעור ברורות ונגישות יותר — באייפון, אייפד ומק. זמין באנגלית, עברית ואיטלקית.',
    primaryCta: 'בקשת גישה לבטא',
    readSupport: 'תמיכה ושאלות נפוצות',
    heroPreviewAria: 'תצוגה מקדימה של האפליקציה',
    heroAlt: 'מסך הבית של AInclusive: יצירת חומרי למידה',
    shotsKicker: 'מסכים אמיתיים',
    shotsTitle: 'מה שנפתח בטלפון.',
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
      'הזרימה רגועה ומעשית: צילום דף עבודה, בחירת הקשר הלומד, וקבלת חומרים מותאמים לבדיקה ולשיתוף.',
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
    impactTitle: 'למה זה חשוב לבתי ספר ולקרנות.',
    impactLead:
      'מממנים ומחנכים צריכים הוכחת הכללה — לא רק מצגת. AInclusive בנויה לשימושיות בכיתה ולטיפול אחראי בנתונים.',
    impactPoints: [
      {
        title: 'לומדים שזקוקים להתאמה',
        text: 'תומכת במורים ובאנשי LSA שמשקיעים שעות בהתאמת חומרים לצרכים מגוונים.',
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
    faqCtaPrefix: 'צריכים עזרה או פיילוט בבית ספר?',
    faqCtaLink: 'לדף התמיכה של AInclusive',
    downloadBadge: 'TestFlight / פיילוטים בבתי ספר',
    downloadTitle: 'נסו את הבטא.',
    downloadBody: 'רישום ב-App Store בהכנה. כתבו לנו לגישת TestFlight למחנכים ולבתי ספר שותפים.',
  },

  it: {
    langSwitcherAria: 'Lingua della pagina',
    navAria: 'Navigazione AInclusive',
    navApp: 'App',
    navPrivacy: 'Privacy',
    navAccessibility: 'Accessibilità',
    navSupport: 'Supporto',
    navContact: 'Contatti',
    brandHomeAria: 'Home AInclusive',
    footerAria: 'Navigazione footer',
    footerCredit:
      '© 2026 AZUMBO. AInclusive aiuta gli educatori ad adattare i materiali didattici per ogni studente.',
    badgeAria: 'Richiedi accesso beta ad AInclusive',
    badgeAlt: 'Richiedi beta',
    kicker: 'Per insegnanti, genitori e personale di supporto',
    title: 'AInclusive',
    subtitleLead: 'Lezioni accessibili da schede reali.',
    subtitle:
      'Fotografa o incolla materiali didattici e trasformali in attività più chiare e inclusive — su iPhone, iPad e Mac. Disponibile in inglese, ebraico e italiano.',
    primaryCta: 'Richiedi accesso beta',
    readSupport: 'Supporto e FAQ',
    heroPreviewAria: 'Anteprima app AInclusive',
    heroAlt: 'Home di AInclusive: Crea materiali didattici',
    shotsKicker: 'Schermate reali',
    shotsTitle: 'Cosa aprono gli educatori sul telefono.',
    shotsLead:
      'Screenshot aggiornati dal build live — Home e l’icona AInclusive sulla Springboard di iPhone.',
    shots: [
      {
        src: '/ainclusive/app-preview.png',
        name: 'Home',
        note: 'Crea materiali didattici adattati con un tocco.',
        alt: 'Schermata home di AInclusive con il pulsante Crea materiali',
      },
      {
        src: '/ainclusive/home-screen.png',
        name: 'Sulla Home Screen',
        note: 'L’icona reale di AInclusive sull’iPhone.',
        alt: 'Home Screen iPhone con l’icona dell’app AInclusive',
      },
    ],
    featuresKicker: 'Fotocamera · lingue · metriche privacy-safe',
    featuresTitle: 'Pensata per le classi vere, non per le demo.',
    featuresLead:
      'Flusso calmo e pratico: cattura una scheda, scegli il contesto dello studente e ottieni materiali adattati da rivedere e condividere.',
    features: [
      {
        icon: '📷',
        title: 'Cattura schede',
        text: 'Usa fotocamera o libreria per inviare schede da adattare — con finalità di permesso chiare per App Review.',
      },
      {
        icon: '🌍',
        title: 'EN · HE · IT',
        text: 'UI in inglese, ebraico (RTL) e italiano — pronta per piloti locali e evidenze per grant UE.',
      },
      {
        icon: '♿',
        title: 'Inclusiva di progetto',
        text: 'Target di tocco ampi, layout amichevole con Dynamic Type e visuale sobria secondo le HIG Apple.',
      },
      {
        icon: '📊',
        title: 'Analytics privacy-safe',
        text: 'Firebase Analytics e Crashlytics per metriche di prodotto senza inviare email, nomi, topic o foto agli eventi analytics.',
      },
    ],
    impactKicker: 'Impatto sociale',
    impactTitle: 'Perché conta per scuole e bandi.',
    impactLead:
      'Fondi ed educatori chiedono prova di inclusione — non solo slide. AInclusive è costruita per utilità in classe e dati responsabili.',
    impactPoints: [
      {
        title: 'Studenti che necessitano adattamento',
        text: 'Supporta docenti e LSA che dedicano ore a riscrivere materiali per bisogni diversi.',
      },
      {
        title: 'Europa e Israele multilingue',
        text: 'Italiano ed ebraico aprono la strada a piloti regionali.',
      },
      {
        title: 'Trasparenza di default',
        text: 'Privacy policy pubblica, supporto e App Privacy labels pronti per la categoria Education.',
      },
    ],
    faqKicker: 'FAQ',
    faqTitle: 'Risposte rapide.',
    faqLead: 'Per App Store, scuole e revisori di grant.',
    faqs: [
      {
        question: 'Cos’è AInclusive?',
        answer:
          'Un’app Education che aiuta insegnanti, genitori e personale di supporto ad adattare schede in materiali didattici più accessibili su iPhone, iPad e Mac.',
      },
      {
        question: 'Perché serve la fotocamera?',
        answer:
          'Per fotografare schede e materiali didattici da adattare in lezioni accessibili. La libreria foto si usa quando scegli un’immagine esistente.',
      },
      {
        question: 'Quali lingue sono supportate?',
        answer:
          'Inglese, ebraico (da destra a sinistra) e italiano nell’interfaccia; la lingua della lezione si sceglie per ogni attività.',
      },
      {
        question: 'Quali analytics raccogliete?',
        answer:
          'Eventi di prodotto privacy-safe via Firebase. Non inviamo email, nome studente, testo del topic, corpo della lezione o foto ad Analytics.',
      },
    ],
    faqCtaPrefix: 'Serve aiuto o un pilota scolastico?',
    faqCtaLink: 'Apri il Supporto AInclusive',
    downloadBadge: 'TestFlight / piloti scolastici',
    downloadTitle: 'Prova la beta.',
    downloadBody:
      'La scheda App Store è in preparazione. Scrivici per accesso TestFlight per educatori e scuole partner.',
  },
};

export const AINCLUSIVE_SUPPORT: Record<AInclusiveLocale, SupportCopy> = {
  en: {
    kicker: 'Help · App Store requirement',
    title: 'Support',
    subtitle: 'Questions about AInclusive, camera access, languages, or school pilots.',
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
        question: 'How do I join a school pilot / TestFlight?',
        answer: 'Email azumbogames@gmail.com with your school or role. We send TestFlight invites for closed educator betas.',
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
    subtitle: 'שאלות על AInclusive, מצלמה, שפות או פיילוטים בבתי ספר.',
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
        question: 'איך מצטרפים לפיילוט / TestFlight?',
        answer: 'שלחו אימייל ל-azumbogames@gmail.com עם בית הספר או התפקיד. נשלח הזמנות TestFlight לבטא סגורה למחנכים.',
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
    subtitle: 'Domande su AInclusive, fotocamera, lingue o piloti scolastici.',
    contactSupport: 'Email di supporto',
    privacyPolicy: 'Informativa privacy',
    appHome: 'Home AInclusive',
    faqTitle: 'Domande frequenti',
    faqs: [
      {
        question: 'Quanto tempo richiede la generazione?',
        answer:
          'Di solito pochi minuti in base al carico. Con le notifiche attive puoi uscire dall’app e tornare quando i materiali sono pronti.',
      },
      {
        question: 'Perché chiedete fotocamera o foto?',
        answer:
          'Solo per catturare schede e materiali da adattare in lezioni accessibili. Puoi rifiutare e incollare testo dove supportato.',
      },
      {
        question: 'Quali dispositivi sono supportati?',
        answer: 'iPhone e iPad (iOS 17+), con percorso Mac nella stessa famiglia di prodotto.',
      },
      {
        question: 'Come partecipare a un pilota / TestFlight?',
        answer:
          'Scrivi a azumbogames@gmail.com indicando scuola o ruolo. Invieremo inviti TestFlight per beta chiuse per educatori.',
      },
      {
        question: 'Come richiedere la cancellazione dei dati?',
        answer:
          'Email a azumbogames@gmail.com con l’indirizzo usato nell’app. Tratteremo la richiesta secondo l’Informativa privacy.',
      },
    ],
  },
};

const privacyTocEn = [
  { id: 'intro', label: 'About' },
  { id: 'service', label: 'Service data' },
  { id: 'analytics', label: 'Analytics & Crashlytics' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'children', label: 'Children & education' },
  { id: 'gdpr', label: 'GDPR rights' },
  { id: 'retention', label: 'Retention' },
  { id: 'contact', label: 'Contact' },
];

export const AINCLUSIVE_PRIVACY: Record<AInclusiveLocale, PrivacyCopy> = {
  en: {
    kicker: 'Legal · App Store requirement',
    title: 'Privacy Policy',
    subtitle: 'For AInclusive by AZUMBO. Last updated: August 2026.',
    tocAria: 'Privacy policy sections',
    toc: privacyTocEn,
    sections: [
      {
        id: 'intro',
        title: 'About this policy',
        paragraphs: [
          'This Privacy Policy explains how AZUMBO (“we”, “our”) handles information in the AInclusive apps for iPhone, iPad, and Mac, and related backend APIs used to generate adapted learning materials.',
          'Website: https://azumbo.vercel.app/ainclusive · Product site also referenced from ainclusive.education.',
        ],
      },
      {
        id: 'service',
        title: 'Data processed to deliver the service',
        paragraphs: [
          'When you create a lesson you may provide content needed to run the job on our API.',
        ],
        bullets: [
          'Email address (to associate jobs and deliver results)',
          'Student first name or nickname (optional workflow label)',
          'Lesson topic and pasted text',
          'Photos or files of worksheets / learning materials',
          'Selected lesson language and activity options',
        ],
      },
      {
        id: 'analytics',
        title: 'Analytics and crash diagnostics (Firebase)',
        paragraphs: [
          'The apps use Google Firebase Analytics and Firebase Crashlytics.',
          'Analytics events are privacy-safe product metrics (for example app open, lesson funnel steps, wait-time buckets, download/editor opens, notification outcomes, UI language). We do not send email, student name, topic text, lesson body, photos, or raw session tokens to Analytics.',
          'Crashlytics collects crash and diagnostic information to improve stability. Firebase processing follows Google’s terms: https://firebase.google.com/support/privacy',
        ],
      },
      {
        id: 'notifications',
        title: 'Notifications',
        paragraphs: [
          'With your permission, the app may send local notifications when a lesson is ready. Remote push is not required for the current product. You can change permission in system Settings.',
        ],
      },
      {
        id: 'children',
        title: 'Children and education contexts',
        paragraphs: [
          'AInclusive is designed for educators and caregivers. If materials relate to learners (including children or people with special educational needs), prefer minimal identifiers, follow school and parental rules, and do not upload content you are not allowed to share.',
          'We do not knowingly use the app to create advertising profiles of children.',
        ],
      },
      {
        id: 'gdpr',
        title: 'Legal bases and rights (GDPR / EEA / UK where applicable)',
        paragraphs: [
          'We may rely on contract/service delivery for lesson inputs, legitimate interests for privacy-safe analytics and crash diagnostics, and consent where required for optional notifications.',
          'You may have rights to access, rectify, erase, restrict, object, or port data, and to lodge a complaint with a supervisory authority. Contact us using the address below.',
        ],
      },
      {
        id: 'retention',
        title: 'Retention and transfers',
        paragraphs: [
          'Lesson job data is retained as needed to deliver results and operate the service, then deleted or anonymised according to our operational schedule. Analytics and crash logs follow Firebase project retention.',
          'Infrastructure and Firebase may process data in the EU and/or other regions with appropriate safeguards where required.',
        ],
      },
      {
        id: 'contact',
        title: 'Contact',
        paragraphs: [
          'Privacy and support: azumbogames@gmail.com',
          'Product pages: https://azumbo.vercel.app/ainclusive · https://azumbo.vercel.app/ainclusive/support',
        ],
      },
    ],
  },
  he: {
    kicker: 'משפטי · דרישת App Store',
    title: 'מדיניות פרטיות',
    subtitle: 'עבור AInclusive מאת AZUMBO. עודכן לאחרונה: אוגוסט 2026.',
    tocAria: 'סעיפי מדיניות הפרטיות',
    toc: [
      { id: 'intro', label: 'אודות' },
      { id: 'service', label: 'נתוני שירות' },
      { id: 'analytics', label: 'אנליטיקה וקריסות' },
      { id: 'notifications', label: 'התראות' },
      { id: 'children', label: 'ילדים וחינוך' },
      { id: 'gdpr', label: 'זכויות GDPR' },
      { id: 'retention', label: 'שמירה' },
      { id: 'contact', label: 'יצירת קשר' },
    ],
    sections: [
      {
        id: 'intro',
        title: 'על מדיניות זו',
        paragraphs: [
          'מדיניות זו מסבירה כיצד AZUMBO מטפלת במידע באפליקציות AInclusive לאייפון, אייפד ומק, ובממשקי API ליצירת חומרי למידה מותאמים.',
          'אתר: https://azumbo.vercel.app/ainclusive',
        ],
      },
      {
        id: 'service',
        title: 'נתונים לעיבוד השירות',
        paragraphs: ['בעת יצירת שיעור ייתכן שתספקו תוכן הדרוש להרצת המשימה ב-API שלנו.'],
        bullets: [
          'כתובת אימייל',
          'שם פרטי / כינוי של תלמיד (אופציונלי)',
          'נושא השיעור וטקסט שהודבק',
          'תמונות או קבצים של דפי עבודה',
          'שפת השיעור ואפשרויות פעילות',
        ],
      },
      {
        id: 'analytics',
        title: 'אנליטיקה ואבחון קריסות (Firebase)',
        paragraphs: [
          'האפליקציות משתמשות ב-Firebase Analytics וב-Crashlytics.',
          'אירועי האנליטיקה הם מדדי מוצר שומרי פרטיות. איננו שולחים אימייל, שם תלמיד, טקסט נושא, גוף שיעור, תמונות או אסימוני סשן גולמיים לאנליטיקה.',
          'Crashlytics אוסף מידע על קריסות לשיפור היציבות. עיבוד Firebase כפוף לתנאי Google.',
        ],
      },
      {
        id: 'notifications',
        title: 'התראות',
        paragraphs: [
          'בהסכמתכם האפליקציה עשויה לשלוח התראות מקומיות כשהשיעור מוכן. ניתן לשנות הרשאה בהגדרות המערכת.',
        ],
      },
      {
        id: 'children',
        title: 'ילדים והקשר חינוכי',
        paragraphs: [
          'AInclusive מיועדת למחנכים ולמטפלים. אם החומרים נוגעים ללומדים (כולל ילדים או צרכים מיוחדים), העדיפו מזהים מינימליים ופעלו לפי כללי בית הספר וההורים.',
          'איננו משתמשים באפליקציה ליצירת פרופילי פרסום של ילדים.',
        ],
      },
      {
        id: 'gdpr',
        title: 'בסיסים משפטיים וזכויות (GDPR)',
        paragraphs: [
          'ייתכן שנסתמך על ביצוע חוזה/שירות, אינטרס לגיטימי לאנליטיקה שומרת פרטיות, והסכמה להתראות אופציונליות.',
          'ייתכן שיש לכם זכויות עיון, תיקון, מחיקה ועוד. פנו אלינו בכתובת למטה.',
        ],
      },
      {
        id: 'retention',
        title: 'שמירה והעברות',
        paragraphs: [
          'נתוני משימות נשמרים ככל שנדרש למתן השירות ואז נמחקים או מואנונימים. לוגים של Firebase לפי הגדרות הפרויקט.',
        ],
      },
      {
        id: 'contact',
        title: 'יצירת קשר',
        paragraphs: [
          'פרטיות ותמיכה: azumbogames@gmail.com',
          'https://azumbo.vercel.app/ainclusive/support',
        ],
      },
    ],
  },
  it: {
    kicker: 'Legale · requisito App Store',
    title: 'Informativa sulla privacy',
    subtitle: 'Per AInclusive di AZUMBO. Ultimo aggiornamento: agosto 2026.',
    tocAria: 'Sezioni dell’informativa',
    toc: [
      { id: 'intro', label: 'Informazioni' },
      { id: 'service', label: 'Dati di servizio' },
      { id: 'analytics', label: 'Analytics e Crashlytics' },
      { id: 'notifications', label: 'Notifiche' },
      { id: 'children', label: 'Minori e scuola' },
      { id: 'gdpr', label: 'Diritti GDPR' },
      { id: 'retention', label: 'Conservazione' },
      { id: 'contact', label: 'Contatti' },
    ],
    sections: [
      {
        id: 'intro',
        title: 'Informazioni su questa policy',
        paragraphs: [
          'Questa Informativa spiega come AZUMBO gestisce le informazioni nelle app AInclusive per iPhone, iPad e Mac e nelle API usate per generare materiali didattici adattati.',
          'Sito: https://azumbo.vercel.app/ainclusive',
        ],
      },
      {
        id: 'service',
        title: 'Dati trattati per erogare il servizio',
        paragraphs: [
          'Quando crei una lezione puoi fornire contenuti necessari all’esecuzione del lavoro sulla nostra API.',
        ],
        bullets: [
          'Indirizzo email',
          'Nome o soprannome dello studente (etichetta opzionale)',
          'Argomento della lezione e testo incollato',
          'Foto o file di schede / materiali',
          'Lingua della lezione e opzioni di attività',
        ],
      },
      {
        id: 'analytics',
        title: 'Analytics e diagnostica crash (Firebase)',
        paragraphs: [
          'Le app usano Google Firebase Analytics e Firebase Crashlytics.',
          'Gli eventi analytics sono metriche di prodotto privacy-safe. Non inviamo email, nome studente, testo del topic, corpo della lezione, foto o token di sessione grezzi ad Analytics.',
          'Crashlytics raccoglie informazioni su crash e diagnostica. Il trattamento Firebase segue i termini Google.',
        ],
      },
      {
        id: 'notifications',
        title: 'Notifiche',
        paragraphs: [
          'Con il tuo permesso l’app può inviare notifiche locali quando la lezione è pronta. Puoi cambiare il permesso nelle Impostazioni di sistema.',
        ],
      },
      {
        id: 'children',
        title: 'Minori e contesti educativi',
        paragraphs: [
          'AInclusive è pensata per educatori e caregiver. Se i materiali riguardano apprendenti (inclusi minori o bisogni educativi speciali), preferisci identificatori minimi e segui le regole di scuola e genitori.',
          'Non usiamo l’app per creare profili pubblicitari di minori.',
        ],
      },
      {
        id: 'gdpr',
        title: 'Basi giuridiche e diritti (GDPR)',
        paragraphs: [
          'Possiamo basarci su contratto/erogazione del servizio, interesse legittimo per analytics privacy-safe e consenso dove richiesto per notifiche opzionali.',
          'Puoi avere diritti di accesso, rettifica, cancellazione e altro. Contattaci all’indirizzo sotto.',
        ],
      },
      {
        id: 'retention',
        title: 'Conservazione e trasferimenti',
        paragraphs: [
          'I dati dei lavori sono conservati quanto necessario per erogare il servizio, poi cancellati o anonimizzati. Log Firebase secondo le impostazioni del progetto.',
        ],
      },
      {
        id: 'contact',
        title: 'Contatti',
        paragraphs: [
          'Privacy e supporto: azumbogames@gmail.com',
          'https://azumbo.vercel.app/ainclusive/support',
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
};

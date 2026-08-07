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
    badgeAria: 'Contact us about AInclusive beta',
    badgeAlt: 'Request beta access',
    kicker: 'For teachers, parents & learning-support staff',
    title: 'AInclusive',
    subtitleLead:
      'Turn any worksheet into an accessible lesson in under an hour — no special training, no manual rewriting.',
    subtitle:
      'Photograph or paste your classroom materials and AInclusive adapts them for special needs and language-barrier learners, on iPhone, iPad, and Mac. Available in English, Hebrew, and Italian.',
    primaryCta: 'Request beta access',
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
    subtitleLead:
      'הפכו כל דף עבודה לשיעור נגיש בפחות משעה — בלי הכשרה מיוחדת ובלי שכתוב ידני.',
    subtitle:
      'צלמו או הדביקו חומרי כיתה, ו-AInclusive מתאימה אותם ללומדים עם צרכים מיוחדים וללומדים עם מחסום שפה — באייפון, אייפד ומק. זמין באנגלית, עברית ואיטלקית.',
    primaryCta: 'בקשת גישה לבטא',
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
    brandHomeAria: 'Home di AInclusive',
    footerAria: 'Link a piè di pagina',
    footerCredit:
      '© 2026 AZUMBO. AInclusive aiuta gli educatori ad adattare i materiali didattici per ogni studente.',
    badgeAria: 'Scrivici per chiedere l’accesso alla beta di AInclusive',
    badgeAlt: 'Richiedi accesso alla beta',
    kicker: 'Per insegnanti, genitori e personale di sostegno',
    title: 'AInclusive',
    subtitleLead:
      'Trasforma qualsiasi scheda in una lezione accessibile in meno di un’ora — senza formazione speciale e senza riscrivere tutto a mano.',
    subtitle:
      'Fotografa o incolla i materiali di classe: AInclusive li adatta per alunni con bisogni speciali e per chi ha barriere linguistiche, su iPhone, iPad e Mac. L’interfaccia è disponibile in inglese, ebraico e italiano.',
    primaryCta: 'Richiedi accesso alla beta',
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
      'Usare l’app AInclusive è stata un’esperienza ispirante. L’interfaccia intuitiva e l’approccio creativo verso gli alunni con bisogni speciali sono davvero notevoli… Sono sicura che questa app sarà di grande aiuto per gli insegnanti.',
    testimonialAttribution: 'Insegnante di sostegno, pilota iniziale',
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
    faqCtaPrefix: 'Serve aiuto o un pilota scolastico?',
    faqCtaLink: 'Vai al supporto AInclusive',
    downloadBadge: 'TestFlight / piloti scolastici',
    downloadTitle: 'Prova la versione beta',
    downloadBody:
      'Presto l’app sarà su App Store. Scrivici: ti mandiamo un invito TestFlight per insegnanti e scuole partner.',
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
    badgeAria: 'Написать нам про доступ к бета-версии AInclusive',
    badgeAlt: 'Запросить доступ к бете',
    kicker: 'Для учителей, родителей и специалистов сопровождения',
    title: 'AInclusive',
    subtitleLead:
      'Превратите любой рабочий лист в доступный урок менее чем за час — без специального обучения и без ручной переделки материалов.',
    subtitle:
      'Сфотографируйте или вставьте материалы урока — и AInclusive адаптирует их для учеников с особыми образовательными потребностями и для тех, кому мешает языковой барьер. Работает на iPhone, iPad и Mac. Интерфейс на английском, иврите и итальянском.',
    primaryCta: 'Запросить доступ к бете',
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
    faqCtaPrefix: 'Нужна помощь или школьный пилот?',
    faqCtaLink: 'Перейти в поддержку AInclusive',
    downloadBadge: 'TestFlight / школьные пилоты',
    downloadTitle: 'Попробуйте бета-версию',
    downloadBody:
      'Скоро приложение появится в App Store. Напишите нам — пришлём приглашение в TestFlight для учителей и школ-партнёров.',
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
    subtitle: 'Domande su AInclusive, fotocamera, lingue e piloti scolastici.',
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
        question: 'Come partecipare a un pilota / TestFlight?',
        answer:
          'Scrivi a azumbogames@gmail.com indicando scuola o ruolo. Ti invieremo un invito TestFlight per la beta chiusa dedicata agli educatori.',
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
    subtitle: 'Вопросы про AInclusive, камеру, языки и школьные пилоты.',
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
        question: 'Как попасть в школьный пилот / TestFlight?',
        answer:
          'Напишите на azumbogames@gmail.com — укажите школу или роль. Мы отправим приглашение в TestFlight для закрытой беты для педагогов.',
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
  ru: {
    kicker: 'Юридическое · требование App Store',
    title: 'Политика конфиденциальности',
    subtitle: 'Для AInclusive от AZUMBO. Обновлено: август 2026.',
    tocAria: 'Разделы политики конфиденциальности',
    toc: [
      { id: 'intro', label: 'О политике' },
      { id: 'service', label: 'Данные сервиса' },
      { id: 'analytics', label: 'Аналитика и Crashlytics' },
      { id: 'notifications', label: 'Уведомления' },
      { id: 'children', label: 'Дети и образование' },
      { id: 'gdpr', label: 'Права GDPR' },
      { id: 'retention', label: 'Хранение' },
      { id: 'contact', label: 'Контакты' },
    ],
    sections: [
      {
        id: 'intro',
        title: 'Об этой политике',
        paragraphs: [
          'Эта Политика конфиденциальности объясняет, как AZUMBO («мы») обрабатывает информацию в приложениях AInclusive для iPhone, iPad и Mac и в связанных backend API, используемых для генерации адаптированных учебных материалов.',
          'Сайт: https://azumbo.vercel.app/ainclusive · продукт также упоминается на ainclusive.education.',
        ],
      },
      {
        id: 'service',
        title: 'Данные, обрабатываемые для оказания услуги',
        paragraphs: [
          'При создании урока вы можете предоставить контент, необходимый для выполнения задания через наш API.',
        ],
        bullets: [
          'Адрес электронной почты (для связи заданий и доставки результатов)',
          'Имя или прозвище ученика (необязательная метка в процессе)',
          'Тема урока и вставленный текст',
          'Фото или файлы рабочих листов / учебных материалов',
          'Выбранный язык урока и варианты активностей',
        ],
      },
      {
        id: 'analytics',
        title: 'Аналитика и диагностика сбоев (Firebase)',
        paragraphs: [
          'Приложения используют Google Firebase Analytics и Firebase Crashlytics.',
          'События Analytics — это privacy-safe продуктовые метрики (например, открытие приложения, шаги воронки урока, корзины времени ожидания, открытие загрузки/редактора, исходы уведомлений, язык UI). Мы не отправляем email, имя ученика, текст темы, тело урока, фото или сырые session token в Analytics.',
          'Crashlytics собирает информацию о сбоях и диагностике для повышения стабильности. Обработка Firebase подчиняется условиям Google: https://firebase.google.com/support/privacy',
        ],
      },
      {
        id: 'notifications',
        title: 'Уведомления',
        paragraphs: [
          'С вашего разрешения приложение может отправлять локальные уведомления, когда урок готов. Удалённый push для текущего продукта не обязателен. Разрешение можно изменить в системных Настройках.',
        ],
      },
      {
        id: 'children',
        title: 'Дети и образовательный контекст',
        paragraphs: [
          'AInclusive предназначено для педагогов и опекунов. Если материалы относятся к ученикам (включая детей или людей с особыми образовательными потребностями), используйте минимальные идентификаторы, соблюдайте правила школы и родителей и не загружайте контент, которым вы не вправе делиться.',
          'Мы сознательно не используем приложение для создания рекламных профилей детей.',
        ],
      },
      {
        id: 'gdpr',
        title: 'Правовые основания и права (GDPR / EEA / UK, где применимо)',
        paragraphs: [
          'Мы можем опираться на договор/оказание услуги для входных данных урока, законный интерес для privacy-safe аналитики и диагностики сбоев, а также согласие там, где оно требуется для опциональных уведомлений.',
          'У вас могут быть права на доступ, исправление, удаление, ограничение, возражение или переносимость данных, а также право подать жалобу в надзорный орган. Свяжитесь с нами по адресу ниже.',
        ],
      },
      {
        id: 'retention',
        title: 'Хранение и передачи',
        paragraphs: [
          'Данные заданий урока хранятся столько, сколько нужно для выдачи результатов и работы сервиса, затем удаляются или обезличиваются по нашему операционному графику. Логи аналитики и сбоев следуют настройкам retention проекта Firebase.',
          'Инфраструктура и Firebase могут обрабатывать данные в ЕС и/или других регионах с соответствующими гарантиями, где это требуется.',
        ],
      },
      {
        id: 'contact',
        title: 'Контакты',
        paragraphs: [
          'Конфиденциальность и поддержка: azumbogames@gmail.com',
          'Страницы продукта: https://azumbo.vercel.app/ainclusive · https://azumbo.vercel.app/ainclusive/support',
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

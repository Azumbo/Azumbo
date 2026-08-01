export type StudioApp = {
  name: string;
  slug: string;
  appStoreId: string;
  appStoreUrl: string;
  bundleId: string;
  description: string;
  icon: string;
  tagline: string;
  privacyPath: string;
  supportPath: string;
  screenshot?: string;
};

export const CONTACT_EMAIL = 'azumbogames@gmail.com';
export const ADMOB_PUBLISHER_ID = 'pub-2475393065586904';

export const apps: StudioApp[] = [
  {
    name: 'AInclusive',
    slug: 'ainclusive',
    appStoreId: '',
    appStoreUrl: 'https://azumbo.vercel.app/ainclusive',
    bundleId: 'education.ainclusive.app',
    description:
      'Adapt worksheets into inclusive lesson materials for teachers, parents, and LSAs — on iPhone, iPad, and Mac. English, Hebrew, and Italian.',
    icon: '/ainclusive/icon.png',
    screenshot: '/ainclusive/app-preview.png',
    tagline: 'Accessible lessons for every learner',
    privacyPath: '/ainclusive/privacy',
    supportPath: '/ainclusive/support',
  },
  {
    name: 'La Pasta: 60s Challenge',
    slug: 'lapasta',
    appStoreId: '6774466615',
    appStoreUrl: 'https://apps.apple.com/it/app/la-pasta-60s-challenge/id6774466615?l=en-GB',
    bundleId: 'com.azumbogames.lapasta',
    description: 'A warm Italian pasta shape quiz for iPhone and iPad: watch the glass jars shuffle, pick the right category, and build your collection in quick 60-second rounds.',
    icon: '🍝',
    screenshot: '/lapasta/gameplay-screenshot.jpg',
    tagline: 'Italian pasta shape quiz',
    privacyPath: '/lapasta/privacy',
    supportPath: '/lapasta/support',
  },
  {
    name: 'Ciro.Map',
    slug: 'ciromap',
    appStoreId: '6776004922',
    appStoreUrl: 'https://apps.apple.com/app/id6776004922',
    bundleId: 'com.azumbo.ciromap',
    description:
      'Wander Cirò Marina with confidence. Map routes, summer events, shops, pharmacies, and emergency contacts — in Italian, English, Russian & Polish.',
    icon: '🗺️',
    tagline: 'Cirò Marina travel guide',
    privacyPath: '/ciromap/privacy',
    supportPath: '/ciromap',
  },
];

export function getAppBySlug(slug: string) {
  return apps.find((app) => app.slug === slug);
}

export function getPublicAppRoutes() {
  return apps.flatMap((app) => [`/${app.slug}`, app.privacyPath, app.supportPath]);
}

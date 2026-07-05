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
};

export const CONTACT_EMAIL = 'azumbogames@gmail.com';
export const ADMOB_PUBLISHER_ID = 'pub-2475393065586904';

export const apps: StudioApp[] = [
  {
    name: 'La Pasta: 60s Challenge',
    slug: 'lapasta',
    appStoreId: '6774466615',
    appStoreUrl: 'https://apps.apple.com/app/id6774466615',
    bundleId: 'com.azumbogames.lapasta',
    description: 'A warm Italian pasta shape quiz for iPhone and iPad: watch the glass jars shuffle, pick the right category, and build your collection in quick 60-second rounds.',
    icon: '🍝',
    tagline: 'Italian pasta shape quiz',
    privacyPath: '/lapasta/privacy',
    supportPath: '/lapasta/support',
  },
  {
    name: 'Ciro.Map',
    slug: 'ciromap',
    appStoreId: '6776004922',
    appStoreUrl: 'https://apps.apple.com/us/app/ciro-map/id6776004922',
    bundleId: 'com.azumbo.ciromap',
    description:
      'A polished iOS travel guide for Cirò Marina, Calabria, with nearby places, routes, categories, and a private loyalty wallet.',
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

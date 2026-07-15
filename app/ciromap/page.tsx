import type { Metadata } from 'next';
import { APP_STORE_PROMO } from '../../lib/ciromap-store-content';
import { SITE_URL } from '../../lib/seo';
import { CIRO_MAP } from './components';
import CiroMapLandingClient from './LandingClient';

const OG_IMAGE = `${SITE_URL}/ciromap/og-ciromap.jpg`;

export const metadata: Metadata = {
  title: 'Ciro.Map: Guide Cirò Marina',
  description: APP_STORE_PROMO,
  alternates: { canonical: `${SITE_URL}/ciromap` },
  other: {
    'apple-itunes-app': `app-id=${CIRO_MAP.appStoreId}`,
  },
  openGraph: {
    title: 'Ciro.Map: Guide Cirò Marina',
    description: APP_STORE_PROMO,
    url: `${SITE_URL}/ciromap`,
    siteName: 'AZUMBO',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 512, height: 512, alt: 'Ciro.Map app icon' }],
  },
  twitter: {
    card: 'summary',
    title: 'Ciro.Map: Guide Cirò Marina',
    description: APP_STORE_PROMO,
    images: [OG_IMAGE],
  },
};

export default function CiroMapLandingPage() {
  return <CiroMapLandingClient />;
}

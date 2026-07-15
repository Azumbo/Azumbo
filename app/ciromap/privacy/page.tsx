import type { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';
import { SITE_URL } from '../../../lib/seo';
import { CIRO_MAP } from '../components';

const canonical = `${SITE_URL}/ciromap/privacy`;

export const metadata: Metadata = {
  title: 'Ciro.Map Privacy Policy',
  description: 'Privacy Policy for Ciro.Map by Azumbo, including location, identifiers, AdMob ads, Firebase, Apple purchases, and loyalty wallet data.',
  alternates: {
    canonical,
    languages: {
      'en-US': canonical,
      'it-IT': canonical,
      'ru-RU': canonical,
      'x-default': canonical,
    },
  },
  other: {
    'apple-itunes-app': `app-id=${CIRO_MAP.appStoreId}`,
  },
  openGraph: {
    title: 'Ciro.Map Privacy Policy',
    description: 'Privacy Policy for Ciro.Map by Azumbo.',
    url: canonical,
    siteName: 'AZUMBO',
    type: 'article',
  },
};

export default function CiroMapPrivacyPage() {
  return <PrivacyClient />;
}

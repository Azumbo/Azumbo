import type { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';
import { SITE_URL } from '../../../lib/seo';

const canonical = `${SITE_URL}/CiroMap/privacy`;

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

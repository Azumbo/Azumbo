import type { Metadata } from 'next';
import { SITE_URL } from '../../../lib/seo';
import ZumiPrivacyClient from '../PrivacyClient';

export const metadata: Metadata = {
  title: 'Zumi Privacy Policy',
  description:
    'Privacy Policy for Zumi: on-device preferences, offline song packs, no microphone recording, and contact details for Azumbo.',
  alternates: {
    canonical: `${SITE_URL}/zumi/privacy`,
  },
  openGraph: {
    title: 'Zumi Privacy Policy',
    description: 'Privacy Policy for Zumi by AZUMBO.',
    url: `${SITE_URL}/zumi/privacy`,
    siteName: 'AZUMBO',
    type: 'website',
  },
};

export default function ZumiPrivacyPage() {
  return <ZumiPrivacyClient />;
}

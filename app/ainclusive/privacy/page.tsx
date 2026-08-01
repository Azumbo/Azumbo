import type { Metadata } from 'next';
import { SITE_URL } from '../../../lib/seo';
import AInclusivePrivacyClient from '../PrivacyClient';

export const metadata: Metadata = {
  title: 'AInclusive Privacy Policy',
  description:
    'Privacy Policy for AInclusive by AZUMBO: lesson content, Firebase Analytics and Crashlytics, notifications, children’s privacy, GDPR rights, and contact details. English, Hebrew, Italian.',
  alternates: {
    canonical: `${SITE_URL}/ainclusive/privacy`,
  },
  openGraph: {
    title: 'AInclusive Privacy Policy',
    description: 'Privacy Policy for AInclusive Education app by AZUMBO.',
    url: `${SITE_URL}/ainclusive/privacy`,
    siteName: 'AZUMBO',
    type: 'website',
    images: [{ url: `${SITE_URL}/ainclusive/icon.png`, alt: 'AInclusive' }],
  },
};

export default function AInclusivePrivacyPage() {
  return <AInclusivePrivacyClient />;
}

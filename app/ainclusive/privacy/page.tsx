import type { Metadata } from 'next';
import { SITE_URL } from '../../../lib/seo';
import AInclusivePrivacyClient from '../PrivacyClient';

export const metadata: Metadata = {
  title: 'AInclusive Privacy Policy',
  description:
    'Privacy Policy for AInclusive (iOS App Store and Android Google Play) by AZUMBO: lesson content, OpenAI, Firebase, SendGrid, Google Cloud, permissions, children’s privacy, GDPR rights, and data deletion. English, Hebrew, Italian, Russian.',
  alternates: {
    canonical: `${SITE_URL}/ainclusive/privacy`,
  },
  openGraph: {
    title: 'AInclusive Privacy Policy',
    description:
      'Privacy Policy for AInclusive on iOS and Android — last updated 25 September 2026.',
    url: `${SITE_URL}/ainclusive/privacy`,
    siteName: 'AZUMBO',
    type: 'website',
    images: [{ url: `${SITE_URL}/ainclusive/icon.png`, alt: 'AInclusive' }],
  },
};

export default function AInclusivePrivacyPage() {
  return <AInclusivePrivacyClient />;
}

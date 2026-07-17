import type { Metadata } from 'next';
import { SITE_URL } from '../../../lib/seo';
import LaPastaPrivacyClient from '../PrivacyClient';

export const metadata: Metadata = {
  title: 'La Pasta Privacy Policy',
  description:
    'Privacy Policy for La Pasta: 60s Challenge, including local progress, advertising, in-app purchases, children’s privacy, data retention, and contact details.',
  alternates: {
    canonical: `${SITE_URL}/lapasta/privacy`,
  },
  openGraph: {
    title: 'La Pasta Privacy Policy',
    description: 'Privacy Policy for La Pasta: 60s Challenge by AZUMBO.',
    url: `${SITE_URL}/lapasta/privacy`,
    siteName: 'AZUMBO',
    type: 'website',
  },
};

export default function LaPastaPrivacyPage() {
  return <LaPastaPrivacyClient />;
}

import type { Metadata } from 'next';
import { SITE_URL } from '../../../lib/seo';
import ZumiSupportClient from '../SupportClient';

export const metadata: Metadata = {
  title: 'Zumi Support',
  description:
    'Support for Zumi: karaoke playback, offline packs, practice exercises, languages, and contact email.',
  alternates: {
    canonical: `${SITE_URL}/zumi/support`,
  },
  openGraph: {
    title: 'Zumi Support',
    description: 'Get help with Zumi by AZUMBO.',
    url: `${SITE_URL}/zumi/support`,
    siteName: 'AZUMBO',
    type: 'website',
  },
};

export default function ZumiSupportPage() {
  return <ZumiSupportClient />;
}

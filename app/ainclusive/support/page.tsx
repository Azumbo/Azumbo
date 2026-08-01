import type { Metadata } from 'next';
import { JsonLd } from '../../../components/seo/JsonLd';
import { AINCLUSIVE_SUPPORT } from '../../../lib/ainclusive-store-content';
import { SITE_URL, buildFaqPageSchema } from '../../../lib/seo';
import AInclusiveSupportClient from '../SupportClient';

export const metadata: Metadata = {
  title: 'AInclusive Support',
  description:
    'Support and FAQ for AInclusive: camera access, lesson generation, languages (English, Hebrew, Italian), TestFlight school pilots, and data deletion requests.',
  alternates: {
    canonical: `${SITE_URL}/ainclusive/support`,
  },
  openGraph: {
    title: 'AInclusive Support',
    description: 'Support and FAQ for AInclusive by AZUMBO.',
    url: `${SITE_URL}/ainclusive/support`,
    siteName: 'AZUMBO',
    type: 'website',
    images: [{ url: `${SITE_URL}/ainclusive/icon.png`, alt: 'AInclusive' }],
  },
};

export default function AInclusiveSupportPage() {
  return (
    <>
      <JsonLd
        data={buildFaqPageSchema(`${SITE_URL}/ainclusive/support`, 'en', AINCLUSIVE_SUPPORT.en.faqs)}
      />
      <AInclusiveSupportClient />
    </>
  );
}

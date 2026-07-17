import type { Metadata } from 'next';
import { JsonLd } from '../../../components/seo/JsonLd';
import { SITE_URL, buildFaqPageSchema } from '../../../lib/seo';
import { LAPASTA_SUPPORT } from '../../../lib/lapasta-store-content';
import LaPastaSupportClient from '../SupportClient';

export const metadata: Metadata = {
  title: 'La Pasta Support',
  description:
    'Support and FAQ for La Pasta: 60s Challenge, including gameplay, continues, Remove Ads, restore purchases, haptics, sound, and progress. English, Italian, Polish, Russian.',
  alternates: {
    canonical: `${SITE_URL}/lapasta/support`,
  },
  openGraph: {
    title: 'La Pasta Support',
    description: 'Support and FAQ for La Pasta: 60s Challenge by AZUMBO.',
    url: `${SITE_URL}/lapasta/support`,
    siteName: 'AZUMBO',
    type: 'website',
  },
};

export default function LaPastaSupportPage() {
  return (
    <>
      <JsonLd data={buildFaqPageSchema(`${SITE_URL}/lapasta/support`, 'en', LAPASTA_SUPPORT.en.faqs)} />
      <LaPastaSupportClient />
    </>
  );
}

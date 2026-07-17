import { JsonLd, SoftwareApplicationJsonLd } from '../../components/seo/JsonLd';
import { LA_PASTA_FAQ } from '../../lib/lapastaFaq';
import {
  SITE_URL,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildPageMetadata,
} from '../../lib/seo';
import LaPastaLandingClient from './LandingClient';
import type { Metadata } from 'next';

export const metadata: Metadata = buildPageMetadata({
  pathname: '/lapasta',
  title: 'La Pasta: 60s Challenge — iOS Pasta Quiz Game',
  description:
    'La Pasta is a free iOS pasta-shape quiz for iPhone and iPad: glass jars shuffle, you name Italian categories, and collect shapes in 60-second rounds. Available in English, Italian, Polish, and Russian.',
});

export default function LaPastaLandingPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: 'AZUMBO', path: '/en' },
            { name: 'La Pasta', path: '/lapasta' },
          ]),
          buildFaqPageSchema(`${SITE_URL}/lapasta`, 'en', [...LA_PASTA_FAQ]),
        ]}
      />
      <SoftwareApplicationJsonLd
        name="La Pasta: 60s Challenge"
        description="Italian pasta shape quiz for iPhone and iPad with glass-jar rounds, collection, and Daily Pasta."
        url={`${SITE_URL}/lapasta`}
        applicationCategory="GameApplication"
        operatingSystem="iOS 18+"
        image={`${SITE_URL}/lapasta/gameplay-screenshot.jpg`}
        offers={{ price: '0', priceCurrency: 'EUR' }}
      />
      <LaPastaLandingClient />
    </>
  );
}

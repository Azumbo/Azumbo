import type { Metadata } from 'next';
import { JsonLd, SoftwareApplicationJsonLd } from '../../components/seo/JsonLd';
import { APP_STORE_PROMO, LANDING_COPY } from '../../lib/ciromap-store-content';
import { SITE_URL, buildBreadcrumbSchema, buildFaqPageSchema } from '../../lib/seo';
import { CIRO_MAP } from './components';
import CiroMapLandingClient from './LandingClient';

const OG_IMAGE = `${SITE_URL}/ciromap/og-ciromap.jpg?v=3`;
const PUBLISH_DATE = '2026-06-30T00:00:00.000Z';
const AUTHORS = [
  'Kostiantyn Kravchenko',
  'Mariya Kravtsova',
  'Santo Scerra',
] as const;

export const metadata: Metadata = {
  title: 'Ciro.Map — Digital platform for Ciro Marina',
  description: APP_STORE_PROMO,
  authors: AUTHORS.map((name) => ({ name })),
  creator: 'AZUMBO',
  publisher: 'AZUMBO',
  alternates: { canonical: `${SITE_URL}/ciromap` },
  other: {
    'apple-itunes-app': `app-id=${CIRO_MAP.appStoreId}`,
    'article:published_time': PUBLISH_DATE,
    'article:modified_time': PUBLISH_DATE,
    'article:author': AUTHORS.join(', '),
  },
  openGraph: {
    title: 'Ciro.Map — Digital platform for Ciro Marina',
    description: APP_STORE_PROMO,
    url: `${SITE_URL}/ciromap`,
    siteName: 'AZUMBO',
    type: 'article',
    publishedTime: PUBLISH_DATE,
    modifiedTime: PUBLISH_DATE,
    authors: [...AUTHORS],
    images: [{ url: OG_IMAGE, width: 1200, height: 1200, alt: 'Ciro.Map app icon' }],
  },
  twitter: {
    card: 'summary',
    title: 'Ciro.Map — Digital platform for Ciro Marina',
    description: APP_STORE_PROMO,
    images: [OG_IMAGE],
  },
};

export default function CiroMapLandingPage() {
  const faqs = LANDING_COPY.en.faqs;

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: 'AZUMBO', path: '/en' },
            { name: 'Ciro.Map', path: '/ciromap' },
          ]),
          buildFaqPageSchema(`${SITE_URL}/ciromap`, 'en', faqs),
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Ciro.Map — Digital platform for Ciro Marina',
            url: `${SITE_URL}/ciromap`,
            description: APP_STORE_PROMO,
            datePublished: PUBLISH_DATE,
            dateModified: PUBLISH_DATE,
            inLanguage: 'en',
            isPartOf: { '@type': 'WebSite', name: 'AZUMBO', url: SITE_URL },
            publisher: {
              '@type': 'Organization',
              name: 'AZUMBO',
              url: SITE_URL,
            },
            author: AUTHORS.map((name) => ({
              '@type': 'Person',
              name,
            })),
          },
        ]}
      />
      <SoftwareApplicationJsonLd
        name="Ciro.Map"
        description={APP_STORE_PROMO}
        url={`${SITE_URL}/ciromap`}
        applicationCategory="TravelApplication"
        operatingSystem="iOS 17+"
        image={OG_IMAGE}
        offers={{ price: '0', priceCurrency: 'USD' }}
        datePublished={PUBLISH_DATE}
        authors={[...AUTHORS]}
      />
      <CiroMapLandingClient />
    </>
  );
}

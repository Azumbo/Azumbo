import type { Metadata } from 'next';
import { JsonLd, SoftwareApplicationJsonLd } from '../../components/seo/JsonLd';
import { APP_STORE_PROMO, LANDING_COPY } from '../../lib/ciromap-store-content';
import { SITE_URL, buildBreadcrumbSchema, buildFaqPageSchema } from '../../lib/seo';
import { CIRO_MAP } from './components';
import CiroMapLandingClient from './LandingClient';

const OG_IMAGE = `${SITE_URL}/ciromap/og-ciromap.jpg`;

export const metadata: Metadata = {
  title: 'Ciro.Map: Guide Cirò Marina',
  description: APP_STORE_PROMO,
  alternates: { canonical: `${SITE_URL}/ciromap` },
  other: {
    'apple-itunes-app': `app-id=${CIRO_MAP.appStoreId}`,
  },
  openGraph: {
    title: 'Ciro.Map: Guide Cirò Marina',
    description: APP_STORE_PROMO,
    url: `${SITE_URL}/ciromap`,
    siteName: 'AZUMBO',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 512, height: 512, alt: 'Ciro.Map app icon' }],
  },
  twitter: {
    card: 'summary',
    title: 'Ciro.Map: Guide Cirò Marina',
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
      />
      <CiroMapLandingClient />
    </>
  );
}

import type { Metadata } from 'next';
import { JsonLd, SoftwareApplicationJsonLd } from '../../components/seo/JsonLd';
import { ZUMI_LANDING } from '../../lib/zumi-store-content';
import {
  SITE_URL,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildPageMetadata,
} from '../../lib/seo';
import ZumiLandingClient from './LandingClient';

export const metadata: Metadata = buildPageMetadata({
  pathname: '/zumi',
  title: 'Zumi — Learn Italian with real songs',
  description:
    'Zumi helps you learn Italian through real music: synced karaoke, EN/RU translations, practice drills, and offline song packs. Free · iOS 14+ · Android 24+.',
});

export default function ZumiLandingPage() {
  const faqs = ZUMI_LANDING.en.faqs;

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: 'AZUMBO', path: '/en' },
            { name: 'Zumi', path: '/zumi' },
          ]),
          buildFaqPageSchema(`${SITE_URL}/zumi`, 'en', faqs),
        ]}
      />
      <SoftwareApplicationJsonLd
        name="Zumi: Learn Italian Songs"
        description="Learn Italian with real songs—karaoke, translations, practice, and offline packs."
        url={`${SITE_URL}/zumi`}
        applicationCategory="EducationalApplication"
        operatingSystem="iOS 14+, Android 24+"
        image={`${SITE_URL}/logo/Azumbo Logo no background small size.jpeg`}
        offers={{ price: '0', priceCurrency: 'EUR' }}
      />
      <ZumiLandingClient />
    </>
  );
}

import type { Metadata } from 'next';
import { JsonLd, SoftwareApplicationJsonLd } from '../../components/seo/JsonLd';
import { AINCLUSIVE_LANDING } from '../../lib/ainclusive-store-content';
import { getAppBySlug } from '../../lib/apps';
import {
  SITE_URL,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildPageMetadata,
} from '../../lib/seo';
import AInclusiveLandingClient from './LandingClient';

const AINCLUSIVE = getAppBySlug('ainclusive')!;

export const metadata: Metadata = {
  ...buildPageMetadata({
    pathname: '/ainclusive',
    title: 'AInclusive — Accessible lessons for every learner | AZUMBO',
    description:
      'AInclusive is live on the App Store. Turn any worksheet into an accessible lesson in under an hour for teachers, parents, and LSAs on iPhone, iPad, and Mac. English, Hebrew, and Italian.',
    imagePath: '/ainclusive/icon.png',
  }),
  other: {
    'apple-itunes-app': `app-id=${AINCLUSIVE.appStoreId}`,
  },
};

export default function AInclusiveLandingPage() {
  const faqs = AINCLUSIVE_LANDING.en.faqs;

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: 'AZUMBO', path: '/en' },
            { name: 'AInclusive', path: '/ainclusive' },
          ]),
          buildFaqPageSchema(`${SITE_URL}/ainclusive`, 'en', faqs),
        ]}
      />
      <SoftwareApplicationJsonLd
        name="AInclusive"
        description="Adapt worksheets into accessible learning materials for teachers, parents, and LSAs."
        url={`${SITE_URL}/ainclusive`}
        applicationCategory="EducationApplication"
        operatingSystem="iOS 17+, iPadOS 17+, macOS"
        image={`${SITE_URL}/ainclusive/icon.png`}
        offers={{ price: '0', priceCurrency: 'EUR' }}
        downloadUrl={AINCLUSIVE.appStoreUrl}
      />
      <AInclusiveLandingClient />
    </>
  );
}

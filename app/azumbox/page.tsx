import { JsonLd, SoftwareApplicationJsonLd } from '../../components/seo/JsonLd';
import {
  SITE_URL,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
} from '../../lib/seo';
import AzumboxClient from './AzumboxClient';

const AZUMBOX_DESCRIPTION =
  'Azumbox is a polished mobile game concept by AZUMBO with calm pacing, elegant visuals, and smart casual gameplay.';

const AZUMBOX_FAQ = [
  {
    question: 'What is Azumbox?',
    answer:
      'Azumbox is a minimal mobile game concept by AZUMBO focused on calm pacing, elegant visuals, and thoughtful casual mechanics.',
  },
  {
    question: 'Is Azumbox available on the App Store?',
    answer:
      'Azumbox is currently in development. Support the launch via crowdfunding while the studio prepares the public release.',
  },
  {
    question: 'Where can I watch the Azumbox demo?',
    answer: `Watch the Azumbox demo preview at ${SITE_URL}/en/videos/azumbox.`,
  },
] as const;

export default function AzumboxPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: 'AZUMBO', path: '/en' },
            { name: 'Azumbox', path: '/azumbox' },
          ]),
          buildFaqPageSchema(`${SITE_URL}/azumbox`, 'en', [...AZUMBOX_FAQ]),
        ]}
      />
      <SoftwareApplicationJsonLd
        name="Azumbox"
        description={AZUMBOX_DESCRIPTION}
        url={`${SITE_URL}/azumbox`}
        applicationCategory="GameApplication"
        operatingSystem="iOS, Android"
        image={`${SITE_URL}/assets/logo/azumbo-logo.png`}
        offers={{ price: '0', priceCurrency: 'EUR' }}
      />
      <AzumboxClient />
    </>
  );
}

import type { Metadata } from 'next';
import AzumboLanding from './[locale]/page';

const SITE_URL = 'https://azumbo.vercel.app';

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/en`,
  },
};

export default function Page() {
  return <AzumboLanding params={Promise.resolve({ locale: 'en' })} />;
}

import type { Metadata } from 'next';
import { baseMetadata, SITE_URL } from '../../lib/seo';

export const metadata: Metadata = {
  ...baseMetadata('/azumbox'),
  title: 'Azumbox — Minimal mobile game by AZUMBO',
  description:
    'Azumbox is a polished mobile game concept by AZUMBO with calm pacing, elegant visuals, and smart casual gameplay.',
  openGraph: {
    type: 'website',
    siteName: 'AZUMBO',
    url: `${SITE_URL}/azumbox`,
    title: 'Azumbox — Minimal mobile game by AZUMBO',
    description:
      'Azumbox is a polished mobile game concept by AZUMBO with calm pacing, elegant visuals, and smart casual gameplay.',
  },
};

export default function AzumboxLayout({ children }: { children: React.ReactNode }) {
  return children;
}

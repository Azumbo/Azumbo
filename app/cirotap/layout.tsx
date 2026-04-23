import type { Metadata } from 'next';
import { baseMetadata, SITE_URL } from '../../lib/seo';

export const metadata: Metadata = {
  ...baseMetadata('/cirotap'),
  title: 'Brasilena Tap: Cirò Marina',
  description:
    'Play Brasilena Tap in Cirò Marina: a multilingual mobile tap arcade game with a live AZUMBO leaderboard.',
  keywords: ['Brasilena Tap', 'Cirò Marina game', 'tap game', 'browser game', 'AZUMBO'],
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/cirotap`,
    title: 'Brasilena Tap: Cirò Marina',
    description:
      'Fast tap arcade in Italian, English, and Russian with server-stored records on AZUMBO.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brasilena Tap: Cirò Marina',
    description:
      'Tap quickly, avoid 🍕🍍, activate the lighthouse multiplier, and save your record online.'
  }
};

export default function CiroTapLayout({ children }: { children: React.ReactNode }) {
  return children;
}

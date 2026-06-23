import type { Metadata } from 'next';
import { buildPageMetadata } from '../../lib/seo';

export const metadata: Metadata = buildPageMetadata({
  pathname: '/frogger',
  title: 'Frogger Arcade Game Online',
  description: 'Hop across roads and rivers in AZUMBO Frogger with mobile-friendly controls and classic arcade gameplay.',
});

export default function FroggerLayout({ children }: { children: React.ReactNode }) {
  return children;
}

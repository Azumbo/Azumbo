import type { Metadata } from 'next';
import { baseMetadata } from '../../lib/seo';

export const metadata: Metadata = {
  ...baseMetadata('/frogger'),
  title: 'Frogger — Browser Arcade',
  description: 'Hop across roads and rivers in AZUMBO Frogger with mobile-friendly controls.'
};

export default function FroggerLayout({ children }: { children: React.ReactNode }) {
  return children;
}

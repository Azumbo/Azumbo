import type { Metadata } from 'next';
import { baseMetadata } from '../../lib/seo';

export const metadata: Metadata = {
  ...baseMetadata('/spaceinvaders'),
  title: 'Space Invaders — Browser Arcade',
  description: 'Defend Earth in AZUMBO Space Invaders, a polished browser-friendly take on a classic shooter.'
};

export default function SpaceInvadersLayout({ children }: { children: React.ReactNode }) {
  return children;
}

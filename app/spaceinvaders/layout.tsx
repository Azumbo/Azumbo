import type { Metadata } from 'next';
import { buildPageMetadata } from '../../lib/seo';

export const metadata: Metadata = buildPageMetadata({
  pathname: '/spaceinvaders',
  title: 'Space Invaders Arcade Game Online',
  description: 'Defend Earth in AZUMBO Space Invaders, a polished browser-friendly take on the classic arcade shooter.',
});

export default function SpaceInvadersLayout({ children }: { children: React.ReactNode }) {
  return children;
}

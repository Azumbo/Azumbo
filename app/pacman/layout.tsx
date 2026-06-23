import type { Metadata } from 'next';
import { buildPageMetadata } from '../../lib/seo';

export const metadata: Metadata = buildPageMetadata({
  pathname: '/pacman',
  title: 'Pac-Man Arcade Game Online',
  description: 'Play AZUMBO Pac-Man in your browser with responsive controls, retro arcade pacing, and mobile-friendly gameplay.',
});

export default function PacManLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';
import { baseMetadata } from '../../lib/seo';

export const metadata: Metadata = {
  ...baseMetadata('/pacman'),
  title: 'PacMan — Browser Arcade',
  description: 'Play AZUMBO PacMan in your browser with responsive controls and retro arcade pacing.'
};

export default function PacManLayout({ children }: { children: React.ReactNode }) {
  return children;
}

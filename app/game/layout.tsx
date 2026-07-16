import type { Metadata } from 'next';
import { noindexRobots } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'Game (demo)',
  robots: noindexRobots,
};

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return children;
}

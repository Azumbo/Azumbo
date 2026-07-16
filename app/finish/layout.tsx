import type { Metadata } from 'next';
import { noindexRobots } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'Finish (demo)',
  robots: noindexRobots,
};

export default function FinishLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';
import { noindexRobots } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'Register (demo)',
  robots: noindexRobots,
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}

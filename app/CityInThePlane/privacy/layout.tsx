import type { Metadata } from 'next';
import { baseMetadata } from '../../../lib/seo';

export const metadata: Metadata = {
  ...baseMetadata('/cityintheplane/privacy'),
  title: 'City in the Plane Privacy Policy',
  description: 'Privacy policy for AZUMBO City in the Plane.'
};

export default function CityInThePlanePrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}

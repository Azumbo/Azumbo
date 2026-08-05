import type { Metadata } from 'next';
import { SITE_URL } from '../../../lib/seo';
import AInclusiveAccessibilityClient from '../AccessibilityClient';

export const metadata: Metadata = {
  title: 'AInclusive Accessibility',
  description:
    'Accessibility support for AInclusive on iPhone and iPad: Differentiate Without Color Alone, Reduced Motion, and our roadmap for VoiceOver, Larger Text, and Dark Interface. English, Hebrew, Italian.',
  alternates: {
    canonical: `${SITE_URL}/ainclusive/accessibility`,
  },
  openGraph: {
    title: 'AInclusive Accessibility',
    description: 'How AInclusive supports Apple accessibility features.',
    url: `${SITE_URL}/ainclusive/accessibility`,
    siteName: 'AZUMBO',
    type: 'website',
    images: [{ url: `${SITE_URL}/ainclusive/icon.png`, alt: 'AInclusive' }],
  },
};

export default function AInclusiveAccessibilityPage() {
  return <AInclusiveAccessibilityClient />;
}

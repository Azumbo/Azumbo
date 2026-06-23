import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GameFX from '../components/GameFX';
import { SITE_URL, baseMetadata } from '../lib/seo';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '600', '800'],
  variable: '--font-inter',
});

const defaultTitle = 'AZUMBO | Indie Mobile Game Studio';
const defaultDescription =
  'US-focused indie game studio crafting mobile and Nintendo Switch games with prototype sprints, publishing support, and platform ports.';

export const metadata: Metadata = {
  ...baseMetadata('/en'),
  title: {
    default: defaultTitle,
    template: '%s | AZUMBO',
  },
  description: defaultDescription,
  keywords: [
    'indie game studio',
    'mobile game development',
    'Nintendo Switch porting',
    'game prototype sprint',
    'casual games USA',
    'AZUMBO',
  ],
  openGraph: {
    type: 'website',
    siteName: 'AZUMBO',
    url: `${SITE_URL}/en`,
    locale: 'en_US',
    alternateLocale: ['it_IT', 'ru_RU'],
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${SITE_URL}/logo/Azumbo Logo no background small size.jpeg`,
        alt: 'AZUMBO indie game studio logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [`${SITE_URL}/logo/Azumbo Logo no background small size.jpeg`],
  },
  icons: { icon: '/logo/fav.ico' },
  verification: {
    google: 'ctRRehT2QTAGg3R2EgpV1C1mGB84yK7K9hfsoujxSu0',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className="h-full">
      <body
        className={`${inter.variable} min-h-full bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <GameFX />
        {children}
      </body>
    </html>
  );
}

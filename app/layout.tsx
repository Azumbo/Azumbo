import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GameFX from '../components/GameFX';
import { SITE_URL, baseMetadata } from '../lib/seo';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '600', '800'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  ...baseMetadata('/en'),
  title: {
    default: 'AZUMBO | Minimalist Indie Games & Chic Escapes',
    template: '%s | AZUMBO'
  },
  description:
    'Discover curated, high-quality indie games designed for style, intelligent humor, and mental resilience.',
  keywords: [
    'indie games',
    'minimalist games',
    'casual games',
    'mental resilience',
    'AZUMBO'
  ],
  openGraph: {
    type: 'website',
    siteName: 'AZUMBO',
    url: `${SITE_URL}/en`,
    title: 'AZUMBO | Minimalist Indie Games & Chic Escapes',
    description:
      'Discover curated, high-quality indie games designed for style, intelligent humor, and mental resilience.'
  },
  icons: { icon: '/logo/fav.ico' },
  verification: {
    google: 'ctRRehT2QTAGg3R2EgpV1C1mGB84yK7K9hfsoujxSu0',
    yandex: 'YOUR_YANDEX_CODE'
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} min-h-full bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <GameFX />
        {children}
      </body>
    </html>
  );
}

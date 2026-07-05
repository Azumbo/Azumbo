import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';
import './globals.css';
import GameFX from '../components/GameFX';
import { LOCALE_REQUEST_HEADER, SITE_URL, baseMetadata, resolveHtmlLang } from '../lib/seo';

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
  themeColor: '#0A0A0C',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const htmlLang = resolveHtmlLang(headers().get(LOCALE_REQUEST_HEADER));

  return (
    <html lang={htmlLang} className="h-full">
      <body className={`${inter.variable} min-h-full bg-obsidian text-ink-primary antialiased`}>
        <GameFX />
        {children}
      </body>
    </html>
  );
}

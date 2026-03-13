import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import GameFX from '../components/GameFX';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '600', '800'],
  variable: '--font-inter'
});

type Locale = 'en' | 'ru' | 'it';

const SITE_URL = 'https://azumbo.vercel.app';

const SEO_BY_LOCALE: Record<Locale, { title: string; description: string; keywords: string[] }> = {
  en: {
    title: 'AZUMBO | Minimalist Indie Games & Chic Escapes',
    description:
      'Discover curated, high-quality indie games designed for style, intelligent humor, and mental resilience.',
    keywords: ['indie games', 'minimalist games', 'casual games', 'mental resilience', 'AZUMBO']
  },
  ru: {
    title: 'AZUMBO | Минималистичные инди-игры и стильный отдых',
    description:
      'Откройте для себя качественные инди-игры, созданные для эстетики, тонкого юмора и ментальной перезагрузки.',
    keywords: ['инди-игры', 'минимализм', 'казуальные игры', 'ментальная перезагрузка', 'AZUMBO']
  },
  it: {
    title: 'AZUMBO | Giochi Indie Minimalisti e Fughe Chic',
    description:
      'Scopri giochi indie di alta qualità progettati per stile, umorismo intelligente e benessere mentale.',
    keywords: ['giochi indie', 'giochi minimalisti', 'giochi casual', 'benessere mentale', 'AZUMBO']
  }
};

const isLocale = (value?: string): value is Locale => value === 'en' || value === 'ru' || value === 'it';

export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : 'en';
  const seo = SEO_BY_LOCALE[activeLocale];
  const localePath = activeLocale === 'en' ? '/en' : `/${activeLocale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `${SITE_URL}/`,
      languages: {
        en: `${SITE_URL}/en`,
        ru: `${SITE_URL}/ru`,
        it: `${SITE_URL}/it`,
        'x-default': `${SITE_URL}/`
      }
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}${localePath}`,
      siteName: 'AZUMBO',
      title: seo.title,
      description: seo.description,
      locale: activeLocale
    },
    icons: { icon: '/favicon.ico' },
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#ffffff' },
      { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
    ]
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale?: string }> }>) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : 'en';

  return (
    <html lang={activeLocale} className="h-full">
      <body
        className={`${inter.variable} min-h-full bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <GameFX />
        {children}
      </body>
    </html>
  );
}

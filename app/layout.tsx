import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import GameFX from '../components/GameFX';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400','600','800'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'AZUMBO — Indie Game Studio',
  description: 'Casual, fast and funny games for Android, iOS and Nintendo Switch.',
  metadataBase: new URL('https://azumbo.vercel.app'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://azumbo.vercel.app/',
    siteName: 'AZUMBO',
    title: 'AZUMBO — Indie Game Studio',
    description: 'Casual, fast and funny games for Android, iOS and Nintendo Switch.'
  },
  icons: { icon: '/favicon.ico' },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)',  color: '#0a0a0a' }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} min-h-full bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100`}>
        <GameFX />
        {children}
      </body>
    </html>
  );
}

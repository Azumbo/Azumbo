import './globals.css';
import { Press_Start_2P } from 'next/font/google';
import type { ReactNode } from 'react';
import SoundToggle from '../components/SoundToggle';

const pressStart = Press_Start_2P({ 
  subsets: ['latin'], 
  weight: '400',
  variable: '--font-press-start' 
});

export const metadata = {
  title: 'Pixel Quest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover'
  },
  manifest: '/manifest.json',
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Pixel Quest'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="touch-manipulation">
      <head>
        <meta charSet="UTF-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Pixel Quest" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className={`${pressStart.className} overscroll-none`}>
        <SoundToggle />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.body.addEventListener('touchmove', function(e) {
                if (!e.target.classList.contains('scrollable')) {
                  e.preventDefault();
                }
              }, { passive: false });
              
              function setViewportProperty() {
                let vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', vh + 'px');
              }
              setViewportProperty();
              window.addEventListener('resize', setViewportProperty);
            `
          }}
        />
      </body>
    </html>
  );
}

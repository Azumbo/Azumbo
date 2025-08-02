import './globals.css';
import { Press_Start_2P } from 'next/font/google';
import type { ReactNode } from 'react';
import SoundToggle from '../components/SoundToggle';

const pressStart = Press_Start_2P({ subsets: ['latin'], weight: '400', variable: '--font-press-start' });

export const metadata = {
  title: 'Commander Mola Mola Pixel Quest',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={pressStart.className}>
        <SoundToggle />
        {children}
      </body>
    </html>
  );
}
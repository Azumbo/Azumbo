import './globals.css';
import React from 'react';
import { Inter, Press_Start_2P } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  weight: '400',
});

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start',
});

export const metadata = {
  title: 'AZUMBO',
  description: 'Indie game studio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${pressStart.variable}`}> 
      <body>{children}</body>
    </html>
  );
}

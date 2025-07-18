import './globals.css';
import React from 'react';
import { Press_Start_2P } from 'next/font/google';

const pressStart = Press_Start_2P({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-press-start',
  weight: '400',
});

export const metadata = {
  title: 'AZUMBO',
  description: 'Indie game studio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pressStart.variable}>
      <body>{children}</body>
    </html>
  );
}

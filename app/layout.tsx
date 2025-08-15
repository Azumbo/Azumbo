import './globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white text-neutral-900 antialiased selection:bg-black selection:text-white dark:bg-neutral-950 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}

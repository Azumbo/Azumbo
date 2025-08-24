import { useEffect } from 'react';
import Head from 'next/head';

// Page that displays the mini game and redirects to the raw HTML on mobile devices
export default function CornettoClicker() {
  useEffect(() => {
    // On mobile devices open the raw html page
    if (typeof window !== 'undefined') {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = '/cornettoclicker/game.html';
      }
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="tiktok-developers-site-verification"
          content="xALZu5Vzk4n3cZx80f6uIEpTEBZIs1MS"
        />
      </Head>
      <iframe
        src="/cornettoclicker/game.html"
        title="Cornetto Clicker"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </>
  );
}

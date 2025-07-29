import Head from 'next/head';
import { useEffect } from 'react';
import IphoneWrapper from '../components/IphoneWrapper';

export default function CornettoClicker() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile =
        window.innerWidth < 768 || /Android|iPhone/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.assign('/cornettoclicker/game.html');
      }
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700">
      <Head>
        <title>Cornetto Clicker - Azumbo</title>
      </Head>
      <IphoneWrapper src="/cornettoclicker/game.html" />
    </div>
  );
}

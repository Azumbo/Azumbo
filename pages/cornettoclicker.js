import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function IphoneWrapper({ src }) {
  return (
    <div className="relative w-[500px] h-[1000px]">
      <iframe
        src={src}
        className="absolute top-[52px] left-[32px] w-[436px] h-[915px] rounded-[40px] z-0"
        frameBorder="0"
        title="Cornetto Clicker Game"
      />
      <img
        src="/cornettoclicker/iphone-frame.png"
        alt="iPhone Frame"
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
      />
    </div>
  );
}

export default function CornettoClicker() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ua = navigator.userAgent || navigator.vendor || window.opera;
      const isMobile = /android|iphone|ipad|ipod/i.test(ua) || window.innerWidth < 600;
      if (isMobile && window.location.pathname !== '/cornettoclicker/game.html') {
        router.replace('/cornettoclicker/game.html');
      }
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700">
      <Head>
        <title>Cornetto Clicker - Azumbo</title>
      </Head>

      <IphoneWrapper src="/cornettoclicker/game.html" />
    </div>
  );
}

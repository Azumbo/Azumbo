import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function CornettoClicker() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Client-side mobile detection
    if (window.innerWidth < 600) {
      router.replace('/cornettoclicker/game.html');
    } else {
      setIsMobile(false);
    }
  }, []);

  if (isMobile) return null; // Will redirect

  return (
    <div className="container">
      <Head>
        <title>Cornetto Clicker - Azumbo</title>
      </Head>

      <div className="iphone-wrapper">
        <img
          src="/cornettoclicker/iphone-frame.png"
          alt="iPhone 16 Pro Frame"
          className="iphone-frame"
        />
        <iframe
          src="/cornettoclicker/game.html"
          className="game-iframe"
          title="Cornetto Clicker Game"
        />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #7B2FF7, #512da8);
        }

        .iphone-wrapper {
          position: relative;
          width: 500px;
          height: 1000px;
        }

        .iphone-frame {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }

        .game-iframe {
          position: absolute;
          top: 35px;
          left: 35px;
          width: 430px;
          height: 932px;
          z-index: 1;
          border: none;
          border-radius: 40px;
          overflow: hidden;
        }

        @media (max-width: 600px) {
          .container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

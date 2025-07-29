import Head from 'next/head';

export default function CornettoClicker() {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ background: 'linear-gradient(135deg, #7B2FF7, #512da8)' }}
    >
      <Head>
        <title>Cornetto Clicker - Azumbo</title>
      </Head>

      <div className="relative w-[500px] h-[1000px]">
        <iframe
          src="/cornettoclicker/game.html"
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
    </div>
  );
}

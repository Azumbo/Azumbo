import Head from 'next/head';

// Responsive page that embeds the mini game for both mobile and desktop.
export default function CornettoClicker() {
  return (
    <>
      <Head>
        <meta
          name="tiktok-developers-site-verification"
          content="xALZu5Vzk4n3cZx80f6uIEpTEBZIs1MS"
        />
      </Head>
      <div
        style={{
          width: '100%',
          minHeight: '100dvh',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <iframe
          src="/cornettoclicker/game.html"
          title="Cornetto Clicker"
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        />
      </div>
    </>
  );
}

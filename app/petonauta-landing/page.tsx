'use client';
import Head from 'next/head';
import Link from 'next/link';
import './style.css';

export default function PetonautaLanding() {
  return (
    <>
      <Head>
        <title>Petonauta Afozio</title>
        <meta name="description" content="Petonauta Afozio game landing" />
      </Head>
      <div className="petonauta-landing">
        <h1>🚀 Petonauta Afozio</h1>
        <p>Join the cosmic adventure – coming soon!</p>
        <footer>
          <Link href="/petonauta/privacy.html">Privacy Policy</Link>
          <span> | </span>
          <Link href="/petonauta/terms.html">Terms of Service</Link>
        </footer>
      </div>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './ciromap.module.css';
import { SITE_URL } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'Ciro.Map — Cirò Marina Travel Guide',
  description: 'Ciro.Map is an iOS travel guide for Cirò Marina, Calabria, Italy, with maps, points of interest, routes, and a loyalty wallet.',
  alternates: { canonical: `${SITE_URL}/CiroMap` },
  openGraph: {
    title: 'Ciro.Map — Cirò Marina Travel Guide',
    description: 'Maps, points of interest, routes, and a loyalty wallet for Cirò Marina, Calabria.',
    url: `${SITE_URL}/CiroMap`,
    siteName: 'AZUMBO',
    type: 'website',
  },
};

export default function CiroMapLandingPage() {
  return (
    <div className={styles.shell}>
      <div className={styles.creamBlob} />
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/CiroMap" className={styles.brand}><span className={styles.mark}>🗺️</span><span>Ciro.Map</span></Link>
          <nav className={styles.nav} aria-label="Ciro.Map navigation"><Link href="/en">Azumbo</Link><Link href="/CiroMap/privacy">Privacy Policy</Link><a href="mailto:privacy@azumbo.com">Contact</a></nav>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.kicker}>Azumbo · Chic Escape</p>
          <h1 className={styles.title}>Ciro.Map</h1>
          <p className={styles.subtitle}>A polished iOS travel guide for Cirò Marina, Calabria, with nearby places, routes, categories, and a private loyalty wallet.</p>
          <div className={styles.ctaRow}>
            <Link className={styles.primaryCta} href="/CiroMap/privacy">Read Privacy Policy</Link>
            <span className={styles.badge} aria-label="App Store badge placeholder">Download on the App Store · Soon</span>
          </div>
        </section>
        <section className={styles.card} aria-labelledby="features-title">
          <p className={styles.kicker}>iOS 17+ · UIKit · MapKit</p>
          <h2 id="features-title" className="mt-3 text-3xl font-extrabold tracking-tight">Cirò Marina, beautifully mapped.</h2>
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}><strong>Discover</strong>Firebase-powered points of interest with categories and distance sorting.</div>
            <div className={styles.metaItem}><strong>Navigate</strong>Open routes from the map using location only when you grant access.</div>
            <div className={styles.metaItem}><strong>Wallet</strong>Store loyalty barcodes in Keychain and covers locally on your device.</div>
            <div className={styles.metaItem}><strong>Free tier</strong>AdMob interstitials can be removed with a one-time StoreKit 2 purchase.</div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>© 2026 Azumbo · <Link href="/CiroMap/privacy">Ciro.Map Privacy</Link></footer>
    </div>
  );
}

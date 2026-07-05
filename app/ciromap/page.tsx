import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AppStoreButton, CIRO_MAP } from './components';
import styles from './ciromap.module.css';
import { SITE_URL } from '../../lib/seo';

const OG_IMAGE = `${SITE_URL}/ciromap/og-ciromap.jpg`;

export const metadata: Metadata = {
  title: 'Ciro.Map — Cirò Marina Travel Guide',
  description:
    'Ciro.Map is an iOS travel guide for Cirò Marina, Calabria, Italy — available on the App Store with maps, points of interest, routes, and a loyalty wallet.',
  alternates: { canonical: `${SITE_URL}/ciromap` },
  openGraph: {
    title: 'Ciro.Map — Cirò Marina Travel Guide',
    description: 'Maps, points of interest, routes, and a loyalty wallet for Cirò Marina, Calabria. Download on the App Store.',
    url: `${SITE_URL}/ciromap`,
    siteName: 'AZUMBO',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 512, height: 512, alt: 'Ciro.Map app icon' }],
  },
  twitter: {
    card: 'summary',
    images: [OG_IMAGE],
  },
};

export default function CiroMapLandingPage() {
  return (
    <div className={styles.shell}>
      <div className={styles.creamBlob} />
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/ciromap" className={styles.brand}>
            <Image
              src="/ciromap/app-icon-192.png"
              alt="Ciro.Map app icon"
              width={38}
              height={38}
              className={styles.appIcon}
              priority
            />
            <span>Ciro.Map</span>
          </Link>
          <nav className={styles.nav} aria-label="Ciro.Map navigation">
            <Link href="/en">Azumbo</Link>
            <Link href="/ciromap/privacy">Privacy Policy</Link>
            <a href="mailto:azumbogames@gmail.com">Contact</a>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.hero}>
          <Image
            src="/ciromap/app-icon-192.png"
            alt=""
            width={88}
            height={88}
            className={styles.heroIcon}
            priority
            aria-hidden
          />
          <p className={styles.kicker}>Azumbo · Chic Escape · iOS</p>
          <h1 className={styles.title}>Ciro.Map</h1>
          <p className={styles.subtitle}>
            A polished iOS travel guide for Cirò Marina, Calabria, with nearby places, routes, categories, and a private loyalty wallet.
          </p>
          <div className={styles.ctaRow}>
            <AppStoreButton />
            <Link className={styles.secondaryCta} href="/ciromap/privacy">
              Read Privacy Policy
            </Link>
          </div>
          <p className={styles.storeMeta}>
            Available on the App Store · App ID {CIRO_MAP.appStoreId} · Bundle ID {CIRO_MAP.bundleId}
          </p>
        </section>
        <section className={styles.card} aria-labelledby="features-title">
          <p className={styles.kicker}>iOS 17+ · UIKit · MapKit</p>
          <h2 id="features-title" className="mt-3 text-3xl font-extrabold tracking-tight">
            Cirò Marina, beautifully mapped.
          </h2>
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <strong>Discover</strong>Firebase-powered points of interest with categories and distance sorting.
            </div>
            <div className={styles.metaItem}>
              <strong>Navigate</strong>Open routes from the map using location only when you grant access.
            </div>
            <div className={styles.metaItem}>
              <strong>Wallet</strong>Store loyalty barcodes in Keychain and covers locally on your device.
            </div>
            <div className={styles.metaItem}>
              <strong>Free tier</strong>AdMob interstitials can be removed with a one-time StoreKit 2 purchase.
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        © 2026 Azumbo · <Link href="/ciromap/privacy">Ciro.Map Privacy</Link>
      </footer>
    </div>
  );
}

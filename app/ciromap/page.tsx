import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  APP_INFO,
  APP_STORE_INTRO,
  APP_STORE_PROMO,
  APP_STORE_SUBTITLE,
  FEATURES,
  WHY_CIROMAP,
  WHATS_NEW,
} from '../../lib/ciromap-store-content';
import { SITE_URL } from '../../lib/seo';
import { AppStoreButton, CIRO_MAP } from './components';
import ScreenshotShowcase from './ScreenshotShowcase';
import styles from './ciromap.module.css';

const OG_IMAGE = `${SITE_URL}/ciromap/og-ciromap.jpg`;

export const metadata: Metadata = {
  title: 'Ciro.Map: Guide Cirò Marina',
  description: APP_STORE_PROMO,
  alternates: { canonical: `${SITE_URL}/ciromap` },
  openGraph: {
    title: 'Ciro.Map: Guide Cirò Marina',
    description: APP_STORE_PROMO,
    url: `${SITE_URL}/ciromap`,
    siteName: 'AZUMBO',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 512, height: 512, alt: 'Ciro.Map app icon' }],
  },
  twitter: {
    card: 'summary',
    title: 'Ciro.Map: Guide Cirò Marina',
    description: APP_STORE_PROMO,
    images: [OG_IMAGE],
  },
};

export default function CiroMapLandingPage() {
  return (
    <div className={styles.shell}>
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
          <p className={styles.kicker}>Travel · Cirò Marina, Calabria · iOS 17+</p>
          <h1 className={styles.title}>Ciro.Map: Guide Cirò Marina</h1>
          <p className={styles.subtitleStrong}>{APP_STORE_SUBTITLE}</p>
          <p className={styles.subtitle}>{APP_STORE_PROMO}</p>
          <div className={styles.ctaRow}>
            <AppStoreButton />
            <a
              className={styles.secondaryCta}
              href="/ciromap/flyer.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flyer (print &amp; PDF)
            </a>
            <Link className={styles.secondaryCta} href="/ciromap/privacy">
              Privacy Policy
            </Link>
          </div>
          <p className={styles.storeMeta}>
            Free on the App Store · Version {APP_INFO.version} · App ID {CIRO_MAP.appStoreId}
          </p>
        </section>

        <ScreenshotShowcase />

        <section className={styles.card} aria-labelledby="about-title">
          <p className={styles.kicker}>Why Ciro.Map</p>
          <h2 id="about-title" className={styles.sectionTitle}>
            Your all-in-one local companion on the Ionian coast.
          </h2>
          {APP_STORE_INTRO.map((paragraph) => (
            <p key={paragraph} className={styles.bodyText}>
              {paragraph}
            </p>
          ))}
          <p className={styles.bodyText}>{WHY_CIROMAP}</p>
        </section>

        <section className={styles.sectionWide} aria-labelledby="features-title">
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>Here&apos;s what you can do</p>
            <h2 id="features-title" className={styles.sectionTitle}>
              Everything local, one tap away.
            </h2>
          </div>
          <div className={styles.featureGrid}>
            {FEATURES.map((feature) => (
              <article key={feature.title} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureText}>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.card} aria-labelledby="whats-new-title">
          <div className={styles.whatsNewHeader}>
            <div>
              <p className={styles.kicker}>What&apos;s New</p>
              <h2 id="whats-new-title" className={styles.sectionTitle}>
                Version {APP_INFO.version}
              </h2>
            </div>
            <span className={styles.versionBadge}>Latest</span>
          </div>
          <ul className={styles.whatsNewList}>
            {WHATS_NEW.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.infoGrid} aria-labelledby="info-title">
          <h2 id="info-title" className={styles.visuallyHidden}>
            App information
          </h2>
          <article className={styles.infoCard}>
            <span className={styles.infoLabel}>Category</span>
            <strong>{APP_INFO.category}</strong>
          </article>
          <article className={styles.infoCard}>
            <span className={styles.infoLabel}>Compatibility</span>
            <strong>{APP_INFO.minOS}+</strong>
          </article>
          <article className={styles.infoCard}>
            <span className={styles.infoLabel}>Languages</span>
            <strong>{APP_INFO.languages}</strong>
          </article>
          <article className={styles.infoCard}>
            <span className={styles.infoLabel}>Size</span>
            <strong>{APP_INFO.size}</strong>
          </article>
          <article className={styles.infoCard}>
            <span className={styles.infoLabel}>Rating</span>
            <strong>
              {APP_INFO.rating} ★ ({APP_INFO.ratingCount})
            </strong>
          </article>
          <article className={styles.infoCard}>
            <span className={styles.infoLabel}>In-App Purchase</span>
            <strong>{APP_INFO.iap}</strong>
          </article>
        </section>

        <section className={styles.downloadPanel} aria-labelledby="download-title">
          <div>
            <p className={styles.kicker}>Join the local community</p>
            <h2 id="download-title" className={styles.sectionTitle}>
              Download Ciro.Map now.
            </h2>
            <p className={styles.bodyText}>
              Loved by travellers and residents who call Cirò Marina home. Experience the Ionian coast like never
              before — one tap, everything local.
            </p>
          </div>
          <div className={styles.ctaRow}>
            <AppStoreButton />
            <a
              className={styles.secondaryCta}
              href="/ciromap/flyer.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open flyer with QR code
            </a>
          </div>
          <p className={styles.storeMeta}>
            {APP_INFO.copyright} · {APP_INFO.seller} · Bundle ID {CIRO_MAP.bundleId}
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        © 2026 Azumbo · <Link href="/ciromap/privacy">Ciro.Map Privacy</Link>
      </footer>
    </div>
  );
}

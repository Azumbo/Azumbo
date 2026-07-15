import Image from 'next/image';
import Link from 'next/link';
import styles from './ciromap.module.css';

import { apps, CONTACT_EMAIL as STUDIO_CONTACT_EMAIL } from '../../lib/apps';

export const CONTACT_EMAIL = STUDIO_CONTACT_EMAIL;

export const CIRO_MAP = apps.find((app) => app.slug === 'ciromap')!;
/** Canonical App Store product URL (Apple marketing guidelines). */
export const APP_STORE_URL = `https://apps.apple.com/app/id${CIRO_MAP.appStoreId}`;

export function AppStoreBadge({ className }: { className?: string }) {
  return (
    <a
      className={className ?? styles.appStoreBadgeLink}
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Ciro.Map on the App Store"
    >
      {/* Official Apple artwork — do not restyle beyond size/clearspace. */}
      <img
        className={styles.appStoreBadge}
        src="/ciromap/badges/download-on-the-app-store.svg"
        alt="Download on the App Store"
        width={150}
        height={50}
        decoding="async"
      />
    </a>
  );
}

/** @deprecated Use AppStoreBadge — kept for compact text CTAs if needed. */
export function AppStoreButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={styles.primaryCta}
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Ciro.Map on the App Store"
    >
      {compact ? 'App Store' : 'Download on the App Store'}
    </a>
  );
}

export function AppStoreGetCard() {
  return (
    <div className={styles.getAppCard}>
      <div className={styles.getAppCopy}>
        <p className={styles.kicker}>Get the app</p>
        <h2 className={styles.getAppTitle}>Download on the App Store</h2>
        <p className={styles.getAppLead}>
          Tap the official badge on your iPhone or iPad, or scan the QR code with Camera.
        </p>
        <AppStoreBadge />
      </div>
      <a
        className={styles.qrLink}
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Ciro.Map on the App Store via QR destination"
      >
        <Image
          src="/ciromap/badges/app-store-qr.png"
          alt="QR code linking to Ciro.Map on the App Store"
          width={148}
          height={148}
          className={styles.qrImage}
          priority
        />
        <span className={styles.qrCaption}>Scan to download</span>
      </a>
    </div>
  );
}

export function CiroMapNav() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/ciromap" className={styles.brand}>
          <span>Ciro.Map</span>
        </Link>
        <nav className={styles.nav} aria-label="Ciro.Map navigation">
          <Link href="/en">Azumbo</Link>
          <Link href="/ciromap/privacy">Privacy Policy</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import styles from './ciromap.module.css';

import { apps, CONTACT_EMAIL as STUDIO_CONTACT_EMAIL } from '../../lib/apps';
import type { LandingCopy } from '../../lib/ciromap-store-content';
import { LANDING_COPY } from '../../lib/ciromap-store-content';

export const CONTACT_EMAIL = STUDIO_CONTACT_EMAIL;

export const CIRO_MAP = apps.find((app) => app.slug === 'ciromap')!;
/** Canonical App Store product URL (Apple marketing guidelines). */
export const APP_STORE_URL = `https://apps.apple.com/app/id${CIRO_MAP.appStoreId}`;

export function AppStoreBadge({
  className,
  ariaLabel = LANDING_COPY.en.badgeAria,
  alt = 'Download on the App Store',
}: {
  className?: string;
  ariaLabel?: string;
  alt?: string;
}) {
  return (
    <a
      className={className ?? styles.appStoreBadgeLink}
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {/* Official Apple artwork — do not restyle beyond size/clearspace. */}
      <img
        className={styles.appStoreBadge}
        src="/ciromap/badges/download-on-the-app-store.svg"
        alt={alt}
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
      aria-label={LANDING_COPY.en.badgeAria}
    >
      {compact ? 'App Store' : 'Download on the App Store'}
    </a>
  );
}

export function AppStoreGetCard({ copy = LANDING_COPY.en }: { copy?: LandingCopy }) {
  return (
    <div className={styles.getAppCard}>
      <div className={styles.getAppCopy}>
        <p className={styles.kicker}>{copy.getAppKicker}</p>
        <h2 className={styles.getAppTitle}>{copy.getAppTitle}</h2>
        <p className={styles.getAppLead}>{copy.getAppLead}</p>
        <AppStoreBadge ariaLabel={copy.badgeAria} alt={copy.badgeAria} />
      </div>
      <a
        className={styles.qrLink}
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={copy.qrAria}
      >
        <Image
          src="/ciromap/badges/app-store-qr.png"
          alt={copy.qrAria}
          width={148}
          height={148}
          className={styles.qrImage}
          priority
        />
        <span className={styles.qrCaption}>{copy.qrCaption}</span>
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
        <nav className={styles.nav} aria-label={LANDING_COPY.en.navAria}>
          <Link href="/en">Azumbo</Link>
          <Link href="/ciromap/privacy">{LANDING_COPY.en.privacy}</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{LANDING_COPY.en.contact}</a>
        </nav>
      </div>
    </header>
  );
}

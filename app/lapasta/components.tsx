import Link from 'next/link';
import styles from './lapasta.module.css';

import { apps, CONTACT_EMAIL as STUDIO_CONTACT_EMAIL } from '../../lib/apps';

export const CONTACT_EMAIL = STUDIO_CONTACT_EMAIL;

export const LA_PASTA = apps.find((app) => app.slug === 'lapasta')!;
export const APP_STORE_URL = LA_PASTA.appStoreUrl;

export function LaPastaNav() {
  return (
    <header className={styles.nav}>
      <div className={styles.navInner}>
        <Link className={styles.brand} href="/lapasta" aria-label="La Pasta home">
          <span className={styles.brandMark} aria-hidden="true">🍝</span>
          <span>La Pasta</span>
        </Link>
        <nav className={styles.navLinks} aria-label="La Pasta navigation">
          <Link href="/lapasta">App</Link>
          <Link href="/lapasta/privacy">Privacy</Link>
          <Link href="/lapasta/support">Support</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export function LaPastaFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerInner}`}>
        <p className={styles.sectionText}>© 2026 Azumbo Games. La Pasta is crafted for iPhone and iPad.</p>
        <nav className={styles.footerLinks} aria-label="Footer navigation">
          <Link href="/lapasta/privacy">Privacy</Link>
          <Link href="/lapasta/support">Support</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
        </nav>
      </div>
    </footer>
  );
}

/** Official Apple badge — Marketing Resources and Identity Guidelines. */
const APP_STORE_BADGE_ALT = 'Download on the App Store';

export function AppStoreButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={compact ? styles.appStoreBadgeLinkCompact : styles.appStoreBadgeLink}
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download La Pasta on the App Store"
    >
      {/* Official badge artwork — do not modify, angle, or animate. */}
      <img
        className={styles.appStoreBadge}
        src="/lapasta/download-on-the-app-store.svg"
        alt={APP_STORE_BADGE_ALT}
        width={compact ? 120 : 156}
        height={compact ? 40 : 52}
        decoding="async"
      />
    </a>
  );
}

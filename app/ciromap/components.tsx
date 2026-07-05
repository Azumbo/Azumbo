import Link from 'next/link';
import styles from './ciromap.module.css';

import { apps, CONTACT_EMAIL as STUDIO_CONTACT_EMAIL } from '../../lib/apps';

export const CONTACT_EMAIL = STUDIO_CONTACT_EMAIL;

export const CIRO_MAP = apps.find((app) => app.slug === 'ciromap')!;
export const APP_STORE_URL = CIRO_MAP.appStoreUrl;

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

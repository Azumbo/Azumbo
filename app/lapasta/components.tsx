import Link from 'next/link';
import styles from './lapasta.module.css';

export const APP_STORE_URL = 'https://apps.apple.com/app/id6774466615';
export const CONTACT_EMAIL = 'azumbogames@gmail.com';

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
        <p className={styles.sectionText}>© 2026 AZUMBO. La Pasta is crafted for iPhone and iPad.</p>
        <nav className={styles.footerLinks} aria-label="Footer navigation">
          <Link href="/lapasta/privacy">Privacy</Link>
          <Link href="/lapasta/support">Support</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export function AppStoreButton({ compact = false }: { compact?: boolean }) {
  return (
    <a className={styles.cta} href={APP_STORE_URL} aria-label="Download La Pasta on the App Store">
      {compact ? 'App Store' : 'Download on the App Store'}
    </a>
  );
}

'use client';

import Link from 'next/link';
import {
  ZUMI_LOCALES,
  ZUMI_SUPPORT_EMAIL,
  type ZumiLandingCopy,
  type ZumiLocale,
} from '../../lib/zumi-store-content';
import styles from './zumi.module.css';

type ChromeProps = {
  copy: ZumiLandingCopy;
  locale: ZumiLocale;
  onLocaleChange: (locale: ZumiLocale) => void;
};

export function ZumiNav({ copy, locale, onLocaleChange }: ChromeProps) {
  return (
    <header className={styles.nav}>
      <div className={styles.navInner}>
        <Link className={styles.brand} href="/zumi" aria-label={copy.brandHomeAria}>
          <span className={styles.brandMark} aria-hidden="true">
            Z
          </span>
          <span>Zumi</span>
        </Link>
        <div className={styles.navActions}>
          <div className={styles.langSwitch} role="group" aria-label={copy.langSwitcherAria}>
            {ZUMI_LOCALES.map((item) => (
              <button
                key={item.id}
                type="button"
                className={locale === item.id ? styles.langButtonActive : styles.langButton}
                aria-pressed={locale === item.id}
                onClick={() => onLocaleChange(item.id)}
              >
                {item.short}
              </button>
            ))}
          </div>
          <nav className={styles.navLinks} aria-label={copy.navAria}>
            <Link href="/zumi">{copy.navApp}</Link>
            <Link href="/zumi/privacy">{copy.navPrivacy}</Link>
            <Link href="/zumi/support">{copy.navSupport}</Link>
            <a href={`mailto:${ZUMI_SUPPORT_EMAIL}`}>{copy.navContact}</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function ZumiFooter({ copy }: { copy: ZumiLandingCopy }) {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerInner}`}>
        <p>{copy.footerCredit}</p>
        <nav className={styles.footerLinks} aria-label={copy.footerAria}>
          <Link href="/zumi/privacy">{copy.navPrivacy}</Link>
          <Link href="/zumi/support">{copy.navSupport}</Link>
          <a href={`mailto:${ZUMI_SUPPORT_EMAIL}`}>{copy.navContact}</a>
          <Link href="/en">AZUMBO</Link>
        </nav>
      </div>
    </footer>
  );
}

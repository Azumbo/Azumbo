'use client';

import Link from 'next/link';
import {
  LAPASTA_LOCALES,
  type LaPastaLocale,
  type LandingCopy,
} from '../../lib/lapasta-store-content';
import { apps, CONTACT_EMAIL as STUDIO_CONTACT_EMAIL } from '../../lib/apps';
import styles from './lapasta.module.css';

export const CONTACT_EMAIL = STUDIO_CONTACT_EMAIL;

export const LA_PASTA = apps.find((app) => app.slug === 'lapasta')!;
export const APP_STORE_URL = LA_PASTA.appStoreUrl;

type ChromeProps = {
  copy: LandingCopy;
  locale: LaPastaLocale;
  onLocaleChange: (locale: LaPastaLocale) => void;
};

export function LaPastaNav({ copy, locale, onLocaleChange }: ChromeProps) {
  return (
    <header className={styles.nav}>
      <div className={styles.navInner}>
        <Link className={styles.brand} href="/lapasta" aria-label={copy.brandHomeAria}>
          <span className={styles.brandMark} aria-hidden="true">
            🍝
          </span>
          <span>La Pasta</span>
        </Link>
        <div className={styles.navActions}>
          <div className={styles.langSwitch} role="group" aria-label={copy.langSwitcherAria}>
            {LAPASTA_LOCALES.map((item) => (
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
            <Link href="/lapasta">{copy.navApp}</Link>
            <Link href="/lapasta/privacy">{copy.navPrivacy}</Link>
            <Link href="/lapasta/support">{copy.navSupport}</Link>
            <a href={`mailto:${CONTACT_EMAIL}`}>{copy.navContact}</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function LaPastaFooter({ copy }: { copy: LandingCopy }) {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerInner}`}>
        <p className={styles.sectionText}>{copy.footerCredit}</p>
        <nav className={styles.footerLinks} aria-label={copy.footerAria}>
          <Link href="/lapasta/privacy">{copy.navPrivacy}</Link>
          <Link href="/lapasta/support">{copy.navSupport}</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{copy.navContact}</a>
        </nav>
      </div>
    </footer>
  );
}

export function AppStoreButton({
  compact = false,
  ariaLabel = 'Download La Pasta on the App Store',
  badgeAlt = 'Download on the App Store',
}: {
  compact?: boolean;
  ariaLabel?: string;
  badgeAlt?: string;
}) {
  return (
    <a
      className={compact ? styles.appStoreBadgeLinkCompact : styles.appStoreBadgeLink}
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {/* Official badge artwork — do not modify, angle, or animate. */}
      <img
        className={styles.appStoreBadge}
        src="/lapasta/download-on-the-app-store.svg"
        alt={badgeAlt}
        width={compact ? 120 : 156}
        height={compact ? 40 : 52}
        decoding="async"
      />
    </a>
  );
}

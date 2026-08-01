'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  AINCLUSIVE_LOCALES,
  type AInclusiveLocale,
  type LandingCopy,
} from '../../lib/ainclusive-store-content';
import { CONTACT_EMAIL as STUDIO_CONTACT_EMAIL } from '../../lib/apps';
import styles from './ainclusive.module.css';

export const CONTACT_EMAIL = STUDIO_CONTACT_EMAIL;
export const BETA_MAIL = `mailto:${CONTACT_EMAIL}?subject=AInclusive%20beta%20access`;

type ChromeProps = {
  copy: LandingCopy;
  locale: AInclusiveLocale;
  onLocaleChange: (locale: AInclusiveLocale) => void;
};

export function AInclusiveNav({ copy, locale, onLocaleChange }: ChromeProps) {
  return (
    <header className={styles.nav}>
      <div className={styles.navInner}>
        <Link className={styles.brand} href="/ainclusive" aria-label={copy.brandHomeAria}>
          <Image
            className={styles.brandMark}
            src="/ainclusive/icon-180.png"
            alt=""
            width={28}
            height={28}
            aria-hidden="true"
          />
          <span>AInclusive</span>
        </Link>
        <div className={styles.navActions}>
          <div className={styles.langSwitch} role="group" aria-label={copy.langSwitcherAria}>
            {AINCLUSIVE_LOCALES.map((item) => (
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
            <Link href="/ainclusive">{copy.navApp}</Link>
            <Link href="/ainclusive/privacy">{copy.navPrivacy}</Link>
            <Link href="/ainclusive/support">{copy.navSupport}</Link>
            <a href={`mailto:${CONTACT_EMAIL}`}>{copy.navContact}</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function AInclusiveFooter({ copy }: { copy: LandingCopy }) {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerInner}`}>
        <p className={styles.sectionText}>{copy.footerCredit}</p>
        <nav className={styles.footerLinks} aria-label={copy.footerAria}>
          <Link href="/ainclusive/privacy">{copy.navPrivacy}</Link>
          <Link href="/ainclusive/support">{copy.navSupport}</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{copy.navContact}</a>
        </nav>
      </div>
    </footer>
  );
}

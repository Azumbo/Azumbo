'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  AINCLUSIVE_LOCALES,
  type AInclusiveLocale,
  type LandingCopy,
} from '../../lib/ainclusive-store-content';
import { apps, CONTACT_EMAIL as STUDIO_CONTACT_EMAIL } from '../../lib/apps';
import styles from './ainclusive.module.css';

export const CONTACT_EMAIL = STUDIO_CONTACT_EMAIL;

export const AINCLUSIVE = apps.find((app) => app.slug === 'ainclusive')!;
/** Canonical App Store product URL (Apple marketing guidelines). */
export const APP_STORE_URL =
  AINCLUSIVE.appStoreUrl || `https://apps.apple.com/app/id${AINCLUSIVE.appStoreId}`;

const APP_STORE_BADGE_ALT = 'Download on the App Store';

export function AppStoreBadge({
  className,
  ariaLabel,
  compact = false,
}: {
  className?: string;
  ariaLabel: string;
  compact?: boolean;
}) {
  return (
    <a
      className={className ?? (compact ? styles.appStoreBadgeLinkCompact : styles.appStoreBadgeLink)}
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      <img
        className={styles.appStoreBadge}
        src="/ainclusive/download-on-the-app-store.svg"
        alt={APP_STORE_BADGE_ALT}
        width={150}
        height={50}
        decoding="async"
      />
    </a>
  );
}

const CONTACT_MAIL_COPY: Record<AInclusiveLocale, { contactSubject: string }> = {
  en: { contactSubject: 'AInclusive contact' },
  he: { contactSubject: 'יצירת קשר בנושא AInclusive' },
  it: { contactSubject: 'Domanda su AInclusive' },
  ru: { contactSubject: 'Вопрос по AInclusive' },
};

export function buildMailto(options: { subject: string; body?: string }): string {
  const params = new URLSearchParams();
  params.set('subject', options.subject);
  if (options.body) {
    params.set('body', options.body);
  }
  // Prefer explicit encoding that mail clients reliably parse.
  return `mailto:${CONTACT_EMAIL}?${params.toString().replace(/\+/g, '%20')}`;
}

export function contactMailto(locale: AInclusiveLocale = 'en'): string {
  return buildMailto({ subject: CONTACT_MAIL_COPY[locale].contactSubject });
}

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
            <Link href="/ainclusive/accessibility">{copy.navAccessibility}</Link>
            <Link href="/ainclusive/support">{copy.navSupport}</Link>
            <a href={contactMailto(locale)}>{copy.navContact}</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function AInclusiveFooter({
  copy,
  locale = 'en',
}: {
  copy: LandingCopy;
  locale?: AInclusiveLocale;
}) {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerInner}`}>
        <p className={styles.sectionText}>{copy.footerCredit}</p>
        <nav className={styles.footerLinks} aria-label={copy.footerAria}>
          <Link href="/ainclusive/privacy">{copy.navPrivacy}</Link>
          <Link href="/ainclusive/accessibility">{copy.navAccessibility}</Link>
          <Link href="/ainclusive/support">{copy.navSupport}</Link>
          <a href={contactMailto(locale)}>{copy.navContact}</a>
        </nav>
      </div>
    </footer>
  );
}

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

const BETA_MAIL_COPY: Record<
  AInclusiveLocale,
  { subject: string; body: string; contactSubject: string }
> = {
  en: {
    subject: 'AInclusive beta access',
    body: 'Hello AZUMBO,\n\nI would like TestFlight / school-pilot access to AInclusive.\n\nRole (teacher / parent / LSA):\nSchool or organization (optional):\nDevice (iPhone / iPad / Mac):\n\nThank you!',
    contactSubject: 'AInclusive contact',
  },
  he: {
    subject: 'גישה לבטא של AInclusive',
    body: 'שלום AZUMBO,\n\nאשמח לקבל גישת TestFlight / פיילוט בית-ספרי ל-AInclusive.\n\nתפקיד (מורה / הורה / LSA):\nבית ספר או ארגון (אופציונלי):\nמכשיר (iPhone / iPad / Mac):\n\nתודה!',
    contactSubject: 'יצירת קשר בנושא AInclusive',
  },
  it: {
    subject: 'Accesso beta AInclusive',
    body: 'Ciao AZUMBO,\n\nVorrei accesso TestFlight / pilota scolastico ad AInclusive.\n\nRuolo (insegnante / genitore / LSA):\nScuola o organizzazione (opzionale):\nDispositivo (iPhone / iPad / Mac):\n\nGrazie!',
    contactSubject: 'Contatto AInclusive',
  },
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

export function betaMailto(locale: AInclusiveLocale = 'en'): string {
  const copy = BETA_MAIL_COPY[locale];
  return buildMailto({ subject: copy.subject, body: copy.body });
}

export function contactMailto(locale: AInclusiveLocale = 'en'): string {
  return buildMailto({ subject: BETA_MAIL_COPY[locale].contactSubject });
}

/** Default English beta mailto (subject + body). Prefer betaMailto(locale). */
export const BETA_MAIL = betaMailto('en');

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

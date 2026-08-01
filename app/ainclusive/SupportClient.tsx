'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  AINCLUSIVE_LANDING,
  AINCLUSIVE_LANG_STORAGE_KEY,
  AINCLUSIVE_SUPPORT,
  detectAInclusiveLocale,
  localeDirection,
  type AInclusiveLocale,
} from '../../lib/ainclusive-store-content';
import { AInclusiveFooter, AInclusiveNav, BETA_MAIL, CONTACT_EMAIL } from './components';
import styles from './ainclusive.module.css';

export default function AInclusiveSupportClient() {
  const [locale, setLocale] = useState<AInclusiveLocale>('en');
  const [ready, setReady] = useState(false);
  const chrome = AINCLUSIVE_LANDING[locale];
  const t = AINCLUSIVE_SUPPORT[locale];

  useEffect(() => {
    setLocale(detectAInclusiveLocale());
    setReady(true);
  }, []);

  function changeLocale(next: AInclusiveLocale) {
    setLocale(next);
    window.localStorage.setItem(AINCLUSIVE_LANG_STORAGE_KEY, next);
  }

  return (
    <div
      className={styles.shell}
      lang={locale === 'he' ? 'he' : locale}
      dir={localeDirection(locale)}
      data-ready={ready ? 'true' : 'false'}
    >
      <AInclusiveNav copy={chrome} locale={locale} onLocaleChange={changeLocale} />
      <main>
        <section className={`${styles.container} ${styles.legalHero}`}>
          <p className={styles.kicker}>{t.kicker}</p>
          <h1 className={styles.legalTitle}>{t.title}</h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
          <div className={styles.actions}>
            <a className={styles.cta} href={BETA_MAIL}>
              {t.contactSupport}
            </a>
            <Link className={styles.secondaryCta} href="/ainclusive/privacy">
              {t.privacyPolicy}
            </Link>
            <Link className={styles.secondaryCta} href="/ainclusive">
              {t.appHome}
            </Link>
          </div>
          <p className={styles.sectionText} style={{ marginTop: '1rem' }}>
            {CONTACT_EMAIL}
          </p>
        </section>

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="faq-title">
          <div className={styles.legalCard}>
            <h2 id="faq-title">{t.faqTitle}</h2>
            <div className={styles.faqList}>
              {t.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <AInclusiveFooter copy={chrome} />
    </div>
  );
}

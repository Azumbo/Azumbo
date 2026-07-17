'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  LAPASTA_LANG_STORAGE_KEY,
  LAPASTA_LANDING,
  LAPASTA_SUPPORT,
  detectLaPastaLocale,
  type LaPastaLocale,
} from '../../lib/lapasta-store-content';
import { APP_STORE_URL, CONTACT_EMAIL, LaPastaFooter, LaPastaNav } from './components';
import styles from './lapasta.module.css';

export default function LaPastaSupportClient() {
  const [locale, setLocale] = useState<LaPastaLocale>('en');
  const [ready, setReady] = useState(false);
  const chrome = LAPASTA_LANDING[locale];
  const t = LAPASTA_SUPPORT[locale];

  useEffect(() => {
    setLocale(detectLaPastaLocale());
    setReady(true);
  }, []);

  function changeLocale(next: LaPastaLocale) {
    setLocale(next);
    window.localStorage.setItem(LAPASTA_LANG_STORAGE_KEY, next);
  }

  return (
    <div className={styles.shell} lang={locale} data-ready={ready ? 'true' : 'false'}>
      <LaPastaNav copy={chrome} locale={locale} onLocaleChange={changeLocale} />
      <main>
        <section className={`${styles.container} ${styles.legalHero}`}>
          <p className={styles.kicker}>{t.kicker}</p>
          <h1 className={styles.legalTitle}>{t.title}</h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
          <div className={styles.actions}>
            <a className={styles.cta} href={`mailto:${CONTACT_EMAIL}?subject=La%20Pasta%20Support`}>
              {t.contactSupport}
            </a>
            <Link className={styles.secondaryCta} href="/lapasta/privacy">
              {t.privacyPolicy}
            </Link>
            <a className={styles.secondaryCta} href={APP_STORE_URL} rel="noopener noreferrer" target="_blank">
              {t.appStore}
            </a>
          </div>
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
      <LaPastaFooter copy={chrome} />
    </div>
  );
}

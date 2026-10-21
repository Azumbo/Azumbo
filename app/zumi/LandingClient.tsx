'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  ZUMI_LANDING,
  ZUMI_SUPPORT_EMAIL,
  detectZumiLocale,
  persistZumiLocale,
  type ZumiLocale,
} from '../../lib/zumi-store-content';
import { ZumiFooter, ZumiNav } from './components';
import styles from './zumi.module.css';

export default function ZumiLandingClient() {
  const [locale, setLocale] = useState<ZumiLocale>('en');
  const t = ZUMI_LANDING[locale];

  useEffect(() => {
    setLocale(detectZumiLocale());
  }, []);

  function changeLocale(next: ZumiLocale) {
    setLocale(next);
    persistZumiLocale(next);
  }

  const mailHref = `mailto:${ZUMI_SUPPORT_EMAIL}?subject=${encodeURIComponent('Zumi launch updates')}`;

  return (
    <div className={styles.shell} lang={locale}>
      <ZumiNav copy={t} locale={locale} onLocaleChange={changeLocale} />
      <main>
        <section className={`${styles.container} ${styles.hero}`}>
          <div>
            <p className={styles.kicker}>{t.kicker}</p>
            <h1 className={styles.title}>{t.title}</h1>
            <p className={styles.subtitle}>
              <strong>{t.subtitleLead}</strong> {t.subtitle}
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryCta} href={mailHref}>
                {t.primaryCta}
              </a>
              <Link className={styles.secondaryCta} href="/zumi/support">
                {t.secondaryCta}
              </Link>
            </div>
            <p className={styles.storeNote}>{t.storeNote}</p>
          </div>

          <div className={styles.heroVisual} aria-label={t.heroPreviewAria}>
            <div className={styles.heroVisualInner}>
              <p className={styles.heroBrand}>Zumi</p>
              <p className={styles.heroLine}>{t.subtitleLead}</p>
              <p className={styles.artistsLabel}>{t.artistsLabel}</p>
              <p className={styles.artists}>{t.artists}</p>
            </div>
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="features-title">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>{t.featuresKicker}</p>
            <h2 id="features-title" className={styles.sectionTitle}>
              {t.featuresTitle}
            </h2>
            <p className={styles.sectionText}>{t.featuresLead}</p>
          </div>
          <div className={styles.featuresGrid}>
            {t.features.map((feature) => (
              <article className={styles.card} key={feature.title}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.sectionText}>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`}>
          <div className={styles.honesty}>
            <p className={styles.kicker}>{t.honestyKicker}</p>
            <h2 className={styles.sectionTitle}>{t.honestyTitle}</h2>
            <p className={styles.sectionText}>{t.honestyText}</p>
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="faq-title">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>{t.faqKicker}</p>
            <h2 id="faq-title" className={styles.sectionTitle}>
              {t.faqTitle}
            </h2>
          </div>
          <div className={styles.faqList}>
            {t.faqs.map((faq) => (
              <details className={styles.faqItem} key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.container}>
          <div className={styles.downloadBand}>
            <p className={styles.kicker}>{t.kicker}</p>
            <h2 className={styles.sectionTitle}>{t.downloadTitle}</h2>
            <p className={styles.sectionText}>{t.downloadText}</p>
            <p className={styles.storeNote}>{t.platforms}</p>
            <div className={styles.actions}>
              <a className={styles.primaryCta} href={mailHref}>
                {t.primaryCta}
              </a>
              <Link className={styles.secondaryCta} href="/zumi/privacy">
                {t.navPrivacy}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <ZumiFooter copy={t} />
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  LAPASTA_LANDING,
  LAPASTA_LANG_STORAGE_KEY,
  detectLaPastaLocale,
  type LaPastaLocale,
} from '../../lib/lapasta-store-content';
import { AppStoreButton, LA_PASTA, LaPastaFooter, LaPastaNav } from './components';
import styles from './lapasta.module.css';

export default function LaPastaLandingClient() {
  const [locale, setLocale] = useState<LaPastaLocale>('en');
  const [ready, setReady] = useState(false);
  const t = LAPASTA_LANDING[locale];

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
      <LaPastaNav copy={t} locale={locale} onLocaleChange={changeLocale} />
      <main>
        <section className={`${styles.container} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>{t.kicker}</p>
            <h1 className={styles.title}>{t.title}</h1>
            <p className={styles.subtitle}>
              <strong>{t.subtitleLead}</strong> {t.subtitle}
            </p>
            <div className={styles.actions}>
              <AppStoreButton ariaLabel={t.badgeAria} badgeAlt={t.badgeAlt} />
              <Link className={styles.secondaryCta} href="/lapasta/support">
                {t.readSupport}
              </Link>
            </div>
          </div>

          <div className={styles.heroCard} aria-label={t.heroPreviewAria}>
            <div className={styles.phoneMock}>
              <Image
                src="/lapasta/gameplay-screenshot.jpg"
                alt={t.heroAlt}
                width={473}
                height={1024}
                className={styles.heroScreenshot}
                priority
              />
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
              <article className={styles.glassCard} key={feature.title}>
                <span className={styles.featureIcon} aria-hidden="true">
                  {feature.icon}
                </span>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.sectionText}>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="museum-title">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>{t.museumKicker}</p>
            <h2 id="museum-title" className={styles.sectionTitle}>
              {t.museumTitle}
            </h2>
            <p className={styles.sectionText}>{t.museumLead}</p>
          </div>

          <div className={styles.museumGrid}>
            {t.museumShots.map((shot) => (
              <figure className={styles.museumCard} key={shot.name}>
                <div className={styles.phoneMock}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={390}
                    height={844}
                    className={styles.museumScreenshot}
                  />
                </div>
                <figcaption className={styles.museumCaption}>
                  <strong>{shot.name}</strong>
                  <span>{shot.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="faq-title">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>{t.faqKicker}</p>
            <h2 id="faq-title" className={styles.sectionTitle}>
              {t.faqTitle}
            </h2>
            <p className={styles.sectionText}>{t.faqLead}</p>
          </div>
          <div className={styles.legalCard}>
            <div className={styles.faqList}>
              {t.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </details>
              ))}
            </div>
            <p className={styles.metaText} style={{ marginTop: '1.25rem' }}>
              {t.faqCtaPrefix}{' '}
              <Link className={styles.textLink} href="/lapasta/support">
                {t.faqCtaLink}
              </Link>
              .
            </p>
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="download-title">
          <div className={`${styles.downloadPanel} ${styles.glassCard}`}>
            <div>
              <span className={styles.badge}>{t.downloadBadge}</span>
              <h2 id="download-title" className={styles.sectionTitle}>
                {t.downloadTitle}
              </h2>
              <p className={styles.sectionText}>{t.downloadBody}</p>
            </div>
            <AppStoreButton compact ariaLabel={t.badgeAria} badgeAlt={t.badgeAlt} />
            <p className={styles.metaText}>
              {t.metaIds.replace('{id}', LA_PASTA.appStoreId).replace('{bundle}', LA_PASTA.bundleId)}
            </p>
          </div>
        </section>
      </main>
      <LaPastaFooter copy={t} />
    </div>
  );
}

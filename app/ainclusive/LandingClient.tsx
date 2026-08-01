'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  AINCLUSIVE_LANDING,
  AINCLUSIVE_LANG_STORAGE_KEY,
  detectAInclusiveLocale,
  localeDirection,
  type AInclusiveLocale,
} from '../../lib/ainclusive-store-content';
import { AInclusiveFooter, AInclusiveNav, BETA_MAIL } from './components';
import styles from './ainclusive.module.css';

export default function AInclusiveLandingClient() {
  const [locale, setLocale] = useState<AInclusiveLocale>('en');
  const [ready, setReady] = useState(false);
  const t = AINCLUSIVE_LANDING[locale];

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
      <AInclusiveNav copy={t} locale={locale} onLocaleChange={changeLocale} />
      <main>
        <section className={`${styles.container} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>{t.kicker}</p>
            <h1 className={styles.title}>{t.title}</h1>
            <p className={styles.subtitle}>
              <strong>{t.subtitleLead}</strong> {t.subtitle}
            </p>
            <div className={styles.actions}>
              <a className={styles.cta} href={BETA_MAIL}>
                {t.primaryCta}
              </a>
              <Link className={styles.secondaryCta} href="/ainclusive/support">
                {t.readSupport}
              </Link>
            </div>
          </div>

          <div className={styles.heroCard} aria-label={t.heroPreviewAria}>
            <div className={styles.phoneMock}>
              <Image
                src="/ainclusive/app-preview.png"
                alt={t.heroAlt}
                width={575}
                height={1024}
                className={styles.heroScreenshot}
                priority
              />
            </div>
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="shots-title">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>{t.shotsKicker}</p>
            <h2 id="shots-title" className={styles.sectionTitle}>
              {t.shotsTitle}
            </h2>
            <p className={styles.sectionText}>{t.shotsLead}</p>
          </div>
          <div className={styles.museumGrid}>
            {t.shots.map((shot) => (
              <figure className={styles.museumCard} key={shot.src}>
                <div className={styles.phoneMock}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={575}
                    height={1024}
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

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="impact-title">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>{t.impactKicker}</p>
            <h2 id="impact-title" className={styles.sectionTitle}>
              {t.impactTitle}
            </h2>
            <p className={styles.sectionText}>{t.impactLead}</p>
          </div>
          <div className={styles.featuresGrid}>
            {t.impactPoints.map((point) => (
              <article className={styles.glassCard} key={point.title}>
                <h3 className={styles.cardTitle}>{point.title}</h3>
                <p className={styles.sectionText}>{point.text}</p>
              </article>
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
            <p className={styles.sectionText} style={{ marginTop: '1.25rem' }}>
              {t.faqCtaPrefix}{' '}
              <Link className={styles.textLink} href="/ainclusive/support">
                {t.faqCtaLink}
              </Link>
            </p>
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="download-title">
          <div className={`${styles.glassCard} ${styles.sectionHeader}`}>
            <p className={styles.kicker}>{t.downloadBadge}</p>
            <h2 id="download-title" className={styles.sectionTitle}>
              {t.downloadTitle}
            </h2>
            <p className={styles.sectionText}>{t.downloadBody}</p>
            <div className={styles.actions}>
              <a className={styles.cta} href={BETA_MAIL}>
                {t.primaryCta}
              </a>
              <Link className={styles.secondaryCta} href="/ainclusive/privacy">
                {t.navPrivacy}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <AInclusiveFooter copy={t} />
    </div>
  );
}

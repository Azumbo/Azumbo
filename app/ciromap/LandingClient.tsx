'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  APP_INFO,
  CIROMAP_LANG_STORAGE_KEY,
  CIROMAP_LOCALES,
  LANDING_COPY,
  detectCiroMapLocale,
  type CiroMapLocale,
} from '../../lib/ciromap-store-content';
import { APP_STORE_URL, AppStoreGetCard, CIRO_MAP } from './components';
import ScreenshotShowcase from './ScreenshotShowcase';
import styles from './ciromap.module.css';

export default function CiroMapLandingClient() {
  const [locale, setLocale] = useState<CiroMapLocale>('en');
  const [ready, setReady] = useState(false);
  const t = LANDING_COPY[locale];

  useEffect(() => {
    setLocale(detectCiroMapLocale());
    setReady(true);
  }, []);

  function changeLocale(next: CiroMapLocale) {
    setLocale(next);
    window.localStorage.setItem(CIROMAP_LANG_STORAGE_KEY, next);
  }

  return (
    <div className={styles.shell} lang={locale} data-ready={ready ? 'true' : 'false'}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/ciromap" className={styles.brand}>
            <Image
              src="/ciromap/app-icon-192.png?v=3"
              alt="Ciro.Map app icon"
              width={38}
              height={38}
              className={styles.appIcon}
              priority
            />
            <span>Ciro.Map</span>
          </Link>
          <div className={styles.headerActions}>
            <div className={styles.langSwitch} role="group" aria-label={t.langSwitcherAria}>
              {CIROMAP_LOCALES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={locale === item.id ? styles.langButtonActive : styles.langButton}
                  aria-pressed={locale === item.id}
                  onClick={() => changeLocale(item.id)}
                >
                  {item.short}
                </button>
              ))}
            </div>
            <nav className={styles.nav} aria-label={t.navAria}>
              <Link href="/en">Azumbo</Link>
              <Link href="/ciromap/privacy">{t.privacy}</Link>
              <a href="mailto:azumbogames@gmail.com">{t.contact}</a>
            </nav>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <Image
            src="/ciromap/app-icon-192.png?v=3"
            alt=""
            width={88}
            height={88}
            className={styles.heroIcon}
            priority
            aria-hidden
          />
          <p className={styles.kicker}>{t.kicker}</p>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.subtitleStrong}>{t.subtitle}</p>
          <p className={styles.subtitle}>{t.promo}</p>

          <div className={styles.heroGetWrap} aria-label={t.getAppTitle}>
            <AppStoreGetCard copy={t} />
          </div>

          <div className={styles.ctaRow}>
            <a
              className={styles.secondaryCta}
              href="/ciromap/flyer.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.flyer}
            </a>
            <Link className={styles.secondaryCta} href="/ciromap/privacy">
              {t.privacy}
            </Link>
          </div>
          <p className={styles.storeMeta}>
            {t.storeMetaPrefix} {APP_INFO.version} ·{' '}
            <a className={styles.ctaLink} href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              App ID {CIRO_MAP.appStoreId}
            </a>
          </p>
        </section>

        <ScreenshotShowcase locale={locale} copy={t} />

        <section className={styles.card} aria-labelledby="about-title">
          <p className={styles.kicker}>{t.aboutKicker}</p>
          <h2 id="about-title" className={styles.sectionTitle}>
            {t.aboutTitle}
          </h2>
          {t.intro.map((paragraph) => (
            <p key={paragraph} className={styles.bodyText}>
              {paragraph}
            </p>
          ))}
          <p className={styles.bodyText}>{t.why}</p>
        </section>

        <section className={styles.sectionWide} aria-labelledby="features-title">
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>{t.featuresKicker}</p>
            <h2 id="features-title" className={styles.sectionTitle}>
              {t.featuresTitle}
            </h2>
          </div>
          <div className={styles.featureGrid}>
            {t.features.map((feature) => (
              <article key={feature.title} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureText}>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.card} aria-labelledby="whats-new-title">
          <div className={styles.whatsNewHeader}>
            <div>
              <p className={styles.kicker}>{t.whatsNewKicker}</p>
              <h2 id="whats-new-title" className={styles.sectionTitle}>
                {t.versionLabel} {APP_INFO.version}
              </h2>
            </div>
            <span className={styles.versionBadge}>{t.whatsNewLatest}</span>
          </div>
          <ul className={styles.whatsNewList}>
            {t.whatsNew.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.infoGrid} aria-labelledby="info-title">
          <h2 id="info-title" className={styles.visuallyHidden}>
            {t.infoAria}
          </h2>
          <article className={styles.infoCard}>
            <span className={styles.infoLabel}>{t.infoCategory}</span>
            <strong>{t.category}</strong>
          </article>
          <article className={styles.infoCard}>
            <span className={styles.infoLabel}>{t.infoCompatibility}</span>
            <strong>{APP_INFO.minOS}+</strong>
          </article>
          <article className={styles.infoCard}>
            <span className={styles.infoLabel}>{t.infoLanguages}</span>
            <strong>{t.languages}</strong>
          </article>
          <article className={styles.infoCard}>
            <span className={styles.infoLabel}>{t.infoSize}</span>
            <strong>{APP_INFO.size}</strong>
          </article>
          <article className={styles.infoCard}>
            <span className={styles.infoLabel}>{t.infoRating}</span>
            <strong>
              {APP_INFO.rating} ★ ({APP_INFO.ratingCount})
            </strong>
          </article>
          <article className={styles.infoCard}>
            <span className={styles.infoLabel}>{t.infoIap}</span>
            <strong>{t.iap}</strong>
          </article>
        </section>

        <section className={styles.card} aria-labelledby="faq-title">
          <p className={styles.kicker}>{t.faqKicker}</p>
          <h2 id="faq-title" className={styles.sectionTitle}>
            {t.faqTitle}
          </h2>
          <div className={styles.faqList}>
            {t.faqs.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary>{faq.question}</summary>
                <p className={styles.bodyText}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.downloadPanel} aria-labelledby="download-title">
          <div>
            <p className={styles.kicker}>{t.downloadKicker}</p>
            <h2 id="download-title" className={styles.sectionTitle}>
              {t.downloadTitle}
            </h2>
            <p className={styles.bodyText}>{t.downloadBody}</p>
          </div>
          <div className={styles.downloadGetRow}>
            <a
              className={styles.secondaryCta}
              href="/ciromap/flyer.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.openFlyer}
            </a>
          </div>
          <p className={styles.storeMeta}>
            {APP_INFO.copyright} · {APP_INFO.seller} · Bundle ID {CIRO_MAP.bundleId}
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          © 2026 Azumbo · <Link href="/ciromap/privacy">{t.footerPrivacy}</Link>
        </p>
        <p className={styles.legalCredit}>{t.legalCredit}</p>
      </footer>
    </div>
  );
}

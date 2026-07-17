'use client';

import { useEffect, useState } from 'react';
import {
  LAPASTA_LANDING,
  LAPASTA_LANG_STORAGE_KEY,
  LAPASTA_PRIVACY,
  detectLaPastaLocale,
  type LaPastaLocale,
} from '../../lib/lapasta-store-content';
import { LaPastaFooter, LaPastaNav } from './components';
import styles from './lapasta.module.css';

export default function LaPastaPrivacyClient() {
  const [locale, setLocale] = useState<LaPastaLocale>('en');
  const [ready, setReady] = useState(false);
  const chrome = LAPASTA_LANDING[locale];
  const t = LAPASTA_PRIVACY[locale];

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
        </section>

        <div className={`${styles.container} ${styles.legalLayout}`}>
          <aside className={`${styles.legalAside} ${styles.glassCard}`} aria-label={t.tocAria}>
            <nav>
              {t.toc.map((item) => (
                <a className={styles.textLink} href={`#${item.id}`} key={item.id}>
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          <article className={styles.legalCard}>
            {t.sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 48)}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>
        </div>
      </main>
      <LaPastaFooter copy={chrome} />
    </div>
  );
}

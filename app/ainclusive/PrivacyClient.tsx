'use client';

import { useEffect, useState } from 'react';
import {
  AINCLUSIVE_LANDING,
  AINCLUSIVE_LANG_STORAGE_KEY,
  AINCLUSIVE_PRIVACY,
  detectAInclusiveLocale,
  localeDirection,
  type AInclusiveLocale,
} from '../../lib/ainclusive-store-content';
import { AInclusiveFooter, AInclusiveNav } from './components';
import styles from './ainclusive.module.css';

export default function AInclusivePrivacyClient() {
  const [locale, setLocale] = useState<AInclusiveLocale>('en');
  const [ready, setReady] = useState(false);
  const chrome = AINCLUSIVE_LANDING[locale];
  const t = AINCLUSIVE_PRIVACY[locale];

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
      <AInclusiveFooter copy={chrome} locale={locale} />
    </div>
  );
}

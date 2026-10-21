'use client';

import { useEffect, useState } from 'react';
import {
  ZUMI_LANDING,
  ZUMI_SUPPORT,
  ZUMI_SUPPORT_EMAIL,
  detectZumiLocale,
  persistZumiLocale,
  type ZumiLocale,
} from '../../lib/zumi-store-content';
import { ZumiFooter, ZumiNav } from './components';
import styles from './zumi.module.css';

export default function ZumiSupportClient() {
  const [locale, setLocale] = useState<ZumiLocale>('en');
  const nav = ZUMI_LANDING[locale];
  const t = ZUMI_SUPPORT[locale];

  useEffect(() => {
    setLocale(detectZumiLocale());
  }, []);

  return (
    <div className={styles.shell} lang={locale}>
      <ZumiNav
        copy={nav}
        locale={locale}
        onLocaleChange={(next) => {
          setLocale(next);
          persistZumiLocale(next);
        }}
      />
      <main className={`${styles.container} ${styles.legalShell}`}>
        <h1 className={styles.legalTitle}>{t.title}</h1>
        <p className={styles.sectionText}>{t.lead}</p>
        <div className={`${styles.supportGrid} ${styles.section}`}>
          {t.topics.map((topic) => (
            <article className={styles.card} key={topic.heading}>
              <h2 className={styles.cardTitle}>{topic.heading}</h2>
              <p className={styles.sectionText}>{topic.body}</p>
            </article>
          ))}
        </div>
        <a
          className={styles.primaryCta}
          href={`mailto:${ZUMI_SUPPORT_EMAIL}?subject=${encodeURIComponent('Zumi support')}`}
        >
          {t.contactCta}
        </a>
      </main>
      <ZumiFooter copy={nav} />
    </div>
  );
}

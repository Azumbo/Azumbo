'use client';

import { useEffect, useState } from 'react';
import {
  ZUMI_LANDING,
  ZUMI_PRIVACY,
  detectZumiLocale,
  persistZumiLocale,
  type ZumiLocale,
} from '../../lib/zumi-store-content';
import { ZumiFooter, ZumiNav } from './components';
import styles from './zumi.module.css';

export default function ZumiPrivacyClient() {
  const [locale, setLocale] = useState<ZumiLocale>('en');
  const nav = ZUMI_LANDING[locale];
  const t = ZUMI_PRIVACY[locale];

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
        <p className={styles.legalUpdated}>{t.updated}</p>
        {t.sections.map((section) => (
          <section className={styles.legalSection} key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </main>
      <ZumiFooter copy={nav} />
    </div>
  );
}

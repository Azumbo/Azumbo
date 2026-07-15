'use client';

import Image from 'next/image';
import { useState } from 'react';
import { CIROMAP_LOCALES, SCREENSHOTS, type CiroMapLocale } from '../../lib/ciromap-store-content';
import styles from './ciromap.module.css';

export default function ScreenshotShowcase() {
  const [locale, setLocale] = useState<CiroMapLocale>('en');
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = SCREENSHOTS[locale];

  function selectLocale(next: CiroMapLocale) {
    setLocale(next);
    setActiveIndex(0);
  }

  return (
    <section className={styles.showcase} aria-labelledby="screenshots-title">
      <div className={styles.sectionIntro}>
        <p className={styles.kicker}>Screenshots</p>
        <h2 id="screenshots-title" className={styles.sectionTitle}>
          See the app in your language.
        </h2>
        <p className={styles.sectionLead}>
          English, Italiano, Polski, and Русский — the same Cirò Marina guide, localized for residents and visitors.
        </p>
      </div>

      <div
        className={styles.segmentedControl}
        role="tablist"
        aria-label="Screenshot language"
      >
        {CIROMAP_LOCALES.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={locale === item.id}
            className={locale === item.id ? styles.segmentActive : styles.segment}
            onClick={() => selectLocale(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className={styles.showcaseLayout}>
        <div className={styles.deviceFrame} aria-live="polite">
          <div className={styles.deviceBezel}>
            <Image
              key={`${locale}-${activeIndex}`}
              src={slides[activeIndex].src}
              alt={slides[activeIndex].alt}
              width={430}
              height={932}
              className={styles.deviceScreen}
              priority={activeIndex === 0}
            />
          </div>
          <p className={styles.screenCaption}>{slides[activeIndex].caption}</p>
        </div>

        <div className={styles.thumbRail} aria-label="Screenshot thumbnails">
          {slides.map((slide, index) => (
            <button
              key={`${locale}-${slide.src}`}
              type="button"
              className={index === activeIndex ? styles.thumbButtonActive : styles.thumbButton}
              aria-label={`${slide.caption} screenshot`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={slide.src}
                alt=""
                width={72}
                height={156}
                className={styles.thumbImage}
                aria-hidden
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

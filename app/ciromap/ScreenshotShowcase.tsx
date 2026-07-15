'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SCREENSHOTS, type CiroMapLocale, type LandingCopy } from '../../lib/ciromap-store-content';
import styles from './ciromap.module.css';

type Props = {
  locale: CiroMapLocale;
  copy: LandingCopy;
};

export default function ScreenshotShowcase({ locale, copy }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = SCREENSHOTS[locale];

  useEffect(() => {
    setActiveIndex(0);
  }, [locale]);

  return (
    <section className={styles.showcase} aria-labelledby="screenshots-title">
      <div className={styles.sectionIntro}>
        <p className={styles.kicker}>{copy.screenshotsKicker}</p>
        <h2 id="screenshots-title" className={styles.sectionTitle}>
          {copy.screenshotsTitle}
        </h2>
        <p className={styles.sectionLead}>{copy.screenshotsLead}</p>
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

        {slides.length > 1 ? (
          <div className={styles.thumbRail} aria-label={copy.thumbsAria}>
            {slides.map((slide, index) => (
              <button
                key={`${locale}-${slide.src}`}
                type="button"
                className={index === activeIndex ? styles.thumbButtonActive : styles.thumbButton}
                aria-label={slide.caption}
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
        ) : null}
      </div>
    </section>
  );
}

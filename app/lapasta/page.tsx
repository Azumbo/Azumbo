import { JsonLd, SoftwareApplicationJsonLd } from '../../components/seo/JsonLd';
import { LA_PASTA_FAQ } from '../../lib/lapastaFaq';
import {
  SITE_URL,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildPageMetadata,
} from '../../lib/seo';
import { AppStoreButton, LaPastaFooter, LaPastaNav, LA_PASTA } from './components';
import styles from './lapasta.module.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = buildPageMetadata({
  pathname: '/lapasta',
  title: 'La Pasta: 60s Challenge — iOS Pasta Quiz Game',
  description:
    'La Pasta is a free iOS pasta-shape quiz for iPhone and iPad: glass jars shuffle, you name Italian categories, and collect shapes in 60-second rounds.',
});

const features = [
  {
    icon: '🫙',
    title: 'Glass jars shuffle',
    text: 'Four translucent jars move with a gentle rhythm. Keep your eye on the pasta, then choose the category before the timer slips away.',
  },
  {
    icon: '🍝',
    title: 'Collection',
    text: 'Discover classic and curious shapes as you play. Build a tidy pasta shelf that feels more like a small museum than a score screen.',
  },
  {
    icon: '🇮🇹',
    title: 'Italian Levels',
    text: 'Learn families such as corta, lunga, ripiena, pastina, gnocchi, strascinati, and insolita through quick, repeatable rounds.',
  },
  {
    icon: '☀️',
    title: 'Daily Pasta',
    text: 'Return for a daily shape, a small ritual, and one more reason to notice the design language of Italian food.',
  },
  {
    icon: '👵',
    title: 'Nonna commentary',
    text: 'Warm, light remarks add personality without shouting. Pasta stays the hero; the joke is always served on the side.',
  },
];

const museumShots = [
  {
    src: '/lapasta/museum-mandilli.jpg',
    alt: 'La Pasta Museum of Pasta — Mandilli de saea full-screen artwork',
    name: 'Mandilli de saea',
    note: 'Insolita · Liguria',
  },
  {
    src: '/lapasta/museum-collection.jpg',
    alt: 'La Pasta Collection — Orecchiette, Corzetti, Mandilli de saea, and Pillus',
    name: 'Collection',
    note: 'Insolita · Mandilli & Pillus',
  },
];

export default function LaPastaLandingPage() {
  return (
    <div className={styles.shell}>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: 'AZUMBO', path: '/en' },
            { name: 'La Pasta', path: '/lapasta' },
          ]),
          buildFaqPageSchema(`${SITE_URL}/lapasta`, 'en', [...LA_PASTA_FAQ]),
        ]}
      />
      <SoftwareApplicationJsonLd
        name="La Pasta: 60s Challenge"
        description="Italian pasta shape quiz for iPhone and iPad with glass-jar rounds, collection, and Daily Pasta."
        url={`${SITE_URL}/lapasta`}
        applicationCategory="GameApplication"
        operatingSystem="iOS 18+"
        image={`${SITE_URL}/lapasta/gameplay-screenshot.jpg`}
        offers={{ price: '0', priceCurrency: 'EUR' }}
      />
      <LaPastaNav />
      <main>
        <section className={`${styles.container} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>For iPhone and iPad</p>
            <h1 className={styles.title}>La Pasta: 60s Challenge</h1>
            <p className={styles.subtitle}>
              <strong>Bottom line:</strong> La Pasta is a free Italian pasta-shape quiz for iPhone and iPad.
              Watch the glass jars shuffle, name the pasta family, and collect shapes in quick 60-second rounds.
            </p>
            <div className={styles.actions}>
              <AppStoreButton />
              <Link className={styles.secondaryCta} href="/lapasta/support">Read support</Link>
            </div>
          </div>

          <div className={styles.heroCard} aria-label="La Pasta game preview">
            <div className={styles.phoneMock}>
              <Image
                src="/lapasta/gameplay-screenshot.jpg"
                alt="La Pasta gameplay — Tagliatelle round with glass jars and combo score"
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
            <p className={styles.kicker}>60s mode · collection · glass UI</p>
            <h2 id="features-title" className={styles.sectionTitle}>A small game with a proper Italian table setting.</h2>
            <p className={styles.sectionText}>
              La Pasta keeps the interaction crisp and the mood calm: glass, warmth, restraint, and just enough tomato-red pressure from the timer.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <article className={styles.glassCard} key={feature.title}>
                <span className={styles.featureIcon} aria-hidden="true">{feature.icon}</span>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.sectionText}>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="museum-title">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Museum of Pasta</p>
            <h2 id="museum-title" className={styles.sectionTitle}>The unusual shapes.</h2>
            <p className={styles.sectionText}>
              Collection is not only classics. Insolita brings rare regional forms — silk handkerchiefs from Liguria, baked disks from Sardinia — into a quiet full-screen browse.
            </p>
          </div>

          <div className={styles.museumGrid}>
            {museumShots.map((shot) => (
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
            <p className={styles.kicker}>FAQ</p>
            <h2 id="faq-title" className={styles.sectionTitle}>Quick answers.</h2>
            <p className={styles.sectionText}>
              Short factual answers for search and AI overviews. Full support details live on the support page.
            </p>
          </div>
          <div className={styles.legalCard}>
            <div className={styles.faqList}>
              {LA_PASTA_FAQ.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </details>
              ))}
            </div>
            <p className={styles.metaText} style={{ marginTop: '1.25rem' }}>
              Need restore purchases or ad troubleshooting?{' '}
              <Link className={styles.textLink} href="/lapasta/support">
                Open La Pasta Support
              </Link>
              .
            </p>
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="download-title">
          <div className={`${styles.downloadPanel} ${styles.glassCard}`}>
            <div>
              <span className={styles.badge}>Remove Ads · one-time purchase</span>
              <h2 id="download-title" className={styles.sectionTitle}>Get it on the App Store.</h2>
              <p className={styles.sectionText}>
                Free to start with optional ads. A one-time Remove Ads purchase is available when you want an uninterrupted plate.
              </p>
            </div>
            <AppStoreButton compact />
            <p className={styles.metaText}>App Store ID {LA_PASTA.appStoreId} · Bundle ID {LA_PASTA.bundleId}</p>
          </div>
        </section>
      </main>
      <LaPastaFooter />
    </div>
  );
}

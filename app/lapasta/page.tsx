import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '../../lib/seo';
import { AppStoreButton, LaPastaFooter, LaPastaNav, LA_PASTA } from './components';
import styles from './lapasta.module.css';

export const metadata: Metadata = {
  title: 'La Pasta: 60s Challenge — Azumbo Games',
  description: 'A premium 60-second iOS game about Italian pasta shapes. Shuffle glass jars, learn categories, collect pasta, and chase a calmer high score.',
  alternates: {
    canonical: `${SITE_URL}/lapasta`,
  },
  openGraph: {
    title: 'La Pasta: 60s Challenge — Azumbo Games',
    description: 'A premium 60-second iOS game about Italian pasta shapes, glass jars, collections, daily pasta, and warm Nonna commentary.',
    url: `${SITE_URL}/lapasta`,
    siteName: 'AZUMBO',
    type: 'website',
  },
};

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

export default function LaPastaLandingPage() {
  return (
    <div className={styles.shell}>
      <LaPastaNav />
      <main>
        <section className={`${styles.container} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>iPhone + iPad · iOS 18+</p>
            <h1 className={styles.title}>La Pasta: 60s Challenge</h1>
            <p className={styles.subtitle}>
              Italian pasta shape quiz for iPhone and iPad. Watch the glass jars shuffle, name the pasta family, and collect shapes in quick 60-second rounds.
            </p>
            <div className={styles.actions}>
              <AppStoreButton />
              <Link className={styles.secondaryCta} href="/lapasta/support">Read support</Link>
            </div>
          </div>

          <div className={styles.heroCard} aria-label="La Pasta game preview">
            <div className={styles.phoneMock}>
              <div className={styles.gameTopBar}>
                <span>La Pasta</span>
                <span className={styles.timer}>00:42</span>
              </div>
              <div className={styles.jarGrid} aria-hidden="true">
                <span className={styles.jar}>🍝</span>
                <span className={styles.jar}>〰️</span>
                <span className={styles.jar}>🥟</span>
                <span className={styles.jar}>✦</span>
              </div>
              <div className={styles.choiceGrid} aria-label="Pasta categories preview">
                <span className={styles.choice}>corta</span>
                <span className={styles.choice}>lunga</span>
                <span className={styles.choice}>ripiena</span>
                <span className={styles.choice}>pastina</span>
              </div>
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

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="download-title">
          <div className={`${styles.downloadPanel} ${styles.glassCard}`}>
            <div>
              <span className={styles.badge}>Remove Ads · €0.99</span>
              <h2 id="download-title" className={styles.sectionTitle}>Download on the App Store.</h2>
              <p className={styles.sectionText}>
                Free to start with optional ads. A one-time Remove Ads in-app purchase is available when you want an uninterrupted plate.
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

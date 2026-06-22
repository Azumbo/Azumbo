import type { Metadata } from 'next';
import Link from 'next/link';
import { apps, CONTACT_EMAIL } from '../lib/apps';
import { SITE_URL } from '../lib/seo';
import styles from './lapasta/lapasta.module.css';

export const metadata: Metadata = {
  title: 'Azumbo Games — Indie iOS Games',
  description: 'Azumbo Games is an indie iOS studio building small, polished games for iPhone and iPad.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Azumbo Games',
    description: 'Indie iOS games for iPhone and iPad.',
    url: SITE_URL,
    siteName: 'Azumbo Games',
    type: 'website',
  },
};

export default function StudioLandingPage() {
  return (
    <div className={styles.shell}>
      <header className={styles.nav}>
        <div className={styles.navInner}>
          <Link className={styles.brand} href="/" aria-label="Azumbo Games home">
            <span className={styles.brandMark} aria-hidden="true">A</span>
            <span>Azumbo Games</span>
          </Link>
          <nav className={styles.navLinks} aria-label="Studio navigation">
            <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className={`${styles.container} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Indie iOS studio</p>
            <h1 className={styles.studioTitle}>Azumbo Games</h1>
            <p className={styles.subtitle}>
              We make focused, playful iPhone and iPad games with clean design, fast loading pages, and privacy-conscious marketing infrastructure for every app we ship.
            </p>
          </div>
          <div className={`${styles.heroCard} ${styles.studioCard}`}>
            <p className={styles.kicker}>Current app</p>
            <span className={styles.studioIcon} aria-hidden="true">🍝</span>
            <h2 className={styles.cardTitle}>La Pasta: 60s Challenge</h2>
            <p className={styles.sectionText}>Italian pasta shape quiz with warm kitchen aesthetics.</p>
            <Link className={styles.cta} href="/lapasta">View app</Link>
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="apps-title">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Portfolio</p>
            <h2 id="apps-title" className={styles.sectionTitle}>Games</h2>
          </div>
          <div className={styles.featuresGrid}>
            {apps.map((app) => (
              <article className={styles.glassCard} key={app.slug}>
                <span className={styles.featureIcon} aria-hidden="true">{app.icon}</span>
                <h3 className={styles.cardTitle}>{app.name}</h3>
                <p className={styles.sectionText}>{app.description}</p>
                <div className={styles.inlineLinks}>
                  <Link className={styles.textLink} href={`/${app.slug}`}>Marketing</Link>
                  <Link className={styles.textLink} href={app.privacyPath}>Privacy</Link>
                  <Link className={styles.textLink} href={app.supportPath}>Support</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <p className={styles.sectionText}>© 2026 Azumbo Games · <a className={styles.textLink} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          <nav className={styles.footerLinks} aria-label="Privacy links">
            {apps.map((app) => <Link key={app.slug} href={app.privacyPath}>{app.name} Privacy</Link>)}
          </nav>
        </div>
      </footer>
    </div>
  );
}

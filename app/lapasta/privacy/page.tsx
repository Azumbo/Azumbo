import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '../../../lib/seo';
import { APP_STORE_URL, CONTACT_EMAIL, LaPastaFooter, LaPastaNav } from '../components';
import styles from '../lapasta.module.css';

export const metadata: Metadata = {
  title: 'La Pasta Privacy Policy',
  description: 'Privacy Policy for La Pasta: 60s Challenge, including local progress, advertising, in-app purchases, children’s privacy, data retention, and contact details.',
  alternates: {
    canonical: `${SITE_URL}/lapasta/privacy`,
  },
  openGraph: {
    title: 'La Pasta Privacy Policy',
    description: 'Privacy Policy for La Pasta: 60s Challenge by AZUMBO.',
    url: `${SITE_URL}/lapasta/privacy`,
    siteName: 'AZUMBO',
    type: 'website',
  },
};

const sections = [
  ['collect', 'What we collect'],
  ['advertising', 'Advertising and App Tracking Transparency'],
  ['iap', 'In-App Purchases'],
  ['children', 'Children’s privacy'],
  ['retention', 'Data retention'],
  ['contact', 'Contact'],
] as const;

export default function LaPastaPrivacyPage() {
  return (
    <div className={styles.shell}>
      <LaPastaNav />
      <main>
        <section className={`${styles.container} ${styles.legalHero}`}>
          <p className={styles.kicker}>Legal · App Store requirement</p>
          <h1 className={styles.legalTitle}>Privacy Policy</h1>
          <p className={styles.subtitle}>For La Pasta: 60s Challenge. Last updated: June 2026.</p>
        </section>

        <div className={`${styles.container} ${styles.legalLayout}`}>
          <aside className={`${styles.legalAside} ${styles.glassCard}`} aria-label="Privacy policy sections">
            <nav>
              {sections.map(([id, label]) => (
                <a className={styles.textLink} href={`#${id}`} key={id}>{label}</a>
              ))}
            </nav>
          </aside>

          <article className={styles.legalCard}>
            <section id="intro" aria-labelledby="intro-title">
              <h2 id="intro-title">About this policy</h2>
              <p>
                This Privacy Policy explains how AZUMBO handles information in La Pasta: 60s Challenge
                (“La Pasta”, “the app”, “we”, “our”, or “us”). The app is a premium-style pasta category
                challenge for iPhone and iPad.
              </p>
              <p>
                La Pasta does not require registration, login, or a user account. You can use the app without
                directly providing your name, email address, or other contact details to us.
              </p>
            </section>

            <section id="collect" aria-labelledby="collect-title">
              <h2 id="collect-title">What we collect</h2>
              <p>La Pasta is designed to keep gameplay simple and local.</p>
              <ul>
                <li>Local game progress may be stored on your device, such as scores, discovered pasta items, settings, and purchase-related app state.</li>
                <li>We do not create user accounts and we do not ask you to submit profile information inside the app.</li>
                <li>We do not operate our own analytics or tracking system for La Pasta at this time.</li>
              </ul>
            </section>

            <section id="advertising" aria-labelledby="advertising-title">
              <h2 id="advertising-title">Advertising and App Tracking Transparency</h2>
              <p>
                La Pasta may show interstitial ads through Google AdMob, including when time expires and a player chooses
                to continue with an additional 20 seconds. Google AdMob may process device identifiers, approximate device
                information, ad interaction data, diagnostics, and related advertising data to provide, measure, and improve ads.
              </p>
              <p>
                Google’s handling of advertising data is described in the{' '}
                <a className={styles.textLink} href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">
                  Google Privacy Policy
                </a>
                . If La Pasta requests permission under Apple’s App Tracking Transparency framework, your choice controls whether the app may track you across other companies’ apps and websites for advertising purposes. You can change this choice in iOS Settings. Your device and Apple privacy settings may also let you limit ad personalization or reset advertising identifiers.
              </p>
            </section>

            <section id="iap" aria-labelledby="iap-title">
              <h2 id="iap-title">In-App Purchases</h2>
              <p>
                La Pasta offers a one-time Remove Ads purchase. In-app purchases are processed by Apple through the App Store.
                We do not receive your credit card number, bank details, or full payment credentials.
              </p>
              <p>
                Apple may provide purchase status information to the app so that La Pasta can unlock purchased features and
                restore eligible purchases on your devices.
              </p>
            </section>

            <section id="children" aria-labelledby="children-title">
              <h2 id="children-title">Children’s privacy</h2>
              <p>
                La Pasta is not directed at children under 13. We do not knowingly collect personal information from children
                under 13. If you believe a child has provided personal information to us, please contact us and we will take
                appropriate steps to delete it where required.
              </p>
            </section>

            <section id="retention" aria-labelledby="retention-title">
              <h2 id="retention-title">Data retention</h2>
              <p>
                Local game progress is stored on your device for as long as the app remains installed or until you clear it
                through available device or app controls. Uninstalling La Pasta removes local app data from the device, subject
                to normal iOS behavior and any backups or purchase records handled by Apple.
              </p>
              <p>
                Advertising and App Store purchase records may be retained by Google or Apple according to their own policies.
              </p>
            </section>

            <section id="contact" aria-labelledby="contact-title">
              <h2 id="contact-title">Contact</h2>
              <p>
                If you have questions about this Privacy Policy or La Pasta, contact us at{' '}
                <a className={styles.textLink} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
              <p>
                For app help, visit <Link className={styles.textLink} href="/lapasta/support">La Pasta Support</Link> or <a className={styles.textLink} href={APP_STORE_URL} rel="noopener noreferrer" target="_blank">La Pasta on the App Store</a>.
              </p>
            </section>
          </article>
        </div>
      </main>
      <LaPastaFooter />
    </div>
  );
}

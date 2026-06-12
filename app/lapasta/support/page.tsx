import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '../../../lib/seo';
import { CONTACT_EMAIL, LaPastaFooter, LaPastaNav } from '../components';
import styles from '../lapasta.module.css';

export const metadata: Metadata = {
  title: 'La Pasta Support',
  description: 'Support and FAQ for La Pasta: 60s Challenge, including gameplay, continues, Remove Ads, restore purchases, haptics, sound, and progress.',
  alternates: {
    canonical: `${SITE_URL}/lapasta/support`,
  },
  openGraph: {
    title: 'La Pasta Support',
    description: 'Support and FAQ for La Pasta: 60s Challenge by AZUMBO.',
    url: `${SITE_URL}/lapasta/support`,
    siteName: 'AZUMBO',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How do I play La Pasta?',
    answer: 'Each round lasts 60 seconds. Watch the four glass jars shuffle, identify the pasta shown, and choose the correct category: corta, lunga, ripiena, pastina, gnocchi, strascinati, or insolita.',
  },
  {
    question: 'How does the +20 seconds continue work?',
    answer: 'When time ends, the app may offer a continue. Watching an interstitial ad can add 20 seconds to the current run, so you can keep building your score.',
  },
  {
    question: 'What does Remove Ads include?',
    answer: 'Remove Ads is a one-time in-app purchase that removes interstitial advertising from La Pasta. The purchase is processed by Apple through the App Store.',
  },
  {
    question: 'How do I restore purchases?',
    answer: 'Use the Restore Purchases option in the app settings or purchase screen. Make sure you are signed in with the same Apple ID used for the original purchase.',
  },
  {
    question: 'Can I turn off haptics or sound?',
    answer: 'Yes. La Pasta is designed with calm, tactile feedback. If available in your app version, use the in-app settings to adjust haptics and sound. You can also use iOS system volume and haptic settings.',
  },
  {
    question: 'Why did my progress disappear?',
    answer: 'Progress is stored locally on your device. Deleting the app, clearing device data, changing devices without a backup, or restoring from an older backup may remove local progress.',
  },
  {
    question: 'Which devices are supported?',
    answer: 'La Pasta supports iPhone and iPad on iOS 18 or later.',
  },
];

export default function LaPastaSupportPage() {
  return (
    <div className={styles.shell}>
      <LaPastaNav />
      <main>
        <section className={`${styles.container} ${styles.legalHero}`}>
          <p className={styles.kicker}>Support · FAQ</p>
          <h1 className={styles.legalTitle}>How can we help?</h1>
          <p className={styles.subtitle}>Short answers for La Pasta: 60s Challenge. If something still feels al dente, contact us directly.</p>
          <div className={styles.actions}>
            <a className={styles.cta} href={`mailto:${CONTACT_EMAIL}?subject=La%20Pasta%20Support`}>Contact support</a>
            <Link className={styles.secondaryCta} href="/lapasta/privacy">Privacy Policy</Link>
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="faq-title">
          <div className={styles.legalCard}>
            <h2 id="faq-title">Frequently asked questions</h2>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <LaPastaFooter />
    </div>
  );
}

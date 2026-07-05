import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd } from '../../../../components/seo/JsonLd';
import {
  BIRD_LINES_COPY,
  BIRD_LINES_THUMBNAIL_URL,
  BIRD_LINES_VIDEO_ID,
  WAITLIST_MAILTO,
  birdLinesWatchAlternates,
  birdLinesWatchPath,
  buildBirdLinesWatchGraph,
} from '../../../../lib/birdLinesVideo';
import { SITE_URL, baseMetadata, isSupportedLocale, LOCALE_OG, type Locale } from '../../../../lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang: Locale = isSupportedLocale(locale) ? locale : 'en';
  const copy = BIRD_LINES_COPY[lang];
  const canonicalPath = birdLinesWatchPath(lang);

  return {
    ...baseMetadata(canonicalPath),
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: `${SITE_URL}${canonicalPath}`,
      languages: birdLinesWatchAlternates(),
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: `${SITE_URL}${canonicalPath}`,
      siteName: 'AZUMBO',
      locale: LOCALE_OG[lang],
      type: 'video.other',
      videos: [
        {
          url: `${SITE_URL}/WhoopsBirdLines.mp4`,
          secureUrl: `${SITE_URL}/WhoopsBirdLines.mp4`,
          type: 'video/mp4',
          width: 1280,
          height: 720,
        },
      ],
      images: [{ url: BIRD_LINES_THUMBNAIL_URL, alt: copy.videoName }],
    },
    twitter: {
      card: 'player',
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: [BIRD_LINES_THUMBNAIL_URL],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

export default async function BirdLinesWatchPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = isSupportedLocale(locale) ? locale : 'en';
  const copy = BIRD_LINES_COPY[lang];
  const structuredData = buildBirdLinesWatchGraph(lang);

  return (
    <main className="min-h-[100dvh] bg-obsidian text-ink-primary">
      <JsonLd data={structuredData} />

      <header className="glass-header gpu-layer px-4 py-3 sm:py-4">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 sm:gap-4">
          <Link
            href={`/${lang}`}
            className="text-xs text-ink-secondary transition-colors duration-300 ease-fluid hover:text-champagne-light sm:text-sm"
          >
            ← {copy.backHome}
          </Link>
          <div className="flex flex-wrap gap-1.5">
            {(['en', 'it', 'ru'] as const).map((k) => (
              <Link
                key={k}
                href={birdLinesWatchPath(k)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-all duration-300 ease-fluid ${
                  lang === k
                    ? 'bg-champagne/90 text-obsidian'
                    : 'glass-surface text-ink-secondary hover:text-ink-primary'
                }`}
              >
                {k.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <nav aria-label="Breadcrumb" className="text-xs text-ink-secondary sm:text-sm">
          <Link href={`/${lang}`} className="transition-colors duration-300 ease-fluid hover:text-champagne-light">
            {copy.breadcrumbHome}
          </Link>
          <span className="mx-2 text-white/20">/</span>
          <span>{copy.breadcrumbVideo}</span>
        </nav>

        <h1 className="chic-heading mt-4 text-2xl sm:mt-6 sm:text-3xl md:text-5xl">{copy.videoName}</h1>
        <p className="chic-body mt-3 max-w-3xl text-base sm:mt-4 sm:text-lg">{copy.bluf}</p>

        <section
          id={BIRD_LINES_VIDEO_ID}
          className="mt-6 flex justify-center sm:mt-8"
          aria-label={copy.videoName}
        >
          <video
            className="gpu-layer aspect-video h-auto w-full max-w-[min(90vw,24rem)] rounded-squircle-lg shadow-glass ring-1 ring-white/10 sm:max-w-sm"
            controls
            playsInline
            preload="metadata"
            poster="/assets/logo/azumbo-logo.png"
            width={1280}
            height={720}
          >
            <source src="/WhoopsBirdLines.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="mt-8 sm:mt-10">
          <h2 className="chic-heading text-xl sm:text-2xl">{copy.aboutTitle}</h2>
          <p className="chic-body mt-3 max-w-3xl text-sm sm:mt-4 sm:text-base">{copy.aboutBody}</p>
          <a href={WAITLIST_MAILTO} className="btn-accent gpu-layer mt-6">
            {copy.waitlistCTA}
          </a>
        </section>

        <section className="mt-8 sm:mt-12">
          <h2 className="chic-heading text-xl sm:text-2xl">{copy.faqTitle}</h2>
          <dl className="mt-4 space-y-4 sm:mt-6 sm:space-y-6">
            {copy.faqs.map((faq) => (
              <div key={faq.question} className="glass-card gpu-layer p-4 sm:p-5">
                <dt className="font-medium text-ink-primary">{faq.question}</dt>
                <dd className="chic-body mt-2">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </article>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-ink-secondary">
        <Link href={`/${lang}`} className="transition-colors duration-300 ease-fluid hover:text-champagne-light">
          {copy.backHome}
        </Link>
        <div className="mt-4 flex justify-center">
          <Image src="/assets/logo/azumbo-logo.png" alt="AZUMBO" width={120} height={30} className="opacity-60" />
        </div>
      </footer>
    </main>
  );
}

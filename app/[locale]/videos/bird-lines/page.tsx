import Image from 'next/image';
import Link from 'next/link';
import { JsonLd } from '../../../../components/seo/JsonLd';
import { SiteHeader } from '../../../../components/site/SiteHeader';
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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
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
    <main className="site-page min-h-[100dvh]">
      <JsonLd data={structuredData} />

      <SiteHeader
        homeHref={`/${lang}`}
        projectLabel="Bird Lines"
        projectHref={birdLinesWatchPath(lang)}
        navLinks={[{ href: `/${lang}`, label: copy.backHome }]}
        localeLinks={(['en', 'it', 'ru'] as const).map((k) => ({
          href: birdLinesWatchPath(k),
          code: k,
          active: lang === k,
        }))}
      />

      <article className="site-container section-gap">
        <nav aria-label="Breadcrumb" className="type-body text-sm">
          <Link href={`/${lang}`} className="transition-all duration-500 ease-out hover:text-champagne-light">
            {copy.breadcrumbHome}
          </Link>
          <span className="mx-2 text-white/15">/</span>
          <span>{copy.breadcrumbVideo}</span>
        </nav>

        <h1 className="type-display mt-6 text-2xl sm:text-3xl md:text-5xl">{copy.videoName}</h1>
        <p className="type-body mt-5 max-w-3xl text-base sm:text-lg">{copy.bluf}</p>

        <section id={BIRD_LINES_VIDEO_ID} className="mt-10 flex justify-center" aria-label={copy.videoName}>
          <video
            className="glass-panel gpu-layer aspect-video h-auto w-full max-w-[min(90vw,24rem)] overflow-hidden sm:max-w-sm"
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

        <section className="mt-12 sm:mt-16">
          <h2 className="type-title text-xl sm:text-2xl">{copy.aboutTitle}</h2>
          <p className="type-body mt-5 max-w-3xl text-sm sm:text-base">{copy.aboutBody}</p>
          <a href={WAITLIST_MAILTO} className="btn-accent gpu-layer mt-8">
            {copy.waitlistCTA}
          </a>
        </section>

        <section className="mt-12 sm:mt-16">
          <h2 className="type-title text-xl sm:text-2xl">{copy.faqTitle}</h2>
          <dl className="mt-8 space-y-5">
            {copy.faqs.map((faq) => (
              <div key={faq.question} className="glass-panel gpu-layer p-8 sm:p-10">
                <dt className="type-title text-base">{faq.question}</dt>
                <dd className="type-body mt-3">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </article>

      <footer className="site-container border-t border-white/10 py-10 text-center">
        <Link href={`/${lang}`} className="type-body text-sm transition-all duration-500 ease-out hover:text-champagne-light">
          {copy.backHome}
        </Link>
        <div className="mt-5 flex justify-center">
          <Image src="/assets/logo/azumbo-logo.png" alt="AZUMBO" width={120} height={30} className="opacity-50" />
        </div>
      </footer>
    </main>
  );
}

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
    <main className="min-h-[100dvh] bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <JsonLd data={structuredData} />

      <header className="border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <Link href={`/${lang}`} className="text-sm text-neutral-500 transition hover:text-neutral-900 dark:hover:text-white">
            ← {copy.backHome}
          </Link>
          <div className="flex gap-2">
            {(['en', 'it', 'ru'] as const).map((k) => (
              <Link
                key={k}
                href={birdLinesWatchPath(k)}
                className={`rounded px-2 py-1 text-xs transition ${
                  lang === k ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300'
                }`}
              >
                {k.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
          <Link href={`/${lang}`} className="hover:underline">
            {copy.breadcrumbHome}
          </Link>
          <span className="mx-2">/</span>
          <span>{copy.breadcrumbVideo}</span>
        </nav>

        <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">{copy.videoName}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">{copy.bluf}</p>

        <section id={BIRD_LINES_VIDEO_ID} className="mt-10" aria-label={copy.videoName}>
          <video
            className="mx-auto w-full max-w-3xl rounded-2xl shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800"
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

        <section className="mt-10">
          <h2 className="text-2xl font-bold">{copy.aboutTitle}</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-neutral-600 dark:text-neutral-300">{copy.aboutBody}</p>
          <a
            href={WAITLIST_MAILTO}
            className="mt-6 inline-block rounded-full bg-black px-6 py-2 text-sm text-white dark:bg-white dark:text-black"
          >
            {copy.waitlistCTA}
          </a>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">{copy.faqTitle}</h2>
          <dl className="mt-6 space-y-6">
            {copy.faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
                <dt className="font-semibold">{faq.question}</dt>
                <dd className="mt-2 text-neutral-600 dark:text-neutral-300">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </article>

      <footer className="border-t border-neutral-200 py-8 text-center text-sm text-neutral-500 dark:border-neutral-800">
        <Link href={`/${lang}`} className="hover:underline">
          {copy.backHome}
        </Link>
        <div className="mt-4 flex justify-center">
          <Image src="/assets/logo/azumbo-logo.png" alt="AZUMBO" width={120} height={30} className="opacity-70" />
        </div>
      </footer>
    </main>
  );
}

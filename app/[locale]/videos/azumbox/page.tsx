import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd } from '../../../../components/seo/JsonLd';
import { SiteHeader } from '../../../../components/site/SiteHeader';
import {
  SITE_URL,
  VIDEO_PUBLISH_DATE,
  baseMetadata,
  buildBreadcrumbSchema,
  buildLanguageAlternates,
  isSupportedLocale,
  LOCALE_HTML_LANG,
  LOCALE_OG,
  ORGANIZATION_ID,
  type Locale,
} from '../../../../lib/seo';

const VIDEO_PATH = '/videos/azumbox';
const VIDEO_ID = 'azumbox-player';
const CONTENT_URL = `${SITE_URL}/azumbox-demo.mp4`;
const THUMB_URL = `${SITE_URL}/assets/logo/azumbo-logo.png`;

const COPY: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    breadcrumbHome: string;
    breadcrumbVideo: string;
    bluf: string;
    aboutTitle: string;
    aboutBody: string;
    backHome: string;
    videoName: string;
  }
> = {
  en: {
    metaTitle: 'Azumbox demo video',
    metaDescription: 'Official Azumbox demo preview from AZUMBO — a calm mobile game concept with elegant pacing.',
    breadcrumbHome: 'Home',
    breadcrumbVideo: 'Azumbox video',
    bluf: 'This page is the official watch page for the Azumbox demo preview by AZUMBO.',
    aboutTitle: 'About this video',
    aboutBody:
      'The clip previews Azumbox: a polished mobile game concept with calm pacing, tasteful visuals, and smart casual mechanics. The full landing page has more product context and support links.',
    backHome: 'Back to AZUMBO',
    videoName: 'Azumbox — Demo Preview',
  },
  it: {
    metaTitle: 'Video demo Azumbox',
    metaDescription: 'Demo ufficiale di Azumbox da AZUMBO — concept di gioco mobile con ritmo calmo ed elegante.',
    breadcrumbHome: 'Home',
    breadcrumbVideo: 'Video Azumbox',
    bluf: 'Questa è la watch page ufficiale della demo Azumbox di AZUMBO.',
    aboutTitle: 'Info sul video',
    aboutBody:
      'Il clip presenta Azumbox: un concept di gioco mobile raffinato, con ritmo calmo e meccaniche casual intelligenti. La landing completa ha più contesto e link utili.',
    backHome: 'Torna ad AZUMBO',
    videoName: 'Azumbox — Anteprima demo',
  },
  ru: {
    metaTitle: 'Демо-видео Azumbox',
    metaDescription: 'Официальное демо Azumbox от AZUMBO — спокойная мобильная игра с аккуратной эстетикой.',
    breadcrumbHome: 'Главная',
    breadcrumbVideo: 'Видео Azumbox',
    bluf: 'Это официальная watch-страница демо-превью Azumbox от AZUMBO.',
    aboutTitle: 'О видео',
    aboutBody:
      'Ролик показывает Azumbox: концепт мобильной игры со спокойным ритмом и умной casual-механикой. Полная посадочная страница содержит больше деталей и ссылок.',
    backHome: 'На главную AZUMBO',
    videoName: 'Azumbox — демо-превью',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang: Locale = isSupportedLocale(locale) ? locale : 'en';
  const copy = COPY[lang];
  const canonicalPath = `/${lang}${VIDEO_PATH}`;

  return {
    ...baseMetadata(canonicalPath),
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: `${SITE_URL}${canonicalPath}`,
      languages: buildLanguageAlternates(VIDEO_PATH),
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
          url: CONTENT_URL,
          secureUrl: CONTENT_URL,
          type: 'video/mp4',
          width: 720,
          height: 1280,
        },
      ],
      images: [{ url: THUMB_URL, alt: copy.videoName }],
    },
  };
}

export default async function AzumboxWatchPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = isSupportedLocale(locale) ? locale : 'en';
  const copy = COPY[lang];
  const pageUrl = `${SITE_URL}/${lang}${VIDEO_PATH}`;

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'VideoObject',
        '@id': `${pageUrl}#video`,
        name: copy.videoName,
        description: copy.metaDescription,
        thumbnailUrl: THUMB_URL,
        uploadDate: VIDEO_PUBLISH_DATE,
        contentUrl: CONTENT_URL,
        embedUrl: `${pageUrl}#${VIDEO_ID}`,
        inLanguage: LOCALE_HTML_LANG[lang],
        publisher: { '@id': ORGANIZATION_ID },
      },
      buildBreadcrumbSchema([
        { name: 'AZUMBO', path: `/${lang}` },
        { name: copy.breadcrumbVideo, path: `/${lang}${VIDEO_PATH}` },
      ]),
    ],
  };

  return (
    <main className="site-page min-h-[100dvh]">
      <JsonLd data={graph} />
      <SiteHeader
        homeHref={`/${lang}`}
        projectLabel="Azumbox"
        projectHref="/azumbox"
        navLinks={[{ href: `/${lang}`, label: copy.backHome }]}
        localeLinks={(['en', 'it', 'ru'] as const).map((k) => ({
          href: `/${k}${VIDEO_PATH}`,
          code: k,
          active: lang === k,
        }))}
      />

      <article className="site-container section-gap">
        <nav aria-label="Breadcrumb" className="type-body text-sm">
          <Link href={`/${lang}`} className="hover:text-champagne">
            {copy.breadcrumbHome}
          </Link>
          <span className="mx-2 text-neutral-300">/</span>
          <span>{copy.breadcrumbVideo}</span>
        </nav>

        <h1 className="type-display mt-6 text-2xl sm:text-4xl">{copy.videoName}</h1>
        <p className="type-body mt-5 max-w-3xl text-base sm:text-lg">{copy.bluf}</p>

        <section id={VIDEO_ID} className="mt-10 flex justify-center" aria-label={copy.videoName}>
          <video
            className="glass-panel gpu-layer aspect-[9/16] h-auto w-full max-w-[min(90vw,22rem)] overflow-hidden"
            controls
            playsInline
            preload="metadata"
            poster="/assets/logo/azumbo-logo.png"
            width={720}
            height={1280}
          >
            <source src="/azumbox-demo.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="mt-12">
          <h2 className="type-title text-xl">{copy.aboutTitle}</h2>
          <p className="type-body mt-4 max-w-3xl">{copy.aboutBody}</p>
          <Link href="/azumbox" className="btn-accent gpu-layer mt-8 inline-flex">
            Azumbox
          </Link>
        </section>
      </article>

      <footer className="site-container border-t border-neutral-200 py-10 text-center">
        <Link href={`/${lang}`} className="type-body text-sm hover:text-champagne">
          {copy.backHome}
        </Link>
        <div className="mt-5 flex justify-center">
          <Image src="/assets/logo/azumbo-logo.png" alt="AZUMBO" width={120} height={30} className="opacity-50" />
        </div>
      </footer>
    </main>
  );
}

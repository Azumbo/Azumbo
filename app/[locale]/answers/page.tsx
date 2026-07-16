import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '../../../components/site/SiteHeader';
import { JsonLd } from '../../../components/seo/JsonLd';
import {
  SITE_URL,
  baseMetadata,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildLanguageAlternates,
  isSupportedLocale,
  LOCALE_OG,
  type Locale,
} from '../../../lib/seo';
import { ANSWER_HUB } from '../../../lib/answerHub';

type Lang = Locale;

const isLang = (value: string): value is Lang => isSupportedLocale(value);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang: Lang = isLang(locale) ? locale : 'en';
  const copy = ANSWER_HUB[lang];
  const canonicalPath = `/${lang}/answers`;

  return {
    ...baseMetadata(canonicalPath),
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: `${SITE_URL}${canonicalPath}`,
      languages: buildLanguageAlternates('/answers'),
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: `${SITE_URL}${canonicalPath}`,
      siteName: 'AZUMBO',
      locale: LOCALE_OG[lang],
      type: 'website',
    },
  };
}

export default async function AnswersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Lang = isLang(locale) ? locale : 'en';
  const copy = ANSWER_HUB[lang];
  const pageUrl = `${SITE_URL}/${lang}/answers`;

  return (
    <main className="landing-shell site-page relative min-h-[100dvh]">
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: 'AZUMBO', path: `/${lang}` },
            { name: copy.breadcrumb, path: `/${lang}/answers` },
          ]),
          buildFaqPageSchema(
            pageUrl,
            lang,
            copy.items.map((item) => ({ question: item.question, answer: item.answer }))
          ),
        ]}
      />

      <SiteHeader
        homeHref={`/${lang}`}
        navLinks={[
          { href: `/${lang}`, label: copy.navHome },
          { href: `/${lang}/answers`, label: copy.breadcrumb },
          { href: '/lapasta', label: 'La Pasta' },
          { href: '/ciromap', label: 'Ciro.Map' },
        ]}
        localeLinks={(['en', 'it', 'ru'] as Lang[]).map((k) => ({
          href: `/${k}/answers`,
          code: k,
          active: lang === k,
        }))}
      />

      <section className="site-container section-gap">
        <p className="type-kicker">{copy.kicker}</p>
        <h1 className="type-display mt-6 text-4xl sm:text-5xl">{copy.title}</h1>
        <p className="type-body-strong mt-6 max-w-2xl text-lg">{copy.bluf}</p>
      </section>

      <section className="site-container section-gap pt-0">
        <dl className="space-y-5">
          {copy.items.map((item) => (
            <div key={item.question} className="glass-panel gpu-layer p-8 sm:p-10" id={item.id}>
              <dt className="type-title text-base sm:text-lg">{item.question}</dt>
              <dd className="type-body mt-3">{item.answer}</dd>
            </div>
          ))}
        </dl>
        <p className="type-body mt-10 text-sm">
          <Link href={`/${lang}`} className="text-champagne hover:underline">
            {copy.backHome}
          </Link>
        </p>
      </section>
    </main>
  );
}

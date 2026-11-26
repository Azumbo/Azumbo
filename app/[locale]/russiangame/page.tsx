import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '../../../components/site/SiteHeader';
import { JsonLd, SoftwareApplicationJsonLd } from '../../../components/seo/JsonLd';
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
import {
  RUSSIANGAME_APP_STORE_URL,
  RUSSIANGAME_COPY,
  RUSSIANGAME_HERO_IMAGE,
  RUSSIANGAME_OG_IMAGE,
  RUSSIANGAME_PATH,
  RUSSIANGAME_PRIVACY_URL,
  RUSSIANGAME_SUPPORT_URL,
  russiangamePath,
} from '../../../lib/russiangame-content';

type Lang = Locale;
const isLang = (value: string): value is Lang => isSupportedLocale(value);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang: Lang = isLang(locale) ? locale : 'en';
  const copy = RUSSIANGAME_COPY[lang];
  const canonicalPath = russiangamePath(lang);
  const imageUrl = `${SITE_URL}${RUSSIANGAME_OG_IMAGE}`;

  return {
    ...baseMetadata(canonicalPath),
    title: copy.metaTitle,
    description: copy.metaDescription,
    keywords: copy.keywords,
    alternates: {
      canonical: `${SITE_URL}${canonicalPath}`,
      languages: buildLanguageAlternates(RUSSIANGAME_PATH),
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: `${SITE_URL}${canonicalPath}`,
      siteName: 'AZUMBO',
      locale: LOCALE_OG[lang],
      type: 'website',
      images: [{ url: imageUrl, width: 422, height: 514, alt: copy.screenshotAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function RussianGameLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang: Lang = isLang(locale) ? locale : 'en';
  const copy = RUSSIANGAME_COPY[lang];
  const pageUrl = `${SITE_URL}${russiangamePath(lang)}`;
  const ctaHref = RUSSIANGAME_APP_STORE_URL ?? '#coming-soon';
  const ctaExternal = Boolean(RUSSIANGAME_APP_STORE_URL);

  return (
    <main className="relative min-h-[100dvh] bg-[#050914] text-[#f3f5f8]">
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: 'AZUMBO', path: `/${lang}` },
            { name: copy.breadcrumb, path: russiangamePath(lang) },
          ]),
          buildFaqPageSchema(pageUrl, lang, copy.faqs),
        ]}
      />
      <SoftwareApplicationJsonLd
        name="Russian game: Ring Maze"
        description={copy.metaDescription}
        url={pageUrl}
        applicationCategory="GameApplication"
        operatingSystem="watchOS 10+"
        inLanguage="en,ru"
        image={`${SITE_URL}${RUSSIANGAME_HERO_IMAGE}`}
        downloadUrl={RUSSIANGAME_APP_STORE_URL ?? undefined}
        offers={{ price: '0', priceCurrency: 'USD' }}
        authors={['Kostiantyn Kravchenko', 'AzumboGames']}
      />

      <div className="rg-landing">
        <SiteHeader
          homeHref={`/${lang}`}
          navLinks={[
            { href: `/${lang}`, label: copy.navHome },
            { href: russiangamePath(lang), label: copy.navProduct },
            { href: '/lapasta', label: 'La Pasta' },
            { href: '/ciromap', label: 'Ciro.Map' },
          ]}
          localeLinks={(['en', 'it', 'ru'] as Lang[]).map((k) => ({
            href: russiangamePath(k),
            code: k,
            active: lang === k,
          }))}
        />

        <section className="site-container grid items-center gap-10 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-20 lg:pt-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4a574]">
              {copy.brand}
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {copy.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#c5ccd8] sm:text-lg">
              {copy.bluf}
            </p>
            <p className="mt-4 text-sm font-medium text-[#9eb0d0]">{copy.status}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {ctaExternal ? (
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#007aff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0062cc]"
                >
                  {copy.ctaPrimary}
                </a>
              ) : (
                <span
                  id="coming-soon"
                  className="inline-flex items-center justify-center rounded-full bg-[#007aff]/90 px-6 py-3 text-sm font-semibold text-white"
                >
                  {copy.ctaPrimary}
                </span>
              )}
              <a
                href="#legal"
                className="text-sm font-medium text-[#c5ccd8] underline-offset-4 hover:text-white hover:underline"
              >
                {copy.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_40%,rgba(74,96,150,0.35),transparent_70%)]"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b132b] shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
              <Image
                src={RUSSIANGAME_HERO_IMAGE}
                alt={copy.screenshotAlt}
                width={422}
                height={514}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="site-container border-t border-white/10 py-14 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {copy.aboutTitle}
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-[#c5ccd8]">
            {copy.aboutBody.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="site-container pb-14 sm:pb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {copy.featuresTitle}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {copy.features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#c5ccd8]">{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="site-container grid gap-10 border-t border-white/10 py-14 sm:py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {copy.howTitle}
            </h2>
            <ol className="mt-6 space-y-3 text-base text-[#c5ccd8]">
              {copy.howSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#007aff]/20 text-xs font-semibold text-[#9ec1ff]">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <h3 className="mt-10 text-xl font-semibold text-white">{copy.pricingTitle}</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#c5ccd8]">{copy.pricingBody}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/russiangame/gameplay-1.png"
              alt={copy.screenshotAlt}
              width={422}
              height={514}
              className="h-auto w-full rounded-2xl border border-white/10 object-cover"
            />
            <Image
              src="/russiangame/gameplay-2.png"
              alt={copy.screenshotAlt}
              width={422}
              height={514}
              className="mt-8 h-auto w-full rounded-2xl border border-white/10 object-cover"
            />
          </div>
        </section>

        <section className="site-container border-t border-white/10 py-14 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {copy.faqTitle}
          </h2>
          <dl className="mt-8 space-y-5">
            {copy.faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <dt className="text-base font-semibold text-white sm:text-lg">{item.question}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-[#c5ccd8] sm:text-base">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <footer
          id="legal"
          className="site-container border-t border-white/10 py-10 text-sm text-[#9aa3b5]"
        >
          <div className="flex flex-wrap gap-5">
            <a
              href={RUSSIANGAME_PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              {copy.legalPrivacy}
            </a>
            <a
              href={RUSSIANGAME_SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              {copy.legalSupport}
            </a>
            <Link href={`/${lang}`} className="hover:text-white hover:underline">
              AZUMBO
            </Link>
          </div>
          <p className="mt-5">{copy.footerNote}</p>
        </footer>
      </div>
    </main>
  );
}

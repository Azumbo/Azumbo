'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '../../components/site/SiteHeader';

type Lang = 'en' | 'it' | 'ru';

type LocalizedCopy = {
  nav: string;
  headline: string;
  description: string;
  videoLabel: string;
  videoHint: string;
  vibeItems: { title: string; text: string }[];
  cta: string;
  ctaHref?: string;
};

const COPY: Record<Lang, LocalizedCopy> = {
  en: {
    nav: 'Language',
    headline: 'Azumbox — the mobile game for people who call chaos “curated spontaneity.”',
    description:
      'A polished little escape designed for calm minds and clever smiles. Think smooth pacing, tasteful visuals, and just enough strategy to feel brilliant before breakfast.',
    videoLabel: 'Demo Preview',
    videoHint: 'Trailer dropping soon',
    vibeItems: [
      {
        title: 'Quiet Luxury',
        text: 'Clean visual rhythm, soft contrast, and details that feel intentionally understated.',
      },
      {
        title: 'Calm Intelligence',
        text: 'Thoughtful mechanics that reward focus, not frenzy.',
      },
      {
        title: 'Pocket Retreat',
        text: 'A relaxing ritual for commutes, coffee breaks, and elegant procrastination.',
      },
    ],
    cta: 'Donate to support',
    ctaHref: 'https://www.gofundme.com/u/azumbox',
  },
  it: {
    nav: 'Lingua',
    headline: 'Azumbox — il gioco mobile per chi chiama il caos “spontaneità curata”.',
    description:
      'Una piccola fuga raffinata, pensata per menti calme e sorrisi intelligenti. Ritmo fluido, estetica elegante e la giusta strategia per sentirsi brillanti già al mattino.',
    videoLabel: 'Anteprima Demo',
    videoHint: 'Trailer in arrivo',
    vibeItems: [
      {
        title: 'Lusso Silenzioso',
        text: 'Ritmo visivo pulito, contrasti morbidi e dettagli volutamente essenziali.',
      },
      {
        title: 'Intelligenza Calma',
        text: 'Meccaniche studiate per premiare concentrazione, non frenesia.',
      },
      {
        title: 'Rifugio Tascabile',
        text: 'Un rituale rilassante per tragitti, pause caffè e procrastinazione di classe.',
      },
    ],
    cta: 'Supporta il lancio di Azumbox',
    ctaHref:
      'https://www.produzionidalbasso.com/project/azumbox-portiamo-il-minimalismo-digitale-calabrese-nell-app/',
  },
  ru: {
    nav: 'Язык',
    headline: 'Azumbox — мобильная игра для тех, кто называет хаос «продуманной спонтанностью».',
    description:
      'Стильный мини-отдых для ясного ума и лёгкой улыбки. Плавный ритм, чистая эстетика и ровно столько стратегии, чтобы почувствовать себя гением ещё до первой чашки кофе.',
    videoLabel: 'Демо-превью',
    videoHint: 'Трейлер скоро',
    vibeItems: [
      {
        title: 'Тихая Роскошь',
        text: 'Чистый визуальный стиль, мягкий контраст и намеренно сдержанные детали.',
      },
      {
        title: 'Спокойный Интеллект',
        text: 'Продуманные механики, где важны внимание и вкус, а не спешка.',
      },
      {
        title: 'Карманная Передышка',
        text: 'Расслабляющий ритуал для поездок, кофе-брейков и элегантного отдыха.',
      },
    ],
    cta: 'Поддержать запуск Azumbox',
  },
};

export default function AzumboxPage() {
  const [lang, setLang] = useState<Lang>('en');
  const t = useMemo(() => COPY[lang], [lang]);

  return (
    <main className="site-page min-h-[100dvh]">
      <SiteHeader
        homeHref="/en"
        projectLabel="Azumbox"
        projectHref="/azumbox"
        navLinks={[
          { href: '/en', label: 'Azumbo' },
          { href: 'mailto:azumbogames@gmail.com', label: 'Contact', external: true },
        ]}
        trailing={
          <div className="flex items-center gap-2">
            <span className="type-kicker hidden sm:inline">{t.nav}</span>
            {(['en', 'it', 'ru'] as Lang[]).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`locale-pill ${lang === code ? 'locale-pill--active' : ''}`}
                aria-pressed={lang === code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        }
      />

      <div className="site-container section-gap">
        <p className="type-kicker">Mobile game landing</p>
        <h1 className="type-display mt-6 max-w-4xl text-3xl sm:text-5xl md:text-6xl">{t.headline}</h1>
        <p className="type-body mt-8 max-w-2xl text-base sm:text-lg">{t.description}</p>

        <div className="mx-auto mt-12 w-full max-w-[24rem]">
          <div className="glass-panel gpu-layer overflow-hidden p-2">
            <Link
              href={lang === 'en' ? '/en/videos/azumbox' : `/${lang}/videos/azumbox`}
              className="group relative block overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-50"
              aria-label={t.videoLabel}
            >
              <Image
                src="/assets/logo/azumbo-logo.png"
                alt="Azumbox demo preview"
                width={720}
                height={1280}
                className="aspect-[9/16] max-h-[70vh] w-full object-contain p-16 opacity-90"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-neutral-900/10 transition group-hover:bg-neutral-900/20">
                <span className="glass-panel rounded-full px-5 py-2.5 text-sm font-light text-ink-primary shadow-none">
                  ▶ {t.videoLabel}
                </span>
              </span>
            </Link>
            <p className="type-kicker mt-4 text-center">{t.videoHint}</p>
          </div>
        </div>

        <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.vibeItems.map((item, idx) => (
            <article key={item.title} className="glass-panel gpu-layer glass-panel--interactive p-8 sm:p-10">
              <span className="type-kicker">0{idx + 1}</span>
              <h2 className="type-title mt-4 text-lg">{item.title}</h2>
              <p className="type-body mt-4 text-sm">{item.text}</p>
            </article>
          ))}
        </section>

        <div className="mt-12">
          {t.ctaHref ? (
            <a href={t.ctaHref} target="_blank" rel="noopener noreferrer" className="btn-accent gpu-layer">
              {t.cta}
            </a>
          ) : (
            <button type="button" className="btn-accent gpu-layer">
              {t.cta}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

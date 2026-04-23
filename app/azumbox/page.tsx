'use client';

import { useMemo, useState } from 'react';

type Lang = 'en' | 'it' | 'ru';

type LocalizedCopy = {
  nav: string;
  headline: string;
  description: string;
  videoLabel: string;
  videoHint: string;
  vibeItems: { title: string; text: string }[];
  cta: string;
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
    cta: 'Download Azumbox',
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
    cta: 'Scarica Azumbox',
  },
  ru: {
    nav: 'Язык',
    headline: 'Azumbox — мобильная игра для тех, кто называет хаос «изящной импровизацией».',
    description:
      'Стильный мини-отдых для спокойного ума и умной улыбки. Плавный ритм, чистая эстетика и ровно столько стратегии, чтобы почувствовать себя гением до завтрака.',
    videoLabel: 'Демо-превью',
    videoHint: 'Трейлер скоро',
    vibeItems: [
      {
        title: 'Тихая Роскошь',
        text: 'Чистый визуальный ритм, мягкий контраст и намеренно сдержанные детали.',
      },
      {
        title: 'Спокойный Интеллект',
        text: 'Продуманные механики, где важны внимание и вкус, а не спешка.',
      },
      {
        title: 'Карманный Ретрит',
        text: 'Расслабляющий ритуал для дороги, кофе-брейков и элегантного отдыха.',
      },
    ],
    cta: 'Скачать Azumbox',
  },
};

export default function AzumboxPage() {
  const [lang, setLang] = useState<Lang>('en');
  const t = useMemo(() => COPY[lang], [lang]);

  return (
    <main className="min-h-[100dvh] bg-white text-neutral-900">
      <div className="container-nx flex min-h-[100dvh] flex-col px-4 py-6 sm:py-8 md:py-10">
        <header className="flex items-center justify-between border-b border-neutral-200 pb-4">
          <span className="text-sm uppercase tracking-[0.14em] text-neutral-500">Azumbox</span>
          <nav aria-label="Language switcher" className="flex items-center gap-2">
            <span className="hidden text-xs text-neutral-500 sm:inline">{t.nav}</span>
            {(['en', 'it', 'ru'] as Lang[]).map((code) => {
              const isActive = code === lang;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={`rounded-full border px-3 py-1.5 text-xs tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'border-neutral-900 bg-neutral-900 text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)]'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-900'
                  }`}
                  aria-pressed={isActive}
                >
                  {code.toUpperCase()}
                </button>
              );
            })}
          </nav>
        </header>

        <section className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center py-12 sm:py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Mobile game landing</p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight text-neutral-950 sm:text-5xl md:text-6xl">
            {t.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">{t.description}</p>

          {/* Видео-контейнер */}
          <div className="mx-auto mt-10 w-full max-w-[24rem]">
            <div className="rounded-[2.2rem] border border-neutral-800/60 bg-neutral-900 p-1.5 shadow-[0_28px_75px_rgba(24,24,27,0.3)]">
              <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-neutral-50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aspect-[9/16] max-h-[70vh] w-full object-cover"
                >
                  <source src="/azumbox-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.vibeItems.map((item, idx) => (
              <article key={item.title} className="rounded-2xl border border-neutral-100 p-5 sm:p-6">
                <span className="text-sm text-neutral-300">0{idx + 1}</span>
                <h2 className="mt-2 text-lg font-medium">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.text}</p>
              </article>
            ))}
          </section>

          <div className="mt-10">
            <button
              type="button"
              className="rounded-full bg-neutral-900 px-8 py-3 text-sm font-medium text-white shadow-[0_16px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              {t.cta}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

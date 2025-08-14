'use client';

import type { Dispatch, SetStateAction } from 'react';

export type Language = 'en' | 'it' | 'ru';

export default function LanguageSwitch({ lang, setLang }: { lang: Language; setLang: Dispatch<SetStateAction<Language>>; }) {
  const languages: Language[] = ['en', 'it', 'ru'];

  return (
    <div className="sticky top-0 flex gap-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur px-2 py-1 rounded-md shadow-sm">
      {languages.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`text-sm uppercase ${lang === l ? 'font-bold underline' : ''}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}


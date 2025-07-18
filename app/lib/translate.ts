import ru from '../locales/ru.json';

type Lang = 'ru';

const translations = { ru } as const;

export function t(key: string, lang: Lang = 'ru'): string {
  const parts = key.split('.');
  let curr: any = translations[lang];
  for (const p of parts) {
    curr = curr?.[p];
    if (!curr) return key;
  }
  return curr as string;
}

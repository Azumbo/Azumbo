import { useRouter } from 'next/router'
import en from '../en.json'
import ru from '../ru.json'
import it from '../it.json'

const translations: Record<string, { title: string; subtitle: string }> = { en, ru, it }

export default function Home() {
  const { locale } = useRouter()
  const t = translations[locale ?? 'en'] || translations.en
  return (
    <main style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
    </main>
  )
}

import { useRouter } from 'next/router'
import en from '../en.json'
import ru from '../ru.json'
import it from '../it.json'

const translations: Record<string, { title: string; subtitle: string; description: string; tagline: string; cta: string }> = { en, ru, it }

export default function Home() {
  const { locale } = useRouter()
  const t = translations[locale ?? 'en'] || translations.en
  return (
    <main className="container">
      <h1>{t.title}</h1>
      <p className="subtitle">{t.subtitle}</p>
      <p className="description">{t.description}</p>
      <p className="tagline">{t.tagline}</p>
      <a className="cta" href="https://azumbo-game-verse.lovable.app/" target="_blank" rel="noopener noreferrer">
        {t.cta}
      </a>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .container {
          font-family: 'Press Start 2P', monospace;
          background: linear-gradient(#1a1c2c, #5d275d);
          color: #fff;
          text-align: center;
          min-height: 100vh;
          padding-top: 20vh;
        }
        .subtitle {
          color: #ff8e63;
          margin-top: 1rem;
        }
        .description,
        .tagline {
          margin-top: 1rem;
        }
        .cta {
          display: inline-block;
          margin-top: 2rem;
          padding: 0.5rem 1rem;
          background: #ff8e63;
          color: #000;
          text-decoration: none;
          border-radius: 4px;
        }
      `}</style>
    </main>
  )
}

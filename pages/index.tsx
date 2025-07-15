import { useRouter } from 'next/router'
import en from '../en.json'
import ru from '../ru.json'
import it from '../it.json'
import Hero from '../components/Hero'
import Games from '../components/Games'
import About from '../components/About'
import Contact from '../components/Contact'

const translations: Record<string, {
  title: string
  subtitle: string
  description: string
  tagline: string
  cta: string
  gamesTitle: string
  aboutTitle: string
  contactTitle: string
}> = { en, ru, it }

export default function Home() {
  const { locale } = useRouter()
  const t = translations[locale ?? 'en'] || translations.en
  return (
    <main className="container">
      <Hero t={t} />
      <Games t={t} />
      <About t={t} />
      <Contact t={t} />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        body {
          margin: 0;
        }
        .container {
          font-family: 'Press Start 2P', monospace;
          background: linear-gradient(#1a1c2c, #5d275d);
          color: #fff;
          text-align: center;
          min-height: 100vh;
        }
      `}</style>
    </main>
  )
}

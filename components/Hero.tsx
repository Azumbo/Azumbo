import Image from 'next/image'

export default function Hero({ t }: { t: any }) {
  return (
    <section className="hero">
      <h1>{t.title}</h1>
      <p className="subtitle">{t.subtitle}</p>
      <a className="cta" href="https://azumbo-game-verse.lovable.app/" target="_blank" rel="noopener noreferrer">
        {t.cta}
      </a>
      <style jsx>{`
        .hero {
          padding: 6rem 1rem 4rem;
          animation: fadeIn 1s ease-in-out;
        }
        .subtitle {
          color: #ff8e63;
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
          image-rendering: pixelated;
        }
        .cta:hover {
          animation: pulse 0.6s infinite;
        }
        @keyframes pulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes fadeIn {
          from { opacity:0; transform: translateY(20px); }
          to { opacity:1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

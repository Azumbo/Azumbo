export default function Games({ t }: { t: any }) {
  return (
    <section className="games">
      <h2>{t.gamesTitle}</h2>
      <img src="https://via.placeholder.com/240x160.png?text=Perdonauta" alt="Perdonauta" loading="lazy" />
      <a className="cta" href="https://azumbo-game-verse.lovable.app/" target="_blank" rel="noopener noreferrer">
        {t.cta}
      </a>
      <style jsx>{`
        .games {
          margin-top: 2rem;
          padding: 2rem 1rem;
          animation: fadeIn 1s ease-in-out;
        }
        h2 {
          color: #ff8e63;
        }
        img {
          margin-top: 1rem;
          border: 2px solid #fff;
          image-rendering: pixelated;
        }
        .cta {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background: #fff;
          color: #000;
          text-decoration: none;
          border-radius: 4px;
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

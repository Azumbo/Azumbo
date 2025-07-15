export default function About({ t }: { t: any }) {
  return (
    <section className="about">
      <h2>{t.aboutTitle}</h2>
      <p>{t.description}</p>
      <p className="tagline">{t.tagline}</p>
      <style jsx>{`
        .about {
          margin-top: 2rem;
          padding: 2rem 1rem;
          animation: fadeIn 1s ease-in-out;
        }
        h2 {
          color: #ff8e63;
        }
        .tagline {
          margin-top: 1rem;
        }
        @keyframes fadeIn {
          from { opacity:0; transform: translateY(20px); }
          to { opacity:1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

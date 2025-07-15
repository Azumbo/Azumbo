export default function Contact({ t }: { t: any }) {
  return (
    <section className="contact">
      <h2>{t.contactTitle}</h2>
      <p>
        <a href="mailto:hello@azumbo.com" className="email">hello@azumbo.com</a>
      </p>
      <style jsx>{`
        .contact {
          margin-top: 2rem;
          padding: 2rem 1rem 4rem;
          animation: fadeIn 1s ease-in-out;
        }
        h2 {
          color: #ff8e63;
        }
        .email {
          color: #fff;
        }
        @keyframes fadeIn {
          from { opacity:0; transform: translateY(20px); }
          to { opacity:1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

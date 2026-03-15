import Link from 'next/link';

type GameCard = {
  title: string;
  description: string;
  icon: string;
  previewLabel: string;
};

const games: GameCard[] = [
  {
    title: 'Frogger',
    description:
      'Classic frog-style hops with modern UX. Web • Android • iOS (soon)',
    icon: '🐸',
    previewLabel: 'Frogger gameplay preview',
  },
  {
    title: 'Space Invaders',
    description:
      'Defend Earth from alien invasion in this classic arcade shooter. Web • Android • iOS (soon)',
    icon: '🚀',
    previewLabel: 'Space Invaders gameplay preview',
  },
  {
    title: 'Pac-Man',
    description:
      'Navigate the maze, eat dots and avoid ghosts in this timeless classic. Web • Android • iOS (soon)',
    icon: '👻',
    previewLabel: 'Pac-Man gameplay preview',
  },
];

const dividerPalette = ['#22c55e', '#f59e0b', '#3b82f6', '#ef4444', '#a855f7'];

function PixelDivider() {
  return (
    <div className="my-8 flex h-3 w-full overflow-hidden border-y border-black" aria-hidden>
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={`px-${i}`}
          className="h-full flex-1"
          style={{ backgroundColor: dividerPalette[i % dividerPalette.length] }}
        />
      ))}
    </div>
  );
}

function SectionCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <article className="border border-black bg-white p-5 transition-transform duration-200 hover:-translate-y-0.5">
      <h3 className="text-lg font-bold text-black">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-black">{body}</p>
    </article>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="border border-black bg-white p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xl font-black tracking-tight">AZUMBO</p>
            <nav aria-label="Primary">
              <ul className="flex items-center gap-4 text-sm font-semibold sm:gap-6">
                <li>
                  <a className="transition-colors hover:text-blue-600" href="#games">
                    GAMES
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-blue-600" href="#services">
                    SERVICES
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-blue-600" href="#contact">
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <button className="border border-black px-2 py-1 transition hover:-translate-y-0.5 hover:bg-blue-100">
                EN
              </button>
              <button className="border border-black px-2 py-1 transition hover:-translate-y-0.5 hover:bg-blue-100">
                IT
              </button>
              <button className="border border-black px-2 py-1 transition hover:-translate-y-0.5 hover:bg-blue-100">
                RU
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em]">
              MOBILE-FIRST GAMES WITH HUMOR &amp; HEART.
            </p>
            <h1 className="text-3xl font-black leading-tight sm:text-4xl">
              AZUMBO — Indie Game Studio
            </h1>
            <p className="max-w-3xl text-base leading-relaxed">
              We craft fast, funny and viral-ready casual games for Android, iOS and Nintendo
              Switch.
            </p>
            <Link
              href="#contact"
              className="inline-flex border border-black bg-white px-4 py-2 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white"
            >
              Contact
            </Link>
          </div>
        </header>

        <PixelDivider />

        <section aria-labelledby="platforms-title">
          <h2 id="platforms-title" className="text-xs font-black uppercase tracking-[0.16em]">
            PLATFORMS
          </h2>
          <div className="mt-3 inline-flex flex-wrap items-center gap-2 border border-black px-3 py-2 text-sm font-medium">
            <span aria-hidden>◼</span>
            <span aria-hidden>◆</span>
            <span aria-hidden>▲</span>
            <span>Android • iOS • Nintendo Switch</span>
          </div>
        </section>

        <PixelDivider />

        <section id="services" aria-labelledby="services-title">
          <h2 id="services-title" className="text-2xl font-black">
            Services
          </h2>
          <p className="mt-2 text-sm">From prototype sprints to publishing and platform ports.</p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <SectionCard
              title="Prototype Sprint (5–10 days)"
              body="Fast vertical slice: core loop, basic art/sfx, deployable build for tests. from €499"
            />
            <SectionCard
              title="Publishing & UA"
              body="Store assets, QA, soft launch, UA creatives, analytics. Rev-share friendly. from €0 + rev-share"
            />
            <SectionCard
              title="Porting to Nintendo Switch"
              body="Technical port, input/UI adaption, performance pass, submission support. custom quote"
            />
          </div>

          <button className="mt-5 border border-black px-4 py-2 text-sm font-bold transition-all duration-200 hover:translate-x-1 hover:bg-blue-500 hover:text-white">
            Request a quote
          </button>
        </section>

        <PixelDivider />

        <section id="games" aria-labelledby="games-title">
          <h2 id="games-title" className="text-2xl font-black">
            Featured games
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {games.map((game) => (
              <article
                key={game.title}
                className="group border border-black bg-white p-4 transition-all duration-300 hover:scale-[1.02] hover:ring-2 hover:ring-blue-500"
              >
                <h3 className="text-xl font-black">{game.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{game.description}</p>

                <div className="relative mt-4 h-24 overflow-hidden border border-black bg-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <span className="inline-block text-4xl animate-bounce [animation-duration:2.2s]" aria-hidden>
                      {game.icon}
                    </span>
                  </div>

                  <video
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label={game.previewLabel}
                  >
                    <source src="/whoops-video.mp4" type="video/mp4" />
                  </video>
                </div>
              </article>
            ))}
          </div>
        </section>

        <PixelDivider />

        <section aria-labelledby="bird-lines-title" className="border border-black p-5">
          <h2 id="bird-lines-title" className="text-xs font-black uppercase tracking-[0.16em]">
            CURRENT PROJECT: BIRD LINES
          </h2>
          <p className="mt-2 text-lg font-bold">From Pages to Pixels</p>

          <div className="mt-5 grid items-start gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm leading-relaxed">
                Bird Lines is more than a game; it is a tool for mental resilience wrapped in the
                aesthetic of a puzzle. An invitation to a meditative journey through Paris with
                Ellie — a digital companion to the adventure story 'Paris in the Plain.' Minimalist
                design meets poetic storytelling for those seeking a truly chic escape.
              </p>
              <p className="mt-4 text-xs font-bold tracking-wide">
                STATUS: IN DEVELOPMENT (CALABRIA, ITALY)
              </p>
              <button className="mt-4 border border-black px-4 py-2 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white">
                Join the Waitlist
              </button>
            </div>

            <div className="mx-auto w-full max-w-[220px] border border-black bg-neutral-100 p-2">
              <div className="aspect-[9/19] border border-black bg-white p-2">
                <div className="h-full w-full border border-black bg-[linear-gradient(180deg,#f3f4f6,#dbeafe)]" />
              </div>
            </div>
          </div>
        </section>

        <PixelDivider />

        <section aria-labelledby="roadmap-title" className="border border-black p-5">
          <h2 id="roadmap-title" className="text-xl font-black">
            STUDIO ROADMAP
          </h2>
          <p className="mt-3 text-sm">Minimalism • Mental Resilience • Intelligent Humor</p>
        </section>

        <PixelDivider />

        <section aria-labelledby="about-title" className="border border-black p-5">
          <h2 id="about-title" className="text-xl font-black">
            About AZUMBO
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            AZUMBO is a tiny indie studio focused on snackable, high-polish games, lean tech and
            rapid publishing.
          </p>
          <p className="mt-3 text-sm">Minimalism • Mental Resilience • Intelligent Humor</p>
        </section>

        <PixelDivider />

        <section id="contact" aria-labelledby="contact-title" className="border border-black p-5">
          <h2 id="contact-title" className="text-xl font-black">
            Get in touch
          </h2>
          <a
            href="mailto:azumbogames@gmail.com"
            className="mt-3 inline-block text-sm font-semibold underline decoration-black underline-offset-2 transition hover:text-blue-600"
          >
            Email: azumbogames@gmail.com
          </a>
        </section>

        <footer className="mt-8 border-t border-black pt-4 text-xs">
          © 2025 AZUMBO. All rights reserved. For publishers &amp; press: hello@ваша_почта.com
        </footer>
      </div>
    </main>
  );
}

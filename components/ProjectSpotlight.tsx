import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

type ProjectSpotlightProps = {
  title: string;
  subtitle: string;
  description: ReactNode;
  status: string;
  ctaLabel: string;
  ctaHref: string;
  visual: ReactNode;
  external?: boolean;
  /** Official Apple badge instead of text button (for App Store links). */
  appStoreBadge?: boolean;
};

export function ProjectSpotlight({
  title,
  subtitle,
  description,
  status,
  ctaLabel,
  ctaHref,
  visual,
  external = false,
  appStoreBadge = false,
}: ProjectSpotlightProps) {
  const cta = appStoreBadge ? (
    <a
      href={ctaHref}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition-opacity duration-300 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne/40"
      aria-label={ctaLabel}
    >
      <Image
        src="/ciromap/badges/download-on-the-app-store.svg"
        alt={ctaLabel}
        width={148}
        height={44}
        className="h-11 w-auto"
        unoptimized
      />
    </a>
  ) : external ? (
    <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="btn-accent gpu-layer">
      {ctaLabel}
    </a>
  ) : (
    <Link href={ctaHref} className="btn-accent gpu-layer">
      {ctaLabel}
    </Link>
  );

  return (
    <article className="glass-panel gpu-layer glass-panel--interactive overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="border-b border-neutral-200 p-8 sm:p-10 md:w-[38%] md:border-b-0 md:border-r">{visual}</div>
        <div className="p-8 sm:p-10 md:w-[62%]">
          <p className="type-kicker">{subtitle}</p>
          <h3 className="type-title mt-4 text-xl sm:text-2xl">{title}</h3>
          <p className="type-body mt-5 text-base sm:text-[1.05rem]">{description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
            <span className="text-sm font-light tracking-wide text-ink-secondary">{status}</span>
            {cta}
          </div>
        </div>
      </div>
    </article>
  );
}

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
}: ProjectSpotlightProps) {
  return (
    <article className="glass-panel gpu-layer glass-panel--interactive overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="border-b border-white/10 p-8 sm:p-10 md:w-[38%] md:border-b-0 md:border-r">{visual}</div>
        <div className="p-8 sm:p-10 md:w-[62%]">
          <p className="type-kicker">{subtitle}</p>
          <h3 className="type-title mt-4 text-xl sm:text-2xl">{title}</h3>
          <p className="type-body mt-5 text-base sm:text-[1.05rem]">{description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
            <span className="text-sm font-light tracking-wide text-ink-secondary">{status}</span>
            {external ? (
              <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="btn-accent gpu-layer">
                {ctaLabel}
              </a>
            ) : (
              <Link href={ctaHref} className="btn-accent gpu-layer">
                {ctaLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

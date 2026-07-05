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
  const ctaClassName = 'btn-accent gpu-layer text-sm';

  return (
    <article className="glass-card gpu-layer interactive-lift overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="border-b border-white/10 bg-white/[0.02] p-6 sm:p-8 md:w-[38%] md:border-b-0 md:border-r">
          {visual}
        </div>
        <div className="p-6 sm:p-8 md:w-[62%]">
          <p className="chic-kicker">{subtitle}</p>
          <h3 className="chic-heading mt-3 text-xl sm:text-2xl">{title}</h3>
          <p className="chic-body mt-4 text-base sm:mt-5 sm:text-[1.05rem]">{description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <span className="text-sm font-medium tracking-wide text-ink-secondary">{status}</span>
            {external ? (
              <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={ctaClassName}>
                {ctaLabel}
              </a>
            ) : (
              <Link href={ctaHref} className={ctaClassName}>
                {ctaLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

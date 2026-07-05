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
  const ctaClassName =
    'rounded-full bg-black px-6 py-2 text-sm text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200';

  return (
    <article className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex flex-col md:flex-row">
        <div className="bg-neutral-100 p-6 sm:p-8 md:w-1/3 dark:bg-neutral-800">{visual}</div>
        <div className="p-6 sm:p-8 md:w-2/3">
          <h3 className="text-xl font-bold uppercase tracking-wider sm:text-2xl">{title}</h3>
          <p className="mt-2 italic text-neutral-500">{subtitle}</p>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:mt-6 sm:text-lg dark:text-neutral-300">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <span className="text-sm font-semibold text-neutral-500">{status}</span>
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

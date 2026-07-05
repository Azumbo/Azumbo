import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

export type SiteNavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type SiteLocaleLink = {
  href: string;
  code: string;
  active?: boolean;
};

type SiteHeaderProps = {
  homeHref?: string;
  navLinks?: SiteNavLink[];
  localeLinks?: SiteLocaleLink[];
  projectLabel?: string;
  projectHref?: string;
  trailing?: ReactNode;
};

export function SiteHeader({
  homeHref = '/en',
  navLinks = [],
  localeLinks = [],
  projectLabel,
  projectHref,
  trailing,
}: SiteHeaderProps) {
  return (
    <header className="glass-nav gpu-layer sticky top-0 z-50">
      <div className="site-container flex items-center justify-between gap-5 py-4">
        <nav className="flex min-w-0 flex-1 items-center gap-5 text-sm font-light tracking-wide">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                {link.label}
              </a>
            ) : link.href.startsWith('#') ? (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            )
          )}
          {projectLabel && projectHref ? (
            <Link href={projectHref} className="nav-link nav-link--accent">
              {projectLabel}
            </Link>
          ) : null}
        </nav>

        <Link
          href={homeHref}
          className="gpu-layer shrink-0 transition-all duration-500 ease-out hover:scale-[1.02]"
          aria-label="AZUMBO home"
        >
          <Image
            src="/assets/logo/azumbo-logo.png"
            alt="AZUMBO"
            width={180}
            height={44}
            priority
            className="h-[30px] w-auto object-contain opacity-90 md:h-[36px]"
          />
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-3">
          {trailing}
          {localeLinks.length > 0 ? (
            <div className="flex gap-1.5">
              {localeLinks.map((locale) => (
                <Link
                  key={locale.href}
                  href={locale.href}
                  className={`locale-pill ${locale.active ? 'locale-pill--active' : ''}`}
                >
                  {locale.code.toUpperCase()}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

type GameChromeProps = {
  title: string;
  homeHref?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function GameChrome({ title, homeHref = '/en', children, footer }: GameChromeProps) {
  return (
    <div className="site-page flex min-h-[100dvh] flex-col items-center px-4 py-5">
      <header className="glass-panel gpu-layer mb-6 flex w-full max-w-lg items-center gap-4 px-5 py-4">
        <Link
          href={homeHref}
          className="gpu-layer shrink-0 transition-all duration-500 ease-out hover:scale-[1.02]"
          aria-label="Back to AZUMBO"
        >
          <Image
            src="/logo/Azumbo Logo no background Sm.png"
            alt="AZUMBO"
            width={120}
            height={44}
            className="h-auto w-[58px] opacity-90 sm:w-[72px]"
          />
        </Link>
        <h1 className="type-title text-lg">{title}</h1>
      </header>
      {children}
      {footer ? <footer className="mt-6 w-full max-w-lg">{footer}</footer> : null}
    </div>
  );
}

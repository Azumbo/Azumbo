# Azumbo Game Portal

Azumbo is a web-based collection of retro-inspired mini games built with Next.js. The project provides a simple portal where visitors can play games, register their nickname and email, and submit scores.

## Requirements

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) for managing dependencies

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The site will be available locally for iterative development.

## Build

Create an optimized production build with:

```bash
npm run build
```

## Directory overview

- **app/** – Next.js App Router pages and shared layout
- **pages/** – API routes
- **public/** – Static files served at the site root


## How to add a new iOS app

1. Add one entry to `lib/apps.ts` with the app name, slug, App Store ID/URL, bundle ID, description, icon, privacy path, and support path.
2. Create the app routes using the shared pattern `app/{app-slug}/page.tsx`, `app/{app-slug}/privacy/page.tsx`, and `app/{app-slug}/support/page.tsx` (or reuse the La Pasta page structure as a template).
3. Confirm the new app appears on the studio landing page and in `/sitemap.xml`; both are config-driven from `lib/apps.ts`.
4. Keep AdMob authorization centralized at `public/app-ads.txt`. Do not add per-app `app-ads.txt` files for Google AdMob.
5. Update App Store Connect Marketing and Support URLs to the deployed routes, for example `https://azumbo.vercel.app/{app-slug}` and `https://azumbo.vercel.app/{app-slug}/support`.

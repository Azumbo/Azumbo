# SEO bot policy — AZUMBO (https://azumbo.vercel.app)

**Updated:** 2026-11-01

## Intent
- Allow search and answer-engine crawlers to discover and **cite** public pages.
- Restrict training / aggressive scrapers from full-site crawl.
- Keep utility/demo session flows out of the index.
- Keep crawl budget on commercial and informational URLs.

## Citation & search bots (ALLOW)
Defined in `lib/seo.ts` as `CITATION_AND_SEARCH_BOTS`:

- `*` (default crawlers)
- `Googlebot`, `Bingbot`, `Yandex`
- `OAI-SearchBot`, `ChatGPT-User` (ChatGPT Search / browsing)
- `PerplexityBot`, `ClaudeBot`, `anthropic-ai`
- `Applebot`, `Applebot-Extended`
- Related discovery agents: `Meta-ExternalAgent`, `Diffbot`, `ImagesiftBot`, `Omgili`, `cohere-ai`

These agents may crawl public pages. Utility paths remain disallowed (see below).

## Training & scraper bots (DISALLOW `/`)
Defined in `lib/seo.ts` as `TRAINING_AND_SCRAPER_BOTS`:

- `GPTBot` — OpenAI training crawler (citation uses `OAI-SearchBot`)
- `Google-Extended` — Gemini / Google AI training (Search uses `Googlebot`)
- `CCBot` — Common Crawl
- `Bytespider` — ByteDance
- `Amazonbot` — Amazon training / Alexa ingestion

## Disallowed paths (all citation bots)
- `/register`, `/stats`, `/finish`, `/game` — demo/session utility
- `/api/` — application endpoints

These paths also send `X-Robots-Tag: noindex, nofollow, noarchive` where applicable.

## Soft-404 guard
Unknown single-segment paths return HTTP 404 + noindex so they do not pollute the index as duplicate locale pages.

## Sitemap source of truth
`app/sitemap.ts` lists indexable content URLs (locale homes, Answer Hub, watch pages, product landings, press kits, legal). Utility routes are excluded.

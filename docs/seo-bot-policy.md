# SEO bot policy — AZUMBO (https://azumbo.vercel.app)

**Updated:** 2026-07-16

## Intent
- Allow search and answer-engine crawlers to discover and cite public pages.
- Keep utility/demo session flows out of the index.
- Keep crawl budget on commercial and informational URLs.

## Allowed (indexing / discovery)
Googlebot, Bingbot, Yandex, OAI-SearchBot, GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Applebot, and related discovery bots listed in `lib/seo.ts` (`AI_AND_SEARCH_BOTS`).

## Disallowed paths (robots.txt)
- `/register`, `/stats`, `/finish`, `/game` — demo/session utility
- `/api/` — application endpoints

These paths also send `X-Robots-Tag: noindex, nofollow, noarchive` where applicable.

## Soft-404 guard
Unknown single-segment paths (for example former `/stats` homepage soft matches) return HTTP 404 + noindex so they do not pollute the index as duplicate locale pages.

## Sitemap source of truth
`app/sitemap.ts` lists only indexable content URLs (locale homes, Answer Hub, watch pages, product landings, legal). Utility routes are excluded.

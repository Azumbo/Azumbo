# SEO bot policy — azumbo.vercel.app

**Last updated:** 2026-07-04  
**Primary host:** `https://azumbo.vercel.app`

## Policy summary

All search and AI discovery crawlers listed in `lib/seo.ts` (`AI_AND_SEARCH_BOTS`) are **allowed** to crawl public pages and `/app-ads.txt`. There are **no Disallow rules** in production `robots.txt`.

This supports:

- Google Search indexing (Googlebot)
- Google AI training/discovery surfaces (Google-Extended)
- ChatGPT Search visibility (OAI-SearchBot, GPTBot)
- Other major AI/search bots (Bingbot, Yandex, PerplexityBot, ClaudeBot, etc.)

## Video indexing policy

- **Homepage (`/en`, `/ru`, `/it`):** no `VideoObject` schema, no embedded `<video>`. Promo clips link to dedicated watch pages.
- **Watch pages (`/{locale}/videos/bird-lines`):** primary video content with `VideoObject`, `FAQPage`, and `BreadcrumbList` JSON-LD.

This follows Google's requirement that indexed videos live on a **watch page** whose main purpose is viewing that video.

## Canonical & locale policy

- `trailingSlash: false` — URLs never end with `/` except protocol/host.
- `/` → `307` → `/{locale}` (default `en`).
- `/{locale}/` → `308` → `/{locale}`.
- Self-canonical + reciprocal hreflang on all locale homepages and watch pages.

## Changing the policy

1. Edit `AI_AND_SEARCH_BOTS` in `lib/seo.ts`.
2. If blocking training bots, add explicit `disallow` rules in `app/robots.ts` **only** for bots you intend to block (e.g. `GPTBot`), while keeping `OAI-SearchBot` allowed for ChatGPT Search citation.
3. Run `npm run seo:smoke` and `npm run seo:live` after deploy.

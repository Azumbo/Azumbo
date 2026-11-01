# Redirect registry — AZUMBO

| Old URL | New URL | Status | Reason |
|---|---|---|---|
| `/` | `/en` | 308 | Permanent entry aligned with x-default (no Accept-Language split) |
| `/{locale}/` | `/{locale}` | 308 | trailingSlash: false |
| Mixed-case path | lowercase path | 308 | Canonical casing |
| `/CiroMap`, `/CiroMap/:path*` | `/ciromap`, `/ciromap/:path*` | 301 | Renamed Jun 2026 (`c570786`); also in `next.config.js` |
| `*.vercel.app` ≠ primary | `https://azumbo.vercel.app{path}` | 301 | Host canonicalization + noindex on hop |
| Unknown single segment (e.g. `/stats`) | — | 404 | Soft-404 / invalid locale guard |

Primary host: `azumbo.vercel.app` (custom-domain cutover deferred).

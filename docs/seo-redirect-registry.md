# Redirect registry — AZUMBO

| Old URL | New URL | Status | Reason |
|---|---|---|---|
| `/` | `/{locale}` (`/en` default) | 307 | Locale entry without trailing slash |
| `/{locale}/` | `/{locale}` | 308 | trailingSlash: false |
| Mixed-case path | lowercase path | 308 | Canonical casing |
| `*.vercel.app` ≠ primary | `https://azumbo.vercel.app{path}` | 301 | Host canonicalization + noindex on hop |
| Unknown single segment (e.g. `/stats`) | — | 404 | Soft-404 / invalid locale guard |

Primary host: `azumbo.vercel.app` (custom-domain cutover deferred).

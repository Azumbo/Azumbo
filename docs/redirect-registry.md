# Redirect Registry

| Old URL Pattern | New URL Pattern | Status | Rationale |
|---|---|---:|---|
| `https://*.vercel.app/*` (except `azumbo.vercel.app`) | `https://azumbo.vercel.app/*` | 301 | Host canonicalization: remove mirror host duplicates. |
| `/` | `/en` | 308 | Permanent root → x-default locale (no Accept-Language split). |
| `/{locale}/` (`/en/`, `/ru/`, `/it/`) | `/{locale}` | 308 | Trailing slash cleanup (`trailingSlash: false`). |
| `/{UPPERCASE_PATH}` | `/{lowercase_path}` | 308 | URL normalization for canonical consistency. |

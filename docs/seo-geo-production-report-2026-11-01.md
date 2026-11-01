# AZUMBO STUDIO — ELITE ENGINEERING & GEO/SEO PRODUCTION REPORT
Date: November 1, 2026  
Production Target: https://azumbo.vercel.app (Commit: `4966315`)  
Executed by: Elite Multi-Disciplinary Engineering, SEO & AI Search Architecture Taskforce

---

## EXECUTIVE SUMMARY
The AZUMBO digital ecosystem has transitioned from a standard localized indie portal into a high-performance, AI-optimized web infrastructure. By enforcing strict 308 canonicalization, closing SSR hydration gaps for generative engines (GEO), segmenting citation vs training bots, and structuring E-E-A-T assets, the platform is primed for high-intent organic acquisition across Google, Perplexity, OpenAI Search, and Apple Intelligence surfaces.

---

## 1. COMPREHENSIVE EXECUTION REPORT (WHAT WAS DONE)

### A. Core Architecture & Routing Governance (P0)
- **Root Canonicalization:** Refactored `middleware.ts` to transition the root entry point (`/`) from a temporary `307` to a permanent `308` redirect straight to `/en`. This eliminates crawl ambiguity, unifies link equity, and permanently aligns with the global `x-default` specification.
- **Dynamic robots/sitemap authority:** Indexing signals are owned by Next.js App Router handlers (`app/sitemap.ts`, `app/robots.ts`). No conflicting static `public/sitemap.xml` / `public/robots.txt` overrides are present.
- **Domain Security Lock:** Maintained strict Vercel preview host protection, returning `X-Robots-Tag: noindex,nofollow,noarchive` on non-primary domains to prevent duplicate content indexing.

### B. Generative Engine Optimization (GEO) & SSR Resilience (P0)
- **Cornetto Landing Fix:** Hardcoded baseline English textual content directly inside `data-i18n` DOM nodes (`app/cornettoclicker-landing/page.tsx`). LLM-based crawlers that parse raw HTML without full JS hydration can now correctly read primary copy, reducing thin-content risk.
- **Server Shell Architecture (Azumbox):** Wrapped the client-heavy Azumbox UI in a server page shell (`app/azumbox/page.tsx` + `AzumboxClient.tsx`) injecting `SoftwareApplication` and `FAQPage` JSON-LD into the initial HTML response.

### C. E-E-A-T & Discovery Expansion (P1)
- **Press & Legal Indexing:** Added high-value trust signals (`/press`, `/press/ciromap`, `/press/ainclusive`, and `/legal/*`) into `lib/seo.ts` (`INDEXABLE_ROUTES`), `app/sitemap.ts`, and `llms.txt`. This exposes studio media features and legal policies to knowledge-graph extractors.
- **Application Schema Enrichment:** Injected explicit App Store `downloadUrl` properties inside `SoftwareApplicationJsonLd` for Ciro.Map and La Pasta, tightening entity relationships.

### D. Advanced AI-Bot Governance (P1)
- **Granular Bot Segmentation:** Split bot policy in `app/robots.ts` and `lib/seo.ts` into citation/search vs training/scraper groups:
  - **Allowed (citation/discovery):** `Googlebot`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `Applebot-Extended` (plus related search/discovery agents).
  - **Disallowed (resource protection):** `GPTBot`, `Google-Extended`, `CCBot`, `Bytespider`, `Amazonbot`.

---

## 2. VERIFICATION & TEST RESULTS

| Audit Vector | Target Mechanism | Status | Live Verification Result |
| :--- | :--- | :--- | :--- |
| **Root Routing** | `GET /` | **PASS** | `308 Permanent Redirect` → `/en` |
| **SSR Integrity** | `GET /cornettoclicker-landing` | **PASS** | Raw HTML contains full English text nodes |
| **E-E-A-T Discovery** | Sitemap & `llms.txt` | **PASS** | `/press`, `/legal/*` actively published |
| **AI Governance** | `robots.txt` rules | **PASS** | Split citation vs. training policies active |
| **Schema Graphs** | JSON-LD injection | **PASS** | `SoftwareApplication` + `FAQPage` verified on Azumbox |
| **CI Smoke Suite** | `npm run seo:smoke` | **PASS** | All strict assertions cleared cleanly |

---

## 3. STRATEGIC RECOMMENDATIONS & NEXT STEPS

1. **Google Search Console (GSC) Validation:**
   - Trigger **Validate Fix** for resolved redirection / video indexing issues.
   - Resubmit `https://azumbo.vercel.app/sitemap.xml` to accelerate crawl of press and legal pages.
2. **LinkedIn & Investor Funnel Alignment:**
   - Direct inbound traffic (VCs, game developers, tech scouts) to the polished production pages and press kits.
3. **Continuous GEO Monitoring:**
   - Track brand citation frequency across Perplexity and ChatGPT Search over the next 14 days to measure impact of `llms.txt` and the citation allowlist.

---

## Appendix — Commit scope
Primary ship commit: `4966315` (`fix(seo): ship P0/P1 canonical, SSR, bots, and schema upgrades`).

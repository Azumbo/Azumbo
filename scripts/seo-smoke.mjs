import fs from 'fs';

const sitemapTs = fs.readFileSync('app/sitemap.ts', 'utf8');
const robotsTs = fs.readFileSync('app/robots.ts', 'utf8');
const seoTs = fs.readFileSync('lib/seo.ts', 'utf8');
const localePage = fs.readFileSync('app/[locale]/page.tsx', 'utf8');
const rootLayout = fs.readFileSync('app/layout.tsx', 'utf8');

function assert(cond, msg) { if (!cond) throw new Error(msg); }

assert(seoTs.includes("SITE_URL = 'https://azumbo.vercel.app'"), 'SITE_URL host mismatch');
assert(seoTs.includes('en-US'), 'US locale mapping missing');
assert(seoTs.includes('buildHomeGraph'), 'structured data graph helper missing');
assert(sitemapTs.includes('buildLanguageAlternates'), 'sitemap hreflang alternates missing');
assert(!sitemapTs.includes("url: `${SITE_URL}/`,"), 'sitemap must not list redirect-only root URL');
assert(!sitemapTs.includes("'/en/'") && !sitemapTs.includes("'/ru/'") && !sitemapTs.includes("'/it/'"), 'sitemap contains trailing slash locale variants');
assert(robotsTs.includes("userAgent: 'GPTBot'") && robotsTs.includes("allow: ['/', '/app-ads.txt']"), 'AI/search bots must be allowed');
assert(!robotsTs.includes('disallow'), 'robots must not block crawlers');
assert(localePage.includes('languages: buildLanguageAlternates(canonicalPath)'), 'hreflang alternates not wired');
assert(localePage.includes('buildHomeGraph'), 'homepage graph schema missing');
assert(!localePage.includes('VideoObjectJsonLd'), 'homepage must not emit VideoObject (not a watch page)');
assert(rootLayout.includes('lang="en-US"'), 'root html lang must target US English');
assert(rootLayout.includes("card: 'summary_large_image'"), 'twitter card metadata missing');

console.log('SEO smoke checks passed');

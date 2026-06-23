import fs from 'fs';

const sitemapTs = fs.readFileSync('app/sitemap.ts', 'utf8');
const robotsTs = fs.readFileSync('app/robots.ts', 'utf8');
const seoTs = fs.readFileSync('lib/seo.ts', 'utf8');
const localePage = fs.readFileSync('app/[locale]/page.tsx', 'utf8');

function assert(cond, msg) { if (!cond) throw new Error(msg); }

assert(seoTs.includes("SITE_URL = 'https://azumbo.vercel.app'"), 'SITE_URL host mismatch');
assert(sitemapTs.includes("path === '/' ? '/en' : path"), 'sitemap default locale mapping mismatch');
assert(!sitemapTs.includes("'/en/'") && !sitemapTs.includes("'/ru/'") && !sitemapTs.includes("'/it/'"), 'sitemap contains trailing slash locale variants');
assert(robotsTs.includes("userAgent: 'OAI-SearchBot'") && robotsTs.includes("userAgent: 'GPTBot'"), 'AI bot rules missing');
assert(localePage.includes("languages: buildLanguageAlternates(canonicalPath)"), 'hreflang alternates not wired');
assert(!localePage.includes('VideoObjectJsonLd'), 'homepage must not emit VideoObject (not a watch page)');

console.log('SEO smoke checks passed');

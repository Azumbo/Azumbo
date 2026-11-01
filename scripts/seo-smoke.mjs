import fs from 'fs';

const sitemapTs = fs.readFileSync('app/sitemap.ts', 'utf8');
const robotsTs = fs.readFileSync('app/robots.ts', 'utf8');
const seoTs = fs.readFileSync('lib/seo.ts', 'utf8');
const localePage = fs.readFileSync('app/[locale]/page.tsx', 'utf8');
const watchPage = fs.readFileSync('app/[locale]/videos/bird-lines/page.tsx', 'utf8');
const birdLinesVideo = fs.readFileSync('lib/birdLinesVideo.ts', 'utf8');
const rootLayout = fs.readFileSync('app/layout.tsx', 'utf8');
const jsonLd = fs.readFileSync('components/seo/JsonLd.tsx', 'utf8');
const middlewareTs = fs.readFileSync('middleware.ts', 'utf8');
const homeFaq = fs.readFileSync('lib/homeFaq.ts', 'utf8');
const rootPage = fs.readFileSync('app/page.tsx', 'utf8');
const cornettoLanding = fs.readFileSync('app/cornettoclicker-landing/page.tsx', 'utf8');
const ciromapPage = fs.readFileSync('app/ciromap/page.tsx', 'utf8');
const lapastaPage = fs.readFileSync('app/lapasta/page.tsx', 'utf8');
const azumboxPage = fs.readFileSync('app/azumbox/page.tsx', 'utf8');
const llmsTxt = fs.readFileSync('app/llms.txt/route.ts', 'utf8');

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

assert(seoTs.includes("SITE_URL = 'https://azumbo.vercel.app'"), 'SITE_URL host mismatch');
assert(seoTs.includes('en-US'), 'US locale mapping missing');
assert(seoTs.includes('buildHomeGraph'), 'structured data graph helper missing');
assert(sitemapTs.includes('buildLanguageAlternates'), 'sitemap hreflang alternates missing');
assert(!sitemapTs.includes("url: `${SITE_URL}/`,"), 'sitemap must not list redirect-only root URL');
assert(
  !sitemapTs.includes("'/en/'") && !sitemapTs.includes("'/ru/'") && !sitemapTs.includes("'/it/'"),
  'sitemap contains trailing slash locale variants'
);

assert(seoTs.includes('CITATION_AND_SEARCH_BOTS'), 'citation/search bot list missing');
assert(seoTs.includes('TRAINING_AND_SCRAPER_BOTS'), 'training/scraper bot list missing');
assert(seoTs.includes("'OAI-SearchBot'"), 'OAI-SearchBot must be in citation allowlist');
assert(seoTs.includes("'PerplexityBot'"), 'PerplexityBot must be in citation allowlist');
assert(seoTs.includes("'Applebot-Extended'"), 'Applebot-Extended must be in citation allowlist');
assert(seoTs.includes("'GPTBot'"), 'GPTBot must be listed in training disallow group');
assert(seoTs.includes("'Google-Extended'"), 'Google-Extended must be listed in training disallow group');
assert(seoTs.includes("'CCBot'"), 'CCBot must be listed in training disallow group');
assert(seoTs.includes("'Bytespider'"), 'Bytespider must be listed in training disallow group');
assert(seoTs.includes("'Amazonbot'"), 'Amazonbot must be listed in training disallow group');
assert(robotsTs.includes('CITATION_AND_SEARCH_BOTS'), 'robots must use citation bot list');
assert(robotsTs.includes('TRAINING_AND_SCRAPER_BOTS'), 'robots must use training bot list');
assert(robotsTs.includes("disallow: ['/']"), 'training bots must disallow full site');

assert(seoTs.includes("'/press'"), 'INDEXABLE_ROUTES must include /press');
assert(seoTs.includes("'/press/ciromap'"), 'INDEXABLE_ROUTES must include /press/ciromap');
assert(seoTs.includes("'/press/ainclusive'"), 'INDEXABLE_ROUTES must include /press/ainclusive');
assert(seoTs.includes("'/legal/privacy'"), 'INDEXABLE_ROUTES must include /legal/privacy');
assert(llmsTxt.includes('/press'), 'llms.txt must link press kits');
assert(llmsTxt.includes('laltravoce') || llmsTxt.includes("L'Altravoce") || llmsTxt.includes('/press/ciromap'), 'llms.txt must cite press E-E-A-T proof');

assert(middlewareTs.includes('308'), 'middleware must use permanent 308 redirects');
assert(
  middlewareTs.includes('DEFAULT_LOCALE') &&
    middlewareTs.includes("pathname === '/'") &&
    !middlewareTs.includes('307'),
  'root redirect must be permanent 308 to DEFAULT_LOCALE (/en), not 307'
);

assert(cornettoLanding.includes('LEGENDARY CLICKER IS BACK!'), 'Cornetto SSR must include English hero subtitle');
assert(cornettoLanding.includes('>PLAY NOW<') || cornettoLanding.includes('>PLAY NOW</'), 'Cornetto SSR must include English CTA');
assert(!cornettoLanding.includes('data-i18n="hero.subtitle"></h2>'), 'Cornetto hero subtitle must not be empty');

assert(ciromapPage.includes('downloadUrl='), 'Ciro.Map SoftwareApplication must include downloadUrl');
assert(lapastaPage.includes('downloadUrl='), 'La Pasta SoftwareApplication must include downloadUrl');
assert(!azumboxPage.includes("'use client'"), 'Azumbox page shell must be a server component');
assert(azumboxPage.includes('SoftwareApplicationJsonLd'), 'Azumbox must emit SoftwareApplication JSON-LD');
assert(azumboxPage.includes('buildFaqPageSchema'), 'Azumbox must emit FAQPage JSON-LD');
assert(fs.existsSync('app/azumbox/AzumboxClient.tsx'), 'Azumbox client component missing');

assert(localePage.includes('languages: buildLanguageAlternates(canonicalPath)'), 'hreflang alternates not wired');
assert(localePage.includes('buildHomeGraph'), 'homepage graph schema missing');
assert(sitemapTs.includes('birdLinesWatchPages'), 'sitemap must include Bird Lines watch pages');
assert(!localePage.includes('VideoObjectJsonLd'), 'homepage must not emit VideoObject (not a watch page)');
assert(!localePage.includes('controls'), 'homepage must not embed a watch-style video with controls (use watch page link); decorative muted autoplay previews are allowed');
assert(!localePage.includes('WhoopsBirdLines.mp4'), 'homepage must not reference raw video file');
assert(watchPage.includes('BIRD_LINES_VIDEO_ID'), 'watch page must expose stable video anchor');
assert(watchPage.includes('buildBirdLinesWatchGraph'), 'watch page must emit VideoObject graph');
assert(birdLinesVideo.includes('FAQPage'), 'watch page graph must include FAQ schema');
assert(birdLinesVideo.includes('width: BIRD_LINES_WIDTH'), 'VideoObject must include width');
assert(birdLinesVideo.includes('publisher:'), 'VideoObject must include publisher');
assert(seoTs.includes('FAQPage'), 'homepage graph must include FAQ schema');
assert(seoTs.includes('resolveHtmlLang'), 'html lang resolver missing');
assert(middlewareTs.includes('LOCALE_REQUEST_HEADER'), 'middleware must pass locale request header');
assert(fs.existsSync('app/llms.txt/route.ts'), 'llms.txt route missing');
assert(homeFaq.includes('HOME_BLUF'), 'homepage BLUF copy missing');
assert(localePage.includes('HOME_FAQ'), 'homepage must render visible FAQ section');
assert(rootLayout.includes('resolveHtmlLang'), 'root layout must resolve html lang dynamically');
assert(!rootLayout.includes('lang="en-US"'), 'root layout must not hardcode en-US html lang');
assert(rootLayout.includes("card: 'summary_large_image'"), 'twitter card metadata missing');
assert(!jsonLd.includes("'use client'"), 'JsonLd must render on the server for crawlers');
assert(rootPage.includes("redirect('/en')"), 'root page must redirect to /en canonical locale');

console.log('SEO smoke checks passed');

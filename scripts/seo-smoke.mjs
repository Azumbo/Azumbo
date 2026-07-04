import fs from 'fs';

const sitemapTs = fs.readFileSync('app/sitemap.ts', 'utf8');
const robotsTs = fs.readFileSync('app/robots.ts', 'utf8');
const seoTs = fs.readFileSync('lib/seo.ts', 'utf8');
const localePage = fs.readFileSync('app/[locale]/page.tsx', 'utf8');
const watchPage = fs.readFileSync('app/[locale]/videos/bird-lines/page.tsx', 'utf8');
const birdLinesVideo = fs.readFileSync('lib/birdLinesVideo.ts', 'utf8');
const rootLayout = fs.readFileSync('app/layout.tsx', 'utf8');
const jsonLd = fs.readFileSync('components/seo/JsonLd.tsx', 'utf8');
const rootPage = fs.readFileSync('app/page.tsx', 'utf8');

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
assert(robotsTs.includes('AI_AND_SEARCH_BOTS'), 'robots must use shared AI/search bot list');
assert(seoTs.includes("'GPTBot'"), 'GPTBot must be in AI/search bot allowlist');
assert(seoTs.includes("'OAI-SearchBot'"), 'OAI-SearchBot must be in AI/search bot allowlist');
assert(!robotsTs.includes('disallow'), 'robots must not block crawlers');
assert(localePage.includes('languages: buildLanguageAlternates(canonicalPath)'), 'hreflang alternates not wired');
assert(localePage.includes('buildHomeGraph'), 'homepage graph schema missing');
assert(sitemapTs.includes('birdLinesWatchPages'), 'sitemap must include Bird Lines watch pages');
assert(!localePage.includes('VideoObjectJsonLd'), 'homepage must not emit VideoObject (not a watch page)');
assert(!localePage.includes('<video'), 'homepage must not embed video (use watch page link)');
assert(!localePage.includes('WhoopsBirdLines.mp4'), 'homepage must not reference raw video file');
assert(watchPage.includes('BIRD_LINES_VIDEO_ID'), 'watch page must expose stable video anchor');
assert(watchPage.includes('buildBirdLinesWatchGraph'), 'watch page must emit VideoObject graph');
assert(birdLinesVideo.includes('FAQPage'), 'watch page graph must include FAQ schema');
assert(birdLinesVideo.includes('width: BIRD_LINES_WIDTH'), 'VideoObject must include width');
assert(birdLinesVideo.includes('publisher:'), 'VideoObject must include publisher');
assert(rootLayout.includes('lang="en-US"'), 'root html lang must target US English');
assert(rootLayout.includes("card: 'summary_large_image'"), 'twitter card metadata missing');
assert(!jsonLd.includes("'use client'"), 'JsonLd must render on the server for crawlers');
assert(rootPage.includes("redirect('/en')"), 'root page must redirect to /en canonical locale');

console.log('SEO smoke checks passed');

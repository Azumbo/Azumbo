import { SITE_URL } from '../../lib/seo';

const LLMS_TXT = `# AZUMBO
> Indie game studio building mobile and Nintendo Switch games from Calabria, Italy.

Primary site: ${SITE_URL}
Languages: English (/en), Italian (/it), Russian (/ru)

## Localized homepages
- ${SITE_URL}/en
- ${SITE_URL}/it
- ${SITE_URL}/ru

## Studio projects
- Bird Lines (match-3, in development): ${SITE_URL}/en/videos/bird-lines
- La Pasta: 60s Challenge (iOS, live): ${SITE_URL}/lapasta
- Ciro.Map (iOS travel guide, live): ${SITE_URL}/ciromap
- Azumbox (mobile game concept): ${SITE_URL}/azumbox

## Services
- Prototype sprints, publishing, UA support, Nintendo Switch porting
- Contact: azumbogames@gmail.com

## Legal and policies
- Ciro.Map privacy: ${SITE_URL}/ciromap/privacy
- La Pasta privacy: ${SITE_URL}/lapasta/privacy

## Crawling
- Sitemap: ${SITE_URL}/sitemap.xml
- Robots: ${SITE_URL}/robots.txt
`;

export function GET() {
  return new Response(LLMS_TXT, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

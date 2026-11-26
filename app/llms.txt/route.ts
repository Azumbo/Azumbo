import { SITE_URL } from '../../lib/seo';

const LLMS_TXT = `# AZUMBO
> Indie game studio building mobile and Nintendo Switch games from Calabria, Italy.

Primary site: ${SITE_URL}
Languages: English (/en), Italian (/it), Russian (/ru)

## Localized homepages
- ${SITE_URL}/en
- ${SITE_URL}/it
- ${SITE_URL}/ru

## Answer Hub (citeable FAQ)
- ${SITE_URL}/en/answers
- ${SITE_URL}/it/answers
- ${SITE_URL}/ru/answers

## Press & E-E-A-T proof
- Press kit hub: ${SITE_URL}/press
- Ciro.Map press kit (L'Altravoce coverage, 30 July 2026): ${SITE_URL}/press/ciromap
- AInclusive press kit (pilot / education proof): ${SITE_URL}/press/ainclusive
- Ciro.Map newspaper PDF (L'Altravoce): ${SITE_URL}/press/laltravoce-30-07-2026.pdf

## Studio projects
- Bird Lines (match-3, in development): ${SITE_URL}/en/videos/bird-lines
- AInclusive (Education app, iOS/macOS): ${SITE_URL}/ainclusive
- La Pasta: 60s Challenge (iOS, live): ${SITE_URL}/lapasta
- Ciro.Map (iOS digital platform, live): ${SITE_URL}/ciromap
- Russian game: Ring Maze (watchOS tilt maze, Coming soon): ${SITE_URL}/en/russiangame
- Russian game (IT): ${SITE_URL}/it/russiangame
- Russian game (RU): ${SITE_URL}/ru/russiangame
- Azumbox (mobile game concept): ${SITE_URL}/azumbox

## Services
- Prototype sprints, publishing, UA support, Nintendo Switch porting
- Contact: azumbogames@gmail.com

## Legal and policies
- Studio privacy: ${SITE_URL}/legal/privacy
- Terms: ${SITE_URL}/legal/terms
- Cookies: ${SITE_URL}/legal/cookies
- GDPR/CCPA: ${SITE_URL}/legal/gdpr-ccpa
- AInclusive privacy: ${SITE_URL}/ainclusive/privacy
- AInclusive support: ${SITE_URL}/ainclusive/support
- Ciro.Map privacy: ${SITE_URL}/ciromap/privacy
- La Pasta privacy: ${SITE_URL}/lapasta/privacy
- Russian game privacy: https://gist.github.com/Azumbo/6847ec27112e03c2a21e40ae6ef63fc1
- Russian game support: https://gist.github.com/Azumbo/ae899e089396d99de80cdea7e3d3039d

## Crawling
- Sitemap: ${SITE_URL}/sitemap.xml
- Robots: ${SITE_URL}/robots.txt
- Citation bots allowed; training scrapers (GPTBot, Google-Extended, CCBot, Bytespider, Amazonbot) disallowed
`;

export function GET() {
  return new Response(LLMS_TXT, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

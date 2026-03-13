const BASE_URL = 'https://azumbo.vercel.app'

const ROUTES = [
  { path: '', priority: '1.0' },
  { path: '/en', priority: '0.9' },
  { path: '/ru', priority: '0.9' },
  { path: '/it', priority: '0.9' },
  { path: '/PacMan', priority: '0.8' },
  { path: '/Spaceinvaders', priority: '0.8' },
  { path: '/frogger', priority: '0.8' },
  { path: '/cornettoclicker', priority: '0.8' },
  { path: '/cornettoclicker-landing', priority: '0.8' },
  { path: '/petonauta-landing', priority: '0.8' },
  { path: '/game', priority: '0.7' },
  { path: '/register', priority: '0.7' },
  { path: '/stats', priority: '0.6' },
  { path: '/finish', priority: '0.5' },
  { path: '/CityInThePlane/privacy', priority: '0.4' },
  { path: '/cornettoclicker/privacy', priority: '0.4' },
  { path: '/cornettoclicker/terms', priority: '0.4' },
] as const

export async function GET() {
  const lastmod = new Date().toISOString()

  const urls = ROUTES.map(
    ({ path, priority }) => `  <url>\n    <loc>${BASE_URL}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`
  ).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}

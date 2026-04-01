import type { MetadataRoute } from 'next';

const SITE_URL = 'https://azumbo.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'Yandex', 'DuckDuckBot', 'Applebot', 'OAI-SearchBot'],
        allow: '/'
      },
      {
        userAgent: ['GPTBot', 'Google-Extended', 'CCBot', 'Bytespider'],
        disallow: '/'
      }
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}

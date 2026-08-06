import type { NextApiRequest, NextApiResponse } from 'next';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://saatwik-ss.github.io').replace(/\/$/, '');

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');
  res.status(200).send(body);
}

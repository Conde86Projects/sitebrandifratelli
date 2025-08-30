export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://www.brandifratelli.com.br/sitemap.xml
Host: https://www.brandifratelli.com.br`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
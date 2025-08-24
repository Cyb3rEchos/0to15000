export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://0to15000.com/sitemap.xml`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
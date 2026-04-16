# UZAMUSE ECO Website

Corporate website for UZAMUSE ECO (attractions, rope parks, zipline, and cable car projects).

## Run Locally

**Prerequisites:** Node.js 20+

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`

## Build

- Production build: `npm run build`
- Preview build: `npm run preview`

## SEO and Google Indexing Checklist

The project already includes:
- `index.html` SEO meta tags (title, description, keywords, Open Graph, Twitter).
- Structured data (`Organization` JSON-LD).
- `public/robots.txt`.
- `public/sitemap.xml`.

Before going live, update domain in these files:
- `index.html` (`canonical`, `og:url`, `hreflang` links, JSON-LD `url`).
- `public/robots.txt` (`Sitemap` URL).
- `public/sitemap.xml` (`loc`).

After deploy:
1. Add domain to Google Search Console (Domain property).
2. Verify ownership via DNS TXT record.
3. Submit `https://uzamuseeco.com/sitemap.xml`.
4. Request indexing for homepage.

import type { Language } from "./translations";
import { SITE_CONFIG } from "./config";

const SEO = {
  ru: {
    title: "UZAMUSE ECO | Аттракционы, zipline и канатные дороги в Узбекистане",
    description:
      "UZAMUSE ECO проектирует и строит аттракционы, zipline, веревочные парки и канатные дороги в Узбекистане.",
    keywords:
      "uzamuse eco, аттракционы узбекистан, проект аттракциона, zipline uzbekistan, канатная дорога узбекистан, rope park uzbekistan",
    locale: "ru_RU",
  },
  en: {
    title: "UZAMUSE ECO | Attraction, zipline and cable car projects in Uzbekistan",
    description:
      "UZAMUSE ECO delivers attraction, zipline, rope park and cable car projects in Uzbekistan.",
    keywords:
      "uzamuse eco, attraction uzbekistan, attraction project, amusement park project, zipline uzbekistan, cable car uzbekistan",
    locale: "en_US",
  },
  uz: {
    title: "UZAMUSE ECO | Attraksion va kanat yo'li loyihalari O'zbekistonda",
    description:
      "UZAMUSE ECO O'zbekistonda attraksion, zipline, arqonli park va kanat yo'li loyihalash hamda qurish bo'yicha professional kompaniya.",
    keywords:
      "uzamuse eco, attraksion, attraksion uzbekiston, uzbekiston attraksion kompaniya, kanat yoli, zipline, rope park, amusement park project, loyiha, project uzbekistan",
    locale: "uz_UZ",
  },
} satisfies Record<Language, { title: string; description: string; keywords: string; locale: string }>;

const SERVICES = {
  ru: [
    "Проектирование аттракционов",
    "Строительство zipline и rope park",
    "Канатные дороги в Узбекистане",
    "Монтаж и сервисное обслуживание",
  ],
  en: [
    "Attraction project design",
    "Zipline and rope park construction",
    "Cable car systems in Uzbekistan",
    "Installation and maintenance",
  ],
  uz: [
    "Attraksion loyihalash",
    "Zipline va arqonli park qurilishi",
    "O'zbekistonda kanat yo'li tizimlari",
    "Montaj va servis xizmati",
  ],
} satisfies Record<Language, string[]>;

function ensureMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value));
    document.head.appendChild(element);
  }

  return element;
}

function ensureStructuredData() {
  let element = document.head.querySelector("#structured-data") as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.id = "structured-data";
    document.head.appendChild(element);
  }

  return element;
}

export function syncSeo(lang: Language) {
  const current = SEO[lang];
  const canonicalUrl = "https://uzamuseeco.uz/";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${canonicalUrl}#organization`,
        name: "UZAMUSE ECO",
        url: canonicalUrl,
        logo: SITE_CONFIG.logo,
        description: current.description,
        sameAs: [
          "https://t.me/ExtremeConstruction",
          "https://www.instagram.com/uzamuse_market/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+998977049933",
          contactType: "sales",
          areaServed: "UZ",
          availableLanguage: ["uz", "ru", "en"],
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "UZ",
          addressLocality: "Tashkent",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl}#website`,
        url: canonicalUrl,
        name: "UZAMUSE ECO",
        inLanguage: lang,
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        serviceType: SERVICES[lang].join(", "),
        provider: {
          "@id": `${canonicalUrl}#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "Uzbekistan",
        },
        offers: SERVICES[lang].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
          },
        })),
      },
    ],
  };

  document.documentElement.lang = lang;
  document.title = current.title;

  ensureMeta('meta[name="description"]', { name: "description" }).setAttribute("content", current.description);
  ensureMeta('meta[name="keywords"]', { name: "keywords" }).setAttribute("content", current.keywords);
  ensureMeta('meta[name="author"]', { name: "author" }).setAttribute("content", "UZAMUSE ECO");
  ensureMeta('meta[name="robots"]', { name: "robots" }).setAttribute(
    "content",
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  );
  ensureMeta('meta[property="og:title"]', { property: "og:title" }).setAttribute("content", current.title);
  ensureMeta('meta[property="og:description"]', { property: "og:description" }).setAttribute("content", current.description);
  ensureMeta('meta[property="og:locale"]', { property: "og:locale" }).setAttribute("content", current.locale);
  ensureMeta('meta[property="og:url"]', { property: "og:url" }).setAttribute("content", canonicalUrl);
  ensureMeta('meta[property="og:image"]', { property: "og:image" }).setAttribute("content", SITE_CONFIG.logo);
  ensureMeta('meta[property="og:image:alt"]', { property: "og:image:alt" }).setAttribute("content", "UZAMUSE ECO logo");
  ensureMeta('meta[property="og:site_name"]', { property: "og:site_name" }).setAttribute("content", "UZAMUSE ECO");
  ensureMeta('meta[name="twitter:title"]', { name: "twitter:title" }).setAttribute("content", current.title);
  ensureMeta('meta[name="twitter:description"]', { name: "twitter:description" }).setAttribute("content", current.description);
  ensureMeta('meta[name="twitter:image"]', { name: "twitter:image" }).setAttribute("content", SITE_CONFIG.logo);
  ensureMeta('meta[name="twitter:card"]', { name: "twitter:card" }).setAttribute("content", "summary_large_image");

  const canonical = document.head.querySelector('link[rel="canonical"]');
  canonical?.setAttribute("href", canonicalUrl);

  ensureStructuredData().textContent = JSON.stringify(schema);
}

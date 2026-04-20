import type { Language } from "./translations";
import { SITE_CONFIG } from "./config";

const DEFAULT_BASE_URL = "https://uzamuseeco.com";

function normalizeBaseUrl(url: string): string {
  return url.replace(/\/+$/, "");
}

function resolveBaseUrl(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL as string | undefined;
  if (fromEnv && fromEnv.trim()) {
    return normalizeBaseUrl(fromEnv.trim());
  }

  if (typeof window !== "undefined" && window.location?.origin) {
    return normalizeBaseUrl(window.location.origin);
  }

  return DEFAULT_BASE_URL;
}

const BASE_URL = resolveBaseUrl();
const ROOT_URL = `${BASE_URL}/`;

function toAbsoluteUrl(value: string): string {
  if (/^https?:\/\//i.test(value)) return value;
  return `${BASE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

const SEO = {
  ru: {
    title: "UZAMUSE ECO | Аттракционы, zipline и канатные дороги в Узбекистане",
    description:
      "UZAMUSE ECO проектирует и строит аттракционы, zipline, веревочные парки и канатные дороги в Узбекистане.",
    keywords:
      "uzamuse eco, строительство зиплайна, построить зиплайн, зиплайн под ключ, заказать зиплайн, зиплайн узбекистан, зиплайн ташкент, кто строит зиплайн, компания по строительству зиплайна, подрядчик зиплайн, цена зиплайна, стоимость зиплайна, сколько стоит зиплайн, проектирование зиплайна, монтаж зиплайна, изготовление зиплайна, установка зиплайна, купить зиплайн, зиплайн оборудование, зиплайн бизнес, открыть зиплайн бизнес, готовый зиплайн проект, расчет зиплайна, инженерия зиплайна, веревочный парк строительство, построить веревочный парк, rope park строительство, экстрим парк под ключ, adventure park под ключ, строительство аттракционов, компания аттракционы узбекистан, производитель аттракционов, проектирование аттракционов, канатная дорога строительство, построить канатную дорогу, канатка узбекистан, канатная дорога под ключ, cable car construction, ropeway construction, gondola lift construction, заказать, цена, под ключ, строительство, проектирование, монтаж",
    locale: "ru_RU",
  },
  en: {
    title: "UZAMUSE ECO | Attraction, zipline and cable car projects in Uzbekistan",
    description:
      "UZAMUSE ECO delivers attraction, zipline, rope park and cable car projects in Uzbekistan.",
    keywords:
      "uzamuse eco, zipline construction, build zipline, zipline builders, zipline company, zipline turnkey, zipline installation, zipline design, zipline engineering, zipline equipment, zipline cost, zipline price, zipline project, buy zipline, rope park construction, adventure park construction, amusement park construction, cable car construction, ropeway construction, gondola construction, turnkey construction, project design, installation services",
    locale: "en_US",
  },
  uz: {
    title: "UZAMUSE ECO | Attraksion va kanat yo'li loyihalari O'zbekistonda",
    description:
      "UZAMUSE ECO O'zbekistonda attraksion, zipline, arqonli park va kanat yo'li loyihalash hamda qurish bo'yicha professional kompaniya.",
    keywords:
      "uzamuse eco, zipline qurish, zipline yasash, zipline o'rnatish, zipline narxi, zipline toshkent, zipline o'zbekiston, zipline buyurtma, zipline kompaniya, zipline loyiha, zipline montaj, zipline uskuna, zipline biznes, zipline biznes ochish, tayyor zipline loyiha, arqonli park qurish, attraksion qurish, attraksionlar o'zbekiston, ekstremal park qurish, sarguzasht park qurish, kanat yo'li qurish, osma yo'l qurish, kanat yo'li narxi, buyurtma, narx, pod klyuch, qurilish, loyihalash, montaj",
    locale: "uz_UZ",
  },
} satisfies Record<Language, { title: string; description: string; keywords: string; locale: string }>;

const HREFLANG_URLS: Record<Language | "x-default", string> = {
  uz: ROOT_URL,
  ru: `${ROOT_URL}?lang=ru`,
  en: `${ROOT_URL}?lang=en`,
  "x-default": ROOT_URL,
};

const OG_LOCALE_ALTERNATES: Record<Language, string[]> = {
  uz: ["ru_RU", "en_US"],
  ru: ["uz_UZ", "en_US"],
  en: ["uz_UZ", "ru_RU"],
};

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

function ensureLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
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
  const canonicalUrl = HREFLANG_URLS[lang];
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.logo);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${ROOT_URL}#organization`,
        name: "Uzamuse Eco",
        url: ROOT_URL,
        logo: absoluteLogoUrl,
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
        "@id": `${ROOT_URL}#website`,
        url: ROOT_URL,
        name: "Uzamuse Eco",
        inLanguage: lang,
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: current.title,
        isPartOf: {
          "@id": `${ROOT_URL}#website`,
        },
        about: {
          "@id": `${ROOT_URL}#organization`,
        },
        description: current.description,
        inLanguage: lang,
      },
      {
        "@type": "Service",
        "@id": `${ROOT_URL}#service`,
        serviceType: SERVICES[lang].join(", "),
        provider: {
          "@id": `${ROOT_URL}#organization`,
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
  ensureMeta('meta[name="news_keywords"]', { name: "news_keywords" }).setAttribute("content", current.keywords);
  ensureMeta('meta[name="author"]', { name: "author" }).setAttribute("content", "Uzamuse Eco");
  ensureMeta('meta[name="robots"]', { name: "robots" }).setAttribute(
    "content",
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  );
  ensureMeta('meta[name="googlebot"]', { name: "googlebot" }).setAttribute(
    "content",
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  );
  ensureMeta('meta[name="theme-color"]', { name: "theme-color" }).setAttribute("content", "#050505");
  ensureMeta('meta[name="color-scheme"]', { name: "color-scheme" }).setAttribute("content", "dark");
  ensureMeta('meta[name="apple-mobile-web-app-capable"]', { name: "apple-mobile-web-app-capable" }).setAttribute("content", "yes");
  ensureMeta('meta[name="apple-mobile-web-app-title"]', { name: "apple-mobile-web-app-title" }).setAttribute("content", "Uzamuse Eco");
  ensureMeta('meta[name="apple-mobile-web-app-status-bar-style"]', { name: "apple-mobile-web-app-status-bar-style" }).setAttribute("content", "black-translucent");
  ensureMeta('meta[name="msapplication-TileColor"]', { name: "msapplication-TileColor" }).setAttribute("content", "#050505");
  ensureMeta('meta[name="msapplication-TileImage"]', { name: "msapplication-TileImage" }).setAttribute("content", absoluteLogoUrl);
  ensureMeta('meta[property="og:title"]', { property: "og:title" }).setAttribute("content", current.title);
  ensureMeta('meta[property="og:description"]', { property: "og:description" }).setAttribute("content", current.description);
  ensureMeta('meta[property="og:type"]', { property: "og:type" }).setAttribute("content", "website");
  ensureMeta('meta[property="og:locale"]', { property: "og:locale" }).setAttribute("content", current.locale);
  ensureMeta('meta[property="og:url"]', { property: "og:url" }).setAttribute("content", canonicalUrl);
  ensureMeta('meta[property="og:image"]', { property: "og:image" }).setAttribute("content", absoluteLogoUrl);
  ensureMeta('meta[property="og:image:type"]', { property: "og:image:type" }).setAttribute("content", "image/png");
  ensureMeta('meta[property="og:image:width"]', { property: "og:image:width" }).setAttribute("content", "1024");
  ensureMeta('meta[property="og:image:height"]', { property: "og:image:height" }).setAttribute("content", "1024");
  ensureMeta('meta[property="og:image:alt"]', { property: "og:image:alt" }).setAttribute("content", "Uzamuse Eco logo");
  ensureMeta('meta[property="og:site_name"]', { property: "og:site_name" }).setAttribute("content", "Uzamuse Eco");
  ensureMeta('meta[name="twitter:title"]', { name: "twitter:title" }).setAttribute("content", current.title);
  ensureMeta('meta[name="twitter:description"]', { name: "twitter:description" }).setAttribute("content", current.description);
  ensureMeta('meta[name="twitter:image"]', { name: "twitter:image" }).setAttribute("content", absoluteLogoUrl);
  ensureMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt" }).setAttribute("content", "Uzamuse Eco logo");
  ensureMeta('meta[name="twitter:card"]', { name: "twitter:card" }).setAttribute("content", "summary_large_image");
  ensureMeta('meta[name="twitter:site"]', { name: "twitter:site" }).setAttribute("content", "@uzamuseeco");
  ensureMeta('meta[name="twitter:url"]', { name: "twitter:url" }).setAttribute("content", canonicalUrl);
  ensureMeta('meta[name="application-name"]', { name: "application-name" }).setAttribute("content", "Uzamuse Eco");
  ensureMeta('meta[name="format-detection"]', { name: "format-detection" }).setAttribute("content", "telephone=yes");
  ensureMeta('meta[name="referrer"]', { name: "referrer" }).setAttribute("content", "strict-origin-when-cross-origin");
  ensureMeta('meta[name="google"]', { name: "google" }).setAttribute("content", "notranslate");

  ensureLink('link[rel="canonical"]', { rel: "canonical" }).setAttribute("href", canonicalUrl);
  ensureLink('link[rel="alternate"][hreflang="uz"]', { rel: "alternate", hreflang: "uz" }).setAttribute("href", HREFLANG_URLS.uz);
  ensureLink('link[rel="alternate"][hreflang="ru"]', { rel: "alternate", hreflang: "ru" }).setAttribute("href", HREFLANG_URLS.ru);
  ensureLink('link[rel="alternate"][hreflang="en"]', { rel: "alternate", hreflang: "en" }).setAttribute("href", HREFLANG_URLS.en);
  ensureLink('link[rel="alternate"][hreflang="x-default"]', { rel: "alternate", hreflang: "x-default" }).setAttribute("href", HREFLANG_URLS["x-default"]);
  ensureLink('link[rel="sitemap"]', { rel: "sitemap", type: "application/xml" }).setAttribute("href", `${ROOT_URL}sitemap.xml`);

  document
    .head
    .querySelectorAll('meta[property="og:locale:alternate"]')
    .forEach((node) => node.remove());

  OG_LOCALE_ALTERNATES[lang].forEach((locale) => {
    ensureMeta(`meta[property="og:locale:alternate"][content="${locale}"]`, {
      property: "og:locale:alternate",
    }).setAttribute("content", locale);
  });

  ensureStructuredData().textContent = JSON.stringify(schema);
}

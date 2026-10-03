export const SITE_URL = "https://bamo.bahaymo.com";
export const SUMMIT_PATH = "/events/innovation-summit-2026";

export function pageHead(
  title: string,
  description: string,
  path: string,
  image = "/og-image.png",
) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}${path}` },
      { property: "og:image", content: `${SITE_URL}${image}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}${image}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${path}` }],
  };
}

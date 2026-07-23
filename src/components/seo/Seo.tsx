import { useEffect } from "react";
import { SITE } from "@/data/site";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
};

export function Seo({
  title,
  description = "NovaGate ImmiServices, Llc provides professional immigration consulting for visas, green cards, citizenship, and family-based petitions.",
  path = "",
}: SeoProps) {
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} | Professional Immigration Consulting Services`;
  const url = `${SITE.url}${path}`;

  useEffect(() => {
    document.title = fullTitle;

    const ensureMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    ensureMeta('meta[name="description"]', "name", "description", description);
    ensureMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    ensureMeta('meta[property="og:description"]', "property", "og:description", description);
    ensureMeta('meta[property="og:url"]', "property", "og:url", url);
    ensureMeta('meta[property="og:type"]', "property", "og:type", "website");
    ensureMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [fullTitle, description, url]);

  return null;
}

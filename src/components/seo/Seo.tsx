import { useEffect } from "react";
import { SITE } from "@/data/site";
import { useI18n } from "@/i18n";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
};

export function Seo({ title, description, path = "" }: SeoProps) {
  const { t, locale, pathFor } = useI18n();
  const resolvedDescription = description ?? t("meta.defaultDescription");
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : t("meta.homeTitle");
  const cleanPath = path.replace(/^\/+/, "");
  const url = `${SITE.url}${pathFor(cleanPath)}`;

  useEffect(() => {
    document.title = fullTitle;
    document.documentElement.lang = locale;

    const ensureMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    ensureMeta('meta[name="description"]', "name", "description", resolvedDescription);
    ensureMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    ensureMeta('meta[property="og:description"]', "property", "og:description", resolvedDescription);
    ensureMeta('meta[property="og:url"]', "property", "og:url", url);
    ensureMeta('meta[property="og:type"]', "property", "og:type", "website");
    ensureMeta('meta[property="og:locale"]', "property", "og:locale", locale === "es" ? "es_US" : "en_US");
    ensureMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [fullTitle, resolvedDescription, url, locale]);

  return null;
}

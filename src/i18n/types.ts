export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "novagate-locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "en" || value === "es";
}

export function detectLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    /* ignore */
  }
  const nav = (navigator.language || "en").toLowerCase();
  return nav.startsWith("es") ? "es" : "en";
}

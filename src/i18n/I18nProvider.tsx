import { useCallback, useEffect, useMemo, type ReactNode } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { I18nContext } from "./context";
import { getMessage, messagesByLocale } from "./messages";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  isLocale,
  type Locale,
} from "./types";

type Props = { children: ReactNode };

export function I18nProvider({ children }: Props) {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const locale: Locale = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const messages = messagesByLocale[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) =>
      getMessage(messages, key, vars),
    [messages],
  );

  const pathFor = useCallback(
    (path = "") => {
      const clean = path.replace(/^\/+/, "").replace(/\/+$/, "");
      return clean ? `/${locale}/${clean}` : `/${locale}`;
    },
    [locale],
  );

  const switchLocalePath = useCallback(
    (next: Locale) => {
      const segments = location.pathname.split("/").filter(Boolean);
      if (segments.length && isLocale(segments[0])) {
        segments[0] = next;
      } else {
        segments.unshift(next);
      }
      const nextPath = `/${segments.join("/")}`;
      return `${nextPath}${location.search}${location.hash}`;
    },
    [location.hash, location.pathname, location.search],
  );

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;
      navigate(switchLocalePath(next));
    },
    [locale, navigate, switchLocalePath],
  );

  const value = useMemo(
    () => ({ locale, messages, t, setLocale, pathFor, switchLocalePath }),
    [locale, messages, t, setLocale, pathFor, switchLocalePath],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

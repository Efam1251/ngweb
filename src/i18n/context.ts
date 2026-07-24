import { createContext } from "react";
import type { Locale } from "./types";
import type { Messages } from "./messages";

export type I18nContextValue = {
  locale: Locale;
  messages: Messages;
  t: (key: string, vars?: Record<string, string | number>) => string;
  setLocale: (locale: Locale) => void;
  pathFor: (path?: string) => string;
  switchLocalePath: (next: Locale) => string;
};

export const I18nContext = createContext<I18nContextValue | null>(null);

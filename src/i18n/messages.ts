import type { Locale } from "./types";
import { en, type Messages } from "./en";
import { es } from "./es";

export type { Messages };

export const messagesByLocale: Record<Locale, Messages> = {
  en,
  es,
};

export function getMessage(
  messages: Messages,
  key: string,
  vars?: Record<string, string | number>,
): string {
  const parts = key.split(".");
  let cur: unknown = messages;
  for (const part of parts) {
    if (cur && typeof cur === "object" && part in (cur as object)) {
      cur = (cur as Record<string, unknown>)[part];
    } else {
      return key;
    }
  }
  if (typeof cur !== "string") return key;
  if (!vars) return cur;
  return cur.replace(/\{(\w+)\}/g, (_, name: string) =>
    vars[name] !== undefined ? String(vars[name]) : `{${name}}`,
  );
}

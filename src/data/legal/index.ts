import type { Locale } from "@/i18n/types";
import { privacyEn } from "./privacy.en";
import { privacyEs } from "./privacy.es";
import { termsEn } from "./terms.en";
import { termsEs } from "./terms.es";
import type { LegalDocument, LegalKind } from "./types";

export { LEGAL_EFFECTIVE_ISO, LEGAL_VERSION } from "./constants";
export type { LegalBlock, LegalDocument, LegalKind, LegalSection } from "./types";

const DOCS: Record<LegalKind, Record<Locale, LegalDocument>> = {
  privacy: { en: privacyEn, es: privacyEs },
  terms: { en: termsEn, es: termsEs },
};

export function getLegalDocument(kind: LegalKind, locale: Locale): LegalDocument {
  return DOCS[kind][locale];
}

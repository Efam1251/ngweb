export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalKind = "privacy" | "terms";

export type LegalDocument = {
  kind: LegalKind;
  version: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

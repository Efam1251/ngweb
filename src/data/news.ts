import type { FamilyBulletinMonth } from "@/lib/visaBulletin";
import {
  FAMILY_BULLETIN_AUGUST_2026,
  FAMILY_BULLETIN_SEPTEMBER_2026,
} from "@/data/visaBulletinFamily";

export type NewsKind = "article" | "visa-bulletin";

export type NewsPost = {
  slug: string;
  date: string;
  copyKey: string;
  kind: NewsKind;
  bulletin?: {
    current: FamilyBulletinMonth;
    previous: FamilyBulletinMonth;
    uscisChartInfoUrl: string;
  };
};

export const NEWS_POSTS: NewsPost[] = [
  {
    slug: "visa-bulletin-september-2026",
    date: "2026-08-22",
    copyKey: "visaBulletinSeptember2026",
    kind: "visa-bulletin",
    bulletin: {
      current: FAMILY_BULLETIN_SEPTEMBER_2026,
      previous: FAMILY_BULLETIN_AUGUST_2026,
      uscisChartInfoUrl: "https://www.uscis.gov/visabulletininfo",
    },
  },
];

export function listNewsNewestFirst(): NewsPost[] {
  return [...NEWS_POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

export function getLatestBulletin(): NewsPost | undefined {
  return listNewsNewestFirst().find((post) => post.kind === "visa-bulletin");
}

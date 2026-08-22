import type { FamilyBulletinMonth } from "@/lib/visaBulletin";

const FAMILY_SEPTEMBER_2026_FINAL_ACTION = {
  F1: {
    worldwide: "22JAN20",
    china: "22JAN20",
    india: "22JAN20",
    mexico: "01JAN08",
    philippines: "01MAY13",
  },
  F2A: {
    worldwide: "22AUG26",
    china: "22AUG26",
    india: "22AUG26",
    mexico: "22AUG25",
    philippines: "22AUG26",
  },
  F2B: {
    worldwide: "22AUG19",
    china: "22AUG19",
    india: "22AUG19",
    mexico: "15FEB09",
    philippines: "01JUN13",
  },
  F3: {
    worldwide: "22OCT14",
    china: "22OCT14",
    india: "22OCT14",
    mexico: "01JUL01",
    philippines: "22FEB06",
  },
  F4: {
    worldwide: "22OCT11",
    china: "22OCT11",
    india: "01NOV06",
    mexico: "08APR01",
    philippines: "22AUG07",
  },
} as const;

const FAMILY_SEPTEMBER_2026_FILING = {
  F1: {
    worldwide: "01FEB20",
    china: "01FEB20",
    india: "01FEB20",
    mexico: "01DEC08",
    philippines: "22APR15",
  },
  F2A: {
    worldwide: "C",
    china: "C",
    india: "C",
    mexico: "C",
    philippines: "C",
  },
  F2B: {
    worldwide: "01SEP19",
    china: "01SEP19",
    india: "01SEP19",
    mexico: "15MAY10",
    philippines: "01OCT13",
  },
  F3: {
    worldwide: "01NOV14",
    china: "01NOV14",
    india: "01NOV14",
    mexico: "15JUL01",
    philippines: "08AUG06",
  },
  F4: {
    worldwide: "01NOV11",
    china: "01NOV11",
    india: "15DEC06",
    mexico: "30APR01",
    philippines: "22MAR08",
  },
} as const;

const FAMILY_AUGUST_2026_FINAL_ACTION = {
  F1: {
    worldwide: "15DEC18",
    china: "15DEC18",
    india: "15DEC18",
    mexico: "01DEC07",
    philippines: "01MAY13",
  },
  F2A: {
    worldwide: "22JUL26",
    china: "22JUL26",
    india: "22JUL26",
    mexico: "22JUL25",
    philippines: "22JUL26",
  },
  F2B: {
    worldwide: "01JAN18",
    china: "01JAN18",
    india: "01JAN18",
    mexico: "15FEB09",
    philippines: "01JUN13",
  },
  F3: {
    worldwide: "15MAY12",
    china: "15MAY12",
    india: "15MAY12",
    mexico: "01JUL01",
    philippines: "22FEB06",
  },
  F4: {
    worldwide: "01SEP09",
    china: "01SEP09",
    india: "01NOV06",
    mexico: "08APR01",
    philippines: "01AUG07",
  },
} as const;

const FAMILY_AUGUST_2026_FILING = {
  F1: {
    worldwide: "15JUN19",
    china: "15JUN19",
    india: "15JUN19",
    mexico: "01DEC08",
    philippines: "22APR15",
  },
  F2A: {
    worldwide: "C",
    china: "C",
    india: "C",
    mexico: "C",
    philippines: "C",
  },
  F2B: {
    worldwide: "01JAN19",
    china: "01JAN19",
    india: "01JAN19",
    mexico: "15MAY10",
    philippines: "01OCT13",
  },
  F3: {
    worldwide: "01MAR13",
    china: "01MAR13",
    india: "01MAR13",
    mexico: "15JUL01",
    philippines: "08AUG06",
  },
  F4: {
    worldwide: "22JUN10",
    china: "22JUN10",
    india: "15DEC06",
    mexico: "30APR01",
    philippines: "22MAR08",
  },
} as const;

export const FAMILY_BULLETIN_SEPTEMBER_2026: FamilyBulletinMonth = {
  month: "2026-09",
  monthStart: "2026-09-01",
  labelKey: "september2026",
  officialUrl:
    "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin/2026/visa-bulletin-for-september-2026.html",
  finalAction: FAMILY_SEPTEMBER_2026_FINAL_ACTION,
  datesForFiling: FAMILY_SEPTEMBER_2026_FILING,
};

export const FAMILY_BULLETIN_AUGUST_2026: FamilyBulletinMonth = {
  month: "2026-08",
  monthStart: "2026-08-01",
  labelKey: "august2026",
  officialUrl:
    "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin/2026/visa-bulletin-for-august-2026.html",
  finalAction: FAMILY_AUGUST_2026_FINAL_ACTION,
  datesForFiling: FAMILY_AUGUST_2026_FILING,
};

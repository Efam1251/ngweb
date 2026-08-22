export const FAMILY_CATEGORIES = ["F1", "F2A", "F2B", "F3", "F4"] as const;
export type FamilyCategory = (typeof FAMILY_CATEGORIES)[number];

export const CHARGEABILITIES = [
  "worldwide",
  "china",
  "india",
  "mexico",
  "philippines",
] as const;
export type Chargeability = (typeof CHARGEABILITIES)[number];

export const CHARTS = ["finalAction", "datesForFiling"] as const;
export type BulletinChartId = (typeof CHARTS)[number];

export type BulletinToken = string;

export type BulletinCell =
  | { type: "current" }
  | { type: "unavailable" }
  | { type: "date"; iso: string };

export type FamilyChart = Record<
  FamilyCategory,
  Record<Chargeability, BulletinToken>
>;

export type FamilyBulletinMonth = {
  month: string;
  monthStart: string;
  labelKey: string;
  officialUrl: string;
  finalAction: FamilyChart;
  datesForFiling: FamilyChart;
};

const MONTH_INDEX: Record<string, number> = {
  JAN: 0,
  FEB: 1,
  MAR: 2,
  APR: 3,
  MAY: 4,
  JUN: 5,
  JUL: 6,
  AUG: 7,
  SEP: 8,
  OCT: 9,
  NOV: 10,
  DEC: 11,
};

export function parseVisaBulletinToken(token: BulletinToken): BulletinCell {
  const value = token.trim().toUpperCase();
  if (value === "C") return { type: "current" };
  if (value === "U") return { type: "unavailable" };

  const match = value.match(/^(\d{2})([A-Z]{3})(\d{2})$/);
  if (!match) {
    throw new Error(`Invalid visa bulletin date: ${token}`);
  }

  const day = Number(match[1]);
  const month = MONTH_INDEX[match[2]];
  const year = 2000 + Number(match[3]);
  if (month == null || day < 1 || day > 31) {
    throw new Error(`Invalid visa bulletin date: ${token}`);
  }

  return {
    type: "date",
    iso: `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
  };
}

export function utcDate(iso: string): Date {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

export type CalendarDiff = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
};

export function calendarDiff(fromIso: string, toIso: string): CalendarDiff {
  const from = utcDate(fromIso);
  const to = utcDate(toIso);
  const totalDays = Math.round((to.getTime() - from.getTime()) / 86_400_000);

  let years = to.getUTCFullYear() - from.getUTCFullYear();
  let months = to.getUTCMonth() - from.getUTCMonth();
  let days = to.getUTCDate() - from.getUTCDate();

  if (days < 0) {
    months -= 1;
    const previousMonthLastDay = new Date(
      Date.UTC(to.getUTCFullYear(), to.getUTCMonth(), 0),
    ).getUTCDate();
    days += previousMonthLastDay;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days, totalDays };
}

export type MovementKind =
  | "advance"
  | "hold"
  | "retrogress"
  | "still-current"
  | "became-current"
  | "lost-current"
  | "unavailable";

export type CellMovement = {
  category: FamilyCategory;
  region: Chargeability;
  chart: BulletinChartId;
  previous: BulletinCell;
  current: BulletinCell;
  kind: MovementKind;
  diff: CalendarDiff | null;
};

export function compareCells(
  previousToken: BulletinToken,
  currentToken: BulletinToken,
): Omit<CellMovement, "category" | "region" | "chart"> {
  const previous = parseVisaBulletinToken(previousToken);
  const current = parseVisaBulletinToken(currentToken);

  if (previous.type === "current" && current.type === "current") {
    return { previous, current, kind: "still-current", diff: null };
  }
  if (previous.type === "date" && current.type === "current") {
    return { previous, current, kind: "became-current", diff: null };
  }
  if (previous.type === "current" && current.type === "date") {
    return { previous, current, kind: "lost-current", diff: null };
  }
  if (previous.type === "unavailable" || current.type === "unavailable") {
    return { previous, current, kind: "unavailable", diff: null };
  }
  if (previous.type === "date" && current.type === "date") {
    const forward = calendarDiff(previous.iso, current.iso);
    if (forward.totalDays > 0) {
      return { previous, current, kind: "advance", diff: forward };
    }
    if (forward.totalDays < 0) {
      return {
        previous,
        current,
        kind: "retrogress",
        diff: calendarDiff(current.iso, previous.iso),
      };
    }
    return { previous, current, kind: "hold", diff: { years: 0, months: 0, days: 0, totalDays: 0 } };
  }

  return { previous, current, kind: "hold", diff: null };
}

export function compareCharts(
  previous: FamilyBulletinMonth,
  current: FamilyBulletinMonth,
  chart: BulletinChartId,
): CellMovement[] {
  const rows: CellMovement[] = [];
  for (const category of FAMILY_CATEGORIES) {
    for (const region of CHARGEABILITIES) {
      const compared = compareCells(
        previous[chart][category][region],
        current[chart][category][region],
      );
      rows.push({ category, region, chart, ...compared });
    }
  }
  return rows;
}

export function movementCounts(rows: CellMovement[]) {
  return {
    advanced: rows.filter((row) => row.kind === "advance" || row.kind === "became-current").length,
    held: rows.filter(
      (row) =>
        row.kind === "hold" ||
        row.kind === "still-current" ||
        row.kind === "unavailable",
    ).length,
    retrogressed: rows.filter(
      (row) => row.kind === "retrogress" || row.kind === "lost-current",
    ).length,
    total: rows.length,
  };
}

export function topAdvances(rows: CellMovement[], limit = 6): CellMovement[] {
  return rows
    .filter((row) => row.kind === "advance" && row.diff)
    .sort((a, b) => (b.diff?.totalDays ?? 0) - (a.diff?.totalDays ?? 0))
    .slice(0, limit);
}

export function backlogVsMonth(
  cell: BulletinCell,
  monthStart: string,
): CalendarDiff | null {
  if (cell.type !== "date") return null;
  if (utcDate(cell.iso).getTime() >= utcDate(monthStart).getTime()) {
    return calendarDiff(monthStart, cell.iso);
  }
  return calendarDiff(cell.iso, monthStart);
}

export function filingLead(
  finalAction: BulletinCell,
  datesForFiling: BulletinCell,
): CalendarDiff | null {
  if (datesForFiling.type === "current") return null;
  if (finalAction.type !== "date" || datesForFiling.type !== "date") return null;
  if (datesForFiling.iso <= finalAction.iso) {
    return calendarDiff(datesForFiling.iso, finalAction.iso);
  }
  return calendarDiff(finalAction.iso, datesForFiling.iso);
}

export function formatIsoDate(iso: string, locale: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString(locale === "es" ? "es-US" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function durationParts(diff: CalendarDiff): Array<{ unit: "year" | "month" | "day"; n: number }> {
  const parts: Array<{ unit: "year" | "month" | "day"; n: number }> = [];
  if (diff.years) parts.push({ unit: "year", n: diff.years });
  if (diff.months) parts.push({ unit: "month", n: diff.months });
  if (diff.days || parts.length === 0) parts.push({ unit: "day", n: diff.days });
  return parts;
}

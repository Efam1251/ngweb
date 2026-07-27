export const PROCESS_STEP_IDS = [1, 2, 3, 4, 5] as const;

export const WHY_POINT_IDS = [
  { id: 1, icon: "compass" as const },
  { id: 2, icon: "users" as const },
  { id: 3, icon: "document" as const },
  { id: 4, icon: "message" as const },
] as const;

export const METRIC_IDS = [1, 2, 3, 4] as const;

export const VALUE_IDS = [1, 2, 3, 4] as const;

export const TEAM = [
  {
    id: 1,
    image: "/team/ernesto-acevedo.png",
  },
] as const;

export const TESTIMONIAL_IDS = [1, 2, 3] as const;

export const FAQ_IDS = [1, 2, 3, 4, 5] as const;

export const ARTICLES = [
  {
    id: 1,
    slug: "what-to-expect-in-your-first-immigration-consultation",
    date: "2026-05-12",
    readMinutes: 6,
  },
  {
    id: 2,
    slug: "document-checklist-for-family-based-petitions",
    date: "2026-04-03",
    readMinutes: 8,
  },
  {
    id: 3,
    slug: "green-card-interview-preparation-tips",
    date: "2026-03-18",
    readMinutes: 7,
  },
] as const;

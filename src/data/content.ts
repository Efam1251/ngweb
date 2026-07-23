export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Initial Consultation",
    detail:
      "We listen to your goals, review your background, and outline realistic pathways with clear expectations.",
  },
  {
    step: 2,
    title: "Case Evaluation",
    detail:
      "We assess eligibility, identify risks and document gaps, and recommend a strategy tailored to your situation.",
  },
  {
    step: 3,
    title: "Document Preparation",
    detail:
      "You receive organized checklists and guided support to assemble accurate, complete filing materials.",
  },
  {
    step: 4,
    title: "Application Processing",
    detail:
      "We help package and submit your filing, then track milestones so you always know what comes next.",
  },
  {
    step: 5,
    title: "Case Follow-Up",
    detail:
      "From RFEs to interview preparation and status updates, we stay with you through each stage of the journey.",
  },
] as const;

export const WHY_POINTS = [
  {
    title: "Clarity over complexity",
    text: "Immigration rules are dense. We translate them into practical next steps you can act on.",
    icon: "compass" as const,
  },
  {
    title: "Personalized case strategy",
    text: "No two histories are the same. Your plan is built around your family, career, and timeline.",
    icon: "users" as const,
  },
  {
    title: "Disciplined preparation",
    text: "Strong filings start with organized evidence. We emphasize completeness before submission.",
    icon: "document" as const,
  },
  {
    title: "Steady communication",
    text: "You receive transparent updates and guidance at each milestone—never radio silence.",
    icon: "message" as const,
  },
] as const;

/** Credibility markers — soft metrics that avoid unverifiable win-rate claims. */
export const METRICS = [
  { value: "10+", label: "Years guiding clients through U.S. pathways" },
  { value: "1,000+", label: "Consultations completed with care" },
  { value: "7", label: "Core immigration service areas" },
  { value: "Nationwide", label: "Remote & in-person support available" },
] as const;

export const VALUES = [
  {
    title: "Integrity",
    text: "We provide honest assessments—even when the best answer is to wait, gather more evidence, or reconsider a path.",
  },
  {
    title: "Care",
    text: "Behind every case is a family, a career, or a future. We treat that responsibility with respect.",
  },
  {
    title: "Precision",
    text: "Details matter. Forms, dates, and supporting documents are reviewed with professional rigor.",
  },
  {
    title: "Guidance",
    text: "We educate as we advise, so clients understand not only what to do—but why it matters.",
  },
] as const;

export const TEAM = [
  {
    name: "Elena Vargas",
    role: "Founder & Principal Consultant",
    bio: "Elena founded NovaGate to give families and professionals a calmer, clearer immigration experience—strategy first, paperwork with purpose.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Daniel Okonkwo",
    role: "Senior Case Strategist",
    bio: "Daniel specializes in family-based and residency pathways, helping clients organize complex histories into coherent filing strategies.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sofia Rahman",
    role: "Client Experience Lead",
    bio: "Sofia ensures every client has a clear timeline, document checklist, and point of contact from consultation through follow-up.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "NovaGate made a stressful process feel manageable. Every step was explained, and our petition package was organized with real care.",
    name: "María & Andrés G.",
    context: "Family-based petition",
  },
  {
    quote:
      "I finally understood my options. The case evaluation alone saved me months of guessing and incomplete filings.",
    name: "James T.",
    context: "Employment pathway consultation",
  },
  {
    quote:
      "Professional, calm, and thorough. They prepared me for my naturalization interview with confidence.",
    name: "Priya S.",
    context: "Citizenship application",
  },
] as const;

export const FAQS = [
  {
    q: "Do you provide legal representation in court?",
    a: "NovaGate Immigration provides immigration consulting and case-preparation guidance. For matters requiring attorney representation, we can help you identify when legal counsel is appropriate.",
  },
  {
    q: "How long does an immigration case take?",
    a: "Timelines vary by category, USCIS or consular workload, and case complexity. During consultation we outline typical ranges and the factors that can affect your timeline.",
  },
  {
    q: "Can you help if my case was previously denied?",
    a: "Often yes. We review prior filings, identify gaps, and discuss realistic next steps—which may include refiling with stronger evidence or pursuing a different pathway.",
  },
  {
    q: "What should I bring to my first consultation?",
    a: "Bring identification, any prior immigration notices or receipts, and a brief summary of your goals. We will tell you exactly which documents matter for your evaluation.",
  },
  {
    q: "Do you work with clients outside New Hampshire?",
    a: "Yes. Based in Nashua, NH, we also conduct many consultations and document reviews remotely for clients across the U.S. and abroad.",
  },
] as const;

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readMinutes: number;
};

/** Add new posts here — Resources page renders this list automatically. */
export const ARTICLES: Article[] = [
  {
    slug: "what-to-expect-in-your-first-immigration-consultation",
    title: "What to Expect in Your First Immigration Consultation",
    excerpt:
      "A practical overview of how consultations work, what questions to prepare, and how we turn your goals into a clear next-step plan.",
    category: "Guides",
    date: "2026-05-12",
    readMinutes: 6,
  },
  {
    slug: "document-checklist-for-family-based-petitions",
    title: "Document Checklist Essentials for Family-Based Petitions",
    excerpt:
      "The civil documents, relationship evidence, and translation considerations that commonly strengthen family immigration packages.",
    category: "Checklists",
    date: "2026-04-03",
    readMinutes: 8,
  },
  {
    slug: "green-card-interview-preparation-tips",
    title: "Green Card Interview Preparation Tips",
    excerpt:
      "How to organize your file, review your forms for consistency, and approach the interview with calm, prepared answers.",
    category: "Articles",
    date: "2026-03-18",
    readMinutes: 7,
  },
];

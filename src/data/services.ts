export type Service = {
  id: string;
  title: string;
  summary: string;
  description: string;
  benefits: string[];
  whoFor: string;
  image: string;
  imageAlt: string;
};

export const SERVICES: Service[] = [
  {
    id: "family-immigration",
    title: "Family Immigration",
    summary:
      "Reunite with spouses, children, parents, and relatives through carefully prepared family-based petitions.",
    description:
      "We guide families through petition strategy, supporting evidence, and filing timelines so loved ones can move forward with clarity—not confusion.",
    benefits: [
      "Petition pathway mapping for immediate relatives and preference categories",
      "Evidence checklists tailored to your family relationship",
      "Coordination of translations, civil documents, and affidavits",
    ],
    whoFor:
      "U.S. citizens and permanent residents sponsoring family members, and relatives preparing for interviews or adjustment of status.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Family walking together outdoors",
  },
  {
    id: "green-card",
    title: "Green Card Assistance",
    summary:
      "End-to-end support for permanent residency through family, employment, and other eligible pathways.",
    description:
      "From initial eligibility review to Form I-485 packages and interview preparation, we help you build a complete, organized residency filing.",
    benefits: [
      "Eligibility assessment across common green card routes",
      "Adjustment of status and consular processing guidance",
      "Interview preparation and status tracking support",
    ],
    whoFor:
      "Individuals and families pursuing lawful permanent residence who want structured, professional case management.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Organized documents and planning materials on a desk",
  },
  {
    id: "citizenship",
    title: "Citizenship Applications",
    summary:
      "Naturalization guidance that prepares you for eligibility, filing, and the citizenship interview.",
    description:
      "We help permanent residents evaluate readiness for naturalization, assemble Form N-400 packages, and prepare confidently for USCIS interviews.",
    benefits: [
      "Continuous residence and physical presence review",
      "Application packaging and supporting evidence",
      "Civics and interview readiness coaching",
    ],
    whoFor:
      "Lawful permanent residents ready—or nearly ready—to apply for U.S. citizenship.",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "American flag against a clear sky",
  },
  {
    id: "employment",
    title: "Employment-Based Immigration",
    summary:
      "Strategic support for professionals, employers, and skilled workers navigating employment-based options.",
    description:
      "We help clients understand employment-based categories, prepare supporting documentation, and coordinate filings with clarity for both individuals and employers.",
    benefits: [
      "Category overview for common employment-based routes",
      "Document organization for petitions and supporting letters",
      "Timeline planning around work authorization and next steps",
    ],
    whoFor:
      "Skilled professionals, entrepreneurs, and employers seeking organized employment-immigration guidance.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Professionals collaborating in a bright office",
  },
  {
    id: "visa-consultation",
    title: "Visa Consultation",
    summary:
      "Clear advice on temporary visa options, renewals, and transitions aligned to your goals.",
    description:
      "Whether you are exploring a new visa category or preparing to renew, we provide practical consultations that explain options, risks, and documentation needs.",
    benefits: [
      "Goal-based option comparison",
      "Renewal and change-of-status planning",
      "Document readiness recommendations",
    ],
    whoFor:
      "Individuals evaluating visitor, student, work, or other temporary visa pathways.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Airplane wing above clouds during travel",
  },
  {
    id: "case-evaluation",
    title: "Immigration Case Evaluation",
    summary:
      "A structured review of your history, goals, and options before you invest in a filing strategy.",
    description:
      "Our evaluations identify strengths, gaps, and realistic next steps so you can make informed decisions with a clear plan.",
    benefits: [
      "Full review of immigration history and objectives",
      "Risk and readiness assessment",
      "Written next-step recommendations",
    ],
    whoFor:
      "Anyone unsure which pathway fits—or who wants a second professional opinion before filing.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Advisor reviewing case notes with a client",
  },
  {
    id: "document-preparation",
    title: "Document Preparation Assistance",
    summary:
      "Meticulous organization of forms, evidence, translations, and filing packages.",
    description:
      "Incomplete packages cause delays. We help you prepare clear, consistent document sets that support a stronger filing presentation.",
    benefits: [
      "Custom document checklists",
      "Quality review for consistency and completeness",
      "Filing package assembly support",
    ],
    whoFor:
      "Clients who need disciplined document preparation for petitions, applications, or responses.",
    image:
      "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Passport and travel documents arranged neatly",
  },
];

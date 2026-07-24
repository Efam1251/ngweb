export type ServiceMeta = {
  id:
    | "family-immigration"
    | "green-card"
    | "citizenship"
    | "employment"
    | "visa-consultation"
    | "case-evaluation"
    | "document-preparation";
  image: string;
};

export const SERVICES: ServiceMeta[] = [
  {
    id: "family-immigration",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "green-card",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "citizenship",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "employment",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "visa-consultation",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "case-evaluation",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "document-preparation",
    image:
      "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1400&q=80",
  },
];

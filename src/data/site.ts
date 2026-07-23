export const SITE = {
  name: "NovaGate Immigration",
  shortName: "NovaGate",
  tagline: "Clear strategy. Disciplined preparation. Steady guidance through every milestone.",
  url: "https://novagateimmi.com",
  email: "info@novagateimmi.com",
  phone: "(603) 820-3041",
  phoneHref: "tel:+16038203041",
  addressLines: ["52 Summer Street", "Nashua, NH 03064"],
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 6:00 PM ET" },
    { day: "Saturday", time: "By appointment" },
    { day: "Sunday", time: "Closed" },
  ],
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

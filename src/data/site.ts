export const SITE = {
  name: "NovaGate ImmiServices, Llc",
  shortName: "NovaGate ImmiServices",
  url: "https://novagateimmi.com",
  email: "info@novagateimmi.com",
  phone: "(603) 820-3041",
  phoneHref: "tel:+16038203041",
  addressLines: ["52 Summer Street", "Nashua, NH 03064"],
} as const;

/** Path segments (without locale prefix). Labels come from i18n. */
export const NAV_LINKS = [
  { to: "", key: "home" },
  { to: "about", key: "about" },
  { to: "services", key: "services" },
  { to: "process", key: "process" },
  { to: "resources", key: "resources" },
  { to: "contact", key: "contact" },
] as const;

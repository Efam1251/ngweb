export const SITE = {
  name: "NovaGate ImmiServices, Llc",
  shortName: "NovaGate ImmiServices",
  url: "https://novagateimmi.com",
  email: "info@novagateimmi.com",
  phone: "(603) 820-3041",
  phoneHref: "tel:+16038203041",
  addressLines: ["52 Summer Street", "Nashua, NH 03064"],
} as const;

/**
 * Business social profiles. Update URLs when official handles are confirmed.
 * WhatsApp uses the public business phone number.
 */
export const SOCIAL_LINKS = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592230239967",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/novagateimmi",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/16038203041",
  },
  {
    id: "twitter",
    label: "X (Twitter)",
    href: "https://x.com/novagateimmi",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@novagateimmi",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/novagateimmi",
  },
] as const;

/** Path segments (without locale prefix). Labels come from i18n. */
export const NAV_LINKS = [
  { to: "", key: "home" },
  { to: "about", key: "about" },
  { to: "services", key: "services" },
  { to: "process", key: "process" },
  { to: "resources", key: "resources" },
  { to: "contact", key: "contact" },
] as const;

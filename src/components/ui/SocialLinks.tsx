import type { ReactNode } from "react";
import { SOCIAL_LINKS } from "@/data/site";

type SocialId = (typeof SOCIAL_LINKS)[number]["id"];

type SocialLinksProps = {
  className?: string;
  /** Dark footer / navy panels vs light surfaces */
  onDark?: boolean;
  size?: "sm" | "md";
};

const icons: Record<SocialId, ReactNode> = {
  facebook: (
    <path
      d="M14 8h2.5V5.5A16 16 0 0 0 13.2 5C10.6 5 9 6.6 9 9.4V11H6.5v3H9v7h3.5v-7H15l.5-3h-3V9.6c0-.9.2-1.6 1.5-1.6z"
      fill="currentColor"
      stroke="none"
    />
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  whatsapp: (
    <path
      d="M12 4.5a7.5 7.5 0 0 0-6.5 11.2L4.5 19.5l4-1A7.5 7.5 0 1 0 12 4.5zm0 1.7a5.8 5.8 0 0 1 4.9 8.9l-.3.4.7 2.5-2.6-.7-.4.2A5.8 5.8 0 1 1 12 6.2zm3.2 7.3c-.2-.1-1.1-.5-1.2-.6-.2-.1-.3-.1-.5.1-.1.2-.5.6-.6.7-.1.1-.2.2-.4.1a4.7 4.7 0 0 1-2.3-2c-.1-.2 0-.3.1-.4l.3-.4c.1-.1.1-.2.2-.4 0-.1 0-.3 0-.4 0-.1-.5-1.2-.7-1.6-.2-.4-.4-.4-.5-.4h-.4c-.1 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.4 2.3.9 2.3.6 2.7.6.4 0 1.3-.5 1.5-1 .2-.5.2-.9.1-1z"
      fill="currentColor"
      stroke="none"
    />
  ),
  twitter: (
    <path
      d="M5 5h3.2l4 5.4L16.8 5H19l-5.4 6.4L19.5 19h-3.2l-4.3-5.7L7.2 19H5l5.7-6.7L5 5z"
      fill="currentColor"
      stroke="none"
    />
  ),
  youtube: (
    <>
      <path d="M21 8.5a3 3 0 0 0-2.1-2.1C17.2 6 12 6 12 6s-5.2 0-6.9.4A3 3 0 0 0 3 8.5 31 31 0 0 0 3 12a31 31 0 0 0 .1 3.5 3 3 0 0 0 2.1 2.1C6.8 18 12 18 12 18s5.2 0 6.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 21 12a31 31 0 0 0 0-3.5z" />
      <path d="m10.5 14.5 4.5-2.5-4.5-2.5v5z" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <path
      d="M7 10.5v7H4.5v-7H7zM5.7 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM19.5 17.5h-2.5v-3.6c0-1.1-.4-1.8-1.4-1.8-.8 0-1.2.5-1.4 1.1-.1.2-.1.5-.1.8v3.5H11.6s.1-5.7 0-7H14v1c.3-.5 1-1.2 2.4-1.2 1.8 0 3.1 1.2 3.1 3.7v3.5z"
      fill="currentColor"
      stroke="none"
    />
  ),
};

export function SocialLinks({ className = "", onDark = false, size = "md" }: SocialLinksProps) {
  const box = size === "sm" ? "h-9 w-9" : "h-10 w-10";
  const icon = size === "sm" ? "h-4 w-4" : "h-[1.15rem] w-[1.15rem]";
  const tone = onDark
    ? "border-white/20 text-white/80 hover:border-gold hover:text-gold hover:bg-white/5"
    : "border-line text-navy/70 hover:border-navy hover:text-navy hover:bg-mist";

  return (
    <ul className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {SOCIAL_LINKS.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className={`inline-flex ${box} items-center justify-center rounded-md border transition duration-200 ${tone}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={icon}
              aria-hidden
            >
              {icons[item.id]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

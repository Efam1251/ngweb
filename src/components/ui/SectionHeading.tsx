import { SITE } from "@/data/site";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  brand?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  brand = false,
  className = "",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  const alignCls = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow ? (
        <p
          className={`text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${
            dark ? "text-gold-soft" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      {brand ? (
        <p
          className={`mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          {SITE.name}
        </p>
      ) : null}
      <h2
        className={`font-display font-semibold tracking-tight text-balance ${
          brand ? "mt-2 text-3xl sm:text-4xl" : "mt-3 text-3xl sm:text-4xl md:text-[2.75rem]"
        } ${dark ? "text-white" : "text-navy"} leading-[1.15]`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

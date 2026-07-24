import { SITE } from "@/data/site";

type BrandLogoProps = {
  withName?: boolean;
  className?: string;
  onDark?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  /** Prefer short brand line in tight nav contexts */
  compact?: boolean;
  /** Stack logo above the name (hero / footer statements) */
  stacked?: boolean;
  /** Optional line under the company name (hero) */
  eyebrow?: string;
};

const imageSize = {
  sm: "h-11 w-11 sm:h-12 sm:w-12",
  md: "h-12 w-12 sm:h-14 sm:w-14",
  lg: "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]",
  xl: "h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20",
  hero: "h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28",
} as const;

const platePad = {
  sm: "p-1",
  md: "p-1.5",
  lg: "p-2",
  xl: "p-2.5",
  hero: "p-3 sm:p-3.5",
} as const;

const nameSize = {
  sm: "text-lg sm:text-xl",
  md: "text-xl sm:text-2xl",
  lg: "text-2xl sm:text-3xl",
  xl: "text-3xl sm:text-4xl",
  hero: "text-[1.85rem] sm:text-4xl md:text-[2.75rem]",
} as const;

export function BrandLogo({
  withName = false,
  className = "",
  onDark = false,
  size = "md",
  compact = false,
  stacked = false,
  eyebrow,
}: BrandLogoProps) {
  const img = (
    <img
      src="/brand/novagate-logo.png"
      alt=""
      aria-hidden={withName}
      className={`${imageSize[size]} shrink-0 object-contain`}
      width={160}
      height={160}
      decoding="async"
    />
  );

  const logoPlate = (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-md bg-white shadow-[0_8px_24px_rgba(5,14,26,0.18)] ring-1 ${
        onDark ? "ring-white/70" : "ring-line/90"
      } ${platePad[size]}`}
    >
      {img}
    </span>
  );

  if (!withName) {
    return (
      <span className={`inline-flex items-center ${className}`} role="img" aria-label={SITE.name}>
        {logoPlate}
      </span>
    );
  }

  const titleCls = onDark ? "text-white" : "text-navy";
  const subCls = onDark ? "text-white/65" : "text-muted";
  const displayName = compact || size === "sm" ? SITE.shortName : SITE.name;

  if (stacked) {
    return (
      <span className={`inline-flex flex-col items-start gap-5 ${className}`}>
        {logoPlate}
        <span className="min-w-0 leading-[1.05]">
          <span
            className={`block font-display font-semibold tracking-tight text-balance ${nameSize[size]} ${titleCls}`}
          >
            {displayName}
          </span>
          {eyebrow ? (
            <span
              className={`mt-2 block text-[0.7rem] font-semibold uppercase tracking-[0.22em] sm:text-xs ${subCls}`}
            >
              {eyebrow}
            </span>
          ) : null}
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex min-w-0 items-center gap-3.5 sm:gap-4 ${className}`}>
      {logoPlate}
      <span className="min-w-0 leading-[1.05]">
        <span
          className={`block truncate font-display font-semibold tracking-tight ${nameSize[size]} ${titleCls}`}
        >
          {displayName}
        </span>
      </span>
    </span>
  );
}

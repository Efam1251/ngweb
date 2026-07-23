import { SITE } from "@/data/site";

type BrandLogoProps = {
  withName?: boolean;
  className?: string;
  onDark?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  /** Prefer short brand line in tight nav contexts */
  compact?: boolean;
};

const imageSize = {
  sm: "h-9 w-9 sm:h-10 sm:w-10",
  md: "h-11 w-11 sm:h-12 sm:w-12",
  lg: "h-14 w-14 sm:h-16 sm:w-16",
  xl: "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]",
} as const;

const nameSize = {
  sm: "text-[1.05rem] sm:text-lg",
  md: "text-xl sm:text-2xl",
  lg: "text-2xl sm:text-3xl",
  xl: "text-3xl sm:text-4xl",
} as const;

export function BrandLogo({
  withName = false,
  className = "",
  onDark = false,
  size = "md",
  compact = false,
}: BrandLogoProps) {
  const img = (
    <img
      src="/brand/novagate-logo.png"
      alt=""
      aria-hidden={withName}
      className={`${imageSize[size]} shrink-0 object-contain`}
      width={128}
      height={128}
      decoding="async"
    />
  );

  const logoPlate = onDark ? (
    <span className="inline-flex shrink-0 items-center justify-center rounded-md bg-white p-1 shadow-sm ring-1 ring-white/50">
      {img}
    </span>
  ) : (
    <span className="inline-flex shrink-0 items-center justify-center rounded-md bg-white ring-1 ring-line/80 p-0.5">
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

  return (
    <span className={`inline-flex min-w-0 items-center gap-3 ${className}`}>
      {logoPlate}
      <span className="min-w-0 leading-[1.05]">
        <span
          className={`block truncate font-display font-semibold tracking-tight ${nameSize[size]} ${titleCls}`}
        >
          {compact ? SITE.shortName : SITE.name}
        </span>
        {!compact && size !== "sm" ? (
          <span
            className={`mt-0.5 block text-[0.62rem] font-semibold uppercase tracking-[0.16em] sm:text-[0.68rem] ${subCls}`}
          >
            ImmiServices, LLC
          </span>
        ) : null}
      </span>
    </span>
  );
}

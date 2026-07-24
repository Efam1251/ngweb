import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "onDark" | "gold" | "outlineDark";
type ButtonSize = "md" | "lg" | "sm";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-[0_1px_0_rgba(255,255,255,0.12)_inset]",
  secondary:
    "bg-white text-navy border border-line hover:border-navy/25 hover:bg-pearl",
  ghost: "bg-transparent text-navy hover:bg-fog/80",
  onDark:
    "bg-white text-navy hover:bg-pearl border border-white/0",
  gold: "bg-gold text-navy-deep hover:bg-gold-hover shadow-[0_1px_0_rgba(255,255,255,0.2)_inset]",
  outlineDark:
    "bg-transparent text-white border border-white/35 hover:border-white hover:bg-white/10",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[0.9375rem]",
  lg: "px-7 py-3.5 text-base",
};

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  to,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-[0.01em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

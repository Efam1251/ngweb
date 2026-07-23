import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-surface-navy pb-16 pt-28 text-white sm:pb-20 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-[0.07]" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <Container className="relative">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-soft">
            {eyebrow}
          </p>
          <p className="mt-4 font-display text-2xl font-semibold text-white/90 sm:text-3xl">
            {SITE.name}
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl md:text-[3.25rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </Container>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}

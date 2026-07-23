import { Link } from "react-router-dom";
import { NAV_LINKS, SITE } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="pointer-events-none absolute inset-0 bg-surface-navy opacity-80" />
      <div className="relative border-b border-white/10">
        <Container className="flex flex-col items-start justify-between gap-8 py-12 md:flex-row md:items-center">
          <div>
            <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to take the next step?
            </p>
            <p className="mt-2 max-w-md text-sm text-white/65 sm:text-base">
              {`Speak with ${SITE.name} about your goals, timeline, and the pathway that fits your situation.`}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" variant="gold" size="lg">
              Schedule a Consultation
            </Button>
            <Button to="/services" variant="outlineDark" size="lg">
              Explore Our Services
            </Button>
          </div>
        </Container>
      </div>

      <Container className="relative grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <BrandLogo withName onDark size="md" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            {SITE.tagline} Trusted immigration consulting for families,
            professionals, and individuals navigating U.S. pathways.
          </p>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Services
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <Link to="/services#family-immigration" className="hover:text-white">
                Family Immigration
              </Link>
            </li>
            <li>
              <Link to="/services#green-card" className="hover:text-white">
                Green Cards
              </Link>
            </li>
            <li>
              <Link to="/services#citizenship" className="hover:text-white">
                Citizenship
              </Link>
            </li>
            <li>
              <Link to="/services#visa-consultation" className="hover:text-white">
                Visa Consultation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.phoneHref} className="hover:text-white">
                {SITE.phone}
              </a>
            </li>
            {SITE.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Professional immigration consulting. Not a law firm.</p>
        </Container>
      </div>
    </footer>
  );
}

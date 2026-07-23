import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Seo } from "@/components/seo/Seo";
import { SITE } from "@/data/site";

export function PortalLoginPage() {
  return (
    <>
      <Seo
        title="Client Portal Login"
        description="Existing NovaGate Immigration clients can access their secure client portal to review case updates and documents."
        path="/portal-login"
      />

      <section className="relative flex min-h-[85dvh] items-center overflow-hidden bg-surface-navy py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-[0.06]" />
        <Container className="relative max-w-2xl">
          <Reveal>
            <div className="border border-white/15 bg-white/[0.04] px-8 py-12 text-center backdrop-blur-sm sm:px-12">
              <div className="flex justify-center">
                <BrandLogo withName onDark size="md" />
              </div>
              <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
                Client portal
              </p>
              <h1 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl text-balance">
                Secure access for existing clients
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                Review case information, timelines, and documents through the
                NovaGate Immigration client portal.
              </p>
              <p className="mt-4 text-sm text-white/55">
                Live portal:{" "}
                <span className="font-semibold text-white/85">
                  {SITE.portalProductionHint}
                </span>
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href={SITE.portalProductionHint} variant="gold" size="lg">
                  Continue to Portal
                </Button>
                <Button to="/contact" variant="outlineDark" size="lg">
                  Need an invite?
                </Button>
              </div>
              <p className="mt-7 text-xs text-white/45">
                New to NovaGate?{" "}
                <a className="font-semibold text-gold-soft hover:text-white" href="/contact">
                  Schedule a consultation
                </a>
                . Portal access is provided by invitation.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

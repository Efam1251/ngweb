import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export function CtaBand({
  title = "Begin with a private consultation",
  description = "Share your goals with NovaGate Immigration. We will follow up to arrange a focused conversation and outline practical next steps.",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(184,144,58,0.2),transparent_55%)]" />
      </div>

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-soft">
              NovaGate Immigration
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl text-balance">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/contact" variant="gold" size="lg">
                Schedule a Consultation
              </Button>
              <Button href={`mailto:${SITE.email}`} variant="outlineDark" size="lg">
                Email {SITE.email}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

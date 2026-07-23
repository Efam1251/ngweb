import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { WHY_POINTS } from "@/data/content";

export function WhyChoose() {
  return (
    <section className="bg-surface-navy py-24 text-white sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Why clients choose us"
            brand
            title="Premium attention to the details that decide outcomes"
            description="Immigration decisions affect families, careers, and futures. We combine disciplined preparation with approachable communication so you never feel left in the dark."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {WHY_POINTS.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 80}>
              <article className="group h-full border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:border-gold/40 hover:bg-white/[0.07] sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center border border-gold/40 text-gold-soft">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

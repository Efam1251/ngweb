import { CtaBand } from "@/components/home/CtaBand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Seo } from "@/components/seo/Seo";
import { TEAM, VALUES } from "@/data/content";
import { SITE } from "@/data/site";

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about NovaGate Immigration—our mission, values, and the professional team helping clients navigate visas, residency, and citizenship with clarity."
        path="/about"
      />

      <PageHero
        eyebrow="About the firm"
        title="Built to bring clarity to immigration journeys"
        description={`${SITE.name} was founded on a simple belief: people deserve thoughtful guidance when the stakes are high and the process feels overwhelming.`}
      />

      <section className="bg-surface-soft py-24 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionHeading
              eyebrow="Our story"
              brand
              title="From complexity to a plan you can follow"
              description="Clients often arrive with unanswered questions, incomplete paperwork, or years of uncertainty. We start by listening—then translate goals into a structured evaluation and preparation plan."
            />
            <p className="mt-5 leading-relaxed text-muted">
              Our consulting approach emphasizes honesty, organization, and
              education. You should understand not only the next form to file,
              but the reasoning behind each recommendation.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-6" delayMs={100}>
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-full w-full border border-gold/35" />
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
                alt="Professional consultation handshake"
                className="relative aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-line bg-pearl py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Mission & values"
              title="What guides every client engagement"
              description="These principles shape how NovaGate Immigration advises, prepares, and communicates."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delayMs={index * 70}>
                <article className="h-full border border-line bg-white p-7 transition hover:border-navy/20 sm:p-8">
                  <div className="flex h-10 w-10 items-center justify-center border border-gold/50 text-accent">
                    <Icon name="check" className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {value.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why clients trust us"
              title="Professionalism without intimidation"
              description="Immigration decisions affect families, careers, and futures. We combine disciplined preparation with approachable communication so clients never feel left in the dark."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              "Transparent recommendations",
              "Organized document support",
              "Responsive case follow-up",
            ].map((item, index) => (
              <Reveal key={item} delayMs={index * 60}>
                <div className="border-l-2 border-gold bg-white px-5 py-5 text-sm font-semibold text-navy shadow-[0_12px_30px_rgba(10,26,47,0.04)]">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-pearl py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our team"
              brand
              title="Experienced advisors, personal attention"
            />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {TEAM.map((member, index) => (
              <Reveal key={member.name} delayMs={index * 80}>
                <article className="group">
                  <div className="overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {member.bio}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Let’s talk about your goals" />
    </>
  );
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Seo } from "@/components/seo/Seo";
import { CtaBand } from "@/components/home/CtaBand";
import { SERVICES } from "@/data/services";

export function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <>
      <Seo
        title="Immigration Services"
        description="Explore NovaGate Immigration services including family immigration, green card assistance, citizenship applications, visa consultation, and document preparation."
        path="/services"
      />

      <PageHero
        eyebrow="Services"
        title="Immigration consulting tailored to your pathway"
        description="From family petitions to citizenship preparation, each NovaGate Immigration service is designed to bring structure, clarity, and careful follow-through."
      />

      <section className="bg-surface-soft py-16 sm:py-20">
        <Container className="space-y-24">
          {SERVICES.map((service, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-32 grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
              >
                <Reveal
                  className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}
                  delayMs={40}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="aspect-[16/11] w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent px-5 py-4">
                      <p className="font-display text-2xl font-semibold text-white">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal
                  className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}
                  delayMs={100}
                >
                  <SectionHeading
                    eyebrow={`Service 0${index + 1}`}
                    title={service.title}
                    description={service.description}
                  />
                  <div className="mt-7">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                      What you receive
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-3">
                          <Icon
                            name="check"
                            className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-7 border-l-2 border-gold/60 bg-white/80 px-4 py-3 text-sm leading-relaxed text-navy/85">
                    <span className="font-semibold text-navy">Who it is for: </span>
                    {service.whoFor}
                  </p>
                  <Button to="/contact" variant="gold" className="mt-8">
                    Schedule a Consultation
                    <Icon name="arrow" className="h-4 w-4" />
                  </Button>
                </Reveal>
              </article>
            );
          })}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

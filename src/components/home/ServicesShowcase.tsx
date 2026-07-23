import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { SERVICES } from "@/data/services";

export function ServicesShowcase() {
  const featured = SERVICES.slice(0, 6);

  return (
    <section className="border-y border-line bg-pearl py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Practice areas"
              brand
              title="Immigration services designed for clarity and results"
              description="Explore the consulting pathways families and professionals trust us to guide—each delivered with disciplined preparation and transparent communication."
            />
            <Button to="/services" variant="secondary" className="shrink-0 self-start lg:self-auto">
              View all services
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((service, index) => (
            <Reveal key={service.id} delayMs={index * 70}>
              <Link
                to={`/services#${service.id}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-line bg-white transition duration-500 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_24px_50px_rgba(10,26,47,0.1)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-display text-xl font-semibold text-white">
                    {service.title}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:gap-3">
                    Learn more
                    <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

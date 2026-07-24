import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { SERVICES } from "@/data/services";
import { useI18n } from "@/i18n";

export function ServicesShowcase() {
  const { t, pathFor, messages } = useI18n();
  const featured = SERVICES.slice(0, 6);

  return (
    <section className="relative border-y border-line bg-pearl py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-40" />
      <Container className="relative">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={t("servicesHome.eyebrow")}
              brand
              title={t("servicesHome.title")}
              description={t("servicesHome.description")}
            />
            <Button to={pathFor("services")} variant="secondary" className="shrink-0 self-start lg:self-auto">
              {t("common.viewAllServices")}
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((service, index) => {
            const copy = messages.services[service.id];
            return (
              <Reveal key={service.id} delayMs={index * 70}>
                <Link
                  to={`${pathFor("services")}#${service.id}`}
                  className="group relative flex h-full flex-col overflow-hidden border border-line bg-white transition duration-500 hover:-translate-y-1.5 hover:border-navy/25 hover:shadow-[0_28px_55px_rgba(10,26,47,0.12)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt={copy.imageAlt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
                    <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-gold transition duration-500 group-hover:scale-y-100" />
                    <span className="absolute bottom-4 left-5 right-5 font-display text-xl font-semibold text-white sm:text-[1.35rem]">
                      {copy.title}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="flex-1 text-sm leading-relaxed text-muted">
                      {copy.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:gap-3 group-hover:text-navy">
                      {t("common.learnMore")}
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

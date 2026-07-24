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
import { useI18n } from "@/i18n";

export function ServicesPage() {
  const location = useLocation();
  const { t, pathFor, messages } = useI18n();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  return (
    <>
      <Seo
        title={t("meta.servicesTitle")}
        description={t("meta.servicesDescription")}
        path="/services"
      />

      <PageHero
        eyebrow={t("servicesPage.eyebrow")}
        title={t("servicesPage.title")}
        description={t("servicesPage.description")}
      />

      <section className="bg-surface-soft py-16 sm:py-20">
        <Container className="space-y-24">
          {SERVICES.map((service, index) => {
            const reverse = index % 2 === 1;
            const copy = messages.services[service.id];
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
                      alt={copy.imageAlt}
                      className="aspect-[16/11] w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent px-5 py-4">
                      <p className="font-display text-2xl font-semibold text-white">
                        {copy.title}
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal
                  className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}
                  delayMs={100}
                >
                  <SectionHeading
                    eyebrow={`${t("common.service")} 0${index + 1}`}
                    title={copy.title}
                    description={copy.description}
                  />
                  <div className="mt-7">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                      {t("common.whatYouReceive")}
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
                      {copy.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-3">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-7 border-l-2 border-gold/60 bg-white/80 px-4 py-3 text-sm leading-relaxed text-navy/85">
                    <span className="font-semibold text-navy">{t("common.whoFor")} </span>
                    {copy.whoFor}
                  </p>
                  <Button to={pathFor("contact")} variant="gold" className="mt-8">
                    {t("nav.schedule")}
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

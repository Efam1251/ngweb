import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { Seo } from "@/components/seo/Seo";
import { CtaBand } from "@/components/home/CtaBand";
import { PROCESS_STEP_IDS } from "@/data/content";
import { useI18n } from "@/i18n";

export function ProcessPage() {
  const { t, pathFor } = useI18n();

  return (
    <>
      <Seo
        title={t("meta.processTitle")}
        description={t("meta.processDescription")}
        path="/process"
      />

      <PageHero
        eyebrow={t("processPage.eyebrow")}
        title={t("processPage.title")}
        description={t("processPage.description")}
      />

      <section className="bg-pearl py-24 sm:py-28">
        <Container>
          <div className="relative">
            <div className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-line sm:left-1/2 sm:-translate-x-px" />
            <ol className="space-y-12">
              {PROCESS_STEP_IDS.map((step, index) => {
                const left = index % 2 === 0;
                return (
                  <li key={step} className="relative grid gap-6 sm:grid-cols-2">
                    <Reveal
                      className={
                        left ? "sm:pr-16 sm:text-right" : "sm:col-start-2 sm:pl-16"
                      }
                      delayMs={index * 60}
                    >
                      <div className="border border-line bg-white p-7 shadow-[0_16px_40px_rgba(10,26,47,0.05)] sm:p-9">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                          {t("common.step")} {String(step).padStart(2, "0")}
                        </p>
                        <h2 className="mt-3 font-display text-2xl font-semibold text-navy sm:text-3xl">
                          {t(`process.s${step}Title`)}
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                          {t(`process.s${step}Detail`)}
                        </p>
                      </div>
                    </Reveal>
                    <div className="absolute left-[1.15rem] top-9 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 border-gold bg-pearl font-display text-xs font-bold text-navy sm:left-1/2">
                      {step}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <Reveal>
            <div className="mt-20 border border-line bg-mist px-8 py-12 text-center sm:px-12">
              <SectionHeading
                align="center"
                className="mx-auto"
                brand
                title={t("processPage.beginTitle")}
                description={t("processPage.beginDescription")}
              />
              <Button to={pathFor("contact")} variant="gold" size="lg" className="mt-8">
                {t("nav.schedule")}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { PROCESS_STEP_IDS } from "@/data/content";
import { useI18n } from "@/i18n";

export function ProcessPreview() {
  const { t, pathFor } = useI18n();

  return (
    <section className="bg-mist py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={t("processHome.eyebrow")}
              title={t("processHome.title")}
              description={t("processHome.description")}
            />
            <Button to={pathFor("process")} variant="secondary" className="shrink-0 self-start">
              {t("common.seeFullProcess")}
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-4 lg:grid-cols-5">
          {PROCESS_STEP_IDS.map((step, index) => (
            <Reveal key={step} delayMs={index * 70}>
              <li className="group relative flex h-full flex-col border border-line bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_20px_40px_rgba(10,26,47,0.08)]">
                <span className="font-display text-4xl font-semibold text-gold/75 transition group-hover:text-gold">
                  {String(step).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-navy">
                  {t(`process.s${step}Title`)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {t(`process.s${step}Detail`)}
                </p>
                {index < PROCESS_STEP_IDS.length - 1 ? (
                  <span className="pointer-events-none absolute -right-2.5 top-10 hidden h-px w-5 bg-gold/50 lg:block" />
                ) : null}
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

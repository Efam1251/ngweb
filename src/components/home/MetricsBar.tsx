import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { METRIC_IDS } from "@/data/content";
import { useI18n } from "@/i18n";

export function MetricsBar() {
  const { t } = useI18n();

  return (
    <section className="relative z-10 -mt-10 sm:-mt-14">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line/80 bg-line/80 shadow-[0_20px_50px_rgba(10,26,47,0.12)] md:grid-cols-4">
            {METRIC_IDS.map((id) => (
              <div
                key={id}
                className="bg-pearl px-5 py-7 text-center sm:px-6 sm:py-8"
              >
                <p className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                  {t(`metrics.m${id}Value`)}
                </p>
                <p className="mt-2 text-xs leading-snug text-muted sm:text-sm">
                  {t(`metrics.m${id}Label`)}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

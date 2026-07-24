import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { METRIC_IDS } from "@/data/content";
import { useI18n } from "@/i18n";

export function MetricsBar() {
  const { t } = useI18n();

  return (
    <section id="home-metrics" className="relative z-10 -mt-12 scroll-mt-28 sm:-mt-16">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 overflow-hidden rounded-sm border border-white/20 bg-white shadow-[0_28px_60px_rgba(10,26,47,0.16)] md:grid-cols-4">
            {METRIC_IDS.map((id, index) => (
              <div
                key={id}
                className={`group bg-pearl px-5 py-8 text-center transition duration-500 hover:bg-white sm:px-6 sm:py-10 ${
                  index > 0 ? "border-l border-line/70" : ""
                } ${index === 2 ? "border-t border-line/70 md:border-t-0" : ""} ${
                  index === 3 ? "border-t border-line/70 md:border-t-0" : ""
                }`}
              >
                <p className="font-display text-3xl font-semibold tracking-tight text-navy transition duration-500 group-hover:text-accent sm:text-4xl md:text-[2.75rem]">
                  {t(`metrics.m${id}Value`)}
                </p>
                <p className="mx-auto mt-2 max-w-[12rem] text-xs leading-snug text-muted sm:text-sm">
                  {t(`metrics.m${id}Label`)}
                </p>
                <div className="mx-auto mt-4 h-px w-8 origin-center scale-x-0 bg-gold transition duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

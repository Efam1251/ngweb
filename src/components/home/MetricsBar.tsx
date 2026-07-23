import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { METRICS } from "@/data/content";

export function MetricsBar() {
  return (
    <section className="relative z-10 -mt-10 sm:-mt-14">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line/80 bg-line/80 shadow-[0_20px_50px_rgba(10,26,47,0.12)] md:grid-cols-4">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="bg-pearl px-5 py-7 text-center sm:px-6 sm:py-8"
              >
                <p className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs leading-snug text-muted sm:text-sm">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

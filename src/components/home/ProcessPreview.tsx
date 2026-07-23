import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { PROCESS_STEPS } from "@/data/content";

export function ProcessPreview() {
  return (
    <section className="bg-mist py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Our process"
              title="A structured path from first conversation to follow-up"
              description="Immigration feels complicated when the path is vague. Our five-step process keeps every stage visible, organized, and purposeful."
            />
            <Button to="/process" variant="secondary" className="shrink-0 self-start">
              See the full process
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-4 lg:grid-cols-5">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.step} delayMs={index * 70}>
              <li className="relative flex h-full flex-col border border-line bg-white p-6">
                <span className="font-display text-4xl font-semibold text-gold/80">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {step.detail}
                </p>
                {index < PROCESS_STEPS.length - 1 ? (
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

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { TESTIMONIAL_IDS } from "@/data/content";
import { useI18n } from "@/i18n";

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="border-y border-line bg-pearl py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            className="mx-auto"
            eyebrow={t("testimonials.eyebrow")}
            brand
            title={t("testimonials.title")}
            description={t("testimonials.description")}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIAL_IDS.map((id, index) => (
            <Reveal key={id} delayMs={index * 90}>
              <blockquote className="flex h-full flex-col border border-line bg-white p-7 sm:p-8">
                <Icon name="star" className="h-5 w-5 text-gold" />
                <p className="mt-5 flex-1 font-display text-xl leading-snug text-navy sm:text-[1.35rem]">
                  “{t(`testimonials.t${id}Quote`)}”
                </p>
                <footer className="mt-8 border-t border-line pt-5">
                  <p className="text-sm font-semibold text-navy">
                    {t(`testimonials.t${id}Name`)}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                    {t(`testimonials.t${id}Context`)}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

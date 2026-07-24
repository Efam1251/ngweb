import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { WHY_POINT_IDS } from "@/data/content";
import { useI18n } from "@/i18n";

export function WhyChoose() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-surface-navy py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-grid-fade" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow={t("why.eyebrow")}
            brand
            title={t("why.title")}
            description={t("why.description")}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {WHY_POINT_IDS.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 80}>
              <article className="group relative h-full overflow-hidden border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:border-gold/45 hover:bg-white/[0.07] sm:p-8">
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold via-gold/40 to-transparent transition duration-500 group-hover:scale-x-100" />
                <div className="flex h-12 w-12 items-center justify-center border border-gold/40 text-gold-soft transition duration-500 group-hover:border-gold group-hover:bg-gold/10">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                  {t(`why.w${item.id}Title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
                  {t(`why.w${item.id}Text`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

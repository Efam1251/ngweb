import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { WHY_POINT_IDS } from "@/data/content";
import { useI18n } from "@/i18n";

export function WhyChoose() {
  const { t } = useI18n();

  return (
    <section className="bg-surface-navy py-24 text-white sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow={t("why.eyebrow")}
            brand
            title={t("why.title")}
            description={t("why.description")}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {WHY_POINT_IDS.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 80}>
              <article className="group h-full border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:border-gold/40 hover:bg-white/[0.07] sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center border border-gold/40 text-gold-soft">
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

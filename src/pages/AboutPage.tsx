import { CtaBand } from "@/components/home/CtaBand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Seo } from "@/components/seo/Seo";
import { TEAM, VALUE_IDS } from "@/data/content";
import { useI18n } from "@/i18n";

export function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      <Seo
        title={t("meta.aboutTitle")}
        description={t("meta.aboutDescription")}
        path="/about"
      />

      <PageHero
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        description={t("about.heroDescription")}
      />

      <section className="bg-surface-soft py-24 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionHeading
              eyebrow={t("about.storyEyebrow")}
              brand
              title={t("about.storyTitle")}
              description={t("about.storyDescription")}
            />
            <p className="mt-5 leading-relaxed text-muted">{t("about.storyBody")}</p>
          </Reveal>
          <Reveal className="lg:col-span-6" delayMs={100}>
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-full w-full border border-gold/35" />
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
                alt={t("about.imageAlt")}
                className="relative aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-line bg-pearl py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={t("about.valuesEyebrow")}
              title={t("about.valuesTitle")}
              description={t("about.valuesDescription")}
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {VALUE_IDS.map((id, index) => (
              <Reveal key={id} delayMs={index * 70}>
                <article className="h-full border border-line bg-white p-7 transition hover:border-navy/20 sm:p-8">
                  <div className="flex h-10 w-10 items-center justify-center border border-gold/50 text-accent">
                    <Icon name="check" className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
                    {t(`about.v${id}Title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {t(`about.v${id}Text`)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={t("about.trustEyebrow")}
              title={t("about.trustTitle")}
              description={t("about.trustDescription")}
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((id, index) => (
              <Reveal key={id} delayMs={index * 60}>
                <div className="border-l-2 border-gold bg-white px-5 py-5 text-sm font-semibold text-navy shadow-[0_12px_30px_rgba(10,26,47,0.04)]">
                  {t(`about.trust${id}`)}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-pearl py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={t("about.teamEyebrow")}
              brand
              title={t("about.teamTitle")}
            />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {TEAM.map((member, index) => (
              <Reveal key={member.id} delayMs={index * 80}>
                <article className="group">
                  <div className="overflow-hidden">
                    <img
                      src={member.image}
                      alt={t(`about.member${member.id}Name`)}
                      className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
                    {t(`about.member${member.id}Name`)}
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                    {t(`about.member${member.id}Role`)}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {t(`about.member${member.id}Bio`)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title={t("about.ctaTitle")} />
    </>
  );
}

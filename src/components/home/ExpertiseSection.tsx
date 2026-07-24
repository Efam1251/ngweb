import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/data/site";
import { useI18n } from "@/i18n";

export function ExpertiseSection() {
  const { t, pathFor } = useI18n();
  const points = [
    { icon: "shield" as const, label: t("expertise.p1") },
    { icon: "document" as const, label: t("expertise.p2") },
    { icon: "clock" as const, label: t("expertise.p3") },
    { icon: "globe" as const, label: t("expertise.p4") },
  ];

  return (
    <section className="bg-surface-soft py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="group relative">
            <div className="absolute -inset-3 rounded-sm border border-gold/35 transition duration-700 group-hover:border-gold/60" />
            <div className="absolute -right-4 -top-4 hidden h-24 w-24 border border-gold/25 sm:block" />
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80"
                alt={t("expertise.imageAlt")}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-7">
                <div className="mb-3 h-px w-12 bg-gold" />
                <p className="font-display text-2xl font-semibold tracking-tight sm:text-[1.65rem]">
                  {SITE.name}
                </p>
                <p className="mt-1.5 text-sm text-white/75">
                  {t("expertise.captionLocation")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7 lg:pl-4" delayMs={100}>
          <SectionHeading
            eyebrow={t("expertise.eyebrow")}
            brand
            title={t("expertise.title")}
            description={t("expertise.description")}
          />
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-[1.05rem]">
            {t("expertise.body")}
          </p>

          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {points.map((item) => (
              <li
                key={item.label}
                className="group/item flex items-start gap-3 border border-line/80 bg-white/80 px-4 py-3.5 transition duration-400 hover:border-gold/40 hover:bg-white"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-gold/40 text-accent transition group-hover/item:border-gold group-hover/item:bg-gold/10">
                  <Icon name={item.icon} className="h-4 w-4" />
                </span>
                <span className="pt-1 text-sm font-semibold text-navy">{item.label}</span>
              </li>
            ))}
          </ul>

          <Button to={pathFor("about")} variant="secondary" className="mt-10">
            {t("common.discoverStory")}
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

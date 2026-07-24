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
    <section className="bg-surface-soft py-24 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 rounded-sm border border-gold/30" />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80"
              alt={t("expertise.imageAlt")}
              className="relative aspect-[4/5] w-full rounded-sm object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-sm bg-navy/95 px-5 py-4 text-white backdrop-blur-sm">
              <p className="font-display text-xl font-semibold">{SITE.name}</p>
              <p className="mt-1 text-sm text-white/70">
                {t("expertise.captionLocation")}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7 lg:pl-6" delayMs={100}>
          <SectionHeading
            eyebrow={t("expertise.eyebrow")}
            brand
            title={t("expertise.title")}
            description={t("expertise.description")}
          />
          <p className="mt-5 text-base leading-relaxed text-muted">
            {t("expertise.body")}
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-3 border-l-2 border-gold/70 bg-white/70 px-4 py-3"
              >
                <Icon name={item.icon} className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-semibold text-navy">{item.label}</span>
              </li>
            ))}
          </ul>

          <Button to={pathFor("about")} variant="secondary" className="mt-9">
            {t("common.discoverStory")}
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

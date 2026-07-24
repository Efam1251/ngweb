import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Seo } from "@/components/seo/Seo";
import { CtaBand } from "@/components/home/CtaBand";
import { ARTICLES, FAQ_IDS } from "@/data/content";
import { useI18n } from "@/i18n";

function formatDate(iso: string, locale: string) {
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
  const date = new Date(Number(y), Number(m) - 1, Number(d));
  return date.toLocaleDateString(locale === "es" ? "es-US" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function ResourcesPage() {
  const { t, pathFor, locale } = useI18n();

  return (
    <>
      <Seo
        title={t("meta.resourcesTitle")}
        description={t("meta.resourcesDescription")}
        path="/resources"
      />

      <PageHero
        eyebrow={t("resources.eyebrow")}
        title={t("resources.title")}
        description={t("resources.description")}
      />

      <section className="bg-surface-soft py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={t("resources.articlesEyebrow")}
              brand
              title={t("resources.articlesTitle")}
              description={t("resources.articlesDescription")}
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ARTICLES.map((article, index) => (
              <Reveal key={article.slug} delayMs={index * 70}>
                <article className="group flex h-full flex-col border border-line bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_20px_45px_rgba(10,26,47,0.08)]">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    {t(`resources.a${article.id}Category`)}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-navy text-balance">
                    {t(`resources.a${article.id}Title`)}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {t(`resources.a${article.id}Excerpt`)}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4 text-xs text-muted">
                    <span>{formatDate(article.date, locale)}</span>
                    <span>
                      {article.readMinutes} {t("common.minRead")}
                    </span>
                  </div>
                  <Link
                    to={pathFor("contact")}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:gap-3"
                  >
                    {t("common.askAboutTopic")}
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-pearl py-24 sm:py-28">
        <Container narrow>
          <Reveal>
            <SectionHeading
              eyebrow={t("resources.faqEyebrow")}
              title={t("resources.faqTitle")}
              description={t("resources.faqDescription")}
            />
          </Reveal>
          <div className="mt-10 space-y-3">
            {FAQ_IDS.map((id, index) => (
              <Reveal key={id} delayMs={index * 50}>
                <details className="group border border-line bg-white px-5 py-4 open:border-navy/20">
                  <summary className="cursor-pointer list-none font-semibold text-navy marker:content-none">
                    <span className="flex items-start justify-between gap-4">
                      {t(`resources.f${id}q`)}
                      <span className="text-gold transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {t(`resources.f${id}a`)}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title={t("resources.ctaTitle")}
        description={t("resources.ctaDescription")}
      />
    </>
  );
}

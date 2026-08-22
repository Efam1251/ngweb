import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { getLatestBulletin } from "@/data/news";
import { formatIsoDate } from "@/lib/visaBulletin";
import { useI18n } from "@/i18n";

export function NewsPreview() {
  const { t, pathFor, locale } = useI18n();
  const latest = getLatestBulletin();

  if (!latest) return null;

  return (
    <section className="border-y border-line bg-navy-deep py-16 text-white sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-soft">
                {t("news.homeEyebrow")}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {t("news.homeTitle")}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                {t("news.homeDescription")}
              </p>
            </div>
            <Button
              to={pathFor("visa-bulletin")}
              variant="outlineDark"
              className="shrink-0 self-start sm:self-auto"
            >
              {t("news.viewAll")}
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <article className="mt-10 border border-white/15 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold-soft">
              {t("news.kind.visa-bulletin")} · {formatIsoDate(latest.date, locale)}
            </p>
            <h3 className="mt-3 max-w-3xl font-display text-2xl font-semibold text-balance sm:text-3xl">
              {t(`newsPosts.${latest.copyKey}.title`)}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/72 sm:text-base">
              {t(`newsPosts.${latest.copyKey}.excerpt`)}
            </p>
            <Link
              to={pathFor("visa-bulletin")}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft hover:text-gold"
            >
              {t("news.readUpdate")}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}

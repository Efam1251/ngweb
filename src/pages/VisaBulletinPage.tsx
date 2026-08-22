import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Seo } from "@/components/seo/Seo";
import { CtaBand } from "@/components/home/CtaBand";
import { VisaBulletinReport } from "@/components/news/VisaBulletinReport";
import { getLatestBulletin } from "@/data/news";
import { formatIsoDate } from "@/lib/visaBulletin";
import { useI18n } from "@/i18n";

export function VisaBulletinPage() {
  const { t, locale } = useI18n();
  const bulletin = getLatestBulletin();
  const excerpt = bulletin
    ? t(`newsPosts.${bulletin.copyKey}.excerpt`)
    : t("meta.newsDescription");

  return (
    <>
      <Seo
        title={t("meta.newsTitle")}
        description={excerpt}
        path="/visa-bulletin"
      />

      <PageHero
        eyebrow={t("news.eyebrow")}
        title={t("news.title")}
        description={excerpt}
      >
        {bulletin ? (
          <p className="text-sm text-white/70">{formatIsoDate(bulletin.date, locale)}</p>
        ) : null}
      </PageHero>

      <section className="bg-surface-soft py-14 sm:py-16">
        <Container>
          {bulletin ? (
            <>
              <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                {t(`newsPosts.${bulletin.copyKey}.intro`)}
              </p>
              <div className="mt-10">
                <VisaBulletinReport post={bulletin} />
              </div>
            </>
          ) : (
            <p className="text-muted">{t("news.description")}</p>
          )}
        </Container>
      </section>

      <CtaBand
        title={t("news.ctaTitle")}
        description={t("news.ctaDescription")}
      />
    </>
  );
}

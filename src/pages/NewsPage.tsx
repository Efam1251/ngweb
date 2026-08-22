import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Seo } from "@/components/seo/Seo";
import { CtaBand } from "@/components/home/CtaBand";
import { listNewsNewestFirst } from "@/data/news";
import { formatIsoDate } from "@/lib/visaBulletin";
import { useI18n } from "@/i18n";

export function NewsPage() {
  const { t, pathFor, locale } = useI18n();
  const posts = listNewsNewestFirst();

  return (
    <>
      <Seo
        title={t("meta.newsTitle")}
        description={t("meta.newsDescription")}
        path="/news"
      />

      <PageHero
        eyebrow={t("news.eyebrow")}
        title={t("news.title")}
        description={t("news.description")}
      />

      <section className="bg-surface-soft py-24 sm:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delayMs={index * 70}>
                <article className="flex h-full flex-col border border-line bg-white p-8">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    {t(`news.kind.${post.kind}`)}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-navy text-balance">
                    {t(`newsPosts.${post.copyKey}.title`)}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                    {t(`newsPosts.${post.copyKey}.excerpt`)}
                  </p>
                  <p className="mt-6 text-xs text-slate">{formatIsoDate(post.date, locale)}</p>
                  <Link
                    to={pathFor(`news/${post.slug}`)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                  >
                    {t("news.readUpdate")}
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title={t("news.ctaTitle")}
        description={t("news.ctaDescription")}
      />
    </>
  );
}

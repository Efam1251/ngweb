import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { listNewsNewestFirst } from "@/data/news";
import { formatIsoDate } from "@/lib/visaBulletin";
import { useI18n } from "@/i18n";

export function NewsPreview() {
  const { t, pathFor, locale } = useI18n();
  const posts = listNewsNewestFirst().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="bg-surface-soft py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={t("news.homeEyebrow")}
              brand
              title={t("news.homeTitle")}
              description={t("news.homeDescription")}
            />
            <Button to={pathFor("news")} variant="secondary" className="shrink-0 self-start lg:self-auto">
              {t("news.viewAll")}
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delayMs={index * 70}>
              <article className="flex h-full flex-col border border-line bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_20px_45px_rgba(10,26,47,0.08)]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  {t(`news.kind.${post.kind}`)}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-navy text-balance">
                  {t(`newsPosts.${post.copyKey}.title`)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {t(`newsPosts.${post.copyKey}.excerpt`)}
                </p>
                <p className="mt-5 text-xs text-slate">{formatIsoDate(post.date, locale)}</p>
                <Link
                  to={pathFor(`news/${post.slug}`)}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent"
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
  );
}

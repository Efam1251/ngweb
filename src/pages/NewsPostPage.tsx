import { Link, Navigate, useParams } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Seo } from "@/components/seo/Seo";
import { CtaBand } from "@/components/home/CtaBand";
import { VisaBulletinReport } from "@/components/news/VisaBulletinReport";
import { getNewsBySlug } from "@/data/news";
import { formatIsoDate } from "@/lib/visaBulletin";
import { useI18n } from "@/i18n";

export function NewsPostPage() {
  const { slug } = useParams();
  const { t, pathFor, locale } = useI18n();
  const post = getNewsBySlug(slug);

  if (!post) {
    return <Navigate to={pathFor("news")} replace />;
  }

  const title = t(`newsPosts.${post.copyKey}.title`);
  const excerpt = t(`newsPosts.${post.copyKey}.excerpt`);
  const intro = t(`newsPosts.${post.copyKey}.intro`);

  return (
    <>
      <Seo title={title} description={excerpt} path={`/news/${post.slug}`} />

      <PageHero
        eyebrow={t(`news.kind.${post.kind}`)}
        title={title}
        description={excerpt}
      >
        <p className="text-sm text-white/70">{formatIsoDate(post.date, locale)}</p>
      </PageHero>

      <section className="bg-surface-soft py-16 sm:py-20">
        <Container>
          <Link
            to={pathFor("news")}
            className="text-sm font-semibold text-accent hover:underline"
          >
            ← {t("news.backToNews")}
          </Link>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {intro}
          </p>
          <div className="mt-12">
            {post.kind === "visa-bulletin" ? <VisaBulletinReport post={post} /> : null}
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

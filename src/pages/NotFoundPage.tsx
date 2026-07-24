import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Seo } from "@/components/seo/Seo";
import { SITE } from "@/data/site";
import { useI18n } from "@/i18n";

export function NotFoundPage() {
  const { t, pathFor } = useI18n();

  return (
    <>
      <Seo
        title={t("meta.notFoundTitle")}
        description={t("meta.notFoundDescription")}
        path="/404"
      />
      <section className="flex min-h-[75dvh] items-center bg-surface-soft py-28">
        <Container className="max-w-xl text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent">
            {t("notFound.code")}
          </p>
          <p className="mt-4 font-display text-2xl font-semibold text-navy">
            {SITE.name}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
            {t("notFound.title")}
          </h1>
          <p className="mt-4 text-muted">{t("notFound.body")}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to={pathFor()} variant="gold">
              {t("notFound.home")}
            </Button>
            <Button to={pathFor("contact")} variant="secondary">
              {t("notFound.contact")}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

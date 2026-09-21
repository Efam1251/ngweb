import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Seo } from "@/components/seo/Seo";
import { getLegalDocument, type LegalKind } from "@/data/legal";
import { useI18n } from "@/i18n";

type LegalPageProps = {
  kind: LegalKind;
};

export function LegalPage({ kind }: LegalPageProps) {
  const { t, locale, pathFor } = useI18n();
  const doc = getLegalDocument(kind, locale);
  const otherKind = kind === "privacy" ? "terms" : "privacy";
  const otherPath = otherKind === "privacy" ? "privacy" : "terms";
  const otherLabel =
    otherKind === "privacy" ? t("legal.privacyPolicy") : t("legal.termsOfService");

  return (
    <>
      <Seo
        title={kind === "privacy" ? t("meta.privacyTitle") : t("meta.termsTitle")}
        description={
          kind === "privacy" ? t("meta.privacyDescription") : t("meta.termsDescription")
        }
        path={`/${kind}`}
      />

      <PageHero
        eyebrow={t("legal.eyebrow")}
        title={kind === "privacy" ? t("legal.privacyPolicy") : t("legal.termsOfService")}
        description={doc.intro}
      />

      <section className="bg-pearl py-16 sm:py-20">
        <Container>
          <article className="mx-auto w-full max-w-4xl">
            <p className="text-base leading-relaxed text-ink">
              {t("legal.versionLabel")} {doc.version}. {t("legal.updatedLabel")}{" "}
              {doc.lastUpdated}.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink">
              {t(otherKind === "privacy" ? "legal.relatedLeadPrivacy" : "legal.relatedLeadTerms")}{" "}
              <Link
                to={pathFor(otherPath)}
                className="font-semibold text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
              >
                {otherLabel}
              </Link>
              .
            </p>

            <nav
              className="mt-10 border border-line bg-white px-5 py-5 sm:px-6"
              aria-label={t("legal.contents")}
            >
              <p className="text-base font-semibold text-navy">{t("legal.contents")}</p>
              <ol className="mt-3 grid gap-2 sm:grid-cols-2">
                {doc.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-base leading-snug text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-12 space-y-12">
              {doc.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="font-display text-2xl font-semibold text-navy sm:text-[1.75rem]">
                    {section.title}
                  </h2>
                  {section.blocks.map((block, index) =>
                    block.type === "p" ? (
                      <p
                        key={`${section.id}-p-${index}`}
                        className="mt-4 text-base leading-7 text-ink"
                      >
                        {block.text}
                      </p>
                    ) : (
                      <ul
                        key={`${section.id}-ul-${index}`}
                        className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-ink"
                      >
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ),
                  )}
                </section>
              ))}
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}

export function PrivacyPage() {
  return <LegalPage kind="privacy" />;
}

export function TermsPage() {
  return <LegalPage kind="terms" />;
}

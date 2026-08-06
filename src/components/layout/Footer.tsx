import { Link } from "react-router-dom";
import { NAV_LINKS, SITE } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { useI18n } from "@/i18n";

export function Footer() {
  const { t, pathFor } = useI18n();

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="pointer-events-none absolute inset-0 bg-surface-navy opacity-80" />
      <div className="relative border-b border-white/10">
        <Container className="flex flex-col items-start justify-between gap-8 py-12 md:flex-row md:items-center">
          <div>
            <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("footer.ready")}
            </p>
            <p className="mt-2 max-w-md text-sm text-white/65 sm:text-base">
              {t("footer.readyBody")}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to={pathFor("contact")} variant="gold" size="lg">
              {t("nav.schedule")}
            </Button>
            <Button to={pathFor("case-update")} variant="outlineDark" size="lg">
              {t("footer.caseUpdate")}
            </Button>
            <Button to={pathFor("services")} variant="outlineDark" size="lg">
              {t("common.exploreServices")}
            </Button>
          </div>
        </Container>
      </div>

      <Container className="relative grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <BrandLogo withName onDark size="md" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            {t("site.tagline")} {t("site.blurb")}
          </p>
          <div className="mt-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
              {t("footer.follow")}
            </p>
            <SocialLinks onDark className="mt-3" />
          </div>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
            {t("footer.explore")}
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link to={pathFor(link.to)} className="transition hover:text-white">
                  {t(`nav.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
            {t("footer.services")}
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <Link to={`${pathFor("services")}#family-immigration`} className="hover:text-white">
                {t("footer.family")}
              </Link>
            </li>
            <li>
              <Link to={`${pathFor("services")}#green-card`} className="hover:text-white">
                {t("footer.greenCards")}
              </Link>
            </li>
            <li>
              <Link to={`${pathFor("services")}#citizenship`} className="hover:text-white">
                {t("footer.citizenship")}
              </Link>
            </li>
            <li>
              <Link to={`${pathFor("services")}#visa-consultation`} className="hover:text-white">
                {t("footer.visa")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
            {t("footer.contact")}
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.phoneHref} className="hover:text-white">
                {SITE.phone}
              </a>
            </li>
            <li>
              <Link to={pathFor("contact")} className="hover:text-white">
                {t("nav.schedule")}
              </Link>
            </li>
            <li>
              <Link to={pathFor("case-update")} className="hover:text-white">
                {t("footer.caseUpdate")}
              </Link>
            </li>
            {SITE.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {t("common.rightsReserved")}
          </p>
          <p>{t("common.notLawFirm")}</p>
        </Container>
      </div>
    </footer>
  );
}

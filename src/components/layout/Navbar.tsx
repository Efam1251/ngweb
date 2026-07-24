import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS, SITE } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { useI18n, LOCALES, type Locale } from "@/i18n";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, locale, pathFor, setLocale } = useI18n();
  const isHome = location.pathname === `/${locale}` || location.pathname === `/${locale}/`;

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled || open;

  const langBtn = (code: Locale) =>
    `rounded-sm px-2 py-1 text-[0.7rem] font-semibold tracking-[0.08em] uppercase transition ${
      locale === code
        ? solid
          ? "bg-navy text-white"
          : "bg-white text-navy"
        : solid
          ? "text-muted hover:text-navy"
          : "text-white/70 hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
        solid
          ? "border-b border-line/70 bg-pearl/95 shadow-[0_8px_30px_rgba(10,26,47,0.06)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-[5.25rem] items-center justify-between gap-4 lg:h-[5.75rem]">
        <Link to={pathFor()} className="flex min-w-0 items-center" aria-label={SITE.name}>
          <BrandLogo withName onDark={!solid} size="md" className="min-w-0" />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.key}
              to={pathFor(link.to)}
              end={link.to === ""}
              className={({ isActive }) =>
                `relative px-3.5 py-2 text-[0.8125rem] font-semibold tracking-[0.04em] uppercase transition ${
                  solid
                    ? isActive
                      ? "text-navy"
                      : "text-muted hover:text-navy"
                    : isActive
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t(`nav.${link.key}`)}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-px transition ${
                      isActive
                        ? solid
                          ? "bg-gold"
                          : "bg-gold-soft"
                        : "bg-transparent"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <div className="mr-1 flex items-center gap-0.5" role="group" aria-label={t("nav.language")}>
            {LOCALES.map((code) => (
              <button
                key={code}
                type="button"
                className={langBtn(code)}
                onClick={() => setLocale(code)}
                aria-pressed={locale === code}
              >
                {code === "en" ? "EN" : "ES"}
              </button>
            ))}
          </div>
          <Button to={pathFor("contact")} variant="gold" size="sm">
            {t("nav.schedule")}
          </Button>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-sm border lg:hidden ${
            solid ? "border-line text-navy" : "border-white/30 text-white"
          }`}
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 ${solid ? "bg-navy" : "bg-white"}`} />
            <span className={`block h-0.5 w-5 ${solid ? "bg-navy" : "bg-white"}`} />
            <span className={`block h-0.5 w-5 ${solid ? "bg-navy" : "bg-white"}`} />
          </div>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-line bg-pearl lg:hidden">
          <Container className="flex flex-col gap-1 py-5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.key}
                to={pathFor(link.to)}
                end={link.to === ""}
                className={({ isActive }) =>
                  `rounded-sm px-3 py-3 text-base font-semibold ${
                    isActive ? "bg-fog text-navy" : "text-muted"
                  }`
                }
              >
                {t(`nav.${link.key}`)}
              </NavLink>
            ))}
            <div className="mt-3 flex items-center gap-2 border-t border-line pt-4">
              {LOCALES.map((code) => (
                <button
                  key={code}
                  type="button"
                  className={`rounded-sm px-3 py-2 text-sm font-semibold ${
                    locale === code ? "bg-navy text-white" : "bg-fog text-navy"
                  }`}
                  onClick={() => setLocale(code)}
                >
                  {code === "en" ? t("nav.english") : t("nav.spanish")}
                </button>
              ))}
            </div>
            <div className="mt-2 flex flex-col gap-2.5">
              <Button to={pathFor("contact")} variant="gold">
                {t("nav.schedule")}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

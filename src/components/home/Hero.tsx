import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Icon } from "@/components/ui/Icon";
import { useI18n } from "@/i18n";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2400&q=80";

export function Hero() {
  const { t, pathFor } = useI18n();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-navy-deep">
      <img
        src={HERO_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover animate-[heroZoom_22s_ease-out_both]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,14,26,0.96)_0%,rgba(10,26,47,0.9)_34%,rgba(10,26,47,0.62)_62%,rgba(10,26,47,0.38)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_88%,rgba(184,144,58,0.22),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(31,95,122,0.18),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-grid-fade" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent" />

      <Container className="relative flex min-h-[100dvh] flex-col justify-end pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div className="max-w-3xl">
          <div className="animate-[fadeRise_900ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <BrandLogo withName onDark size="hero" stacked eyebrow={t("hero.brandLine")} />
          </div>

          <div className="mt-8 h-px w-24 origin-left animate-[ruleGrow_1.1s_cubic-bezier(0.22,1,0.36,1)_200ms_both] bg-gradient-to-r from-gold via-gold/80 to-transparent" />

          <h1 className="mt-8 max-w-2xl animate-[fadeRise_950ms_cubic-bezier(0.22,1,0.36,1)_180ms_both] font-display text-[1.7rem] font-semibold leading-[1.18] tracking-tight text-white/95 sm:text-4xl md:text-[2.65rem] text-balance">
            {t("hero.headline")}
          </h1>

          <p className="mt-5 max-w-xl animate-[fadeRise_950ms_cubic-bezier(0.22,1,0.36,1)_280ms_both] text-base leading-relaxed text-white/78 sm:text-lg">
            {t("hero.support")}
          </p>

          <div className="mt-10 flex animate-[fadeRise_950ms_cubic-bezier(0.22,1,0.36,1)_380ms_both] flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              to={pathFor("contact")}
              variant="gold"
              size="lg"
              className="min-w-[14rem] shadow-[0_12px_30px_rgba(184,144,58,0.28)] transition hover:-translate-y-0.5"
            >
              {t("nav.schedule")}
            </Button>
            <Button
              to={pathFor("services")}
              variant="outlineDark"
              size="lg"
              className="min-w-[14rem] transition hover:-translate-y-0.5"
            >
              {t("common.exploreServices")}
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <a
          href="#home-metrics"
          className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/55 transition hover:text-gold-soft sm:flex"
          aria-label="Scroll"
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
            Scroll
          </span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1.5 transition group-hover:border-gold/50">
            <span className="h-1.5 w-1 rounded-full bg-gold animate-[scrollDot_1.6s_ease-in-out_infinite]" />
          </span>
        </a>
      </Container>

      <style>{`
        @keyframes fadeRise {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroZoom {
          from { transform: scale(1.12); }
          to { transform: scale(1); }
        }
        @keyframes ruleGrow {
          from { opacity: 0; transform: scaleX(0.25); }
          to { opacity: 1; transform: scaleX(1); }
        }
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          70% { transform: translateY(10px); opacity: 0.2; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}

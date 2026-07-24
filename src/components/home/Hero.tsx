import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/brand/BrandLogo";
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
        className="absolute inset-0 h-full w-full object-cover animate-[heroZoom_20s_ease-out_both]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,14,26,0.94)_0%,rgba(10,26,47,0.88)_38%,rgba(10,26,47,0.55)_68%,rgba(10,26,47,0.35)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_85%,rgba(184,144,58,0.18),transparent_42%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy-deep to-transparent" />

      <Container className="relative flex min-h-[100dvh] flex-col justify-end pb-16 pt-32 sm:pb-24 sm:pt-36">
        <div className="max-w-3xl animate-[fadeRise_1s_cubic-bezier(0.22,1,0.36,1)_both]">
          <BrandLogo withName onDark size="xl" />

          <div className="mt-8 h-px w-20 bg-gradient-to-r from-gold to-transparent" />

          <h1 className="mt-8 font-display text-[2.15rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-[3.35rem] text-balance">
            {t("hero.headline")}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/78 sm:text-lg">
            {t("site.tagline")} {t("hero.support")}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to={pathFor("contact")} variant="gold" size="lg">
              {t("nav.schedule")}
            </Button>
            <Button to={pathFor("services")} variant="outlineDark" size="lg">
              {t("common.exploreServices")}
            </Button>
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes fadeRise {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroZoom {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
      `}</style>
    </section>
  );
}

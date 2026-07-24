import { Hero } from "@/components/home/Hero";
import { MetricsBar } from "@/components/home/MetricsBar";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { WhyChoose } from "@/components/home/WhyChoose";
import { ProcessPreview } from "@/components/home/ProcessPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBand } from "@/components/home/CtaBand";
import { Seo } from "@/components/seo/Seo";
import { useI18n } from "@/i18n";

export function HomePage() {
  const { t } = useI18n();
  return (
    <>
      <Seo description={t("meta.homeDescription")} path="" />
      <Hero />
      <MetricsBar />
      <ExpertiseSection />
      <ServicesShowcase />
      <WhyChoose />
      <ProcessPreview />
      <Testimonials />
      <CtaBand />
    </>
  );
}

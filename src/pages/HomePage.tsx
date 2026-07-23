import { Hero } from "@/components/home/Hero";
import { MetricsBar } from "@/components/home/MetricsBar";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { WhyChoose } from "@/components/home/WhyChoose";
import { ProcessPreview } from "@/components/home/ProcessPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBand } from "@/components/home/CtaBand";
import { Seo } from "@/components/seo/Seo";

export function HomePage() {
  return (
    <>
      <Seo
        description="NovaGate ImmiServices, Llc offers professional immigration consulting for visas, green cards, citizenship, and family immigration. Schedule a consultation today."
        path="/"
      />
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

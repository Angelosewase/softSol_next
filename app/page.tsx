import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-2";
import FAQs from "@/components/faqs";
import FeaturesSection from "@/components/features-8";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import StatsSection from "@/components/stats-4";
import TestimonialsSection from "@/components/testimonials";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ContentSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <Pricing />
      <FAQs />
      <CallToAction />
      <FooterSection />
    </div>
  );
}

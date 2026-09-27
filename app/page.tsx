 import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
 
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      <PortfolioSection />
     
      <CTASection />
    </main>
  );
}
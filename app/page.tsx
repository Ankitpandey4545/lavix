 import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ReviewSection from "@/components/ReviewSection";

import CTASection from "@/components/CTASection";
import CommandPalette from "@/components/CommandPalette";
import CookieConsent from "@/components/CookieConsent";
 import PopupLeadForm from "@/components/PopupLeadForm";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <CTASection />
        <ReviewSection /> 
        <CommandPalette />
        <CookieConsent />
        <PopupLeadForm />
        
    </main>
  );
}
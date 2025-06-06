import HeroSection from "./components/hero-section/hero-section";
import VideoSection from "./components/video-section/video-section";
import InfographicSection from "./components/infographic-section/infographic-section";
// import TestimonialsSection from "./components/testimonials-section/testimonials-section";
import PricingSection from "./components/pricing-section/pricing-section";
import FaqSection from "./components/faq-section/faq-section";
import AffiliateSection from "./components/affiliate-section/affiliate-section";

import "./home-page.scss";

function HomePage() {
  return (
    <div id="home" className="home-page-container">
      <HeroSection />
      <VideoSection />
      <InfographicSection />
      {/* <TestimonialsSection /> */}
      <PricingSection />
      <FaqSection />
      <AffiliateSection />
    </div>
  );
}

export default HomePage;

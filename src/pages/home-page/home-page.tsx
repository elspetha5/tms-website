import { useEffect, useLayoutEffect, useRef, useState } from "react";

import HeroSection from "./components/hero-section/hero-section";
import InfographicSection from "./components/infographic-section/infographic-section";
import TestimonialsSection from "./components/testimonials-section/testimonials-section";
import PricingSection from "./components/pricing-section/pricing-section";
import FaqSection from "./components/faq-section/faq-section";
import AffiliateSection from "./components/affiliate-section/affiliate-section";

import "./home-page.scss";

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    if (!heroRef.current) {
      return;
    }

    let animationFrameId: number | null = null;
    const observer = new ResizeObserver((entries) => {
      animationFrameId = window.requestAnimationFrame(() => {
        for (let entry of entries) {
          if (entry.target === heroRef.current) {
            const currentHeight = entry.contentRect.height;
            if (currentHeight > 0 && currentHeight !== heroHeight) {
              setHeroHeight(currentHeight);
            }
          }
        }
      });
    });

    observer.observe(heroRef.current);
    return () => {
      observer.disconnect();
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [heroHeight]);

  return (
    <div
      id="home"
      className="home-page-container"
      style={{ paddingTop: heroHeight - 20 }}
    >
      <HeroSection ref={heroRef} />
      <InfographicSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <AffiliateSection />
    </div>
  );
}

export default HomePage;

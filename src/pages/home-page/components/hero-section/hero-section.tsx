import Button from "../../../../library/button/button";
import ContentContainer from "../../../../components/content-container/content-container";
import { pageRoutes } from "../../../../shared/constants";

import "./hero-section.scss";

function HeroSection() {
  return (
    <div className="hero-section-container">
      <ContentContainer>
        <div className="hero-inner-container">
          <div className="hero-content">
            <div className="hero-title bold">
              TMS Is Like Oxygen For Your Devices. Breathe Easy!
            </div>
            <div className="hero-subtitle bold">
              The fastest and easiest way to manage, secure, backup and recover
              your Corporate-owned and BYOD smartphone and tablet devices
            </div>
            <Button
              className="hero-section-cta bold"
              to={pageRoutes.getStarted}
              isPrimary
            >
              Get Started
            </Button>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}

export default HeroSection;

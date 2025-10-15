import { Link } from "react-router-dom";

import Button from "../../../../library/button/button";
import ContentContainer from "../../../../components/content-container/content-container";
import { pageRoutes } from "../../../../shared/constants";

import "./hero-section.scss";

function HeroSection() {
  return (
    <div className="hero-section-container">
      <ContentContainer>
        <div className="hero-inner-container">
          <Link to={pageRoutes.noDowntimeFaq} className="hero-guarantee">
            <img src="https://firebasestorage.googleapis.com/v0/b/total-mobility-solution-6c7cc.firebasestorage.app/o/No%20downtime%20guarantee%20-%20locator.svg?alt=media&token=de15df44-a519-41a7-87ee-c312e70f648f" />
          </Link>
          <div className="hero-content">
            <div className="hero-background-box">
              <div className="hero-title bold">
                Total Control. Total Security. Total Mobility.
              </div>
              <div className="hero-subtitle bold">
                The fastest and easiest way to manage, secure, backup and
                recover your Corporate-owned and BYOD smartphone and tablet
                devices
              </div>
              <Button
                className="hero-section-cta bold"
                href="https://calendly.com/totalmobilitysolution/30min?month=2025-10"
                isPrimary
              >
                Connect Now
              </Button>
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}

export default HeroSection;

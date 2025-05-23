import { forwardRef } from "react";

import Button from "../../../../library/button/button";
import { pageRoutes } from "../../../../shared/constants";

import "./hero-section.scss";

const HeroSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className="hero-section-container">
      <div className="hero-inner-container">
        <div className="hero-content">
          <div className="hero-title bold">
            TMS Is Like Oxygen For Your Devices. Breathe Easy!
          </div>
          <div className="hero-subtitle bold">
            The fastest and easiest way to manage, secure, backup and recover
            your Corporate-owned and BYOD smartphone and tablet devices
          </div>
        </div>
      </div>
    </div>
  );
});

export default HeroSection;

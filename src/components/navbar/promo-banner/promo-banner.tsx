import Button from "../../../library/button/button";
import { pageRoutes } from "../../../shared/constants";

import "./promo-banner.scss";

function PromoBanner() {
  return (
    <Button to={pageRoutes.getStarted} isTertiary>
      <div className="promo-banner-container">
        <div className="promo-banner-title">*SUMMER SPECIAL</div>
      </div>
    </Button>
  );
}

export default PromoBanner;

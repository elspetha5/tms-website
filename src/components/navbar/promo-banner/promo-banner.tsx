import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons/faCircleArrowRight";

import Button from "../../../library/button/button";
import { pageRoutes } from "../../../shared/constants";

import "./promo-banner.scss";

function PromoBanner() {
  return (
    <Button to={pageRoutes.getStarted} isTertiary>
      <div className="promo-banner-container">
        <div />
        <div className="promo-banner-title">*FALL SPECIAL*</div>
        <div className="promo-banner-arrow">
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </div>
      </div>
    </Button>
  );
}

export default PromoBanner;

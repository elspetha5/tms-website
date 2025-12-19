import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons/faCircleArrowRight";

import Button from "../../../library/button/button";
import { pageRoutes } from "../../../shared/constants";
import { getTimeOfYearInfo } from "../../../shared/utils/date-utils";

import "./promo-banner.scss";

function PromoBanner() {
  const { title } = getTimeOfYearInfo();

  return (
    <Button to={pageRoutes.getStarted} isTertiary>
      <div
        className={`promo-banner-container promo-banner-${title.toLowerCase()}`}
      >
        <div />
        <div className="promo-banner-title">{`*${title} SPECIAL*`}</div>
        <div className="promo-banner-arrow">
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </div>
      </div>
    </Button>
  );
}

export default PromoBanner;

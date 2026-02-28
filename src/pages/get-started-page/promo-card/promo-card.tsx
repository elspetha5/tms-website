import { getTimeOfYearInfo } from "../../../shared/utils/date-utils";

import "./promo-card.scss";

function PromoCard() {
  const { title, date } = getTimeOfYearInfo();

  return (
    <div className={`promo-card-container promo-card-${title.toLowerCase()}`}>
      <div className="promo-card-title">{`*${title} SPECIAL*`}</div>
      <div className="promo-card-description">
        10% off first month for new clients
      </div>
      <div className="promo-card-date">{date}</div>
    </div>
  );
}

export default PromoCard;

import { firebaseImgUrl } from "../../../../shared/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons/faCircleChevronDown";

import "./infographic-section.scss";

function InfographicSection() {
  return (
    <div className="infographic-section-container">
      <div className="infographic-title bold">
        TMS gives you
        <br /> all of this
        <br /> & more
        <br />
        <FontAwesomeIcon
          className="infographic-arrow-icon-down"
          icon={faCircleChevronDown}
        />
      </div>
      <img
        className="infographic-img"
        src={`${firebaseImgUrl}/New-TMS-infographic-white.svg?alt=media&token=1e739150-017d-4b87-9ae0-11fec405d5bf`}
        alt="TMS Infographic"
      />
    </div>
  );
}

export default InfographicSection;

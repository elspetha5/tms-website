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
        <br />
        <FontAwesomeIcon
          className="infographic-arrow-icon-down"
          icon={faCircleChevronDown}
        />
      </div>
      <img
        className="infographic-img"
        src={`${firebaseImgUrl}/New-TMS-infographic-white.svg?alt=media&token=f839fd4c-6316-4519-898e-89ed2ea2e141`}
        alt="TMS Infographic"
      />
    </div>
  );
}

export default InfographicSection;

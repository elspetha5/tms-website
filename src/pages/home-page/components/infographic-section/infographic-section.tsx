import { firebaseImgUrl } from "../../../../shared/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons/faCircleChevronLeft";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons/faCircleChevronDown";

import "./infographic-section.scss";

function InfographicSection() {
  return (
    <div className="infographic-section-container">
      <img
        className="infographic-img"
        src={`${firebaseImgUrl}/TMS-infographic-white.svg?alt=media&token=686a2f5d-c63a-4e1d-a3a1-f0351bfd46b3`}
        alt="TMS Infographic"
      />
      <div className="infographic-title bold">
        <FontAwesomeIcon
          className="infographic-arrow-icon-left"
          icon={faCircleChevronLeft}
        />{" "}
        TMS gives you
        <br /> all of this
        <br />
        <FontAwesomeIcon
          className="infographic-arrow-icon-down"
          icon={faCircleChevronDown}
        />
      </div>
    </div>
  );
}

export default InfographicSection;

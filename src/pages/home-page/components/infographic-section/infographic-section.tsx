import { firebaseImgUrl } from "../../../../shared/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons/faCircleChevronRight";

import "./infographic-section.scss";

function InfographicSection() {
  return (
    <div className="infographic-section-container">
      <div className="infographic-title bold">
        You get all of this
        <br /> with TMS{" "}
        <FontAwesomeIcon
          className="infographic-arrow-icon"
          icon={faCircleChevronRight}
        />
      </div>
      <img
        className="infographic-img"
        src={`${firebaseImgUrl}/TMS-infographic-white.svg?alt=media&token=686a2f5d-c63a-4e1d-a3a1-f0351bfd46b3`}
        alt="TMS Infographic"
      />
    </div>
  );
}

export default InfographicSection;

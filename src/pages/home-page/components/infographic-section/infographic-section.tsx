import { firebaseImgUrl } from "../../../../shared/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons/faCircleChevronLeft";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons/faCircleChevronDown";
import {
  faCloudArrowUp,
  faCloudArrowDown,
  faFolderOpen,
  faArrowsRotate,
  faForwardStep,
  faMapLocationDot,
  faLocationPinLock,
  faLock,
  faChartLine,
  faPlus,
  faFolder,
  faUser,
  faGripVertical,
  faArrowsSpin,
} from "@fortawesome/free-solid-svg-icons";

import "./infographic-section.scss";

const infoCircle = [
  {
    icon: faCircleChevronDown,
    name: "On-device backup & recovery",
  },
  {
    icon: faCircleChevronDown,
    name: "Containerization",
  },
  {
    icon: faCircleChevronDown,
    name: "OS update management",
  },
  {
    icon: faCircleChevronDown,
    name: "Remote management",
  },
  {
    icon: faCircleChevronDown,
    name: "Location history",
  },
  {
    icon: faCircleChevronDown,
    name: "Geofencing",
  },
  {
    icon: faCircleChevronDown,
    name: "Security management",
  },
  {
    icon: faCircleChevronDown,
    name: "Audit & reports",
  },
  {
    icon: faCircleChevronDown,
    name: "Device onboarding",
  },
  {
    icon: faCircleChevronDown,
    name: "Asset management",
  },
  {
    icon: faCircleChevronDown,
    name: "Profile management",
  },
  {
    icon: faCircleChevronDown,
    name: "App management",
  },
  {
    icon: faCircleChevronDown,
    name: "iOS & Android device lifecycle management",
  },
];

function InfographicSection() {
  return (
    <div className="infographic-section-container">
      <div className="infographic-graphic-container">
        <div className="infographic-graphic-center"></div>

        <img
          className="infographic-img"
          src={`${firebaseImgUrl}/TMS-infographic-white.svg?alt=media&token=686a2f5d-c63a-4e1d-a3a1-f0351bfd46b3`}
          alt="TMS Infographic"
        />
      </div>
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

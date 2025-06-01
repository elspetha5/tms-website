import { useEffect, useRef, useState } from "react";
import { firebaseImgUrl } from "../../../../shared/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons/faCircleChevronLeft";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons/faCircleChevronDown";
import {
  faCloudArrowUp,
  // faCloudArrowDown,
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

const infoCircles = [
  {
    id: "1",
    icon: faCircleChevronDown,
    text: "iOS device lifecycle management",
  },
  {
    id: "2",
    icon: faCircleChevronDown,
    text: "Android device lifecycle management",
  },
  {
    id: "3",
    icon: faCircleChevronDown,
    text: "TEM procurement & management - Verizon, AT&T, T-Mobile, etc",
  },
  {
    id: "4",
    icon: faCircleChevronDown,
    text: "Device migration",
  },
  {
    id: "5",
    icon: faCircleChevronDown,
    text: "Full kitting & staging services",
  },
  {
    id: "6",
    icon: faCircleChevronDown,
    text: "Device deployment",
  },
  {
    id: "7",
    icon: faCircleChevronDown,
    text: "Spares inventory management",
  },
  {
    id: "8",
    icon: faCircleChevronDown,
    text: "Real-time remote device management",
  },
  {
    id: "9",
    icon: faCircleChevronDown,
    text: "24/7/365 help desk",
  },
  {
    id: "10",
    icon: faCircleChevronDown,
    text: "On-device security & SMS-phishing prevention",
  },
  {
    id: "11",
    icon: faCircleChevronDown,
    text: "Device maintenance & repair",
  },
  {
    id: "12",
    icon: faCircleChevronDown,
    text: "OS update & apps management",
  },
  {
    id: "13",
    icon: faCircleChevronDown,
    text: "Real-time on-device backup & recovery",
  },
];

function InfographicSection() {
  const [visibleCircleId, setVisibleCircleId] = useState(null);

  function handleCircleClick(id) {
    setVisibleCircleId((prevId) => (prevId === id ? null : id));
  }

  return (
    <div className="infographic-section-container">
      {/* <div className="build-container">
        <div className="infographic-graphic-container">
          <div className="infographic-graphic-center">
            <img
              className="infographic-graphic-logo"
              src={`${firebaseImgUrl}/TMS-icon-only-logo.png?alt=media&token=d14556ea-9c00-4624-9060-87f322366bc4`}
              alt="logo"
            />
          </div>
        </div>
        <div className="infographic-surrounding-circles-container">
          {infoCircles.map((circ) => (
            <div
              key={circ.id}
              className="infographic-info-circle-container"
              data-circle-id={circ.id}
            >
              <FontAwesomeIcon icon={circ.icon} />
              <div className="infographic-info-circle-text">{circ.text}</div>
            </div>
          ))}
        </div>
      </div> */}
      <img
        className="infographic-img"
        src={`${firebaseImgUrl}/New-TMS-infographic-white.svg?alt=media&token=f839fd4c-6316-4519-898e-89ed2ea2e141`}
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

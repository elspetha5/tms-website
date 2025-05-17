import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Button from "../../library/button/button";
import { firebaseImgUrl } from "../../shared/constants";

import "./footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div>
          <Link to="/">
            <img
              className="footer-logo"
              src={`${firebaseImgUrl}/TMS-logo-white-2025.png?alt=media&token=94abd378-9779-4d4a-8592-507195d507b2`}
              alt="white-logo"
            />
          </Link>
          <div className="footer-social-links">
            <a href="#">
              <FontAwesomeIcon
                className="footer-social-link"
                icon={faLinkedin}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="footer-social-link"
                icon={faFacebook}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="footer-social-link"
                icon={faTwitter}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="footer-social-link"
                icon={faInstagram}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

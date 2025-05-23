import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Button from "../../library/button/button";
import { firebaseImgUrl, pageRoutes } from "../../shared/constants";

import "./footer.scss";

const socialBtns = [
  {
    href: "#",
    icon: faLinkedin,
    key: "linked in",
  },
  {
    href: "#",
    icon: faFacebook,
    key: "facebook",
  },
  {
    href: "#",
    icon: faTwitter,
    key: "twitter",
  },
  {
    href: "#",
    icon: faInstagram,
    key: "instagram",
  },
];

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Our Story", to: pageRoutes.ourStory },
      { label: "Why TMS?", to: "#" },
      { label: "Into The Future", to: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Contact", href: "mailto:contact@totalmobilitysolution.com" },
      { label: "Partners", to: pageRoutes.partners },
      { label: "Support Request", to: pageRoutes.supportRequest },
    ],
  },
];

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-social-container">
          <Button to={pageRoutes.home}>
            <img
              className="footer-logo"
              src={`${firebaseImgUrl}/TMS-logo-white-2025.png?alt=media&token=94abd378-9779-4d4a-8592-507195d507b2`}
              alt="white-logo"
            />
          </Button>
          <div className="footer-social-links">
            {socialBtns.map((btn) => (
              <Button key={btn.key} href={btn.href}>
                <FontAwesomeIcon
                  className="footer-social-link"
                  icon={btn.icon}
                />
              </Button>
            ))}
          </div>
        </div>
        {footerColumns.map((col) => (
          <div className="footer-info-col-container">
            <div className="footer-info-col-title" key={col.title}>
              {col.title}
            </div>
            {col.links.map((link) => (
              <div>
                <Button
                  to={link.to}
                  className="footer-link-btn"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </Button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons/faCopyright";

import Button from "../../library/button/button";
import ContentContainer from "../content-container/content-container";
import { firebaseImgUrl, pageRoutes } from "../../shared/constants";

import "./footer.scss";

const socialBtns = [
  {
    href: "https://www.linkedin.com/company/total-mobility-solution-provider",
    icon: faLinkedin,
    key: "linked in",
  },
  {
    href: "https://www.facebook.com/totalmobilitysolution",
    icon: faFacebook,
    key: "facebook",
  },
  {
    href: "https://x.com/_tms_solution_",
    icon: faXTwitter,
    key: "twitter",
  },
  {
    href: "https://www.instagram.com/total_mobility_solution/",
    icon: faInstagram,
    key: "instagram",
  },
];

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Our Story", to: pageRoutes.ourStory },
      { label: "Into The Future", to: pageRoutes.intoTheFuture },
      { label: "Blog", to: pageRoutes.blog },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Contact Us", to: pageRoutes.contactUs },
      { label: "Partners", to: pageRoutes.partners },
      { label: "Support Request", to: pageRoutes.supportRequest },
      // { label: "Login", to: pageRoutes.login },
    ],
  },
];

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="footer-container">
      <ContentContainer>
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
            <div className="footer-info-col-container" key={col.title}>
              <div className="footer-info-col-title bold">{col.title}</div>
              {col.links.map((link) => (
                <div key={link.label}>
                  <Button to={link.to} className="footer-link-btn">
                    {link.label}
                  </Button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </ContentContainer>
      <div className="footer-copyright">
        <FontAwesomeIcon className="" icon={faCopyright} /> {currentYear} Total
        Mobility Solution. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;

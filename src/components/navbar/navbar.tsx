import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "../../library/button/button";
import ContentContainer from "../content-container/content-container";
import { firebaseImgUrl, pageRoutes } from "../../shared/constants";

import "./navbar.scss";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { pathname, hash } = useLocation();
  const showLinks =
    pathname !== pageRoutes.getStarted &&
    pathname !== pageRoutes.supportRequest;

  const navbarLinks = [
    {
      label: "Home",
      to: hash ? pageRoutes.homeScroll : pageRoutes.home,
      isActive:
        `${pathname}${hash}` === pageRoutes.home ||
        hash === pageRoutes.homeScroll.substring(1),
    },
    {
      label: "Why TMS?",
      to: pageRoutes.whyTms,
      isActive: pathname === pageRoutes.whyTms,
    },
    {
      label: "Pricing",
      to: pageRoutes.pricing,
      isActive: hash === pageRoutes.pricing.substring(1),
    },
    {
      label: "FAQ's",
      to: pageRoutes.faqs,
      isActive: hash === pageRoutes.faqs.substring(1),
    },
    {
      label: "Get Started",
      to: pageRoutes.getStarted,
      isActive: pathname === pageRoutes.getStarted,
    },
  ];

  return (
    <nav className="navbar">
      <ContentContainer>
        <div className="nav-container">
          <div className="logo">
            <Link to={pageRoutes.home} className="logo-link">
              <img
                className="nav-logo"
                src={`${firebaseImgUrl}/TMS-logo-no-background.png?alt=media&token=cf8499c6-a5dd-4d14-9a67-85b2e98c87d8`}
                alt="logo"
              />
            </Link>
          </div>

          {showLinks && (
            <>
              <div className="nav-links-container">
                {navbarLinks.map((link) => (
                  <Button
                    className={`nav-link${link.isActive ? "-active" : ""} bold`}
                    to={link.to}
                    isPrimary={link.label === "Get Started"}
                    key={link.label}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>

              <Button
                className="nav-hangurger-container"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <div
                  className={`nav-hamburger-line${
                    showMobileMenu ? "-active1" : ""
                  }`}
                />
                <div
                  className={`nav-hamburger-line${
                    showMobileMenu ? "-active2" : ""
                  }`}
                />
                <div
                  className={`nav-hamburger-line${
                    showMobileMenu ? "-active3" : ""
                  }`}
                />
              </Button>

              <div
                className={`nav-mobile-menu${showMobileMenu ? "-active" : ""}`}
              >
                {navbarLinks.map((link) => (
                  <Button
                    className={`nav-link${link.isActive ? "-active" : ""}`}
                    to={link.to}
                    isPrimary={link.label === "Get Started"}
                    key={link.label}
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </>
          )}
        </div>
      </ContentContainer>
    </nav>
  );
}

export default Navbar;

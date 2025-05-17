import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "../../library/button/button";
import { firebaseImgUrl } from "../../shared/constants";

import "./navbar.scss";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { pathname, hash } = useLocation();
  const showLinks =
    pathname !== "/get-started" && pathname !== "/support-request";

  const navbarLinks = [
    {
      label: "Home",
      href: "/",
      isActive: `${pathname}${hash}` === "/",
    },
    {
      label: "Our Story",
      href: "/our-story",
      isActive: pathname === "/our-story",
    },
    {
      label: "Pricing",
      href: "/#pricing",
      isActive: hash === "#pricing",
    },
    {
      label: "FAQ's",
      href: "/#faqs",
      isActive: hash === "#faqs",
    },
    {
      label: "Get Started",
      href: "/get-started",
      isActive: pathname === "/get-started",
    },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/" className="logo-link">
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
                  className={`nav-link${link.isActive ? "-active" : ""}`}
                  href={link.href}
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
                  href={link.href}
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
    </nav>
  );
}

export default Navbar;

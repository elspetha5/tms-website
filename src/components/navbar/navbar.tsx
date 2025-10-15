import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "../../library/button/button";
import { firebaseImgUrl, pageRoutes } from "../../shared/constants";

import "./navbar.scss";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { pathname, hash } = useLocation();
  const ctaText = "Let's talk";
  const ctaLink =
    "https://calendly.com/totalmobilitysolution/30min?month=2025-10";
  const showLinks =
    pathname !== pageRoutes.getStarted &&
    pathname !== pageRoutes.supportRequest &&
    pathname !== pageRoutes.partnersForm;

  function scrollToTop() {
    if (hash === pageRoutes.homeScroll.substring(1)) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  const navbarLinks = [
    {
      label: "Home",
      to: hash || pathname === "/" ? pageRoutes.homeScroll : pageRoutes.home,
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
      label: ctaText,
      href: ctaLink,
    },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link
            to={
              hash || pathname === "/" ? pageRoutes.homeScroll : pageRoutes.home
            }
            className="logo-link"
          >
            <img
              className="nav-logo"
              src={`${firebaseImgUrl}/TMS-logo-no-background.png?alt=media&token=cf8499c6-a5dd-4d14-9a67-85b2e98c87d8`}
              alt="logo"
            />
          </Link>
        </div>

        <div className="nav-links-container">
          {showLinks ? (
            <>
              {navbarLinks.map((link) => (
                <Button
                  className={`nav-link${link.isActive ? "-active" : ""} bold`}
                  to={link.to}
                  href={link.href}
                  isPrimary={link.label === ctaText}
                  key={link.label}
                  onClick={scrollToTop}
                >
                  {link.label}
                </Button>
              ))}
            </>
          ) : (
            <Button
              className={`nav-link bold`}
              href={ctaLink}
              isPrimary
              onClick={scrollToTop}
            >
              {ctaText}
            </Button>
          )}
        </div>

        {showLinks ? (
          <>
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
                  href={link.href}
                  isPrimary={link.label === ctaText}
                  key={link.label}
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </>
        ) : (
          <Button
            className={`nav-link nav-mobile-talk-link bold`}
            href={ctaLink}
            isPrimary
            onClick={scrollToTop}
          >
            {ctaText}
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

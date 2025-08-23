import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../shared/contexts/auth-context";

import Button from "../../library/button/button";
import Modal from "../../library/modal/modal";
import {
  calendlyLink,
  firebaseImgUrl,
  pageRoutes,
} from "../../shared/constants";

import "./navbar.scss";

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { pathname, hash } = useLocation();
  const ctaText = "Let's talk";
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

  async function handleLogout(e) {
    e.preventDefault();

    try {
      await logout();
      setShowLogoutModal(false);
    } catch (firebaseError) {
      console.error("Logout component caught error:", firebaseError);
    }

    navigate(pageRoutes.home);
  }

  const publicNavbarLinks = [
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
      label: "Login",
      to: pageRoutes.login,
      isActive: pathname === pageRoutes.login,
    },
    {
      label: ctaText,
      href: calendlyLink,
    },
  ];

  const privateNavbarLinks = [
    {
      label: "Dashboard",
      to: pageRoutes.privateRoutes.dashboard,
      isActive: pathname === pageRoutes.privateRoutes.dashboard,
    },
    {
      label: "Logout",
      isActive: pathname === pageRoutes.login,
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
              {(currentUser ? privateNavbarLinks : publicNavbarLinks).map(
                (link) => {
                  if (link.label === "Logout") {
                    return (
                      <div
                        className={`nav-link${
                          link.isActive ? "-active" : ""
                        } bold`}
                        key="Logout"
                        onClick={() => setShowLogoutModal(true)}
                      >
                        Logout
                      </div>
                    );
                  } else {
                    return (
                      <Button
                        className={`nav-link${
                          link.isActive ? "-active" : ""
                        } bold`}
                        to={link.to}
                        href={link.href}
                        isPrimary={link.label === ctaText}
                        key={link.label}
                        onClick={scrollToTop}
                      >
                        {link.label}
                      </Button>
                    );
                  }
                },
              )}
            </>
          ) : (
            <Button
              className={`nav-link bold`}
              href={calendlyLink}
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
              {(currentUser ? privateNavbarLinks : publicNavbarLinks).map(
                (link) => {
                  if (link.label === "Logout") {
                    return (
                      <div
                        className={`nav-link${
                          link.isActive ? "-active" : ""
                        } bold`}
                        key="Logout"
                        onClick={() => setShowLogoutModal(true)}
                      >
                        Logout
                      </div>
                    );
                  } else {
                    return (
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
                    );
                  }
                },
              )}
            </div>
          </>
        ) : (
          <Button
            className={`nav-link nav-mobile-talk-link bold`}
            href={calendlyLink}
            isPrimary
            onClick={scrollToTop}
          >
            {ctaText}
          </Button>
        )}
      </div>

      <Modal open={showLogoutModal} onClose={() => setShowLogoutModal(false)}>
        <div className="nav-logout-modal">
          <div>Are you sure you want to logout?</div>
          <div className="nav-logout-btns-wrapper">
            <Button isSecondary onClick={() => setShowLogoutModal(false)}>
              Cancel
            </Button>
            <Button
              className="nav-logout-modal-btn"
              isPrimary
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </Modal>
    </nav>
  );
}

export default Navbar;

import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

import "./layout.scss";

function Layout() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="layout-container">
      <Navbar />
      <div className="layout-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

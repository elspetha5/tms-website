import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

import "./layout.scss";

function Layout() {
  return (
    // create container component for margins of inner content

    // Make a toast notification that pops from right bottom after 30s
    // Ready to get started with button
    // user closes it, but they can pull it back out again if they click
    <div className="layout-container">
      <Navbar />
      <div className="layout-inner-container">
        <div className="layout-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

import "./layout.scss";

function Layout() {
  return (
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

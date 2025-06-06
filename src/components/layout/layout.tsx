import { Outlet } from "react-router-dom";

import PromoBanner from "../navbar/promo-banner/promo-banner";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

import "./layout.scss";

function Layout() {
  return (
    <div className="layout-container">
      <PromoBanner />
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

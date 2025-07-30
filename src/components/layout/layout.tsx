import { Outlet } from "react-router-dom";

import PromoBanner from "../navbar/promo-banner/promo-banner";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { useAuth } from "../../shared/contexts/auth-context";

import "./layout.scss";

function Layout() {
  const { currentUser } = useAuth();

  return (
    <div className="layout-container">
      {!currentUser && <PromoBanner />}
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

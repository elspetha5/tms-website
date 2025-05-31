import { useEffect, useRef } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";

import GetStartedPage from "./pages/get-started-page/get-started-page";
import HomePage from "./pages/home-page/home-page";
import IntoTheFuturePage from "./pages/into-the-future-page/into-the-future-page";
import InvoiceForm from "./pages/invoice-form/invoice-form";
import Login from "./pages/login/login";
import Layout from "./components/layout/layout";
import OurStoryPage from "./pages/our-story-page/our-story-page";
import PartnersPage from "./pages/partners-page/partners-page";
import SupportRequestPage from "./pages/support-request-page/support-request-page";
import WhyTmsPage from "./pages/why-tms-page/why-tms-page";
import PrivateRoute from "./components/private-route/private-route";
import { AuthProvider } from "./shared/contexts/auth-context";

import { pageRoutes } from "./shared/constants";

function ScrollTo() {
  const location = useLocation();
  const lastHash = useRef("");

  useEffect(() => {
    if (location.hash && location.hash !== lastHash.current) {
      lastHash.current = location.hash;
      const id = location.hash.substring(1);
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          const elementRect = element.getBoundingClientRect();
          const targetScrollY = elementRect.top + window.scrollY - 110;

          window.scrollTo({
            top: targetScrollY,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollTo />
      <AuthProvider>
        <Routes>
          <Route path={pageRoutes.home} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={pageRoutes.homeScroll} element={<HomePage />} />
            <Route
              path={pageRoutes.ourStory.substring(1)}
              element={<OurStoryPage />}
            />
            <Route
              path={pageRoutes.getStarted.substring(1)}
              element={<GetStartedPage />}
            />
            <Route
              path={pageRoutes.supportRequest.substring(1)}
              element={<SupportRequestPage />}
            />
            <Route
              path={pageRoutes.intoTheFuture.substring(1)}
              element={<IntoTheFuturePage />}
            />
            <Route
              path={pageRoutes.whyTms.substring(1)}
              element={<WhyTmsPage />}
            />
            <Route
              path={pageRoutes.partners.substring(1)}
              element={<PartnersPage />}
            />
            <Route path={pageRoutes.login.substring(1)} element={<Login />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route
              path={pageRoutes.invoiceForm.substring(1)}
              element={<InvoiceForm />}
            />
          </Route>

          {/* <Route
            path="*"
            element={
              <div>
                <h1>404 - Page Not Found</h1>
                <Link to={pageRoutes.home}>Go Home</Link>
              </div>
            }
          /> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

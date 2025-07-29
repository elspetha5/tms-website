import { useEffect, useRef } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";

import Layout from "./components/layout/layout";
import PrivateRoute from "./components/private-route/private-route";

import Blog from "./pages/blog/blog";
import ComingSoon from "./pages/coming-soon/coming-soon";
import ContactUs from "./pages/contact-us/contact-us";
import GetStartedPage from "./pages/get-started-page/get-started-page";
import HomePage from "./pages/home-page/home-page";
import IntoTheFuturePage from "./pages/into-the-future-page/into-the-future-page";
import InvoiceForm from "./pages/invoice-form/invoice-form";
import Login from "./pages/login/login";
import OurStoryPage from "./pages/our-story-page/our-story-page";
import PartnersForm from "./pages/partners-page/partners-form/partners-form";
import PartnersPage from "./pages/partners-page/partners-page";
import SupportRequestPage from "./pages/support-request-page/support-request-page";
import WhyTmsPage from "./pages/why-tms-page/why-tms-page";

import { AuthProvider } from "./shared/contexts/auth-context";
import { pageRoutes } from "./shared/constants";

function ScrollTo() {
  const location = useLocation();
  const lastPathname = useRef(location.pathname);
  const lastHash = useRef(location.hash);

  useEffect(() => {
    const isNewPage = location.pathname !== lastPathname.current;
    lastPathname.current = location.pathname;

    lastHash.current = location.hash;

    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          const elementRect = element.getBoundingClientRect();
          const targetScrollY = elementRect.top + window.scrollY - 90;

          window.scrollTo({
            top: targetScrollY,
            behavior: "smooth",
          });
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else if (isNewPage) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AuthProvider>
        <ScrollTo />
        <Routes>
          <Route path={pageRoutes.home} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={pageRoutes.homeScroll} element={<HomePage />} />
            <Route path={pageRoutes.ourStory} element={<OurStoryPage />} />
            <Route path={pageRoutes.getStarted} element={<GetStartedPage />} />
            <Route
              path={pageRoutes.supportRequest}
              element={<SupportRequestPage />}
            />
            <Route
              path={pageRoutes.intoTheFuture}
              element={<IntoTheFuturePage />}
            />
            <Route path={pageRoutes.whyTms} element={<WhyTmsPage />} />
            <Route path={pageRoutes.partnersForm} element={<PartnersForm />} />
            <Route path={pageRoutes.partners} element={<PartnersPage />} />
            {/* <Route path={pageRoutes.login} element={<Login />} /> */}
            <Route path={pageRoutes.blog} element={<Blog />} />
            <Route path={pageRoutes.contactUs} element={<ContactUs />} />
            <Route path={pageRoutes.comingSoon} element={<ComingSoon />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            {/* <Route
              path={pageRoutes.invoiceForm.substring(1)}
              element={<InvoiceForm />}
            /> */}
          </Route>

          <Route
            path="*"
            element={
              <div>
                <h1>404 - Page Not Found</h1>
                <Link to={pageRoutes.home}>Go Home</Link>
              </div>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

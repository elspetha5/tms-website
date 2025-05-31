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

// function ScrollTo() {
//   const location = useLocation();
//   const lastPathname = useRef(location.pathname);
//   const lastHash = useRef(location.hash);

//   useEffect(() => {
//     const isNewPage = location.pathname !== lastPathname.current;
//     lastPathname.current = location.pathname;

//     const hashChanged = location.hash !== lastHash.current;
//     lastHash.current = location.hash;

//     if (location.hash) {
//       const id = location.hash.substring(1);
//       const element = document.getElementById(id);

//       if (element) {
//         setTimeout(() => {
//           const elementRect = element.getBoundingClientRect();
//           const targetScrollY = elementRect.top + window.scrollY - 110;

//           window.scrollTo({
//             top: targetScrollY,
//             behavior: "smooth",
//           });
//         }, 100);
//       } else {
//         window.scrollTo(0, 0);
//       }
//     } else if (isNewPage) {
//       window.scrollTo(0, 0);
//     }
//   }, [location]);

//   // useEffect(() => {
//   //   if (location.hash && location.hash !== lastHash.current) {
//   //     lastHash.current = location.hash;
//   //     const id = location.hash.substring(1);
//   //     const element = document.getElementById(id);

//   //     if (element) {
//   //       setTimeout(() => {
//   //         const elementRect = element.getBoundingClientRect();
//   //         const targetScrollY = elementRect.top + window.scrollY - 110;

//   //         window.scrollTo({
//   //           top: targetScrollY,
//   //           behavior: "smooth",
//   //         });
//   //       }, 100);
//   //     }
//   //   }
//   // }, [location]);

//   // useEffect(() => {
//   //   window.scrollTo(0, 0);
//   // }, [location.pathname]);

//   return null;
// }

function ScrollTo() {
  const location = useLocation();
  const lastPathname = useRef(location.pathname);
  const lastHash = useRef(location.hash);

  useEffect(() => {
    console.group("ScrollTo Effect Run"); // Group console messages for clarity
    console.log("Current Location:", {
      pathname: location.pathname,
      hash: location.hash,
      search: location.search,
    });
    console.log("Previous Pathname:", lastPathname.current);
    console.log("Previous Hash:", lastHash.current);

    const isNewPage = location.pathname !== lastPathname.current;
    lastPathname.current = location.pathname;

    const hashChanged = location.hash !== lastHash.current;
    lastHash.current = location.hash;

    if (location.hash) {
      console.log("--- Attempting hash scroll ---");
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      console.log("Target ID from hash:", id);
      console.log("Element found by ID:", element); // THIS IS CRUCIAL: Is it null?

      if (element) {
        console.log("Element found, scheduling scroll with timeout...");
        // Increased timeout slightly for better testing
        setTimeout(() => {
          const elementRect = element.getBoundingClientRect();
          const currentWindowScrollY = window.scrollY; // Get current scroll before calc
          const targetScrollY = elementRect.top + currentWindowScrollY - 110;

          console.log("Inside setTimeout - Element Rect Top:", elementRect.top);
          console.log(
            "Inside setTimeout - Window ScrollY:",
            currentWindowScrollY
          );
          console.log(
            "Inside setTimeout - Calculated Target ScrollY:",
            targetScrollY
          );

          window.scrollTo({
            top: targetScrollY,
            behavior: "smooth",
          });
          console.log(`Successfully attempted scroll to hash: #${id}`);
        }, 300); // Try a longer timeout for testing, e.g., 300ms or 500ms
      } else {
        console.warn(
          `ELEMENT NOT FOUND for ID: '${id}'. Cannot scroll to hash.`
        );
        // If element is not found, what should happen? Currently, it does nothing further.
        // If you want to scroll to top in this case, uncomment:
        // window.scrollTo(0, 0);
      }
    } else if (isNewPage) {
      console.log("--- New page, no hash. Scrolling to top. ---");
      window.scrollTo(0, 0);
    } else {
      console.log(
        "--- No scroll action needed (same page, same hash, or only query params changed). ---"
      );
    }
    console.groupEnd();
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

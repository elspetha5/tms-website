import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStartedPage from "./pages/get-started-page/get-started-page";
import HomePage from "./pages/home-page/home-page";
import IntoTheFuturePage from "./pages/into-the-future-page/into-the-future-page";
import Layout from "./components/layout/layout";
import OurStoryPage from "./pages/our-story-page/our-story-page";
import PartnersPage from "./pages/partners-page/partners-page";
import SupportRequestPage from "./pages/support-request-page/support-request-page";
import WhyTmsPage from "./pages/why-tms-page/why-tms-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="our-story" element={<OurStoryPage />} />
          <Route path="get-started" element={<GetStartedPage />} />
          <Route path="support-request" element={<SupportRequestPage />} />
          <Route path="into-the-future" element={<IntoTheFuturePage />} />
          <Route path="why-tms" element={<WhyTmsPage />} />
          <Route path="partners" element={<PartnersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

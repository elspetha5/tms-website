import ContentPage from "../../components/content-page/content-page";
import UnorderedList from "../../components/unordered-list/unordered-list";

import "./into-the-future-page.scss";

const managementListItems = [
  {
    text: "Sensitive company data travels across a dozen apps, networks, and devices every minute.",
  },
  {
    text: "Staff want flexibility and speed, but security and compliance can’t be an afterthought.",
  },
  {
    text: "Cyber threats keep getting smarter, and mobile devices are a favorite new target.",
  },
];

const partnerListItems = [
  {
    title: "All About Mobile:",
    text: "We live and breathe iOS and Android device management. Corporate-owned or BYOD, we cover every scenario so you don’t have to guess.",
  },
  {
    title: "MMS and EMM Specialists:",
    text: "Our team brings deep MMS (Managed Mobility Services) and EMM (Enterprise Mobility Management) experience, giving you advanced control, policy enforcement, and zero-compromise security.",
  },
  {
    title: "Peace of Mind Comes Standard:",
    text: "With TMS, you always know where your mobile devices are, how they’re being used, and that every device is protected—no matter who owns it or where it goes.",
  },
  {
    title: "Stay Ahead. Stay Secure:",
    text: "TMS keeps you a step ahead of threats and the competition. We work tirelessly behind the scenes so you can focus on growth, not worry about risk.",
  },
  {
    title: "Seamless Experience:",
    text: "Your users get hassle-free, secure access to work tools and data. You get central management, reporting, and support—all tailored for the realities of mobile business.",
  },
];

function IntoTheFuturePage() {
  return (
    <ContentPage title="Into The Future">
      <div className="content-page-top-text">
        Mobile devices are no longer just an accessory to business—they’re the
        engine driving growth, innovation, and customer connection. As
        workforces grow more mobile and remote, iOS and Android smartphones and
        tablets are quickly becoming the backbone of how companies operate and
        win.
      </div>
      <div className="content-page-section-title">
        The Shift Is Happening Now
      </div>
      <div className="content-page-paragraph">
        From sales teams closing deals on the go, to field workers capturing
        data in real time, to executives making fast decisions over video
        calls—business happens everywhere. Increasingly, the majority of revenue
        and profit flows directly through mobile devices, not desktops or
        laptops.
      </div>
      <div className="content-page-paragraph">
        This seismic shift brings huge opportunity—but also new challenges most
        businesses never faced before.
      </div>
      <div className="content-page-section-title">
        The Mobile Management Challenge
      </div>
      <div className="content-page-paragraph">
        Every mobile device, whether corporate-owned or BYOD, is a potential
        entry point into your environment. That means more risk, more
        complexity, and a need for tighter control.
      </div>
      <UnorderedList list={managementListItems} listName="management" />
      <div className="content-page-section-title">
        TMS: Your Partner for What’s Next
      </div>
      <div className="content-page-paragraph">
        At TMS, we’re built for this mobile-first world. Our expertise is 100%
        about smartphones and tablets—no distractions, just pure mobile focus.
      </div>
      <UnorderedList list={partnerListItems} listName="partner" />
      <div className="content-page-section-title">
        The Future Is Mobile, and It’s Happening Fast
      </div>
      <div className="content-page-paragraph">
        Don’t get left behind as technology evolves. Step into the future
        confidently, knowing your people and data are protected—everywhere
        business happens.
      </div>
    </ContentPage>
  );
}

export default IntoTheFuturePage;

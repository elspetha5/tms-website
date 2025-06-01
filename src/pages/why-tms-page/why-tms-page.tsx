import ContentPage from "../../components/content-page/content-page";
import UnorderedList from "../../components/unordered-list/unordered-list";

import "./why-tms-page.scss";

const listItems = [
  {
    title: "Exclusively Mobile:",
    text: "Most MSPs try to do a little bit of everything. TMS is different. Our entire business revolves around mobile devices —- no distractions, just expertise.",
  },
  {
    title: "True Specialists:",
    text: "We support only iOS and Android smartphones and tablets, making us experts at what we do. If it’s not mobile, it’s not our focus -— simple as that.",
  },
  {
    title: "Uncommon in the Marketplace:",
    text: "You won’t find many other companies who do exactly what we do. We bridge the gap between MSP, MMS (Managed Mobility Services), and EMM (Enterprise Mobility Management), and offer specialized support that few can match.",
  },
  {
    title: "BYOD and Security —- Front and Center:",
    text: "We understand the challenges of Bring Your Own Device (BYOD) environments. That’s why our solutions are built for today’s flexible workplaces, with a heavy focus on security and user experience.",
  },
  {
    title: "Full Lifecycle Coverage:",
    text: "From procurement and setup, to remote management, help desk, repairs, backup, recovery and security —- we’ve got every stage covered so your devices (and your people) are always ready and protected.",
  },
];

function WhyTmsPage() {
  return (
    <ContentPage title="Why TMS?">
      <div className="content-page-top-text">
        <b>
          Total Mobility Solution (TMS) is not your average Managed Services
          Provider (MSP).
        </b>{" "}
        We’re laser-focused on one thing: providing end-to-end lifecycle
        management for iOS and Android smartphones and tablets—both
        corporate-owned and BYOD
      </div>
      <div className="content-page-section-title">What Makes TMS Unique?</div>
      <UnorderedList list={listItems} listName="why" />
      <div className="content-page-tagline">
        Total Control. Total Security. Total Mobility.
      </div>
      <div className="why-tms-tagline-explainer">
        Your trusted partner for managed iOS & Android device solutions.
      </div>
    </ContentPage>
  );
}

export default WhyTmsPage;

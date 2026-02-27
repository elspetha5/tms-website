import ContentPage from "../../components/content-page/content-page";
import UnorderedList from "../../components/unordered-list/unordered-list";

import LiveGlowing from "../../shared/icons/live-glowing";
import LiveFlames from "../../shared/icons/live-flames";

import "./coming-soon.scss";

const comingSoonItems = [
  {
    text: (
      <div className="coming-soon-feature">
        Login for clients <LiveFlames className="coming-soon-feature-icon" />
      </div>
    ),
  },
  {
    text: (
      <div className="coming-soon-feature">
        Client profiles
        <LiveFlames className="coming-soon-feature-icon" />
      </div>
    ),
  },
  {
    text: (
      <div className="coming-soon-feature">
        Access to invoices
        <LiveFlames className="coming-soon-feature-icon" />
      </div>
    ),
  },
  {
    text: (
      <div className="coming-soon-feature">
        See updates on support tickets
        <LiveGlowing className="coming-soon-feature-icon" />
      </div>
    ),
  },
  {
    text: (
      <div className="coming-soon-feature">
        Device spares inventory list
        <LiveGlowing className="coming-soon-feature-icon" />
      </div>
    ),
  },
  {
    text: (
      <div className="coming-soon-feature">
        View your contract
        <LiveGlowing className="coming-soon-feature-icon" />
      </div>
    ),
  },
  { text: "Order new devices" },
  { text: "Add add-on services" },
  { text: "And more..." },
];

function ComingSoon() {
  return (
    <ContentPage title="Coming Soon!">
      <div className="content-page-paragraph">
        We're working hard to improve the level of service you want and deserve.
        The features below will be added shortly:
      </div>
      <UnorderedList list={comingSoonItems} listName="coming-soon" />
      <div className="content-page-paragraph">
        At TMS we're always trying to improve our service and make your
        experience the best it can be. Look forward for more to come!
      </div>
    </ContentPage>
  );
}

export default ComingSoon;

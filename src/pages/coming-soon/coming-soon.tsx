import ContentPage from "../../components/content-page/content-page";
import UnorderedList from "../../components/unordered-list/unordered-list";

import "./coming-soon.scss";

const comingSoonItems = [
  { text: "Login for clients" },
  { text: "Client profiles" },
  { text: "Access to invoices" },
  { text: "See updates on support tickets" },
  { text: "Device spares inventory list" },
  { text: "Order new devices" },
  { text: "View your contract" },
  { text: "Pay online" },
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

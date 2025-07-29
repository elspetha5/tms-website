import ContentPage from "../../components/content-page/content-page";
import UnorderedList from "../../components/unordered-list/unordered-list";

import "./coming-soon.scss";

const comingSoonItems = [
  { text: "Client profiles" },
  { text: "Accesss to invoice PDFS" },
  { text: "See updates on support tickets" },
  { text: "See your spares inventory and order devices" },
  { text: "View your contract" },
  { text: "Pay online" },
  { text: "Add add-on services" },
  { text: "And more..." },
];

function ComingSoon() {
  return (
    <ContentPage title="Coming Soon!">
      <div className="content-page-paragraph">
        We're working hard to improve the level of service we believe you
        deserve. In the next few months you can expect to see these features to
        make your experience with us as smooth as possible:
      </div>
      <UnorderedList list={comingSoonItems} listName="coming-soon" />
      <div className="content-page-paragraph">
        {" "}
        At TMS we're always trying to improve our service and make your
        experience the best it can be. Look forward for more to come!
      </div>
    </ContentPage>
  );
}

export default ComingSoon;

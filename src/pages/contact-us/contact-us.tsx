import ContentPage from "../../components/content-page/content-page";
import UnorderedList from "../../components/unordered-list/unordered-list";
import Button from "../../library/button/button";
import { pageRoutes } from "../../shared/constants";

import "./contact-us.scss";

const listItems = [
  {
    text: (
      <div>
        <b>Phone: </b>
        <Button href="tel:+18006600266" isTertiary>
          1-800-660-0266
        </Button>
      </div>
    ),
  },
  {
    text: (
      <div>
        <b>Email: </b>
        <Button href="mailto:contact@totalmobilitysolution.com" isTertiary>
          contact@totalmobilitysolution.com
        </Button>
      </div>
    ),
  },
  {
    text: (
      <div>
        <b>Mail: </b>
        <div>114 W Main St, #305</div>
        <div>Mesa, AZ 85201</div>
      </div>
    ),
  },
];

function ContactUs() {
  return (
    <ContentPage title="Contact Us">
      <div className="content-page-paragraph bold">
        We'd love to hear from you!
      </div>
      <div className="content-page-paragraph ">
        Whether you have a question, want to discuss how TMS can help your
        business, or just want to say hello—we’re ready and waiting. We can’t
        wait to speak with you!
      </div>
      <div className="content-page-paragraph bold">
        At Total Mobility Solution, we’re excited to help you manage and secure
        your mobile devices. Our team is passionate about making your mobile
        experience smooth, safe, and stress-free—let’s make it happen together!
      </div>
      <div className="content-page-section-title">How to Reach Us</div>
      <UnorderedList list={listItems} listName="contact-info" />
      <div className="content-page-section-title">Need Support?</div>
      <div className="content-page-paragraph ">
        If you have a support request, please complete our quick{" "}
        <Button isTertiary to={pageRoutes.supportRequest}>
          Support Request Form
        </Button>{" "}
        so we can help you as fast as possible.
      </div>
      <div className="content-page-paragraph ">
        <div className="bold">Prefer to chat now?</div>
        <div>
          Give us a call or send an email—we’ll get back to you promptly.
        </div>
      </div>
      <div className="content-page-paragraph ">
        <div className="bold">
          Thank you for choosing Total Mobility Solution.
        </div>
      </div>
    </ContentPage>
  );
}

export default ContactUs;

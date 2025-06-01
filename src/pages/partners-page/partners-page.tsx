import ContentPage from "../../components/content-page/content-page";
import UnorderedList from "../../components/unordered-list/unordered-list";

import "./partners-page.scss";

const listItems = [
  {
    title: "Mobile-Only Experts:",
    text: "We specialize in smartphones and tablets. That’s it. No distractions. No half-measures.",
  },
  {
    title: "Flexible for Any Client:",
    text: "Need corporate device management? BYOD? Something in-between? We handle it all—fast, secure, and simple.",
  },
  {
    title: "Reliable Revenue for Partners:",
    text: "You don’t just help your clients succeed—you build a new revenue stream for your business, too.",
  },
  {
    title: "Zero Stress:",
    text: "Our processes are smooth, our support is top-notch, and we make you look good every step of the way.",
  },
];

function PartnersPage() {
  return (
    <ContentPage title="Partners">
      <div className="content-page-paragraph">
        Want a real win-win? Team up with TMS.
      </div>
      <div className="content-page-paragraph">
        Businesses everywhere are relying on iOS and Android smartphones and
        tablets to get work done—at the office, at home, out in the field, and
        everywhere in between. But managing and securing all these devices—both
        corporate-owned and BYOD—takes real know-how.
      </div>
      <div className="content-page-paragraph">
        That’s where TMS comes in. We’re not just another device management
        company. We’re true mobile geeks, 100% focused on giving clients what
        they actually need: easy, reliable, best-in-class security and
        management for every mobile device in their world.
      </div>
      <div className="content-page-section-title">Why Partner with TMS?</div>
      <UnorderedList list={listItems} listName="partners-page" />
      <div className="content-page-section-title">
        Two Ways to Partner with TMS
      </div>
      <div className="content-page-paragraph">
        <div className="bold">1. Become a Referral Partner</div>
        Just send us the introduction. We’ll take it from there—consultation,
        setup, support, everything. You help your clients solve a problem, and
        you get paid for every referral. Simple, hands-off, and profitable.
      </div>
      <div className="content-page-paragraph">
        <div className="bold">
          2. Become a TMS Reseller (White Label Option)
        </div>
        Want to add more value and keep full control of the client relationship?
        With our White Label Reseller program, you get TMS services at a
        wholesale rate. You can brand TMS as your own, mark up the pricing, and
        deliver truly premium mobile management—while building your business and
        your brand.
      </div>
      <div className="content-page-section-title">The Bottom Line</div>
      <div className="content-page-paragraph">
        TMS isn’t just another vendor—we’re a team you’ll actually like working
        with. We truly care about your success, and the success of every client
        you bring our way.
      </div>
      <div className="content-page-paragraph">
        Ready to get started, or have questions about which partnership is the
        best fit? Let’s talk—and let’s win together.
      </div>
    </ContentPage>
  );
}

export default PartnersPage;

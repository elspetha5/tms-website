import ContentPage from "../../components/content-page/content-page";
import UnorderedList from "../../components/unordered-list/unordered-list";

import "./our-story-page.scss";

const keepUpListItems = [
  {
    text: "Security holes and privacy worries.",
  },
  {
    text: "Business data floating around on personal phones and tablets.",
  },
  {
    text: "Teams frustrated by complicated setups or clunky policies.",
  },
];

const stressFreeListItems = [
  {
    text: "We geek out so you don’t have to.",
  },
  {
    text: "We believe mobile management can be painless (even a little fun).",
  },
  {
    text: "And we’re always here to help you get the very best out of your technology.",
  },
];

function OurStoryPage() {
  return (
    <ContentPage title="Our Story">
      <div className="content-page-paragraph">
        We’re just a bunch of geeks—seriously. What brought us together? A deep
        obsession with all things mobile, especially the incredible power of
        smartphones and tablets.
      </div>
      <div className="content-page-paragraph">
        From the earliest iPhones and Androids to today’s lightning-fast,
        ultra-connected devices, we’ve always been fascinated by how mobile
        technology transforms everyday life. Tablets on the couch. Phones in
        your pocket. Devices that let you work, play, and relax anywhere,
        anytime. Our lives (and our workdays) revolve around these handheld
        wonders.
      </div>
      <div className="content-page-paragraph">
        But as these little screens became the command center for modern
        business, we realized most organizations were struggling to keep up:
        <UnorderedList list={keepUpListItems} listName="keep-up" />
        That’s why we built TMS.
      </div>
      <div className="content-page-paragraph">
        We started this company because we genuinely care— not just about
        technology, but about people. We want to see your business succeed. TMS
        exists to make you and your team more efficient and thus, more
        profitable. It’s that simple.
      </div>
      <div className="content-page-paragraph">
        Our passion for smartphones and tablets isn’t just about loving cool
        devices (though we really do). It’s about what those devices let you
        accomplish when everything is smooth, safe, and stress-free.
        <UnorderedList list={stressFreeListItems} listName="stress-free" />
        <div className="content-page-tagline">
          Let us handle the technical headaches, so you can focus on the work
          (and the wins) that matter most.
        </div>
      </div>
    </ContentPage>
  );
}

export default OurStoryPage;

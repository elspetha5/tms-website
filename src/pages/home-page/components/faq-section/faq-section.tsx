import Section from "../../../../components/section/section";
import Collapsible, {
  CollapsibleItem,
} from "../../../../library/collapsible/collapsible";

import "./faq-section.scss";

const initFaqsArr: CollapsibleItem[] = [
  {
    id: "faq1",
    isActive: false,
    label: "What is TMS?",
    content:
      "We are an MSP with exclusive support for iOS and Android platforms. We provide a mobile device lifecycle management solution that helps organizations manage, secure, and streamline the Corporate-owned and BYOD smartphone and tablet devices that touch their environment.",
    height: "0px",
  },
  {
    id: "faq2",
    isActive: false,
    label: "How will you manage my devices exactly?",
    content:
      "Certainly the backbone of remotely managing your fleet will be via an MDM/UEM solution. We support and manage any and all multi-platform MDM/UEM products.",
    height: "0px",
  },
  {
    id: "faq3",
    isActive: false,
    label: 'What is "SMS-Phishing" or "Smishing" and how do you prevent it?',
    content:
      "Smishing is short for SMS-Phishing, which is phishing done through messaging (text, DM, WhatsApp, etc) and not email. Current email and cybersecurity MDR/EDR/XDR, etc. software products do not address on-device smishing for iOS and Android platforms. TMS does this through an app on each managed device.",
    height: "0px",
  },
  {
    id: "faq4",
    isActive: false,
    label: "What does BYOD mean?",
    content:
      "Great question! Let's start with what Bring Your Own Device (BYOD) does not mean. It does not mean that we can monitor, view, or control your device. The main benefits of BYOD are protecting your data, and consolidating your work and home life.",
    height: "0px",
  },
  {
    id: "faq5",
    isActive: false,
    label: "What is the NO DOWNTIME Guarantee?",
    content:
      "Our NO DOWNTIME Guarantee ensures continuous productivity for users. This guarantee hinges on the client maintaining a sufficient spares inventory, fully managed by TMS.",
    height: "0px",
  },
];

function FaqSection() {
  return (
    <div className="faq-section-container">
      <Section id="faqs" title="Frequently asked questions">
        <div className="faq-questions-container">
          <Collapsible arr={initFaqsArr} />
        </div>
      </Section>
    </div>
  );
}

export default FaqSection;

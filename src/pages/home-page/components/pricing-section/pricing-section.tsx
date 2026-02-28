import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";

import Card, { backgroundColors } from "../../../../components/card/card";
import Button from "../../../../library/button/button";
import Section from "../../../../components/section/section";
import { pageRoutes } from "../../../../shared/constants";

import "./pricing-section.scss";

const caveatsArr = [
  "All prices based on 100+ devices managed, are per device/month and all-inclusive",
];

const pricingCardsArr = [
  {
    title: "Starter",
    subtitle:
      "For companies wanting to get their mobile device fleet off to a running start",
    price: (
      <span>
        $49.99<span className="pricing-per-text">/device</span>
      </span>
    ),
    items: [
      "Typically for companies with 1-50 employees",
      "Free device fleet audit",
      "Cellular carrier account setup, management, and full-service TEM procurement provider",
      "Full migration services",
      "All staging services",
      "Real-time nationwide help desk",
      "Full hardware, software, and services support",
      "Device fleet EOL management",
      "Additional fees apply",
    ],
    check: true,
    backgroundColor: backgroundColors.lightGrey,
  },
  {
    title: "Growing",
    subtitle:
      "For companies ready to utilize their mobile fleet and scale to greater heights",
    price: (
      <span>
        $99.99<span className="pricing-per-text">/device</span>
      </span>
    ),
    items: [
      "Typically for companies wtih 50-200 employees",
      "Includes everything from Starter plan",
      "On-device security, network compliance and SMS-phishing prevention",
      "Device spares inventory management",
      "Onboarding included",
      "Additional fees apply",
    ],
    check: false,
    backgroundColor: backgroundColors.lightGrey,
  },
  {
    title: "Pro",
    subtitle:
      "Our MOST POPULAR option is for companies that know the value of partnerships with the right people",
    price: (
      <span>
        $149.99<span className="pricing-per-text">/seat</span>
      </span>
    ),
    items: [
      "Typically for companies wtih 200+ employees",
      "Includes everything from Starter and Growing plans",
      "On-device real-time backup and recovery",
      "Travel and client on-site",
      "Flat rate with no additional fees, we cover everything!",
    ],
    check: false,
    backgroundColor: backgroundColors.blue,
  },
];

function PricingSection() {
  return (
    <div className="pricing-section-container">
      <Section id="pricing" title="Pricing">
        <div className="pricing-content-container">
          <div className="pricing-grid-container">
            {pricingCardsArr.map((c, i) => (
              <Card
                key={c.title}
                backgroundColor={c.backgroundColor}
                className="pricing-card-container"
              >
                <div>
                  <div className="pricing-card-title">{c.title}</div>
                  <div className="pricing-card-subtitle">{c.subtitle}</div>
                  <div className="pricing-card-price">
                    <div>{c.price}</div>
                  </div>
                  {c.items.map((item) => (
                    <div className="pricing-card-item" key={item}>
                      <div
                        className={`pricing-check-icon ${i === 2 ? "pricing-check-icon-white" : ""}`}
                      >
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </div>
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
                <Button
                  className="pricing-cta bold"
                  to={pageRoutes.getStarted}
                  isPrimary={i < 2}
                  isSecondary={i === 2}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
          {/* <div className="pricing-caveats-container">
          {caveatsArr.map((c) => (
            <div className="pricing-caveat" key={c}>{`> ${c}`}</div>
          ))}
        </div> */}
        </div>
      </Section>
    </div>
  );
}

export default PricingSection;

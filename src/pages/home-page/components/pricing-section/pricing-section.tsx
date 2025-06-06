import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons/faSquareCheck";
import { faSquare } from "@fortawesome/free-regular-svg-icons/faSquare";

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
    title: "Simple",
    subtitle:
      "We manage the full lifecycle of your devices with our turn-key system",
    price: "$24.99",
    items: [
      "Free device fleet audit",
      "Cellular carrier account setup, management, and full-service TEM procurement provider",
      "Full migration services",
      "All staging services",
      "Real-time nationwide help desk",
      "Full hardware, software, and services support",
      "Device spares inventory management",
      "Device fleet EOL management",
      "And more!",
    ],
    check: true,
    backgroundColor: backgroundColors.black,
  },
  {
    title: "Add ons",
    subtitle: "What about device security and data backup?",
    price: "+$7.99",
    items: [
      "On-device security and SMS-phishing prevention",
      "On-device real-time backup and recovery",
      "24/7/365 support",
    ],
    check: false,
    backgroundColor: backgroundColors.lightGrey,
  },
];

function PricingSection() {
  return (
    <Section id="pricing" title="Pricing">
      <div className="pricing-content-container">
        <div className="pricing-grid-container">
          {pricingCardsArr.map((c) => (
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
                    <div className="pricing-check-icon">
                      <FontAwesomeIcon
                        icon={c.check ? faSquareCheck : faSquare}
                      />
                    </div>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
              <Button
                className="pricing-cta bold"
                to={pageRoutes.getStarted}
                isPrimary
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
        <div className="pricing-caveats-container">
          {caveatsArr.map((c) => (
            <div className="pricing-caveat" key={c}>{`> ${c}`}</div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default PricingSection;

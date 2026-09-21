import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";

import Card, { backgroundColors } from "../../../../components/card/card";
import Button from "../../../../library/button/button";
import Section from "../../../../components/section/section";
import { pageRoutes } from "../../../../shared/constants";

import "./pricing-section.scss";

const caveatsArr = [
  "All prices are per month and based on a minimum of 100 devices or seats",
  "*Travel to, from and on-site at client and projects not included",
];

const pricingCardsArr = [
  {
    title: "Starter",
    subtitle:
      "For companies wanting to get their mobile device fleet off to a running start",
    price: (
      <span>
        $49<span className="pricing-per-text">/device</span>
      </span>
    ),
    items: [
      "Free device fleet audit",
      "Device lifecycle management",
      "MDM/UEM setup and management",
      "Cellular carrier account setup, management, and full-service TEM procurement provider",
      "Full migration services",
      "All kitting and staging services",
      "Real-time nationwide help desk",
      "Full hardware, software, and services support",
      "Free ground shipping",
      "Device fleet EOL management",
      "Additional fees apply",
    ],
    backgroundColor: backgroundColors.black,
  },
  {
    title: "Growth",
    subtitle: "For companies ready to utilize their mobile fleet and scale",
    price: (
      <span>
        $99<span className="pricing-per-text">/seat</span>
      </span>
    ),
    items: [
      "Includes everything from Starter plan",
      "Smishing protection. Benefits: Real-time on-device security, network compliance and more",
      "Device spares inventory management",
      "Onboarding included",
      "Free 2-day shipping",
      "Additional fees apply",
    ],
    backgroundColor: backgroundColors.lightGrey,
    badge: "MOST POPULAR",
  },
  {
    title: "Pro",
    subtitle:
      "For companies that know the value of partnerships with the right people",
    price: (
      <span>
        $149<span className="pricing-per-text">/seat</span>
      </span>
    ),
    items: [
      "Includes everything from Growth plan",
      "On-device real-time backup and recovery",
      "Hardware repairs included",
      "Most device accessories included",
      "Free overnight shipping",
      "24/7 support available",
      "Flat rate with no additional fees*",
    ],
    backgroundColor: backgroundColors.blue,
    badge: "BEST VALUE",
  },
  {
    title: "Enterprise",
    subtitle: "For companies at scale needing everything",
    price: (
      <span className="pricing-enterprise-price">Inquire for pricing</span>
    ),
    items: [
      "Includes everything from Pro plan",
      "Every OS supported",
      "Every device supported",
      "Full imaging services",
      "Embedded on-site at your location(s)",
      "Network support",
      "Full software support",
      "Full cybersecurity support",
      "Full licensing support",
      "Full cloud support",
      "Full backbone support",
      "And more!",
    ],
    backgroundColor: backgroundColors.white,
    badge: "FULL SERVICE",
  },
];

function PricingSection() {
  return (
    <div className="pricing-section-container">
      <Section id="pricing" title="Plans">
        <div className="pricing-content-container">
          <div className="pricing-grid-container">
            {pricingCardsArr.map((c, i) => (
              <Card
                key={c.title}
                backgroundColor={c.backgroundColor}
                badge={c.badge}
                className="pricing-card-container"
              >
                <div>
                  <div
                    className={`pricing-card-title ${
                      c.title === "Enterprise" ? "pricing-enterprise-title" : ""
                    }`}
                  >
                    {c.title}
                  </div>
                  <div className="pricing-card-subtitle">{c.subtitle}</div>
                  <div
                    className={`pricing-card-price ${
                      c.title === "Enterprise"
                        ? "pricing-card-enterprise-price"
                        : ""
                    }`}
                  >
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
                {c.title === "Enterprise" ? (
                  <Button
                    className="pricing-cta bold"
                    to={pageRoutes.getStarted}
                    isPrimary
                  >
                    Request Pricing
                  </Button>
                ) : (
                  <Button
                    className="pricing-cta bold"
                    to={pageRoutes.getStarted}
                    isBlack={i === 2}
                    isPrimary={i === 1}
                    isSecondary={i === 0}
                  >
                    Get Started
                  </Button>
                )}
              </Card>
            ))}
          </div>
          <div className="pricing-caveats-container">
            {caveatsArr.map((c) => (
              <div
                className="pricing-caveat"
                key={c}
              >{`${c.startsWith("*") ? "" : ">"} ${c}`}</div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default PricingSection;

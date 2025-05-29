import Card, { backgroundColors } from "../../../../components/card/card";
import Section from "../../../../components/section/section";

import "./testimonials-section.scss";

const testimonialsArr = [
  {
    company: "ECD Systems/Pavion",
    name: "Anson, COO",
    quote:
      "The TMS process is a game changer. We never have to think about our mobile devices anymore because they handle it all.",
  },
  {
    company: "Alpha Towing & Recovery",
    name: "Fernando, General Manager",
    quote:
      "TMS handled the arduous process of onboarding all of our currently-deployed devices like a pro. No hiccups or downtime in our daily production. We also love how they setup our MDM and devices. They have now simplified and streamlined only a few of the native apps. And now they handle all of the daily management and help desk for us.",
  },
  {
    company: "Goettl",
    name: "Gary, Fleet Manager",
    quote:
      "The guys at TMS have cleaned up our fleet and now manage and maintain it for us. They are doing a great job!",
  },
];

function TestimonialsSection() {
  return (
    <Section title="Why companies choose TMS...">
      <div className="testimonials-grid-container">
        {testimonialsArr.map((t) => (
          <Card key={t.name}>
            <div>"{t.quote}"</div>
            <div className="testimonials-name">{t.name}</div>
            <div className="testimonials-company">{t.company}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default TestimonialsSection;

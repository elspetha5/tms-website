import Section from "../../../../components/section/section";
import UnorderedList from "../../../../components/unordered-list/unordered-list";

import "./emm-msp-section.scss";

const emmMspSavingsArr = [
  {
    title: 'Zero-Touch Deployment (The "Box to Desk" Experience)',
    subtitle:
      "Without an MSP, setting up a new device involves an IT person sitting at a desk, manually installing apps, and configuring Wi-Fi for 45 minutes per device.",
    bulletArr: [
      {
        text: (
          <div>
            <strong>The MSP Value:</strong> We use automated enrollment (like
            Apple Business Manager or Android Zero-Touch).
          </div>
        ),
      },
      {
        text: (
          <div>
            <strong>The Result:</strong> Employees receive a shrink-wrapped
            device, log in, and all corporate policies and apps download
            automatically. Your IT team regains dozens of hours every month.
          </div>
        ),
      },
    ],
  },
  {
    title: 'Closing the "Security Gap"',
    subtitle: `Security isn't a one-time setup; it’s constant vigilance. An MSP ensures that every device in the field is a "known entity."`,
    bulletArr: [
      {
        text: (
          <div>
            <strong>Instant Lockdown:</strong> If a phone is lost in a taxi, an
            MSP can remote-wipe it in seconds, protecting corporate data.
          </div>
        ),
      },
      {
        text: (
          <div>
            <strong>Compliance:</strong> We ensure 100% of devices are encrypted
            and running the latest OS patches. One data breach from an unpatched
            tablet can cost more than five years of MSP fees.
          </div>
        ),
      },
    ],
  },
  {
    title: "Predictable Costs vs. Variable Chaos",
    subtitle:
      'Managing mobile devices in-house often leads to "surprise" expenses—rushed overnight shipping for replacements, emergency security audits, or hiring more staff as you grow.',
    bulletArr: [
      {
        text: (
          <div>
            <strong>Flat-Rate Pricing:</strong> An MSP provides a predictable,
            per-device monthly fee.
          </div>
        ),
      },
      {
        text: (
          <div>
            <strong>Scalability:</strong> Whether you have 50 devices or 5,000,
            your overhead remains lean because the MSP provides the
            infrastructure to scale instantly.
          </div>
        ),
      },
    ],
  },
  {
    title: "Specialized Expertise (Without the Six-Figure Salary)",
    subtitle: "",
    bulletArr: [
      {
        text: (
          <div>
            <strong>Deep Bench:</strong> By hiring an MSP, you aren't just
            getting a tool; you're getting a team of experts who live and
            breathe mobile ecosystem updates.
          </div>
        ),
      },
      {
        text: (
          <div>
            <strong>Policy Optimization:</strong> We know the "best practices"
            for kiosk modes, app blacklisting, and data usage caps that prevent
            massive cellular overage bills.
          </div>
        ),
      },
    ],
  },
];

const roiTableArr = [
  {
    factor: "Setup Time",
    diy: "30–60 mins per device",
    msp: "< 5 mins (Automated)",
  },
  {
    factor: "Security",
    diy: "Reactive (Patch when possible)",
    msp: "Proactive (Automated updates)",
  },
  {
    factor: "Help Desk",
    diy: "Strains internal IT",
    msp: "Dedicated mobile support",
  },
  {
    factor: "Visibility",
    diy: "Spreadsheets & Guesswork",
    msp: "Real-time Global Dashboard",
  },
];

function EmmMspSection() {
  return (
    <div className="emm-msp-section-container">
      <Section id="emm-msp" title="What can an EMM MSP save you?">
        <div className="emm-msp-content-container">
          <div className="emm-msp-section-subtitle">
            When a company manages its own fleet, they aren’t just paying for
            software; they are paying in lost productivity, security gaps, and
            "hidden" IT labor. Here is a breakdown of why an Enterprise Mobility
            Management (EMM) Managed Service Provider (MSP) is worth the
            investment.
          </div>
          <div className="emm-msp-points-container">
            {emmMspSavingsArr.map((section) => (
              <div className="emm-msp-list-container" key={section.title}>
                <div className="emm-msp-list-title">{section.title}</div>
                <div className="emm-msp-list-subtitle">{section.subtitle}</div>
                <UnorderedList list={section.bulletArr} listName="emm-msp" />
              </div>
            ))}
          </div>

          <div className="emm-msp-roi-title">The ROI Snapshot</div>
          <table className="emm-msp-table-container">
            <thead>
              <tr className="emm-msp-table-head-tr">
                <th className="emm-msp-cell">Factor</th>
                <th className="emm-msp-cell">DIY Management</th>
                <th className="emm-msp-cell">EMM MSP Model</th>
              </tr>
            </thead>
            <tbody>
              {roiTableArr.map((row, i) => (
                <tr className="emm-msp-table-body-tr" key={row.factor}>
                  <td className="emm-msp-cell emm-msp-factor-cell">
                    {row.factor}
                  </td>
                  <td className="emm-msp-cell">{row.diy}</td>
                  <td className="emm-msp-cell emm-msp-tms-cell">{row.msp}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="emm-msp-bottom-line">
            <strong>The Bottom Line:</strong> An EMM MSP doesn't just manage
            phones; it buys back your IT team's time so they can focus on
            high-value projects that actually grow the business.
          </div>
        </div>
      </Section>
    </div>
  );
}

export default EmmMspSection;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTicket,
  faReceipt,
  faWarehouse,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../../components/card/card";
import Section from "../../components/section/section";

import "./client-dashboard.scss";

const dashboardButtons = [
  {
    label: "Support Tickets",
    icon: faTicket,
  },
  {
    label: "Spares Inventory",
    icon: faWarehouse,
  },
  {
    label: "Invoices",
    icon: faReceipt,
  },
  {
    label: "Contract",
    icon: faFileContract,
  },
];

function ClientDashboard() {
  return (
    <Section title="Dashboard">
      <div>ClientInfo</div>
      <div className="dashboard-card-container">
        {dashboardButtons.map((button) => (
          <Card key={button.label} className="dashboard-card">
            <FontAwesomeIcon className="dashboard-icon" icon={button.icon} />
            <div>{button.label}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default ClientDashboard;

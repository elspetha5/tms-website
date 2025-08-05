import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTicket,
  faReceipt,
  faWarehouse,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import Card from "../../components/card/card";
import Section from "../../components/section/section";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner";

import { getCompanyInfo } from "./dashboard-queries";

import { useAuth } from "../../shared/contexts/auth-context";
import { getTenantId } from "../../shared/utils";
import { CompanyInfo, UseAuth } from "../../shared/types";
import { pageRoutes } from "../../shared/constants";

import "./dashboard.scss";

const dashboardButtons = [
  {
    label: "Support Tickets",
    icon: faTicket,
    link: "/",
  },
  {
    label: "Spares Inventory",
    icon: faWarehouse,
    link: "/",
  },
  {
    label: "Invoices",
    icon: faReceipt,
    link: pageRoutes.invoices,
  },
  {
    label: "Contract",
    icon: faFileContract,
    link: "/",
  },
];

function Dashboard() {
  const { currentUser } = useAuth() as UseAuth;
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>();
  const navigate = useNavigate();

  async function getInfo() {
    const info = await getCompanyInfo(getTenantId(currentUser));
    setCompanyInfo(info);
  }

  useEffect(() => {
    if (currentUser) {
      getInfo();
    }
  }, [currentUser]);

  return (
    <Section title="Dashboard">
      {companyInfo ? (
        <div>
          <div className="dash-logo-container">
            <img
              className={`dash-logo ${
                companyInfo?.name.includes("Alpha") ? "alpha-logo" : ""
              }`}
              src={companyInfo?.logo}
              alt="company logo"
            />
          </div>
          <div className="dash-card-container">
            {dashboardButtons.map((button) => (
              <Card
                key={button.label}
                className="dash-card"
                onClick={() => navigate(button.link)}
              >
                <FontAwesomeIcon className="dash-icon" icon={button.icon} />
                <div>{button.label}</div>
              </Card>
            ))}
          </div>
          <div className="dash-info-container">
            <div className="dash-info-name">{companyInfo?.name}</div>
            <div className="dash-info-devices">
              # of devices: <b>{companyInfo?.numOfDevices}</b>
            </div>
            <div>
              Support level: <b>{companyInfo?.supportLevelText}</b>
            </div>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </Section>
  );
}

export default Dashboard;

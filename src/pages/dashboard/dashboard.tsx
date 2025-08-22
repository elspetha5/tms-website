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

import { getCompanyInfo } from "../../shared/queries";
import { useAuth } from "../../shared/contexts/auth-context";
import { getTenantId } from "../../shared/utils";
import { CompanyInfo, UseAuth } from "../../shared/types";
import { pageRoutes, storageKeys } from "../../shared/constants";

import "./dashboard.scss";

function Dashboard() {
  const { currentUser } = useAuth() as UseAuth;
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>();
  const navigate = useNavigate();

  const dashboardButtons = [
    {
      label: "Support Tickets",
      icon: faTicket,
      link: pageRoutes.privateRoutes.supportTickets,
    },
    {
      disabled: !companyInfo?.hasSpares,
      label: "Spares Inventory",
      icon: faWarehouse,
      link: pageRoutes.privateRoutes.sparesInventory,
    },
    {
      label: "Invoices",
      icon: faReceipt,
      link: pageRoutes.privateRoutes.invoices,
    },
    {
      disabled: !Boolean(companyInfo?.contractUrl),
      label: "Contract",
      icon: faFileContract,
      href: companyInfo?.contractUrl,
    },
  ];

  async function getInfo() {
    const storedUser = sessionStorage.getItem(storageKeys.companyInfo);
    const newCompanyInfo = storedUser ? JSON.parse(storedUser) : null;

    if (newCompanyInfo) {
      setCompanyInfo(newCompanyInfo);
    }

    const info = await getCompanyInfo(getTenantId(currentUser));
    if (!newCompanyInfo || newCompanyInfo.name !== info.name) {
      setCompanyInfo(info);
      sessionStorage.setItem(storageKeys.companyInfo, JSON.stringify(info));
    }
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
            {dashboardButtons.map((button) => {
              if (button.href) {
                return (
                  <a
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card
                      key={button.label}
                      className={`dash-card${
                        button.disabled ? "--disabled" : ""
                      }`}
                      disabled={button.disabled}
                    >
                      <FontAwesomeIcon
                        className="dash-icon"
                        icon={button.icon}
                      />
                      <div>{button.label}</div>
                    </Card>
                  </a>
                );
              } else {
                return (
                  <Card
                    key={button.label}
                    className={`dash-card${
                      button.disabled ? "--disabled" : ""
                    }`}
                    disabled={button.disabled}
                    onClick={
                      button.link && !button.disabled
                        ? () => navigate(button.link)
                        : undefined
                    }
                  >
                    <FontAwesomeIcon className="dash-icon" icon={button.icon} />
                    <div>{button.label}</div>
                  </Card>
                );
              }
            })}
          </div>
          <div className="dash-info-container">
            <div className="dash-info-name">{companyInfo?.name}</div>
            <div className="dash-info-devices">
              Total Devices Managed: <b>{companyInfo?.numOfDevices}</b>
            </div>
            <div>
              Support Level: <b>{companyInfo?.supportLevelText}</b>
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

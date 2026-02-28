import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleCheck,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import Collapsible, {
  CollapsibleItem,
  CollapsibleStyle,
} from "../../library/collapsible/collapsible";
import Section from "../../components/section/section";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner";

import { useAuth } from "../../shared/contexts/auth-context";
import { UseAuth } from "../../shared/types";
import { dataTypes, getCompanyData } from "../../shared/queries";
import { getTenantId } from "../../shared/utils";

import "./support-tickets.scss";

function SupportTickets() {
  const { currentUser } = useAuth() as UseAuth;
  const [selectedTab, setSelectedTab] = useState<"pending" | "resolved">(
    "pending",
  );
  const [ticketsArr, setTicketsArr] = useState<CollapsibleItem[]>();
  const [isLoading, setIsLoading] = useState(true);

  async function getTickets(ticketType: "pending" | "resolved") {
    setIsLoading(true);
    const data = await getCompanyData(
      dataTypes.supportTickets,
      getTenantId(currentUser),
      ticketType,
    );

    if (data) {
      const currTicketArr: CollapsibleItem[] = [];

      data.forEach((ticket) => {
        const status = ticket["Status"];
        const ticketObj = {
          content: (
            <div className="support-tickets-info-container">
              {Object.keys(ticket).map((key) => (
                <div key={key}>
                  <b>{key}:</b> {ticket[key]}
                </div>
              ))}
            </div>
          ),
          height: "0px",
          id: ticket["Request #"],
          isActive: false,
          label: (
            <span className="support-tickets-label-text">
              <FontAwesomeIcon
                className={`support-tickets-icon-${status === "Resolved" ? "resolved" : status === "New" ? "new" : "in-progress"}`}
                icon={
                  status === "Resolved"
                    ? faCircleCheck
                    : status === "New"
                      ? faCircle
                      : faSpinner
                }
              />
              <span>
                <span className="support-tickets-label-date">
                  {ticket["Date"]}
                </span>{" "}
                {ticket["Name"]}
              </span>
            </span>
          ),
        };

        currTicketArr.push(ticketObj);
      });

      setTicketsArr(currTicketArr);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (currentUser) {
      getTickets("pending");
    }
  }, [currentUser]);

  return (
    <Section title="Support Tickets">
      <div className="support-tickets-collapsible-container">
        <div className="support-tickets-tab-container">
          <button
            className={`support-tickets-tab${selectedTab === "pending" ? "-selected" : ""}`}
            onClick={() => {
              getTickets("pending");
              setSelectedTab("pending");
            }}
          >
            Pending
          </button>
          <button
            className={`support-tickets-tab${selectedTab === "resolved" ? "-selected" : ""}`}
            onClick={() => {
              getTickets("resolved");
              setSelectedTab("resolved");
            }}
          >
            Resolved
          </button>
        </div>
        {!isLoading ? (
          <>
            {ticketsArr && ticketsArr.length > 0 ? (
              <Collapsible arr={ticketsArr} style={CollapsibleStyle.small} />
            ) : (
              <div className="support-tickets-no-ticket-msg">
                <div>There are currently no pending support tickets.</div>
                <div>If you believe this is an error, please contact us.</div>
              </div>
            )}
          </>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </Section>
  );
}

export default SupportTickets;

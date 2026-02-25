import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";

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
  const [ticketsArr, setTicketsArr] = useState<CollapsibleItem[]>();
  const [isLoading, setIsLoading] = useState(true);

  async function getTickets() {
    const data = await getCompanyData(
      dataTypes.supportTickets,
      getTenantId(currentUser),
    );

    if (data) {
      const currTicketsArr: CollapsibleItem[] = [];

      data.forEach((ticket) => {
        currTicketsArr.push({
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
                className={`support-tickets-icon-${ticket["Status"] === "New" ? "new" : "in-progress"}`}
                icon={ticket["Status"] === "New" ? faCircle : faSpinner}
              />
              <span>
                <span className="support-tickets-label-date">
                  {ticket["Date"]}
                </span>{" "}
                {ticket["Name"]}
              </span>
            </span>
          ),
        });
      });

      setTicketsArr(currTicketsArr);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (currentUser) {
      getTickets();
    }
  }, [currentUser]);

  return (
    <Section title="Support Tickets">
      <div className="support-tickets-collapsible-container">
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

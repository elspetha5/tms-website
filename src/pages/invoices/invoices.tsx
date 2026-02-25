import { useEffect, useState } from "react";

import Section from "../../components/section/section";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner";
import Collapsible, {
  CollapsibleItem,
} from "../../library/collapsible/collapsible";
import Button from "../../library/button/button";

import { dataTypes, getCompanyData } from "../../shared/queries";
import { useAuth } from "../../shared/contexts/auth-context";
import { UseAuth } from "../../shared/types";
import { getTenantId } from "../../shared/utils";

import "./invoices.scss";

interface InvoiceLink {
  name: string;
  url: string;
}

function Invoices() {
  const { currentUser } = useAuth() as UseAuth;
  const [hasNoInvoices, setHasNoInvoices] = useState(false);
  const [invoices, setInvoices] = useState();
  const [displayNode, setDisplayNode] = useState<React.ReactNode>();

  async function getInvoices() {
    const data = await getCompanyData(
      dataTypes.statements,
      getTenantId(currentUser),
    );
    if (data) {
      setInvoices(data);
    } else {
      setHasNoInvoices(true);
    }
  }

  useEffect(() => {
    if (currentUser) {
      getInvoices();
    }
  }, [currentUser]);

  useEffect(() => {
    if (invoices) {
      const simpleInvoiceArr: CollapsibleItem[] = [];
      const complexInvoiceArr: React.ReactNode[] = [];

      Object.keys(invoices).forEach((item) => {
        const itemContent: any[] = invoices[item];

        if (Array.isArray(itemContent)) {
          const collapsibleContent = (
            <div className="invoices-link-container">
              {itemContent.map((link: InvoiceLink) => (
                <Button
                  key={link.name}
                  href={link.url}
                  className="invoices-link"
                >
                  {link.name}
                </Button>
              ))}
            </div>
          );

          simpleInvoiceArr.push({
            content: collapsibleContent,
            height: "0px",
            id: item,
            isActive: false,
            label: `20${item}`,
          });
        } else {
          const innerInvoiceArr: CollapsibleItem[] = [];
          const innerInvoices = invoices[item];
          Object.keys(innerInvoices).forEach((innerItem) => {
            const innerItemContent: any[] = innerInvoices[innerItem];
            const innerCollapsibleContent = (
              <div className="invoices-link-container">
                {innerItemContent.map((link: InvoiceLink) => (
                  <Button
                    key={link.name}
                    href={link.url}
                    className="invoices-link"
                  >
                    {link.name}
                  </Button>
                ))}
              </div>
            );

            innerInvoiceArr.push({
              content: innerCollapsibleContent,
              height: "0px",
              id: innerItem,
              isActive: false,
              label: `20${innerItem}`,
            });
          });

          complexInvoiceArr.push(
            <div>
              <div className="invoices-by-company-name">{item}</div>
              <Collapsible arr={innerInvoiceArr} />
            </div>,
          );
        }
      });

      if (simpleInvoiceArr.length > 0) {
        setDisplayNode(<Collapsible arr={simpleInvoiceArr} />);
      } else if (complexInvoiceArr.length > 0) {
        setDisplayNode(
          <div className="invoices-by-company-container">
            {complexInvoiceArr.map((c) => c)}
          </div>,
        );
      }
    }
  }, [invoices]);

  return (
    <Section title="Invoices">
      {displayNode ? (
        <div className="invoices-collapsible-container">{displayNode}</div>
      ) : hasNoInvoices ? (
        <div>There are no invoices for your company yet.</div>
      ) : (
        <LoadingSpinner />
      )}
    </Section>
  );
}

export default Invoices;

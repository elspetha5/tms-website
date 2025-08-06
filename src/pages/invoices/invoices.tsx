import { useEffect, useState } from "react";

import { getStatments } from "./invoices-queries";

import Section from "../../components/section/section";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner";
import { useAuth } from "../../shared/contexts/auth-context";
import { UseAuth } from "../../shared/types";
import { getTenantId } from "../../shared/utils";

function Invoices() {
  const { currentUser } = useAuth() as UseAuth;
  const [invoices, setInvoices] = useState();

  async function getInvoices() {
    const data = await getStatments(getTenantId(currentUser));
    setInvoices(data);
  }

  useEffect(() => {
    if (currentUser) {
      getInvoices();
    }
  }, [currentUser]);

  useEffect(() => {
    if (invoices) {
      console.log(invoices);
    }
  }, [invoices]);

  return (
    <Section title="Invoices">
      {invoices ? <div>invoices</div> : <LoadingSpinner />}
    </Section>
  );
}

export default Invoices;

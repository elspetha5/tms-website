import { useEffect } from "react";
import { useAuth } from "../../shared/contexts/auth-context";
import { UseAuth } from "../../shared/types";
import { getTenantId } from "../../shared/utils";
import { getCompanyInvoices } from "./invoices-queries";

function Invoices() {
  const { currentUser } = useAuth() as UseAuth;

  async function getInvoices() {
    const invoices = await getCompanyInvoices(getTenantId(currentUser));
    console.log(invoices);
  }

  useEffect(() => {
    if (currentUser) {
      getInvoices();
    }
  }, [currentUser]);

  return <div>invoices</div>;
}

export default Invoices;

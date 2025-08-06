import { Navigate } from "react-router-dom";
import { User } from "firebase/auth";

import { useAuth } from "../../shared/contexts/auth-context";
import { UseAuth } from "../../shared/types";

import "./invoice-form.scss";

function InvoiceForm() {
  const { currentUser } = useAuth() as UseAuth;
  const isTmsUser = currentUser
    ? Boolean(
        currentUser.tenantId === "tms-group-3ovbh" ||
          currentUser.tenantId === null
      )
    : false;

  return !isTmsUser ? <Navigate to="/" replace /> : <div>invoice form</div>;
}

export default InvoiceForm;

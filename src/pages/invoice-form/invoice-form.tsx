import { Navigate } from "react-router-dom";
import { User } from "firebase/auth";

import { useAuth } from "../../shared/contexts/auth-context";
import { users } from "../../shared/users";

import "./invoice-form.scss";

function InvoiceForm() {
  const { currentUser } = useAuth() as { currentUser: User | null };
  console.log(currentUser);
  const isTmsUser = currentUser
    ? Boolean(users.TmsUsers.find((id) => id === currentUser.uid)?.[0])
    : false;

  return !isTmsUser ? <Navigate to="/" replace /> : <div>invoice form</div>;
}

export default InvoiceForm;

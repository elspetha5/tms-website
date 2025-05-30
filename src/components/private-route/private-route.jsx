import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../shared/contexts/auth-context";

function PrivateRoute() {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;

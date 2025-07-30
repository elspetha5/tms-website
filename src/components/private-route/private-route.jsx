import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../shared/contexts/auth-context";
import { pageRoutes } from "../../shared/constants";
import Section from "../section/section";

function PrivateRoute() {
  const { currentUser, loading, isAuthChanging } = useAuth();

  if (loading || isAuthChanging) {
    return <Section title="Checking auth..." />;
  }

  return currentUser ? <Outlet /> : <Navigate to={pageRoutes.login} replace />;
}

export default PrivateRoute;

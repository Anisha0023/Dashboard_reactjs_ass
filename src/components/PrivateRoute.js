import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/form" />;
};

export default PrivateRoute;

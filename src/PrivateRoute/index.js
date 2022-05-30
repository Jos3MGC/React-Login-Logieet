import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../UserProvider";

const PrivateRoute = ({ children }) => {
  const { id } = useUser();
  const location = useLocation();

  if (!id) {
    return <Navigate to="/Logieet" replace state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;

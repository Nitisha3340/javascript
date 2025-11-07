import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem("user") || "null");
  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default RequireAuth;

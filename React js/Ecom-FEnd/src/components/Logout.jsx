import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    navigate("/signin");
  }, [navigate]);

  return null;
};

export default Logout;
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, adminOnly }) => {
  const storedToken = localStorage.getItem("accessToken");
  const adminToken = localStorage.getItem("admin");

  if (adminOnly) {
    if (!adminToken) {
      return <Navigate to="/admin/login" replace />;
    }
  } else {
    if (!storedToken) {
      return <Navigate to="/login" replace />;
    }
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  adminOnly: PropTypes.bool,
};

export default ProtectedRoute;

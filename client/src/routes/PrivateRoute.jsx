import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ImSpinner4 } from "react-icons/im";


const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
      return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ImSpinner4 size={40} className="text-green-500 animate-spin " />
        </div>
      );
    }

    if (user) {
      return children;
    }
    return (
      <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
};
export default PrivateRoute;

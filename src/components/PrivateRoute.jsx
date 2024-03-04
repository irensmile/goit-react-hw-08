import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"

const PrivateRoute = ({component: Component, redirectTo='/'}) => {
    const {isLoggedIn, isLoading} = useAuth();
    const shouldRedirect = !isLoggedIn && !isLoading;
    console.log(isLoggedIn, isLoading);
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component
}

export default PrivateRoute;
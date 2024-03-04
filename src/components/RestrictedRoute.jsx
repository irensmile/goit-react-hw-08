import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"

const RestrictedRoute = ({component, redirectTo='/'}) => {
    const {isLoggedIn} = useAuth();
    console.log('Is logged in: ', isLoggedIn);
    console.log('Rendering Resticted route', isLoggedIn);
    return isLoggedIn ? <Navigate to={redirectTo} /> : component
}

export default RestrictedRoute;
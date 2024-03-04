import { useSelector } from "react-redux";
import { getIsLoadingSelector, getIsLoggedInSelector, getUserSelector } from "../redux/auth/selectors";

const useAuth = () => {
    const isLoggedIn = useSelector(getIsLoggedInSelector);
    const isLoading = useSelector(getIsLoadingSelector);
    const user = useSelector(getUserSelector);
    return {
        isLoggedIn,
        isLoading,
        user,
    }
}

export default useAuth;
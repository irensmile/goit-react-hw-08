import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from './AppBar.module.css'
import clsx from "clsx";

const buildLinkClass = ({isActive}) =>(
    clsx(css.link, isActive && css.active)
)

const AppBar = () => {
    const { isLoggedIn, user } = useAuth();
    const dispatch = useDispatch();
    return (
        <div className={css.items}>
            <div className={css.subitems}>
                <NavLink to="/" className={buildLinkClass}>
                    Home
                </NavLink>
                {isLoggedIn && 
                    <NavLink to="/phonebook" className={buildLinkClass}>
                        Phone Book
                    </NavLink>
                }
            </div>
            <div className={css.subitems}>
                {isLoggedIn && <div>Hello, {user}!</div>}
                {isLoggedIn && <button type="button" className={css.logout} 
                    onClick={() => dispatch(logout())}>Logout</button>}
                {!isLoggedIn && <NavLink to="/login" className={buildLinkClass}>Log In</NavLink>}
                {!isLoggedIn && <NavLink to="/register" className={buildLinkClass}>Register</NavLink>}
            </div>
        </div>
)}

export default AppBar;
import React, {useContext} from "react";
import "./topbar.css";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/auth.context";

export const Topbar = () => {
    const context = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem('user');
        context?.addUser(null)
        context?.logout();
    };

    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><NavLink className="link" to="/"><i className="topIcon fa-solid fa-house"></i></NavLink>
                    </li>
                    <li className="topListItem"><NavLink className="link" to="/kontakt">KONTAKT</NavLink></li>
                    <li className="topListItem"><NavLink className="link" to="/add-post">DODAJ ARTYKUŁ</NavLink></li>
                    <li className="topListItem" onClick={handleLogout}>{context?.user && "WYLOGUJ"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    context?.user ? (

                        <img
                            className="topImg"
                            src={context.user.profilePicture}
                            alt=""
                        />
                    ) : (
                        <ul className="topList">
                            <li className="topListItem"><NavLink className="link" to="/login">ZALOGUJ</NavLink></li>
                            <li className="topListItem"><NavLink className="link" to="/register">REJESTRACJA</NavLink></li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
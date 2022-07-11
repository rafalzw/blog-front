import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/auth.context";
import {apiUrl} from "../../config/api";
import "./topbar.css";

export const Topbar = () => {
    const context = useContext(AuthContext);
    const publicFolder = `${apiUrl}/user-photos/`;

    const handleLogout = () => {
        localStorage.removeItem('user');
        context?.addUser(null);
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
                    <li className="topListItem"><NavLink className="link" to="/"><i
                        className="topIcon fa-solid fa-house"></i></NavLink>
                    </li>
                    <li className="topListItem"><NavLink className="link" to="/kontakt">KONTAKT</NavLink></li>
                    <li className="topListItem"><NavLink className="link" to="/add-post">DODAJ ARTYKUŁ</NavLink></li>
                    <li className="topListItem" onClick={handleLogout}>{context?.isAuthenticated && "WYLOGUJ"}</li>
                </ul>
            </div>
            <div className="topRight">
                {context?.isAuthenticated ? (
                    <NavLink to="/settings">
                        {context.user.profilePicture ? (
                            <img
                                className="topImg"
                                src={publicFolder + context.user.profilePicture}
                                alt=""
                            />
                        ) : (
                            <i className="fa-solid fa-user-pen"></i>
                        )}
                    </NavLink>
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
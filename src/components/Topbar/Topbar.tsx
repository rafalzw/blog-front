import React from "react";
import {NavLink} from "react-router-dom";
import {apiUrl} from "../../config/api";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {logout} from "../../redux/userSlice";
import "./topbar.css";

export const Topbar = () => {
    const {user} = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const publicFolder = `${apiUrl}/user-photos/`;

    const handleLogout = () => {
        dispatch(logout())
    };

    return (
        <div className="top">
            <div className="topLeft">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i
                    className="topIcon fa-brands fa-facebook-square"></i></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i
                    className="topIcon fa-brands fa-twitter-square"></i></a>
                <a href="https://www.instagram.com
" target="_blank" rel="noreferrer"><i
                    className="topIcon fa-brands fa-instagram-square"></i></a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><NavLink className="link" to="/"><i
                        className="topIcon fa-solid fa-house"></i></NavLink>
                    </li>
                    <li className="topListItem"><NavLink className="link" to="/kontakt">KONTAKT</NavLink></li>
                    <li className="topListItem"><NavLink className="link" to="/add-post">DODAJ ARTYKUŁ</NavLink></li>
                    <li className="topListItem" onClick={handleLogout}>{user && "WYLOGUJ"}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <NavLink to="/settings">
                        {user.profilePicture ? (
                            <img
                                className="topImg"
                                src={publicFolder + user.profilePicture}
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
import React from "react";
import "./topbar.css";
import {NavLink} from "react-router-dom";

export const Topbar = () => {
    const user = true;
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
                    <li className="topListItem">{user && "WYLOGUJ"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (

                        <img
                            className="topImg"
                            src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?cs=srgb&dl=pexels-chloe-1043471.jpg&fm=jpg"
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
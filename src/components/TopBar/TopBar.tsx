import React from "react";
import "./topBar.css";

export const TopBar = () => {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><i className="topIcon fa-solid fa-house"></i></li>
                    <li className="topListItem">KONTAKT</li>
                    <li className="topListItem">NAPISZ ARTYKÓŁ</li>
                    <li className="topListItem">WYLOGUJ</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                    className="topImg"
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?cs=srgb&dl=pexels-chloe-1043471.jpg&fm=jpg" alt=""/>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
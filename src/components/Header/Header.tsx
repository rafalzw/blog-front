import React from "react";
import "./header.css";

export const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">BLOG DLA PROGRAMISTÓW</span>
                <span className="headerTitleLarge">Java Script & more...</span>
            </div>
            <img
                className="headerImg"
                alt=""
                src="https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?cs=srgb&dl=pexels-lukas-574073.jpg&fm=jpg"/>
        </div>
    )
}
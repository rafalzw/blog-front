import React from "react";
import './sidebar.css';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">O BLOGU</span>
                <a title="Ramaksoud2000 via Chris Williams, Public domain, via Wikimedia Commons"
                   href="https://commons.wikimedia.org/wiki/File:JavaScript-logo.png">
                    <img width="512" alt="JavaScript-logo"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/512px-JavaScript-logo.png"/></a>
                <p>Express, Nest, React i inne biblioteki oraz frameworki JavaScript – o tym piszemy na naszym blogu
                    poświęconym technologiom JS.
                    Przedstawiamy zarówno podstawową wiedzę dla początkujących, jak i bardziej zaawansowane tematy z
                    zakresu JavaScript.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">POPULARNE TAGI</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Node</li>
                    <li className="sidebarListItem">React</li>
                    <li className="sidebarListItem">Express</li>
                    <li className="sidebarListItem">Nest</li>
                    <li className="sidebarListItem">Angular</li>
                    <li className="sidebarListItem">Vue</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">OBSERWUJ NAS</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}



import React from "react";
import './sidebar.css';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">O MNIE</span>
                <img
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?cs=srgb&dl=pexels-chloe-1043471.jpg&fm=jpg" alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque dolorem, expedita facere illum in ipsum magnam, modi nam officiis perspiciatis quaerat quo quod, reiciendis sequi vel veritatis voluptate voluptatibus.</p>
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
        </div>
    )
}



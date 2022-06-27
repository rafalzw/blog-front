import React from 'react';
import {Sidebar} from "../../components/Sidebar/Sidebar";
import "./settings.css"

export const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Edytuj konto</span>
                    <span className="settingsDeleteTitle">Usuń konto</span>
                </div>
                <form action="" className="settingsForm">
                    <label>Zdjęcie profilowe</label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?cs=srgb&dl=pexels-chloe-1043471.jpg&fm=jpg" alt=""/>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user-plus"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Nazwa użytkownika</label>
                    <input type="text" placeholder="JavaScript"/>
                    <label>Email</label>
                    <input type="email" placeholder="js@gmail.com"/>
                    <label>Hasło</label>
                    <input type="password"/>
                    <b className="settingsSubmit">Zapisz</b>
                </form>
            </div>
            <Sidebar/>
        </div>
    );
};
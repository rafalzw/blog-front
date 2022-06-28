import React from 'react';
import "./login.css"
import {NavLink} from "react-router-dom";

export const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">Zaloguj</span>
            <form action="" className="loginForm">
                <label htmlFor="">Email</label>
                <input type="text" className="loginInput" placeholder="Email"/>
                <label htmlFor="">Hasło</label>
                <input type="password" className="loginInput" placeholder="Hasło"/>
                <button className="loginButton">Zaloguj</button>
            </form>
            <button className="registerLoginButton"><NavLink className="link" to="/rejestracja">Zarejestruj się</NavLink></button>
        </div>
    );
};

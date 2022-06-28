import React from 'react';
import "./register.css"

export const Register = () => {
    return (
        <div className="login">
            <span className="loginTitle">Rejestracja</span>
            <form action="" className="loginForm">
                <label htmlFor="">Nazwa użytkownika</label>
                <input type="text" className="loginInput" placeholder="Nazwa użytkownika"/>
                <label htmlFor="">Email</label>
                <input type="text" className="loginInput" placeholder="Email"/>
                <label htmlFor="">Hasło</label>
                <input type="password" className="loginInput" placeholder="Hasło"/>
                <button className="loginButton">Zarejestruj</button>
            </form>
            <button className="registerButton">Zaloguj</button>
        </div>
    );
};

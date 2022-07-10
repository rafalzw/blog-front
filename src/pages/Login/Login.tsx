import React, {FormEvent, useContext, useRef} from 'react';
import "./login.css"
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/auth.context";
import axios from "axios";
import {apiUrl} from "../../config/api";

export const Login = () => {
    const context = useContext(AuthContext);

    const userRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    if(!context) return null;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${apiUrl}/users/login`, {
                username: userRef.current?.value,
                password: passwordRef.current?.value,
            })
            // dispatch({type: "LOGIN_SUCCESS", payload: res.data})
            localStorage.setItem("user", JSON.stringify(res.data))
            context.login();
            context.addUser(res.data)

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="login">
            <span className="loginTitle">Zaloguj</span>
            <form action="" className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="">Nazwa użytkownika</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="Nazwa użytkownika"
                    ref={userRef}
                />
                <label htmlFor="">Hasło</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="Hasło"
                    ref={passwordRef}
                />
                <button className="loginButton" type="submit">Zaloguj</button>
            </form>
            <button className="registerLoginButton"><NavLink className="link" to="/register">Zarejestruj się</NavLink></button>
        </div>
    );
};

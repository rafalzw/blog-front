import React, {FormEvent, useContext, useRef, useState} from 'react';
import "./login.css"
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/auth.context";
import axios from "axios";
import {apiUrl} from "../../config/api";
import {LoadingSpinner} from "../../components/UI/LoadingSpinner/LoadingSpinner";

export const Login = () => {
    const {login} = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const userRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        try {
            const res = await axios.post(`${apiUrl}/users/login`, {
                username: userRef.current?.value,
                password: passwordRef.current?.value,
            })

            login(res.data);
        } catch (err) {
            setError(true);
        }
    };

    return loading ? <LoadingSpinner/> : (
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
            <button className="registerLoginButton"><NavLink className="link" to="/register">Zarejestruj się</NavLink>
            </button>
            {error &&
                <span style={{color: "darkred", marginTop: "10px"}}>Niepoprawna Nazwa użytkownika lub Hasło. Spóbuj ponownie.</span>}
        </div>
    );
};

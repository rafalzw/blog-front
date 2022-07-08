import React, {FormEvent, useState} from 'react';
import "./register.css"
import {NavLink} from "react-router-dom";
import axios from "axios";
import {apiUrl} from "../../config/api";

export const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post(`${apiUrl}/users/register`, {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true)
        }
    };

    return (
        <div className="register">
            <span className="registerTitle">Rejestracja</span>
            <form action="" className="registerForm" onSubmit={handleSubmit}>
                <label htmlFor="">Nazwa użytkownika</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Nazwa użytkownika"
                    onChange={e => setUsername(e.target.value)}
                />
                <label htmlFor="">Email</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="">Hasło</label>
                <input
                    type="password"
                    className="registerInput"
                    placeholder="Hasło"
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">Zarejestruj</button>
            </form>
            <button className="registerLoginButton"><NavLink className="link" to="/login">Zaloguj</NavLink></button>
            {error && <span style={{color: "darkred", marginTop: "10px"}}>Coś poszło nie tak... Spóbuj ponownie.</span>}
        </div>
    );
};

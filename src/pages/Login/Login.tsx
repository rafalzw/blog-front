import React, {FormEvent, useRef} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {apiUrl} from "../../config/api";
import {LoadingSpinner} from "../../components/UI/LoadingSpinner/LoadingSpinner";
import {useDispatch, useSelector} from "react-redux";
import {loginFail, loginStart, loginSuccess} from "../../redux/userSlice";
import {RootState} from "../../redux/store";
import "./login.css"

export const Login = () => {
    const dispatch = useDispatch();
    const {loading, error} = useSelector((state: RootState) => state.user)

    const userRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        dispatch(loginStart())

        try {
            const res = await axios.post(`${apiUrl}/user/login`, {
                username: userRef.current?.value,
                password: passwordRef.current?.value,
            })
            dispatch(loginSuccess(res.data))
        } catch (err) {
            dispatch(loginFail());
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

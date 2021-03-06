import React, {FormEvent, useContext, useState} from 'react';
import {Sidebar} from "../../components/Sidebar/Sidebar";
import {AuthContext} from "../../context/auth.context";
import axios from "axios";
import {apiUrl} from "../../config/api";
import {LoadingSpinner} from "../../components/UI/LoadingSpinner/LoadingSpinner";
import "./settings.css"

export const Settings = () => {
    const [file, setFile] = useState<any>(null);
    const {user, logout} = useContext(AuthContext);
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const publicFolder = `${apiUrl}/user-photos/`;

    const handleChange = (e: any) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setSuccess(false);

        const formData = new FormData();
        formData.append('id', user.id);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        file && formData.append('photo', file);

        try {
            const res = await axios.put(`${apiUrl}/users/${user.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                transformRequest: (data) => {
                    return data
                },
            });
            localStorage.setItem("user", JSON.stringify(res.data));
            window.location.replace("/");
            setSuccess(true);
        } catch (error) {
            setError(true);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`${apiUrl}/users/${user.id}`, {
                data: {id: user.id}
            });
            window.location.replace("/");
            logout();
        } catch (err) {
        }
    };

    return loading ? <LoadingSpinner/> : (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Edytuj konto</span>
                    <span
                        className="settingsDeleteTitle"
                        onClick={handleDelete}
                    >Usu?? konto</span>
                </div>
                <form action="" className="settingsForm" onSubmit={handleSubmit}>
                    <label>Zdj??cie profilowe</label>
                    <div className="settingsPP">
                        {file ? (
                            <img
                                src={URL.createObjectURL(file)}
                                alt=""
                            />
                        ) : (
                            <img
                                src={user.profilePicture ? publicFolder + user.profilePicture : "https://cdn-icons-png.flaticon.com/512/7010/7010068.png"}
                                alt=""
                            />
                        )}
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user-plus"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{display: "none"}}
                            onChange={handleChange}
                        />
                    </div>
                    <label>Nazwa u??ytkownika</label>
                    <input
                        type="text"
                        minLength={3}
                        maxLength={20}
                        required={true}
                        placeholder={user.username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        required={true}
                        placeholder={user.email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Has??o</label>
                    <input
                        type="password"
                        required={true}
                        minLength={3}
                        maxLength={255}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="settingsSubmit" type="submit">Zapisz</button>
                    {success &&
                        <span style={{textAlign: "center", color: "green", marginTop: "10px"}}>Pomy??lnie zaktualizowano...</span>}
                    {error &&
                        <span style={{color: "darkred", marginTop: "10px"}}>Co?? posz??o nie tak... Sp??buj ponownie.</span>}
                </form>
            </div>
            <Sidebar/>
        </div>
    );
};
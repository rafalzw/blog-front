import React, {FormEvent, useContext, useState} from 'react';
import {Sidebar} from "../../components/Sidebar/Sidebar";
import {AuthContext} from "../../context/auth.context";
import axios from "axios";
import {apiUrl} from "../../config/api";
import "./settings.css"

export const Settings = () => {
    const [file, setFile] = useState<any>(null);
    const {user} = useContext(AuthContext);
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [success, setSuccess] = useState(false);
    const publicFolder = `${apiUrl}/user-photos/`;

    const handleChange = (e: any) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSuccess(false);

        const formData = new FormData();
        formData.append('id', user.id);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('photo', file);

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
            setSuccess(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Edytuj konto</span>
                    <span className="settingsDeleteTitle">Usuń konto</span>
                </div>
                <form action="" className="settingsForm" onSubmit={handleSubmit}>
                    <label>Zdjęcie profilowe</label>
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
                    <label>Nazwa użytkownika</label>
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
                    <label>Hasło</label>
                    <input
                        type="password"
                        required={true}
                        minLength={3}
                        maxLength={255}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="settingsSubmit" type="submit">Zapisz</button>
                    {success && <span style={{textAlign: "center", color: "green", marginTop: "10px"}}>Pomyślnie zaktualizowano...</span>}
                </form>
            </div>
            <Sidebar/>
        </div>
    );
};
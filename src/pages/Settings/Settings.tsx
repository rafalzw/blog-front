import React, {FormEvent, useState} from 'react';
import {Sidebar} from "../../components/Sidebar/Sidebar";
import axios from "axios";
import {apiUrl} from "../../config/api";
import {LoadingSpinner} from "../../components/UI/LoadingSpinner/LoadingSpinner";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/userSlice";
import {RootState} from "../../redux/store";
import "./settings.css"

export const Settings = () => {
    const {user} = useSelector((store: RootState) => store.user);
    const dispatch = useDispatch();
    const [file, setFile] = useState<any>(null);

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
        user && formData.append('id', user.id);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        file && formData.append('photo', file);

        try {
            const res = await axios.put(`${apiUrl}/user/${user?.id}`, formData, {
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
            await axios.delete(`${apiUrl}/user/${user?.id}`, {
                data: {id: user?.id}
            });
            window.location.replace("/");
            dispatch(logout());
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
                    >Usuń konto</span>
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
                                src={user?.profilePicture ? publicFolder + user.profilePicture : "https://cdn-icons-png.flaticon.com/512/7010/7010068.png"}
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
                        placeholder={user?.username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        required={true}
                        placeholder={user?.email}
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
                    {success &&
                        <span style={{textAlign: "center", color: "green", marginTop: "10px"}}>Pomyślnie zaktualizowano...</span>}
                    {error &&
                        <span style={{color: "darkred", marginTop: "10px"}}>Coś poszło nie tak... Spóbuj ponownie.</span>}
                </form>
            </div>
            <Sidebar/>
        </div>
    );
};
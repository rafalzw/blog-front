import axios from 'axios';
import React, {FormEvent, useState} from 'react';
import {apiUrl} from "../../config/api";
import {LoadingSpinner} from "../../components/UI/LoadingSpinner/LoadingSpinner";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import "./write.css"

export const Write = () => {
    const {user} = useSelector((store: RootState) => store.user);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [file, setFile] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: any) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        user && formData.append('userId', user.id);
        formData.append('title', title);
        formData.append('content', content);
        file && formData.append('photo', file);

        try {
            const res = await axios.post(`${apiUrl}/post`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                transformRequest: (data) => {
                    return data
                },
            });
            window.location.replace("/post/" + res.data.id);

        } catch (error) {
            console.log(error);
        }
    };

    return loading ? <LoadingSpinner/> : (
        <div className="write">
            {file && (
                <img
                    src={URL.createObjectURL(file)}
                    alt=""
                    className="writeImg"
                />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-folder-plus"></i>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{display: "none"}}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Napisz artykół..."
                        className="writeInput writeText"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    > </textarea>
                </div>
                <button className="writeSubmit" type="submit">Dodaj artykuł</button>
            </form>
        </div>
    );
};
import React, {useContext, useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import axios from "axios";
import {apiUrl} from "../../config/api";
import {PostInterface} from 'types'
import {AuthContext} from "../../context/auth.context";
import "./singlePost.css"

export const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const publicFolder = `${apiUrl}/post-photos/`;
    const {user} = useContext(AuthContext);

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [update, setUpdate] = useState<any>(false);

    const [post, setPost] = useState<PostInterface>({
        id: "",
        title: "",
        content: "",
        // photo: "",
        createdAt: "",
        updatedAt: "",
        user: {email: "", id: "", username: ""}
    })

    useEffect(() => {
        (async () => {
            const res = await axios.get(`${apiUrl}/posts/${path}`)
            setPost(res.data)
            setTitle(res.data.title)
            setContent(res.data.content)
        })()
    }, [path]);

    const handleDelete = async () => {
        try {
        await axios.delete(`${apiUrl}/posts/${post.id}`, {
            data: {username: user.username}
        });
        window.location.replace("/");
        } catch (err) {}
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`${apiUrl}/posts/${post.id}`, {
                    user: user.id,
                    title,
                    content,
            });

            setUpdate(false);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo &&
                    <img
                        className="singlePostImg"
                        src={publicFolder + post.photo}
                        alt=""
                    />
                }
                {update ? (
                    <input
                        type="text"
                        value={title}
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <h1 className="singlePostTitle">
                        {title}
                        {post.user?.username === user?.username &&
                            <div className="singlePostEdit">
                                <i
                                    className="singlePostIcon fa-solid fa-pen-to-square"
                                    onClick={() => setUpdate(true)}
                                ></i>
                                <i
                                    className="singlePostIcon fa-solid fa-trash-can"
                                    onClick={handleDelete}
                                ></i>
                            </div>
                        }
                    </h1>
                )}
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Autor: <NavLink to={`/?id=${post.user?.id}`} className="link">
                            <b>{post.user?.username}</b>
                        </NavLink>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {update ? (
                    <textarea
                        className="singlePostDescInput"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    /> ) : (
                    <p className="singlePostDesc">
                        {content}
                    </p>
                    ) }
                {update &&
                    <button
                    className="singlePostButton"
                    onClick={handleUpdate}
                    >Zatwierdź
                    </button>
                }
            </div>
        </div>
    )
}
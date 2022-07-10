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
        })()
    }, [path]);

    const handleDelete = async () => {
        await axios.delete(`${apiUrl}/posts/${post.id}`, {
            data: { username: user.username}
        });
        window.location.replace("/");

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
                <h1 className="singlePostTitle">
                    {post.title}
                    {post.user?.username === user?.username &&
                        <div className="singlePostEdit">
                            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                            <i className="singlePostIcon fa-solid fa-trash-can"
                            onClick={handleDelete}></i>
                        </div>
                    }
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Autor: <NavLink to={`/?id=${post.user?.id}`} className="link">
                            <b>{post.user?.username}</b>
                        </NavLink>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    {post.content}
                </p>
            </div>
        </div>
    )
}
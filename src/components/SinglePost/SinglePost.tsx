import React from "react";
import "./singlePost.css"

export const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Autor: <b>Rafal</b></span>
                    <span className="singlePostDate">1 godzinę temu</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur blanditiis eius enim,
                    fugiat illum incidunt
                    inventore magni nam, nobis optio perspiciatis quia ratione reprehenderit repudiandae temporibus
                    voluptate. Possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur
                    blanditiis eius enim, fugiat illum incidunt
                    inventore magni nam, nobis optio perspiciatis quia ratione reprehenderit repudiandae temporibus
                    voluptate. Possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur
                    blanditiis eius enim, fugiat illum incidunt
                    inventore magni nam, nobis optio perspiciatis quia ratione reprehenderit repudiandae temporibus
                    voluptate. Possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur
                    blanditiis eius enim, fugiat illum incidunt
                    inventore magni nam, nobis optio perspiciatis quia ratione reprehenderit repudiandae temporibus
                    voluptate. Possimus!
                </p>
            </div>
        </div>
    )
}
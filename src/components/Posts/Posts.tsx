import React from "react";
import './posts.css';
import {Post} from "./Post/Post";

export const Posts = () => {
    return (
        <div className="posts">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}



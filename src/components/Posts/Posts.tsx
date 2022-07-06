import React from "react";
import {Post} from "./Post/Post";
import { GetAllPostsResponse } from "types";
import './posts.css';

interface Props {
    posts: GetAllPostsResponse;
}

export const Posts = (props: Props) => {
    return (
        <div className="posts">
            {props.posts.map(p => (
                <Post key={p.id} post={p}/>
            ))}
        </div>
    )
}



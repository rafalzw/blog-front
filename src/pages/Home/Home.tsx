import React, {useEffect, useState} from "react";
import {Header} from "../../components/Header/Header";
import {Posts} from "../../components/Posts/Posts";
import {Sidebar} from "../../components/Sidebar/Sidebar";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {apiUrl} from "../../config/api";
import {GetAllPostsResponse} from 'types';
import "./home.css"

export const Home = () => {
    const [posts, setPosts] = useState<GetAllPostsResponse>([]);
    const {search} = useLocation();

    useEffect(() => {
        (async () => {
            const res = await axios.get(`${apiUrl}/posts${search}`)
            setPosts(res.data);
        })()
    }, [search]);

    return (
        <>
            <Header/>
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar/>
            </div>
        </>
    )
}
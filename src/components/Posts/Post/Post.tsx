import React from "react";
import "./post.css"

export const Post = () => {
    return (
        <div className='post'>
            <img
                className="postImg"
                src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
            />
            <div className="postInfo">
                <div className="postTags">
                    <span className="postTag">React</span>
                    <span className="postTag">Frontend</span>
                    <span className="postTag">Java Script</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr/>
                <span className="postDate">1 godzinę temu</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur blanditiis eius enim, fugiat illum incidunt
                inventore magni nam, nobis optio perspiciatis quia ratione reprehenderit repudiandae temporibus voluptate. Possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur blanditiis eius enim, fugiat illum incidunt
                inventore magni nam, nobis optio perspiciatis quia ratione reprehenderit repudiandae temporibus voluptate. Possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur blanditiis eius enim, fugiat illum incidunt
                inventore magni nam, nobis optio perspiciatis quia ratione reprehenderit repudiandae temporibus voluptate. Possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur blanditiis eius enim, fugiat illum incidunt
                inventore magni nam, nobis optio perspiciatis quia ratione reprehenderit repudiandae temporibus voluptate. Possimus!
            </p>
        </div>
    )
}
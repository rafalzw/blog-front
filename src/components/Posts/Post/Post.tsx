import {NavLink} from "react-router-dom";
import { PostInterface } from "types";
import {apiUrl} from "../../../config/api";
import "./post.css"

interface Props {
    post: PostInterface;
}

export const Post = (props: Props) => {

    const publicFolder = `${apiUrl}/post-photos/`;

    const {id,
        title,
        content,
        photo,
        createdAt} = props.post;

    return (
        <div className='post'>
            {photo && (
                <img
                    className="postImg"
                    src={publicFolder + photo}
                    alt=""
                />
            )}
            <div className="postInfo">
                <div className="postTags">
                    <span className="postTag">React</span>
                    <span className="postTag">Frontend</span>
                    <span className="postTag">Java Script</span>
                </div>
                <NavLink to={`/post/${id}`} className="link">
                    <span className="postTitle">{title}</span>
                </NavLink>
                <hr/>
                <span className="postDate">{new Date(createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
                {content}
            </p>
        </div>
    )
}
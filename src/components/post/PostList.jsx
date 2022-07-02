import PostListItem from "./PostListItem";
import "./postList.css";
import data from "../../db/data.json";
import { Link } from "react-router-dom";

export default function PostList(props) {
    return (
        <ul className="post-list">
            {data.posts.map((post) => (
                <li key={post.id}>
                    <Link to={`/${post.id}`}>
                        <PostListItem
                            thumbnail={post.thumbnail}
                            title={post.title}
                            profileImg={post.profileImg}
                            username={post.userName}
                            created={post.created}
                            category={post.category}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
}

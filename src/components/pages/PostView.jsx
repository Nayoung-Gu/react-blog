import React from "react";
import Header from "../header/Header";
import PostDetail from "../post/PostDetail";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
// import userData from '../../db/data.json';
import postData from "../../db/data.json";

function PostView() {
    const { postId } = useParams();
    const postIndex = postId - 1;
    const post = postData.posts[postIndex];
    return (
        <div>
            <Header />
            <PostDetail
                mainBg={post["mainBg"]}
                title={post["title"]}
                categories={post["category"]}
                writerProfileImg={post["profileImg"]}
                created={post["created"]}
            />
            <Footer />
        </div>
    );
}

export default PostView;

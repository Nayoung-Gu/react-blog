import React from "react";
import Header from "../header/Header";
import PostDetail from "../post/PostDetail";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import postData from "../../db/data.json";

function PostView() {
    const { postId } = useParams();
    const postIndex = postId - 1;
    const post = postData.posts[postIndex];
    function formatDate(when) {
        const result = [];
        const dateArr = when.split(".");
        const year = dateArr[0];
        const month = dateArr[1];
        const date = dateArr[2];
        const theDay = new Date(`${year}-${month}-${date}`);
        const dateString = theDay.toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            weekday: "long",
        });
        const formattedMonth = dateString.split(" ")[1];
        const formattedDate = dateString.split(" ")[2];
        const formattedDay = dateString.split(",")[0];
        result.push(formattedMonth, formattedDate, formattedDay);
        return result;
    }
    return (
        <div>
            <Header />
            <PostDetail
                mainBg={post["mainBg"]}
                title={post["title"]}
                categories={post["category"]}
                writerProfileImg={post["profileImg"]}
                created={post["created"]}
                date={formatDate(post["created"])}
            />
            <Footer />
        </div>
    );
}

export default PostView;

import Header from "../header/Header";
import PostDetail from "../post/PostDetail";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import postData from "../../db/data.json";

export default function PostView() {
    const { postId } = useParams();
    const postIndex = postId - 1;
    const post = postData.posts[postIndex];
    function formatDate(when) {
        const result = [];
        const [year, month, date] = when.split(".");
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
                writer={post["userName"]}
                created={post["created"]}
                date={formatDate(post["created"])}
                contents={post["contents"]}
            />
            <Footer />
        </div>
    );
}

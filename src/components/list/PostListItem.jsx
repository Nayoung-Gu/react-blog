import { useNavigate } from "react-router-dom";

function PostListItem() {
  const navigate = useNavigate();

  return <div onClick={() => navigate("/post-view")}>포스트입니다.</div>;
}

export default PostListItem;

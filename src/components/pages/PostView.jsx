import React from "react";
import Nav from "../nav/Nav";
import PreviousBtn from "../ui/PreviousBtn";
import ModifyBtn from "../ui/ModifyBtn";
import DeleteBtn from "../ui/DeleteBtn";
import LikeBtn from "../ui/LikeBtn";
import Footer from "../footer/Footer";

function PostView() {
  return (
    <div>
      <Nav />
      <PreviousBtn />
      <ModifyBtn />
      <DeleteBtn />
      <LikeBtn />
      PostView페이지입니다.
      <Footer />
    </div>
  );
}

export default PostView;

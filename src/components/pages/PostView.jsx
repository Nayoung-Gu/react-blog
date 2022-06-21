import React from "react";
import Header from "../header/Header";
import PreviousBtn from "../ui/PreviousBtn";
import ModifyBtn from "../ui/ModifyBtn";
import DeleteBtn from "../ui/DeleteBtn";
import LikeBtn from "../ui/LikeBtn";
import Footer from "../footer/Footer";

function PostView() {
  return (
    <div>
      <Header />
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

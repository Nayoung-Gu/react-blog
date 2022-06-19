import React from "react";
import PostListItem from "../list/PostListItem";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./MainPage.css";

function MainPage() {
  return (
    <div>
      <Header />
      MainPage입니다.
      <PostListItem></PostListItem>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;

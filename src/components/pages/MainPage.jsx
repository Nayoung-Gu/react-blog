import React from "react";
import PostListItem from "../list/PostListItem";
import Header from "../header/Header";
import Banner from "../banner/Banner";
import About from "../about/About";
import PostList from "../list/PostList";
import Footer from "../footer/Footer";
import "./mainPage.css";

function MainPage() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="main">
        <About />
        <PostList />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;

import React from "react";
import PostListItem from "../list/PostListItem";
import Nav from "../nav/Nav";
import Header from "../header/Header";
import About from "../about/About";
import PostList from "../list/PostList";
import Footer from "../footer/Footer";
import "./mainPage.css";

function MainPage() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <PostList />
      <Footer></Footer>
    </div>
  );
}

export default MainPage;

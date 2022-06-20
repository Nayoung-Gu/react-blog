import React from "react";
import PostListItem from "../list/PostListItem";
import Nav from "../nav/Nav";
import Header from "../header/Header";
import About from "../about/About";
import Footer from "../footer/Footer";
import "./MainPage.css";

function MainPage() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <PostListItem></PostListItem>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;

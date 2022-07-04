import React from "react";
import Header from "../header/Header";
import Banner from "../banner/Banner";
import About from "../about/About";
import PostList from "../post/PostList";
import Footer from "../footer/Footer";
import "./MainPage.css";

export default function MainPage() {
    return (
        <div>
            <Header />
            <Banner />
            <div className="main">
                <About />
                <PostList />
            </div>
            <Footer />
        </div>
    );
}

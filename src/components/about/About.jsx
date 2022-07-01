import CategoryBtn from "../post/CategoryBtn";
import SocialBtns from "./SocialBtns";
import userData from "../../db/data.json";
import "./about.css";

export default function About() {
    return (
        <aside className="about">
            <div className="about-profile">
                <h3 className="about-title">about me</h3>
                <img
                    src={`.${userData.users[0]["profileImg"]}`}
                    alt="나의 프로필 이미지"
                />
                <div className="user-name">{userData.users[0]["name"]}</div>
                <p className="user-description">
                    {userData.users[0]["userInfo"]}
                </p>
            </div>
            <div className="about-categories">
                <h3 className="about-title">categories</h3>
                <ul>
                    {userData.users[0]["category"].map((item, index) => {
                        return (
                            <li key={index}>
                                <CategoryBtn theme={item} className="grey" />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="about-follow">
                <h3 className="about-title">follow</h3>
                <SocialBtns />
            </div>
        </aside>
    );
}

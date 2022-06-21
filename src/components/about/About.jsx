import { ProfileImg_lg } from "../ui/ProfileImg";
import CategoryBtn from "../ui/CategoryBtn";
import SocialBtns from "../ui/SocialBtns";
import userData from "../../assets/data.json";
import "./about.css";

export default function About() {
  return (
    <aside className="about">
      <div className="about-profile">
        <h3 className="about-title">about me</h3>
        <ProfileImg_lg />
        <div className="user-name">{userData.users[0]["name"]}</div>
        <p className="user-description">{userData.users[0]["userInfo"]}</p>
      </div>
      <div className="about-categories">
        <h3 className="about-title">categories</h3>
        <ul>
          <li>
            <CategoryBtn theme="Life" className="grey" />
          </li>
          <li>
            <CategoryBtn theme="Style" className="grey" />
          </li>
          <li>
            <CategoryBtn theme="Tech" className="grey" />
          </li>
          <li>
            <CategoryBtn theme="Sport" className="grey" />
          </li>
          <li>
            <CategoryBtn theme="Photo" className="grey" />
          </li>
          <li>
            <CategoryBtn theme="Develop" className="grey" />
          </li>
          <li>
            <CategoryBtn theme="Music" className="grey" />
          </li>
        </ul>
      </div>
      <div className="about-follow">
        <h3 className="about-title">follow</h3>
        <SocialBtns />
      </div>
    </aside>
  );
}

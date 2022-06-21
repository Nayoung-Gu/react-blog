import { useNavigate } from "react-router-dom";
import CategoryBtn from "../ui/CategoryBtn";
import img from "../../assets/images/post-img1.jpg";
import { ProfileImg_sm } from "../ui/ProfileImg";
import data from "../../assets/data.json";
import "./PostListItem.css";

function PostListItem(props) {
  const navigate = useNavigate();

  return (
    <article className="card" onClick={() => navigate("/post-view")}>
      <img src={img} alt="" />

      <div className="contents-wrap">
        <CategoryBtn theme="Life" className="blue" />
        <CategoryBtn theme="Style" className="blue" />
        <h3 className="card-title">
          Dipisicing elit. Inventore illum nostrum perferendis.
        </h3>
        <div className="card-detail">
          <ProfileImg_sm />
          <span className="writer">Chilli</span>
          <span className="date">2022.04.01</span>
        </div>
        <p className="card-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          cupiditate cum mollitia ad necessitatibus quia optio esse eveniet ab
          quidem non, velit fugiat facere id dolor doloribus, nam aut
          voluptatum? Unde sapiente error accusamus incidunt molestiae expedita
          odio omnis modi non? Voluptate odit blanditiis voluptatem sunt
          voluptas quas nulla. Deserunt et nisi voluptate illo blanditiis
          repudiandae officiis porro quidem aut?
        </p>
      </div>
    </article>
  );
}

export default PostListItem;

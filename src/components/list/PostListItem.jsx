import { useNavigate } from "react-router-dom";
import CategoryBtn from "../ui/CategoryBtn";
import img from "../../assets/post-img1.jpg";
import { ProfileImg_sm } from "../ui/ProfileImg";
import data from "../../assets/data.json";
import "./postListItem.css";
// import "../../assets/post-img1.jpg";
function PostListItem(props) {
  const navigate = useNavigate();

  return (
    <article className="card" onClick={() => navigate("/post-view")}>
      {/* <img src={props.thumbnail} /> */}
      <img src={img} alt="" />
      <div className="contents-wrap">
        {props.category.map((item, index) => {
          return <CategoryBtn key={index} theme={item} className="blue" />;
        })}
        <h3 className="card-title">{props.title}</h3>
        <div className="card-detail">
          <ProfileImg_sm />
          <span className="writer">{props.username}</span>
          <span className="date">{props.created}</span>
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

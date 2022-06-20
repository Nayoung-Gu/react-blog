import { useNavigate } from "react-router-dom";
import CategoryBtn from "../ui/CategoryBtn";
import img from "../../assets/images/post-img1.jpg";
import { ProfileImg_sm } from "../ui/ProfileImg";
import "./PostListItem.css";

function PostListItem(props) {
  const navigate = useNavigate();

  return (
    <article className="card" onClick={() => navigate("/post-view")}>
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="contents-wrap">
        <CategoryBtn theme="Life" className="blue" />
        <CategoryBtn theme="Style" className="blue" />
        <h3 className="card-title">
          Loremr sit, amet consectetur adipisicing elit. Similique neque fuga
          rem dolor eligendi aute
        </h3>
        <div className="card-detail">
          <ProfileImg_sm />
          <span className="writer">Chilli</span>
          <span className="date">2022.05.25</span>
        </div>
        <p className="card-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          cumque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Similique neque fuga rem dolor eligendi autem saepe quis a dolorum
          ullam quia assumenda soluta maiores, sit perspiciatis tenetur libero
          molestias iurm aliquam alias maiores suscipit voluptatibus dolorum
          doloribus et non quasi tempore. Repudiandae. Iusto reiciendis
          explicabo dolor, quae quidem a harum eieque fuga rem dolor eligendi
          autem saepe quis a dolorum ullam quia assumenda soluta maiores, sit
          perspiciatis tenetur libero molestias iurm aliquam alieque fuga rem
          dolor eligendi autem saepe quis a dolorum ullam quia assumenda soluta
          maiores, sit perspiciatis tenetur libero molestias iurm aliquam
          alieque fuga rem dolor eligendi autem saepe quis a dolorum ullam quia
          assumenda soluta maiores, sit perspiciatis tenetur libero molestias
          iurm aliquam alius, assumenda deleniti deserunt incidunt? Expedita
          corrupti hic eos fugiat. Possimus molestias facilis perspicia
        </p>
      </div>
    </article>
  );
}

export default PostListItem;

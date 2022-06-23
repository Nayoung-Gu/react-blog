import facebook from "../../assets/Facebook.svg";
import twitter from "../../assets/Twitter.svg";
import instagram from "../../assets/Instagram.svg";
import github from "../../assets/Github.svg";
import { useNavigate } from "react-router-dom";
import "./socialBtns.css";

export default function SocialBtns() {
  const navigate = useNavigate();

  return (
    <ul className="social-btn-list">
      <li>
        <button onClick={() => navigate("/")}>
          <img src={facebook} alt="페이스북 팔로우하기" />
        </button>
      </li>
      <li>
        <button onClick={() => navigate("/")}>
          <img src={twitter} alt="트위터 팔로우하기" />
        </button>
      </li>
      <li>
        <button onClick={() => navigate("/")}>
          <img src={instagram} alt="인스타그램 팔로우하기" />
        </button>
      </li>
      <li>
        <button onClick={() => navigate("/")}>
          <img src={github} alt="깃허브 팔로우하기" />
        </button>
      </li>
    </ul>
  );
}

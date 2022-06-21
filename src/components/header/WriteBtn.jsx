import "./writeBtn.css";
import icon from "../../assets/icon-modify-white.svg";

export default function WriteBtn() {
  return (
    <button className="write-btn">
      <img src={icon} alt="쓰기 버튼" />
      <span>Write</span>
    </button>
  );
}

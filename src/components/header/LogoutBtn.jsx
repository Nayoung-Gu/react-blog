import "./logoutBtn.css";
import icon from "../../assets/icon-logout.svg";

export default function LogoutBtn(props) {
  return (
    <button className="logout-btn" onClick={props.onClick}>
      <img src={icon} alt="로그아웃 버튼" />
      <span>Logout</span>
    </button>
  );
}

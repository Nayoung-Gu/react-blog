import "./logoutBtn.css";
import icon from "../../assets/icons/icon-logout.svg";

export default function LogoutBtn() {
  return (
    <button className="logout-btn">
      <img src={icon} alt="로그아웃 버튼" />
      <span>Logout</span>
    </button>
  );
}

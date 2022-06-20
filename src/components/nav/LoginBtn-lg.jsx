import "./LoginBtn.css";
import icon from "../../assets/icons/icon-login.svg";

export default function LoginBtn() {
  return (
    <button className="login-btn">
      <img src={icon} alt="로그인 버튼" />
      <span>Login</span>
    </button>
  );
}

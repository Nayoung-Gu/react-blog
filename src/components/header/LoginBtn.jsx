import "./loginBtn.css";
import icon from "../../assets/icon-login.svg";

export default function LoginBtn() {
  return (
    <button className="login-btn">
      <img src={icon} alt="로그인 버튼" />
      <span>Login</span>
    </button>
  );
}

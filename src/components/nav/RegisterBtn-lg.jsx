import "./Register.css";
import icon from "../../assets/icons/icon-register.svg";

export default function RegisterBtn() {
  return (
    <button className="register-btn">
      <img src={icon} alt="회원가입 버튼" />
      <span>Register</span>
    </button>
  );
}

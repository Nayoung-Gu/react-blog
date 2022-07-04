import "./guestBtns.css";
import icon from "../../assets/icon-login.svg";

export default function LoginBtn(props) {
    return (
        <button className="login-btn guest-btn" onClick={props.onClick}>
            <img src={icon} alt="로그인 버튼" />
            <span>Login</span>
        </button>
    );
}

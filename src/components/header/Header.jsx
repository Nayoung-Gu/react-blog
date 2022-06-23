import Logo from "./Logo";
import { useState } from "react";
import WriteBtn from "./WriteBtn";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
import RegisterBtn from "./RegisterBtn";
import userData from "../../assets/data.json";
import "./header.css";

export default function Header() {
  const [login, setLogin] = useState(false);
  function handleClick() {
    setLogin(!login);
  }
  return (
    <nav>
      <Logo />
      <div>
        {login ? (
          <div className="nav-profile-cont">
            <img
              src={`.${userData.users[0]["profileImg"]}`}
              alt="나의 프로필 이미지"
            />
          </div>
        ) : null}
        {login ? <WriteBtn /> : <LoginBtn onClick={handleClick} />}
        {login ? <LogoutBtn onClick={handleClick} /> : <RegisterBtn />}
      </div>
    </nav>
  );
}

import Logo from "./Logo";
import { useState, useEffect } from "react";
import { ProfileImg_md } from "../ui/ProfileImg";
import WriteBtn from "./WriteBtn";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
import RegisterBtn from "./RegisterBtn";
import "./nav.css";

export default function Nav() {
  const [login, setLogin] = useState(true);

  return (
    <nav>
      <Logo />
      <div>
        {login ? <ProfileImg_md /> : null}
        {login ? (
          <WriteBtn />
        ) : (
          <LoginBtn
            onClick={() => {
              setLogin(true);
            }}
          />
        )}
        {login ? (
          <LogoutBtn onClick={() => setLogin(false)} />
        ) : (
          <RegisterBtn />
        )}
      </div>
    </nav>
  );
}

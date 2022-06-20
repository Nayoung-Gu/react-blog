import Logo from "./Logo";
import { ProfileImg_md } from "../ui/ProfileImg";
import WriteBtn from "./WriteBtn-lg";
import LogoutBtn from "./LogoutBtn-lg";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <Logo />
      <div>
        <ProfileImg_md />
        <WriteBtn />
        <LogoutBtn />
      </div>
    </nav>
  );
}

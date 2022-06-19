import Logo from "./Logo";
import { ProfileImg_md } from "../ui/ProfileImg";
import WriteBtn from "./WriteBtn-lg";
import LogoutBtn from "./LogoutBtn-lg";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <Logo />
      <div>
        <ProfileImg_md />
        <WriteBtn />
        <LogoutBtn />
      </div>
    </header>
  );
}

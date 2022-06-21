import data from "../../assets/data.json";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-wrapper">
          <h2 className="header__subtitle">{data.blog.subTitle}</h2>
          <h1 className="header__maintitle">{data.blog.mainTitle}</h1>
          <p className="header__description">{data.blog.description}</p>
        </div>
      </div>
    </header>
  );
}

import data from "../../assets/data.json";
import "./banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-wrapper">
          <h2 className="banner-subtitle">{data.blog.subTitle}</h2>
          <h1 className="banner-maintitle">{data.blog.mainTitle}</h1>
          <p className="banner-description">{data.blog.description}</p>
        </div>
      </div>
    </div>
  );
}

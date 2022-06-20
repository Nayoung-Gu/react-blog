import "./CategoryBtn.css";

export default function CategoryBtn(props) {
  return (
    <button className={`category-btn ${props.className}`}>{props.theme}</button>
  );
}

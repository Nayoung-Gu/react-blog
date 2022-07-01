import "./previousBtn.css";
import { useNavigate } from "react-router-dom";

export default function PreviousBtn() {
  const navigate = useNavigate();

  return (
    <button className="previous-button" onClick={() => navigate("/")}></button>
  );
}

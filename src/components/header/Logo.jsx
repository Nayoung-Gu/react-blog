import { useNavigate } from "react-router-dom";
import "./logo.css";

export default function Logo() {
  const navigate = useNavigate();

  return <div className="logo" onClick={() => navigate("/")}></div>;
}

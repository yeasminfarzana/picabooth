import "./Home.css";
import Homepic from "../assets/Home.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Slice of life in a pocket size</h2>
      <div className="homepic_container">
        <img src={Homepic} className="homePic" alt="click" id="click" />
      </div>

      <button
        className="Start"
        href="#start"
        id="start"
        onClick={() => navigate("/camera")}
      >
        START
      </button>
    </div>
  );
}

export default Home;

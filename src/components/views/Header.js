import "./Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <link
        href="https://fonts.googleapis.com/css?family=Antonio"
        rel="stylesheet"
      ></link>
      <div className="header-left">
        <a>
          <img src={logo} alt="Logo" id="logo" />
        </a>
      </div>
      <div className="header-right">
        <a>
          <Link to="/" className="Home">
            Home
          </Link>
        </a>

        <a>
          <Link to="/faq" className="FAQ">
            FAQ
          </Link>
        </a>
        <a>
          <Link to="/contact" className="Contact">
            Contact
          </Link>
        </a>
      </div>

      {/*<div className = "header-right">
          <a className = "Home" href = "#home">Home</a>
          <a className = "FAQ" href = "#FAQ">FAQ</a>
          <a className = "Contact" href = "#contact">Contact</a>
        </div> */}
    </header>
  );
}

export default Header;

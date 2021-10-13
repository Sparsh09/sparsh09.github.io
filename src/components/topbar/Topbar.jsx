import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>mehtasparsh777@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="socialmedia">
            <div className="itemContainer pic">
              <a href="https://www.linkedin.com/in/sparsh29/">
                <img src="assets/linkedin.png" alt="" className="icon" />
              </a>
            </div>
            <div className="itemContainer pic">
              <a href="https://github.com/sparsh09">
                <img src="assets/twitter.png" alt="" className="icon" />
              </a>
            </div>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <Link to="/" className="nav-logo">
            StarBucks
          </Link>
          <ul className="footer-menu">
            <li className="footer-list">
              <Link to={"/"} className="footer-list-item">
                Main
              </Link>
              <Link to={"/"} className="footer-list-item">
                Buy
              </Link>
              <Link to={"/"} className="footer-list-item">
                More
              </Link>
            </li>
            <li className="footer-list">
              <Link to={"/"} className="footer-list-item">
                We make
              </Link>
              <Link to={"/"} className="footer-list-item">
                Process
              </Link>
            </li>
            <li className="footer-list">
              <Link to={"/"} className="footer-list-item">
                Product
              </Link>
              <Link to={"/"} className="footer-list-item">
                Cappuccino
              </Link>
              <Link to={"/"} className="footer-list-item">
                Fast
              </Link>
              <Link to={"/"} className="footer-list-item">
                Fast
              </Link>
            </li>
            <li className="footer-list">
              <Link to={"/"} className="footer-list-item">
                Events
              </Link>
              <Link to={"/"} className="footer-list-item">
                Drink
              </Link>
              <Link to={"/"} className="footer-list-item">
                Eat
              </Link>
            </li>
            <li className="footer-list">
              <Link to={"/"} className="footer-list-item">
                Contact
              </Link>
              <Link to={"/"} className="footer-list-item">
                Instagram
              </Link>
              <Link to={"/"} className="footer-list-item">
                Number
              </Link>
            </li>
          </ul>

          <div className="arrow-up">
            <ArrowUp size={28} />
          </div>
        </div>
        <div className="row"></div>
      </div>
    </footer>
  );
}

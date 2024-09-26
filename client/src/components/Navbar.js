import "../css/navbar.css";
import {
  FaHome,
  FaShoppingCart,
  FaUser,
  FaEnvelope,
  FaQuestion,
} from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div className="icons">
        <a href="#home">
          <FaHome />
        </a>
        <a href="#about">
          <FaUser />
        </a>
        <a href="#shop">
          <FaShoppingCart />
        </a>
        <a href="#contact">
          <FaEnvelope />
        </a>
        <a href="#faqs">
          <FaQuestion />
        </a>
      </div>
    </div>
  );
}

export default Navbar;

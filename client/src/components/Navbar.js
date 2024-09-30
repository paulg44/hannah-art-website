import { useState } from "react";
import "../css/navbar.css";
import {
  FaHome,
  FaShoppingCart,
  FaUser,
  FaEnvelope,
  FaQuestion,
  FaBars,
} from "react-icons/fa";

function Navbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function openBurgerMenu() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  function closeBurgerMenu() {
    setIsBurgerOpen(false);
  }

  return (
    <nav className="navbar">
      {/* Burger Menu */}
      <div className="burgerMenuBtn" onClick={openBurgerMenu}>
        <FaBars />
      </div>
      <div className={`icons ${isBurgerOpen ? "open" : ""}`}>
        <ul className="iconsList">
          <li>
            <a href="#home" onClick={closeBurgerMenu}>
              <FaHome />
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeBurgerMenu}>
              <FaUser />
            </a>
          </li>
          <li>
            <a href="#shop" onClick={closeBurgerMenu}>
              <FaShoppingCart />
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeBurgerMenu}>
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a href="#footer" onClick={closeBurgerMenu}>
              <FaQuestion />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

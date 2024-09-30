import "../css/footer.css";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer">
      <ul className="footerInfoLinks">
        <li>Shipping information</li>
        <li>Returns Policy</li>
        <li>Privacy Policy</li>
        <li>Sitemap</li>
      </ul>
      <ul className="socialIcons">
        <li>
          <FaInstagram />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

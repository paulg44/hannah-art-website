import "../css/header.css";
import manDrawing from "../assets/images/man_hannah.jpg";
import horseDrawing from "../assets/images/horse_hannah.jpg";
import clownDrawing from "../assets/images/clown_hannah.jpg";

function Homepage() {
  return (
    <section id="home" className="header-container container-fluid">
      <div className="headline">
        <h1>Hannah Jane Garton</h1>
        <h2>Artist & Illustrator</h2>
      </div>

      <div className="header-images">
        <div className="header-images-container">
          <img src={manDrawing} alt="pencil drawing of a man" />
          <img src={clownDrawing} alt="pencil drawing of a horse" />
          <img
            src={horseDrawing}
            alt="pencil drawing of a clown with a burst of colour"
          />
        </div>
      </div>

      <button type="button" className="buy-btn">
        BUY NOW
      </button>
    </section>
  );
}

export default Homepage;

import "../css/shop.css";
// import artData from "../assets/utils/art.json";
import asian_hannah from "../assets/images/asian_hannah.jpg";

// This may all be obsolete eventually as I've just thought I'll need to add each drawing asd a product on Stripe to be able to sell, so all this is redundant really

function Shop() {
  return (
    <section id="shop" className="shop-container">
      <div className="shop-grid-container">
        <i className="fa-solid fa-arrow-left fa-2x"></i>
        <div className="shop-image-container">
          <div className="shopCard">
            <h3>Asian</h3>
            <img src={asian_hannah} alt="asian" />
            <p>Test piece</p>

            <form
              action="http://localhost:3000/create-checkout-session"
              method="POST"
            >
              <button className="shop-price-btn" type="submit">
                Buy for 20.99
              </button>
            </form>
          </div>
        </div>
        <i className="fa-solid fa-arrow-right fa-2x"></i>
      </div>
    </section>
  );
}

export default Shop;

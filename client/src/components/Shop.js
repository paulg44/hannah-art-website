import "../css/shop.css";
// import artData from "../assets/utils/art.json";
import asian_hannah from "../assets/images/asian_hannah.jpg";
import { useEffect, useState } from "react";

// This may all be obsolete eventually as I've just thought I'll need to add each drawing asd a product on Stripe to be able to sell, so all this is redundant really

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllStripeProducts = async () => {
      try {
        const stripeResponse = await fetch("/all-stripe-products").then(
          (productData) => {
            return productData.json();
          }
        );
        setProducts(stripeResponse);
        // console.log(stripeResponse);
      } catch (error) {
        console.error("Error fetching data from stripe", error);
      }
    };
    fetchAllStripeProducts();
  }, []);

  return (
    <section id="shop" className="shop-container">
      <div className="shop-grid-container">
        <div className="shop-image-container">
          {products.map((item) => (
            <div id={item.id} className="shopCard">
              <h3>{item.name}</h3>
              <img src={item.images[0]} alt={item.name} />
              <p>{item.description}</p>
              <form
                action="http://localhost:3000/create-checkout-session"
                method="POST"
              >
                <button className="shop-price-btn" type="submit">
                  Buy for £{item.metadata.client_side_price}
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;

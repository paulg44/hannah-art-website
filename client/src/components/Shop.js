import { Container } from "react-bootstrap";
import "../css/shop.css";
import { useEffect, useState } from "react";

function Shop() {
  const [products, setProducts] = useState([]);

  const base_url = process.env.REACT_APP_RENDER_URL;
  console.log("BASE URL", base_url);

  useEffect(() => {
    const fetchAllStripeProducts = async () => {
      try {
        const stripeResponse = await fetch(
          `https://hannah-art-website.onrender.com/all-stripe-products`,
          {
            method: "GET",
            credentials: "include",
          }
        ).then((productData) => {
          return productData.json();
        });
        setProducts(stripeResponse);
        console.log(stripeResponse);
      } catch (error) {
        console.error("Error fetching data client side", error);
      }
    };
    fetchAllStripeProducts();
  }, [base_url]);

  async function handleCheckout(price_id) {
    try {
      const checkoutResponse = await fetch(
        `https://hannah-art-website.onrender.com/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            price_id,
          }),
        }
      );

      const session = await checkoutResponse.json();
      if (session.url) {
        window.location.href = session.url;
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <Container fluid>
      <section id="shop" className="shop-container">
        <div className="shop-grid-container">
          <div className="shop-image-container">
            {products.map((item) => (
              <div key={item.id} className="shopCard">
                <h3>{item.name}</h3>
                <img src={item.images[0]} alt={item.name} />
                <p>{item.description}</p>

                <button
                  className="shop-price-btn"
                  type="submit"
                  onClick={() => handleCheckout(item.default_price)}
                >
                  Buy for £{item.metadata.client_side_price}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Shop;

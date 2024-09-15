import "../css/shop.css";
// import artData from "../assets/utils/art.json";
import asian from "../assets/images/asian_hannah.jpg";
import clown from "../assets/images/clown_hannah.jpg";
import duck from "../assets/images/duck_hannah.jpg";
import batman from "../assets/images/from_batman_hannah.jpg";
import god from "../assets/images/god_hannah.jpg";
import harley from "../assets/images/harley_hannah.jpg";
import horse from "../assets/images/horse_hannah.jpg";
import horse2 from "../assets/images/horse2_hannah.jpg";
import lionKing from "../assets/images/lion_king_hannah.jpg";
import lionKing2 from "../assets/images/lion_king2_hannah.jpg";
import love from "../assets/images/love_hannah.jpg";
import man from "../assets/images/man_hannah.jpg";
import picasso from "../assets/images/picasso_hannah.jpg";
import rhianna from "../assets/images/rhianna_hannah.jpg";
import tara from "../assets/images/tara_hannah.jpg";

// This may all be obsolete eventually as I've just thought I'll need to add each drawing asd a product on Stripe to be able to sell, so all this is redundant really

function Shop() {
  const art = [
    {
      id: 1,
      title: "test Title",
      description: "test",
      imageURL: `${asian}`,
      price: 199.99,
    },
    {
      id: 2,
      title: "test Title",
      imageURL: `${clown}`,
      description: "test",
      price: 199.99,
    },
    {
      id: 3,
      title: "test Title",
      imageURL: `${batman}`,
      description: "test",
      price: 199.99,
    },
    {
      id: 4,
      title: "test Title",
      imageURL: `${god}`,
      description: "test",
      price: 199.99,
    },
    {
      id: 5,
      title: "test Titl",
      imageURL: `${harley}`,
      description: "test",
      price: 199.99,
    },
    {
      id: 6,
      title: "test Title",
      imageURL: `${horse}`,
      description: "test",
      price: 199.99,
    },
    {
      id: 7,
      title: "test Titl",
      imageURL: `${horse2}`,
      description: "test",
      price: 199.99,
    },
    {
      id: 8,
      title: "test Title",
      imageURL: `${lionKing}`,
      description: "test",
      price: 199.99,
    },
    {
      id: 9,
      title: "test Title",
      imageURL: `${lionKing2}`,
      description: "test",
      price: 199.99,
    },
    {
      id: 10,
      title: "test Title",
      imageURL: `${love}`,
      description: "test",
      price: 199.99,
    },
    {
      id: 11,
      title: "test Title",
      imageURL: `${man}`,
      description: "test",
      price: 199.99,
    },
    {
      id: 12,
      title: "test Title",
      imageURL: `${picasso}`,
      description: "test",
      price: 199.99,
    },
    {
      id: 13,
      title: "test Title",
      imageURL: `${rhianna}`,
      description: "test",
      price: 199.99,
    },
    {
      id: 14,
      title: "test Title",
      imageURL: `${tara}`,
      description: "test",
      price: 199.99,
    },
    {
      id: 15,
      title: "test Title",
      imageURL: `${duck}`,
      description: "test",
      price: 199.99,
    },
  ];
  return (
    <section id="shop" className="shop-container">
      <div className="shop-grid-container">
        <i className="fa-solid fa-arrow-left fa-2x"></i>
        <div className="shop-image-container">
          {art.map((art) => (
            <div key={art.id} className="shop-card">
              <h2>{art.title}</h2>
              <img src={art.imageURL} alt="blank for now" />
              <p>{art.description}</p>
              <p>£{art.price}</p>
            </div>
          ))}
        </div>
        <i className="fa-solid fa-arrow-right fa-2x"></i>
      </div>
    </section>
  );
}

export default Shop;

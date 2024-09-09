const data = [
  {
    id: 1,
    title: "test Title",
    imageURL: "./assets/images/asian_hannah.jpg",
    description: "test",
    price: 199.99,
  },
  {
    id: 2,
    title: "test Title",
    imageURL: "./assets/images/clown_hannah.jpg",
    description: "test",
    price: 199.99,
  },
  {
    id: 3,
    title: "test Title",
    imageURL: "./assets/images/duck_hannah.jpg",
    description: "test",
    price: 199.99,
  },
  {
    id: 4,
    title: "test Title",
    imageURL: "./assets/images/from_batman_hannah.jpg",
    description: "test",
    price: 199.99,
  },
  {
    id: 5,
    title: "test Title",
    imageURL: "./assets/images/god_hannah.jpg",
    description: "test",
    price: 199.99,
  },
  {
    id: 6,
    title: "test Title",
    imageURL: "./assets/images/harley_hannah.jpg",
    description: "test",
    price: 199.99,
  },
  {
    id: 7,
    title: "test Title",
    imageURL: "./assets/images/horse_hannah.jpg",
    description: "test",
    price: 199.99,
  },
  {
    id: 8,
    title: "test Title",
    imageURL: "./assets/images/horse2_hannah.jpg",
    description: "test",
    price: 199.99,
  },
  {
    id: 9,
    title: "test Title",
    imageURL: "./assets/images/lion_king_hannah.jpg",
    description: "test",
    price: 199.99,
  },
  {
    id: 10,
    title: "test Title",
    imageURL: "./assets/images/lion_king2_hannah.jpg",
    description: "test",
    price: 199.99,
  },
  {
    id: 11,
    title: "test Title",
    imageURL: "./assets/images/love_hannah.jpg",
    description: "test",
    price: 199.99,
  },
  {
    id: 12,
    title: "test Title",
    imageURL: "./assets/images/man_hannah.jpg",
    description: "test",
    price: 199.99,
  },
  {
    id: 13,
    title: "test Title",
    imageURL: "./assets/images/picasso_hannah.jpg",
    description: "test",
    price: 199.99,
  },
  {
    id: 14,
    title: "test Title",
    imageURL: "./assets/images/rhianna_hannah.jpg",
    description: "test",
    price: 199.99,
  },
  {
    id: 15,
    title: "test Title",
    imageURL: "./assets/images/tara_hannah.jpg",
    description: "test",
    price: 199.99,
  },
];

const imageContainer = document.querySelector(".shop-image-container");

data.forEach((item) => {
  const shopCard = document.createElement("div");
  shopCard.className = "shop-card";

  const shopCardTitle = document.createElement("h2");
  shopCardTitle.innerHTML = item.title;

  const shopCardImg = document.createElement("img");
  shopCardImg.src = item.imageURL;
  shopCardImg.alt = "test";

  const shopCardDescription = document.createElement("p");
  shopCardDescription.innerHTML = item.description;

  const shopCardPrice = document.createElement("p");
  shopCardPrice.className = "shop-price-btn";
  shopCardPrice.innerHTML = `£${item.price}`;

  imageContainer.appendChild(shopCard);

  shopCard.appendChild(shopCardTitle);
  shopCard.appendChild(shopCardImg);
  shopCard.appendChild(shopCardDescription);
  shopCard.appendChild(shopCardPrice);
});

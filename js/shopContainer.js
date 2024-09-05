const data = [
  {
    id: 1,
    imageURL: "./assets/images/asian_hannah.jpg",
    description: "",
    price: 199.99,
  },
  {
    id: 2,
    imageURL: "../assets/images/",
    description: "",
    price: 199.99,
  },
  {
    id: 3,
    imageURL: "../assets/images/",
    description: "",
    price: 199.99,
  },
  {
    id: 4,
    imageURL: "../assets/images/",
    description: "",
    price: 199.99,
  },
  {
    id: 5,
    imageURL: "../assets/images/",
    description: "",
    price: 199.99,
  },
  {
    id: 6,
    imageURL: "../assets/images/",
    description: "",
    price: 199.99,
  },
  {
    id: 7,
    imageURL: "../assets/images/",
    description: "",
    price: 199.99,
  },
  {
    id: 8,
    imageURL: "../assets/images/",
    description: "",
    price: 199.99,
  },
  {
    id: 9,
    imageURL: "../assets/images/",
    description: "",
    price: 199.99,
  },
  {
    id: 10,
    imageURL: "../assets/images/",
    description: "",
    price: 199.99,
  },
  {
    id: 11,
    imageURL: "../assets/images/",
    description: "",
    price: 199.99,
  },
  {
    id: 12,
    imageURL: "../assets/images/",
    description: "",
    price: 199.99,
  },
  {
    id: 13,
    imageURL: "../assets/images/",
    description: "",
    price: 199.99,
  },
  {
    id: 14,
    imageURL: "../assets/images/",
    description: "",
    price: 199.99,
  },
  {
    id: 15,
    imageURL: "../images/",
    description: "",
    price: 199.99,
  },
];

const imageContainer = document.querySelector(".shop-image-container");

data.forEach((item) => {
  const shopCard = document.createElement("div");
  shopCard.className = "shop-card";

  const shopImg = document.createElement("img");
  shopImg.src = item.imageURL;
  shopImg.alt = "test";

  const idTest = document.createElement("p");
  idTest.innerText = item.id;

  imageContainer.appendChild(shopCard);

  shopCard.appendChild(idTest);
  shopCard.appendChild(shopImg);
});

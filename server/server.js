import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import stripe from "stripe";

dotenv.config();

const Stripe = new stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);

const app = express();

const PORT = process.env.REACT_APP_PORT;

app.use(express.json());
app.use(cors());

app.post("/create-checkout-session", async (req, res) => {
  const session = await Stripe.checkout.sessions.create({
    success_url: "https://localhost:3000/",
    cancel_url: "https://localhost:3000/",
    line_items: [
      {
        price: process.env.REACT_APP_TEST_PRICE,
        quantity: 1,
      },
    ],
    mode: "payment",
  });

  res.redirect(303, session.url);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import stripe from "stripe";

dotenv.config();

const Stripe = new stripe(process.env.REACT_APP_STRIKE_SECRET_KEY);

const app = express();

const PORT = process.env.REACT_APP_PORT;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

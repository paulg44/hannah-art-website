import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import stripe from "stripe";

dotenv.config();

const Stripe = new stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);

const app = express();

const PORT = process.env.REACT_APP_PORT;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.options("*", cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { price_id } = req.body;

  try {
    const session = await Stripe.checkout.sessions.create({
      success_url:
        "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:3000/cancel",
      line_items: [
        {
          price: price_id,
          quantity: 1,
        },
      ],
      mode: "payment",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session", error);
    res.status(500).send("Error creating checkout session");
  }
});

app.get("/all-stripe-products", async (req, res) => {
  try {
    const products = await Stripe.products.list({
      limit: 10,
    });
    const prices = await Stripe.prices.list({ limit: 10 });

    const productsAndPrices = products.data.map((item) => {
      const itemPrice = prices.data.find(
        (price) => price.id === item.default_price
      );
      return {
        ...item,
        default_price: itemPrice ? itemPrice.id : null,
        metadata: {
          ...item.metadata,
          client_side_price: itemPrice
            ? (itemPrice.unit_amount / 100).toFixed(2)
            : "N/A",
        },
      };
    });

    res.json(productsAndPrices);
  } catch (error) {
    console.error("Error fetching data server side");
    res.status(500).send("Error fetching products in server");
  }
});

app.get("/success", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(
      req,
      query.session_id
    );
    const customer = await stripe.customers.retrieve(session.customer);
    res.json({
      message: `Thanks for your order, ${customer.name}!`,
      customerEmail: customer.email,
    });
  } catch (error) {
    console.error("Error retrieving the checkout session", error);
    res.status(500).send("Error processing the success response");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

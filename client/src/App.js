import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Homepage from "./components/Homepage.js";
import Shop from "./components/Shop.js";
import About from "./components/About.js";
import Contact from "./components/Conatct.js";
import Footer from "./components/Footer.js";
import Success from "./components/Success.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Homepage />
              <About />
              <Shop />
              <Contact />
            </>
          }
        />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

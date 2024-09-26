import Navbar from "./components/Navbar.js";
import Homepage from "./components/Homepage.js";
import Shop from "./components/Shop.js";
import About from "./components/About.js";
import Contact from "./components/Conatct.js";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <About />
      <Shop />
      <Contact />
    </div>
  );
}

export default App;

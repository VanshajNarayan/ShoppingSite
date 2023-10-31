import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/AboutFolder/About";
import Cart from "./Components/CartFolder/Cart";
import Contact from "./Components/ContactFolder/Contact";
import Home from "./Components/HomeFolder/Home";
import Navbar from "./Components/NavbarFolder/Navbar";
import Products from "./Components/ProductsFolder/Products";
import SingleProducts from "./Components/SingleProductFolder/SingleProducts";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singleProducts" element={<SingleProducts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
